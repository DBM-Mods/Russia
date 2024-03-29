module.exports = {
  name: "Server Data MOD",
  section: "Data",
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {
    const storage = presets.variables;
    const changeType = [``, `Изменять(${data.dataName})`,`Добавлять(${data.dataName})`,`Добавить текст(${data.dataName})`,`Добавить числовое значение(${data.dataName})`,`Удалить столбец(${data.dataName})`,`Проверять(${data.dataName})`];
    return `${presets.getServerText(data.server, data.varName)} / ${changeType[parseInt(data.changeType, 10)]} / ${storage[parseInt(data.storage, 10)]} (${data.varName2})`;
  },

  variableStorage(data, varType) {
    const type = parseInt(data.storage, 10);
    if (type !== varType) return;
    return [data.varName2, "Data" ];
  },

  fields: ["server", "varName", "dataName", "addType2", "changeType", "value" , "xvalue" , "xvalue2" , "comparison", "valueeval", "defaultVal", "defaultValeval", "addType3", "storage", "varName2", "branch"],

  html(isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.1</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>

    <tab-system style="margin-top: 20px;">


  <tab label="Сервера" icon="align left">
  <div id="xin">
  <div id="xinelas">
  <server-input dropdownLabel="Выбор сервера" selectId="server" variableContainerId="varNameContainer" variableInputId="varName"></server-input>
  <br><br><br>
  </div>
  </div>
  </tab>

  <tab label="Настройки" icon="align left">
  <div id="xin">
  <table>
  <tr>
  <td class="sep1" id="xinas"><div id="remcoluna">
  <span class="dbminputlabel">Имя столбца</span><br>
      <input id="dataName" class="round" type="text"></div>
  </td>
  <td class="sep2">
  <span class="dbminputlabel">Тип управления</span><br>
  <select id="changeType" class="round"  onchange="glob.onChange3(this)">
    <option value="0" selected>Ничего</option>
    <option value="1">Изменять</option>
    <option value="2">Добавлять</option>
    <option value="3">Добавить текст</option>
    <option value="4">Добавить числовое значение</option>
    <option value="5">Удалить столбец</option>
    <option value="6">Проверять</option>
  </select>
  
  </td>
  </tr>
  </table>
  <br>
  
  <div id="exclusao2">
  
    <div style="float: left; width: 35%;">
      <span class="dbminputlabel">Тип сравнения</span><br>
      <select id="comparison" class="round" onchange="glob.onComparisonChanged(this)">
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
  
    <table style="float: right;width: 65%;"><tr><td style="padding:0px 8px">
  
    <div style="width: 100%" id="directValue">
  
    <span class="dbminputlabel">Значение для сравнения</span>
    <input id="xvalue" class="round" type="text">
    </div></td>
  
    <td style="padding:0px 3px";>
    <div style="width: 100%;" id="containerxin">
    <span class="dbminputlabel">а также</span><br>
    <input id="xvalue2" class="round" type="text">
    </td></tr></table>
  
  <br><br><br>
  <conditional-input id="branch" style="padding-top: 8px;"></conditional-input>
  <br><br><br>
  </div>
  
  <div id="exclusao">
  
  <span class="dbminputlabel" name="xinelas">Значение</span> <div style="float:right;margin-top:-5px"><dbm-checkbox id="addType2" onchange="glob.onChange2(this)" label="Оценка" checked></dbm-checkbox></div><br>
  <div id="valor"><textarea id="value" rows="4" class="round" style="width:100%"></textarea></div>
  <div style="display:none" id="valoreval"><textarea id="valueeval" rows="4" name="is-eval" class="round" style="width:100%"></textarea></div>
  <br>
  </div>
  </div>
  </tab>

  <tab label="Вывод" icon="align left">
  <div id="xin">
  <div id="varNameContainer3">
  <span class="dbminputlabel" name="xinelas2">Значение по умолчанию (если данные не существуют)</span> <div style="float:right;margin-top:-5px"><dbm-checkbox id="addType3" onchange="glob.onChange4(this)" label="Оценка" checked></dbm-checkbox></div><br>
  <div id="valoreval2"><input id="defaultValeval" name="is-eval" class="round" type="text" value="0"></div>
  <div id="valor2"><input id="defaultVal" class="round" type="text" value="0"></div>
  <br>
  </div>
  
  <table>
  <tr>
  <td class="sep1"><span class="dbminputlabel">Хранить в</span><br>
  <select id="storage" class="round" onchange="glob.variableChange(this, 'varNameContainer2')">
    ${data.variables[0]}
  </select></td>
  <td class="sep0"><div id="varNameContainer2"><span class="dbminputlabel">Название</span><br>
  <input id="varName2" class="round" type="text"></div></td>
  </tr>
  </table>
  <br>
  </div>
  </tab>
  </tab-system>




<style>table{width:100%}
.sep1{width:50%;padding:0px 8px 0px 0px}
.sep2{width:50%;padding:0px 0px 0px 0px}
#xin{padding:12px 8px 8px 8px}
</style>


`;
  },

  preInit(data, formatters) {
    return formatters.compatibility_2_0_0_iftruefalse_to_branch(data);
  },

  init () {
    const { glob, document } = this

    glob.onComparisonChanged = function (event) {
      if (event.value === "0") {
        document.getElementById("directValue").style.display = "none";
        document.getElementById("containerxin").style.display = "none";
      } else {
        document.getElementById("directValue").style.display = null;
        document.getElementById("containerxin").style.display = "none";
      }
      if (event.value === "15") {
        document.getElementById("directValue").style.display = null;
        document.getElementById("containerxin").style.display = null;
      }
      if (event.value === "16" || event.value === "19" || event.value === "20" || event.value === "21" || event.value === "22" || event.value === "23" || event.value == "24" || event.value === "25") {
        document.getElementById("directValue").style.display = "none";
        document.getElementById("containerxin").style.display = "none";
      }
    };

    glob.onComparisonChanged(document.getElementById("comparison"));

    glob.onChange3 = function (event) {
    if (event.value == "5" || event.value == "0" || event.value == "7") {
      document.getElementById("exclusao").style.display = "none";
    } else {
    document.getElementById("exclusao").style.display = null;
    } 
    if (event.value == "6"){
      document.getElementById("exclusao").style.display = "none";
      document.getElementById("exclusao2").style.display = null;
    } else {
    document.getElementById("exclusao2").style.display = "none";
    }
  }

    glob.onChange3(document.getElementById("changeType"));

    glob.onChange2 = function (event) {
      if (event.value == true) {
        document.getElementById("valoreval").style.display = null;
        document.getElementById("valor").style.display = "none";
        document.querySelector("[name='xinelas']").innerText = (`Значение / Оценка`);
      } 
      if (event.value == false) {
        document.getElementById("valoreval").style.display = "none";
        document.getElementById("valor").style.display = null;
        document.querySelector("[name='xinelas']").innerText = (`Значение`);
      }
    };

    glob.onChange2(document.getElementById("addType2"));


    glob.onChange4 = function (event) {
      if (event.value == true) {
        document.getElementById("valoreval2").style.display = null;
        document.getElementById("valor2").style.display = "none";
        document.querySelector("[name='xinelas2']").innerText = (`Значение по умолчанию (если данные не существуют) / Оценка`);
      } 
      if (event.value == false) {
        document.getElementById("valoreval2").style.display = "none";
        document.getElementById("valor2").style.display = null;
        document.querySelector("[name='xinelas2']").innerText = (`Значение по умолчанию (если данные не существуют)`);
      }
    };

    glob.onChange4(document.getElementById("addType3"));

    glob.variableChange = function (event) {
      if (event.value == "0") {
        document.getElementById("varNameContainer2").style.display = "none";
        document.getElementById("varNameContainer3").style.display = "none";
      } else {
        document.getElementById("varNameContainer2").style.display = null
        document.getElementById("varNameContainer3").style.display = null;
      }
    };

    glob.variableChange(document.getElementById('storage'), 'varNameContainer2');

  },

  async action(cache) {
    const data = cache.actions[cache.index];
    const server = await this.getServerFromData(data.server, data.varName, cache);
    if (server?.data) {
      const dataName = this.evalMessage(data.dataName, cache)
      const isAdd = parseInt(data.changeType, 10)


      if(data.addType2 == false){
      val = this.evalMessage(data.value, cache)
      } else {
        val = this.evalMessage(data.valueeval, cache)
        try {
          val = this.eval(val, cache)
        } catch (e) {
          this.displayError(data, cache, e)
        }
      }

      if (val !== undefined) {
        if (Array.isArray(server)) {
          if (isAdd == "5") {
            server.forEach(function (mem) {
              if (mem?.addData) mem.setData(dataName);
            });
          }
          if (isAdd == "4") {
            server.forEach(function (mem) {
              if (mem?.addData){
                antes = mem.data(dataName)
              if(mem.data(dataName) == undefined || mem.data(dataName) == null || mem.data(dataName) == ""){antes = 0}
              mem.setData(dataName, (parseFloat(antes) + parseFloat(val)) )};
            });
          }
          if (isAdd == "3") {
            server.forEach(function (mem) {
              if (mem?.addData) mem.addData(dataName, val.toString());
            });
          }
          if (isAdd == "2") {
            server.forEach(function (mem) {
              if (mem?.addData) mem.addData(dataName, val);
            });
          }
          if (isAdd == "1") {
            server.forEach(function (mem) {
              if (mem?.setData) mem.setData(dataName, val);
            }
            
            );
          }
        } else {
          if (isAdd == "5") {
            server.setData(dataName);
          }
          if (isAdd == "4") {
            antes = server.data(dataName)
            if(server.data(dataName) == undefined || server.data(dataName) == null || server.data(dataName) == ""){antes = 0}
            server.setData(dataName, (parseFloat(antes) + parseFloat(val)) );
          }
          if (isAdd == "3") {
            server.addData(dataName, val.toString());
          }
          if (isAdd == "2") {
            server.addData(dataName, val);
          }
          if (isAdd == "1")  {
            server.setData(dataName, val);
          }
        }
      
    }

    if(data.addType3 == true){defVal = this.eval(this.evalMessage(data.defaultValeval, cache), cache)}
    if(data.addType3 == false){defVal = this.evalMessage(data.defaultVal, cache)}

      let result2
      if (defVal === undefined) {
        result2 = server.data(dataName)
      } else {
        result2 = server.data(dataName, defVal)
      }
      const storage = parseInt(data.storage, 10);
      const varName2 = this.evalMessage(data.varName2, cache);
      this.storeValue(result2, storage, varName2, cache);


      if (isAdd == "6"){
      result = false
      const val1 = server.data(dataName);
      const compare = parseInt(data.comparison, 10);
      let val2 = this.evalMessage(data.xvalue, cache);
      let val3 = this.evalMessage(data.xvalue2, cache);
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
            result = Boolean(val1.toString().match(new RegExp('^' + val2 + '$', 'i')));
            break;
          case 7:
            result = Boolean(val1.toString().length > val2);
            break;
          case 8:
            result = Boolean(val1.toString().length < val2);
            break;
          case 9:
            result = Boolean(val1.toString().length == val2);
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
            result = Boolean(val1.toString().match(new RegExp(val2)))
            break;
            case 15:
            var numberj = val1.toString();
            if(numberj >= val2 && val1 <= val3) {
            result = numberj}
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
      }
  
    }

    
    if (isAdd == "6"){this.executeResults(result, data?.branch ?? data, cache)}else{this.callNextAction(cache)}
  }
   
    },

    modInit(data) {
      this.prepareActions(data.branch?.iftrueActions);
      this.prepareActions(data.branch?.iffalseActions);
    },

    mod: function(DBM) {
    }
    
    };
