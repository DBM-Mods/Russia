module.exports = {
  name: "Edit Select Menu Options MOD",
  section: "Messaging",
  meta: {
    version: '2.1.6',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {

    if (data.descriptionx == true) {
      desccor = data.descriptioncolor
    } else {
      desccor = 'none'
    }

    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">Добавить ${data.branches.length == 1 ? data.branches.length + " пункт" : data.branches.length + " вариант"}</font>`
  },

  variableStorage(data, varType) {
    if (parseInt(data.errs, 10) !== varType) return;
    return [data.errv, "Текст ~ Ошибка"];
  },


  fields: ["message", "messageVarName", "type", "searchValue", "acao", "descriptioncolor", "description", "descriptionx", "iffalse", "iffalseVal", "errs", "errv", "errcmd", "actionserr", "branches"],


  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.1</div>
    <tab-system>

    <tab label="Вариант" icon="wizard">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">

    <dialog-list id="branches" fields='["label", "description", "value", "emoji", "val1", "val2", "comparar", "formula"]' dialogResizable dialogTitle="Вариант" dialogWidth="600" dialogHeight="400" listLabel="Варианты" listStyle="height: calc(100vh - 280px);" itemName="Item" itemHeight="28px;" itemTextFunction="glob.formatItem(data)" itemStyle="line-height: 28px;">
    <div style="padding: 16px;background:rgba(0,0,0,0.3)">
    <span class="dbminputlabel">Показывать</span><br>
    <select id="formula" class="round">
    <option value="0" selected>Всегда отображать / игнорировать сравнения ниже</option>
    <option value="1">Отобразить вариант, если получено значение False</option>
    <option value="2">Отобразить вариант, если получено значение True</option>
  </select>
  <br>
     <table style="width:100%"><tr><td>
       <span class="dbminputlabel">Значение A</span><br>
       <input id="val1" class="round" type="text">
       </td>
       <td>
       <span class="dbminputlabel">Сравнения</span><br>
       <select id="comparar" class="round">
       <option value="0">Значение A - существует</option>
       <option value="1" selected>Равно</option>
       <option value="2">Точно так же</option>
       <option value="3">Меньше, чем</option>
       <option value="13">Меньше или равно</option>
       <option value="4">Больше, чем</option>
       <option value="12">Больше или равно</option>
       <option value="5">Включать</option>
       <option value="6">Соответствует регулярному выражению</option>
       <option value="14">Соответствует полному регулярному выражению</option>
       <option value="7">Длина больше, чем</option>
       <option value="8">Длина меньше, чем</option>
       <option value="9">Длина равна</option>
       <option value="10">Начинается с</option>
       <option value="11">Заканчивается</option>
       <option value="16">Значение А имеет акценты?</option>
       <option value="17">Включает слова  ["a" , "b" , "c"]</option>
       <option value="18">Это то же самое, что слова  ["a" , "b" , "c"]</option>
       <option value="19">Является ли значение A четным числом?</option>
       <option value="20">Является ли значение A нечетным числом?</option>
       <option value="21">Является ли значение A числом?</option>
       <option value="24">Значение A - это текст?</option>
       <option value="23">Значение A - это URL адрес изображения?</option>
       <option value="25">Значение A - это URL?</option>
     </select>
      </td>
       <td>
       <span class="dbminputlabel">Значение B</span><br>
       <input id="val2" class="round" type="text">
       </td>
       </tr></table>

</div>
<div style="padding:12px">

      <div style="float: left; width: calc(50% - 12px);">
        <span class="dbminputlabel">Имя</span>
        <input id="label" class="round" type="text">

        <br>

        <span class="dbminputlabel">Значение ~ не может быть повторено</span>
        <input id="value" placeholder="Передается во временную переменную..." class="round" type="text">
      </div>
      <div style="float: right; width: calc(50% - 12px);">
        <span class="dbminputlabel">Описание</span>
        <input id="description" placeholder="Оставьте пустым, чтобы не использовалось!" class="round" type="text">

        <br>

        <span class="dbminputlabel">Эмодзи</span>
        <input id="emoji" placeholder="Оставьте пустым, чтобы не использовалось!" class="round" type="text">
      </div>

      <br><br>

    </div>
</dialog-list>
</div>
    </tab>
    <tab label="Меню" icon="align left">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">


    <message-input dropdownLabel="Исходное сообщение" selectId="message" variableContainerId="varNameContainer" variableInputId="messageVarName"></message-input>

<br><br><br><xinspace>

<div style="float: left; width: calc(50% - 12px);">
  <span class="dbminputlabel">Меню для редактирования</span><br>
  <select id="type" class="round" onchange="glob.onButtonSelectTypeChange(this)">
    <option value="allSelects">Все селект меню</option>
    <option value="sourceSelect" selected>Этот же селект меню</option>
    <option value="findSelect">Селект меню на выбор</option>
  </select>
</div>

<div style="float: right; width: calc(50% - 12px);">
  <div id="nameContainer">
    <span class="dbminputlabel">Метка меню/идентификатор (ID)</span><br>
    <input id="searchValue" class="round" type="text">
  </div>
</div>

<br><br><br><xinspace>

<span class="dbminputlabel">Действие</span><br>
<select id="acao" class="round">
  <option value="0" selected>Добавить параметры в меню</option>
  <option value="1">Использовать только параметры в меню</option>
</select>

<br>

</div>
    </tab>

    <tab label="Конфиг" icon="cogs">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">

    <div id="flutuador" style="padding:0px 0px 15px 0px">
    <table style="width:100%;"><tr>
    <td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Оставьте пустым, чтобы не использовалось!"></td>
    <td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
    </tr></table>
    </div>
  

<span class="dbminputlabel">Опции</span><br><div style="padding:10px;background:rgba(0,0,0,0.2)">
<dbm-checkbox id="errcmd" label="Отображение ошибки в консоли" checked></dbm-checkbox>
</div>

<div style="padding-top:8px">
      <table>
        <tr>
        <td class="col1"><span class="dbminputlabel">Ошибка в</span><br>
        <select id="errs" value="0" class="round" onchange="glob.variableChange(this, 'varerrsv')">
          ${data.variables[0]}
        </select></td>
        <td class="col2"><div id="varerrsv"><span class="dbminputlabel">Имя переменной</span><br>
        <input id="errv" class="round" type="text"></div></td>
        </tr>
        </table>
      </div>

      <br>
      
<div>
<div style="float: left; width: 38%" id="xinext">
<span class="dbminputlabel">Если возникает ошибка</span><br>
<select id="iffalse" class="round" onchange="glob.onComparisonChanged2(this)">
<option value="0" selected>Продолжить действия</option>
<option value="1">Остановить последовательность действий</option>
<option value="2">Перейти к действию</option>
<option value="3">Пропустить следующие действия</option>
<option value="4">Перейти к якорю действий</option>
<option value="5">Выполнять действия и останавливаться</option>
<option value="6">Выполнять действия и продолжать</option>
</select>
<br>
</div>
<div id="iffalseContainer" style="display: none; float: right; width: 60%;"><div id="xincontrol"><span id="xinelas" class="dbminputlabel">Для</span><br><input id="iffalseVal" class="round" name="actionxinxyla" type="text"></div>
</div><br></div>
<div id="containerxin" style="width:100%">
<br><br>
<action-list-input id="actionserr" height="calc(100vh - 450px)"></action-list-input>
</div>



</div>
</tab>
</tab-system>
<style>
    xinspace{padding:5px 0px 0px 0px;display:block}
    table{width:100%}
.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}
.col1{width:35%;padding:0px 10px 0px 0px}
.col2{width:65%}
</style>
`;
  },


  init() {
    const { glob, document } = this;

    const xinelaslinks = document.getElementsByClassName('xinelaslink');
    for (let x = 0; x < xinelaslinks.length; x++) {
      const xinelaslink = xinelaslinks[x];
      const url = xinelaslink.getAttribute('data-url');
      if (url) {
        xinelaslink.setAttribute('title', url);
        xinelaslink.addEventListener('click', (e) => {
          e.stopImmediatePropagation();
          console.log(`Запуск URL: [${url}] В вашем браузере по умолчанию.`);
          require('child_process').execSync(`start ${url}`);
        });
      }
    }
    glob.variableChange(document.getElementById('errs'), 'varerrsv');

    glob.onButtonSelectTypeChange = function (event) {
      const input = document.getElementById("nameContainer");
      input.style.display = event.value === "findSelect" ? null : "none";
    };
    glob.onButtonSelectTypeChange(document.getElementById("type"));
    
    glob.formatItem = function (data) {
      let result = `<table style="width:100%"><tr><td style="width:6%">${data.emoji}</td><td style="width:47%">Имя: ${data.label}</td><td style="width:47%">Значение: ${data.value}</td></tr></table>`;
      return result;
    };

    glob.onComparisonChanged2 = function (event) {
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
        document.querySelector("[id='xinelas']").innerText = (`Пропустить действия`);
      }
      if (event.value == "4") {
        document.querySelector("[id='xinelas']").innerText = (`Имя якоря`);
      }
    }

    glob.onComparisonChanged2(document.getElementById("iffalse"));

  },

  async action(cache) {
    const data = cache.actions[cache.index];
    const message = await this.getMessageFromData(data.message, data.messageVarName, cache);

    const type = data.type;

    let sourceSelect = null;
    if (cache.interaction.isSelectMenu()) {
      sourceSelect = cache.interaction.customId;
    }



    let newOptionData = null

    var onSelectMenuFound = (select) => {
      if (select) {
        if (!select.options) select.options = [];
        if (select) {

          const branches = data.branches
          if (!select.options) select.options = [];

          if (data.acao == "1") select.options = [];

          for (var i = 0; i < branches.length; i++) {
            const optionChange = branches[i];

            let newOptionData = {
              label: this.evalMessage(optionChange.label, cache),
              value: this.evalMessage(optionChange.value, cache),
              default: false,
            };
            if (optionChange.description) {
              newOptionData.description = this.evalMessage(optionChange.description, cache);
            }
            if (optionChange.emoji) {
              newOptionData.emoji = this.evalMessage(optionChange.emoji, cache)
            }

            val1 = this.evalMessage(optionChange.val1, cache);
            val2 = this.evalMessage(optionChange.val2, cache);
            result = true;

            if (optionChange.formula == "1" || optionChange.formula == "2") {
              const compare = parseInt(optionChange.comparar, 10);
              if (compare !== 6) {
                val1 = this.evalIfPossible(val1, cache)
                val2 = this.evalIfPossible(val2, cache)
              }
              switch (compare) {
                case 0:
                  if (typeof val1 !== 'undefined') {
                    result = true
                  } else {
                    result = false
                  }
                  break;
                case 1:
                  result = val1 == val2;
                  break;
                case 2:
                  result = val1 === val2;
                  break;
                case 3:
                  result = parseFloat(val1) < parseFloat(val2);
                  break;
                case 4:
                  result = parseFloat(val1) > parseFloat(val2);
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
                case 16:
                  const conditions = ["Ä", "Å", "Á", "Â", "À", "Ã", "Ā", "Ă", "Ą", "ā", "ă", "ą", "ä", "á", "â", "à", "ã", "É", "Ê", "Ë", "È", "Ė", "Ę", "Ě", "Ĕ", "Ē", "ė", "ę", "ě", "ĕ", "ē", "é", "ê", "ë", "è", "Í", "Î", "Ï", "Ì", "İ", "Į", "Ī", "ı", "į", "ī", "í", "î", "ï", "ì", "Ö", "Ó", "Ô", "Ò", "Õ", "Ő", "Ō", "ő", "ō", "ö", "ó", "ô", "ò", "õ", "Ü", "Ú", "Û", "Ų", "Ű", "Ů", "Ū", "ų", "ű", "ů", "ū", "ü", "ú", "û", "ù", "Ç", "Ć", "Č", "ç", "ć", "č", "Ñ", "Ň", "Ņ", "Ń", "ñ", "ň", "ņ", "ń", "Ÿ", "Ý", "ý", "Ź", "Ż", "Ž", "ź", "ż", "ž", "Ł", "Ľ", "Ļ", "Ĺ", "ł", "ľ", "ĺ", "Ķ", "ķ", "Ģ", "Ğ", "ģ", "ğ", "Ď", "ď", "Ś", "Š", "Ş", "ś", "š", "ş", "Ť", "Ț", "Ţ", "ť", "ț", "ţ", "Ŕ", "Ř", "ŕ", "ř"]
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

            if (optionChange.formula == "1") {
              if (result == false) {
                result = true
              } else { result = false }
            }

            if(result == true){
            select.options.push({ ...newOptionData })};

          }

        }
      }

    }




    let components = null;
    let searchValue = null;

    if (message?.components) {

      const { MessageActionRow } = this.getDBM().DiscordJS;
      const oldComponents = message.components;
      const newComponents = [];

      for (let i = 0; i < oldComponents.length; i++) {

        const compData = oldComponents[i];
        const comps = (compData instanceof MessageActionRow) ? compData.toJSON() : compData;

        for (let j = 0; j < comps.components.length; j++) {

          const comp = comps.components[j];

          switch (type) {
            case "allSelects": {
              if (comp.type === 3 || comp.type === "SELECT_MENU") {
                onSelectMenuFound(comp);
              }
              break;
            }
            case "sourceSelect": {
              if (comp.custom_id === sourceSelect) {
                onSelectMenuFound(comp);
              }
              break;
            }
            case "findSelect": {
              if (searchValue === null) {
                searchValue = this.evalMessage(data.searchValue, cache);
              }
              if (comp.custom_id === searchValue || comp.customId === searchValue || comp.label === searchValue) {
                onSelectMenuFound(comp);
              }
              break;
            }
          }
        }

        newComponents.push(comps);

      }

      components = newComponents;

    }

    if (components) {
      if (Array.isArray(message)) {
        this.callListFunc(message, "edit", [{ components }]).then(() => this.callNextAction(cache));
      } else if (message?.edit) {
        message
          .edit({ components })
          .then(() => this.callNextAction(cache))
          .catch((err) => {
            
            if (data.errcmd === true) {
              console.log('Ошибка: ' + cache.toString() + ' - Действие ' + (cache.index + 1) + '# ' + data.name)
              console.log(err)
            }

            this.storeValue(err, parseFloat(data.errs), this.evalMessage(data.errv, cache), cache)

            if (data.iffalse == "5" || data.iffalse == "6") {

              if (data.iffalse == "5") {
                this.executeSubActions(data.actionserr, cache)
              } else {
                this.executeSubActionsThenNextAction(data.actionserr, cache)
              }

            } else {
              this.executeResults(false, data, cache);
            }

          });
      } else {
        if (message.components) {
          message.components = components;
        }
        this.callNextAction(cache);
      }
    } else {
      this.callNextAction(cache);
    }
  },


  mod() { },
};
