module.exports = {
    //---------------------------------------------------------------------
    // Action Name
    //
    // This is the name of the action displayed in the editor.
    //---------------------------------------------------------------------

    name: "Multi Check If Member has Role MOD",

    //---------------------------------------------------------------------
    // Action Section
    //
    // This is the section the action will fall into.
    //---------------------------------------------------------------------

    section: "Conditions",

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
            : `<font style="color:${desccor}">Проверка ${data.branches.length == 1 ? data.branches.length + " роль" : data.branches.length + " ролей"}</font>`
    },

    variableStorage(data, varType) { },

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

    fields: [
        "member",
        "varName",
        "description",
        "descriptionx",
        "descriptioncolor",
        "info",
        "branches",
        "branch",
        "iffalse",
        "iffalseVal",
    ],

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

  <tab-system>

    <tab label="Условия" icon="list alternate">

    <div style="margin-top: 10px;">

        <span class="dbminputlabel">Если пользователь</span>
        <select id="info" class="round">
            <option value="0">Имеет все роли</option>
            <option value="1">Не имеет всех ролей</option>
            <option value="2">Имеет одну из ролей</option>
            <option value="3">Не имеет ни одной из ролей</option>
        </select>

        <br>

        <conditional-input id="branch"></conditional-input>
    </div>

    </tab>

    <tab label="Проверки" icon="align left">

        <div style="margin-top: 10px;">

            <member-input dropdownLabel="Пользователь" selectId="member" variableContainerId="varNameContainer" variableInputId="varName"></member-input>
        
            <br><br><br>
            
            <dialog-list id="branches" fields='["role", "varName"]' dialogResizable dialogTitle="Роль" dialogWidth="600" dialogHeight="400" listLabel="Проверки" listStyle="height: calc(100vh - 310px);" itemName="Item" itemHeight="28px;" itemTextFunction="glob.formatItem(data)" itemStyle="line-height: 28px;">
                
            <div style="margin: 10px;">

                <role-input dropdownLabel="Роль" selectId="role" variableContainerId="varNameContainer" variableInputId="varName"></role-input>
        
            </div>
            
            </dialog-list>

        </div>

    </tab>

    <tab label="Конфиг" icon="cogs">

        <div id="flutuador" style="padding:0px 0px 15px 0px; margin-top: 10px;">
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

        <div style="float: left; width: 40%;">
            <span class="dbminputlabel">Произошла ошибка</span>
            <select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
                <option value="0" selecionado>Продолжать</option>
                <option value="1">Остановить последовательность действий</option>
                <option value="2">Перейти к действию</option>
                <option value="3">Пропустить следующие действия</option>
                <option value="4">Перейти к якову действия</option>
            </select>
        </div>

        <div id="iffalseContainer" style="display: none; float: right; width: 55%;">
            <span id="xinelas" class="dbminputlabel">Для</span>
            <br>
            <input id="iffalseVal" class="round" name="actionxinxyla" type="text">
        </div>

    </tab>

  </tab-system>
  `;
    },

    //---------------------------------------------------------------------
    // Action Editor Init Code
    //
    // When the HTML is first applied to the action editor, this code
    // is also run. This helps add modifications or setup reactionary
    // functions for the DOM elements.
    //---------------------------------------------------------------------

    preInit(data, formatters) {
        return formatters.compatibility_2_0_0_iftruefalse_to_branch(data);
    },

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
                    console.log(`Запуск URL: [${url}] В вашем браузере по умолчанию.`);
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
                document.querySelector(`[id='xinelas']`).innerText = (`Номер действия`);
            }

            if (event.value == "3") {
                document.querySelector(`[id='xinelas']`).innerText = (`Пропустить действия`);
            }

            if (event.value == "4") {
                document.querySelector(`[id='xinelas']`).innerText = (`Якоря название`);
            }
        }

        glob.onComparisonChanged(document.getElementById("iffalse"));

        glob.formatItem = function (data) {
            let result = '<div style="display: inline-block; width: 200px; padding-left: 8px;">';
            const cargo = parseInt(data.role);

            switch (cargo) {
                case 0:
                    result += "Проверить упомянутую роль";
                    break;
                case 1:
                    result += "Проверьте первую позицию автора";
                    break;
                case 2:
                    result += "Проверьте первую позицию сервера";
                    break;
                case 3:
                    result += `Проверьте временную переменную (${data.varName})`;
                    break;
                case 4:
                    result += `Проверьте переменную сервера (${data.varName})`;
                    break;
                case 5:
                    result += `Проверьте глобальную переменную (${data.varName})`;
                    break;
                case 6:
                    result += `Проверьте параметр Slash (${data.varName})`;
                    break;
                case 100:
                    result += `Проверить роль по имени (${data.varName})`;
                    break;
                case 101:
                    result += `Проверить роль по (ID) идентификатору (${data.varName})`;
                    break;
            }

            result += `</div>`;
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
        const _this = this;
        const info = parseInt(data.info);
        var member = await this.getMemberFromData(data.member, data.varName, cache);
        const memberfind = this.evalMessage(data.member, cache);
        const find = this.evalMessage(data.varName, cache);

        if (memberfind == "100" || memberfind == "101") {

            const server = cache.server;

            if (!server?.members) {
                return this.callNextAction(cache);
            }

            if (server.memberCount !== server.members.cache.size) server.members.fetch();

            const members = server.members.cache;

            if (memberfind == "100") member = members.find((m) => m.user?.username === find);
            if (memberfind == "101") member = members.get(find);
        }


        const branches = data.branches;
        let results = [];
        let resultado = false;

        try {
            for (var i = 0; i < branches.length; i++) {
                const branch = branches[i];
                const cargo = await this.getRoleFromData(branch.role, branch.varName, cache);
                let result;

                result = Boolean(member.roles.cache.has(cargo.id));

                results.push(result);
            }
        } catch {
            return this.executeResults(false, data, cache);
        }

        switch (info) {
            case 0:
                resultado = results.every((r) => r == true);
                break;
            case 1:
                resultado = results.every((r) => r == false);
                break;
            case 2:
                resultado = results.some((r) => r == true);
                break;
            case 3:
                resultado = results.some((r) => r == false);
                break;
        }

        this.executeResults(resultado, data?.branch ?? data, cache);
    },

    //---------------------------------------------------------------------
    // Action Bot Mod
    //
    // Upon initialization of the bot, this code is run. Using the bot's
    // DBM namespace, one can add/modify existing functions if necessary.
    // In order to reduce conflicts between mods, be sure to alias
    // functions you wish to overwrite.
    //---------------------------------------------------------------------

    modInit(data) {
        this.prepareActions(data.branch?.iftrueActions);
        this.prepareActions(data.branch?.iffalseActions);
    },

    mod() { },
};