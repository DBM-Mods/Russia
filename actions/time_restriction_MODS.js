module.exports = {

   
    name: "Time Restriction MOD",
    section: "Other Stuff",
    meta: {
        version: '2.1.7',
        preciseCheck: true,
        author: '[XinXyla - 172782058396057602]',
        authorUrl: 'https://github.com/DBM-Mods/Russia',
        downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
      },
   
      subtitle(data, presets) {
        return `${presets.getConditionsText(data)}`;
      },
    
     
    variableStorage: function (data, varType) {
        const type = parseInt(data.storage);
        if (type !== varType) return;
        let dataType = 'Число';
        return ([data.varName, dataType]);
    },
        
    fields: ["tipo", "timestamp", "restriction", "storage", "varName" ,"branch"],
    
        html: function(isEvent, data) {
        return `
        <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.1</div>
        <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>
        <div style="width: 100%; padding:10px 5px;height: calc(100vh - 170px);overflow:auto">

        <span class="dbminputlabel">Тип</span><br>
        <select id="tipo" class="round" onchange="glob.onComparisonChanged(this)">
            <option value="0" selected>Временная метка в секундах</option>
            <option value="1">Временная метка в миллисекундах</option>
            <option value="2">JSON / секунды</option>
            <option value="3">JSON / миллисекунды</option>
        </select>

        <br>

        <table><tr><td class="col5">
        <span class="dbminputlabel" name="xinelas1">Временная метка в базе данных / секунды</span><br>
            <input id="timestamp" class="round" type="text">
        </td>
        <td td class="col6">
        <span class="dbminputlabel" name="xinelas2">Ограничение по времени / секунды</span><br>
            <input id="restriction" class="round" type="text">
        </td></tr></table>
    
        <br>

        <div style="float: left; width: 35%">
        <span class="dbminputlabel">Сохранить оставшееся время</span><br>
            <select id="storage" class="round" onchange="glob.variableChange(this, 'varNameContainer')">
                ${data.variables[0]}
            </select>
        </div>
        <div id="varNameContainer" style="float: right; width: 62%">
        <span class="dbminputlabel">Имя переменной / Если больше 0, всегда будет ложь</span><br>
            <input id="varName" class="round" type="text">
        </div>
        <br><br><br>
        <hr class="subtlebar">


<div>
<conditional-input id="branch" style="padding-top: 8px;"></conditional-input></div>
</div>
<style>
    xinspace{padding:10px 0px 0px 0px;display:block}
    table{width:100%}
    .col{padding:0px 4px}
    .cols{padding:0px 4px;border:1px solid rgba(0,0,0,0.5)}
    .col1{width:35%;padding:0px 10px 0px 0px}
    .col2{width:65%}
    .col3{width:75%;padding:0px 10px 0px 0px}
    .col4{width:25%}
    .col5{width:50%;padding:0px 10px 0px 0px}
    .col6{width:50%}
    .xinelaslink {cursor:pointer}
</style>
        `
    },

    preInit(data, formatters) {
        return formatters.compatibility_2_0_0_iftruefalse_to_branch(data);
      },
      
      init() {
        const { glob, document } = this;
      
        glob.onComparisonChanged = function (event) {
          if (event.value == "0") {
                document.querySelector("[name='xinelas1']").innerText = (`Метка времени в базе данных / с`);
                document.querySelector("[name='xinelas2']").innerText = (`Ограничение времени / с`);
          }
          if (event.value == "1") {
          document.querySelector("[name='xinelas1']").innerText = (`Метка времени в базе данных / мс`);
          document.querySelector("[name='xinelas2']").innerText = (`Ограничение времени / мс`);
        }
        if (event.value == "2") {
          document.querySelector("[name='xinelas1']").innerText = (`Имя ограничения`);
          document.querySelector("[name='xinelas2']").innerText = (`Ограничение времени / с`);
        }
        if (event.value == "3") {
            document.querySelector("[name='xinelas1']").innerText = (`Имя ограничения`);
            document.querySelector("[name='xinelas2']").innerText = (`Ограничение времени / мс`);
          }
      }

      glob.onComparisonChanged(document.getElementById("tipo"));

      glob.variableChange(document.getElementById('storage'), 'varNameContainer');
    
    },
       
    async action(cache) {
        const data = cache.actions[cache.index];

        var restriction = parseFloat(this.evalMessage(data.restriction, cache))

        if(data.tipo == "0"){
        var bancodedados = parseFloat(this.evalMessage(data.timestamp, cache))
        var unix = parseInt(Date.now()/1000)}

        if(data.tipo == "1"){
        var bancodedados = parseFloat(this.evalMessage(data.timestamp, cache))
        var unix = parseInt(Date.now())
        }

        if(data.tipo == "2"){
            var fs = require("fs");
            var path = require("path");
            var member = await this.getMemberFromData(1, 0, cache);
            identidade = member.id
            pasta = "data"
    
            var filePath = path.join(process.cwd(), `${pasta}`, `timerestrictions.json`);
      
            if (!fs.existsSync(pasta)) {
              fs.mkdirSync(pasta, {
                  recursive: true
              });
          }
          
              if(!fs.existsSync(filePath)) {
                  fs.writeFileSync(filePath, "{}")
              }
          
              obj = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          
            if(identidade !== ""){
            if (obj[identidade] === undefined) {
              obj[identidade] = {};
            }
          }
    
          var unix = parseInt(Date.now()/1000)
          var dataName = this.evalMessage(data.timestamp, cache)
          var bancodedados = parseFloat(obj[identidade][dataName])
    
        if(obj[identidade][dataName] == undefined){var bancodedados = parseInt(Date.now()/1000)-parseInt(restriction)}
    
            }

        if(data.tipo == "3"){
        var fs = require("fs");
        var path = require("path");
        var member = await this.getMemberFromData(1, 0, cache);
        identidade = member.id
        pasta = "data"

        var filePath = path.join(process.cwd(), `${pasta}`, `timerestrictionms.json`);
  
        if (!fs.existsSync(pasta)) {
          fs.mkdirSync(pasta, {
              recursive: true
          });
      }
      
          if(!fs.existsSync(filePath)) {
              fs.writeFileSync(filePath, "{}")
          }
      
          obj = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      
        if(identidade !== ""){
        if (obj[identidade] === undefined) {
          obj[identidade] = {};
        }
      }

      var unix = parseInt(Date.now())
      var dataName = this.evalMessage(data.timestamp, cache)
      var bancodedados = parseFloat(obj[identidade][dataName])

    if(obj[identidade][dataName] == undefined){var bancodedados = parseInt(Date.now())-parseInt(restriction)}

        }

        let result
        let result2
        ignorar = 1

        calculo = parseInt(unix - bancodedados)
        result = parseInt(restriction - calculo)

        if(isNaN(calculo)){console.log(`Time Restriction Using Timestamp MOD: Что-то пошло не так // Метка времени:${bancodedados} // Ограничение удалено`)
        result = 0
        result2 = true
        ignorar = 2
      }

        if(isNaN(restriction)){console.log(`Time Restriction Using Timestamp MOD: Что-то пошло не так // Ограничение:${restriction} // Ограничение удалено`)
      result = 0
      result2 = true
      ignorar = 2
      }

        if(result < 1){result = 0}

        if(calculo >= restriction || ignorar == 2){
            result2 = true

            if(data.tipo == "2"){
              obj[identidade][dataName] = parseInt(Date.now()/1000)
              fs.writeFileSync(filePath, JSON.stringify(obj));
              }

            if(data.tipo == "3"){
            obj[identidade][dataName] = parseInt(Date.now())
            fs.writeFileSync(filePath, JSON.stringify(obj));
            }

        } else {
            result2 = false
        }
    
          if (result !== undefined) {
              const storage = parseInt(data.storage);
              const varName = this.evalMessage(data.varName, cache);
              this.storeValue(result, storage, varName, cache);
          }
	   
          this.executeResults(result2, data?.branch ?? data, cache);
    },
    

    
    modInit(data) {
        this.prepareActions(data.branch?.iftrueActions);
        this.prepareActions(data.branch?.iffalseActions);
      },
    
    
      mod() {},
    };
    
