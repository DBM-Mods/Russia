module.exports = {

  name: "Store Server Info MOD",
  section: "Server Control",
  meta: {
    version: '2.1.6',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]<br>[Tempest - 321400509326032897]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {
    const info = [
      "Сервер (объект)",
      "(ID) Идентификатор сервера",
      "Имя сервера",
      "Аббревиатура имени сервера",
      "Сервер любимый язык",
      "Значок сервера URL",
      "Уровень проверки сервера",
      "Серверный стандартный канал",
      "Сервер AFK -канал",
      "Серверный системный канал",
      "Стандартная позиция сервера",
      "Владелец сервера (объект)",
      "Серверный бот",
      "Список каналов сервера",
      "Список ролей сервера",
      "Список юзеров сервера",
      "Список эмоджи сервера",
      "Участники сервера учитываются",
      "Количество участников сервера",
      "Тайм - аут сервера AFK",
      "Доступный сервер",
      "Большой сервер",
      "Сервер подключен в",
      "Количество каналов сервера",
      "Сервер эмодзис подсчет",
      "Включено включение сервера",
      "Количество занятых участников сервера",
      "Количество участников онлайн-сервера",
      "Подсчет участников сервера в автономном режиме",
      "Количество бездействующих участников сервера",
      "Количество ботов сервера",
      "Список (ID) идентификаторов каналов сервера",
      "Список (ID) идентификаторов должностей сервера",
      "Список (ID) идентификаторов участников сервера",
      "",
      "Человеческий подсчет сервера",
      "",
      "Подсчет должностей сервера",
      "Количество текстовых каналов сервера",
      "Количество голосовых каналов сервера",
      "Проверенный сервер",
      "Список заблокированных на сервере",
      "Список приглашений сервера",
      "Фильтр явного содержимого сервера",
      "Подсчет бустеров сервера",
      "Уровень повышения сервера",
      "URL адрес баннера сервера",
      "Список ресурсов сервера",
      "Идентификатор владельца сервера",
      "Код url сервера тщеславия",
      "(ID) Идентификатор канала виджета сервера",
      "Сервер AFK (ID) идентификатор канала",
      "Включить индикатор выполнения сервера",
      "Описание сервера",
      "Партнерский сервер",
      "Правила сервера канал",
      "(ID) Идентификатор канала правила сервера",
      "Канал виджета сервера",
      "(ID) Идентификатор канала сервера",
      "Уровень сервера NSFW",
      "Сервер MFA/2FA",
      "Отметка времени сервера",
      "URL сделать шаблоном",
      "Сделать шаблон код",
      "Имя Шаблона",
      "Описание шаблона",
      "Время использования шаблона",
      "Шаблон создатель (ID) идентификатор",
      "(Timestamp) Временная метка создания шаблона",
      "(Timestamp) Временная метка обновления шаблона",
      "Всего участников без голосового канала",
      "Список участников по (ID) идентификатору, присутствующие в голосовых каналах",
      "Список участников, присутствующих в голосовых каналах",
      "Список текстовых каналов сервера",
      "Список (ID) идентификаторов текстовых каналов сервера",
      "Список голосовых каналов сервера",
      "Список (ID) идентификаторов серверных голосовых каналов",
      "Список категорий сервера",
      "Список (ID) идентификаторов категории сервера",
      "Сервер Ботов Список",
      "Список (ID) идентификаторов сервера ботов",
    ];
    return `${presets.getServerText(data.server, data.varName)} - ${info[parseInt(data.info, 10)]}`;
  },

  variableStorage(data, varType) {
    const type = parseInt(data.storage, 10);
    if (type !== varType) return;
    const info = parseInt(data.info, 10);
    let dataType = "Unknown Type";
    switch (info) {
      case 0:
        dataType = "Server";
        break;
      case 1:
        dataType = "Server ID";
        break;
      case 2:
      case 3:
      case 4:
        dataType = "Text";
        break;
      case 5:
        dataType = "Icon URL";
        break;
      case 6:
        dataType = "Text";
        break;
      case 7:
      case 8:
      case 9:
        dataType = "Channel";
        break;
      case 10:
        dataType = "Role";
        break;
      case 11:
        dataType = "Server Member";
        break;
      case 12:
        dataType = "Server Member";
        break;
      case 13:
        dataType = "Channels List";
        break;
      case 14:
        dataType = "Roles List";
        break;
      case 15:
        dataType = "Members List";
        break;
      case 16:
        dataType = "Emojis List";
        break;
      case 17:
        dataType = "Number";
        break;
      case 18:
        dataType = "Date";
        break;
      case 19:
        dataType = "Number";
        break;
      case 20:
      case 21:
        dataType = "Boolean";
        break;
      case 22:
        dataType = "Date";
        break;
      case 23:
      case 24:
        dataType = "Number";
        break;
      case 25:
        dataType = "Boolean";
        break;
      case 26:
      case 27:
      case 28:
      case 29:
      case 30:
        dataType = "Number";
        break;
      case 31:
      case 32:
      case 33:
        dataType = "IDs List";
        break;
      case 35:
        dataType = "Number";
        break;
      case 37:
      case 38:
      case 39:
        dataType = "Number";
        break;
      case 40:
        dataType = "Boolean";
        break;
      case 41:
        dataType = "Bans List";
        break;
      case 42:
        dataType = "Invites List";
        break;
      case 43:
        dataType = "Text";
        break;
      case 44:
      case 45:
        dataType = "Number";
        break;
      case 46:
        dataType = "Banner URL";
        break;
      case 47:
        dataType = "Server Features List";
        break;
      case 48:
      case 49:
        dataType = "Text";
        break;
      case 50:
      case 51:
        dataType = "Channel ID";
        break;
      case 52:
        dataType = "Boolean";
        break;
      case 53:
        dataType = "Text";
        break;
      case 54:
        dataType = "Boolean";
        break;
      case 55:
        dataType = "Channel";
        break;
      case 56:
        dataType = "Channel ID";
        break;
      case 57:
        dataType = "Channel";
        break;
      case 58:
        dataType = "Channel ID";
        break;
      case 59:
      case 60:
        dataType = "Text";
        break;
      case 61:
        dataType = "Timestamp";
        break;
      case 62:
        dataType = "URL";
        break;
      case 63:
        dataType = "Code";
        break;
      case 64:
        dataType = "Text";
        break;
      case 65:
        dataType = "Text";
        break;
      case 66:
        dataType = "Number";
        break;
      case 67:
        dataType = "ID User";
        break;
      case 68:
        dataType = "Timestamp";
        break;
      case 69:
        dataType = "Timestamp";
        break;
      case 70:
        dataType = "Number";
        break;
      case 71:
        dataType = "List";
        break;
      case 72:
        dataType = "List";
        break;
      case 73:
        dataType = "List";
        break;
      case 74:
        dataType = "List";
        break;
      case 75:
        dataType = "List";
        break;
      case 76:
        dataType = "List";
        break;
      case 77:
        dataType = "List";
        break;
      case 78:
        dataType = "List";
        break;

    }
    return [data.varName2, dataType];
  },



  fields: ["server", "varName", "info", "storage", "varName2"],



  html(isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Versão 1.3</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>

<server-input dropdownLabel="Servidor" selectId="server" variableContainerId="varNameContainer" variableInputId="varName"></server-input>

<br><br><br>

<div>
	<div style="padding-top: 8px; width: 100%;">
		<span class="dbminputlabel">Информация</span><br>
		<select id="info" class="round">
      <optgroup label="Общая информация о сервере">
      <option value="0">Сервер (объект)</options>
      <option value="1">(ID) Идентификатор сервера</options>
      <option value="2">Имя сервера</options>
      <option value="3">Имя сервера аббревиатура</options>
      <option value="53">Описание сервера</options>
      <option value="5">Значок сервера URL</options>
      <option value="7">Серверный стандартный канал</options>
      <option value="58">(ID) Идентификатор канала сервера</options>
      <option value="9">Серверный системный канал</options>
      <option value="21">Большой сервер</options>
      <option value="43">Сервер явное фильтр контента</options>
      <option value="10">Стандартная позиция сервера</options>
      <option value="12">Серверный бот</options>
      <option value="20">Доступный сервер</options>
      </optgroup>
      <optgroup label="Информация о сервере AFK">
      <option value="8">Канал AFK сервера</options>
      <option value="51">Сервер AFK (ID) идентификатор канала</options>
      <option value="19">Сервер AFK время</options>
      </optgroup>
      <optgroup label="Информация о бустере сервера">
      <option value="44">Подсчет бустеров сервера</options>
      <option value="45">Уровень бустера сервера</options>
      </optgroup>
      <optgroup label="Количество на сервере">
      <option value="17">Количество участников сервера</options>
      <option value="35">Количество участников (без ботов) сервера</options>
      <option value="30">Количество ботов сервера</options>
      <option value="24">Количество эмоджи на сервере</options>
      <option value="37">Количество ролей сервера</options>
      <option value="23">Количество каналов сервера</options>
      <option value="38">Количество текстовых каналов сервера</options>
      <option value="39">Количество голосовых каналов сервера</options>
      <option value="70">Всего участников по голосовым каналам</options>
      </optgroup>
      <optgroup label="Информация о сообществе сервера"">
      <option value="54">Сервер в партнерстве</options>
      <option value="55">Правила сервера канал</options>
      <option value="56">(ID) Идентификатор канала правила сервера</options>
      <option value="4">Предпочтительный язык сервера</options>
      <option value="40">Проверенный сервер</options>
      <option value="52">Активированный панель прогресса на сервере премиум -класса</options>
      <option value="46">URL дрес баннера сервера</options>
      <option value="47">Список функций сервера</options>
      <option value="49">Пользовательский URL -код сервера</options>
      <option value="57">Канал виджета сервера</options>
      <option value="50">(ID) Идентификатор канала виджета сервера</options>
      <option value="25">Включение активированного сервера</options>
      </optgroup>
      <optgroup label="Информация о датах сервера">
      <option value="61">(Timestamp) Отметка времени сервера</options>
      <option value="18">Сервер создан в</options>
      <option value="22">Сервер подключен к</options>
      </optgroup>
      <optgroup label="Уровни сервера">
      <option value="59">Уровень сервера NSFW</options>
      <option value="6">Уровень проверки сервера</options>
      <option value="60">Сервер MFA/2FA</options>
      </optgroup>
      <optgroup label="Информация о сервере в списках">
      <option value="15">Список юзеров сервера</options>
      <option value="33">Список (ID) идентификации юзеров сервера</options>
      <option value="79">Сервер Ботов Список</options>
      <option value="80">Список (ID) идентификаторов сервера ботов</options>
      <option value="77">Список категорий сервера</options>
      <option value="78">Список (ID) идентификаторов категорий сервера</options>
      <option value="13">Список каналов сервера</options>
      <option value="31">Список (ID) идентификаторов канала сервера</options>
      <option value="73">Список текстовых каналов сервера</options>
      <option value="74">Список (ID) идентификаторов текстовых каналов сервера</options>
      <option value="75">Список голосовых каналов сервера</options>
      <option value="76">Список (ID) идентификаторов серверных голосовых каналов</options>
      <option value="16">Список эмоджи сервера</options>
      <option value="14">Список позиций сервера</options>
      <option value="32">Список (ID) идентификаторов функций сервера</options>
      <option value="41">Сервер забаненых список</options>
      <option value="42">Список приглашений на сервер</options>
      <option value="71">Список участников по (ID) идентификатору, присутствующие в голосовых каналах</options>
      <option value="72">Список участников, присутствующих в голосовых каналах</options>
      </optgroup>
      <optgroup label="Информация владельца сервера">
      <option value="48">(ID) Идентификатор владельца сервера</options>
      <option value="11">Владелец сервера (объект)</options>
      </optgroup>
      <optgroup label="Количество участников в статусов сервера">
      <option value="27">Количество участников онлайн-сервера</options>
      <option value="29">Подсчет неактивных участников сервера</options>
      <option value="26">Подсчет занятых участников сервера</options>
      <option value="28">Подсчет участников сервера в автономном режиме</options>
      </optgroup>
      <optgroup label="Шаблон сервера">
      <option value="62">URL шаблона</options>
      <option value="63">Сделать шаблон код</options>
      <option value="64">Имя Шаблона</options>
      <option value="65">Описание шаблона</options>
      <option value="66">(Timestamp) Время использования шаблона</options>
      <option value="67">Шаблон создатель (ID) идентификатор</options>
      <option value="68">(Timestamp) Временная метка создания шаблона</options>
      <option value="69">(Timestamp) обновления шаблона</options>
      </optgroup>
		</select>
	</div>
</div>

<br>

<store-in-variable dropdownLabel="Хранить в" selectId="storage" variableContainerId="varNameContainer2" variableInputId="varName2"></store-in-variable>`;
  },

  init() { },

  async action(cache) {
    const data = cache.actions[cache.index];
    const targetServer = await this.getServerFromData(data.server, data.varName, cache);

    if (!targetServer) {
      return this.callNextAction(cache);
    }

    const fetchMembers = async (withPresences = false) => {
      if (targetServer.memberCount !== targetServer.members.cache.size) {
        await targetServer.members.fetch({ withPresences });
      }
    }

    const info = parseInt(data.info, 10);

    let result;
    switch (info) {
      case 0:
        result = targetServer;
        break;
      case 1:
        result = targetServer.id;
        break;
      case 2:
        result = targetServer.name;
        break;
      case 3:
        result = targetServer.nameAcronym;
        break;
      case 4:
        result = targetServer.preferredLocale;
        break;
      case 5:
        result = targetServer.iconURL({ dynamic: true, format: "png", size: 4096 });
        break;
      case 6:
        result = targetServer.verificationLevel;
        break;
      case 7:
        result = targetServer.getDefaultChannel();
        break;
      case 8:
        result = targetServer.afkChannel;
        break;
      case 9:
        result = targetServer.systemChannel;
        break;
      case 10:
        result = targetServer.roles.resolve(targetServer.id);
        break;
      case 11:
        result = await targetServer.fetchOwner();
        break;
      case 12:
        result = targetServer.members.me;
        break;
      case 13:
        result = [...targetServer.channels.cache.values()];
        break;
      case 14:
        result = [...targetServer.roles.cache.values()];
        break;
      case 15:
        result = [...targetServer.members.cache.values()];
        break;
      case 16:
        result = [...targetServer.emojis.cache.values()];
        break;
      case 17:
        result = targetServer.memberCount;
        break;
      case 18:
        result = targetServer.createdAt;
        break;
      case 19:
        result = targetServer.afkTimeout ?? 0;
        break;
      case 20:
        result = targetServer.available;
        break;
      case 21:
        result = targetServer.large;
        break;
      case 22:
        result = targetServer.joinedAt;
        break;
      case 23:
        result = targetServer.channels.cache.size;
        break;
      case 24:
        result = targetServer.emojis.cache.size;
        break;
      case 25:
        result = !!targetServer.widgetEnabled;
        break;
      case 26:
        await fetchMembers(true);
        result = targetServer.members.cache.filter((m) => m.presence?.status === "dnd").size;
        break;
      case 27:
        await fetchMembers(true);
        result = targetServer.members.cache.filter((m) => m.presence?.status === "online").size;
        break;
      case 28:
        await fetchMembers(true);
        result = targetServer.members.cache.filter((m) => m.presence?.status === "offline").size;
        break;
      case 29:
        await fetchMembers(true);
        result = targetServer.members.cache.filter((m) => m.presence?.status === "idle").size;
        break;
      case 30:
        result = targetServer.members.cache.filter((m) => m.user?.bot).size;
        break;
      case 31:
        result = [...targetServer.channels.cache.keys()];
        break;
      case 32:
        result = [...targetServer.roles.cache.keys()];
        break;
      case 33:
        await fetchMembers();
        result = [...targetServer.members.cache.keys()];
        break;
      case 35:
        await fetchMembers();
        result = targetServer.members.cache.filter((m) => !m.user?.bot).size;
        break;
      case 37:
        result = targetServer.roles.cache.size;
        break;
      case 38:
        result = targetServer.channels.cache.filter((c) => c.type === "GUILD_TEXT" || c.type === "GUILD_NEWS").size;
        break;
      case 39:
        result = targetServer.channels.cache.filter((c) => c.type === "GUILD_VOICE").size;
        break;
      case 40:
        result = targetServer.verified;
        break;
      case 41:
        const bans = await targetServer.bans.fetch();
        result = [...bans.values()];
        break;
      case 42:
        const invites = await targetServer.invites.fetch();
        result = [...invites.values()];
        break;
      case 43:
        result = targetServer.explicitContentFilter;
        break;
      case 44:
        result = targetServer.premiumSubscriptionCount ?? 0;
        break;
      case 45:
        result = targetServer.premiumTier;
        break;
      case 46:
        result = targetServer.bannerURL({ format: "png", size: 4096 });
        break;
      case 47:
        result = targetServer.features;
        break;
      case 48:
        result = targetServer.ownerId;
        break;
      case 49:
        result = targetServer.vanityURLCode;
        break;
      case 50:
        result = targetServer.widgetChannelId;
        break;
      case 51:
        result = targetServer.afkChannelId;
        break;
      case 52:
        result = targetServer.premiumProgressBarEnabled;
        break;
      case 53:
        result = targetServer.description;
        break;
      case 54:
        result = targetServer.partnered;
        break;
      case 55:
        result = targetServer.rulesChannel;
        break;
      case 56:
        result = targetServer.rulesChannelId;
        break;
      case 57:
        result = targetServer.widgetChannel;
        break;
      case 58:
        result = targetServer.systemChannelId;
        break;
      case 59:
        result = targetServer.nsfwLevel;
        break;
      case 60:
        result = targetServer.mfaLevel;
        break;
      case 61:
        result = targetServer.createdTimestamp;
        break;
      case 62:
        result = `https://discord.new/${(await targetServer.fetchTemplates()).map(v => v.code)}`;
        break;
      case 63:
        result = `${(await targetServer.fetchTemplates()).map(v => v.code)}`;
        break;
      case 64:
        result = `${(await targetServer.fetchTemplates()).map(v => v.name)}`;
        break;
      case 65:
        result = `${(await targetServer.fetchTemplates()).map(v => v.description)}`;
        break;
      case 66:
        result = `${(await targetServer.fetchTemplates()).map(v => v.usageCount)}`;
        break;
      case 67:
        result = `${(await targetServer.fetchTemplates()).map(v => v.creatorId)}`;
        break;
      case 68:
        result = `${(await targetServer.fetchTemplates()).map(v => v.createdAt)}`;
        break;
      case 69:
        result = `${(await targetServer.fetchTemplates()).map(v => v.updatedAt)}`;
        break;
      case 70:
        result = targetServer.channels.cache.filter(c => c.type === 'GUILD_VOICE').map(c => c.members.size).reduce((s, a) => s + a, 0);
        break;
      case 71:
        const str = targetServer.channels.cache.filter(c => c.type === 'GUILD_VOICE').map(c => c.members.map(member => member.user.id + ',').join('')).join('');
        result = str.substring(0, str.length - 1).split(new RegExp(","));
        break;
      case 72:
        let channels = targetServer.channels.cache.filter((c) => c.type === "GUILD_VOICE");
        let members = new Array();

        for (const [channelID, channel] of channels) {
          for (const [memberID, member] of channel.members) {
            members.push(member);
          }
        }

        result = members;
        break;
      case 73:
        result = targetServer.channels.cache.filter((c) => ["GUILD_TEXT", "GUILD_NEWS"].includes(c.type)).map(channels => channels);
        break;
      case 74:
        result = targetServer.channels.cache.filter((c) => ["GUILD_TEXT", "GUILD_NEWS"].includes(c.type)).map(channels => channels.id);
        break;
      case 75:
        result = targetServer.channels.cache.filter((c) => c.type === "GUILD_VOICE").map(channels => channels);
        break;
      case 76:
        result = targetServer.channels.cache.filter((c) => c.type === "GUILD_VOICE").map(channels => channels.id);
        break;
      case 77:
        result = targetServer.channels.cache.filter((c) => c.type === "GUILD_CATEGORY").map(channels => channels);
        break;
      case 78:
        result = targetServer.channels.cache.filter((c) => c.type === "GUILD_CATEGORY").map(channels => channels.id);
        break;
      case 79:
        result = targetServer.members.cache.filter((m) => m.user?.bot).map((m) => m);
        break;
      case 80:
        result = targetServer.members.cache.filter((m) => m.user?.bot).map((m) => m.id);
        break;
      default:
        break;
    }
    if (result !== undefined) {
      const storage = parseInt(data.storage, 10);
      const varName2 = this.evalMessage(data.varName2, cache);
      this.storeValue(result, storage, varName2, cache);
    }
    this.callNextAction(cache);
  },



  mod() { },
};
