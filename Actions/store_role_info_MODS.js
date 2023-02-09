module.exports = {


  name: "Store Role Info MOD",
  section: "Role Control",
  meta: {
    version: '2.1.6',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]<br>[Tempest - 321400509326032897]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
    },

  subtitle(data, presets) {
    const info = [
      "Объект роли",
      "Идентификатор (ID) роли",
      "Название роли",
      "Цвет роли",
      "Положение роли",
      "Отметка времени (Timestamp) создания роли",
      "Является ли роль упоминаемой?",
      "Роль отделена от других?",
      "Роль является управляемой?",
      "Список участников роли",
      "Дата создания роли",
      "Список разрешений роли",
      "Количество участников роли",
      "Значок роли",
      "Тег сообщения",
      "Сервер роли",
      "Идентификатор (ID) сервера роли",
      "Роль редактируется?",
      "Список идентификаторов (ID) участников роли",
      "Список участников онлайн роли",
      "Список участников офлайн роли",
      "Список участников неактивных роли",
      "Список участников не беспокоить роли",
      "Количество участников онлайн роли",
      "Количество участников офлайн роли",
      "Количество участников неактивных роли",
      "Количество участников не беспокоить роли",
    ];
    return `${presets.getRoleText(data.role, data.varName)} - ${info[parseInt(data.info, 10)]} для (${data.varName2})`;
  },

  variableStorage(data, varType) {
    const type = parseInt(data.storage, 10);
    if (type !== varType) return;
    const info = parseInt(data.info, 10);
    let dataType = "Unknown Type";
    switch (info) {
      case 0:
        dataType = "Роль";
        break;
      case 1:
        dataType = "Роль ID";
        break;
      case 2:
        dataType = "Текст";
        break;
      case 3:
        dataType = "Цвет";
        break;
      case 4:
        dataType = "Число";
        break;
      case 5:
        dataType = "Отметка времени (Timestamp)";
        break;
      case 6:
      case 7:
        dataType = "Boolean";
        break;
      case 8:
        dataType = "Boolean";
        break;
      case 9:
        dataType = "Список участников";
        break;
      case 10:
        dataType = "Данные";
        break;
      case 11:
      case 12:
        dataType = "Число";
        break;
      case 13:
        dataType = "URL изображения";
        break;
      case 14:
        dataType = "Объект";
        break;
      case 15:
        dataType = "Сервер";
        break;
      case 16:
        dataType = "Сервер ID";
        break;
      case 17:
        dataType = "Boolean";
        break;
      case 18:
        dataType = "Список";
        break;
      case 19:
        dataType = "Список";
        break;
      case 20:
        dataType = "Список";
        break;
      case 21:
        dataType = "Список";
        break;
      case 22:
        dataType = "Список";
        break;
      case 23:
        dataType = "Число";
        break;
      case 24:
        dataType = "Число";
        break;
      case 25:
        dataType = "Число";
        break;
      case 26:
        dataType = "Число";
        break;
    }
    return [data.varName2, dataType];
  },


  fields: ["role", "varName", "info", "storage", "varName2"],


  html(isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.5</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>

<role-input dropdownLabel="Роль" selectId="role" variableContainerId="varNameContainer" variableInputId="varName"></role-input>

<br><br><br>

<div style="padding-top: 8px;">
	<span class="dbminputlabel">Информация об роли</span><br>
	<select id="info" class="round">
    <optgroup label="Информация о роли">
		<option value="0" selected>Роль - Объект</option>
		<option value="1">ID роли</option>
		<option value="2">Имя роли</option>
		<option value="3">Цвет роли</option>
		<option value="4">Положение роли</option>
    <option value="14">Тег роли</option>
    <option value="13">Значок роли</option>
    <option value="12">Количество участников роли</option>
    </optgroup>
    <optgroup label="Условия роли">
		<option value="6">Является ли роль упоминаемой?</option>
		<option value="17">Роль редактируется?</option>
    <option value="7">Роль отделена от других?</option>
    <option value="8">Роль управляется ботом / интеграцией?</option>
    </optgroup>
    <optgroup label="Даты роли">
		<option value="5">Отметка времени (Timestamp) создания роли</option>
    <option value="10">Дата создания роли</option>
    </optgroup>
    <optgroup label="Информация о роли сервера">
    <option value="15">Сервер роли</option>
    <option value="16">ID сервера роли</option>
    </optgroup>
    <optgroup label="Информация о роли в списках">
    <option value="9">Список участников должности</option>
    <option value="18">Список идентификаторов (ID) участников роли</option>
    <option value="11">Список разрешений роли</option>
    <option value="19">Список участников онлайн роли</option>
    <option value="20">Список участников офлайн роли</option>
    <option value="21">Список участников неактивных роли</option>
    <option value="22">Список участников не беспокоить роли</option>
    <option value="23">Количество участников онлайн роли</option>
    <option value="24">Количество участников офлайн роли</option>
    <option value="25">Количество участников неактивных роли</option>
    <option value="26">Количество участников не беспокоить роли</option>
    </optgroup>
	</select>
</div>

<br>

<store-in-variable dropdownLabel="Хранить в" selectId="storage" variableContainerId="varNameContainer2" variableInputId="varName2"></store-in-variable>`;
  },



  init() {},


  async action(cache) {
    const data = cache.actions[cache.index];
    const targetRole = await this.getRoleFromData(data.role, data.varName, cache);
    const info = parseInt(data.info, 10);
    if (!targetRole) {
      this.callNextAction(cache);
      return;
    }
    let result;
    switch (info) {
      case 0:
        result = targetRole;
        break;
      case 1:
        result = targetRole.id;
        break;
      case 2:
        result = targetRole.name;
        break;
      case 3:
        result = targetRole.hexColor;
        break;
      case 4:
        result = targetRole.position;
        break;
      case 5:
        result = targetRole.createdTimestamp;
        break;
      case 6:
        result = targetRole.mentionable;
        break;
      case 7:
        result = targetRole.hoist;
        break;
      case 8:
        result = targetRole.managed;
        break;
      case 9:
        result = [...targetRole.members.values()];
        break;
      case 10:
        result = targetRole.createdAt;
        break;
      case 11:
        result = targetRole.permissions.toArray().join(', ').replace(/_/g, ' ').toLowerCase();
        break;
      case 12:
        result = targetRole.members.size;
        break;
      case 13:
        result = targetRole.iconURL({ dynamic: true, format: "png", size: 4096 });
        break;
      case 14:
        result = targetRole.tags;
        break;
      case 15:
        result = targetRole.guild;
        break;
      case 16:
        result = targetRole.guild.id;
        break;
      case 17:
        result = targetRole.editable;
        break;
      case 18:
        result = [...targetRole.members.keys()];
        break;
      case 19:
        result = targetRole.members.filter((m) => m.presence?.status == "online").map((c) => c);
        break;
      case 20:
        result = targetRole.members.filter((m) => m.presence?.status == "offline").map((c) => c);
        break;
      case 21:
        result = targetRole.members.filter((m) => m.presence?.status == "idle").map((c) => c);
        break;
      case 22:
        result = targetRole.members.filter((m) => m.presence?.status == "dnd").map((c) => c);
        break;
      case 23:
        result = targetRole.members.filter((m) => m.presence?.status == "online").map((c) => c).length;
        break;
      case 24:
        result = targetRole.members.filter((m) => m.presence?.status == "offline").map((c) => c).length;
        break;
      case 25:
        result = targetRole.members.filter((m) => m.presence?.status == "idle").map((c) => c).length;
        break;
      case 26:
        result = targetRole.members.filter((m) => m.presence?.status == "dnd").map((c) => c).length;
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
