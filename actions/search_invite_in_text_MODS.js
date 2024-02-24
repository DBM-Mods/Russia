module.exports = {
    name: "Search invite info MOD",
    section: "Other Stuff",

    subtitle(data, presets) {
        if (data.descriptionx) {
            desccor = data.descriptioncolor;
        } else {
            desccor = "none";
        }

        const storeTypes = ['', 'Временой перменной', 'Серверной перменной', 'Глобальной  перменной', 'Параметров команды'];

        return data.description
        ? `<font style="color:${desccor}">${data.description}</font>`
        : `<font style="color:${desccor}">Найти приглашение из ${storeTypes[parseInt(data.storage1, 10)]} (${data.Text})</font>`
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
                        tipo = "true/false";
                        break;
                    case 1:
                        tipo = "Ссылка";
                        break;
                    case 2:
                        tipo = "Текст";
                        break;
                    case 3:
                        tipo = "Юзернейм пользователя";
                        break;
                    case 4:
                        tipo = "ID пользователя";
                        break;
                    case 5:
                        tipo = "Глобальное имя пользователя";
                        break;
                    case 6:
                        tipo = "Название сервера";
                        break;
                    case 7:
                        tipo = "Id сервера";
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

    fields: ["storage1", "Text", "varName", "branches", "description", "descriptionx", "descriptioncolor", "errcmd", "iffalse", "iffalseVal", "storageError", "varNameError", "actionsError"],

    html(isEvent, data) {
        return `
  <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновление</div>
  <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.1</div>

  <div style="width: 100%; padding:5px 5px;height: calc(100vh - 160px);overflow:auto">

  <tab-system>
  <tab label="Данные" icon="cloud download">
  <div style="width: 100%; padding:8px;height: calc(100vh - 210px);overflow:auto">

  <retrieve-from-variable allowSlashParams dropdownLabel="Переменная" selectId="storage1" variableContainerId="varNameContainer" variableInputId="Text"></retrieve-from-variable>

  </div>

  </dialog-list>

  </tab>

  <tab label="Инфо" icon="question circle">
  <div style="width: 100%; padding:8px;height: calc(100vh - 210px);overflow:auto">
  
  <dialog-list id="branches" fields='["info", "storage", "varName"]' dialogResizable dialogTitle="Store Invite" dialogWidth="600" dialogHeight="200" listLabel="Список" listStyle="height: calc(100vh - 320px);" itemName="Item" itemHeight="28px;" itemTextFunction="glob.formatItem(data)" itemStyle="line-height: 28px;">
        
    <div style="margin: 10px;">

        <span class="dbminputlabel">Информация</span>
        <select id="info" class="round">
          <optgroup label="Статусы">
            <option value="0">Присутствует приглашение? (true/false)</option>
          </optgroup>
          <optgroup label="Приглашение">
              <option value="1">Ссылка</option>
              <option value="2">Код приглашения</option>
          </optgroup>
          <optgroup label="Пользователь">
                <option value="3">Имя пользователя</option>
                <option value="4">Идентификатор (id) пользователя</option>
                <option value="5">Глобальное имя пользователя</option>
          </optgroup>
          <optgroup label="Сервер">
                <option value="6">Название сервера</option>
                <option value="7">Идентификатор (id) сервера</option>
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

    glob.refreshVariableList(document.getElementById('storage1'));

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
            result += "true/false";
            break;
          case 1:
            result += "Ссылка приглашения";
            break;
          case 2:
            result += "Код приглашения";
            break;
          case 3:
            result += "Юзернейм пользователя";
            break;
          case 4:
            result += "ID пользователя";
            break;
          case 5:
            result += "Глобальное имя пользователя";
            break;
          case 6:
            result += "Название сервера";
            break;
          case 7:
            result += "Id сервера";
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
        const storage2 = parseInt(data.storage1, 10);
        const varName2 = this.evalMessage(data.Text, cache);
        const text = this.getVariable(storage2, varName2, cache);

        const IsInvitation = require('is-discord-invite');
      
        const branches = data.branches;
      
        try {
          const Invite = await IsInvitation.online(text);
      
          for (var i = 0; i < branches.length; i++) {
            const branch = branches[i];
            const info = parseInt(branch.info);
      
            try {
              let result;
      
              switch (info) {
                case 0:
                  result = Invite.isInvitation;
                  break;
                case 1:
                  result = Invite?.url?.full;
                  break;
                case 2:
                  result = Invite?.url?.invitationCode;
                  break;
                case 3:
                  result = Invite?.inviter?.username;
                  break;
                case 4:
                  result = Invite?.inviter?.id;
                  break;
                case 5:
                  result = Invite?.inviter?.global_name;
                  break;
                case 6:
                  result = Invite?.guild?.name;
                  break;
                case 7:
                  result = Invite?.guild?.id;
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