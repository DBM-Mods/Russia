module.exports = {
  //---------------------------------------------------------------------
  // Action Name
  //
  // This is the name of the action displayed in the editor.
  //---------------------------------------------------------------------

  name: "Multi Edit Item from List MOD",

  //---------------------------------------------------------------------
  // Action Section
  //
  // This is the section the action will fall into.
  //---------------------------------------------------------------------

  section: "Lists and Loops",

  //---------------------------------------------------------------------
  // Action Subtitle
  //
  // This function generates the subtitle displayed next to the name.
  //---------------------------------------------------------------------

  subtitle(data, presets) {
    return `Редактировать ${data.branches.length === 1 ? data.branches.length + " элемент" : data.branches.length + " элементов"}`;
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
<div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.1</div>
<div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>

<retrieve-from-variable dropdownLabel="Список" selectId="storage" variableContainerId="varNameContainer" variableInputId="varName"></retrieve-from-variable>

<br><br><br><br>

<dialog-list id="branches" fields='["modo", "mode", "controle", "position", "val" ,"value", "valueeval"]' dialogResizable dialogTitle="Элемент" dialogWidth="600" dialogHeight="525" listLabel="Элементы" listStyle="height: calc(100vh - 300px);" itemName="Item" itemHeight="28px;" itemTextFunction="glob.formatItem(data)" itemStyle="line-height: 28px;">
    <div style="padding-top:20px;margin-right:10px;margin-left:10px;" onmouseover="(function(){
        var aselect = document.getElementById('modo');
        var avalue = aselect.options[aselect.selectedIndex].value;

        if(avalue == '0') {
          document.getElementById('divValue').style.display = 'block';
          document.getElementById('divValue2').style.display = 'none';
        } else {
          document.getElementById('divValue2').style.display = 'block';
          document.getElementById('divValue').style.display = 'none';
        }

        aselect = document.getElementById('mode');
        avalue = parseInt(aselect.options[aselect.selectedIndex].value);

        document.getElementById('divValue3').style.display = 'none';
        document.getElementById('divValue4').style.display = 'none';

        if(avalue == 2) {
          document.getElementById('divValue3').style.display = 'block';
        } else if(avalue >= 5 && avalue <= 15) {
          document.getElementById('divValue4').style.display = 'block';
        }
    })()">

      <span class="dbminputlabel">Поведение</span>
      <select id="modo" class="round" onchange="(function(){
        var aselect = document.getElementById('modo');
        var avalue = aselect.options[aselect.selectedIndex].value;

        if(avalue == '0') {
          document.getElementById('divValue').style.display = 'block';
          document.getElementById('divValue2').style.display = 'none';
        } else {
          document.getElementById('divValue2').style.display = 'block';
          document.getElementById('divValue').style.display = 'none';
        }
      })()">
        <option value="0">Текст</option>
        <option value="1">Eval</option>
      </select>

      <br>

      <span class="dbminputlabel">Изменить</span><br>
      <select id="mode" class="round" onchange="(function(){
        var aselect = document.getElementById('mode');
        var avalue = parseInt(aselect.options[aselect.selectedIndex].value);

        document.getElementById('divValue3').style.display = 'none';
        document.getElementById('divValue4').style.display = 'none';

        if(avalue == 2) {
          document.getElementById('divValue3').style.display = 'block';
        } else if(avalue >= 5 && avalue <= 15) {
          document.getElementById('divValue4').style.display = 'block';
        }
      })()">
        <option value="4" selected>Изменить все элементы</option>
        <option value="0">Изменить последний элемент</option>
        <option value="1">Изменить первый элемент</option>
        <option value="2">Изменить элемент по позиции</option>
        <option value="3">Изменить элемент случайным образом</option>
        <option value="5">Изменить все элементы, равные</option>
        <option value="6">Изменить все элементы, включающие</option>
        <option value="7">Изменить все элементы, меньшие чем</option>
        <option value="8">Изменить все элементы, меньшие или равные</option>
        <option value="9">Изменить все элементы, большие чем</option>
        <option value="10">Изменить все элементы, большие или равные</option>
        <option value="11">Изменить все элементы, длина которых больше</option>
        <option value="12">Изменить все элементы, длина которых меньше</option>
        <option value="13">Изменить все элементы, длина которых равна</option>
        <option value="14">Изменить все элементы, начинающиеся с</option>
        <option value="15">Изменить все элементы, заканчивающиеся на</option>
        <option value="16">Изменить все элементы, содержащие специальные символы</option>
        <option value="17">Изменить все элементы, которые являются четными числами</option>
        <option value="18">Изменить все элементы, которые являются нечетными числами</option>
        <option value="19">Изменить все элементы, которые являются числами</option>
        <option value="20">Изменить все элементы, которые являются текстом</option>
        <option value="21">Изменить все элементы, которые являются списками</option>
        <option value="22">Изменить все элементы, которые являются URL изображениями</option>
        <option value="23">Изменить все элементы, которые являются URL</option>
      </select>

      <br>

      <div id="divValue3">
        <span class="dbminputlabel">Позиция</span>
        <input class="round" id="position" type="text">
        <br>
      </div>

      <div id="divValue4">
        <span class="dbminputlabel">Значение</span>
        <input class="round" id="val" type="text">
        <br>
      </div>

      <span class="dbminputlabel">Тип управления</span>
      <select id="controle" class="round">
        <option value="0">Изменить значение</option>
        <option value="1">Добавить значение</option>
      </select>

      <br>

      <div id="divValue">
        <span class="dbminputlabel">Значение</span>
        <textarea class="round" id="value" rows="3"></textarea>
      </div>

      <div id="divValue2">
        <span class="dbminputlabel">Значение</span>
        <textarea class="round" id="valueeval" rows="3" name="is-eval"></textarea>
      </div>
    </div>
