module.exports = {
  //---------------------------------------------------------------------
  // Action Name
  //
  // This is the name of the action displayed in the editor.
  //---------------------------------------------------------------------

  name: "Show Modal MOD",

  //---------------------------------------------------------------------
  // Action Section
  //
  // This is the section the action will fall into.
  //---------------------------------------------------------------------

  section: "Messaging",

  //---------------------------------------------------------------------
  // Action Subtitle
  //
  // This function generates the subtitle displayed next to the name.
  //---------------------------------------------------------------------

  subtitle(data) {
    if (data.descriptionx == true) {
      desccor = data.descriptioncolor;
    } else {
      desccor = "none";
    }

    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">"${data.title}" с ${data.textInputs.length} меню</font>`;
  },

  //---------------------------------------------------------------------
  // Action Storage Function
  //
  // Stores the relevant variable info for the editor.
  //---------------------------------------------------------------------

  variableStorage(data, varType) {
    let vars = [];

    for (var i = 0; i < data.textInputs.length; i++) {
      if (data.textInputs[i].storage == varType) {
        vars.push(data.textInputs[i].varName);
        vars.push("Текст");
      }
    }

    const type = parseInt(data.storageError);

    if (type == varType) {
      vars.push(data.varNameError);
      vars.push("Текст ~ Ошибка");
    }

    if (vars.length > 0) return vars;
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

  meta: { version: "2.1.7", preciseCheck: true, author: null, authorUrl: null, downloadUrl: null },

  //---------------------------------------------------------------------
  // Action Fields
  //
  // These are the fields for the action. These fields are customized
  // by creating elements with corresponding IDs in the HTML. These
  // are also the names of the fields stored in the action's JSON data.
  //---------------------------------------------------------------------

  fields: ["title", "textInputs", "description", "descriptionx", "descriptioncolor", "errcmd", "iffalse", "iffalseVal", "storageError", "varNameError", "actionsError"],

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
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Portugues/archive/refs/heads/main.zip">Обновление</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.1</div>

    <tab-system>

      <tab label="Модальное окно" icon="align left">

      <div style="margin: 5px;">
      <span class="dbminputlabel">Заголовок модального окна</span>
      <input id="title" class="round" type="text" value="Модальное окно">
  
      <br>

      <dialog-list id="textInputs" fields='["formato", "formula", "val1", "comparar", "val2", "id", "name", "placeholder", "value", "minLength", "maxLength", "row", "style", "required", "storage", "varName"]' dialogTitle="Меню" dialogWidth="600" dialogHeight="615" listLabel="Меню" listStyle="height: calc(100vh - 315px);" itemName="Input" itemCols="1" itemHeight="80px;" itemTextFunction="glob.formatItem(data)" itemStyle="line-height: 40px;">
        <div style="padding: 10px;">

          <span class="dbminputlabel">Конфигурация отображения</span>
          <select id="formula" class="round">
            <option value="0" selected>Всегда отображать меню</option>
            <option value="1">Отобразить меню, если получено значение False</option>
            <option value="2">Отобразить меню, если получено значение True</option>
          </select>

          <br>

          <table style="width:100%">
            <tr>
              <td>
                <span class="dbminputlabel">Значение A</span>
                <input id="val1" class="round" type="text">
              </td>
              <td>
                <span class="dbminputlabel">Сравнение</span>
                <select id="comparar" class="round">
                    <optgroup label="Число или Текст">
                        <option value="0">Значение A - Существует</option>
                        <option value="1" selected>Равно</option>
                        <option value="2">Точно равно</option>
                    </optgroup>
                    <optgroup label="Число">
                        <option value="3">Меньше чем</option>
                        <option value="13">Меньше или равно</option>
                        <option value="4">Больше чем</option>
                        <option value="12">Больше или равно</option>
                        <option value="19">Значение A - Четное число?</option>
                        <option value="20">Значение A - Нечетное число?</option>
                        <option value="21">Значение A - Число?</option>
                    </optgroup>
                    <optgroup label="Текст">
                        <option value="6">Соответствует регулярному выражению</option>
                        <option value="14">Соответствует полному регулярному выражению</option>
                        <option value="7">Длина больше чем</option>
                        <option value="8">Длина меньше чем</option>
                        <option value="9">Длина равна</option>
                        <option value="10">Начинается с</option>
                        <option value="11">Заканчивается на</option>
                        <option value="16">Значение A - Содержит акценты?</option>
                        <option value="18">Равно словам ["a", "b", "c"]</option>
                        <option value="24">Значение A - Текст?</option>
                        <option value="23">Значение A - URL изображения?</option>
                        <option value="25">Значение A - URL?</option>
                        <option value="26">Значение A - Email существует?</option>
                    </optgroup>
                    <optgroup label="Текст ~ Включает">
                        <option value="5">Точно включает</option>
                        <option value="29">Включает ~ Без учета регистра</option>
                        <option value="30">Включает ~ Без учета акцентов</option>
                        <option value="31">Включает ~ Без учета акцентов и регистра</option>
                        <option value="17">Точно включает слова ["a", "b", "c"]</option>
                        <option value="27">Включает URL?</option>
                        <option value="28">Включает приглашение Discord?</option>
                        <option value="32">Точно включает слово</option>
                        <option value="33">Включает слово ~ Без учета регистра</option>
                        <option value="34">Включает слово ~ Без учета акцентов</option>
                        <option value="35">Включает слово ~ Без учета акцентов и регистра</option>
                        <option value="36">Включает слова ~ разделенные запятыми ~ Без учета акцентов и регистра</option>
                    </optgroup>
                    <optgroup label="Другое">
                        <option value="22">Значение A - Список?</option>
                    </optgroup>
                </select>
              </td>
              <td>
                <span class="dbminputlabel">Значение B</span>
                <input id="val2" class="round" type="text">
              </td>
            </tr>
          </table>

          <br>

          <span class="dbminputlabel">Имя</span>
          <input id="name" class="round" type="text">

          <br>

          <span class="dbminputlabel">Описание</span>
          <input id="placeholder" class="round" type="text">

          <br>

          <span class="dbminputlabel">Авто заполение</span>
          <input id="value" placeholder="Не обязательное поле" class="round" type="text">

          <br>

          <table style="width: 100%;">
            <td>
              <span class="dbminputlabel">Минимальная длина</span>
              <input id="minLength" placeholder="0" class="round" type="text" value="1">
            </td>
            <td style="padding-left: 18px;">
              <span class="dbminputlabel">Максимальная длина</span>
              <input id="maxLength" placeholder="1000" class="round" type="text" value="1000">
            </td>
          </table>

          <br>

          <table style="width: 100%;">
            <td>
              <span class="dbminputlabel">Линия действия</span>
              <input id="row" placeholder="От 1 до 5" class="round" type="text">
            </td>
            <td style="padding-left: 15px;">
              <span class="dbminputlabel">Стиль</span>
              <select id="style" class="round">
                <option value="SHORT">Короткий (в строку)</option>
                <option value="PARAGRAPH">Параграф (в несколько строк)</option>
              </select>
            </td>
            <td style="padding-left: 15px;">
              <span class="dbminputlabel">Обязательно?</span>
              <select id="required" class="round">
                <option value="true">Да</option>
                <option value="false">Нет</option>
              </select>
            </td>
            <td style="padding-left: 15px;">
              <span class="dbminputlabel">Формат</span>
              <select id="formato" class="round">
                <option value="0">Источник</option>
                <option value="1">Число</option>
                <option value="2">Текст</option>
                <option value="3">Список</option>
                <option value="4">True/False</option>
              </select>
            </td>
          </table>

          <br>
          
          <store-in-variable dropdownLabel="Хранить в" selectId="storage" variableContainerId="varNameContainer" variableInputId="varName"></store-in-variable>

        </div>
      </dialog-list>
      </div>
      </tab>

      <tab label="Конфигурация" icon="cogs">
      <div style="height: calc(100vh - 210px); overflow-y: auto;">
        <div id="flutuador" style="padding: 0px 0px 15px 0px; margin-top: 5px;">
            <table style="width:100%;"><tr>
                <td>
                  <span class="dbminputlabel">Описание действия</span>
                  <br>
                  <input type="text" class="round" id="description" placeholder="Не обязательное поле">
                </td>
                <td style="padding:0px 0px 0px 10px; width:70px";>
                  <div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px">
                      <dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox>
                  </div>
                  <br>
                  <input type="color" value="#ffffff" class="round" id="descriptioncolor">
                </td>
            </table>
        </div>

        <span class="dbminputlabel">Опции</span>
        <br>
        <div style="padding: 10px; background: rgba(0,0,0,0.2);">
        <dbm-checkbox id="errcmd" label="Отображать ошибку в консоли" checked></dbm-checkbox>
        </div>
        <br>

        <div style="float: left; width: 35%">
          <span class="dbminputlabel">При ошибке</span>
          <select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
            <option value="0">Продолжить действия</option>
            <option value="1" selecionado>Остановить последовательность действий</option>
            <option value="2">Перейти к действию</option>
            <option value="3">Пропустить действия</option>
            <option value="4">Перейти к якорю</option>
            <option value="5">Выполнить действия и остановится</option>
            <option value="99">Выполнить действия и продолжить</option>
          </select>
        </div>
  
        <div id="iffalseContainer" style="display: none; float: right; width: 55%;">
          <span id="xinelasT" class="dbminputlabel">Para</span>
          <input id="iffalseVal" class="round" type="text">
        </div>
  
        <action-list-input id="actionsError" style="margin-top: 50px;" height="calc(100vh - 430px)"></action-list-input>
       
        <br><br><br>

        <div id="divValueError">
        <div style="float: left; width: 35%;">
          <span class="dbminputlabel">Хранить ошибку в</span>
          <select id="storageError" class="round" onchange="glob.variableChangeError(this, 'varNameContainer')">
            ${data.variables[0]}
          </select>
        </div>
      
        <div id="varNameContainerError" style="float: right; display: none; width: 60%;">
          <span class="dbminputlabel">Имя переменной</span>
          <input id="varNameError" class="round" type="text">
        </div>
        </div>
      </div>

      </tab>

    </tab-system>

    <style>
      .dbmmodsbr1 {
        position: absolute;
        bottom: 0px;
        border: 0px solid rgba(50,50,50,0.7);
        background: rgba(0,0,0,0.7);
        color: #999;
        padding: 5px;
        left: 0px;
        z-index: 999999;
        cursor: pointer;
      }

      .dbmmodsbr2 {
        position: absolute;
        bottom: 0px;
        border: 0px solid rgba(50,50,50,0.7);
        background: rgba(0,0,0,0.7);
        color: #999;
        padding: 5px;
        right: 0px;
        z-index: 999999;
        cursor: pointer;
      }
    </style>`;
  },

  //---------------------------------------------------------------------
  // Action Editor Init Code
  //
  // When the HTML is first applied to the action editor, this code
  // is also run. This helps add modifications or setup reactionary
  // functions for the DOM elements.
  //---------------------------------------------------------------------

  init() {
    glob.formatItem = function (data) {
      const storage = ["Easter Egg", "Временная переменная", "Серваерная переменная", "Глобальная переменная"];

      let result = `<div style="display: inline-block; width: 100%; padding-left: 8px"><div style="float: left; width: calc(100% - 200px); overflow: hidden; text-align: left;">Имя: ${data.name}<br>Формат: `;

      switch (parseInt(data.formato)) {
        case 0:
          result += "Источник";
          break;
        case 1:
          result += "Число";
          break;
        case 2:
          result += "Текст";
          break;
        case 3:
          result += "Список";
          break;
        case 4:
          result += "True/False";
          break;
      }

      return result += `</div><div style="float: right; width: 190px; text-align: left; padding: 0px 10px 0px 0px;">Стиль: ${data.style == "SHORT" ? "Строка" : "Параграф"}<br>${storage[parseInt(data.storage)]} (${data.varName})</div></div>`;
    };

    glob.onComparisonChanged = function (event) {
      if (event.value == "0" || event.value == "1" || event.value == "7") {
        document.getElementById("iffalseContainer").style.display = "none";
        document.getElementById("actionsError").style.display = "none";
      } else if (event.value == "5" || event.value == "99") {
        document.getElementById("iffalseContainer").style.display = "none";
        document.getElementById("actionsError").style.display = null;
      } else {
        document.getElementById("iffalseContainer").style.display = null;
        document.getElementById("actionsError").style.display = "none";
      }

      if (event.value > "4") {
        document.getElementById("divValueError").style.marginTop = "-40px";
      } else {
        document.getElementById("divValueError").style.marginTop = "0";
      }

      if (event.value == "2") {
        document.querySelector("[id='xinelasT']").innerText = "Номер действия";
      }

      if (event.value == "3") {
        document.querySelector("[id='xinelasT']").innerText = "Пропустить действия";
      }

      if (event.value == "4") {
        document.querySelector("[id='xinelasT']").innerText = "Имя якоря";
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
  },

  //---------------------------------------------------------------------
  // Action Bot Function
  //
  // This is the function for the action within the Bot's Action class.
  // Keep in mind event calls won't have access to the "msg" parameter,
  // so be sure to provide checks for variable existence.
  //---------------------------------------------------------------------

  action(cache) {
    const data = cache.actions[cache.index];
    const _this = this;

    let componentsArr = [];
    const variables = [];

    if (this.evalMessage(data.title, cache).length > 45) return erro("Заголовок модального окна не должен содержать более 45 символов.");

    let cont = 0;

    for (var i = 0; i < data.textInputs.length; i++) {
      const textInput = data.textInputs[i];
      const formula = parseInt(textInput.formula);

      if (formula != 0) {
        const compare = parseInt(textInput.comparar);
        let result;
        if (compare !== 6) {
          var val1 = this.evalIfPossible(textInput.val1, cache);
          var val2 = this.evalIfPossible(textInput.val2, cache);
        }
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
            if (numberj >= val2 && val1 <= val3) {
              result = numberj
            }
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
          case 22:
            result = Boolean(Array.isArray(val1));
            break;
          case 23:
            const isImageUrl = require("is-image-url");
            result = isImageUrl(val1);
            break;
          case 24:
            result = typeof val1 === "string";
            break;
          case 25:
            const isUrl = require("is-url");
            result = isUrl(val1);
            break;
          case 26:
            _this = this;

            const mail = require("email-existence");
            ignorar = 2
            mail.check(val1, (error, response) => {
              result = response;
            });
            break;
          case 27:
            let pattern = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
            result = val1.match(pattern);
            break;
          case 28:
            invite = new RegExp(/(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z]/g);
            result = invite.test(val1);
            break;
          case 29:
            result = val1.toLowerCase().includes(val2.toLowerCase());
            break;
          case 30:
            tratarval1 = val1.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            tratar = val2.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            result = tratarval1.includes(tratar);
            break;
          case 31:
            tratarval1 = val1.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            tratar = val2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            result = tratarval1.toLowerCase().includes(tratar);
            break;
          case 32:
            var words = val1.split(" ");
            result = words.includes(val2);
            break;
          case 33:
            var words = val1.toLowerCase().split(" ");
            result = words.includes(val2.toLowerCase());
            break;
          case 34:
            var words = val1.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
            result = words.includes(val2.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
            break;
          case 35:
            var words = val1.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
            result = words.includes(val2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
            break;
          case 36:
            var separador = val1.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
            var valor2 = val2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(",");
            result = separador.some(els => valor2.includes(els));
            break;
        }

        result = Boolean(result);

        if (formula == 1 && result != false) continue;
        if (formula == 2 && result != true) continue;
      }

      if (cont > 4) return erro("Модальное окно должно иметь максимум 5 меню.");
      cont++;

      if (this.evalMessage(textInput.name, cache).length > 45) return erro("Имя меню не должно содержать более 45 символов.");
      if (this.evalMessage(textInput.placeholder, cache).length > 100) return erro("Описание меню не должно содержать не более 100 символов.");
      
      const value = this.evalMessage(textInput.value, cache);
      if (value.length > 4000) return erro("Вводимое значение не должно содержать более 4000 символов.");

      const id = "Modal-" + Math.floor(Math.random() * 1e12);
      const format = parseInt(textInput.formato);
      const textInputData = this.generateTextInput(textInput, id, cache);
      if (value) textInputData.value = value;

      this.addTextInputToActionRowArray(componentsArr, this.evalMessage(textInput.row, cache), textInputData, cache);

      variables.push({
        customId: id,
        format: format,
        name: textInput.varName,
        type: parseInt(textInput.storage)
      });
    }

    if (componentsArr.length > 0) {
      componentsArr = componentsArr.filter((comps) => comps.length > 0).map((comps) => {
        return {
          type: "ACTION_ROW",
          components: comps,
        };
      });
    }

    if (cache.interaction) {
      if (cache.interaction.showModal) {
        const modalData = {
          customId: cache.interaction.id,
          title: this.evalMessage(data.title, cache),
          components: componentsArr
        };

        this.registerModalSubmitResponses(cache.interaction.id, (newInteraction) => {
          newInteraction.__originalInteraction = cache.interaction;
          cache.interaction = newInteraction;

          for (var i = 0; i < variables.length; i++) {
            const id = variables[i].customId;
            const format = variables[i].format;
            const name = variables[i].name;
            const type = variables[i].type;
            let val = newInteraction.fields.getTextInputValue(id);

            switch (format) {
              case 1:
                val = Number(val);
                break;
              case 2:
                val = String(val);
                break;
              case 3:
                val = String(val).split(",");
                break;
              case 4:
                val = Boolean(val);
                break;
            }

            this.storeValue(val, type, name, cache);
          }

          this.callNextAction(cache);
        });

        cache.interaction.showModal(modalData);
      } else {
        erro("Невозможно показать модальное окно для текущего взаимодействия.");
      }
    } else {
      erro("Взаимодействие не найдено.");
    }

    function erro(err) {
      if (data.errcmd) _this.displayError(data, cache, err);

      _this.storeValue(err, parseInt(data.storageError), _this.evalMessage(data.varNameError, cache), cache);

      if (data.iffalse == "5") return _this.executeSubActions(data.actionsError, cache);
      if (data.iffalse == "99") return _this.executeSubActionsThenNextAction(data.actionsError, cache);

      return _this.executeResults(false, data, cache);
    }
  },

  //---------------------------------------------------------------------
  // Action Bot Mod
  //
  // Upon initialization of the bot, this code is run. Using the bot's
  // DBM namespace, one can add/modify existing functions if necessary.
  // In order to reduce conflicts between mods, be sure to alias
  // functions you wish to overwrite.
  //---------------------------------------------------------------------

  mod() { },

  modInit(data) {
    this.prepareActions(data.actionsError);
  },
};