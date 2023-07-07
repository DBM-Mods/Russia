module.exports = {
    name: "Store Qiwi MOD",
    section: "Control Qiwi",

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
                        tipo = "Число";
                        break;
                    case 2:
                        tipo = "Дата";
                        break;
                    case 3:
                        tipo = "Дата";
                        break;
                    case 4:
                        tipo = "Дата";
                        break;
                    case 5:
                        tipo = "Текст";
                        break;
                    case 6:
                        tipo = "Ссылка";
                        break;
                    case 7:
                        tipo = "Текст";
                        break;
                    case 8:
                        tipo = "Текст";
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
        author: '[lik_rus - 866884416151355392]',
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

    fields: ["varName", "description", "descriptionx", "descriptioncolor", "branches", "billd", "SECRET", "errcmd"],

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

  <div style="width: 100%; padding:5px 5px;height: calc(100vh - 160px);overflow:auto">

  <tab-system>
  <tab label="Инфо" icon="question circle">
  <div style="padding:8px">
  
  <dialog-list id="branches" fields='["info", "storage", "varName"]' dialogResizable dialogTitle="Store Qiwi" dialogWidth="600" dialogHeight="200" listLabel="Список" listStyle="height: calc(100vh - 320px);" itemName="Item" itemHeight="28px;" itemTextFunction="glob.formatItem(data)" itemStyle="line-height: 28px;">
        
    <div style="margin: 10px;">

        <span class="dbminputlabel">Информация</span>
        <select id="info" class="round">
          <optgroup label="Сумма">
            <option value="0">Валюта</option>
            <option value="1">Сумма значение</option>
          </optgroup>
          <optgroup label="Время">
              <option value="2">Измененная дата и время</option>
              <option value="3">Время создания платежа дата и время</option>
              <option value="4">Время окончания платежа дата и время</option>
          </optgroup>
          <optgroup label="Другое">
                <option value="5">Статус значение (PAID или WAITING или EXPIRED)</option>
                <option value="6">Платёжнная ссылка</option>
                <option value="7">Коментарий</option>
                <option value="8">billId</option>
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

        <span class="dbminputlabel">SECRET KEY</span><br>
        <input id="SECRET" class="round" type="text">
        <br>
        <span class="dbminputlabel">BillId</span><br>
        <input id="billd" class="round" type="text">

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
.td1{width:50%;padding:0px 5px 0px 0px}
.td2{width:25%;padding:0px 3px 0px 3px}
.td3{width:25%;padding:0px 0px 0px 5px}
.col1{width:35%;padding:0px 10px 0px 0px}
.col2{width:65%}
.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}

</style>

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
            let result = '<div style="display: inline-block; width: 200px; padding-left: 8px;">Хранить "';
            const info = parseInt(data.info);
          
            switch (info) {
              case 0:
                result += "Валюта";
                break;
              case 1:
                result += "Сумма значение";
                break;
              case 2:
                result += "Измененная дата и время";
                break;
              case 3:
                result += "Время создания платежа дата и время";
                break;
              case 4:
                result += "Время окончания платежа дата и время";
                break;
              case 5:
                result += "Статус значение (PAID или WAITING или EXPIRED)";
                break;
              case 6:
                result += "Платёжнная ссылка";
                break;
              case 7:
                result += "Коментарий";
                break;
              case 8:
                result += "billId";
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
        const QiwiBillPaymentsAPI = require('@qiwi/bill-payments-node-js-sdk');
        const SECRET_KEY = this.evalMessage(data.SECRET, cache);
        const billId = this.evalMessage(data.billd, cache);
        const qiwiApi = new QiwiBillPaymentsAPI(SECRET_KEY);
      
        const branches = data.branches;
      
        for (var i = 0; i < branches.length; i++) {
          const branch = branches[i];
          const info = parseInt(branch.info);
      
          try {
            const plate = await qiwiApi.getBillInfo(billId);
            let result;
      
            switch (info) {
              case 0:
                result = plate.amount.currency;
                break;
              case 1:
                result = plate.amount.value;
                break;
              case 2:
                result = plate.status.changedDateTime;
                break;
              case 3:
                result = plate.creationDateTime;
                break;
              case 4:
                result = plate.expirationDateTime;
                break;
              case 5:
                result = plate.status.value;
                break;
              case 6:
                result = plate.payUrl;
                break;
              case 7:
                result = plate.comment;
                break;
              case 8:
                result = plate.billId;
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
      },
      

    mod() { },
};