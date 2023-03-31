module.exports = {
  name: 'Store Bot Client Info MOD',
  section: 'Bot Client Control',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[Snull - 612775910449610763]<br>[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {

    if (data.descriptionx == true) {
      desccor = data.descriptioncolor
    } else {
      desccor = 'none'
    }

    const storage = presets.variables;

    const info = [
      'Время активности в миллисекундах',
      'Готов?',
      'Пинг',
      'Количество серверов',
      'Количество пользователей',
      'Округлый пинг',
      'Время активности в секундах',
      'Время активности за считанные минуты',
      "Токен ботов",
      'Значение голосовых подключений',
      'Общее количество каналов',
      'Общее количество эмоджи',
      'Этот вариант был удален',
      'Время активности в дни',
      'Время активности в дни (округленное)',
      'Использование памяти (ОЗУ)',
      'Объекты серверов ботов',
      'Имена серверов ботов',
      'Идентификаторы гильдий ботов',
      'Префикс текущего бота',
      'Идентификатор клиента бота',
      'Версия Discord JS',
      'Время активности в часы',
      'Обновление времени активности в дни',
      'Обновление времени активности в часы',
      'Обновление времени активности за считанные минуты',
      'Обновление времени активности в секундах',
      'Использование памяти (ОЗУ) в МБ',
      "Ботов (платформа процесса)",
      'Использование процессора в МБ',
      "Каталог ботов",
      'Версия узла JS',
      'Общее количество команд',
      'Общее количество событий',
      'Готов? [timestamp]',
      'Количество ядер ЦП',
      'Общая память (ГБ)',
      'Общая память (MB)',
      'Доступная память (ГБ)',
      'Доступная память (MB)',
      'Доступная память (%)',
      'Используется память (ГБ)',
      'Используется память (MB)',
      'Использовалась память (%)',
      'Идентификатор владельца бота',
      'Команды дифференцируют верхний регистр от нижнего регистра?',
      'Последнее идентификатор сообщения',
      'Среднее использование процессора в % (1 минута, 5 минут, 15 минут)',
      'Среднее использование процессора за последние 60 секунд',
      'Время активности в секундах',
      'Текущее использование процессора в %',
      'Использование памяти (ОЗУ) округлена',
      'Бесплатный процессор в %',
      'Скорость процессора в ГГц',
    ];

    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">${info[parseInt(data.info, 10)]} - ${storage[parseInt(data.storage, 10)]} (${data.varName2})</font>`
  },

  variableStorage(data, varType) {
    if (parseInt(data.storage, 10) !== varType) return;
    let dataType = 'Текст';
    switch (parseInt(data.info, 10)) {
      case 0: // Uptime in Milliseconds
      case 22: // Uptime in Hours
      case 27: // Memory (RAM) Usage in MB
      case 29: // CPU Usage in MB
      case 32: // Amount of Commands
      case 33: // Amount of Events
      case 34: // Ready At ? [Timestamp]
      case 35: // CPU Core Amount
      case 36: // Total Memory (GB)
      case 37: // Total Memory (MB)
      case 38: // Available Memory (GB)
      case 39: // Available Memory (MB)
      case 40: // Available Memory (%)
      case 41: // Used Memory (GB)
      case 42: // Used Memory (MB)
      case 43: // Used Memory (%)
      case 48: // CPU Usage (%)
      case 2: // Ping
      case 3: // Guild Amount
      case 4: // User Amount
      case 5: // Rounded Ping
      case 6: // Uptime in Seconds
      case 7: // Uptime in Minutes
      case 9: // Voice Connections Amount
      case 10: // Total Amount of Channels
      case 11: // Total Amount of Emojis
      case 15: // Memory (Ram) Usage
        dataType = 'Число';
        break;
      case 1: // Ready At
        dataType = 'Данные';
        break;
      case 8: // Bots' Token
        dataType = 'Токен';
        break;
      case 16: // Bot Guilds Objects
        dataType = 'Объект';
        break;
      case 17: // Bot Guilds Names
        dataType = 'Текст';
        break;
      case 18: // Bot Guilds IDs
        dataType = 'ИДЕНТИФИКАТОР';
        break;
      case 19: // Bot Current Prefix
        dataType = 'Текст';
        break;
      case 20: // Bot Client ID
        dataType = 'ИДЕНТИФИКАТОР';
        break;
      case 13: // Uptime in Days
      case 14: // Uptime in Days (Rounded)
      case 23: // Refreshing Uptime in Days
      case 24: // Refreshing Uptime in Hours
      case 25: // Refreshing Uptime in Minutes
      case 26: // Refreshing Uptime in Seconds
        dataType = 'Число';
        break;
      case 28: // Bots' OS (Process Platform)
        dataType = 'Текст';
        break;
      case 30: // Bots' Directory
        dataType = 'Текст';
        break;
      case 21: // Discord JS Version
      case 31: // Node JS Version
        dataType = 'Число';
        break;
      case 44: // Bot Owner ID
        dataType = 'ИДЕНТИФИКАТОР';
        break;
      case 45:
        dataType = 'Логический';
        break;
      case 46:
        dataType = 'ИДЕНТИФИКАТОР';
        break;
      case 47:
        dataType = 'Список';
        break;
      case 48:
        dataType = 'Число';
        break;
      case 49:
        dataType = 'Число';
        break;
      case 50:
        dataType = 'Число';
        break;
      case 51:
        dataType = 'Число';
        break;
      case 52:
        dataType = 'Число';
        break;
      case 53:
        dataType = 'Число';
        break;
    }
    return [data.varName2, dataType];
  },

  fields: ['info', 'storage', 'varName2', 'descriptioncolor', 'description', 'descriptionx'],

  html(_isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.5</div>

    <div style="width: 100%; padding:5px 5px;height: calc(100vh - 160px);overflow:auto">

    <div id="flutuador" style="padding:0px 0px 15px 0px">
<table style="width:100%;"><tr>
<td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Оставьте пустым, чтобы не использовалось!"></td>
<td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
</tr></table>
</div>

<span class="dbminputlabel">Информация</span><br>
  <select id="info" class="round">
    <optgroup label="Время работы">
    <option value="23">Обновление времени безотказной работы в днях</option>
    <option value="24">Обновление времени безотказной работы в часах</option>
    <option value="25">Обновление времени безотказной работы в минутах</option>
    <option value="26">Обновление времени безотказной работы в секундах</option>
    <option value="0">Время безотказной работы в миллисекундах</option>
  </optgroup>
  <optgroup label="Значения">
    <option value="3">Общее количество серверов</option>
    <option value="4">Общее количество пользователей</option>
    <option value="10">Общее количество каналов</option>
    <option value="11">Общее количество эмодзи</option>
    <option value="32">Общее количество команд</option>
    <option value="33">Общее количество событий</option>
    <option value="9">Общее количество голосовых подключений</option>
  </optgroup>
  <optgroup label="Сервера бота">
    <option value="16">Объекты сервера ботов</option>
    <option value="17">Имена серверов ботов</option>
    <option value="18">Идентификаторы серверов ботов</option>
  <optgroup label="Информация о боте">
    <option value="19">Текущий префикс бота</option>
    <option value="20">Идентификатор клиента бота</option>
    <option value="44">Идентификатор владельца бота</option>
    <option value="28">Bot OS (технологическая платформа)</option>
    <option value="30">Каталог ботов</option>
    <option value="8">Токен бота (осторожность)</option>
    <option value="45">Чувствительны ли команды к регистру?</option>
    <option value="46">Идентификатор последнего сообщения</option>
  </optgroup>
  <optgroup label="Системные измерения">
    <option value="49">Время работы системы в секундах</option>
    <option value="29">Использование процессора (МБ)</option>
    <option value="47">Среднее использование ЦП в % [1 минута, 5 минут, 15 минут].</option>
    <option value="48">Среднее использование ЦП в % от последних 60 секунд</option>
    <option value="50">Текущее использование процессора в % (Требуется модуль: os-utils)</option>
    <option value="52">Свободный процессор в % (Требуется модуль: os-utils)</option>
    <option value="53">Частота процессора в ГГц</option>
    <option value="35">Количество ядер процессора</option>
    <option value="36">Общая память (ГБ)</option>
    <option value="37">Общая память (МБ)</option>
    <option value="38">Доступная память (ГБ)</option>
    <option value="39">Доступная память (МБ)</option>
    <option value="40">Доступная память (%)</option>
    <option value="41">Используемая память (ГБ)</option>
    <option value="42">Используемая память (МБ)</option>
    <option value="43">Используемая память (%)</option>
  </optgroup>
  <optgroup label="Оперативка бота">
    <option value="27">Использование памяти (ОЗУ) в МБ</option>
    <option value="51">Использование памяти (ОЗУ) в округленных МБ</option>
    <option value="1">Бот запустился на</option>
    <option value="34">Бот запущен в [unix timestamp].</option>
    <option value="2">Пинг</option>
    <option value="5">Круглый пинг</option>
  </optgroup>
  <optgroup label="Версии">
  <option value="21">Версия Discord JS</option>
  <option value="31">Версия Node JS</option>
    </optgroup>
  </select>

<br>

<div>
  <div style="float: left; width: 35%;">
  <span class="dbminputlabel">Хранить в</span><br>
    <select id="storage" class="round">
      ${data.variables[1]}
    </select>
  </div>
  <div id="varNameContainer2" style="float: right; width: 60%;">
  <span class="dbminputlabel">Имя переменной</span><br>
    <input id="varName2" class="round" type="text"><br>
  </div>
</div>

</div>

<style>

.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}

</style>`;
  },

  init() {
    const { glob, document } = this;

    const xinelaslinks = document.getElementsByClassName('xinelaslink');
    for (let x = 0; x < xinelaslinks.length; x++) {
      const xinelaslink = xinelaslinks[x];
      const url = xinelaslink.getAttribute('data-url');
      if (url) {
        xinelaslink.setAttribute('title', url);
        xinelaslink.addEventListener('click', (e) => {
          e.stopImmediatePropagation();
          console.log(`Запуск URL: [${url}] В вашем браузере по умолчанию.`);
          require('child_process').execSync(`start ${url}`);
        });
      }
    }
  },

  async action(cache) {
    const botClient = this.getDBM().Bot.bot;
    const { Bot } = this.getDBM();
    const os = require('os');
    if (process.platform === 'win32') this.getMods().require('loadavg-windows'); // Make loadavg work on windows.
    const DBM = this.getDBM();
    const data = cache.actions[cache.index];
    const info = parseInt(data.info, 10);
    const msToDay = 1000 * 60 * 60 * 24;

    if (!botClient) return this.callNextAction(cache);
    let desabilitar = 1
    let result;
    switch (info) {
      case 0: // Uptime in Milliseconds //Deprecated in 1.8.5
        result = botClient.uptime;
        break;
      case 1: // Ready At
        result = botClient.readyAt;
        break;
      case 2: // Ping
        result = botClient.ws.ping;
        break;
      case 3: // Guild Amount
        result = botClient.guilds.cache.size;
        break;
      case 4: // User Amount
        result = botClient.guilds.cache.map(g => g.memberCount).reduce((a, g) => a + g);
        break;
      case 5: // Rounded Ping
        result = Math.round(botClient.ws.ping);
        break;
      case 6: // Uptime in Seconds // Deprecated in 1.8.5
        result = Math.floor(botClient.uptime / 1000);
        break;
      case 7: // Uptime in Minutes // Deprecated in 1.8.5
        result = Math.floor(botClient.uptime / 1000 / 60);
        break;
      case 8: // Bots' Token
        result = botClient.token;
        break;
      case 9: // Voice Connections Amount
        result = botClient.voice.adapters.size;
        break;
      case 10: // Total Amount of Channels
        result = botClient.channels.cache.size;
        break;
      case 11: // Total Amount of Emojis
        result = botClient.emojis.cache.size;
        break;
      case 13: // Uptime in Days // Deprecated in 1.8.5
        result = botClient.uptime / msToDay;
        break;
      case 14: // Uptime in Days (Rounded) // Deprecated in 1.8.5
        result = Math.floor(botClient.uptime / msToDay);
        break;
      case 15: // Memory (Ram) Usage // Deprecated in 1.8.8
        result = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}%`;
        break;
      case 16: // Bot Guilds Objects
        result = botClient.guilds.cache.array();
        break;
      case 17: // Bot Guilds Names
        result = botClient.guilds.cache.map((g) => g.name);
        break;
      case 18: // Bot Guilds IDs
        result = botClient.guilds.cache.map((g) => g.id);
        break;
      case 19: // Bot Current Prefix
        result = DBM.Files.data.settings.tag;
        break;
      case 20: // Bot Client ID
        result = DBM.Files.data.settings.client;
        break;
      case 21: // Discord JS Version
        result = DBM.DiscordJS.version;
        break;
      case 22: // Uptime in Hours // Deprecated in 1.8.5
        result = Math.floor(botClient.uptime / 1000 / 60 / 60);
        break;
      case 23: // Refreshing Uptime in Days
        result = Math.floor((process.uptime() % 31536000) / 86400);
        break;
      case 24: // Refreshing Uptime in Hours
        result = Math.floor((process.uptime() % 86400) / 3600);
        break;
      case 25: // Refreshing Uptime in Minutes
        result = Math.floor((process.uptime() % 3600) / 60);
        break;
      case 26: // Refreshing Uptime in  Seconds
        result = Math.round(process.uptime() % 60);
        break;
      case 27: // Memory (RAM) Usage in MB
        result = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(3);
        break;
      case 28: // Bots' OS (Process Platform)
        if (process.platform) {
          const { platform } = process;
          if (platform === 'win32') result = 'Windows';
          else if (platform === 'aix') result = 'Aix';
          else if (platform === 'linux') result = 'Linux';
          else if (platform === 'darwin') result = 'Darwin';
          else if (platform === 'openbsd') result = 'OpenBSD';
          else if (platform === 'sunos') result = 'Solaris';
          else if (platform === 'freebsd') result = 'FreeBSD';
        }
        break;
      case 29: // CPU Usage in MB
        result = (process.cpuUsage().user / 1024 / 1024).toFixed(2);
        break;
      case 30: // Bots' Directory
        result = process.cwd();
        break;
      case 31: // Node JS Version
        result = process.versions.node;
        break;
      case 32: // Amount of Commands
        result = DBM.Files.data.commands.length;
        break;
      case 33: // Amount of Events
        result = DBM.Files.data.events.length;
        break;
      case 34: // Ready At ? [Timestamp]
        result = botClient.readyTimestamp;
        break;
      case 35: // CPU Core Amount
        result = os.cpus().length;
        break;
      case 36: // Total Memory (GB)
        result = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
        break;
      case 37: // Total Memory (MB)
        result = (os.totalmem() / 1024 / 1024).toFixed(0);
        break;
      case 38: // Available Memory (GB)
        result = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
        break;
      case 39: // Available Memory (MB)
        result = (os.freemem() / 1024 / 1024).toFixed(0);
        break;
      case 40: // Available Memory (%)
        result = Math.floor((os.freemem() / os.totalmem()) * 100);
        break;
      case 41: // Used Memory (GB)
        result = ((os.totalmem() - os.freemem()) / 1024 / 1024 / 1024).toFixed(0);
        break;
      case 42: // Used Memory (MB)
        result = ((os.totalmem() - os.freemem()) / 1024 / 1024).toFixed(0);
        break;
      case 43: // Used Memory (%)
        result = Math.floor(((os.totalmem() - os.freemem()) / os.totalmem()) * 100);
        break;
      case 44: // Bot Owner ID
        result = DBM.Files.data.settings.ownerId;
        break;
      case 45: // Are Commands Case Sensitive?
        result = Bot._caseSensitive;
        break;
      case 46: // Last Message ID
        result = botClient.user.lastMessageID;
        break;
      case 47:
        result = Math.ceil(os.loadavg()[0] * 10) + "," + Math.ceil(os.loadavg()[1] * 10) + "," + Math.ceil(os.loadavg()[2] * 10)
        break;
      case 48:
        result = Math.ceil(os.loadavg()[0] * 10);
        break;
      case 49:
        result = parseFloat(os.uptime());
        break;
      case 50:
        desabilitar = 2
        const osu = require('os-utils');
        osu.cpuUsage((value) => {
          result = Math.ceil(value * 100);
          if (result !== undefined) {
            const storage = parseInt(data.storage, 10);
            const varName2 = this.evalMessage(data.varName2, cache);
            this.storeValue(result, storage, varName2, cache);
          }
          this.callNextAction(cache);
        });
        break;
      case 51:
        result = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(0);
        break;
      case 52:
        desabilitar = 2
        const ost = require('os-utils');
        ost.cpuFree((value) => {
          result = Math.ceil(value * 100);
          if (result !== undefined) {
            const storage = parseInt(data.storage, 10);
            const varName2 = this.evalMessage(data.varName2, cache);
            this.storeValue(result, storage, varName2, cache);
          }
          this.callNextAction(cache);
        });
        break;
      case 53:
        const cpuInfo = os.cpus()[0];
        const cpuSpeedGHz = cpuInfo.speed / 1000;

        result = cpuSpeedGHz.toFixed(2);
        break;
      default:
        break;
    }

    if (desabilitar == 1) {
      if (result !== undefined) {
        const storage = parseInt(data.storage, 10);
        const varName2 = this.evalMessage(data.varName2, cache);
        this.storeValue(result, storage, varName2, cache);
      }
      this.callNextAction(cache);
    }
  },

  mod() { },
};
