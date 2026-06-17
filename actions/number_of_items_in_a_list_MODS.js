module.exports = {

  name: "Number of Items in a List MOD",
  section: "Other Stuff",
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[Tempest - 321400509326032897]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {
    const info = ['Существует', 'Равно', 'Полностью совпадает', 'Меньше', 'Меньше или равно', 'Больше', 'Больше или равно', 'Содержит', 'Соответствует Regex', 'Полное совпадение с Regex', 'Длина больше', 'Длина меньше', 'Длина равна', 'Начинается с', 'Заканчивается на', 'Между', 'Содержит акценты', 'Содержит слова  ["a" , "b" , "c"]', 'Совпадает с словами  ["a" , "b" , "c"', 'Является четным числом?', 'Является нечетным числом?', 'Это число?', 'Это список?', 'Это URL изображения?', 'Это текст?', 'Это URL?'];
    const prse = parseInt(data.comparison);
    return `Подсчитать "${info[prse]}" в "${data.varName}"`;
  },

  variableStorage: function(data, varType) {
      const type = parseInt(data.storage);
      if(type !== varType) return;
      return ([data.varName2, 'Число']);
  },

  fields: ["storage", "varName", "varName2","comparison", "list", "value", "value2"],


  html(isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.2</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>
    
    
    <div style="float: left; width: 100%;"><br>
    <div style="float: left; width: 35%;">
            <span class="dbminputlabel">Список</span><br>
                <select id="list" class="round" onchange="glob.onComparisonChanged2(this)">
          ${data.lists[isEvent ? 1 : 0]}
                </select><br>
            </div>
            <div id="varNameContainer2" style=" float: right; width: 60%;">
            <span class="dbminputlabel">Имя переменной</span><br>
                <input id="varName" class="round" type="text" list="variableList"><br>
            </div>
    </div>

    <br>

    <div style="padding-top: 8px;">
    <div style="float: left; width: 35%;">
        <span class="dbminputlabel">Тип сравнения</span><br>
        <select id="comparison" class="round" onchange="glob.onComparisonChanged(this)">
              <option value="0">Существует</option>
              <option value="1" selected>Равно</option>
              <option value="2">Полностью совпадает</option>
              <option value="3">Меньше чем</option>
              <option value="4">Меньше или равно</option>
              <option value="5">Больше чем</option>
              <option value="6">Больше или равно</option>
              <option value="7">Содержит</option>
              <option value="8">Соответствует Regex</option>
              <option value="9">Полное совпадение с Regex</option>
              <option value="10">Длина больше чем</option>
              <option value="11">Длина меньше чем</option>
              <option value="12">Длина равна</option>
              <option value="13">Начинается с</option>
              <option value="14">Заканчивается на</option>
              <option value="15">Между</option>
              <option value="16">Содержит акценты?</option>
              <option value="17">Содержит слова  ["a" , "b" , "c"]</option>
              <option value="18">Совпадает с словами  ["a" , "b" , "c"]</option>
              <option value="19">Является четным числом?</option>
              <option value="20">Является нечетным числом?</option>
              <option value="21">Это число?</option>
              <option value="24">Это текст?</option>
              <option value="22">Это список?</option>
              <option value="23">Это URL изображения?</option>
              <option value="25">Это URL?</option>
        </select>
    </div>
    <table style="float: right;width: 65%;"><tr><td style="padding:0px 8px"><div style="width: 100%" id="directValue">
        <span id="item" class="dbminputlabel">Значение</span>
        <input id="value" class="round" type="text">
    </div></td><td style="padding:0px 3px";> <div style="width: 100%;" id="containerxin">
  <span class="dbminputlabel">и</span><br>
  <input id="value2" class="round" type="text"></td></tr></table>
</div></div>

<br><br><br><br><br><br>
<div style="float: left; width: 35%; padding-top: 8px;">
    <span class="dbminputlabel">Хранить результат в</span><br>
    <select id="storage" class="round" onchange="glob.variableChange(this, 'varNameContainer')">
    ${data.variables[1]}
    </select>
</div>
<div id="varNameContainer" style="float: right; display: none; width: 60%; padding-top: 8px;">
    <span class="dbminputlabel">Имя переменной</span><br>
    <input id="varName2" class="round" type="text">
</div><br><br>
<div style=" float: left; width: 88%; padding-top: 8px;">
    <br>
</div>`;
  },

  init() {
    const { glob, document } = this;

    glob.variableChange(document.getElementById('storage'), 'varNameContainer');

    glob.onComparisonChanged2 = function (event) {
      if (event.value < "7") {
        document.getElementById("varNameContainer2").style.display = "none";
      } else {
        document.getElementById("varNameContainer2").style.display = null;

      }
    };

    glob.onComparisonChanged2(document.getElementById("list"));

    glob.onComparisonChanged = function (event) {
      if (event.value === "0") {
        document.getElementById("directValue").style.display = "none";
        document.getElementById("containerxin").style.display = "none";
      } else {
        document.getElementById("directValue").style.display = null;
        document.getElementById("containerxin").style.display = "none";
      }
      if (event.value === "15") {
        document.getElementById("directValue").style.display = null;
        document.getElementById("containerxin").style.display = null;
      }
      if (event.value === "16" || event.value === "19" || event.value === "20" || event.value === "21" || event.value === "22" || event.value === "23" || event.value === "24" || event.value === "25") {
        document.getElementById("directValue").style.display = "none";
        document.getElementById("containerxin").style.display = "none";
      }
      if(event.value === "3" || event.value === "4" || event.value === "5" || event.value === "6" || event.value === "10" || event.value === "11" || event.value === "12" || event.value === "15") {
        document.getElementById("item").innerHTML = "Значение";
      } else if (event.value === "8" || event.value === "9") {
        document.getElementById("item").innerHTML = "Регулярное выражение";
      } else {
        document.getElementById("item").innerHTML = "Элемент";
      }
    };

    glob.onComparisonChanged(document.getElementById("comparison"));
  },

  async action(cache) {
    const data = cache.actions[cache.index];
    const comparison = parseInt(data.comparison, 10);
    const item = this.evalMessage(data.value, cache);
    const list = await this.getListFromData(data.list, data.varName, cache);
    var contagem = 0;


    if(Array.isArray(list)) {
     
      switch (comparison) {
        case 0:
          for(var i = 0; i < list.length; i++) {
            if(list[i].length == undefined || list[i].length == null || list[i] == "") {
            } else {
              contagem++
            }
          }

          result = contagem;
          break;
        case 1:
          for(var i = 0; i < list.length; i++) {
            if(list[i] == item) {
              contagem++;
            }
          }

          result = contagem;
          break;
        case 2:
          for(var i = 0; i < list.length; i++) {
            if(list[i] === item) {
              contagem++;
            }
          }

          result = contagem;
          break;
        case 3:
          for(var i = 0; i < list.length; i++) {
            if(list[i] < parseFloat(item.toString().replace(",", "."))) {
              contagem++;
            }
          }

          result = contagem;
          break;
        case 4:
          for(var i = 0; i < list.length; i++) {
            if(list[i] <= parseFloat(item.toString().replace(",", "."))) {
              contagem++;
            }
          }

          result = contagem;
          break;
        case 5:
          for(var i = 0; i < list.length; i++) {
            if(list[i] > parseFloat(item.toString().replace(",", "."))) {
              contagem++;
            }
          }

          result = contagem;
          break;
        case 6:
          for(var i = 0; i < list.length; i++) {
            if(list[i] >= parseFloat(item.toString().replace(",", "."))) {
              contagem++;
            }
          }

          result = contagem;
          break;
        case 7:
          for(var i = 0; i < list.length; i++) {
            if(list[i].toString().includes(item.toString())) {
              contagem++;
            }
          }

          result = contagem;
          break;
        case 8:
          for(var i = 0; i < list.length; i++) {
            if(list[i].toString().match(new RegExp('^' + item + '$', 'i'))) {
              contagem++;
            }
          }

          result = contagem;
          break;
        case 9:
          for(var i = 0; i < list.length; i++) {
            if(list[i].toString().match(new RegExp(item))) {
              contagem++;
            }
          }

          result = contagem;
          break;
        case 10:
          for(var i = 0; i < list.length; i++) {
            if(list[i].toString().length > parseFloat(item.toString().replace(",", "."))) {
              contagem++;
            }
          }

          result = contagem;
          break;
        case 11:
          for(var i = 0; i < list.length; i++) {
            if(list[i].toString().length < parseFloat(item.toString().replace(",", "."))) {
              contagem++;
            }
          }

          result = contagem;
          break;
        case 12:
          for(var i = 0; i < list.length; i++) {
            if(list[i].toString().length == parseFloat(item.toString().replace(",", "."))) {
              contagem++;
            }
          }

          result = contagem;
          break;
        case 13:
          for(var i = 0; i < list.length; i++) {
            if(list[i].toString().startsWith(item)) {
              contagem++;
            }
          }

          result = contagem;
          break;
        case 14:
          for(var i = 0; i < list.length; i++) {
            if(list[i].toString().endsWith(item)) {
              contagem++;
            }
          }

          result = contagem;
          break;
        case 15:
          const item2 = this.evalMessage(data.value2, cache);
          for(var i = 0; i < list.length; i++) {
            if(list[i] >= parseFloat(item.toString().replace(",", ".")) && list[i] <= parseFloat(item2.toString().replace(",", "."))) {
              contagem++;
            }
          }

          result = contagem;
          break;
        case 16:
          const conditions = ["Ä","Å","Á","Â","À","Ã","Ā","Ă","Ą","ā","ă","ą","ä","á","â","à","ã","É","Ê","Ë","È","Ė","Ę","Ě","Ĕ","Ē","ė","ę","ě","ĕ","ē","é","ê","ë","è","Í","Î","Ï","Ì","İ","Į","Ī","ı","į","ī","í","î","ï","ì","Ö","Ó","Ô","Ò","Õ","Ő","Ō","ő","ō","ö","ó","ô","ò","õ","Ü","Ú","Û","Ų","Ű","Ů","Ū","ų","ű","ů","ū","ü","ú","û","ù","Ç","Ć","Č","ç","ć","č","Ñ","Ň","Ņ","Ń","ñ","ň","ņ","ń","Ÿ","Ý","ý","Ź","Ż","Ž","ź","ż","ž","Ł","Ľ","Ļ","Ĺ","ł","ľ","ĺ","Ķ","ķ","Ģ","Ğ","ģ","ğ","Ď","ď","Ś","Š","Ş","ś","š","ş","Ť","Ț","Ţ","ť","ț","ţ","Ŕ","Ř","ŕ","ř"];
          for(var i = 0; i < list.length; i++) {
            if(conditions.some(el => list[i].toString().includes(el))) {
              contagem++;
            }
          }

          result = contagem;
          break;
        case 17:
          const conditionsX = this.evalIfPossible(item, cache);
          for(var i = 0; i < list.length; i++) {
            if(conditionsX.some(els => list[i].toString().includes(els))) {
              contagem++;
            }
          }

          result = contagem;
          break;
        case 18:
          const conditionsZ = this.evalIfPossible(item, cache);
          for(var i = 0; i < list.length; i++) {
            if(conditionsZ.some(elz => list[i] == (elz))) {
              contagem++;
            }
          }

          result = contagem;
          break;
        case 19:
          for(var i = 0; i < list.length; i++) {
            if(list[i] % 2 == 0) {
              contagem++;
            }
          }

          result = contagem;
          break;
        case 20:
          for(var i = 0; i < list.length; i++) {
            if(list[i] % 2 == 1) {
              contagem++;
            }
          }

          result = contagem;
          break;
        case 21:
          for(var i = 0; i < list.length; i++) {
            if(!isNaN(parseFloat(list[i].toString().replace(",", ".")))) {
              contagem++;
            }
          }

          result = contagem;
          break;
        case 22:
          for(var i = 0; i < list.length; i++) {
            if(Array.isArray(list[i])) {
              contagem++;
            }
          }

          result = contagem;
          break;
        case 23:
          const isImageUrl = require('is-image-url');
          for(var i = 0; i < list.length; i++) {
            if(isImageUrl(list[i])) {
              contagem++;
            }
          }

          result = contagem;
          break;
        case 24:
          for(var i = 0; i < list.length; i++) {
            if(typeof list[i] === "string") {
              contagem++;
            }
          }

          result = contagem;
          break;
        case 25:
          const isUrl = require("is-url");
          for(var i = 0; i < list.length; i++) {
            if(isUrl(list[i])) {
              contagem++;
            }
          }

          result = contagem;
          break;
    }

  } else { result = 0}

    if(result !== undefined) {
      const storage = parseInt(data.storage);
      const varName2 = this.evalMessage(data.varName2, cache);
      this.storeValue(result, storage, varName2, cache);
    }
    this.callNextAction(cache);
  },

  mod() {},
};

