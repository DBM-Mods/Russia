module.exports = {
    //---------------------------------------------------------------------
    // Action Name
    //
    // This is the name of the action displayed in the editor.
    //---------------------------------------------------------------------

    name: "Multi Store Server Info MOD",

    //---------------------------------------------------------------------
    // Action Section
    //
    // This is the section the action will fall into.
    //---------------------------------------------------------------------

    section: "Server Control",

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
                        tipo = "Сервер";
                        break;
                    case 1:
                        tipo = "ID Сервера";
                        break;
                    case 2:
                        tipo = "Текст";
                        break;
                    case 3:
                        tipo = "Текст";
                        break;
                    case 4:
                        tipo = "Текст";
                        break;
                    case 5:
                        tipo = "Иконка сервера URL";
                        break;
                    case 6:
                        tipo = "Текст";
                        break;
                    case 7:
                        tipo = "Канал";
                        break;
                    case 8:
                        tipo = "Канал";
                        break;
                    case 9:
                        tipo = "Канал";
                        break;
                    case 10:
                        tipo = "Роль";
                        break;
                    case 11:
                        tipo = "Пользователь сервера";
                        break;
                    case 12:
                        tipo = "Пользователь сервера";
                        break;
                    case 13:
                        tipo = "Список";
                        break;
                    case 14:
                        tipo = "Список";
                        break;
                    case 15:
                        tipo = "Список";
                        break;
                    case 16:
                        tipo = "Список";
                        break;
                    case 17:
                        tipo = "Число";
                        break;
                    case 18:
                        tipo = "Дата";
                        break;
                    case 19:
                        tipo = "Число";
                        break;
                    case 20:
                        tipo = "True/False";
                        break;
                    case 21:
                        tipo = "True/False";
                        break;
                    case 22:
                        tipo = "Дата";
                        break;
                    case 23:
                        tipo = "Число";
                        break;
                    case 24:
                        tipo = "Число";
                        break;
                    case 25:
                        tipo = "True/False";
                        break;
                    case 26:
                        tipo = "Число";
                        break;
                    case 27:
                        tipo = "Число";
                        break;
                    case 28:
                        tipo = "Число";
                        break;
                    case 29:
                        tipo = "Число";
                        break;
                    case 30:
                        tipo = "Число";
                        break;
                    case 31:
                        tipo = "Список";
                        break;
                    case 32:
                        tipo = "Список";
                        break;
                    case 33:
                        tipo = "Список";
                        break;
                    case 35:
                        tipo = "Число";
                        break;
                    case 37:
                        tipo = "Число";
                        break;
                    case 38:
                        tipo = "Число";
                        break;
                    case 39:
                        tipo = "Число";
                        break;
                    case 40:
                        tipo = "True/False";
                        break;
                    case 41:
                        tipo = "Список";
                        break;
                    case 42:
                        tipo = "Список";
                        break;
                    case 43:
                        tipo = "Текст";
                        break;
                    case 44:
                        tipo = "Число";
                        break;
                    case 45:
                        tipo = "Число";
                        break;
                    case 46:
                        tipo = "Баннер сервера URL";
                        break;
                    case 47:
                        tipo = "Список";
                        break;
                    case 48:
                        tipo = "ID";
                        break;
                    case 49:
                        tipo = "Текст";
                        break;
                    case 50:
                        tipo = "ID";
                        break;
                    case 51:
                        tipo = "ID";
                        break;
                    case 52:
                        tipo = "True/False";
                        break;
                    case 53:
                        tipo = "Текст";
                        break;
                    case 54:
                        tipo = "True/False";
                        break;
                    case 55:
                        tipo = "Канал";
                        break;
                    case 56:
                        tipo = "ID";
                        break;
                    case 57:
                        tipo = "Канал";
                        break;
                    case 58:
                        tipo = "ID";
                        break;
                    case 59:
                        tipo = "Текст";
                        break;
                    case 60:
                        tipo = "Текст";
                        break;
                    case 61:
                        tipo = "Timestamp";
                        break;
                    case 62:
                        tipo = "URL";
                        break;
                    case 63:
                        tipo = "Код";
                        break;
                    case 64:
                        tipo = "Текст";
                        break;
                    case 65:
                        tipo = "Текст";
                        break;
                    case 66:
                        tipo = "Число";
                        break;
                    case 67:
                        tipo = "ID";
                        break;
                    case 68:
                        tipo = "Timestamp";
                        break;
                    case 69:
                        tipo = "Timestamp";
                        break;
                    case 70:
                        tipo = "Число";
                        break;
                    case 71:
                        tipo = "Список";
                        break;
                    case 72:
                        tipo = "Список";
                        break;
                    case 73:
                        tipo = "Список";
                        break;
                    case 74:
                        tipo = "Список";
                        break;
                    case 75:
                        tipo = "Список";
                        break;
                    case 76:
                        tipo = "Список";
                        break;
                    case 77:
                        tipo = "Список";
                        break;
                    case 78:
                        tipo = "Список";
                        break;
                    case 79:
                        tipo = "Список";
                        break;
                    case 80:
                        tipo = "Список";
                        break;
                    case 81:
                        tipo = "Список";
                        break;
                    case 82:
                        tipo = "Список";
                        break;
                    case 83:
                        tipo = "Список";
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

    fields: ["server", "varName", "description", "descriptionx", "descriptioncolor", "branches"],

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
  <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.3</div>

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
  
  <server-input dropdownLabel="Сервер" selectId="server" variableContainerId="varNameContainer" variableInputId="varName"></server-input>
  
  <br><br><br>
  
  <dialog-list id="branches" fields='["info", "storage", "varName"]' dialogResizable dialogTitle="Store" dialogWidth="600" dialogHeight="400" listLabel="Stores" listStyle="height: calc(100vh - 320px);" itemName="Item" itemHeight="28px;" itemTextFunction="glob.formatItem(data)" itemStyle="line-height: 28px;">
        
    <div style="margin: 10px;">

        <span class="dbminputlabel">Информация</span>
        <select id="info" class="round">
            <optgroup label="Общая информация о сервере">
            <option value="0">Сервер (Объект)</option>
            <option value="1">ID сервера</option>
            <option value="2">Название сервера</option>
            <option value="3">Акроним названия сервера</option>
            <option value="53">Описание сервера</option>
            <option value="5">URL иконки сервера</option>
            <option value="7">Стандартный канал сервера</option>
            <option value="58">ID системного канала сервера</option>
            <option value="9">Системный канал сервера</option>
            <option value="21">Большой сервер</option>
            <option value="43">Фильтр явного содержимого сервера</option>
            <option value="10">Стандартная роль сервера</option>
            <option value="12">Бот сервера</option>
            <option value="20">Сервер доступен</options>
            </optgroup>
            <optgroup label="Информация об AFK сервера">
            <option value="8">Канал AFK сервера</option>
            <option value="51">ID канала AFK сервера</option>
            <option value="19">Время ожидания AFK сервера</options>
            </optgroup>
            <optgroup label="Информация о бустах сервера">
            <option value="44">Количество бустов сервера</option>
            <option value="45">Уровень буста сервера</options>
            </optgroup>
            <optgroup label="Счетчики серверов">
            <option value="17">Количество участников сервера</option>
            <option value="35">Количество участников-людей на сервере</option>
            <option value="30">Количество ботов на сервере</option>
            <option value="24">Количество эмодзи на сервере</option>
            <option value="37">Количество ролей на сервере</option>
            <option value="23">Количество каналов на сервере</option>
            <option value="38">Количество текстовых каналов на сервере</option>
            <option value="39">Количество голосовых каналов на сервере</option>
            <option value="70">Общее количество участников в голосовых каналах</options>
            </optgroup>
            <optgroup label="Информация о сообществе сервера">
            <option value="54">Сервер в партнерстве</option>
            <option value="55">Канал правил сервера</option>
            <option value="56">ID канала правил сервера</option>
            <option value="4">Предпочитаемый язык сервера</option>
            <option value="40">Сервер верифицирован</option>
            <option value="52">Активирована панель Server Premium</option>
            <option value="46">URL баннера сервера</option>
            <option value="47">Список ресурсов сервера</option>
            <option value="49">Пользовательский URL-код сервера</option>
            <option value="57">Канал виджета сервера</option>
            <option value="50">ID канала виджета сервера</option>
            <option value="25">Включено встраивание сервера</options>
            </optgroup>
            <optgroup label="Информация о датах сервера">
            <option value="61">Метка даты и времени сервера</option>
            <option value="18">Сервер создан</option>
            <option value="22">Сервер подключен</options>
            </optgroup>
            <optgroup label="Уровни сервера">
            <option value="59">NSFW-уровень сервера</option>
            <option value="6">Уровень проверки сервера</option>
            <option value="60">Уровень MFA/2FA сервера</options>
            </optgroup>
            <optgroup label="Информация о списке серверов">
            <option value="15">Список участников сервера</option>
            <option value="33">Список ID участников сервера</option>
            <option value="79">Список ботов сервера</option>
            <option value="80">Список ID ботов сервера</option>
            <option value="77">Список категорий сервера</option>
            <option value="78">Список ID категорий сервера</option>
            <option value="13">Список каналов сервера</option>
            <option value="31">Список ID каналов сервера</option>
            <option value="73">Список текстовых каналов сервера</option>
            <option value="74">Список ID текстовых каналов сервера</option>
            <option value="75">Список голосовых каналов сервера</option>
            <option value="76">Список ID голосовых каналов сервера</option>
            <option value="16">Список эмодзи сервера</option>
            <option value="14">Список ролей сервера</option>
            <option value="32">Список ID ролей сервера</option>
            <option value="41">Список забаненных на сервере</option>
            <option value="42">Список приглашений на сервере</option>
            <option value="71">Список участников по ID, находящихся в голосовых каналах</option>
            <option value="72">Список участников, находящихся в голосовых каналах</option>
            <option value="81">Список участников сервера в порядке входа</option>
            <option value="82">Список ID участников сервера в порядке входа</option>
            <option value="83">Список вебхуков сервера</option>
            </optgroup>
            <optgroup label="Информация о владельце сервера">
            <option value="48">ID владельца сервера</option>
            <option value="11">Владелец сервера (Объект)</options>
            </optgroup>
            <optgroup label="Счетчики статуса сервера">
            <option value="27">Количество участников онлайн на сервере</option>
            <option value="29">Количество участников в офлайн-режиме на сервере</option>
            <option value="26">Количество занятых участников на сервере</option>
            <option value="28">Количество участников в оффлайн-режиме на сервере</options>
            </optgroup>
            <optgroup label="Шаблон сервера">
            <option value="62">URL шаблона</option>
            <option value="63">Код шаблона</option>
            <option value="64">Название шаблона</option>
            <option value="65">Описание шаблона</option>
            <option value="66">Количество использований шаблона</option>
            <option value="67">ID создателя шаблона</option>
            <option value="68">Метка времени создания шаблона</option>
            <option value="69">Метка времени обновления шаблона</options>
            </optgroup>
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
                "Сервер (Объект)",
                "ID сервера",
                "Название сервера",
                "Акроним названия сервера",
                "Избранный язык сервера",
                "URL иконки сервера",
                "Уровень проверки сервера",
                "Стандартный канал сервера",
                "Канал AFK сервера",
                "Системный канал сервера",
                "Стандартная роль сервера",
                "Владелец сервера (Объект)",
                "Бот сервера",
                "Список каналов сервера",
                "Список ролей сервера",
                "Список участников сервера",
                "Список эмодзи сервера",
                "Количество участников сервера",
                "Сервер создан",
                "Время ожидания AFK сервера",
                "Сервер доступен",
                "Большой сервер",
                "Сервер подключен",
                "Количество каналов сервера",
                "Количество эмодзи сервера",
                "Встраивание сервера включено",
                "Количество занятых участников сервера",
                "Количество участников онлайн на сервере",
                "Количество участников оффлайн на сервере",
                "Количество участников AFK на сервере",
                "Количество ботов на сервере",
                "Список ID каналов сервера",
                "Список ID ролей сервера",
                "Список ID участников сервера",
                "",
                "Количество участников-людей на сервере",
                "",
                "Количество ролей на сервере",
                "Количество текстовых каналов на сервере",
                "Количество голосовых каналов на сервере",
                "Сервер верифицирован",
                "Список забаненных на сервере",
                "Список приглашений на сервере",
                "Фильтр контента сервера",
                "Количество усилений сервера",
                "Уровень усиления сервера",
                "URL баннера сервера",
                "Список ресурсов сервера",
                "ID владельца сервера",
                "URL-код сервера Vanity",
                "ID канала виджета сервера",
                "ID канала AFK сервера",
                "Активировать панель Server Premium",
                "Описание сервера",
                "Сервер партнера",
                "Канал правил сервера",
                "ID канала правил сервера",
                "Канал виджета сервера",
                "ID системного канала сервера",
                "NSFW-уровень сервера",
                "Уровень MFA/2FA сервера",
                "Метка времени сервера",
                "URL шаблона",
                "Код шаблона",
                "Название шаблона",
                "Описание шаблона",
                "Количество использований шаблона",
                "ID создателя шаблона",
                "Метка времени создания шаблона",
                "Метка времени обновления шаблона",
                "Общее количество участников в голосовых каналах",
                "Список участников по ID, находящихся в голосовых каналах",
                "Список участников, находящихся в голосовых каналах",
                "Список текстовых каналов сервера",
                "Список ID текстовых каналов сервера",
                "Список голосовых каналов сервера",
                "Список ID голосовых каналов сервера",
                "Список категорий сервера",
                "Список ID категорий сервера",
                "Список ботов сервера",
                "Список ID ботов сервера",
                "Список участников сервера в порядке входа",
                "Список ID участников сервера в порядке входа",
                "Список вебхуков сервера",
            ];

            result += `${infos[info]} > ${storage[parseInt(data.storage, 10)]} (${data.varName})</div>`;
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
        const targetServer = await this.getServerFromData(data.server, data.varName, cache);

        const branches = data.branches;

        for (var i = 0; i < branches.length; i++) {
            const branch = branches[i];
            const info = parseInt(branch.info);
            let result;

            switch (info) {
                case 0:
                    result = targetServer;
                    break;
                case 1:
                    result = targetServer.id;
                    break;
                case 2:
                    result = targetServer.name;
                    break;
                case 3:
                    result = targetServer.nameAcronym;
                    break;
                case 4:
                    result = targetServer.preferredLocale;
                    break;
                case 5:
                    result = targetServer.iconURL({ dynamic: true, format: "png", size: 4096 });
                    break;
                case 6:
                    result = targetServer.verificationLevel;
                    break;
                case 7:
                    result = targetServer.getDefaultChannel();
                    break;
                case 8:
                    result = targetServer.afkChannel;
                    break;
                case 9:
                    result = targetServer.systemChannel;
                    break;
                case 10:
                    result = targetServer.roles.resolve(targetServer.id);
                    break;
                case 11:
                    result = await targetServer.fetchOwner();
                    break;
                case 12:
                    result = targetServer.me;
                    break;
                case 13:
                    result = [...targetServer.channels.cache.values()];
                    break;
                case 14:
                    result = [...targetServer.roles.cache.values()];
                    break;
                case 15:
                    result = [...targetServer.members.cache.values()];
                    break;
                case 16:
                    result = [...targetServer.emojis.cache.values()];
                    break;
                case 17:
                    result = targetServer.memberCount;
                    break;
                case 18:
                    result = targetServer.createdAt;
                    break;
                case 19:
                    result = targetServer.afkTimeout ?? 0;
                    break;
                case 20:
                    result = targetServer.available;
                    break;
                case 21:
                    result = targetServer.large;
                    break;
                case 22:
                    result = targetServer.joinedAt;
                    break;
                case 23:
                    result = targetServer.channels.cache.size;
                    break;
                case 24:
                    result = targetServer.emojis.cache.size;
                    break;
                case 25:
                    result = !!targetServer.widgetEnabled;
                    break;
                case 26:
                    result = targetServer.members.cache.filter((m) => m.presence?.status === "dnd").size;
                    break;
                case 27:
                    result = targetServer.members.cache.filter((m) => m.presence?.status === "online").size;
                    break;
                case 28:
                    result = targetServer.members.cache.filter((m) => m.presence?.status === "offline").size;
                    break;
                case 29:
                    result = targetServer.members.cache.filter((m) => m.presence?.status === "idle").size;
                    break;
                case 30:
                    result = targetServer.members.cache.filter((m) => m.user?.bot).size;
                    break;
                case 31:
                    result = [...targetServer.channels.cache.keys()];
                    break;
                case 32:
                    result = [...targetServer.roles.cache.keys()];
                    break;
                case 33:
                    result = [...targetServer.members.cache.keys()];
                    break;
                case 35:
                    result = targetServer.members.cache.filter((m) => !m.user?.bot).size;
                    break;
                case 37:
                    result = targetServer.roles.cache.size;
                    break;
                case 38:
                    result = targetServer.channels.cache.filter((c) => c.type === "GUILD_TEXT" || c.type === "GUILD_NEWS").size;
                    break;
                case 39:
                    result = targetServer.channels.cache.filter((c) => c.type === "GUILD_VOICE").size;
                    break;
                case 40:
                    result = targetServer.verified;
                    break;
                case 41:
                    const bans = await targetServer.bans.fetch();
                    result = [...bans.values()];
                    break;
                case 42:
                    const invites = await targetServer.invites.fetch();
                    result = [...invites.values()];
                    break;
                case 43:
                    result = targetServer.explicitContentFilter;
                    break;
                case 44:
                    result = targetServer.premiumSubscriptionCount ?? 0;
                    break;
                case 45:
                    result = targetServer.premiumTier;
                    break;
                case 46:
                    result = targetServer.bannerURL({ format: "png", size: 4096 });
                    break;
                case 47:
                    result = targetServer.features;
                    break;
                case 48:
                    result = targetServer.ownerId;
                    break;
                case 49:
                    result = targetServer.vanityURLCode;
                    break;
                case 50:
                    result = targetServer.widgetChannelId;
                    break;
                case 51:
                    result = targetServer.afkChannelId;
                    break;
                case 52:
                    result = targetServer.premiumProgressBarEnabled;
                    break;
                case 53:
                    result = targetServer.description;
                    break;
                case 54:
                    result = targetServer.partnered;
                    break;
                case 55:
                    result = targetServer.rulesChannel;
                    break;
                case 56:
                    result = targetServer.rulesChannelId;
                    break;
                case 57:
                    result = targetServer.widgetChannel;
                    break;
                case 58:
                    result = targetServer.systemChannelId;
                    break;
                case 59:
                    result = targetServer.nsfwLevel;
                    break;
                case 60:
                    result = targetServer.mfaLevel;
                    break;
                case 61:
                    result = targetServer.createdTimestamp;
                    break;
                case 62:
                    result = `https://discord.new/${(await targetServer.fetchTemplates()).map(v => v.code)}`;
                    break;
                case 63:
                    result = `${(await targetServer.fetchTemplates()).map(v => v.code)}`;
                    break;
                case 64:
                    result = `${(await targetServer.fetchTemplates()).map(v => v.name)}`;
                    break;
                case 65:
                    result = `${(await targetServer.fetchTemplates()).map(v => v.description)}`;
                    break;
                case 66:
                    result = `${(await targetServer.fetchTemplates()).map(v => v.usageCount)}`;
                    break;
                case 67:
                    result = `${(await targetServer.fetchTemplates()).map(v => v.creatorId)}`;
                    break;
                case 68:
                    result = `${(await targetServer.fetchTemplates()).map(v => v.createdAt)}`;
                    break;
                case 69:
                    result = `${(await targetServer.fetchTemplates()).map(v => v.updatedAt)}`;
                    break;
                case 70:
                    result = targetServer.channels.cache.filter(c => c.type === 'GUILD_VOICE').map(c => c.members.size).reduce((s, a) => s + a, 0);
                    break;
                case 71:
                    const str = targetServer.channels.cache.filter(c => c.type === 'GUILD_VOICE').map(c => c.members.map(member => member.user.id + ',').join('')).join('');
                    result = str.substring(0, str.length - 1).split(new RegExp(","));
                    break;
                case 72:
                    let channels = targetServer.channels.cache.filter((c) => c.type === "GUILD_VOICE");
                    let members = new Array();

                    for (const [channelID, channel] of channels) {
                        for (const [memberID, member] of channel.members) {
                            members.push(member);
                        }
                    }

                    result = members;
                    break;
                case 73:
                    result = targetServer.channels.cache.filter((c) => ["GUILD_TEXT", "GUILD_NEWS"].includes(c.type)).map(channels => channels);
                    break;
                case 74:
                    result = targetServer.channels.cache.filter((c) => ["GUILD_TEXT", "GUILD_NEWS"].includes(c.type)).map(channels => channels.id);
                    break;
                case 75:
                    result = targetServer.channels.cache.filter((c) => c.type === "GUILD_VOICE").map(channels => channels);
                    break;
                case 76:
                    result = targetServer.channels.cache.filter((c) => c.type === "GUILD_VOICE").map(channels => channels.id);
                    break;
                case 77:
                    result = targetServer.channels.cache.filter((c) => c.type === "GUILD_CATEGORY").map(channels => channels);
                    break;
                case 78:
                    result = targetServer.channels.cache.filter((c) => c.type === "GUILD_CATEGORY").map(channels => channels.id);
                    break;
                case 79:
                    result = targetServer.members.cache.filter((m) => m.user?.bot).map((m) => m);
                    break;
                case 80:
                    result = targetServer.members.cache.filter((m) => m.user?.bot).map((m) => m.id);
                    break;
                case 81:
                    result = targetServer.members.cache.sort((a, b) => parseFloat(a.joinedTimestamp) - parseFloat(b.joinedTimestamp)).map((m) => m);
                    break;
                case 82:
                    result = targetServer.members.cache.sort((a, b) => parseFloat(a.joinedTimestamp) - parseFloat(b.joinedTimestamp)).map((m) => m.id);
                    break;
                case 83:
                    const webhooks = await targetServer.fetchWebhooks();
                    result = webhooks.map((w) => w);
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

    mod() {},
};
