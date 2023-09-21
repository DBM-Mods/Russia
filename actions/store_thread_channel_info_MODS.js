module.exports = {
  name: "Store Thread Channel Info MOD",
  section: "Channel Control",
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {
    const info = [
      "Объект темы",
      "ID темы",
      "Название темы",
      "Тема архивирована?",
      "Тема заблокирована?",
      "Тема пригласительная?",
      "Дата архивации темы",
      "Метка времени архивации темы",
      "Владелец темы",
      "Количество сообщений в теме",
      "Количество участников в теме",
      "Режим медленного режима темы [секунды]",
      "Продолжительность архивации темы [секунды]",
      "ID канала, в котором находится тема",
      "ID сервера, в котором находится тема",
      "ID последнего сообщения в теме",
    ];
    return `${presets.getChannelText(data.thread, data.threadVarName)} - ${info[parseInt(data.info, 10)]}`;
  },

  variableStorage(data, varType) {
    const type = parseInt(data.storage, 10);
    if (type !== varType) return;
    const info = parseInt(data.info, 10);
    let dataType = "Unknown Type";
    switch (info) {
      case 0:
        dataType = "Объект";
        break;
      case 1:
        dataType = "Число";
        break;
      case 2:
        dataType = "Текст";
        break;
        case 3:
          dataType = "true/false";
          break;
          case 4:
            dataType = "true/false";
            break;
      case 5:
        dataType = "true/false";
        break;
      case 6:
        dataType = "Дата";
        break;
      case 7:
        dataType = "Timestamp";
        break;
        case 8:
          dataType = "Число";
          break;
          case 9:
            dataType = "Число";
            break;
            case 10:
              dataType = "Число";
              break;
              case 11:
                dataType = "Число";
                break;
                    case 12:
                      dataType = "Число";
                      break;
                      case 13:
                        dataType = "Число";
                        break;
                        case 14:
                          dataType = "Число";
                          break;
                          case 15:
                            dataType = "Число";
                            break;
    }
    return [data.storageVarName, dataType];
  },


  fields: ["thread", "threadVarName", "info", "storage", "storageVarName"],

   html(isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.1</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>

<thread-channel-input dropdownLabel="Канал" selectId="thread" variableContainerId="varNameContainer" variableInputId="threadVarName"></thread-channel-input>

<br><br><br>

<div style="padding-top: 8px;">
	<span class="dbminputlabel">Информация</span><br>
	<select id="info" class="round">
		<option value="0" selected>Объект темы</option>
		<option value="1">ID темы</option>
		<option value="2">Название темы</option>
		<option value="3">Тема архивирована?</option>
		<option value="4">Тема заблокирована?</option>
		<option value="5">Тема пригласительная? (Можно ли пригласить людей?)</option>
		<option value="6">Дата архивации темы</option>
		<option value="7">Метка времени архивации темы</option>
    <option value="8">ID владельца темы</option>
    <option value="9">Количество сообщений в теме</option>
    <option value="10">Количество участников в теме</option>
    <option value="11">Режим медленного режима темы [секунды]</option>
    <option value="12">Длительность архивации темы [секунды]</option>
    <option value="13">ID канала, в котором находится тема</option>
    <option value="14">ID сервера, в котором находится тема</option>
    <option value="15">ID последнего сообщения в теме</option>
	</select>
</div>

<br>

<store-in-variable dropdownLabel="Хранить в" selectId="storage" variableContainerId="varNameContainer2" variableInputId="storageVarName"></store-in-variable>`;
  },


  init() {},

  async action(cache) {
    const data = cache.actions[cache.index];

    const targetChannel = await this.getChannelFromData(data.thread, data.threadVarName, cache);

    if (!targetChannel) {
      this.callNextAction(cache);
      return;
    }

    let result;
    const info = parseInt(data.info, 10);
    switch (info) {
      case 0:
        result = targetChannel;
        break;
      case 1:
        result = targetChannel.id;
        break;
      case 2:
        result = targetChannel.name;
        break;
      case 3:
        result = targetChannel.archived;
        break;
      case 4:
        result = targetChannel.locked;
        break;
      case 5:
        result = targetChannel.invitable;
        break;
      case 6:
        result = targetChannel.archivedAt;
        break;
      case 7:
        result = targetChannel.archiveTimestamp;
        break;
      case 8:
        result = targetChannel.ownerId;
        break;
      case 9:
        result = targetChannel.messageCount;
        break;
      case 10:
        result = targetChannel.memberCount;
        break;
      case 11:
        result = targetChannel.rateLimitPerUser;
        break;
      case 12:
        result = targetChannel.autoArchiveDuration;
        break;
      case 13:
        result = targetChannel.parentId;
        break;
      case 14:
        result = targetChannel.guildId;
        break;
      case 15:
      result = targetChannel.lastMessageId
        break;
      default:
        break;
    }

    if (result !== undefined) {
      const storage = parseInt(data.storage, 10);
      const storageVarName = this.evalMessage(data.storageVarName, cache);
      this.storeValue(result, storage, storageVarName, cache);
    }

    this.callNextAction(cache);
  },


  mod() {},
};