</dialog-list>
`;
  },

  //---------------------------------------------------------------------
  // Action Editor Init Code
  //
  // When the HTML is first applied to the action editor, this code
  // is also run. This helps add modifications or setup reactionary
  // functions for the DOM elements.
  //---------------------------------------------------------------------

  init() {
    const { glob, document } = this;
    
    glob.formatItem = function (data) {
      let result = '<div style="display: inline-block; width: 200px; padding-left: 8px;">';
      const mode = parseInt(data.mode);

      switch(mode) {
        case 0:
          result += "Изменить последний элемент";
          break;
        case 1:
          result += "Изменить первый элемент";
          break;
        case 2:
          result += `Изменить элемент на позиции ${data.position}`;
          break;
        case 3:
          result += "Изменить элемент случайным образом";
          break;
        case 4:
          result += "Изменить все элементы";
          break;
        case 5:
          result += `Изменить элементы, равные: ${data.val}`;
          break;
        case 6:
          result += `Изменить элементы, включающие: ${data.val}`;
          break;
        case 7:
          result += `Изменить элементы, меньшие чем: ${data.val}`;
          break;
        case 8:
          result += `Изменить элементы, меньшие или равные: ${data.val}`;
          break;
        case 9:
          result += `Изменить элементы, большие чем: ${data.val}`;
          break;
        case 10:
          result += `Изменить элементы, большие или равные: ${data.val}`;
          break;
        case 11:
          result += `Изменить элементы, длина которых больше: ${data.val}`;
          break;
        case 12:
          result += `Изменить элементы, длина которых меньше: ${data.val}`;
          break;
        case 13:
          result += `Изменить элементы, длина которых равна: ${data.val}`;
          break;
        case 14:
          result += `Изменить элементы, начинающиеся с: ${data.val}`;
          break;
        case 15:
          result += `Изменить элементы, заканчивающиеся на: ${data.val}`;
          break;
        case 16:
          result += "Изменить элементы, содержащие специальные символы";
          break;
        case 17:
          result += "Изменить элементы, являющиеся числами";
          break;
        case 18:
          result += "Изменить элементы, являющиеся нечетными числами";
          break;
        case 19:
          result += "Изменить элементы, являющиеся четными числами";
          break;
        case 20:
          result += "Изменить элементы, являющиеся текстом";
          break;
        case 21:
          result += "Изменить элементы, являющиеся списками";
          break;
        case 22:
          result += "Изменить элементы, являющиеся URL изображениями";
          break;
        case 23:
          result += "Изменить элементы, являющиеся URL";
          break;
      }

      result += "</div>";
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
    let list = this.getVariable(type, varName, cache);

    if(Array.isArray(list)) {
      const branches = data.branches;

      for(var i = 0; i < branches.length; i++) {
        let branch = branches[i];

        let mode = parseInt(branch.mode);
        let valor = this.evalMessage(branch.value, cache);
        let controle = parseInt(branch.controle);
        let val = this.evalMessage(branch.val, cache);

        if(parseInt(branch.modo) == 1) {
          try {
            valor = this.eval(branch.valueeval, cache);
          } catch {
            this.displayError(data, cache, e);
            return this.callNextAction(cache);
          }
        }

        switch(mode) {
          case 0:
            if(controle == 0) {
              list[list.length - 1] = valor;
            } else {
              list[list.length - 1] += valor;
            }
            break;
          case 1:
            if(controle == 0) {
              list[0] = valor;
            } else {
              list[0] += valor;
            }
            break;
          case 2:
            var position = parseInt(this.evalMessage(branch.position, cache));
            if(controle == 0) {
              list[position] = valor;
            } else {
              list[position] += valor;
            }
            break;
          case 3:
            var position = Math.abs(parseInt(Math.random() * list.length));
            if(controle == 0) {
              list[position] = valor;
            } else {
              list[position] += valor;
            }
            break;
          case 4:
            if(controle == 0) {
              for(var i = 0; i < list.length; i++) {
                list[i] = valor;
              }
            } else {
              for(var i = 0; i < list.length; i++) {
                list[i] += valor;
              }
            }
            break;
          case 5:
            if(controle == 0) {
              for(var i = 0; i < list.length; i++) {
                if(list[i].toString() == val.toString()) {
                  list[i] = valor;
                }
              }
            } else {
             for(var i = 0; i < list.length; i++) {
                if(list[i].toString() == val.toString()) {
                  list[i] += valor;
                }
              }
            }
            break;
          case 6:
            if(controle == 0) {
              for(var i = 0; i < list.length; i++) {
                if(list[i].toString().includes(val.toString())) {
                  list[i] = valor;
                }
              }
            } else {
              for(var i = 0; i < list.length; i++) {
                if(list[i].toString().includes(val.toString())) {
                  list[i] += valor;
                }
              }
            }
            break;
          case 7:
            if(controle == 0) {
              for(var i = 0; i < list.length; i++) {
                if(list[i] < val) {
                  list[i] = valor;
                }
              }
            } else {
             for(var i = 0; i < list.length; i++) {
                if(list[i] < val) {
                  list[i] += valor;
                }
              }
            }
            break;
          case 8:
            if(controle == 0) {
              for(var i = 0; i < list.length; i++) {
                if(list[i] <= val) {
                  list[i] = valor;
                }
              }
            } else {
             for(var i = 0; i < list.length; i++) {
                if(list[i] <= val) {
                  list[i] += valor;
                }
              }
            }
            break;
          case 9:
            if(controle == 0) {
              for(var i = 0; i < list.length; i++) {
                if(list[i] > val) {
                  list[i] = valor;
                }
              }
            } else {
             for(var i = 0; i < list.length; i++) {
                if(list[i] > val) {
                  list[i] += valor;
                }
              }
            }
            break;
          case 10:
            if(controle == 0) {
              for(var i = 0; i < list.length; i++) {
                if(list[i] >= val) {
                  list[i] = valor;
                }
              }
            } else {
             for(var i = 0; i < list.length; i++) {
                if(list[i] >= val) {
                  list[i] += valor;
                }
              }
            }
            break;
          case 11:
            if(controle == 0) {
              for(var i = 0; i < list.length; i++) {
                if(list[i].length > val) {
                  list[i] = valor;
                }
              }
            } else {
             for(var i = 0; i < list.length; i++) {
                if(list[i].length > val) {
                  list[i] += valor;
                }
              }
            }
            break;
          case 12:
            if(controle == 0) {
              for(var i = 0; i < list.length; i++) {
                if(list[i].length < val) {
                  list[i] = valor;
                }
              }
            } else {
             for(var i = 0; i < list.length; i++) {
                if(list[i].length < val) {
                  list[i] += valor;
                }
              }
            }
            break;
          case 13:
            if(controle == 0) {
              for(var i = 0; i < list.length; i++) {
                if(list[i].length == val) {
                  list[i] = valor;
                }
              }
            } else {
             for(var i = 0; i < list.length; i++) {
                if(list[i].length == val) {
                  list[i] += valor;
                }
              }
            }
            break;
          case 14:
            if(controle == 0) {
              for(var i = 0; i < list.length; i++) {
                if(list[i].toString().startsWith(val.toString())) {
                  list[i] = valor;
                }
              }
            } else {
             for(var i = 0; i < list.length; i++) {
                if(list[i].toString().startsWith(val.toString())) {
                  list[i] += valor;
                }
              }
            }
            break;
          case 15:
            if(controle == 0) {
              for(var i = 0; i < list.length; i++) {
                if(list[i].toString().endsWith(val.toString())) {
                  list[i] = valor;
                }
              }
            } else {
             for(var i = 0; i < list.length; i++) {
                if(list[i].toString().endsWith(val.toString())) {
                  list[i] += valor;
                }
              }
            }
            break;
          case 16:
            const conditions = ["Ä","Å","Á","Â","À","Ã","Ā","Ă","Ą","ā","ă","ą","ä","á","â","à","ã","É","Ê","Ë","È","Ė","Ę","Ě","Ĕ","Ē","ė","ę","ě","ĕ","ē","é","ê","ë","è","Í","Î","Ï","Ì","İ","Į","Ī","ı","į","ī","í","î","ï","ì","Ö","Ó","Ô","Ò","Õ","Ő","Ō","ő","ō","ö","ó","ô","ò","õ","Ü","Ú","Û","Ų","Ű","Ů","Ū","ų","ű","ů","ū","ü","ú","û","ù","Ç","Ć","Č","ç","ć","č","Ñ","Ň","Ņ","Ń","ñ","ň","ņ","ń","Ÿ","Ý","ý","Ź","Ż","Ž","ź","ż","ž","Ł","Ľ","Ļ","Ĺ","ł","ľ","ĺ","Ķ","ķ","Ģ","Ğ","ģ","ğ","Ď","ď","Ś","Š","Ş","ś","š","ş","Ť","Ț","Ţ","ť","ț","ţ","Ŕ","Ř","ŕ","ř"];
           
            if(controle == 0) {
              for(var i = 0; i < list.length; i++) {
                if(conditions.some(el => list[i].toString().includes(el))) {
                  list[i] = valor;
                }
              }
            } else {
              for(var i = 0; i < list.length; i++) {
                if(conditions.some(el => list[i].toString().includes(el))) {
                  list[i] += valor;
                }
              }
            }
            break;
          case 17:
            if(controle == 0) {
              for(var i = 0; i < list.length; i++) {
                if(list[i] % 2 == 0) {
                  list[i] = valor;
                }
              }
            } else {
             for(var i = 0; i < list.length; i++) {
                if(list[i] % 2 == 0) {
                  list[i] += valor;
                }
              }
            }
            break;
          case 18:
            if(controle == 0) {
              for(var i = 0; i < list.length; i++) {
                if(list[i] % 2 == 1) {
                  list[i] = valor;
                }
              }
            } else {
             for(var i = 0; i < list.length; i++) {
                if(list[i] % 2 == 1) {
                  list[i] += valor;
                }
              }
            }
            break;
          case 19:
            if(controle == 0) {
              for(var i = 0; i < list.length; i++) {
                if(!isNaN(parseFloat(list[i].toString().replace(",", ".")))) {
                  list[i] = valor;
                }
              }
            } else {
             for(var i = 0; i < list.length; i++) {
                if(!isNaN(parseFloat(list[i].toString().replace(",", ".")))) {
                  list[i] += valor;
                }
              }
            }
            break;
          case 20:
           if(controle == 0) {
              for(var i = 0; i < list.length; i++) {
                if(typeof list[i] === "string") {
                  list[i] = valor;
                }
              }
            } else {
             for(var i = 0; i < list.length; i++) {
                if(typeof list[i] === "string") {
                  list[i] += valor;
                }
              }
            }
            break;
          case 21:
           if(controle == 0) {
              for(var i = 0; i < list.length; i++) {
                if(Array.isArray(list[i])) {
                  list[i] = valor;
                }
              }
            } else {
             for(var i = 0; i < list.length; i++) {
                if(Array.isArray(list[i])) {
                  list[i] += valor;
                }
              }
            }
            break;
          case 22:
           const isImageUrl = require('is-image-url');

           if(controle == 0) {
              for(var i = 0; i < list.length; i++) {
                if(isImageUrl(list[i])) {
                  list[i] = valor;
                }
              }
            } else {
             for(var i = 0; i < list.length; i++) {
                if(isImageUrl(list[i])) {
                  list[i] += valor;
                }
              }
            }
            break;
          case 23:
           const isUrl = require('is-url');

           if(controle == 0) {
              for(var i = 0; i < list.length; i++) {
                if(isUrl(list[i])) {
                  list[i] = valor;
                }
              }
            } else {
             for(var i = 0; i < list.length; i++) {
                if(isUrl(list[i])) {
                  list[i] += valor;
                }
              }
            }
            break;
        }
      }

      this.storeValue(list, type, varName, cache);
      this.callNextAction(cache);
    } else {
      this.callNextAction(cache);
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