module.exports = {
  name: 'Create Timestamp Discord MOD',
  section: 'Other Stuff',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[Tempest - 321400509326032897]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },


  subtitle(data) {
    const info = ['Короткое время', 'Мульти время', 'Сокращенная дата', 'Длинная дата', 'Долгое время с коротким временем', 'Долгое время с днем ​​недели и коротким временем', 'Относительный'];
    const prse = parseInt(data.saida);

    if (data.descriptionx) {
      desccor = data.descriptioncolor;
    } else {
      desccor = "none";
    }

    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">${info[prse]}</font>`
  },

  variableStorage(data, varType) {
    if (parseInt(data.storage, 10) !== varType) return;
    return [data.varName, 'Дата'];
  },

  fields: ["date", "saida", "storage", "varName", "modo", "description", "descriptionx", "descriptioncolor", "iffalse", "iffalseVal"],

  html(_isEvent, data) {
    return `
  <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
  <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.2</div>

  <style>
    .dbmmodsbr1 {
      position: absolute;
      bottom: 0px;
      border: 0px solid rgba(50,50,50,0.7);
      background: rgba(0,0,0,0.7);
      color: #999;
      padding: 5px;
      left: 0px;
      z-index: 999999;
      cursor: pointer
    }

    .dbmmodsbr2 {
      position: absolute;
      bottom: 0px;
      border: 0px solid rgba(50,50,50,0.7);
      background: rgba(0,0,0,0.7);
      color: #999;
      padding: 5px;
      right: 0px;
      z-index: 999999;
      cursor: pointer
    }
  </style>

  <div id="flutuador" style="padding:0px 0px 15px 0px">
    <table style="width:100%;"><tr>
      <td>
        <span class="dbminputlabel">Описание действия</span>
        <br>
        <input type="text" class="round" id="description" placeholder="Оставьте пустым, чтобы не использовалось!">
      </td>
      <td style="padding:0px 0px 0px 10px;width:70px">
        <div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px">
          <dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox>
        </div>
        <br>
        <input type="color" value="#ffffff" class="round" id="descriptioncolor">
      </td>
    </table>
  </div>

  <span class="dbminputlabel">Формат</span>
  <select id="modo" class="round" onchange="glob.change(this)">
    <option value="0">Дата</option>
    <option value="1">Timestamp</option>
    <option value="2">Timestamp миллисекунды</option>
  </select>

  <br>

  <span class="dbminputlabel" id="text">Дата</span>
  <input id="date" class="round" style="width: 100%;" type="text" placeholder="Оставьте поле пустым для новой даты">

  <br>

  <span class="dbminputlabel">Вывод</span>
  <select id="saida" class="round">
    <option value="0" selecionado>Короткое время</option>
    <option value="1">Мульти время</option>
    <option value="2">Сокращенная дата</option>
    <option value="3">Длинная дата</option>
    <option value="4">Длинная дата с коротким временем</option>
    <option value="5">Длинная дата с днем недели и коротким временем</option>
    <option value="6">Относительный</option>
  </select>

  <br>

  <div style="float: left; width: 40%">
    <span class="dbminputlabel">Если она недействительна</span>
    <select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
        <option value="0" selecionado>Продолжить действия</option>
        <option value="1">Остановить последовательность действий</option>
        <option value="2">Перейти к действию</option>
        <option value="3">Пропустить следующие действия</option>
        <option value="4">Перейти к якорю действий</option>
    </select>
  </div>

  <div id="iffalseContainer" style="display: none; float: right; width: 55%;">
    <span id="xinelas" class="dbminputlabel">Для</span>
    <br>
    <input id="iffalseVal" class="round" name="actionxinxyla" type="text">
  </div>

  <br><br><br>

  <div style="float: left; width: 35%; padding-top: 8px;">
    <span class="dbminputlabel">Хранить в</span>
    <select id="storage" class="round" onchange="glob.variableChange(this, 'varNameContainer')">
      ${data.variables[1]}
    </select>
  </div>

  <div id="varNameContainer" style="float: right; display: none; width: 60%; padding-top: 8px;">
    <span class="dbminputlabel">Имя переменной</span><br>
    <input id="varName" class="round" type="text">
  </div>`;
  },

  init() {
    const { glob, document } = this;
    glob.variableChange(document.getElementById('storage'), 'varNameContainer');

    const xinelaslinks = document.getElementsByClassName("xinelaslink");
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

    glob.onComparisonChanged = function (event) {
      if (event.value > "1") {
        document.getElementById("iffalseContainer").style.display = null;
      } else {
        document.getElementById("iffalseContainer").style.display = "none";
      }

      if (event.value == "2") {
        document.querySelector("[id='xinelas']").innerText = (`Номер действия`);
      }

      if (event.value == "3") {
        document.querySelector("[id='xinelas']").innerText = (`Пропустить действия`);
      }

      if (event.value == "4") {
        document.querySelector("[id='xinelas']").innerText = (`Якоря название`);
      }
    }

    glob.onComparisonChanged(document.getElementById("iffalse"));

    glob.change = function (event) {
      if (event.value == "0") {
        document.getElementById("text").innerText = "Дата";
      } else {
        document.getElementById("text").innerText = "Timestamp";
      }
    };

    glob.change(document.getElementById("modo"));
  },

  action(cache) {
    const data = cache.actions[cache.index];
    const moment = require("moment");
    const saida = parseInt(data.saida, 10);
    const modo = parseInt(data.modo);
    const time = this.evalMessage(data.date, cache) || new Date();
    let date;

    switch (modo) {
      case 0:
        date = moment(time, "DD/MM/YYYY HH:mm:ss").format("X");
        break;
      case 1:
        date = moment(time, "X").format("X");
        break;
      case 2:
        date = moment(time, "x").format("X");
        break;
    }

    if (date == "Invalid date") {
      return this.executeResults(false, data, cache);
    }

    switch (saida) {
      case 0:
        result = `<t:${date}:t>`;
        break;
      case 1:
        result = `<t:${date}:T>`;
        break;
      case 2:
        result = `<t:${date}:d>`;
        break;
      case 3:
        result = `<t:${date}:D>`;
        break;
      case 4:
        result = `<t:${date}:f>`;
        break;
      case 5:
        result = `<t:${date}:F>`;
        break;
      case 6:
        result = `<t:${date}:R>`;
        break;
    }

    const storage = parseInt(data.storage, 10);
    const varName = this.evalMessage(data.varName, cache);
    this.storeValue(result, storage, varName, cache);

    this.callNextAction(cache);
  },

  mod() {},
};
