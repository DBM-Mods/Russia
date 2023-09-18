module.exports = {
    name: "Store Twitch User MOD",
    section: "Control Twitch",

    subtitle(data, presets) {
        if (data.descriptionx) {
            desccor = data.descriptioncolor;
        } else {
            desccor = "none";
        }

        return data.description
        ? `<font style="color:${desccor}">${data.description}</font>`
        : `<font style="color:${desccor}">Получить ${data.branches.length == 1 ? data.branches.length + " информаций" : data.branches.length + " информаций"}</font>`
    },

    variableStorage(data, varType) {
        let vars = [];

        for(var i = 0; i < data.branches.length; i++) {
            const type = parseInt(data.branches[i].storage, 10);
            const varName = data.branches[i].varName;

            if(type == varType && varName) {
                let tipo;

                switch(parseInt(data.branches[i].info)) {
                    case 0:
                        tipo = "Текст";
                        break;
                    case 1:
                        tipo = "Текст";
                        break;
                    case 2:
                        tipo = "Текст";
                        break;
                    case 3:
                        tipo = "Ссылка";
                        break;
                    case 4:
                        tipo = "Ссылка";
                        break;
                    case 5:
                        tipo = "Ссылка";
                        break;
                }

                vars.push(varName);
                vars.push(tipo);
            }
        }

        if (vars.length > 0) {
            return vars;
        }
    },

    meta: {
        version: '2.1.7',
        preciseCheck: true,
        author: '[lik_rus - 866884416151355392]',
        authorUrl: 'https://github.com/DBM-Mods/Russia',
        downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
    },

    fields: ["varName", "description", "descriptionx", "descriptioncolor", "branches", "names", "errcmd"],

    html(isEvent, data) {
        return `
  <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновление</div>
  <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.1</div>

  <div style="width: 100%; padding:5px 5px;height: calc(100vh - 160px);overflow:auto">

  <tab-system>
  <tab label="Инфо" icon="question circle">
  <div style="padding:8px">
  
  <dialog-list id="branches" fields='["info", "storage", "varName"]' dialogResizable dialogTitle="Store Twitch" dialogWidth="600" dialogHeight="200" listLabel="Список" listStyle="height: calc(100vh - 320px);" itemName="Item" itemHeight="28px;" itemTextFunction="glob.formatItem(data)" itemStyle="line-height: 28px;">
        
    <div style="margin: 10px;">

        <span class="dbminputlabel">Информация</span>
        <select id="info" class="round">
          <optgroup label="Инфо">
            <option value="0">Никнейм</option>
            <option value="1">Отображаемое имя</option>
            <option value="2">Описание</option>
          </optgroup>
          <optgroup label="Ссылки">
              <option value="3">Стример</option>
              <option value="4">Аватарка</option>
              <option value="5">Стрим</option>
        </select>
  
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
      
        </div>
        </tab>

        <tab label="Данные" icon="cloud download">
        <div style="padding:8px">

        <span class="dbminputlabel">Id канала</span><br>
        <input id="names" placeholder="twitch.tv/идентификатор_стримера" class="round" type="text">

        </div>

        </dialog-list>

        </tab>

        <tab label="Конфиг" icon="settings">
        <div style="padding:8px">
        <table style="width:100%;"><tr>
      <td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Оставьте пустым, чтобы не использовалось!"></td>
      <td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
      </tr></table>
      
      <br>
      
      <span class="dbminputlabel">Опции</span><br><div style="padding:10px;background:rgba(0,0,0,0.2)">
      <dbm-checkbox id="errcmd" label="Вывести ошибку на консоль" checked></dbm-checkbox>
      </div>
    </table>

    </div>
    </div>
    </tab>
    </tab-system>

<style>

table{width:100%}
.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}

</style>

  `;
    },

    init() {
        const { glob, document } = this;
      
        glob.formatItem = function (data) {
            let result = '<div style="display: inline-block; width: 200px; padding-left: 8px;">Хранить "';
            const info = parseInt(data.info);
          
            switch (info) {
              case 0:
                result += "Никнейм";
                break;
              case 1:
                result += "Отображаемое имя";
                break;
              case 2:
                result += "Описание";
                break;
              case 3:
                result += "(Url) Стример";
                break;
              case 4:
                result += "(Url) Аватарка";
                break;
              case 5:
                result += "(Url) Стрим";
                break;
            }
          
            result += `" в "${data.varName}" </div>`;
            return result;
          };
          
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
        },

    async action(cache) {
        const data = cache.actions[cache.index];
        const simpleTwitch = require("simple-twitch-info");
        const streamerName = this.evalMessage(data.names, cache);

      
        const branches = data.branches;
      
        try {
            const user = await simpleTwitch.getUser(streamerName);
        
            for (var i = 0; i < branches.length; i++) {
              const branch = branches[i];
              const info = parseInt(branch.info);
        
              try {
                let result;
        
                switch (info) {
                  case 0:
                    result = user.username;
                    break;
                  case 1:
                    result = user.displayName;
                    break;
                  case 2:
                    result = user.description;
                    break;
                  case 3:
                    result = user.url;
                    break;
                  case 4:
                    result = user.image;
                    break;
                  case 5:
                    result = user.player;
                    break;
                }
        
                const varName = this.evalMessage(branch.varName, cache);
                const storage = parseInt(branch.storage, 10);
                this.storeValue(result, storage, varName, cache);
              } catch (error) {
                if (data.errcmd === true) {
                  console.log('ERROR: ' + cache.toString() + ' - Action ' + (cache.index + 1) + '# ' + data.name);
                  console.log(error);
                }
              }
            }
        
            this.callNextAction(cache);
          } catch (error) {
            if (data.errcmd === true) {
              console.log('ERROR: ' + cache.toString() + ' - Action ' + (cache.index + 1) + '# ' + data.name);
              console.log(error);
            }
          }
        },
        
        
  
  mod() { },
  };