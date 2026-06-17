module.exports = {
  name: 'Filter List MOD',
  section: 'Lists and Loops',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[Tempest - 321400509326032897]',
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
      "Существует",
      "Равно",
      "Точно равно",
      "Меньше чем",
      "Больше чем",
      "Содержит",
      "Соответствует Regex",
      "Длина больше чем",
      "Длина меньше чем",
      "Длина равна",
      "Начинается с",
      "Заканчивается на",
      "Больше или равно",
      "Меньше или равно",
      "Полностью соответствует Regex",
      `Между ${data.value} и ${data.value2}`,
      "Содержит акценты?",
      'Содержит слова ["a", "b", "c"]',
      'Равно словам ["a", "b", "c"]',
      "Четное число?",
      "Нечетное число?",
      "Число?",
      "Текст?",
      "Список?",
      "URL изображения?",
      "URL?",
      "Содержит ~ Регистр не имеет значения",
      "Содержит ~ Игнорировать акценты",
      "Содержит ~ Игнорировать акценты и регистр",
    ]

    return data.description
        ? `<font style="color:${desccor}">${data.description}</font>`
        : `<font style="color:${desccor}">${opcao[data.type]} ~ ${storage[parseInt(data.storage2, 10)]} (${data.varName2})</font>`
},



  variableStorage(data, varType) {
    if (parseInt(data.storage2, 10) !== varType) return;
    return ([data.varName2, "Список"]);
  },

  fields: ['storage', 'varName', 'type', 'value', 'value2', 'storage2', 'varName2','descriptioncolor','description','descriptionx'],

  html(_isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.2</div>

    <div style="width: 100%; padding:5px 5px;height: calc(100vh - 160px);overflow:auto">

    <div id="flutuador" style="padding:0px 0px 15px 0px">
<table style="width:100%;"><tr>
<td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Необязательное поле"></td>
<td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
</tr></table>
</div>
  
  <retrieve-from-variable allowSlashParams dropdownLabel="Переменная" selectId="storage" variableContainerId="varNameContainer" variableInputId="varName"></retrieve-from-variable>

  <br><br><br>

  <div style="width: 100%">
    <span class="dbminputlabel">Фильтр</span><br>
    <select id="type" class="round" onchange="glob.change(this)">
      <option value="0">Существует</option>
      <option value="1" selected>Равно</option>
      <option value="2">Точно равно</option>
      <option value="3">Меньше чем</option>
      <option value="13">Меньше или равно</option>
      <option value="4">Больше чем</option>
      <option value="12">Больше или равно</option>
      <option value="5">Содержит</option>
      <option value="26">Содержит ~ Игнорировать регистр</option>
      <option value="27">Содержит ~ Игнорировать акценты</option>
      <option value="28">Содержит ~ Игнорировать акценты и регистр</option>
      <option value="6">Соответствует Regex</option>
      <option value="14">Полностью соответствует Regex</option>
      <option value="7">Длина больше чем</option>
      <option value="8">Длина меньше чем</option>
      <option value="9">Длина равна</option>
      <option value="10">Начинается с</option>
      <option value="11">Заканчивается на</option>
      <option value="15">Между</option>
      <option value="16">Содержит акценты?</option>
      <option value="17">Содержит слова ["a", "b", "c"]</option>
      <option value="18">Равно словам ["a", "b", "c"]</option>
      <option value="19">Четное число?</option>
      <option value="20">Нечетное число?</option>
      <option value="21">Число?</option>
      <option value="24">Текст?</option>
      <option value="22">Список?</option>
      <option value="23">URL изображения?</option>
      <option value="25">URL?</option>
    </select>
  </div>

  <br>

  <div id="xinoculta">
  <div id="valueDiv" style="float: left; width: 100%">
    <span class="dbminputlabel">Значение для фильтрации</span><br>
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
  </div><br><br><br>
</div>

</div>

<style>

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

    const xinelaslinks = document.getElementsByClassName('xinelaslink');
    for (let x = 0; x < xinelaslinks.length; x++) {
      const xinelaslink = xinelaslinks[x];
      const url = xinelaslink.getAttribute('data-url');
      if (url) {
       xinelaslink.setAttribute('title', url);
       xinelaslink.addEventListener('click', (e) => {
          e.stopImmediatePropagation();
          console.log(`Открываю URL: [${url}] в браузере.`);
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
    let result

    switch (parseInt(data.type, 10)) {
      case 0:
        result = variable.filter((item) => item !== undefined);
        break;
      case 1:
        result = variable.filter((item) => item == value);
        break;
      case 2:
        result = variable.filter((item) => item === value);
        break;
      case 3:
        result = variable.filter((item) => item < value);
        break;
      case 4:
        result = variable.filter((item) => item > value);
        break;
      case 5:
        result = variable.filter((item) => item.toString().includes(value));
        break;
      case 6:
        result = variable.filter((item) => item.toString().match(new RegExp('^' + value + '$', 'i')));
        break;
      case 7:
        result = variable.filter((item) => item.length > value);
        break;
      case 8:
        result = variable.filter((item) => item.length < value);
        break;
      case 9:
        result = variable.filter((item) => item.length == value);
        break;
      case 10:
        result = variable.filter((item) => item.toString().startsWith(value));
        break;
      case 11:
        result = variable.filter((item) => item.toString().endsWith(value));
        break;
      case 12:
        result = variable.filter((item) => item >= value);
        break;
      case 13:
        result = variable.filter((item) => item <= value);
        break;
      case 14:
        result = variable.filter((item) => item.toString().match(new RegExp(value)));
        break;
      case 15:
        const value2 = this.evalMessage(data.value2, cache);
        result = variable.filter((item) => item >= value && item <= value2);
        break;
      case 16:
        const conditions = ["Ä", "Å", "Á", "Â", "À", "Ã", "Ā", "Ă", "Ą", "ā", "ă", "ą", "ä", "á", "â", "à", "ã", "É", "Ê", "Ë", "È", "Ė", "Ę", "Ě", "Ĕ", "Ē", "ė", "ę", "ě", "ĕ", "ē", "é", "ê", "ë", "è", "Í", "Î", "Ï", "Ì", "İ", "Į", "Ī", "ı", "į", "ī", "í", "î", "ï", "ì", "Ö", "Ó", "Ô", "Ò", "Õ", "Ő", "Ō", "ő", "ō", "ö", "ó", "ô", "ò", "õ", "Ü", "Ú", "Û", "Ų", "Ű", "Ů", "Ū", "ų", "ű", "ů", "ū", "ü", "ú", "û", "ù", "Ç", "Ć", "Č", "ç", "ć", "č", "Ñ", "Ň", "Ņ", "Ń", "ñ", "ň", "ņ", "ń", "Ÿ", "Ý", "ý", "Ź", "Ż", "Ž", "ź", "ż", "ž", "Ł", "Ľ", "Ļ", "Ĺ", "ł", "ľ", "ĺ", "Ķ", "ķ", "Ģ", "Ğ", "ģ", "ğ", "Ď", "ď", "Ś", "Š", "Ş", "ś", "š", "ş", "Ť", "Ț", "Ţ", "ť", "ț", "ţ", "Ŕ", "Ř", "ŕ", "ř"]
        result = variable.filter((item) => conditions.some(el => item.toString().includes(el)));
        break;
      case 17:
        const conditionsX = [...value];
        result = variable.filter((item) => conditionsX.some(els => item.toString().includes(els)));
        break;
      case 18:
        const conditionsZ = [...value];
        result = variable.filter((item) => conditionsZ.some(elz => item == (elz)));
        break;
      case 19:
        result = variable.filter((item) => item % 2 == 0);
        break;
      case 20:
        result = variable.filter((item) => item % 2 == 1);
        break;
      case 21:
        result = variable.filter((item) => isNaN(parseFloat(item.toString().replace(",", "."))) == false);
        break;
      case 22:
        result = variable.filter((item) => Array.isArray(item) == true);
        break;
      case 23:
        const isImageUrl = require('is-image-url');
        result = variable.filter((item) => isImageUrl(item.toString()) == true);
        break;
      case 24:
        result = variable.filter((item) => Boolean(typeof item === "string") == true);
        break;
      case 25:
        const isUrl = require("is-url");
        result = variable.filter((item) => isUrl(item.toString()) == true);
        break;
      case 26:
        result = variable.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
        break;
      case 27:
        tratar = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        result = variable.filter((i) => i.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(tratar));
        break;
      case 28:
        tratar = value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        result = variable.filter((i) => i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(tratar));
        break;
    }

    if (result == undefined) {
      result = []
    }


    const storage2 = parseInt(data.storage2, 10);
    const varName2 = this.evalMessage(data.varName2, cache);
    this.storeValue(result, storage2, varName2, cache);

    this.callNextAction(cache);
  },

  mod() { },
};
