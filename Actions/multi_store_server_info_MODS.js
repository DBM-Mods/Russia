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
            : `<font style="color:${desccor}">Получать ${data.branches.length == 1 ? data.branches.length + " предмет" : data.branches.length + " Предметы"}</font>`
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
                        tipo = "(ID) Идентификатор сервера";
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
                        tipo = "Икона URL";
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
                        tipo = "Должность";
                        break;
                    case 11:
                        tipo = "Участник сервера";
                        break;
                    case 12:
                        tipo = "Участник сервера";
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
                        tipo = "Данные";
                        break;
                    case 19:
                        tipo = "Число";
                        break;
                    case 20:
                        tipo = "Правда или ложь";
                        break;
                    case 21:
                        tipo = "Правда или ложь";
                        break;
                    case 22:
                        tipo = "Данные";
                        break;
                    case 23:
                        tipo = "Число";
                        break;
                    case 24:
                        tipo = "Число";
                        break;
                    case 25:
                        tipo = "Правда или ложь";
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
                        tipo = "Правда или ложь";
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
                        tipo = "Баннер URL";
                        break;
                    case 47:
                        tipo = "Список";
                        break;
                    case 48:
                        tipo = "(ID) Идентификатор";
                        break;
                    case 49:
                        tipo = "Текст";
                        break;
                    case 50:
                        tipo = "(ID) Идентификатор";
                        break;
                    case 51:
                        tipo = "(ID) Идентификатор";
                        break;
                    case 52:
                        tipo = "Правда или ложь";
                        break;
                    case 53:
                        tipo = "Текст";
                        break;
                    case 54:
                        tipo = "Правда или ложь";
                        break;
                    case 55:
                        tipo = "Канал";
                        break;
                    case 56:
                        tipo = "(ID) Идентификатор";
                        break;
                    case 57:
                        tipo = "Канал";
                        break;
                    case 58:
                        tipo = "(ID) Идентификатор";
                        break;
                    case 59:
                        tipo = "Текст";
                        break;
                    case 60:
                        tipo = "Текст";
                        break;
                    case 61:
                        tipo = "(Timestamp) Временная метка";
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
                        tipo = "(ID) Идентификатор";
                        break;
                    case 68:
                        tipo = "(Timestamp) Временная метка";
                        break;
                    case 69:
                        tipo = "(Timestamp) Временная метка";
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
        version: '2.1.6',
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
  <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.2</div>

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
            <input type="text" class="round" id="description" placeholder="Оставьте пустым, чтобы не использовалось!">
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
  
  <dialog-list id="branches" fields='["info", "storage", "varName"]' dialogResizable dialogTitle="Store" dialogWidth="600" dialogHeight="400" listLabel="Поиск" listStyle="height: calc(100vh - 320px);" itemName="Item" itemHeight="28px;" itemTextFunction="glob.formatItem(data)" itemStyle="line-height: 28px;">
        
    <div style="margin: 10px;">

        <span class="dbminputlabel">Информация</span>
        <select id="info" class="round">
            <optgroup label="Общая информация о сервере">
            <option value="0">Сервер (объект)</options>
            <option value="1">(ID) Идентификатор сервера</options>
            <option value="2">Имя сервера</options>
            <option value="3">Имя сервера аббревиатура</options>
            <option value="53">Описание сервера</options>
            <option value="5">Значок сервера URL</options>
            <option value="7">Серверный стандартный канал</options>
            <option value="58">(ID) Идентификатор канала серверной системы</options>
            <option value="9">Серверный системный канал</options>
            <option value="21">Большой сервер</options>
            <option value="43">Фильтр явного содержимого сервера</options>
            <option value="10">Стандартная позиция сервера</options>
            <option value="12">Серверный бот</options>
            <option value="20">Доступный сервер</options>
            </optgroup>
            <optgroup label="Информация о сервере AFK">
            <option value="8">Сервер AFK канал</options>
            <option value="51">Сервер AFK (ID) идентификатор канала</options>
            <option value="19">Сервер AFK время</options>
            </optgroup>
            <optgroup label="Информация о повышении сервера">
            <option value="44">Подсчет бустеров сервера</options>
            <option value="45">Уровень бустинга сервера</options>
            </optgroup>
            <optgroup label="Количество на сервере">
            <option value="17">Количество участников на сервере</options>
            <option value="35">Количество людей на сервере</options>
            <option value="30">Количество ботов на сервере</options>
            <option value="24">Количество эмоджи на сервере</options>
            <option value="37">Количество ролей на сервере</options>
            <option value="23">Количество каналов на сервере</options>
            <option value="38">Количество текстовых каналов на сервере</options>
            <option value="39">Количество голосовых каналов на сервере</options>
            <option value="70">Всего участников по голосовым каналам</options>
            </optgroup>
            <optgroup label="Информация об сообществе сервера"">
            <option value="54">Сервер в партнерстве?</options>
            <option value="55">Правила сервера канал</options>
            <option value="56">(ID) Идентификатор канала правила сервера</options>
            <option value="4">Предпочтительный язык сервера</options>
            <option value="40">Проверенный сервер</options>
            <option value="52">Включен индикатор выполнения Server Premium</options>
            <option value="46">URL адрес баннера сервера</options>
            <option value="47">Список функций сервера</options>
            <option value="49">Пользовательский URL код сервера</options>
            <option value="57">Канал виджетов сервера</options>
            <option value="50">(ID) Идентификатор канала виджета сервера</options>
            <option value="25">Включение встраивания сервера</options>
            </optgroup>
            <optgroup label="Сервер даты информации">
            <option value="61">Отметка времени сервера</options>
            <option value="18">Сервер создан в</options>
            <option value="22">Сервер подключен в</options>
            </optgroup>
            <optgroup label="Серверные уровни">
            <option value="59">Уровень сервера NSFW</options>
            <option value="6">Уровень проверки сервера</options>
            <option value="60">Сервер MFA/2FA</options>
            </optgroup>
            <optgroup label="Информация в списках серверов">
            <option value="15">Список участников сервера</options>
            <option value="33">Список (ID) идентификаторов участников сервера</options>
            <option value="79">Список ботов сервера</options>
            <option value="80">Список (ID) идентификаторов сервера ботов</options>
            <option value="77">Список категорий сервера</options>
            <option value="78">Список (ID) идентификаторов категории сервера</options>
            <option value="13">Список каналов сервера</options>
            <option value="31">Список (ID) идентификаторов канала сервера</options>
            <option value="73">Список текстовых каналов сервера</options>
            <option value="74">Список (ID) идентификаторов текстовых каналов сервера</options>
            <option value="75">Список голосовых каналов сервера</options>
            <option value="76">Список (ID) идентификаторов серверных голосовых каналов</options>
            <option value="16">Список эмоджи сервера</options>
            <option value="14">Список ролей сервера</options>
            <option value="32">Список идентификаторов ролей сервера</options>
            <option value="41">Список заблокированных на сервере</options>
            <option value="42">Список приглашений сервера</options>
            <option value="71">Список участников по идентификатору, присутствующие в голосовых каналах</options>
            <option value="72">Список участников, присутствующих в голосовых каналах</options>
            <option value="81">Список участников сервера в порядке ввода</option>
            <option value="82">Список (ID) идентификаторов участников сервера в порядке ввода</option>
            </optgroup>
            <optgroup label="Информация владельца сервера">
            <option value="48">(ID) Идентификатор владельца сервера</options>
            <option value="11">Владелец сервера (объект)</options>
            </optgroup>
            <optgroup label="Количество статусов сервера">
            <option value="27">Участники В сети сервера</options>
            <option value="29">Участники Неактивных сервера</options>
            <option value="26">Участники Не беспокоить сервера</options>
            <option value="28">Участники Не видимый сервера</options>
            </optgroup>
            <optgroup label="Шаблон сервера">
            <option value="62">URL сделать шаблоном</options>
            <option value="63">Сделать шаблон код</options>
            <option value="64">Имя Шаблона</options>
            <option value="65">Описание шаблона</options>
            <option value="66">Время использования шаблона</options>
            <option value="67">Шаблон создатель (ID) идентификатор</options>
            <option value="68">(Timestamp) Временная метка создания шаблона</options>
            <option value="69">(Timestamp) Временная метка обновления шаблона</options>
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
                    console.log(`Launching URL: [${url}] in your default browser.`);
                    require('child_process').execSync(`start ${url}`);
                });
            }
        }

        glob.formatItem = function (data) {
            let result = '<div style="display: inline-block; width: 200px; padding-left: 8px;">';
            const info = parseInt(data.info);
            const storage = ["Easter Egg", "Временная переменная", "Переменная сервера", "Глобальная перменная"];

            const infos = [
                "Сервер (объект)",
                "(ID) Идентификатор сервера",
                "Имя сервера",
                "Имя сервера аббревиатура",
                "Сервер любимый язык",
                "Значок сервера URL",
                "Уровень проверки сервера",
                "Серверный стандартный канал",
                "Сервер AFK канал",
                "Серверный системный канал",
                "Стандартная позиция сервера",
                "Владелец сервера (объект)",
                "Серверный бот",
                "Список каналов сервера",
                "Список ролей сервера",
                "Список участников сервера",
                "Список эмоджи сервера",
                "Количество участников сервера",
                "Сервер создан в",
                "AFK время",
                "Доступный сервер",
                "Большой сервер",
                "Сервер подключен к",
                "Количество каналов сервера",
                "Сервер эмоджи количество",
                "Включено включение сервера",
                "Участники Не беспокоить сервера",
                "Участники В сети сервера",
                "Участники Не видимый сервера",
                "Количество отсутствующих участников сервера",
                "Количество ботов на сервере!",
                "Список (ID) идентификаторов канала сервера",
                "Список (ID) идентификации по ролей сервера",
                "Список (ID) идентификаторов участников сервера",
                "",
                "Количество людей на сервере",
                "",
                "Количество ролей на сервере",
                "Количество текстовых каналов на сервере",
                "Количество голосовых каналов на сервере",
                "Проверенный сервер",
                "Список заблокированных на сервере",
                "Список приглашений сервера",
                "Фильтр явного содержимого сервера",
                "Подсчет бустеров сервера",
                "Уровень бустинга сервера",
                "URL адрес баннера сервера",
                "Список ресурсов сервера",
                "(ID) Идентификатор владельца сервера",
                "Код url сервера тщеславия",
                "(ID) Идентификатор канала виджета сервера",
                "Сервер AFK (ID) идентификатор канала",
                "Включить индикатор выполнения сервера",
                "Описание сервера",
                "Партнерский сервер?",
                "Правила сервера канал",
                "(ID) Идентификатор канала правила сервера",
                "Канал виджета сервера",
                "(ID) Идентификатор канала серверной системы",
                "Уровень сервера NSFW",
                "Сервер MFA/2FA",
                "(Timestamp) Временная метка сервера",
                "URL сделать шаблоном",
                "Сделать шаблон код",
                "Имя Шаблона",
                "Описание шаблона",
                "Время использования шаблона",
                "Шаблон создатель (ID) идентификатор",
                "(Timestamp) Временная метка создания шаблона",
                "(Timestamp) Временная метка обновления шаблона",
                "Список участников не голосовых каналах",
                "Список участников по (ID) идентификатору, присутствующие в голосовых каналах",
                "Список участников, присутствующих в голосовых каналах",
                "Список текстовых каналов сервера",
                "Список (ID) идентификаторов текстовых каналов сервера",
                "Список голосовых каналов сервера",
                "Список (ID) идентификаторов серверных голосовых каналов",
                "Список категорий сервера",
                "Список (ID) идентификаторов категории сервера",
                "Список ботов сервера",
                "Список (ID) идентификаторов сервера ботов",
                "Список участников сервера в порядке ввода",
                "Список (ID) идентификаторов членов сервера в порядке ввода",
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
                    result = targetServer.members.me;
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
