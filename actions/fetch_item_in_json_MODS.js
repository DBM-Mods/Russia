module.exports = {
  name: 'Fetch Item in JSON MOD',
  section: 'Lists and Loops',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[xinxyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle: function (data, presets) {
    const storage = presets.variables;

    if (data.descriptionx == true) {
        desccor = data.descriptioncolor
    } else {
        desccor = 'none'
    }

    const opcao = [
      "Содержит",
      "Равно",
      "Точно равно",
      "Меньше, чем",
      "Больше, чем",
      "Включает",
      "Соответствует Regex",
      "Длина больше, чем",
      "Длина меньше, чем",
      "Длина равна",
      "Начинается с",
      "Заканчивается на",
      "Больше или равно",
      "Меньше или равно",
      "Полностью соответствует Regex",
      'Между ${data.value} и ${data.value2}',
      "Содержит ударения?",
      'Включает слова ["а", "б", "ц"]',
      'Равно словам ["а", "б", "ц"]',
      "Число четное?",
      "Число нечетное?",
      "Это число?",
      "Это текст?",
      "Это список?",
      "Это URL изображения?",
      "Это URL?",
      "Включает ~ Игнорировать регистр",
      "Включает ~ Игнорировать ударения",
      "Включает ~ Игнорировать ударения и регистр"
    ]

    return data.description
        ? `<font style="color:${desccor}">${data.description}</font>`
        : `<font style="color:${desccor}">${opcao[data.type]} ~ ${storage[parseInt(data.storage2, 10)]} (${data.varName2})</font>`
},



  variableStorage(data, varType) {
    if (parseInt(data.storage2, 10) !== varType) return;
    return ([data.varName2, "Список"]);
  },

  fields: ['storage', 'varName', 'type', 'value', 'value2', 'coluna', 'storage2', 'varName2','descriptioncolor','description','descriptionx', 'iffalse', 'iffalseVal', 'actionsno'],

  html(_isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновление</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.1</div>

    <div style="width: 100%; padding:5px 5px;height: calc(100vh - 160px);overflow:auto">

    <div id="flutuador" style="padding:0px 0px 15px 0px">
<table style="width:100%;"><tr>
<td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Оставьте пустым, чтобы не использовать."></td>
<td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
</tr></table>
</div>
  
  <retrieve-from-variable allowSlashParams dropdownLabel="Переменная" selectId="storage" variableContainerId="varNameContainer" variableInputId="varName"></retrieve-from-variable>

  <br><br><br>

  <span class="dbminputlabel">Фильтр на основе столбцов (используйте . для подстолбцов)</span><br>
  <input type="text" class="round" id="coluna">

  <br>

  <div style="width: 100%">
    <span class="dbminputlabel">Фильтр</span><br>
    <select id="type" class="round" onchange="glob.change(this)">
    <option value="0">Содержит</option>
    <option value="1" selected>Равно</option>
    <option value="2">Точно равно</option>
    <option value="3">Меньше, чем</option>
    <option value="13">Меньше или равно</option>
    <option value="4">Больше, чем</option>
    <option value="12">Больше или равно</option>
    <option value="5">Включает</option>
    <option value="26">Включает ~ Игнорировать регистр</option>
    <option value="27">Включает ~ Игнорировать ударения</option>
    <option value="28">Включает ~ Игнорировать ударения и регистр</option>
    <option value="6">Соответствует Regex</option>
    <option value="14">Полностью соответствует Regex</option>
    <option value="7">Длина больше, чем</option>
    <option value="8">Длина меньше, чем</option>
    <option value="9">Длина равна</option>
    <option value="10">Начинается с</option>
    <option value="11">Заканчивается на</option>
    <option value="15">Между</option>
    <option value="16">Содержит ударения?</option>
    <option value="17">Включает слова ["а", "б", "ц"]</option>
    <option value="18">Равно словам ["а", "б", "ц"]</option>
    <option value="19">Число четное?</option>
    <option value="20">Число нечетное?</option>
    <option value="21">Это число?</option>
    <option value="24">Это текст?</option>
    <option value="22">Это список?</option>
    <option value="23">Это URL изображения?</option>
    <option value="25">Это URL?</option>
    </select>
  </div>

  <br>

  <div id="xinoculta">
  <div id="valueDiv" style="float: left; width: 100%">
    <span class="dbminputlabel">Значение</span><br>
    <input id="value" class="round" type="text">
  </div>

  <div id="valueDiv2" style="float: left; width: 35%; padding-left: 18px;">
    <span class="dbminputlabel">И</span><br>
    <input id="value2" class="round" type="text">
  </div>

  <br><br><br></div>

  <div style="float: left; width: 35%; padding-top: 8px;">
    <span class="dbminputlabel">Сохранить в</span><br>
    <select id="storage2" class="round">
      ${data.variables[1]}
    </select>
  </div>

  <div id="varNameContainer2" style="float: right; width: 60%; padding-top: 8px;">
    <span class="dbminputlabel">Имя переменной</span><br>
    <input id="varName2" class="round" type="text"><br>
  </div><br><br><br><br>

  <div>

  <div style="float: left; width: 38%" id="xinext">
  <span class="dbminputlabel">Если элемент не найден</span><br>
  <select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
  <option value="0" selected>Продолжить выполнение действий</option>
  <option value="1">Остановить выполнение действий</option>
  <option value="2">Перейти к действию</option>
  <option value="3">Пропустить следующие действия</option>
  <option value="4">Перейти к якорю действия</option>
  <option value="5">Выполнить действия и остановитьсяся</option>
  <option value="6">Выполнить действия и продолжить</option>
  </select>
  </div>

  <div id="iffalseContainer" style="display: none; float: right; width: 60%;">

  <div id="xincontrol"><span id="xinelas" class="dbminputlabel">Para</span><br>
  <input id="iffalseVal" class="round" name="actionxinxyla" type="text">
  </div>

  </div></div>
  
  <div id="containerxin" style="width:100%">
  <br><br>
  <action-list-input id="actionsno" height="calc(100vh - 450px)"></action-list-input>
  </div>

 

</div>

<style>
table{width:100%}
.col1{width:38%;padding:0px 10px 0px 0px}
.col2{width:60%}
.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}

</style>`;
  },

  init() {
    glob.change = function (event) {
      if (event.value == "0" || event.value == "16" || event.value == "19" || event.value == "20" || event.value == "21" || event.value == "24" || event.value == "22" || event.value == "23" || event.value == "25") {
        document.getElementById("valueDiv").style.display = "none";
        document.getElementById("valueDiv").style.width = "100%";
        document.getElementById("valueDiv2").style.display = "none";
        document.getElementById("xinoculta").style.display = "none";
      } else if (event.value == "15") {
        document.getElementById("valueDiv").style.width = "65%";
        document.getElementById("valueDiv").style.display = "block";
        document.getElementById("valueDiv2").style.display = "block";
        document.getElementById("xinoculta").style.display = "block";
      } else {
        document.getElementById("valueDiv").style.display = "block";
        document.getElementById("valueDiv").style.width = "100%";
        document.getElementById("valueDiv2").style.display = "none";
        document.getElementById("xinoculta").style.display = "block";
      }
    };

    glob.change(document.getElementById("type"));

    glob.onComparisonChanged = function (event) {
      if (event.value > "1") {
        document.getElementById("iffalseContainer").style.display = null;
      } else {
        document.getElementById("iffalseContainer").style.display = "none";
      }
      if (event.value == "5" || event.value == "6") {
        document.getElementById("containerxin").style.display = null;
        document.getElementById("xincontrol").style.display = "none";
        document.getElementById("xinext").style.width = "100%";
      } else {
        document.getElementById("containerxin").style.display = "none";
        document.getElementById("xincontrol").style.display = null;
        document.getElementById("xinext").style.width = "38%";
      }
      if (event.value == "2") {
        document.querySelector("[id='xinelas']").innerText = (`Номер действия`);
      }
      if (event.value == "3") {
        document.querySelector("[id='xinelas']").innerText = (`Пропустить действия`);
      }
      if (event.value == "4") {
        document.querySelector("[id='xinelas']").innerText = (`Имя якоря`);
      }
    }

    glob.onComparisonChanged(document.getElementById("iffalse"));
    


    const xinelaslinks = document.getElementsByClassName('xinelaslink');
    for (let x = 0; x < xinelaslinks.length; x++) {
      const xinelaslink = xinelaslinks[x];
      const url = xinelaslink.getAttribute('data-url');
      if (url) {
       xinelaslink.setAttribute('title', url);
       xinelaslink.addEventListener('click', (e) => {
          e.stopImmediatePropagation();
          console.log(`Открываю URL: [${url}] в браузере по умолчанию.`);
          require('child_process').execSync(`start ${url}`);
        });
      }
    }

  },

  async action(cache) {
    const data = cache.actions[cache.index];
    const storage = parseInt(data.storage, 10);
    const varName = this.evalMessage(data.varName, cache);
    const variable = this.getVariable(storage, varName, cache);
    const value = this.evalMessage(data.value, cache);
    const coluna = this.evalMessage(data.coluna, cache);

    function getNestedValue(obj, columns) {
      const columnArr = columns.split('.');
      let colunas = obj;
      
      for (let i = 0; i < columnArr.length; i++) {
        if (colunas && colunas.hasOwnProperty(columnArr[i])) {
          colunas = colunas[columnArr[i]];
        } else {
          return undefined;
        }
      }
      
      return colunas;
    }

    const colunasAninhadas = coluna;

    let result

    switch (parseInt(data.type, 10)) {
      case 0:
        result = variable.findIndex((item) => getNestedValue(item, colunasAninhadas) !== value);
        break;
      case 1:
        result = variable.findIndex((item) => getNestedValue(item, colunasAninhadas) == value);
        break;
      case 2:
        result = variable.findIndex((item) => getNestedValue(item, colunasAninhadas) === value);
        break;
      case 3:
        result = variable.findIndex((item) => getNestedValue(item, colunasAninhadas) < value);
        break;
      case 4:
        result = variable.findIndex((item) => getNestedValue(item, colunasAninhadas) > value);
        break;
      case 5:
        result = variable.findIndex((item) => getNestedValue(item, colunasAninhadas).toString().includes(value));
        break;
      case 6:
        result = variable.findIndex((item) => getNestedValue(item, colunasAninhadas).toString().match(new RegExp('^' + value + '$', 'i')));
        break;
      case 7:
        result = variable.findIndex((item) => getNestedValue(item, colunasAninhadas).length > value);
        break;
      case 8:
        result = variable.findIndex((item) => getNestedValue(item, colunasAninhadas).length < value);
        break;
      case 9:
        result = variable.findIndex((item) => getNestedValue(item, colunasAninhadas).length == value);
        break;
      case 10:
        result = variable.findIndex((item) => getNestedValue(item, colunasAninhadas).toString().startsWith(value));
        break;
      case 11:
        result = variable.findIndex((item) => getNestedValue(item, colunasAninhadas).toString().endsWith(value));
        break;
      case 12:
        result = variable.findIndex((item) => getNestedValue(item, colunasAninhadas) >= value);
        break;
      case 13:
        result = variable.findIndex((item) => getNestedValue(item, colunasAninhadas) <= value);
        break;
      case 14:
        result = variable.findIndex((item) => getNestedValue(item, colunasAninhadas).toString().match(new RegExp(value)));
        break;
      case 15:
        const value2 = this.evalMessage(data.value2, cache);
        result = variable.findIndex((item) => getNestedValue(item, colunasAninhadas) >= value && item <= value2);
        break;
      case 16:
        const conditions = ["Ä", "Å", "Á", "Â", "À", "Ã", "Ā", "Ă", "Ą", "ā", "ă", "ą", "ä", "á", "â", "à", "ã", "É", "Ê", "Ë", "È", "Ė", "Ę", "Ě", "Ĕ", "Ē", "ė", "ę", "ě", "ĕ", "ē", "é", "ê", "ë", "è", "Í", "Î", "Ï", "Ì", "İ", "Į", "Ī", "ı", "į", "ī", "í", "î", "ï", "ì", "Ö", "Ó", "Ô", "Ò", "Õ", "Ő", "Ō", "ő", "ō", "ö", "ó", "ô", "ò", "õ", "Ü", "Ú", "Û", "Ų", "Ű", "Ů", "Ū", "ų", "ű", "ů", "ū", "ü", "ú", "û", "ù", "Ç", "Ć", "Č", "ç", "ć", "č", "Ñ", "Ň", "Ņ", "Ń", "ñ", "ň", "ņ", "ń", "Ÿ", "Ý", "ý", "Ź", "Ż", "Ž", "ź", "ż", "ž", "Ł", "Ľ", "Ļ", "Ĺ", "ł", "ľ", "ĺ", "Ķ", "ķ", "Ģ", "Ğ", "ģ", "ğ", "Ď", "ď", "Ś", "Š", "Ş", "ś", "š", "ş", "Ť", "Ț", "Ţ", "ť", "ț", "ţ", "Ŕ", "Ř", "ŕ", "ř"]
        result = variable.findIndex((item) => conditions.some(el => getNestedValue(item, colunasAninhadas).toString().includes(el)));
        break;
      case 17:
        const conditionsX = [...value];
        result = variable.findIndex((item) => conditionsX.some(els => getNestedValue(item, colunasAninhadas).toString().includes(els)));
        break;
      case 18:
        const conditionsZ = [...value];
        result = variable.findIndex((item) => conditionsZ.some(elz => getNestedValue(item, colunasAninhadas) == (elz)));
        break;
      case 19:
        result = variable.findIndex((item) => getNestedValue(item, colunasAninhadas) % 2 == 0);
        break;
      case 20:
        result = variable.findIndex((item) => getNestedValue(item, colunasAninhadas) % 2 == 1);
        break;
      case 21:
        result = variable.findIndex((item) => isNaN(parseFloat(getNestedValue(item, colunasAninhadas).toString().replace(",", "."))) == false);
        break;
      case 22:
        result = variable.findIndex((item) => Array.isArray(getNestedValue(item, colunasAninhadas)) == true);
        break;
      case 23:
        const isImageUrl = require('is-image-url');
        result = variable.findIndex((item) => isImageUrl(getNestedValue(item, colunasAninhadas).toString()) == true);
        break;
      case 24:
        result = variable.findIndex((item) => Boolean(typeof getNestedValue(item, colunasAninhadas) === "string") == true);
        break;
      case 25:
        const isUrl = require("is-url");
        result = variable.findIndex((item) => isUrl(getNestedValue(item, colunasAninhadas).toString()) == true);
        break;
      case 26:
        result = variable.findIndex((item) => getNestedValue(item, colunasAninhadas).toLowerCase().includes(value.toLowerCase()))
        break;
      case 27:
        tratar = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        result = variable.findIndex((item) => getNestedValue(item, colunasAninhadas).normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(tratar));
        break;
      case 28:
        tratar = value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        result = variable.findIndex((item) => getNestedValue(item, colunasAninhadas).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(tratar));
        break;
    }


    const storage2 = parseInt(data.storage2, 10);
    const varName2 = this.evalMessage(data.varName2, cache);
    this.storeValue(result, storage2, varName2, cache);

    if (result == -1) { 
      
      if(data.iffalse == "5" || data.iffalse == "6"){

        if(data.iffalse == "5"){
          this.executeSubActions(data.actionsno, cache)
          } else 
          {
          this.executeSubActionsThenNextAction(data.actionsno, cache)
          }

      } else {
        this.executeResults(false, data, cache);
      }

     } else {
      
      this.callNextAction(cache)

    }

  },

  modInit(data) {
    this.prepareActions(data.actionsno);
  },

  mod() { },
};
