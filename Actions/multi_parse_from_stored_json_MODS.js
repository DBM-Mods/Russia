module.exports = {
  //---------------------------------------------------------------------
  // Action Name
  //
  // This is the name of the action displayed in the editor.
  //---------------------------------------------------------------------

  name: "Multi Parse From Stored Json MOD",

  //---------------------------------------------------------------------
  // Action Section
  //
  // This is the section the action will fall into.
  //---------------------------------------------------------------------

  section: "Member Control",

  //---------------------------------------------------------------------
  // Action Subtitle
  //
  // This function generates the subtitle displayed next to the name.
  //---------------------------------------------------------------------

  subtitle(data, presets) {
    if (data.descriptionx) {
      desccor = data.descriptioncolor;
    } else {
      desccor = "none";
    }

    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">Получить ${data.branches.length == 1 ? data.branches.length + " элемент" : data.branches.length + " элементы"}</font>`
  },

  variableStorage(data, varType) {
    let vars = [];
    const types = ["JSON", "Номер", "Текст", "Список", "True/False"];

    for (var i = 0; i < data.branches.length; i++) {
      if (data.branches[i].storage == varType) {
        vars.push(data.branches[i].varName);
        vars.push(types[parseInt(data.branches[i].formato)]);
      }
    }

    if (vars.length > 0) return vars;
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

  fields: ["varName", "storage", "debugMode", "description", "descriptionx", "descriptioncolor", "iffalse", "iffalseVal", "branches"],

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
  <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновление</div>
  <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.1</div>

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
      cursor: pointer;
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
      cursor: pointer;
    }
  </style>

  <tab-system>
    <tab label="Парсинг" icon="align left">
  
        <retrieve-from-variable dropdownLabel="Переменная" selectId="storage" variableContainerId="varNameContainer" variableInputId="varName" style="margin-top: 5px;"></retrieve-from-variable>
        
        <br><br><br><br>
        
        <dialog-list id="branches" fields='["jsonPath", "formato", "debug", "storage", "varName"]' dialogResizable dialogTitle="Настроить парсирование" dialogWidth="600" dialogHeight="400" listLabel="Парсы" listStyle="height: calc(100vh - 320px);" itemName="Item" itemHeight="28px;" itemTextFunction="glob.formatItem(data)" itemStyle="line-height: 28px;">
                
            <div style="margin: 10px;" onmouseover='(function(){
              const xinelaslink = document.getElementsByClassName("xinelaslink")[0];
              const url = xinelaslink.getAttribute("data-url");
              if (url) {
                xinelaslink.setAttribute("title", url);
                xinelaslink.addEventListener("click", (e) => {
                  e.stopImmediatePropagation();
                  console.log("Запуск URL: [" + url + "] в вашем браузере по умолчанию.");
                  require("child_process").execSync("start " + url);
                });
              }
            })()'>

                <span class="dbminputlabel" style="float: left";>JSON Path</span>
                <span class="xinelaslink dbminputlabel" style="float: right; cursor: pointer; text-decoration: underline;" data-url="http://goessner.net/articles/JsonPath/index.html#e2">Примеры</span>
                <input type="text" class="round" id="jsonPath">
        
                <br>

                <span class="dbminputlabel">Формат</span>
                <select id="formato" class="round">
                  <option value="0">Источник</option>
                  <option value="1">Номер</option>
                  <option value="2">Текст</option>
                  <option value="3">Список</option>
                  <option value="4">True/False</option>
                </select>

                <br>

                <span class="dbminputlabel">Опции</span><br>
                <div style="padding: 10px; background: rgba(0,0,0,0.2);">
                  <dbm-checkbox id="debug" label="Отладка в консоли"></dbm-checkbox>
                </div>

                <br>
        
                <div style="float: left; width: 35%;">
                  <span class="dbminputlabel">Хранить в</span>
                  <select id="storage" class="round">
                    ${data.variables[1]}
                  </select>
                </div>
        
                <div style="float: right; width: 60%;">
                  <span class="dbminputlabel">Имя переменной</span>
                  <input id="varName" class="round" type="text">
                </div>
            </div>
        </dialog-list>
    </tab>

    <tab label="Конфиг" icon="cogs">
        <div id="flutuador" style="padding: 0px 0px 15px 0px; margin-top: 5px;">
            <table style="width:100%;"><tr>
                <td>
                  <span class="dbminputlabel">Описание действия</span>
                  <br>
                  <input type="text" class="round" id="description" placeholder="Оставьте пустым, чтобы не использовалось!">
                </td>
                <td style="padding:0px 0px 0px 10px; width:70px";>
                  <div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px">
                      <dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox>
                  </div>
                  <br>
                  <input type="color" value="#ffffff" class="round" id="descriptioncolor">
                </td>
            </table>
        </div>
    </tab>

  </tab-system>
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

    const xinelaslinks = document.getElementsByClassName("xinelaslink");
    for (let x = 0; x < xinelaslinks.length; x++) {
      const xinelaslink = xinelaslinks[x];
      const url = xinelaslink.getAttribute("data-url");
      if (url) {
        xinelaslink.setAttribute("title", url);
        xinelaslink.addEventListener("click", (e) => {
          e.stopImmediatePropagation();
          console.log(`Запуск URL: [${url}] в браузере по умолчанию.`);
          require("child_process").execSync(`start ${url}`);
        });
      }
    }

    glob.formatItem = function (data) {
      const types = ["Источник", "Номер", "Текст", "Список", "True/False"];

      let result = `<div style="width: calc(100% - 40px); overflow: hidden; float: left;">Собрать: `;
      result += types[parseInt(data.formato)];
      result += `: "${data.jsonPath}" в "${data.varName}"</div><div style="color: #d77979; overflow: hidden; float: right; width:40px; text-align: right; padding: 0px 10px 0px 0px;">${data.debug ? '<i class="bug icon"></i>' : ""}</div>`;
      
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
    const Mods = this.getdbmmods();
    const data = cache.actions[cache.index];
    const jsonObjectVarName = this.evalMessage(data.varName, cache);
    var jsonData = this.getVariable(parseInt(data.storage, 10), jsonObjectVarName, cache);

    const branches = data.branches;

    if (typeof jsonData !== "object") {
      jsonData = JSON.parse(jsonData);
    }

    for (var i = 0; i < branches.length; i++) {
      const branch = branches[i];
      const path = this.evalMessage(branch.jsonPath, cache);
      const varName = this.evalMessage(branch.varName, cache);
      const storage = parseInt(branch.storage, 10);

      try {
        if (path && jsonData) {
          var outData = Mods.jsonPath(jsonData, path);

          if (outData == false) {
            outData = Mods.jsonPath(jsonData, `$.${path}`);
          }

          if (outData == false) {
            outData = Mods.jsonPath(jsonData, `$..${path}`)
          }

          if (branch.debug) console.log(outData);

          try {
            JSON.parse(JSON.stringify(outData));
          } catch (error) {
            const errorJson = JSON.stringify({ error, success: false });
            this.storeValue(errorJson, storage, varName, cache);
            this.displayError(data, cache, console.error(error.stack ? error.stack : error));
            continue;
          }

          var outValue = eval(JSON.stringify(outData), cache);

          switch (parseInt(branch.formato)) {
            case 1:
              outValue = parseFloat(outValue);
              break;
            case 2:
              outValue = String(outValue);
              break;
            case 3:
              outValue = String(outValue).split(",");
              break;
            case 4:
              outValue = Boolean(outValue);
              break;
          }

          if (outData.success === null || outValue.success === null) {
            const errorJson = JSON.stringify({
              error: "error",
              statusCode: 0,
              success: false
            });
            this.storeValue(errorJson, storage, varName, cache);
            this.displayError(data, cache, `1: Multi Parse From Stored Json MOD: Invalid JSON error, правильно ли установлен путь? [${path}]`);
            continue;

          } else if (!outValue || outValue.success === null) {

            const errorJson = JSON.stringify({
              error: "error",
              statusCode: 0,
              success: false
            });
            this.storeValue(errorJson, storage, varName, cache);
            this.displayError(data, cache, `2: Multi Parse From Stored Json MOD: Ошибка Invalid JSON, правильно ли задан путь? [${path}]`);
            continue;

          } else {
            this.storeValue(outValue, storage, varName, cache);
            if (branch.debug) console.log(`Multi Parse From Stored Json MOD: JSON [${jsonObjectVarName}] Значения от [${path}] до [${varName}] были сохранены`);
          }
        }
      } catch (error) {
        const errorJson = JSON.stringify({
          error,
          statusCode: 0,
          success: false,
        });
        this.storeValue(errorJson, storage, varName, cache);
        this.displayError(data, cache, `Multi Parse From Stored Json MOD: Ошибка: ${errorJson} сохранен для [${varName}].`);
        continue;
      }
    }

    this.callNextAction(cache);
  },

  //---------------------------------------------------------------------
  // Action Bot Mod
  //
  // Upon initialization of the bot, this code is run. Using the bot's
  // DBM namespace, one can add/modify existing functions if necessary.
  // In order to reduce conflicts between mods, be sure to alias
  // functions you wish to overwrite.
  //---------------------------------------------------------------------

  mod() { },
};