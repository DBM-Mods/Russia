module.exports = {
  //---------------------------------------------------------------------
  // Action Name
  //
  // This is the name of the action displayed in the editor.
  //---------------------------------------------------------------------

  name: "Multi-Check Variable MOD",

  //---------------------------------------------------------------------
  // Action Section
  //
  // This is the section the action will fall into.
  //---------------------------------------------------------------------

  section: "Conditions",

  //---------------------------------------------------------------------
  // Action Subtitle
  //
  // This function generates the subtitle displayed next to the name.
  //---------------------------------------------------------------------

  subtitle(data, presets) {
    return `Проверять ${presets.getVariableText(data.storage, data.varName)} с ${data.branches.length} возможности`;
  },

  //---------------------------------------------------------------------
  // Action Meta Data
  //
  // Helps check for updates and provides info if a custom mod.
  // If this is a third-party mod, please set "author" and "authorUrl".
  //
  // It's highly recommended "preciseCheck" is set to false for third-party mods.
  // This will make it so the patch version (0.0.X) is not checked.
  //---------------------------------------------------------------------

    meta: {
      version: '2.1.7',
      preciseCheck: true,
      author: '[Tempest - 321400509326032897]',
      authorUrl: 'https://github.com/DBM-Mods/Russia',
      downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
    },

  //---------------------------------------------------------------------
  // Action Fields
  //
  // These are the fields for the action. These fields are customized
  // by creating elements with corresponding IDs in the HTML. These
  // are also the names of the fields stored in the action's JSON data.
  //---------------------------------------------------------------------

  fields: ["storage", "varName", "branches"],

  //---------------------------------------------------------------------
  // Command HTML
  //
  // This function returns a string containing the HTML used for
  // editing actions.
  //
  // The "isEvent" parameter will be true if this action is being used
  // for an event. Due to their nature, events lack certain information,
  // so edit the HTML to reflect this.
  //---------------------------------------------------------------------

  html(isEvent, data) {
    return `
<div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.2</div>
<div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>

<retrieve-from-variable allowSlashParams dropdownLabel="Переменная" selectId="storage" variableContainerId="varNameContainer" variableInputId="varName"></retrieve-from-variable>

<br><br><br><br>

<dialog-list id="branches" fields='["comparison", "value", "value2", "actions"]' dialogResizable dialogTitle="Check Variable Info" dialogWidth="600" dialogHeight="400" listLabel="Сравнения и действия" listStyle="height: calc(100vh - 290px);" itemName="Condition" itemHeight="28px;" itemTextFunction="glob.formatItem(data)" itemStyle="line-height: 28px;">
  <div onmouseover="(function(){
      var aselect = document.getElementById('comparison');
      var avalue = aselect.options[aselect.selectedIndex].value

      if (avalue == '0' || avalue == '16' || avalue == '19' || avalue == '20' || avalue == '21' || avalue == '24' || avalue == '22' || avalue == '23' || avalue == '25') {
        document.getElementById('divValue').style.display = 'none';
        document.getElementById('divValue2').style.display = 'none';
      } else if(avalue == '15') {
        document.getElementById('divValue').style.display = 'block';
        document.getElementById('divValue').style.width = '35%';
        document.getElementById('divValue2').style.display = 'block';
      } else {
        document.getElementById('divValue').style.display = 'block';
        document.getElementById('divValue').style.width = '65%';
        document.getElementById('divValue2').style.display = 'none';
      }
  })()">
    <div style="padding: 16px;">
      <div style="float: left; width: 35%;">
        <span class="dbminputlabel">Сравнения</span><br>
        <select id="comparison" class="round" onchange="(function(){

            var aselect = document.getElementById('comparison');
            var avalue = aselect.options[aselect.selectedIndex].value

            if (avalue == '0' || avalue == '16' || avalue == '19' || avalue == '20' || avalue == '21' || avalue == '24' || avalue == '22' || avalue == '23' || avalue == '25') {
              document.getElementById('divValue').style.display = 'none';
              document.getElementById('divValue2').style.display = 'none';
            } else if(avalue == '15') {
              document.getElementById('divValue').style.display = 'block';
              document.getElementById('divValue').style.width = '35%';
              document.getElementById('divValue2').style.display = 'block';
            } else {
              document.getElementById('divValue').style.display = 'block';
              document.getElementById('divValue').style.width = '65%';
              document.getElementById('divValue2').style.display = 'none';
            }

        })()">
          <option value="0">Существует</option>
          <option value="1" selected>Равно</option>
          <option value="2">Точно так же</option>
          <option value="3">Меньше, чем</option>
          <option value="13">Меньше или равно</option>
          <option value="4">Тогда больше</option>
          <option value="12">Больше или равно</option>
          <option value="5">Включает</option>
          <option value="6">Соответствия регулярным выражениям</option>
          <option value="14">Полные совпадения с регулярными выражениями</option>
          <option value="7">Длина больше, чем</option>
          <option value="8">Длина меньше, чем</option>
          <option value="9">Длина равна</option>
          <option value="10">Начинается с</option>
          <option value="11">Заканчивается</option>
          <option value="15">Между</option>
          <option value="16">У вас есть акценты?</option>
          <option value="17">Включает слова  ["a" , "b" , "c"]</option>
          <option value="18">Это как слова  ["a" , "b" , "c"]</option>
          <option value="19">Это четное число?</option>
          <option value="20">Это нечетное число?</option>
          <option value="21">Это число?</option>
          <option value="24">Это текст?</option>
          <option value="22">Это список?</option>
          <option value="23">Это URL-адрес изображения?</option>
          <option value="25">Это URL?</option>
        </select>
      </div>
      <div style="float: left; width: 35%; padding-left: 18px;" id="divValue">
        <span class="dbminputlabel">Значение</span><br>
        <input id="value" class="round" type="text" name="is-eval">
      </div>

      <div style="float: left; width: 30%; padding-left: 18px;" id="divValue2">
        <span class="dbminputlabel">а также</span><br>
        <input id="value2" class="round" type="text" name="is-eval">
      </div>

      <br><br><br><br>

      <action-list-input id="actions" height="calc(100vh - 220px)"></action-list-input>

    </div>
  </div>
</dialog-list>`;
  },

  //---------------------------------------------------------------------
  // Action Editor Init Code
  //
  // When the HTML is first applied to the action editor, this code
  // is also run. This helps add modifications or setup reactionary
  // functions for the DOM elements.
  //---------------------------------------------------------------------

  init() {
    const { glob } = this;

    glob.formatItem = function (data) {
      let result = '<div style="display: inline-block; width: 200px; padding-left: 8px;">VAR ';
      const comp = data.comparison;
      switch (comp) {
        case "0":
          result += "Существует ";
          break;
        case "1":
          result += "= " + data.value;
          break;
        case "2":
          result += "= " + data.value;
          break;
        case "3":
          result += "< " + data.value;
          break;
        case "4":
          result += "> " + data.value;
          break;
        case "5":
          result += "Включает " + data.value;
          break;
        case "6":
          result += "Соответствия РВ " + data.value;
          break;
        case "7":
          result += "Длина > " + data.value;
          break;
        case "8":
          result += "Длина < " + data.value;
          break;
        case "9":
          result += "Длина = " + data.value;
          break;
        case "10":
          result += "Начинается с " + data.value;
          break;
        case "11":
          result += "Заканчивается " + data.value;
          break;
        case "12":
          result += ">= " + data.value;
          break;
        case "13":
          result += "<= " + data.value;
          break;
        case "14":
          result += "Полные совпадения с РВ " + data.value;
          break;
        case "15":
          result += "Между " + data.value + " а также " + data.value2;
          break;
        case "16":
          result += "У вас есть акценты?";
          break;
        case "17":
          result += "Включает " + data.value;
          break;
        case "18":
          result += "Равный " + data.value;
          break;
        case "19":
          result += "Это четное число?"
          break;
        case "20":
          result += "Это нечетное число?"
          break;
        case "21":
          result += "Это число?"
          break;
        case "22":
          result += "Это список?";
          break;
        case "23":
          result += "Это URL-адрес изображения?";
          break;
        case "24":
          result += "Это текст?";
          break;
        case "25":
          result += "Это URL?";
          break;
      }
      result += "</div><span>Сушествует " + data.actions.length + " дейсвие(й)</span>";
      return result;
    };
  },

  //---------------------------------------------------------------------
  // Action Bot Function
  //
  // This is the function for the action within the Bot's Action class.
  // Keep in mind event calls won't have access to the "msg" parameter,
  // so be sure to provide checks for variable existence.
  //---------------------------------------------------------------------

  action(cache) {
    const data = cache.actions[cache.index];
    const type = parseInt(data.storage, 10);
    const varName = this.evalMessage(data.varName, cache);
    const variable = this.getVariable(type, varName, cache);
    let result = false;
    if (variable) {
      const val1 = variable;
      const branches = data.branches;
      for (let i = 0; i < branches.length; i++) {
        const branch = branches[i];
        const compare = parseInt(branch.comparison, 10);
        let val2 = branch.value;
        if (compare !== 6) val2 = this.evalIfPossible(val2, cache);
        switch (compare) {
          case 0:
            result = val1 !== undefined;
            break;
          case 1:
            result = val1 == val2;
            break;
          case 2:
            result = val1 === val2;
            break;
          case 3:
            result = val1 < val2;
            break;
          case 4:
            result = val1 > val2;
            break;
          case 5:
            if (typeof val1?.toString().includes === "function") {
              result = val1.toString().includes(val2);
            }
            break;
          case 6:
            result = Boolean(val1.toString().match(new RegExp("^" + val2 + "$", "i")));
            break;
          case 7:
            result = val1.length > val2;
            break;
          case 8:
            result = val1.length < val2;
            break;
          case 9:
            result = val1.length == val2;
            break;
          case 10:
            result = val1.toString().startsWith(val2);
            break;
          case 11:
            result = val1.toString().endsWith(val2);
            break;
          case 12:
            result = Boolean(val1 >= val2);
            break;
          case 13:
            result = Boolean(val1 <= val2);
            break;
          case 14:
            result = Boolean(val1.toString().match(new RegExp(val2)));
            break;
          case 15:
            const val3 = branch.value2;
            if(parseFloat(val1.toString().replace(",", ".")) >= parseFloat(val2.toString().replace(",", ".")) && parseFloat(val1.toString().replace(",", ".")) <= parseFloat(val3.toString().replace(",", "."))) {
              result = true;
            }
            break;
          case 16:
            const conditions = ["Ä","Å","Á","Â","À","Ã","Ā","Ă","Ą","ā","ă","ą","ä","á","â","à","ã","É","Ê","Ë","È","Ė","Ę","Ě","Ĕ","Ē","ė","ę","ě","ĕ","ē","é","ê","ë","è","Í","Î","Ï","Ì","İ","Į","Ī","ı","į","ī","í","î","ï","ì","Ö","Ó","Ô","Ò","Õ","Ő","Ō","ő","ō","ö","ó","ô","ò","õ","Ü","Ú","Û","Ų","Ű","Ů","Ū","ų","ű","ů","ū","ü","ú","û","ù","Ç","Ć","Č","ç","ć","č","Ñ","Ň","Ņ","Ń","ñ","ň","ņ","ń","Ÿ","Ý","ý","Ź","Ż","Ž","ź","ż","ž","Ł","Ľ","Ļ","Ĺ","ł","ľ","ĺ","Ķ","ķ","Ģ","Ğ","ģ","ğ","Ď","ď","Ś","Š","Ş","ś","š","ş","Ť","Ț","Ţ","ť","ț","ţ","Ŕ","Ř","ŕ","ř"]
            result = conditions.some(el => val1.includes(el));
            break;
          case 17:
            const conditionsX = val2
            result = conditionsX.some(els => val1.includes(els));
            break;
          case 18:
            const conditionsZ = val2
            result = conditionsZ.some(elz => val1 == (elz));
            break;
          case 19:
            result = val1 % 2 == 0
            break;
          case 20:
            result = val1 % 2 == 1
            break;
          case 21:
            result = Boolean(!isNaN(parseFloat(val1.toString().replace(",", "."))));
            break;
          case 22:
            result = Boolean(Array.isArray(val1));
            break;
          case 23:
            const isImageUrl = require('is-image-url');
            result = isImageUrl(val1);
            break;
          case 24:
            result = typeof val1 === "string";
            break;
          case 25:
            const isUrl = require("is-url");
            result = isUrl(val1);
            break;
        }
        if (result) {
          this.executeSubActionsThenNextAction(branch.actions, cache);
          break;
        }
      }
    }
    if (!result) {
      this.callNextAction(cache);
    }
  },

  //---------------------------------------------------------------------
  // Action Bot Mod Init
  //
  // An optional function for action mods. Upon the bot's initialization,
  // each command/event's actions are iterated through. This is to
  // initialize responses to interactions created within actions
  // (e.g. buttons and select menus for Send Message).
  //
  // If an action provides inputs for more actions within, be sure
  // to call the `this.prepareActions` function to ensure all actions are
  // recursively iterated through.
  //---------------------------------------------------------------------

  modInit(data) {
    if (Array.isArray(data?.branches)) {
      for (let i = 0; i < data.branches.length; i++) {
        const branch = data.branches[i];
        this.prepareActions(branch.actions);
      }
    }
  },

  //---------------------------------------------------------------------
  // Action Bot Mod
  //
  // Upon initialization of the bot, this code is run. Using the bot's
  // DBM namespace, one can add/modify existing functions if necessary.
  // In order to reduce conflicts between mods, be sure to alias
  // functions you wish to overwrite.
  //---------------------------------------------------------------------

  mod() {},
};
