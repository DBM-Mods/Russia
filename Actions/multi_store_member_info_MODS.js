module.exports = {
    //---------------------------------------------------------------------
    // Action Name
    //
    // This is the name of the action displayed in the editor.
    //---------------------------------------------------------------------

    name: "Multi Store Member Info MOD",

    //---------------------------------------------------------------------
    // Action Section
    //
    // This is the section the action will fall into.
    //---------------------------------------------------------------------

    section: "Member Control",

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
        : `<font style="color:${desccor}">Получить ${data.branches.length == 1 ? data.branches.length + " информаций" : data.branches.length + " информаций"}</font>`
    },

    variableStorage(data, varType) {
        let vars = [];

        for(var i = 0; i < data.branches.length; i++) {
            const type = parseInt(data.branches[i].storage, 10);
            const varName = data.branches[i].varName;

            if(type == varType && varName) {
                let tipo;

                switch(parseInt(data.branches[i].info)) {
                    case 0:
                        tipo = "Участник сервера";
                        break;
                    case 1:
                        tipo = "(ID) идентификатор пользователя";
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
                        tipo = "Текст";
                        break;
                    case 6:
                        tipo = "Текст";
                        break;
                    case 7:
                        tipo = "Должность";
                        break;
                    case 8:
                        tipo = "Должность";
                        break;
                    case 9:
                        tipo = "Должность";
                        break;
                    case 10:
                        tipo = "Правда или ложь";
                        break;
                    case 11:
                        tipo = "Правда или ложь";
                        break;
                    case 12:
                        tipo = "Правда или ложь";
                        break;
                    case 13:
                        tipo = "Правда или ложь";
                        break;
                    case 14:
                        tipo = "Текст";
                        break;
                    case 15:
                        tipo = "Текст";
                        break;
                    case 16:
                        tipo = "URL"
                        break;
                    case 17:
                        tipo = "Список";
                        break;
                    case 18:
                        tipo = "Число";
                        break;
                    case 19:
                        tipo = "Канал";
                        break;
                    case 20:
                        tipo = "Число";
                        break;
                    case 21:
                        tipo = "Текст";
                        break;
                    case 22:
                        tipo = "Данные";
                        break;
                    case 23:
                        tipo = "(Timestamp) Временная метка";
                        break;
                    case 24:
                        tipo = "Данные";
                        break;
                    case 25:
                        tipo = "(Timestamp) Временная метка";
                        break;
                    case 26:
                        tipo = "(ID) идентификатор пользователя";
                        break;
                    case 27:
                        tipo = "Список";
                        break;
                    case 28:
                        tipo = "Список";
                        break;
                    case 29:
                        tipo = "Текст";
                        break;
                    case 30:
                        tipo = "Текст";
                        break;
                    case 31:
                        tipo = "URL";
                        break;
                    case 32:
                        tipo = "Данные";
                        break;
                    case 33:
                        tipo = "(Timestamp) Временная метка";
                        break;
                    case 34:
                        tipo = "URL";
                        break;
                    case 35:
                        tipo = "(ID) идентификатор пользователя";
                        break;
                    case 36:
                        tipo = "(Timestamp) Временная метка";
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

    fields: ["member", "varName", "description", "descriptionx", "descriptioncolor", "branches"],

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
    .xin {
      padding: 5px;
      border: 1px solid #777;
      background: rgba(255,255,255,0.1);
    }

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
  
  <member-input dropdownLabel="Участник" selectId="member" variableContainerId="varNameContainer" variableInputId="varName"></member-input>
  
  <br><br><br>
  
  <dialog-list id="branches" fields='["info", "storage", "varName"]' dialogResizable dialogTitle="Store" dialogWidth="600" dialogHeight="400" listLabel="Список" listStyle="height: calc(100vh - 320px);" itemName="Item" itemHeight="28px;" itemTextFunction="glob.formatItem(data)" itemStyle="line-height: 28px;">
        
    <div style="margin: 10px;">

        <span class="dbminputlabel">Информация</span>
        <select id="info" class="round">
            <option value="0" selecionado>Объект учачастника</option>
            <option value="1">(ID) Идентификатор участника</option>
            <option value="2">Участник имя пользователя</option>
            <option value="3">Отображаемое имя участника [псевдоним]</option>
            <option value="21">Тег участника</option>
            <option value="20">Участник дискриминатор</option>
            <option value="4">Цвет участника сервера</option>
            <option value="15">Статус участника</option>
            <option value="16">URL Аватара участника</option>
            <option value="34">URL Баннера участника</option>
            <option value="31">URL Аватара сервера участника</option>
            <option value="5">Имя сервера участника</option>
            <option value="35">(ID) Идентификатор сервера участника</option>
            <option value="6">Последнее сообщение участника (удалено)</option>
            <option value="26">(ID) Идентификатор последнего сообщения участника (удалено)</option>
            <option value="7">Наивысшая роль участника</option>
            <option value="8">Положение роли участника</option>
            <option value="9">Цвет роли участника</option>
            <option value="17">Список ролей участников</option>
            <option value="18">Количество ролей участников</option>
            <option value="10">Является ли участник владельцем?</option>
            <option value="11">Участник отключен?</option>
            <option value="12">Участник глухой?</option>
            <option value="13">Можно ли запретить участника?</option>
            <option value="14">Имя игрового статуса участника</option>
            <option value="30">Персонализированный статус участника</option>
            <option value="19">Голосовой канал участника</option>
            <option value="22">Когда создан акаунт участника</option>
            <option value="23">(Timestamp) Временная метка, когда создан акаунт участника</option>
            <option value="24">Когда участник присоединился к серверу</option>
            <option value="25">(Timestamp) Временная метка, когда участник присоединился к серверу</option>
            <option value="27">Список разрешений участников</option>
            <option value="28">Список значков участников</option>
            <option value="29">Участник статуса клиента [Интернет или мобильный]</option>
            <option value="32">Тайм-аут участника</option>
            <option value="33">(Timestamp) Временная метка тайм-аута участника</option>
            <option value="36">(Timestamp) Временная метка нажима участника</option>
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
              console.log(`Запуск URL: [${url}] В вашем браузере по умолчанию.чанию.`);
              require('child_process').execSync(`start ${url}`);
            });
          }
        }

        glob.formatItem = function (data) {
            let result = '<div style="display: inline-block; width: 200px; padding-left: 8px;">Хранить "';
            const info = parseInt(data.info);

            switch (info) {
                case 0:
                    result += "Объект учачастника";
                    break;
                case 1:
                    result += "(ID) Идентификатор участника";
                    break;
                case 2:
                    result += "Участник имя пользователя";
                    break;
                case 3:
                    result += "Отображаемое имя участника [псевдоним]";
                    break;
                case 4:
                    result += "Цвет участника";
                    break;
                case 5:
                    result += "Имя сервера участника";
                    break;
                case 6:
                    result += "Последнее сообщение участника (удалено)";
                    break;
                case 7:
                    result += "Наивысшая роль участника";
                    break;
                case 8:
                    result += "Положение роли участника";
                    break;
                case 9:
                    result += "Цвет роли";
                    break;
                case 10:
                    result += "Владелец сервера?";
                    break;
                case 11:
                    result += "Участник отключен?";
                    break;
                case 12:
                    result += "Участник глухой?";
                    break;
                case 13:
                    result += "Можно ли запретить участника?";
                    break;
                case 14:
                    result += "Имя игрового статуса участника";
                    break;
                case 15:
                    result += "Статус участника";
                    break;
                case 16:
                    result += "URL Аватара участника";
                    break;
                case 17:
                    result += "Список ролей участника";
                    break;
                case 18:
                    result += "Количество ролей участника";
                    break;
                case 19:
                    result += "Голосовой канал участника";
                    break;
                case 20:
                    result += "Участник дискриминатор";
                    break;
                case 21:
                    result += "Тег участника";
                    break;
                case 22:
                    result += "Когда создан акаунт участника";
                    break;
                case 23:
                    result += "(Timestamp) Временная метка, когда создан акаунт участника";
                    break;
                case 24:
                    result += "Когда участник присоединился к серверу";
                    break;
                case 25:
                    result += "(Timestamp) Временная метка, когда участник присоединился к серверу";
                    break;
                case 26:
                    result += "(ID) Идентификатор последнего сообщения участника (удалено)";
                    break;
                case 27:
                    result += "Список разрешений участника";
                    break;
                case 28:
                    result += "Список значков участников";
                    break;
                case 29:
                    result += "Участник статуса клиента [Интернет или мобильный]";
                    break;
                case 30:
                    result += "Персонализированный статус участника";
                    break;
                case 31:
                    result += "URL Аватара сервера участника";
                    break;
                case 32:
                    result += "Измученное время из конечности в";
                    break;
                case 33:
                    result += "(Timestamp) Временная метка тайм-аута участника";
                    break;
                case 34:
                    result += "URL Баннера участника";
                    break;
                case 35:
                    result += "Идентификатор сервера участника";
                    break;
                case 36:
                    result += "(Timestamp) Временная метка нажима участника";
                    break;
            }

            result += `" в "${data.varName}" </div>`;
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
        const member = await this.getMemberFromData(data.member, data.varName, cache);

        const branches = data.branches;

        for(var i = 0; i < branches.length; i++) {
            const branch = branches[i];
            const info = parseInt(branch.info);
            let result;

            switch(info) {
                case 0:
                    result = member;
                    break;
                  case 1:
                    result = member.id;
                    break;
                  case 2:
                    result = member.user?.username;
                    break;
                  case 3:
                    result = member.displayName;
                    break;
                  case 4:
                    result = member.displayHexColor;
                    break;
                  case 5:
                    result = member.guild;
                    break;
                  case 7:
                    result = member.roles.highest;
                    break;
                  case 8:
                    result = member.roles.hoist;
                    break;
                  case 9:
                    result = member.roles.color;
                    break;
                  case 10:
                    result = member.id === member.guild?.ownerId;
                    break;
                  case 11:
                    result = member.voice.mute;
                    break;
                  case 12:
                    result = member.voice.deaf;
                    break;
                  case 13:
                    result = member.bannable;
                    break;
                  case 14:
                    if (member.presence?.activities.length) {
                      const status = member.presence.activities.filter((s) => s.type !== "CUSTOM");
                      result = status[0]?.name;
                    }
                    break;
                  case 15:
                    if (member.presence?.status) {
                      const status = member.presence.status;
                      switch (status) {
                        case "online": { result = "В сети"; break; }
                        case "offline": { result = "Невидимый"; break; }
                        case "idle": { result = "Неактивен"; break; }
                        case "dnd": { result = "Не беспокоить"; break; }
                      }
                    }
                    break;
                  case 16:
                    if (member.user) {
                      result = member.user.displayAvatarURL({ dynamic: true, format: "png", size: 4096 });
                    }
                    break;
                  case 17:
                    result = [...member.roles.cache.values()];
                    break;
                  case 18:
                    result = member.roles.cache.size;
                    break;
                  case 19:
                    result = member.voice.channel;
                    break;
                  case 20:
                    result = member.user?.discriminator;
                    break;
                  case 21:
                    result = member.user?.tag;
                    break;
                  case 22:
                    result = member.user?.createdAt;
                    break;
                  case 23:
                    result = member.user?.createdTimestamp;
                    break;
                  case 24:
                    result = member.joinedAt;
                    break;
                  case 25:
                    result = member.joinedTimestamp;
                    break;
                  case 27:
                    result = member.permissions.toArray();
                    break;
                  case 28:
                    result = member.user?.flags?.toArray() ?? (await member.user?.fetchFlags())?.toArray();
                    break;
                  case 29:
                    const status = member.presence?.clientStatus;
                    result = status && Object.keys(status);
                    break;
                  case 30:
                    result = member.presence?.activities.find((s) => s.type === "CUSTOM")?.state;
                    break;
                  case 31:
                    result = member.displayAvatarURL({ dynamic: true, format: "png", size: 4096 });
                    break;
                  case 32:
                    result = member.communicationDisabledUntil;
                    break;
                  case 33:
                    result = member.communicationDisabledUntilTimestamp;
                    break;
                  case 34:
                    const user = await member.user.fetch();
                    result = member.user.bannerURL({ format: "png", size: 4096, dynamic: true });
                    break;
                  case 35:
                    result = member.guild.id;
                    break;
                  case 36:
                    result = member.premiumSinceTimestamp;
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