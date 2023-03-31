module.exports = {
  name: 'Parse From Stored Json MOD',
  section: 'JSON Things',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[Tempest - 321400509326032897]<br>[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data) {
    const storage = ['', 'Variavel Temporária', 'Variavel Servidor', 'Variavel Global'];
    return `JSON => ${storage[parseInt(data.varStorage, 10)]} (${data.jsonObjectVarName}) para ${storage[parseInt(data.storage, 10)]} (${data.varName})`;
  },

  variableStorage(data, varType) {
    if (parseInt(data.storage, 10) !== varType) return;
    if (varType === 'object') return [data.varName, 'JSON Object'];
    return [data.varName, `JSON ${varType} Value`];
  },

  fields: ['debugMode', 'varStorage', 'jsonObjectVarName', 'path', 'iffalse', 'iffalseVal', 'storage', 'varName'],

  html(_isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.4</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>

<table><tr><td class="sep1">
<span class="dbminputlabel">Переменная</span><br>
<select id="varStorage" class="round" onchange="glob.refreshVariableList(this)">
${data.variables[1]}
</select>
</td>
<td class="sep2">
<span class="dbminputlabel">Имя переменной</span><br>
<input id="jsonObjectVarName" class="round" type="text" list="variableList">
</td></tr></table>
 
 <br>


 <span class="dbminputlabel">JSON Path<span class="xinxylalink dbminputlabel" style="float:right" data-url="http://goessner.net/articles/JsonPath/index.html#e2">Примеры</span></span><br>
 <input id="path" class="round" type="text">

 <br><center>
<dbm-checkbox id="debugMode" label="Режим отладки"></dbm-checkbox></center>

<br>

<table>
<tr>
<td class="sep1">
<span class="dbminputlabel">Если возникает ошибка</span><br>
<select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
<option value="0" selected>Продолжать</option>
<option value="1">Остановить последовательность действий</option>
<option value="2">Перейти к действию</option>
<option value="3">Пропустить следующие действия</option>
<option value="4">Перейти к якову действия</option>
</select>
</td>
<td class="sep2">

<div id="iffalseContainer" style="display: none; float: right; width: 100%;"><span id="xinelas" class="dbminputlabel">Для</span><br><input id="iffalseVal" class="round" name="actionxinxyla" type="text"></div>
</div>
</td>
</tr>

</table>

<br>

<table>
<tr>
<td class="sep1"><span class="dbminputlabel">Хранить в</span><br>
<select id="storage" class="round">
  ${data.variables[1]}
</select></td>
<td class="sep2"><span class="dbminputlabel">Имя переменной</span><br>
<input id="varName" class="round" type="text"></td>
</tr>

</table>

<style>
span.xinxylalink {
  color: #99b3ff;
  text-decoration:underline;
  cursor:pointer;
}

span.xinxylalink:hover {
  color:#4676b9;
}
table{width:100%}
.sep1{padding:0px 8px 0px 0px;width:40%}
.sep2{padding:0px 0px 0px 0px;width:60%}
</style>
`;
  },

  init() {
    const { glob, document } = this;

    const xinxylalinks = document.getElementsByClassName('xinxylalink');
    for (let x = 0; x < xinxylalinks.length; x++) {
      const xinxylalink = xinxylalinks[x];
      const url = xinxylalink.getAttribute('data-url');
      if (url) {
        xinxylalink.setAttribute('title', url);
        xinxylalink.addEventListener('click', (e) => {
          e.stopImmediatePropagation();
          console.log(`URL: [${url}] В вашем браузере по умолчанию.`);
          require('child_process').execSync(`start ${url}`);
        });
      }
    }

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
      document.querySelector("[id='xinelas']").innerText = (`Якоря название`);
    }
  }

    glob.onComparisonChanged(document.getElementById("iffalse"));

  },

  async action(cache) {
    const Mods = this.getdbmmods();
    const data = cache.actions[cache.index];
    const varName = this.evalMessage(data.varName, cache);
    const storage = parseInt(data.storage, 10);
    const type = parseInt(data.varStorage, 10);
    const jsonObjectVarName = this.evalMessage(data.jsonObjectVarName, cache);
    const path = this.evalMessage(data.path, cache);
    const jsonRaw = this.getVariable(type, jsonObjectVarName, cache);
    const DEBUG = data.debugMode;

    let deuerro
    
    if (typeof jsonRaw !== "object") {
      var jsonData = JSON.parse(jsonRaw);
    } else {
      var jsonData = jsonRaw;
    }

    try {
      if (path && jsonData) {
        let outData = Mods.jsonPath(jsonData, path);

        if (outData === false) {
          outData = Mods.jsonPath(jsonData, `$.${path}`);
        }

        if (outData === false) {
          outData = Mods.jsonPath(jsonData, `$..${path}`);
        }

        if (DEBUG == true) console.log(outData);

        try {
          JSON.parse(JSON.stringify(outData));
        } catch (error) {
          var errorJson = JSON.stringify({ error, success: false });
          this.storeValue(errorJson, storage, varName, cache);
          console.error(error.stack ? error.stack : error);
          this.executeResults(false, data, cache)
        }

        var outValue = eval(JSON.stringify(outData), cache);

        if (outData.success === null || outValue.success === null) {
          const errorJson = JSON.stringify({
            error: 'error',
            statusCode: 0,
            success: false,
          });
          this.storeValue(errorJson, storage, varName, cache);
          console.log(`1: Разобрать из сохраненного мода Json: Ошибка недопустимого JSON, или путь определен правильно? [${path}]`)
          deuerro = "2"
        } else if (!outValue || outValue.success === null) {
          const errorJson = JSON.stringify({
            error: 'error',
            statusCode: 0,
            success: false,
          });
          this.storeValue(errorJson, storage, varName, cache);
          console.log(`2: Разобрать из сохраненного мода Json: Ошибка недопустимого JSON, или путь определен правильно? [${path}]`)
          deuerro = "2"
        } else {
          this.storeValue(outValue, storage, varName, cache);
          if (DEBUG == true) {
            console.log(`Синтаксический анализ из сохраненного Json MOD: JSON [${jsonObjectVarName}] Были сохранены значения [${path}] для [${varName}]`);
          }
        }
      }
    } catch (error) {
      var errorJson = JSON.stringify({
        error,
        statusCode: 0,
        success: false,
      });
      this.storeValue(errorJson, storage, varName, cache);
      console.error(`Синтаксический анализ из сохраненного Json MOD: Ошибка: ${errorJson} хранится для [${varName}]`);
      deuerro = "2"
    }

     if(deuerro == "2"){this.executeResults(false, data, cache)} else {this.callNextAction(cache)};
  },

  mod() {},
};
