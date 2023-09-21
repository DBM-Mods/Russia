module.exports = {
    //---------------------------------------------------------------------
    // Action Name
    //
    // This is the name of the action displayed in the editor.
    //---------------------------------------------------------------------

    name: "Multi Store Message Info MOD",

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

    subtitle(data, presets) {
        if (data.descriptionx) {
            desccor = data.descriptioncolor;
        } else {
            desccor = "none";
        }

        return data.description
            ? `<font style="color:${desccor}">${data.description}</font>`
            : `<font style="color:${desccor}">Получить ${data.branches.length == 1 ? data.branches.length + " элемент" : data.branches.length + " элементов"}</font>`
    },

    variableStorage(data, varType) {
        let vars = [];

        for (var i = 0; i < data.branches.length; i++) {
            const type = parseInt(data.branches[i].storage, 10);
            const varName = data.branches[i].varName;

            if (type == varType && varName) {
                let tipo;

                switch (parseInt(data.branches[i].info)) {
                    case 0:
                        tipo = "Сообщение";
                        break;
                    case 1:
                        tipo = "ID";
                        break;
                    case 2:
                        tipo = "Текст";
                        break;
                    case 3:
                        tipo = "Пользователь";
                        break;
                    case 4:
                        tipo = "Канал";
                        break;
                    case 5:
                        tipo = "Текст";
                        break;
                    case 6:
                        tipo = "True/False";
                        break;
                    case 7:
                        tipo = "True/False";
                        break;
                    case 8:
                        tipo = "Дата";
                    case 9:
                        tipo = "Список";
                    case 12:
                        tipo = "Число";
                        break;
                    case 13:
                        tipo = "Список";
                        break;
                    case 14:
                        tipo = "Число";
                        break;
                    case 15:
                        tipo = "URL";
                        break;
                    case 16:
                        tipo = "Дата";
                        break;
                    case 17:
                        tipo = "Число"
                        break;
                    case 18:
                        tipo = "Число";
                        break;
                    case 19:
                        tipo = "Сервер";
                        break;
                    case 20:
                        tipo = "Текст";
                        break;
                    case 21:
                        tipo = "ID";
                        break;
                    case 22:
                        tipo = "Эмбед сообщение";
                        break;
                    case 23:
                        tipo = "Эмбед сообщение";
                        break;
                    case 24:
                        tipo = "Эмбед сообщение";
                        break;
                    case 25:
                        tipo = "Эмбед сообщение";
                        break;
                    case 26:
                        tipo = "Эмбед сообщение";
                        break;
                    case 27:
                        tipo = "Эмбед сообщение";
                        break;
                    case 28:
                        tipo = "Эмбед сообщение";
                        break;
                    case 29:
                        tipo = "Эмбед сообщение";
                        break;
                    case 30:
                        tipo = "Эмбед сообщение";
                        break;
                    case 31:
                        tipo = "Эмбед сообщение";
                        break;
                    case 32:
                        tipo = "Эмбед сообщение";
                        break;
                    case 33:
                        tipo = "Эмбед сообщение";
                        break;
                    case 34:
                        tipo = "Эмбед сообщение";
                        break;
                    case 35:
                        tipo = "Эмбед сообщение";
                        break;
                    case 36:
                        tipo = "Эмбед сообщение";
                        break;
                    case 37:
                        tipo = "Эмбед сообщение";
                        break;
                    case 38:
                        tipo = "Число";
                        break;
                    case 39:
                        tipo = "Число";
                        break;
                    case 40:
                        tipo = "Взаимодействие";
                        break;
                    case 41:
                        tipo = "Взаимодействие";
                        break;
                    case 42:
                        tipo = "Взаимодействие";
                        break;
                    case 43:
                        tipo = "Взаимодействие";
                        break;
                    case 44:
                        tipo = "Пользователь взаимодействия";
                        break;
                    case 45:
                        tipo = "Пользователь взаимодействия";
                        break;
                    case 46:
                        tipo = "Пользователь взаимодействия";
                        break;
                    case 47:
                        tipo = "Пользователь взаимодействия";
                        break;
                    case 48:
                        tipo = "Пользователь взаимодействия";
                        break;
                    case 49:
                        tipo = "Компонент";
                        break;
                    case 50:
                        tipo = "Компонент";
                        break;
                    case 51:
                        tipo = "Компонент";
                        break;
                    case 52:
                        tipo = "Компонент";
                        break;
                    case 53:
                        tipo = "Компонент";
                        break;
                    case 54:
                        tipo = "Компонент";
                        break;
                    case 55:
                        tipo = "Компонент";
                        break;
                    case 56:
                        tipo = "Компонент";
                        break;
                    case 57:
                        tipo = "Компонент";
                        break;
                    case 58:
                        tipo = "Компонент";
                        break;
                    case 59:
                        tipo = "Компонент";
                        break;
                    case 60:
                        tipo = "Компонент";
                        break;
                    case 61:
                        tipo = "Компонент";
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
        author: '[Tempest - 321400509326032897]',
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

    fields: ["message", "varName", "description", "descriptionx", "descriptioncolor", "branches"],

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
  <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
  <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.1</div>

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
  </style>

  <div id="flutuador" style="padding:0px 0px 15px 0px">
    <table style="width:100%;"><tr>
        <td>
        <span class="dbminputlabel">Описание действия</span>
        <br>
        <input type="text" class="round" id="description" placeholder="Не обязательное поле">
        </td>
        <td style="padding:0px 0px 0px 10px;width:70px">
        <div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px">
            <dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox>
        </div>
        <br>
        <input type="color" value="#ffffff" class="round" id="descriptioncolor">
        </td>
    </table>
  </div>
  
  <message-input dropdownLabel="Сообщение" selectId="message" variableContainerId="varNameContainer" variableInputId="varName"></message-input>
  
  <br><br><br>
  
  <dialog-list id="branches" fields='["info", "storage", "varName", "embednumero", "field", "comp1", "comp2"]' dialogResizable dialogTitle="Здоровья вам..." dialogWidth="600" dialogHeight="400" listLabel="Данные" listStyle="height: calc(100vh - 320px);" itemName="Item" itemHeight="28px;" itemTextFunction="glob.formatItem(data)" itemStyle="line-height: 28px;">
        
    <div style="margin: 10px;" onmouseover='(function(){
        const aselect = document.getElementById("info");
        const value = aselect.options[aselect.selectedIndex].value;

        if (value > 21) {
            document.getElementById("containerxin2").style.display = "block";
            document.getElementById("containerxin3").style.display = "none";
            document.getElementById("containerxin4").style.display = "none";
          }
          if (value < 22) {
            document.getElementById("containerxin2").style.display = "none";
            document.getElementById("containerxin3").style.display = "none";
            document.getElementById("containerxin4").style.display = "none";
          }
          if (value < 35) {
            document.getElementById("containerxin").style.display = "none";
            document.getElementById("containerxin3").style.display = "none";
            document.getElementById("containerxin4").style.display = "none";
          } else {
            document.getElementById("containerxin").style.display = "block";
            document.getElementById("containerxin3").style.display = "none";
            document.getElementById("containerxin4").style.display = "none";
          }
          if (value > 37) {
            document.getElementById("containerxin").style.display = "none";
            document.getElementById("containerxin2").style.display = "none";
            document.getElementById("containerxin3").style.display = "none";
            document.getElementById("containerxin4").style.display = "none";
          }
          if (value == 39) {
            document.getElementById("containerxin").style.display = "none";
            document.getElementById("containerxin2").style.display = "block";
            document.getElementById("containerxin3").style.display = "none";
            document.getElementById("containerxin4").style.display = "none";
          }
          if (value > 50) {
            document.getElementById("containerxin").style.display = "none";
            document.getElementById("containerxin2").style.display = "none";
            document.getElementById("containerxin3").style.display = "block";
            document.getElementById("containerxin4").style.display = "block";
          }
          if (value == 50) {
            document.getElementById("containerxin").style.display = "none";
            document.getElementById("containerxin2").style.display = "none";
            document.getElementById("containerxin3").style.display = "block";
            document.getElementById("containerxin4").style.display = "none";
          }
          if (value == 62) {
            document.getElementById("containerxin2").style.display = "none";
            document.getElementById("containerxin3").style.display = "none";
            document.getElementById("containerxin4").style.display = "none";
          }
    })()'>

        <span class="dbminputlabel">Информация</span>
        <select id="info" class="round" onchange='(function(){
            const aselect = document.getElementById("info");
            const value = aselect.options[aselect.selectedIndex].value;

            if (value > 21) {
                document.getElementById("containerxin2").style.display = "block";
                document.getElementById("containerxin3").style.display = "none";
                document.getElementById("containerxin4").style.display = "none";
              }
              if (value < 22) {
                document.getElementById("containerxin2").style.display = "none";
                document.getElementById("containerxin3").style.display = "none";
                document.getElementById("containerxin4").style.display = "none";
              }
              if (value < 35) {
                document.getElementById("containerxin").style.display = "none";
                document.getElementById("containerxin3").style.display = "none";
                document.getElementById("containerxin4").style.display = "none";
              } else {
                document.getElementById("containerxin").style.display = "block";
                document.getElementById("containerxin3").style.display = "none";
                document.getElementById("containerxin4").style.display = "none";
              }
              if (value > 37) {
                document.getElementById("containerxin").style.display = "none";
                document.getElementById("containerxin2").style.display = "none";
                document.getElementById("containerxin3").style.display = "none";
                document.getElementById("containerxin4").style.display = "none";
              }
              if (value == 39) {
                document.getElementById("containerxin").style.display = "none";
                document.getElementById("containerxin2").style.display = "block";
                document.getElementById("containerxin3").style.display = "none";
                document.getElementById("containerxin4").style.display = "none";
              }
              if (value > 50) {
                document.getElementById("containerxin").style.display = "none";
                document.getElementById("containerxin2").style.display = "none";
                document.getElementById("containerxin3").style.display = "block";
                document.getElementById("containerxin4").style.display = "block";
              }
              if (value == 50) {
                document.getElementById("containerxin").style.display = "none";
                document.getElementById("containerxin2").style.display = "none";
                document.getElementById("containerxin3").style.display = "block";
                document.getElementById("containerxin4").style.display = "none";
              }
              if (value == 62) {
                document.getElementById("containerxin2").style.display = "none";
                document.getElementById("containerxin3").style.display = "none";
                document.getElementById("containerxin4").style.display = "none";
              }
        })()'>
            <option value="0" selected>Объект сообщения</option>
            <option value="1">ID сообщения</option>
            <option value="2">Текст сообщения</option>
            <option value="3">Автор сообщения</option>
            <option value="4">Канал сообщения</option>
            <option value="5">Временная метка сообщения</option>
            <option value="6">Сообщение закреплено?</option>
            <option value="7">Сообщение TTS (Text-to-Speech)?</option>
            <option value="8">Список вложений сообщения [Объект]</option>
            <option value="62">Список вложений сообщения [URL]</option>
            <option value="9">Изменения в сообщении</option>
            <option value="12">Количество реакций на сообщение</option>
            <option value="13">Список упомянутых пользователей в сообщении</option>
            <option value="14">Количество упомянутых пользователей в сообщении</option>
            <option value="15">URL сообщения</option>
            <option value="16">Дата создания сообщения</option>
            <option value="17">Длина содержимого сообщения</option>
            <option value="18">Количество вложений в сообщении</option>
            <option value="10">ID сервера сообщения</option>
            <option value="19">Сервер сообщения</option>
            <option value="20">Тип сообщения</option>
            <option value="21">ID вебхука сообщения</option>
            <optgroup label="Информация об интеракции">
            <option value="40">Объект интеракции</option>
            <option value="41">ID интеракции</option>
            <option value="42">Имя интеракции</option>
            <option value="43">Тип интеракции</option>
            <option value="44">ID автора интеракции</option>
            <option value="45">Имя автора интеракции</option>
            <option value="46">Дискриминатор автора интеракции</option>
            <option value="47">Тег автора интеракции</option>
            <option value="48">Аватар автора интеракции</option>
            <optgroup label="Информация об Embed">
            <option value="22">Объект Embed сообщения</option>
            <option value="38">Количество Embeds</option>
            <option value="39">Количество Fields</option>
            <option value="23">Заголовок</option>
            <option value="24">Описание</option>
            <option value="25">URL</option>
            <option value="26">Цвет</option>
            <option value="27">Временная метка</option>
            <option value="28">Миниатюра</option>
            <option value="29">Изображение</option>
            <option value="30">Имя автора</option>
            <option value="31">URL иконки автора</option>
            <option value="32">URL автора</option>
            <option value="33">Текст в подвале</option>
            <option value="34">URL иконки в подвале</option>
            <option value="35">Имя поля</option>
            <option value="36">Значение поля</option>
            <option value="37">Inline поля</options>
            <optgroup label="Информация о компонентах">
            <option value="49">Всего строк</option>
            <option value="50">Всего компонентов в строке</option>
            <option value="51">Объект компонента</option>
            <option value="52">ID компонента</option>
            <option value="53">Тип компонента</option>
            <option value="54">Метка компонента</option>
            <option value="55">Стиль компонента</option>
            <option value="56">URL компонента</option>
            <option value="57">Компонент включен/выключен</option>
            <option value="58">Заполнитель компонента</option>
            <option value="59">Минимальное количество значений в меню</option>
            <option value="60">Максимальное количество значений в меню</option>
            <option value="61">Опции меню</options>
            </optgroup>
        </select>
  
        <br>

        <div style="width: 100%; display: none;" id="containerxin2">
            <table style="width:100%">
                <tr>
                    <td style="padding :5px;">
                        <span class="dbminputlabel">Номер Эмбеда</span><br>
                        <input id="embednumero" value="0" class="round" type="text">
                        <br>
                    </td>
                    <td style="padding: 5px;">
                        <div style="width: 100%;" id="containerxin">
                            <span class="dbminputlabel">Номер поля</span><br>
                            <input id="field" value="0" class="round" type="text">
                            <br>
                        </div>
                    </td>
                </tr>
            </table>
        </div>

        <table style="width:100%">
            <tr>
                <td style="padding: 5px;">
                    <div id="containerxin3">
                        <span class="dbminputlabel">Номер строки</span><br>
                        <input id="comp1" value="0" class="round" type="text">
                        <br>
                    </div>
                </td>
                <td style="padding: 5px;">
                    <div id="containerxin4">
                        <span class="dbminputlabel">Номер компанента</span><br>
                        <input id="comp2" value="0" class="round" type="text">
                        <br>
                    </div>
                </td>
            </tr>
        </table>
  
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

        const xinelaslinks = document.getElementsByClassName("xinelaslink");
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

        glob.formatItem = function (data) {
            let result = '<div style="display: inline-block; width: 200px; padding-left: 8px;">';
            const info = parseInt(data.info);
            const storage = ["Easter Egg", "Временная переменная", "Серверная переменная", "Глобальная переменная"];

            const infos = [
                "Объект сообщения",
                "ID сообщения",
                "Текст сообщения",
                "Автор сообщения",
                "Канал сообщения",
                "Отметка времени сообщения",
                "Сообщение закреплено?",
                "Сообщение TTS?",
                "Список вложений сообщения [Объект]",
                "Изменения в сообщении",
                "ID сервера сообщения",
                "",
                "Количество реакций в сообщении",
                "Список упомянутых пользователей",
                "Количество упомянутых пользователей",
                "URL сообщения",
                "Дата создания сообщения",
                "Длина содержания сообщения",
                "Количество вложений сообщения",
                "Сервер сообщения",
                "Тип сообщения",
                "ID вебхука сообщения",
                "Объект встраивания сообщения",
                "Заголовок встраивания",
                "Описание встраивания",
                "URL встраивания",
                "Цвет встраивания",
                "Отметка времени встраивания",
                "Миниатюра встраивания",
                "Изображение встраивания",
                "Имя автора в встраивании",
                "URL иконки автора в встраивании",
                "URL автора в встраивании",
                "Текст футера встраивания",
                "URL иконки футера встраивания",
                "Имя поля встраивания",
                "Значение поля встраивания",
                "В строке встраивания",
                "Количество встраиваний",
                "Количество полей встраивания",
                "Объект взаимодействия",
                "ID взаимодействия",
                "Имя взаимодействия",
                "Тип взаимодействия",
                "ID автора взаимодействия",
                "Имя автора взаимодействия",
                "Дискриминатор автора взаимодействия",
                "Тег автора взаимодействия",
                "Аватар автора взаимодействия",
                "Общее количество строк",
                "Общее количество компонентов в строке",
                "Объект компонента",
                "ID компонента",
                "Тип компонента",
                "Метка компонента",
                "Стиль компонента",
                "URL компонента",
                "Компонент включен/выключен",
                "Плейсхолдер компонента",
                "Минимальное количество значений меню",
                "Максимальное количество значений меню",
                "Опции меню",
                "Список вложений сообщения [URL]",
            ];

            result += `${infos[info]} > ${storage[parseInt(data.storage, 10)]} (${data.varName}) </div>`;
            return result;
        };
    },

    //---------------------------------------------------------------------
    // Action Bot Function
    //
    // This is the function for the action within the Bot's Action class.
    // Keep in mind event calls won't have access to the "msg" parameter,
    // so be sure to provide checks for variable existence.
    //---------------------------------------------------------------------

    async action(cache) {
        const data = cache.actions[cache.index];
        const msg = await this.getMessageFromData(data.message, data.varName, cache);

        const branches = data.branches;

        for (var i = 0; i < branches.length; i++) {
            const branch = branches[i];
            const info = parseInt(branch.info);
            let field = this.evalMessage(branch.field, cache);
            let embednumero = this.evalMessage(branch.embednumero, cache);
            let comp1 = this.evalMessage(branch.comp1, cache);
            let comp2 = this.evalMessage(branch.comp2, cache);

            let result;

            switch (info) {
                case 0:
                    result = msg;
                    break;
                case 1:
                    result = msg.id;
                    break;
                case 2:
                    result = msg.content;
                    break;
                case 3:
                    result = msg.member ?? msg.author;
                    break;
                case 4:
                    result = msg.channel;
                    break;
                case 5:
                    result = msg.createdTimestamp;
                    break;
                case 6:
                    result = msg.pinned;
                    break;
                case 7:
                    result = msg.tts;
                    break;
                case 8:
                    result = [...msg.attachments.values()];
                    break;
                case 9:
                    result = msg.edits;
                    break;
                case 10:
                    result = msg.guild.id;
                    break;
                case 12:
                    result = msg.reactions.cache.size;
                    break;
                case 13:
                    result = msg.mentions.users.filter(p => p).map(p => p);
                    break;
                case 14:
                    result = msg.mentions.users.size;
                    break;
                case 15:
                    result = msg.url;
                    break;
                case 16:
                    result = msg.createdAt;
                    break;
                case 17:
                    result = msg.content.length;
                    break;
                case 18:
                    result = msg.attachments.size;
                    break;
                case 19:
                    result = msg.guild;
                    break;
                case 20:
                    result = msg.type;
                    break;
                case 21:
                    result = msg.webhookId;
                    break;
                case 22:
                    if (msg.embeds.length <= embednumero) {
                        result = undefined;
                    } else {
                        result = msg.embeds[embednumero];
                    }
                    break;
                case 23:
                    if (msg.embeds.length <= embednumero) {
                        result = "";
                    } else {
                        result = msg.embeds[embednumero].title;
                    }
                    break;
                case 24:
                    if (msg.embeds.length <= embednumero) {
                        result = "";
                    } else {
                        result = msg.embeds[embednumero].description;
                    }
                    break;
                case 25:
                    if (msg.embeds.length <= embednumero) {
                        result = "";
                    } else {
                        result = msg.embeds[embednumero].url;
                    }
                    break;
                case 26:
                    if (msg.embeds.length <= embednumero) {
                        result = "";
                    } else {
                        result = msg.embeds[embednumero].color;
                    }
                    break;
                case 27:
                    if (msg.embeds.length <= embednumero) {
                        result = "";
                    } else {
                        result = msg.embeds[embednumero].timestamp;
                    }
                    break;
                case 28:
                    if (msg.embeds.length <= embednumero) {
                        result = "";
                    } else {
                        result = msg.embeds[embednumero].thumbnail.url;
                    }
                    break;
                case 29:
                    if (msg.embeds.length <= embednumero) {
                        result = "";
                    } else {
                        result = msg.embeds[embednumero].image.url;
                    }
                    break;
                case 30:
                    if (msg.embeds.length <= embednumero) {
                        result = "";
                    } else {
                        result = msg.embeds[embednumero].author.name;
                    }
                    break;
                case 31:
                    if (msg.embeds.length <= embednumero) {
                        result = "";
                    } else {
                        result = msg.embeds[embednumero].author.iconURL;
                    }
                    break;
                case 32:
                    if (msg.embeds.length <= embednumero) {
                        result = "";
                    } else {
                        result = msg.embeds[embednumero].author.url;
                    }
                    break;
                case 33:
                    if (msg.embeds.length <= embednumero) {
                        result = "";
                    } else {
                        result = msg.embeds[embednumero].footer.text;
                    }
                    break;
                case 34:
                    if (msg.embeds.length <= embednumero) {
                        result = "";
                    } else {
                        result = msg.embeds[embednumero].footer.iconURL;
                    }
                    break;
                case 35:
                    if (msg.embeds.length <= embednumero) {
                        result = "";
                    } else {
                        if (msg.embeds[embednumero].fields.length <= field) {
                            result = "";
                        }
                        else {
                            result = msg.embeds[embednumero].fields[field].name;
                        }
                    }
                    break;
                case 36:
                    if (msg.embeds.length <= embednumero) {
                        result = "";
                    } else {
                        if (msg.embeds[embednumero].fields.length <= field) {
                            result = "";
                        }
                        else {
                            result = msg.embeds[embednumero].fields[field].value;
                        }
                    }
                    break;
                case 37:
                    if (msg.embeds.length <= embednumero) {
                        result = "";
                    } else {
                        if (msg.embeds[embednumero].fields.length <= field) {
                            result = "";
                        }
                        else {
                            result = msg.embeds[embednumero].fields[field].inline;
                        }
                    }
                    break;
                case 38:
                    if (msg.embeds.length == undefined) {
                        result = 0;
                    } else {
                        result = msg.embeds.length;
                    }
                    break;
                case 39:
                    if (msg.embeds.length <= embednumero) {
                        result = 0;
                    } else {
                        result = msg.embeds[embednumero].fields.length
                    }
                    break;
                case 40:
                    if (msg.interaction == undefined) {
                        result = null;
                    } else {
                        result = msg.interaction
                    }
                    break;
                case 41:
                    if (msg.interaction == undefined) {
                        result = null;
                    } else {
                        result = msg.interaction.id
                    }
                    break;
                case 42:
                    if (msg.interaction == undefined) {
                        result = null;
                    } else {
                        result = msg.interaction.commandName
                    }
                    break;
                case 43:
                    if (msg.interaction == undefined) {
                        result = null;
                    } else {
                        result = msg.interaction.type
                    }
                    break;
                case 44:
                    if (msg.interaction == undefined) {
                        result = null;
                    } else {
                        result = msg.interaction.user.id
                    }
                    break;
                case 45:
                    if (msg.interaction == undefined) {
                        result = null;
                    } else {
                        result = msg.interaction.user.username
                    }
                    break;
                case 46:
                    if (msg.interaction == undefined) {
                        result = null;
                    } else {
                        result = msg.interaction.user.discriminator
                    }
                    break;
                case 47:
                    if (msg.interaction == undefined) {
                        result = null;
                    } else {
                        result = msg.interaction.user.tag
                    }
                    break;
                case 48:
                    if (msg.interaction == undefined) {
                        result = null;
                    } else {
                        result = msg.interaction.user.displayAvatarURL({ dynamic: true, format: "png", size: 4096 })
                    }
                    break;

                case 49:
                    if (msg.components.length == 0) {
                        result = null;
                    } else {
                        result = msg.components.length
                    }
                    break;

                case 50:
                    if (msg.components.length == 0) {
                        result = null;
                    } else {
                        if (msg.components.length <= comp1) {
                            result = null;
                        } else {
                            result = msg.components[comp1].components.length
                        }
                    }
                    break;

                case 51:
                    if (msg.components.length == 0) {
                        result = null;
                    } else {
                        if (msg.components.length <= comp1) {
                            result = null;
                        } else {
                            result = msg.components[comp1].components[comp2]
                        }
                    }
                    break;

                case 52:
                    if (msg.components.length == 0) {
                        result = null;
                    } else {
                        if (msg.components.length <= comp1) {
                            result = null;
                        } else {
                            result = msg.components[comp1].components[comp2].customId
                        }
                    }
                    break;

                case 53:
                    if (msg.components.length == 0) {
                        result = null;
                    } else {
                        if (msg.components.length <= comp1) {
                            result = null;
                        } else {
                            result = msg.components[comp1].components[comp2].type
                        }
                    }
                    break;

                case 54:
                    if (msg.components.length == 0) {
                        result = null;
                    } else {
                        if (msg.components.length <= comp1) {
                            result = null;
                        } else {
                            result = msg.components[comp1].components[comp2].label
                        }
                    }
                    break;

                case 55:
                    if (msg.components.length == 0) {
                        result = null;
                    } else {
                        if (msg.components.length <= comp1) {
                            result = null;
                        } else {
                            result = msg.components[comp1].components[comp2].style
                        }
                    }
                    break;

                case 56:
                    if (msg.components.length == 0) {
                        result = null;
                    } else {
                        if (msg.components.length <= comp1) {
                            result = null;
                        } else {
                            result = msg.components[comp1].components[comp2].url
                        }
                    }
                    break;

                case 57:
                    if (msg.components.length == 0) {
                        result = null;
                    } else {
                        if (msg.components.length <= comp1) {
                            result = null;
                        } else {
                            result = msg.components[comp1].components[comp2].disabled
                        }
                    }
                    break;

                case 58:
                    if (msg.components.length == 0) {
                        result = null;
                    } else {
                        if (msg.components.length <= comp1) {
                            result = null;
                        } else {
                            result = msg.components[comp1].components[comp2].placeholder
                        }
                    }
                    break;

                case 59:
                    if (msg.components.length == 0) {
                        result = null;
                    } else {
                        if (msg.components.length <= comp1) {
                            result = null;
                        } else {
                            result = msg.components[comp1].components[comp2].minValues
                        }
                    }
                    break;

                case 60:
                    if (msg.components.length == 0) {
                        result = null;
                    } else {
                        if (msg.components.length <= comp1) {
                            result = null;
                        } else {
                            result = msg.components[comp1].components[comp2].maxValues
                        }
                    }
                    break;

                case 61:
                    if (msg.components.length == 0) {
                        result = null;
                    } else {
                        if (msg.components.length <= comp1) {
                            result = null;
                        } else {
                            result = msg.components[comp1].components[comp2].options
                        }
                    }
                    break;
                case 62:
                    result = msg.attachments.map((t) => t.attachment);
                    break;
            }

            const varName = this.evalMessage(branch.varName, cache);
            const storage = parseInt(branch.storage, 10);
            this.storeValue(result, storage, varName, cache);
        }

        this.callNextAction(cache);
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
};