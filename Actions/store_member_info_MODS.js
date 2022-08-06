module.exports = {
  name: "Store Member Info MOD",
  section: "Member Control",
  meta: {
    version: '2.1.5',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {
    const info = [
      "Объект пользователя",
      "ID пользователя",
      "Имя пользователя [Username]",
      "Серверное имя пользователя [DisplayName]",
      "Цвет пользователя",
      "Название сервера пользователя",
      "Последнее сообщение пользователя (Удалено)",
      "Высшая роль пользователя на сервере",
      "Позиция пользователя на сервере",
      "Позиция цвета пользователя",
      "Пользователь является владельцем сервера?",
      "У пользователя отключен микрофон?",
      "У пользователя отключен звук?",
      "Можно ли пользователя забанить?",
      "Игровой статус пользователя",
      "Активность пользователя (Пример: Онлайн)",
      "URL-ссылка аватарки пользователя",
      "Список ролей пользователя",
      "Количество возможностей пользователя",
      "Объект голосового канала, где находится пользователь",
      "Дискриминатор пользователя (Цифры после символа тега (#))",
      "Тэг пользователя",
      "Время создания аккаунта пользователя",
      "Время создания аккаунта пользователя (TimeStamp)",
      "Время входа на сервер пользователя",
      "Время входа на сервер пользователя (TimeStamp)",
      "ID последнего сообщения (Удалено)",
      "Список прав пользователя",
      "Список значков пользователя (Пример: HypeSquad)",
      "Статус клиента пользователя [Web или Мобильный]",
      "Кастомный статус пользователя",
      "URL-ссылка серверной аватарки пользователя",
      "Срок действия Тайм-аута пользователя",
      "Срок действия Тайм-аута пользователя (TimeStamp)",
      "URL-ссылка баннера пользователя",
      "ID сервера пользователя",
      "Дата окончания премиум-подписки (TimeStamp)",
    ];
    return `${presets.getMemberText(data.member, data.varName)} - ${info[parseInt(data.info, 10)]}`;
  },


  variableStorage(data, varType) {
    const type = parseInt(data.storage, 10);
    if (type !== varType) return;
    const info = parseInt(data.info, 10);
    let dataType = "Unknown Type";
    switch (info) {
      case 0:
        dataType = "Server Member";
        break;
      case 1:
        dataType = "Member ID";
        break;
      case 2:
      case 3:
        dataType = "Text";
        break;
      case 4:
        dataType = "Color";
        break;
      case 5:
        dataType = "Server";
        break;
      case 7:
      case 8:
      case 9:
        dataType = "Role";
        break;
      case 10:
      case 11:
      case 12:
      case 13:
        dataType = "Boolean";
        break;
      case 14:
      case 15:
        dataType = "Text";
        break;
      case 16:
      case 31:
        dataType = "Image URL";
        break;
      case 17:
        dataType = "List of Roles";
        break;
      case 18:
        dataType = "Number";
        break;
      case 19:
        dataType = "Voice Channel";
        break;
      case 20:
        dataType = "Member Discriminator";
        break;
      case 21:
        dataType = "Member Tag";
        break;
      case 22:
        dataType = "Date";
        break;
      case 23:
        dataType = "Timestamp";
        break;
      case 24:
        dataType = "Date";
        break;
      case 25:
        dataType = "Timestamp";
        break;
      case 27:
      case 28:
      case 29:
        dataType = "List";
        break;
      case 30:
        dataType = "Text";
        break;
      case 31:
        dataType = "Date";
        break;
      case 32:
        dataType = "Timestamp";
        break;
      case 33:
          dataType = "Timestamp";
          break;
          case 34:
            dataType = "Image URL";
            break;
            case 35:
              dataType = "Server ID";
              break;
              case 36:
                dataType = "Timestamp";
                break;
    }
    return [data.varName2, dataType];
  },

  fields: ["member", "varName", "info", "storage", "varName2"],

  html(isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 1.0</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>

<member-input dropdownLabel="Пользователь" selectId="member" variableContainerId="varNameContainer" variableInputId="varName"></member-input>

<br><br><br>

<div style="padding-top: 8px;">
	<span class="dbminputlabel">Информация</span><br>
	<select id="info" class="round">
  <option value="0" selecionado>Объект пользователя</option>
  <option value="1">ID пользователя</option>
  <option value="2">Имя пользователя [Username]</option>
  <option value="3">Серверное имя пользователя [DisplayName]</option>
  <option value="21">Тэг пользователя</option>
  <option value="20">Дискриминатор пользователя (Цифры после символа тега (#))</option>
  <option value="4">Цвет пользователя</option>
  <option value="15">Активность пользователя (Пример: Онлайн)</option>
  <option value="16">URL-ссылка аватарки пользователя</option>
  <option value="34">URL-ссылка баннера пользователя</option>
  <option value="31">URL-ссылка серверной аватарки пользователя</option>
  <option value="5">Название сервера пользователя</option>
  <option value="35">ID сервера пользователя</option>
  <option value="6">Последнее сообщение пользователя (Удалено)</option>
  <option value="26">ID последнего сообщения (Удалено)</option>
  <option value="7">Высшая роль пользователя на сервере</option>
  <option value="8">Позиция пользователя на сервере</option>
  <option value="9">Позиция цвета пользователя</option>
  <option value="17">Список ролей пользователя</option>
  <option value="18">Количество возможностей пользователя</option>
  <option value="10">Пользователь является владельцем сервера?</option>
  <option value="11">У пользователя отключен микрофон?</option>
  <option value="12">У пользователя отключен звук?</option>
  <option value="13">Можно ли пользователя забанить?</option>
  <option value="14">Игровой статус пользователя</option>
  <option value="30">Кастомный статус пользователя</option>
  <option value="19">Объект голосового канала, где находится пользователь</option>
  <option value="22">Время создания аккаунта пользователя</option>
  <option value="23">Время создания аккаунта пользователя (TimeStamp)</option>
  <option value="24">Время входа на сервер пользователя</option>
  <option value="25">Время входа на сервер пользователя (TimeStamp)</option>
  <option value="27">Список прав пользователя</option>
  <option value="28">Список значков пользователя (Пример: HypeSquad)</option>
  <option value="29">Статус клиента пользователя [Web или Мобильный]</option>
  <option value="32">Срок действия Тайм-аута пользователя</option>
  <option value="33">Срок действия Тайм-аута пользователя (TimeStamp)</option>
  <option value="36">Дата окончания премиум-подписки (TimeStamp)</option>
	</select>
</div>

<br>

<store-in-variable dropdownLabel="Хранить в" selectId="storage" variableContainerId="varNameContainer2" variableInputId="varName2"></store-in-variable>`;
  },

  init() {},


  async action(cache) {
    const data = cache.actions[cache.index];
    const member = await this.getMemberFromData(data.member, data.varName, cache);

    if (!member) {
      this.callNextAction(cache);
      return;
    }

    const info = parseInt(data.info, 10);

    let result;
    switch (info) {
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
          switch(status) {
            case "online": { result = "Online"; break; }
            case "offline": { result = "Offline"; break; }
            case "idle": { result = "Ausente"; break; }
            case "dnd": { result = "Ocupado"; break; }
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
        result = member.user.bannerURL({ fomart: "png", size: 4096, dynamic: true });
        break;
        case 35:
          result = member.guild.id;
          break;
          case 36:
            result = member.premiumSinceTimestamp;
            break;
      default:
        break;
    }

    if (result !== undefined) {
      const storage = parseInt(data.storage, 10);
      const varName2 = this.evalMessage(data.varName2, cache);
      this.storeValue(result, storage, varName2, cache);
    }

    this.callNextAction(cache);
  },


  mod() {},
};
