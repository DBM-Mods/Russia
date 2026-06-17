module.exports = {
  name: 'Interaction Logger',
  displayName: 'Interaction Logger',
  isEvent: true,

  fields: [
    'Temp Variable Name (stores interaction log data object):',
    'Temp Variable Name (stores formatted interaction log text):',
  ],

  mod(DBM) {
    DBM.Events = DBM.Events || {};

    const { Actions, Bot } = DBM;
    const Mods = Actions.getMods();
    const moment = Mods.require('moment-timezone');
    const fs = require('fs');
    const path = require('path');

    const EVENT_NAME = 'Interaction Logger';
    const TIMEZONE = 'Europe/Moscow';
    const MAX_VALUE_LENGTH = 300;
    const MAX_DETAILS_LENGTH = 1500;
    const LOG_DIRECTORY = path.resolve(process.cwd(), 'logs');
    const SENSITIVE_FIELD_NAME = /(password|passwd|pass|token|secret|api.?key|authorization)/i;

    let logFileName = null;
    let logFilePath = null;
    let fileLoggingEnabled = true;

    function initializeLogFile() {
      try {
        fs.mkdirSync(LOG_DIRECTORY, { recursive: true });

        const startupMoment = moment().tz(TIMEZONE);
        logFileName = `${startupMoment.format('YYYY-MM-DD-HH-mm-ss')}.log`;
        logFilePath = path.join(LOG_DIRECTORY, logFileName);

        const fileAlreadyExists = fs.existsSync(logFilePath);
        const fileHasContent = fileAlreadyExists && fs.statSync(logFilePath).size > 0;

        // Флаг "a" создаёт файл, если его нет, и продолжает запись, если он уже существует.
        const fileDescriptor = fs.openSync(logFilePath, 'a');
        fs.closeSync(fileDescriptor);

        const startupLine =
          `[${startupMoment.format('DD.MM - HH:mm:ss')}] [СИСТЕМА] ` +
          `${fileAlreadyExists ? 'Продолжение записи в существующий журнал.' : 'Журнал взаимодействий создан.'}`;

        fs.appendFileSync(
          logFilePath,
          `${fileHasContent ? '\n' : ''}${startupLine}\n`,
          'utf8',
        );

        console.log(
          `[Interaction Logger] ${fileAlreadyExists ? 'Продолжена запись в файл:' : 'Создан файл журнала:'} ${logFilePath}`,
        );
      } catch (error) {
        fileLoggingEnabled = false;
        console.error(
          '[Interaction Logger] Не удалось включить запись в файл. Логирование в консоль продолжит работать:',
          error,
        );
      }
    }

    function appendLogLine(line) {
      if (!fileLoggingEnabled || !logFilePath) return;

      try {
        fs.appendFileSync(logFilePath, `${line}\n`, 'utf8');
      } catch (error) {
        fileLoggingEnabled = false;
        console.error(
          '[Interaction Logger] Ошибка записи в журнал. Файловое логирование отключено, консоль продолжит работать:',
          error,
        );
      }
    }

    function cleanText(value, maxLength = MAX_VALUE_LENGTH) {
      if (value === null || value === undefined) return '';

      let text;
      try {
        text = typeof value === 'string' ? value : String(value);
      } catch (_) {
        return '[не удалось прочитать значение]';
      }

      text = text
        .replace(/[\r\n\t]+/g, ' ')
        .replace(/\s{2,}/g, ' ')
        .trim();

      if (text.length > maxLength) {
        return `${text.slice(0, maxLength)}…`;
      }

      return text;
    }

    function getDisplayUser(interaction) {
      const user = interaction.user || interaction.member?.user || null;
      const username = user?.username || 'Неизвестный пользователь';
      const displayName = interaction.member?.displayName || interaction.member?.nickname || user?.globalName || username;

      return {
        object: user,
        id: user?.id || null,
        username,
        displayName,
        text: displayName !== username ? `${displayName} (@${username})` : username,
      };
    }

    function getServer(interaction) {
      const server = interaction.guild || null;
      return {
        object: server,
        id: server?.id || null,
        name: server?.name || 'Личные сообщения',
        text: server ? `${server.name} (${server.id})` : 'Личные сообщения',
      };
    }

    function getChannel(interaction) {
      const channel = interaction.channel || null;
      const channelName = channel?.name ? `#${channel.name}` : 'неизвестный канал';

      return {
        object: channel,
        id: channel?.id || interaction.channelId || null,
        name: channel?.name || null,
        text: channel?.id ? `${channelName} (${channel.id})` : channelName,
      };
    }

    function formatOption(option, path = []) {
      if (!option) return [];

      const currentPath = option.name ? path.concat(option.name) : path;
      if (Array.isArray(option.options) && option.options.length > 0) {
        return option.options.flatMap((child) => formatOption(child, currentPath));
      }

      const name = currentPath.join('.') || 'параметр';
      let value = option.value;

      if (option.user) value = `${option.user.username || option.user.id} (${option.user.id})`;
      else if (option.member?.user) value = `${option.member.user.username || option.member.user.id} (${option.member.user.id})`;
      else if (option.channel) value = `${option.channel.name || 'канал'} (${option.channel.id})`;
      else if (option.role) value = `${option.role.name || 'роль'} (${option.role.id})`;
      else if (option.attachment) value = option.attachment.url || option.attachment.name || option.attachment.id;

      return [`${name}: ${cleanText(value)}`];
    }

    function getCommandName(interaction) {
      let name = interaction.commandName || 'неизвестная команда';

      try {
        const group = interaction.options?.getSubcommandGroup?.(false);
        const subcommand = interaction.options?.getSubcommand?.(false);
        if (group) name += ` ${group}`;
        if (subcommand) name += ` ${subcommand}`;
      } catch (_) {
        // У команды может не быть подкоманд.
      }

      return name;
    }

    function getCommandOptions(interaction) {
      const options = interaction.options?.data;
      if (!Array.isArray(options) || options.length === 0) return [];
      return options.flatMap((option) => formatOption(option));
    }

    function getModalFields(interaction) {
      const result = [];
      const fields = interaction.fields?.fields;
      if (!fields) return result;

      try {
        fields.forEach((field, customId) => {
          const fieldName = customId || field?.customId || 'поле';
          const value = SENSITIVE_FIELD_NAME.test(fieldName)
            ? '[СКРЫТО]'
            : cleanText(field?.value ?? field);
          result.push(`${fieldName}: ${value}`);
        });
      } catch (_) {
        // Не ломаем обработчик, если структура modal-полей отличается.
      }

      return result;
    }

    function resolveInteraction(interaction) {
      let type = 'ВЗАИМОДЕЙСТВИЕ';
      let name = interaction.customId || interaction.commandName || 'неизвестно';
      let details = [];

      const isAutocomplete = interaction.isAutocomplete?.() === true;
      const isModal = interaction.isModalSubmit?.() === true;
      const isButton = interaction.isButton?.() === true;
      const isSelect =
        interaction.isAnySelectMenu?.() === true ||
        interaction.isStringSelectMenu?.() === true ||
        interaction.isSelectMenu?.() === true;
      const isContext =
        interaction.isContextMenuCommand?.() === true ||
        interaction.isContextMenu?.() === true;
      const isChatCommand =
        interaction.isChatInputCommand?.() === true ||
        (interaction.isCommand?.() === true && !isContext);

      if (isAutocomplete) {
        type = 'АВТОДОПОЛНЕНИЕ';
        name = `/${getCommandName(interaction)}`;
        const focused = interaction.options?.getFocused?.(true);
        if (focused?.name) details.push(`${focused.name}: ${cleanText(focused.value)}`);
      } else if (isModal) {
        type = 'ФОРМА';
        name = interaction.customId || 'неизвестная форма';
        details = getModalFields(interaction);
      } else if (isButton) {
        type = 'КНОПКА';
        name = interaction.customId || 'неизвестная кнопка';
        const label = interaction.component?.label;
        if (label) details.push(`название: ${cleanText(label)}`);
      } else if (isSelect) {
        type = 'МЕНЮ';
        name = interaction.customId || 'неизвестное меню';
        if (Array.isArray(interaction.values) && interaction.values.length > 0) {
          details.push(`выбрано: ${interaction.values.map((value) => cleanText(value)).join(', ')}`);
        }
      } else if (isContext) {
        type = interaction.isUserContextMenu?.() === true ? 'КОНТЕКСТ-ПОЛЬЗОВАТЕЛЬ' : 'КОНТЕКСТ-СООБЩЕНИЕ';
        name = interaction.commandName || 'неизвестная команда';
        if (interaction.targetId) details.push(`цель: ${interaction.targetId}`);
      } else if (isChatCommand) {
        type = 'SLASH';
        name = `/${getCommandName(interaction)}`;
        details = getCommandOptions(interaction);
      }

      return {
        type,
        name: cleanText(name),
        details: cleanText(details.join(' | '), MAX_DETAILS_LENGTH),
      };
    }

    DBM.Events.interactionLogger = function interactionLogger(interaction) {
      if (!Bot.$evts[EVENT_NAME]) return;

      try {
        const user = getDisplayUser(interaction);
        const server = getServer(interaction);
        const channel = getChannel(interaction);
        const resolved = resolveInteraction(interaction);
        const timestamp = moment().tz(TIMEZONE).format('DD.MM - HH:mm:ss');

        const actionText = `[${resolved.type}] ${resolved.name}${resolved.details ? ` | ${resolved.details}` : ''}`;
        const plainText = `[${timestamp}] ${user.text} -> ${actionText} (${server.text})`;

        console.log(
          `\x1b[37m[${timestamp}] \x1b[0m${user.text}\x1b[0m -> ` +
          `\x1b[95m${actionText}\x1b[90m (${server.text})\x1b[0m`,
        );

        appendLogLine(plainText);

        const logData = {
          timestamp,
          timezone: TIMEZONE,
          type: resolved.type,
          name: resolved.name,
          details: resolved.details,
          text: plainText,
          user: user.object,
          userId: user.id,
          username: user.username,
          displayName: user.displayName,
          server: server.object,
          serverId: server.id,
          serverName: server.name,
          channel: channel.object,
          channelId: channel.id,
          channelName: channel.name,
          logFileName,
          logFilePath,
          interaction,
        };

        for (const event of Bot.$evts[EVENT_NAME]) {
          const temp = {};
          if (event.temp) temp[event.temp] = logData;
          if (event.temp2) temp[event.temp2] = plainText;
          Actions.invokeEvent(event, server.object, temp);
        }
      } catch (error) {
        console.error('[Interaction Logger] Ошибка обработки взаимодействия:', error);
      }
    };

    const { onReady } = Bot;
    Bot.onReady = function interactionLoggerOnReady(...params) {
      if (Bot.$evts[EVENT_NAME] && !DBM.Events.interactionLoggerRegistered) {
        DBM.Events.interactionLoggerRegistered = true;
        initializeLogFile();
        Bot.bot.on('interactionCreate', DBM.Events.interactionLogger);
        console.log('[Interaction Logger] Логирование взаимодействий включено.');
      }

      onReady.apply(this, params);
    };
  },
};
