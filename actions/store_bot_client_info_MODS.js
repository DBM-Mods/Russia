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
      'Готово в',
      'Пинг',
      'Значение сервера',
      'Количество пользователей',
      'Закругленный пинг',
      'Время активности в секундах',
      'Время активности в минутах',
      'Токен бота',
      'Значение голосовых соединений',
      'Общее количество каналов',
      'Общее количество эмодзи',
      'Эта опция была удалена',
      'Время активности в днях',
      'Время активности в днях (округлено)',
      'Использование памяти (ОЗУ)',
      'Объекты серверов бота',
      'Имена серверов бота',
      'ID серверов бота',
      'Текущий префикс бота',
      'ID клиента бота',
      'Версия Discord JS',
      'Время активности в часах',
      'Обновление времени активности в днях',
      'Обновление времени активности в часах',
      'Обновление времени активности в минутах',
      'Обновление времени активности в секундах',
      'Использование памяти (ОЗУ) в МБ',
      'ОС ботов (платформа процесса)',
      'Использование ЦП в МБ',
      'Директория ботов',
      'Версия Node JS',
      'Общее количество команд',
      'Общее количество событий',
      'Готово в? [отметка времени]',
      'Количество ядер ЦП',
      'Общий объем памяти (ГБ)',
      'Общий объем памяти (МБ)',
      'Доступная память (ГБ)',
      'Доступная память (МБ)',
      'Доступная память (%)',
      'Использованная память (ГБ)',
      'Использованная память (МБ)',
      'Использованная память (%)',
      'ID владельца бота',
      'Различаются ли команды по регистру?',
      'ID последнего сообщения',
      'Среднее использование ЦП в % (1 минута, 5 минут, 15 минут)',
      'Среднее использование ЦП в % за последние 60 секунд',
      'Время активности в секундах',
      'Текущее использование ЦП в %',
      'Закругленное использование памяти (ОЗУ)',
      'Свободное ЦП в %',
      'Скорость ЦП в ГГц',
    ];

    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">${info[parseInt(data.info, 10)]} - ${storage[parseInt(data.storage, 10)]} (${data.varName2})</font>`
  },

  variableStorage(data, varType) {
    if (parseInt(data.storage, 10) !== varType) return;
    let dataType = 'Текст';
    switch (parseInt(data.info, 10)) {
      case 0: // Время активности в миллисекундах
      case 22: // Время активности в часах
      case 27: // Использование памяти (ОЗУ) в МБ
      case 29: // Использование ЦП в МБ
      case 32: // Количество команд
      case 33: // Количество событий
      case 34: // Готово в? [отметка времени]
      case 35: // Количество ядер ЦП
      case 36: // Общий объем памяти (ГБ)
      case 37: // Общий объем памяти (МБ)
      case 38: // Доступная память (ГБ)
      case 39: // Доступная память (МБ)
      case 40: // Доступная память (%)
      case 41: // Использованная память (ГБ)
      case 42: // Использованная память (МБ)
      case 43: // Использованная память (%)
      case 48: // Использование ЦП (%)
      case 2: // Пинг
      case 3: // Количество серверов
      case 4: // Количество пользователей
      case 5: // Закругленный пинг
      case 6: // Время активности в секундах
      case 7: // Время активности в минутах
      case 9: // Количество голосовых соединений
      case 10: // Общее количество каналов
      case 11: // Общее количество эмодзи
      case 15: // Использование памяти (ОЗУ)
        dataType = 'Число';
        break;
      case 1: // Готово в
        dataType = 'Дата';
        break;
      case 8: // Токен бота
        dataType = 'Токен';
        break;
      case 16: // Объекты серверов бота
        dataType = 'Объект';
        break;
      case 17: // Имена серверов бота
        dataType = 'Текст';
        break;
      case 18: // ID серверов бота
        dataType = 'ID';
        break;
      case 19: // Текущий префикс бота
        dataType = 'Текст';
        break;
      case 20: // ID клиента бота
        dataType = 'ID';
        break;
      case 13: // Время активности в днях
      case 14: // Время активности в днях (округлено)
      case 23: // Обновление времени активности в днях
      case 24: // Обновление времени активности в часах
      case 25: // Обновление времени активности в минутах
      case 26: // Обновление времени активности в секундах
        dataType = 'Число';
        break;
      case 28: // ОС ботов (платформа процесса)
        dataType = 'Текст';
        break;
      case 30: // Директория ботов
        dataType = 'Текст';
        break;
      case 21: // Версия Discord JS
      case 31: // Версия Node JS
        dataType = 'Число';
        break;
      case 44: // ID владельца бота
        dataType = 'ID';
        break;
      case 45:
        dataType = 'Логическое';
        break;
      case 46:
        dataType = 'ID';
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
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.6</div>

    <div style="width: 100%; padding:5px 5px;height: calc(100vh - 160px);overflow:auto">

    <div id="flutuador" style="padding:0px 0px 15px 0px">
<table style="width:100%;"><tr>
<td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Не обязательное поле"></td>
<td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
</tr></table>
</div>

<span class="dbminputlabel">Информация</span><br>
  <select id="info" class="round2">
    <optgroup label="Аптаймы">
    <option value="23">Обновление активности в днях</option>
    <option value="24">Обновление активности в часах</option>
    <option value="25">Обновление активности в минутах</option>
    <option value="26">Обновление активности в секундах</option>
    <option value="0">Время активности в миллисекундах</option>
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
  <optgroup label="Серверные объекты">
    <option value="16">Объекты серверов бота</option>
    <option value="17">Имена серверов бота</option>
    <option value="18">ID серверов бота</option>
  <optgroup label="Информация о боте">
    <option value="19">Текущий префикс бота</option>
    <option value="20">ID клиента бота</option>
    <option value="44">ID владельца бота</option>
    <option value="28">ОС бота (Платформа процесса)</option>
    <option value="30">Каталог бота</option>
    <option value="8">Токен бота (осторожно)</option>
    <option value="45">Чувствительны ли команды к регистру?</option>
    <option value="46">ID последнего сообщения</option>
  </optgroup>
  <optgroup label="Системные измерения">
    <option value="49">Время активности системы в секундах</option>
    <option value="29">Использование ЦП (МБ)</option>
    <option value="47">Среднее использование ЦП в % [1 минута, 5 минут, 15 минут]</option>
    <option value="48">Среднее использование ЦП в % за последние 60 секунд</option>
    <option value="50">Текущее использование ЦП в % (Требуется модуль: os-utils)</option>
    <option value="52">Свободное ЦП в % (Требуется модуль: os-utils)</option>
    <option value="53">Скорость ЦП в ГГц</option>
    <option value="35">Количество ядер ЦП</option>
    <option value="36">Общий объем памяти (ГБ)</option>
    <option value="37">Общий объем памяти (МБ)</option>
    <option value="38">Доступная память (ГБ)</option>
    <option value="39">Доступная память (МБ)</option>
    <option value="40">Доступная память (%)</option>
    <option value="41">Использованная память (ГБ)</option>
    <option value="42">Использованная память (МБ)</option>
    <option value="43">Использованная память (%)</option>
  </optgroup>
  <optgroup label="Измерения бота">
    <option value="27">Использование памяти (ОЗУ) в МБ</option>
    <option value="51">Использование памяти (ОЗУ) в МБ (округлено)</option>
    <option value="1">Бот запущен в</option>
    <option value="34">Бот запущен в [штамп времени UNIX]</option>
    <option value="2">Пинг</option>
    <option value="5">Закругленный пинг</option>
  </optgroup>
  <optgroup label="Версии">
  <option value="21">Версия Discord JS</option>
  <option value="31">Версия Node JS</option>
    </optgroup>
  </select>
  <input type="text" id="filtrodoxinxyla" class="round" placeholder="Фильтровать опции...">
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
    <input id="varName2" class="round" type="text">
  </div>
</div>

</div>

<style>

.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}

.round2{width:100%;height:30px;outline:0}
.round2 option{padding:3px 8px;text-align:left}
.round2 optgroup{text-align:center;padding:4px 0px;}

.abrir {
  height: 30px;
  animation: abrir .5s forwards;
}

@keyframes abrir {
  from {
    height: 30px;
  }
  to {
    height: 190px;
  }
}

.fechar {
  height: 190px;
  animation: fechar .5s forwards;
}

@keyframes fechar {
  from {
    height: 190px;
  }
  to {
    height: 30px;
  }
}

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
          console.log(`Запуск URL: [${url}] в браузере.`);
          require('child_process').execSync(`start ${url}`);
        });
      }
    }

    document.getElementById("info").addEventListener("click", function () {
      document.getElementById("info").classList.add("abrir");
      document.getElementById("info").classList.remove("fechar");
      this.size = this.options.length;
    });

    document.getElementById("info").addEventListener("blur", function () {
      this.size = 1;
      document.getElementById("info").classList.remove("abrir");
      document.getElementById("info").classList.add("fechar");
      document.getElementById("info").style.height = "30px";
    });
    
    document.getElementById("filtrodoxinxyla").addEventListener("keyup", function () {
      var select = document.getElementById("info");
      var optgroups = select.getElementsByTagName("optgroup");
      var filter = this.value.toLowerCase();
      var options = document.getElementById("info").options;
      for (var i = 0; i < options.length; i++) {
        var option = options[i];
        if (option.text.toLowerCase().indexOf(filter) === -1) {
          option.style.display = "none";
        } else {
          option.style.display = "";
        }
      }

      for (var i = 0; i < optgroups.length; i++) {
        var optgroup = optgroups[i];
        var options = optgroup.getElementsByTagName("option");
        var visibleOptions = 0;
        for (var j = 0; j < options.length; j++) {
          if (options[j].style.display !== "none") {
            visibleOptions++;
          }
        }
        if (visibleOptions === 0) {
          optgroup.style.display = "none";
        } else {
          optgroup.style.display = "";
        }
      }

      document.getElementById("info").dispatchEvent(new Event("click"));
    });

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
