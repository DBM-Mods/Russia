module.exports = {
  name: "Edit Select Menu Options MOD",
  section: "Messaging",
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[xinxyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {

    if (data.descriptionx == true) {
      desccor = data.descriptioncolor
    } else {
      desccor = 'none'
    }

    const list1 = presets.lists;
    const list2 = presets.lists;

    return data.description
  ? `<font style="color:${desccor}">${data.description}</font>`
  : (data.acao == 0 || data.acao == 1) ? `<font style="color:${desccor}">Добавить ${data.branches.length == 1 ? data.branches.length + " элемент" : data.branches.length + " вариантов"}</font>` : `Использование списка с именем "${list1[parseInt(data.listanome, 10)]}" и значением "${list2[parseInt(data.listavalor, 10)]}"`;
  },

  variableStorage(data, varType) {
    if (parseInt(data.errs, 10) !== varType) return;
    return [data.errv, "Texto ~ Erro"];
  },


  fields: ["message", "messageVarName", "type", "searchValue", "acao", "newname", "listanome", "listanomevar","listavalor", "listavalorvar", "ondesc", "listadesc", "listadescvar", "onemoji", "listaemoji", "listaemojivar", "pagina", "porpag", "descriptioncolor", "description", "descriptionx", "iffalse", "iffalseVal", "errs", "errv", "errcmd", "actionserr", "branches"],


  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.5</div>
    <tab-system>

    <tab label="Опции" icon="wizard">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">

    <div id="xinxylaacao1">
    <dialog-list id="branches" fields='["label", "description", "value", "emoji", "val1", "val2", "comparar", "formula"]' dialogResizable dialogTitle="Опция" dialogWidth="600" dialogHeight="400" listLabel="Опции" listStyle="height: calc(100vh - 280px);" itemName="Пункт" itemHeight="28px;" itemTextFunction="glob.formatItem(data)" itemStyle="line-height: 28px;">
    <div style="padding: 16px;background:rgba(0,0,0,0.3)">
    <span class="dbminputlabel">Exibir</span><br>
    <select id="formula" class="round">
    <option value="0" selected>Всегда отображать опцию</option>
    <option value="1">Отобразить опцию, если получено значение False</option>
    <option value="2">Отобразить опцию, если получено значение True</option>
  </select>
  <br>
     <table style="width:100%"><tr><td>
       <span class="dbminputlabel">Значение A</span><br>
       <input id="val1" class="round" type="text">
       </td>
       <td>
       <span class="dbminputlabel">Сравнение</span><br>
       <select id="comparar" class="round">
       <option value="0">Значение A - существует</option>
       <option value="1" selected>Равно</option>
       <option value="2">Точно равно</option>
       <option value="3">Меньше чем</option>
       <option value="13">Меньше или равно</option>
       <option value="4">Больше чем</option>
       <option value="12">Больше или равно</option>
       <option value="5">Содержит</option>
       <option value="6">Соответствует регулярному выражению</option>
       <option value="14">Полное соответствие регулярному выражению</option>
       <option value="7">Длина больше</option>
       <option value="8">Длина меньше</option>
       <option value="9">Длина равна</option>
       <option value="10">Начинается с</option>
       <option value="11">Заканчивается на</option>
       <option value="16">Значение A содержит акценты?</option>
       <option value="17">Содержит слова ["a", "b", "c"]</option>
       <option value="18">Равно словам ["a", "b", "c"]</option>
       <option value="19">Значение A - четное число?</option>
       <option value="20">Значение A - нечетное число?</option>
       <option value="21">Значение A - число?</option>
       <option value="24">Значение A - текст?</option>
       <option value="23">Значение A - URL изображения?</option>
       <option value="25">Значение A - URL?</option>
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

        <span class="dbminputlabel">Значение ~ Не должно повторяться</span>
        <input id="value" placeholder="Передаётся во Временную Переменную..." class="round" type="text">
      </div>
      <div style="float: right; width: calc(50% - 12px);">
        <span class="dbminputlabel">Описание</span>
        <input id="description" placeholder="Не обязательное поле" class="round" type="text">

        <br>

        <span class="dbminputlabel">Эмодзи</span>
        <input id="emoji" placeholder="Не обязательное поле" class="round" type="text">
      </div>

      <br><br>

    </div>
</dialog-list>
</div>

<div id="xinxylaacao2">

      <table><tr><td class="col">
     <span class="dbminputlabel">Список ~ Название</span><br>
      <select id="listanome" class="round" value="7" onchange="glob.listChange(this, 'varNameContainer10')">
        ${data.lists[isEvent ? 1 : 0]}
      </select>
    </td>
    <td class="col">
    <div id="varNameContainer10">
    <span class="dbminputlabel">Имя переменной</span><br>
      <input id="listanomevar" class="round" type="text" list="variableList"></div>
    </td></tr></table>

    <xinspace2>

      <table><tr><td class="col">
      <span class="dbminputlabel">Список ~ Значение</span><br>
       <select id="listavalor" class="round" value="7" onchange="glob.listChange(this, 'varNameContainer20')">
         ${data.lists[isEvent ? 1 : 0]}
       </select>
     </td>
     <td class="col">
     <div id="varNameContainer20">
     <span class="dbminputlabel">Имя переменной</span><br>
       <input id="listavalorvar" class="round" type="text" list="variableList"></div>
     </td></tr></table>

     <xinspace2>

     <table><tr><td class="col">
     <span class="dbminputlabel">Список ~ Описание</span><div style="float:right;margin-top:-5px"><dbm-checkbox id="ondesc" label="Активировать"></dbm-checkbox></div><br>
      <select id="listadesc" class="round" value="7" onchange="glob.listChange(this, 'varNameContainer30')">
        ${data.lists[isEvent ? 1 : 0]}
      </select>
    </td>
    <td class="col">
    <div id="varNameContainer30">
    <span class="dbminputlabel">Имя переменной</span><br>
      <input id="listadescvar" class="round" type="text" list="variableList"></div>
    </td></tr></table>

    <xinspace2>

    <table><tr><td class="col">
    <span class="dbminputlabel">Список ~ Эмодзи</span><div style="float:right;margin-top:-5px"><dbm-checkbox id="onemoji" label="Активировать"></dbm-checkbox></div><br>
     <select id="listaemoji" class="round" value="7" onchange="glob.listChange(this, 'varNameContainer40')">
       ${data.lists[isEvent ? 1 : 0]}
     </select>
   </td>
   <td class="col">
   <div id="varNameContainer40">
   <span class="dbminputlabel">Имя переменной</span><br>
     <input id="listaemojivar" class="round" type="text" list="variableList"></div>
   </td></tr></table>

   <xinspace2>

   <table><tr><td class="col">
   <span class="dbminputlabel">Страница</span><br>
   <input id="pagina" class="round" type="text" value="1">
   </td>
   <td class="col">
   <span class="dbminputlabel">Опций на Странице</span><br>
   <input id="porpag" class="round" type="text" value="25">
   </td></tr></table>

</div>

</div>
    </tab>
    <tab label="Меню" icon="align left">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">


    <message-input dropdownLabel="Сообщение" selectId="message" variableContainerId="varNameContainer" variableInputId="messageVarName"></message-input>

<br><br><br><xinspace>

<div style="float: left; width: calc(50% - 12px);">
  <span class="dbminputlabel">Компоненты для Редактирования</span><br>
  <select id="type" class="round" onchange="glob.onButtonSelectTypeChange(this)">
    <option value="allSelects">Все выпадающие меню</option>
    <option value="sourceSelect" selected>Исходное  меню</option>
    <option value="findSelect">Конкретное  меню</option>
  </select>
</div>

<div style="float: right; width: calc(50% - 12px);">
  <div id="nameContainer">
    <span class="dbminputlabel">Имя/ID меню</span><br>
    <input id="searchValue" class="round" type="text">
  </div>
</div>

<br><br><br><xinspace>

<span class="dbminputlabel">Действие</span><br>
<select id="acao" class="round" onchange="glob.onComparisonChanged3(this)">
  <option value="0" selected>Добавить варианты в меню</option>
  <option value="1">Использовать только варианты в меню</option>
  <option value="2">Добавить варианты в меню через списки</option>
  <option value="3">Использовать только варианты в меню через списки</option>
</select>

<br>

<span class="dbminputlabel">Изменить имя меню</span><br>
<input id="newname" class="round" placeholder="Не обязательное поле" type="text">

<br>

</div>
    </tab>

    <tab label="Конфигурация" icon="cogs">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">

    <div id="flutuador" style="padding:0px 0px 15px 0px">
    <table style="width:100%;"><tr>
    <td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Не обязательное поле"></td>
    <td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
    </tr></table>
    </div>
  

<span class="dbminputlabel">Опции</span><br><div style="padding:10px;background:rgba(0,0,0,0.2)">
<dbm-checkbox id="errcmd" label="Отображать ошибку в консоли" checked></dbm-checkbox>
</div>

<div style="padding-top:8px">
      <table>
        <tr>
        <td class="col1"><span class="dbminputlabel">Хранить ошибку</span><br>
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
<span class="dbminputlabel">При ошибке</span><br>
<select id="iffalse" class="round" onchange="glob.onComparisonChanged2(this)">
<option value="0" selected>Продолжить действия</option>
<option value="1">Остановить последовательность действий</option>
<option value="2">Перейти к действию</option>
<option value="3">Пропустить действия</option>
<option value="4">Перейти к якорю</option>
<option value="5">Выполнить действия и остановиться</option>
<option value="6">Выполнить действия и продолжить</option>
</select>
<br>
</div>
<div id="iffalseContainer" style="display: none; float: right; width: 60%;"><div id="xincontrol"><span id="xinelas" class="dbminputlabel">Para</span><br><input id="iffalseVal" class="round" name="actionxinxyla" type="text"></div>
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
    xinspace2{padding:14px 0px 0px 0px;display:block}
    table{width:100%}
.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}
.col1{width:35%;padding:0px 10px 0px 0px}
.col2{width:65%}
.col{padding:0px 5px;width:50%}
</style>
`;
  },


  init() {
    const { glob, document } = this;

    glob.listChange(document.getElementById("listanome"), "varNameContainer10");
    glob.listChange(document.getElementById("listavalor"), "varNameContainer20");
    glob.listChange(document.getElementById("listadesc"), "varNameContainer30");
    glob.listChange(document.getElementById("listaemoji"), "varNameContainer40");

    const xinelaslinks = document.getElementsByClassName('xinelaslink');
    for (let x = 0; x < xinelaslinks.length; x++) {
      const xinelaslink = xinelaslinks[x];
      const url = xinelaslink.getAttribute('data-url');
      if (url) {
        xinelaslink.setAttribute('title', url);
        xinelaslink.addEventListener('click', (e) => {
          e.stopImmediatePropagation();
          console.log(`Запуск URL: [${url}] в браузере.`);
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
      let result = `<table style="width:100%"><tr><td style="width:6%">${data.emoji}</td><td style="width:47%">Название: ${data.label}</td><td style="width:47%">Значение: ${data.value}</td></tr></table>`;
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
        document.querySelector("[id='xinelas']").innerText = (`Количество действий`);
      }
      if (event.value == "4") {
        document.querySelector("[id='xinelas']").innerText = (`Имя якоря`);
      }
    }

    glob.onComparisonChanged2(document.getElementById("iffalse"));

    glob.onComparisonChanged3 = function (event) {
      if (event.value == "0" || event.value == "1") {
        document.getElementById("xinxylaacao1").style.display = null;
        document.getElementById("xinxylaacao2").style.display = "none";
      } else {
        document.getElementById("xinxylaacao1").style.display = "none";
        document.getElementById("xinxylaacao2").style.display = null;
      }
    }

    glob.onComparisonChanged3(document.getElementById("acao"));

  },

  async action(cache) {
    const data = cache.actions[cache.index];
    const message = await this.getMessageFromData(data.message, data.messageVarName, cache);
    var listanome = await this.getListFromData(data.listanome, data.listanomevar, cache);
    var listavalor = await this.getListFromData(data.listavalor, data.listavalorvar, cache);
    var listadesc = await this.getListFromData(data.listadesc, data.listadescvar, cache);
    var listaemoji = await this.getListFromData(data.listaemoji, data.listaemojivar, cache);

    const type = data.type;

    let sourceSelect = null;
    try{
      if(cache.interaction == null || cache.interaction == "null" || cache.interaction == undefined || cache.interaction == "undefined"){
      } else {
    if (cache.interaction.isSelectMenu()) {
      sourceSelect = cache.interaction.customId;
    }
  }



    let newOptionData = null

    var onSelectMenuFound = (select) => {
      if (select) {

        if(this.evalMessage(data.newname, cache) !== ""){select.placeholder = this.evalMessage(data.newname, cache)}

        if (!select.options) select.options = [];
        if (select) {

          const branches = data.branches
          if (!select.options) select.options = [];

          if (data.acao == "1" || data.acao == "3") select.options = [];

        if (data.acao == "0" || data.acao == "1"){
          for (var i = 0; i < branches.length; i++) {
            const optionChange = branches[i];

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
            select.options.push({ ...newOptionData })};

          }
        }

        if (data.acao == "2" || data.acao == "3"){

      
          var pagina = parseInt(this.evalMessage(data.pagina, cache))
          var porpag = parseInt(this.evalMessage(data.porpag, cache))
          if(porpag > 25 || porpag == NaN || porpag == "NaN" || porpag == ""){porpag = 25}
          if(porpag < 1){porpag = 1}
          if(pagina < 1 || pagina == NaN || pagina == "NaN" || pagina == ""){pagina = 1}
          
          var paginatotal = Math.ceil(listavalor.length / porpag)

          if(pagina > paginatotal){pagina = paginatotal}
          sessao = (pagina * porpag) - porpag

          for (var i = 0; i < listavalor.length; i++) {
            
            if(i < porpag && listavalor.length > sessao){
            let newOptionData = {
              label: listanome[sessao],
              value: listavalor[sessao],
              default: false,
            };
            if (data.ondesc == true) {
              newOptionData.description = listadesc[sessao]
            }
            if (data.onemoji == true) {
              newOptionData.emoji = listaemoji[sessao]
            }

            var sessao = sessao + 1
            select.options.push({ ...newOptionData })};
          }


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

  } catch(err){
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
  }
  },


  mod() { },
};
