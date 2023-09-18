module.exports = {
    name: "Create Qiwi MOD",
    section: "Control Qiwi",

    subtitle(data, presets) {
        if (data.descriptionx) {
            desccor = data.descriptioncolor;
        } else {
            desccor = "none";
        }

        return data.description
        ? `<font style="color:${desccor}">${data.description}</font>`
        : `<font style="color:${desccor}">Создать для ${data.billd}</font>`
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

    const type = parseInt(data.storageError);

        if (type == varType) {
           vars.push(data.varNameError);
           vars.push("Текст ~ Ошибка");
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

    fields: ["tempo", "time", "opcao", "varName", "branches", "description", "descriptionx", "descriptioncolor", "billd", "SECRET", "currency", "amoun", "commen", "email", "link", "errcmd", "iffalse", "iffalseVal", "storageError", "varNameError", "actionsError"],

    html(isEvent, data) {
        return `
  <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновление</div>
  <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.4</div>

  <div style="width: 100%; padding:5px 5px;height: calc(100vh - 160px);overflow:auto">

  <tab-system>
  <tab label="Данные" icon="cloud download">
  <div style="padding:8px">

  <span class="dbminputlabel">BillId</span><br>
  <input id="billd" placeholder="Оставьте пустым для авто генерации" class="round" type="text">

  <br>

  <table style="width: 100%;">
  <td>
    <span class="dbminputlabel">Валюта</span>
    <select id="currency" class="round">
    <option value="RUB">RUB</option>
    <option value="KZT">KZT</option>
  </td>
  <td style="padding-left: 18px;">
    <span class="dbminputlabel">Сумма</span>
    <input id="amoun" placeholder="1.00" class="round" type="text">
  </td>
 </table>

 <br>

 <div style="float: left; width: 33%">
 <span class="dbminputlabel">Время</span>
 <select id="opcao" class="round" onchange="glob.change(this)">
   <option value="0">Вручную</option>
   <option value="1" selected>Стандартное (1 час)</option>
 </select>
</div>

<div id="campo1" style="float: left; width: 34%;padding:0px 3px">
 <span class="dbminputlabel">Вариант</span><br>
 <select id="tempo" class="round">
   <option value="0" selected>Секунды</option>
   <option value="1">Минуты</option>
   <option value="2">Часы</option>
   <option value="3">Дни</option>
 </select>
</div>
<div id="campo2" style="float: left; width: 33%">
 <span class="dbminputlabel">Количество</span><br>
 <input id="time" class="round" type="text">
</div>

 <br><br><br>

 <table style="width: 100%;">
 <td>
   <span class="dbminputlabel">Email</span>
   <input id="email" placeholder="Дополнительно" class="round" type="text">
 </td>
 <td style="padding-left: 10px;">
   <span class="dbminputlabel">Конечная ссылка</span>
   <input id="link" placeholder="Дополнительно" class="round" type="text">
 </td>
</table>

 <br>

 <span class="dbminputlabel">Коментарий</span><br>
 <input id="commen" placeholder="Дополнительно" class="round" type="text">

  </div>

  </dialog-list>

  </tab>

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

  <tab label="Конфиг" icon="settings">
  <div style="padding:8px">
  <table style="width:100%;"><tr>
<td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Оставьте пустым, чтобы не использовалось!"></td>
<td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
</tr></table>

<br>

<span class="dbminputlabel">SECRET KEY</span><br>
<input id="SECRET" class="round" type="text">

<br>

<span class="dbminputlabel">Опции</span><br><div style="padding:10px;background:rgba(0,0,0,0.2)">
<dbm-checkbox id="errcmd" label="Вывести ошибку на консоль" checked></dbm-checkbox>
</div>
</table>

<div id="divValueError">
<div style="float: left; width: 35%;">
 <span class="dbminputlabel">Хранить ошибку в</span>
 <select id="storageError" class="round" onchange="glob.variableChangeError(this, 'varNameContainer')">
   ${data.variables[0]}
 </select>
</div>

<div id="varNameContainerError" style="float: right; display: none; width: 60%;">
 <span class="dbminputlabel">Название переменной</span>
 <input id="varNameError" class="round" type="text">
</div>


   </div>

   <br><br><br>

   <div style="overflow:hidden;padding:4px 0px 0px 0px">
<div style="float: left; width: 38%" id="xinext">
<span class="dbminputlabel">Если возникает ошибка</span><br>
<select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
<option value="0" selected>Продолжить действия</option>
<option value="1">Остановить последовательность действий</option>
<option value="2">Перейти к действию</option>
<option value="3">Пропустить следующий действия</option>
<option value="4">Перейти к якорю действия</option>
<option value="5">Выполнить действия ниже и остановиться</option>
<option value="6">Выполнить действия ниже и продолжить</option>
</select>
</div>

<div id="iffalseContainer" style="display: none; float: right; width: 60%;">
<div id="xincontrol"><span id="xinelas" class="dbminputlabel">Para</span><br>
<input id="iffalseVal" class="round" name="actionxinxyla" type="text">
</div>
</div>

<div id="containerxin" style="width:100%;overflow:hidden">
<br>
<action-list-input id="actionsError" min-height="100" height="calc(100vh - 350px)"></action-list-input>
</div>

</div>
</div>
</tab>
</tab-system>

<style>

<style>

  table{width:100%}
  .dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
  .dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}
  
</style>
  `;
},
init() {
    const { glob, document } = this;

    glob.change = function(event) {
      if(event.value === "0") {
        document.getElementById("campo1").style.display = "block";
        document.getElementById("campo2").style.display = "block";
      } else {
        document.getElementById("campo1").style.display = "none";
        document.getElementById("campo2").style.display = "none";
      }
    }

    glob.change(document.getElementById("opcao"));

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
          document.querySelector("[id='xinelas']").innerText = (`Количество действий`);
      }
      if (event.value == "4") {
          document.querySelector("[id='xinelas']").innerText = (`Имя якоря`);
      }
  }

  glob.onComparisonChanged(document.getElementById("iffalse"));

  glob.variableChangeError = function (event) {
      if (event.value == "0") {
          document.getElementById("varNameContainerError").style.display = "none";
      } else {
          document.getElementById("varNameContainerError").style.display = null;
      }
  }

  glob.variableChangeError(document.getElementById("storageError"));
  
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
        const billId1 = this.evalMessage(data.billd, cache);
        const amount = this.evalMessage(data.amoun, cache);
        const comment = this.evalMessage(data.commen, cache);
        const currency = this.evalMessage(data.currency, cache);
        const email = this.evalMessage(data.email, cache);
        const link = this.evalMessage(data.link, cache);
        const qiwiApi = new QiwiBillPaymentsAPI(SECRET_KEY);
        const tempo = parseInt(data.tempo, 10);

        const billId = billId1 ? billId1 : qiwiApi.generateId();

        let time = this.evalMessage(data.time, cache);
        if(data.opcao === "0") {
          switch (tempo) {
            case 0: 
            time = time ? new Date(Date.now() + time * 1000 + 25200000) : null;
            break;
            case 1: 
            time = time ? new Date(Date.now() + time * 60000 + 25200000) : null;
            break;
            case 2:
              time = time ? new Date(Date.now() + time * 3600000 + 25200000) : null;
            break;
            case 3:
              time = time ? new Date(Date.now() + time * 86400000 + 25200000) : null;
            break;
          }
        } else {
          time = new Date(parseInt(Date.now() + 28800000));
        }
      
        const branches = data.branches;
      
        const fields = {
          amount: amount,
          currency: currency,
          expirationDateTime: time.toISOString().replaceAll("Z", "+07:00"),
          successUrl: link,
        };
      
        if (comment) {
          fields.comment = comment;
        }
      
        if (email) {
          fields.email = email;
        }
      
        if (link) {
          fields.successUrl = link;
        }
      
        try {
          const plate = await qiwiApi.createBill(billId, fields);
      
          for (var i = 0; i < branches.length; i++) {
            const branch = branches[i];
            const info = parseInt(branch.info);
      
            try {
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
  
              this.storeValue(error, parseInt(data.storageError), this.evalMessage(data.varNameError, cache), cache)
    
              if (data.errcmd === true) {
                console.log('ERROR: ' + cache.toString() + ' - Action ' + (cache.index + 1) + '# ' + data.name);
                console.log(error);
              }
        
              if (data.iffalse == "5" || data.iffalse == "6") {
        
                if (data.iffalse == "5") {
                  this.executeSubActions(data.actionsError, cache)
                } else {
                  this.executeSubActionsThenNextAction(data.actionsError, cache)
                }
        
              } else {
                this.executeResults(false, data, cache);
              }
    
            }
          }
  
          this.callNextAction(cache);
    
        } catch (error) {
    
          this.storeValue(error, parseInt(data.storageError), this.evalMessage(data.varNameError, cache), cache)
    
          if (data.errcmd === true) {
            console.log('ERROR: ' + cache.toString() + ' - Action ' + (cache.index + 1) + '# ' + data.name);
            console.log(error);
          }
    
          if (data.iffalse == "5" || data.iffalse == "6") {
    
            if (data.iffalse == "5") {
              this.executeSubActions(data.actionsError, cache)
            } else {
              this.executeSubActionsThenNextAction(data.actionsError, cache)
            }
    
          } else {
            this.executeResults(false, data, cache);
          }
    
    
        }
      },
      
      modInit(data) {
        this.prepareActions(data.actionsError);
      },
      

mod() { },
};