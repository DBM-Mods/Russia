module.exports = {
  name: 'Update Bot MOD',
  section: 'Other Stuff',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {
    const atualizar = [
      "",
      "Обновить все команды",
      "",
      `Обновить команду: ${data.alvo}`,
      "Обновить текущую команду",
    ]
    return `${atualizar[parseInt(data.atualizar, 10)]}`;
  },

  variableStorage (data, varType) {
    const type = parseInt(data.storage)
    if (type !== varType) return
    return ([data.varName, 'Текст'])
  },

  fields: ["atualizar", "alvo", "iffalse", "iffalseVal" , "debug", "storage", "varName"], 

  html: function(isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.3</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>

  <table style="width:100%"><tr><td>
    <span class="dbminputlabel">Обновить</span>
    <select id="atualizar" class="round" onchange="glob.onChange0(this)">
      <option value="1" selected>Все команды</option>
      <option value="3">Команда</option>
      <option value="4">Текущая команда</option>
    </select>
    </td><td style="padding:0px 0px 0px 8px;width:100px"><br>
<dbm-checkbox id="debug" label="Режим отладки"></dbm-checkbox>
</td></tr></table>
<br>
<div id="divxinxyla">
      <span class="dbminputlabel">Имя команды</span><br>
      <input id="alvo" class="round" type="text"></td>
      <br>

<div style="float: left; width: 35%; padding-top: 8px;">
<span class="dbminputlabel">Хранить в</span><br>
  <select id="storage" class="round" onchange="glob.variableChange(this, 'varNameContainer')">
  ${data.variables[0]}
  </select>
</div>
<div id="varNameContainer" style="float: right; display: none; width: 60%; padding-top: 8px;">
<span class="dbminputlabel">Имя переменной</span><br>
  <input id="varName" class="round" type="text">
</div><br><br><br><br>
 </div></div>

      <div style="padding-top: 8px;">
<div style="float: left; width: 40%">
<span class="dbminputlabel">Если не обновлено</span><br>
<select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
<option value="0">Продолжить действия</option>
<option value="1" selected>Остановить последовательность действий</option>
<option value="2">Перейти к действию</option>
<option value="3">Пропустить действия</option>
<option value="4">Перейти к якорю</option>
</select>
</div>

<div id="iffalseContainer" style="display: none; float: right; width: 55%;"><span id="xinelas" class="dbminputlabel">Para</span><br><input id="iffalseVal" class="round" name="actionxinxyla" type="text"></div>
</div>
<br><br>
`;
  },

  init: function () {
    const { glob, document } = this;


    glob.onComparisonChanged = function (event) {
      if (event.value > "1") {
        document.getElementById("iffalseContainer").style.display = null;
      } else {
        document.getElementById("iffalseContainer").style.display = "none";
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

  glob.onChange0 = function (event) {
    if (event.value == "3") {
      document.getElementById("divxinxyla").style.display = null;
    } else {
      document.getElementById("divxinxyla").style.display = "none";
    }
}

     glob.onChange0(document.getElementById("atualizar"));

    glob.onComparisonChanged(document.getElementById("iffalse"));

    glob.variableChange(document.getElementById('storage'), 'varNameContainer');


  },


  action: function(cache) {
    const data = cache.actions[cache.index];
    atualizar = this.evalMessage(data.atualizar, cache)
    commandName = this.evalMessage(data.alvo, cache)
    depurador = data.debug
    falhou = "false"
    gatilhosxin = "false"
    let resultados
    
    if(atualizar == "4"){

  const jp = this.getMods().require('jsonpath');
  var interaction = cache.interaction;

  if(interaction == null){atualizar = "4txt"}


  if(atualizar == "4txt"){
    commandName = jp.query(
        this.getDBM().Files.data.commands,
        `$..[?(@.name=="${cache.msg.content
          .slice(this.getDBM().Files.data.settings.tag.length || cache.server.tag.length)
          .split(/ +/)
          .shift()}")]`,
      )
      }

      if(atualizar == "4"){
        commandName = jp.query(
          this.getDBM().Files.data.commands,
          `$..[?(@.name=="${interaction.commandName}")]`,
        );
        }

       if(atualizar == "4txt"){
        commandName = cache.msg.content
            .slice(this.getDBM().Files.data.settings.tag.length || cache.server.tag.length)
            .split(/ +/)
            .shift()
        } else {
          commandName =
          jp.query(commandName, '$..name').length > 1 ? jp.query(commandName, '$..name')[0] : jp.query(commandName, '$..name'); }

        }

   const file = "./actions/dbmmods/update_bot_MODS.js"

    let code;
    
    const fs = require('fs');
   if(file && fs.existsSync(file)){
      try {
            code = fs.readFileSync(file, "utf8");
      } catch (error) {
         console.error(error.stack ? error.stack : error)
      }		
   }else
   {
    code = data.code;          
    }
    this.eval(code, cache);

    
 if(gatilhosxin == "1"){
  falhou = "true"
}
if(gatilhosxin == "2")
{
  resultados = captados
  falhou = "true"
}

if(gatilhosxin == "1" && depurador == true){
console.log(`O команд '${commandName}' не был найден`)
}
if(gatilhosxin == "2" && depurador == true)
{
console.log(`${captados.length} результатов\nВы имели в виду: ${captados}?`)
}
    
const storage = parseInt(data.storage);
const varName = this.evalMessage(data.varName, cache);
this.storeValue(resultados, storage, varName, cache)

    if(falhou == "true"){
    this.executeResults(false, data, cache)
    } else {
    this.callNextAction(cache);}
   
},

  mod() {},
};

/*
Copyright Willian Pereira (Discord: XinXyla#0001 = 172782058396057602),(Github: https://github.com/DBM-Mods)
dbmmods.com
DBM BRAZIL MODS
*/
