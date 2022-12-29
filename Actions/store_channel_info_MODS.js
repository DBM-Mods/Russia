module.exports = {
  name: "Store Channel Info MOD",
  section: "Channel Control",
  meta: {
    version: '2.1.6',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
    },

  subtitle(data, presets) {
    const info = [
      "Объект канала",
      "ID канала",
      "Название канала",
      "Тема канала",
      "Последнее сообщение канала",
      "Позиция канала",
      "Канал NSFW?",
      "Это прямое сообщение?",
      "Можно ли удалить канал?",
      "Дата создания канала",
      "ID категории канала",
      "Название категории канала",
      "Timestamp создания канала",
      "Это текстовый канал?",
      "Это голосовой канал?",
      "Это категория?",
      "Это канал новостей?",
      "Это трибуна?",
      "Тип канала",
      "Права участника в канале [Текстовый режим]",
      "Права канала [Текстовый режим]",
      "Права участника в канале [Режим Объекта]",
      "Права канала [Режим Объекта]",
      "Права участника в канале [Режим Списка]",
      "Права канала [Режим Списка]",
      "Медленный режим канала [секунды]",
      "Тема канала [режим списка с объектом]",
    ];
    return `${presets.getChannelText(data.channel, data.varName)} - ${info[parseInt(data.info, 10)]}`;
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
        dataType = "Текст";
        break;
        case 4:
          dataType = "Текст";
          break;
      case 5:
        dataType = "Число";
        break;
        case 6:
          dataType = "true/false";
          break;
          case 7:
            dataType = "true/false";
            break;
      case 8:
        dataType = "true/false";
        break;
        case 9:
          dataType = "Data";
          break;
      case 10:
        dataType = "Число";
        break;
      case 11:
        dataType = "Текст";
        break;
      case 12:
        dataType = "Timestamp";
        break;
        case 13:
          dataType = "true/false";
          break;
          case 14:
            dataType = "true/false";
            break;
            case 15:
              dataType = "true/false";
              break;
              case 16:
                dataType = "true/false";
                break;
                case 17:
                  dataType = "true/false";
                  break;
                  case 18:
                    dataType = "Текст";
                    break;
                    case 19:
                      dataType = "Текст";
                      break;
                      case 20:
                        dataType = "Текст";
                        break;
                        case 21:
                          dataType = "Объект";
                          break;
                          case 22:
                            dataType = "Объект";
                            break;
                            case 23:
                              dataType = "Список";
                              break;
                              case 24:
                                dataType = "Список";
                                break;
                                case 25:
                                  dataType = "Число";
                                  break;
                                  case 26:
                                    dataType = "Список/Объект";
                                    break;
    }
    return [data.varName2, dataType];
  },

  fields: ["channel", "varName", "info", "storage", "varName2"],

  html(isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.1</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>

<channel-input dropdownLabel="Целевой канал" selectId="channel" variableContainerId="varNameContainer" variableInputId="varName"></channel-input>

<br><br><br>

<div style="padding-top: 8px;">
	<span class="dbminputlabel">Целевая информация</span><br>
	<select id="info" class="round">
  <optgroup label="Информация о канале">
  <option value="0" selecionado>Объект канала</option>
  <option value="1">ID канала</option>
  <option value="2">Название канала</option>
  <option value="3">Тема канала</option>
  <option value="4">Последнее сообщение канала</option>
  <option value="5">Позиция канала</option>
  <option value="9">Дата создания канала</option>
  <option value="12">Timestamp создания канала</option>
  <option value="18">Тип канала</option>
  <option value="25">Медленный режим канала [секунды]</option>
  <option value="26">Открытые темы канала [режим списка с объектом]</option>
  </optgroup>
  <optgroup label="Категория канала">
  <option value="10">ID категории канала</option>
  <option value="11">Название категории канала</option>
  </optgroup>
  <optgroup label="true/false">
  <option value="6">Канал NSFW?</option>
  <option value="7">Это прямое сообщение?</option>
  <option value="8">Можно ли удалить канал?</option>
  <option value="13">Это текстовый канал?</option>
  <option value="14">Это голосовой канал?</option>
  <option value="15">Это категория?</option>
  <option value="16">Это канал новостей?</option>
  <option value="17">Это Stage канал?</option>
  </optgroup>
  <optgroup label="Разрешения канала">
  <option value="19">Права доступа пользователей канала [текстовый режим]</option>
  <option value="20">Права канала [текстовый режим]</option>
  <option value="21">Права доступа пользователей канала [режим объекта]</option>
  <option value="22">Права канала [режим объекта]</option>
  <option value="23">Права доступа пользователей канала [режим списка]</option>
  <option value="24">Права канала [режим списка]</option>
  </optgroup>
	</select>
</div>

<br>

<store-in-variable dropdownLabel="Сохранить в" selectId="storage" variableContainerId="varNameContainer2" variableInputId="varName2"></store-in-variable>`;
  },

  init() {},

  async action(cache) {
    const data = cache.actions[cache.index];
    const DiscordJS = this.getDBM().DiscordJS;

    const targetChannel = await this.getChannelFromData(data.channel, data.varName, cache);

    if (!targetChannel) {
      this.callNextAction(cache);
      return;
    }

    const info = parseInt(data.info, 10);

    let result;
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
        result = targetChannel.topic;
        break;
      case 4:
        result = targetChannel.lastMessage;
        break;
      case 5:
        result = targetChannel.position;
        break;
      case 6:
        result = targetChannel.nsfw;
        break;
      case 7:
        result = targetChannel.type === "DM";
        break;
      case 8:
        result = targetChannel.deletable;
        break;
      case 9:
        result = targetChannel.createdAt;
        break;
      case 10:
        result = targetChannel.parentId;
        break;
      case 11:
        result = targetChannel.parent;
        break;
      case 12:
        result = targetChannel.createdTimestamp;
        break;
      case 13:
        result = targetChannel instanceof DiscordJS.TextChannel;
        break;
      case 14:
        result = targetChannel instanceof DiscordJS.VoiceChannel;
        break;
      case 15:
        result = targetChannel instanceof DiscordJS.CategoryChannel;
        break;
      case 16:
        result = targetChannel instanceof DiscordJS.NewsChannel;
        break;
      case 17: 
        result = targetChannel instanceof DiscordJS.StoreChannel;
        break
      case 18:
        result = targetChannel.type;
        break;
      case 19:
        result = await targetChannel.permissionOverwrites.cache.filter(p => p.type=='member').map(p => `**Пользователь**: <@${p.id}>\n • Разрешено: ${p.allow.toArray().length>=1?p.allow.toArray():'Ничего'}\n • Отключено: ${p.deny.toArray().length>=1?p.deny.toArray():'Ничего'}`).join('\n\n');
        break;
       case 20:
        result = await targetChannel.permissionOverwrites.cache.filter(p => p.type=='role').map(p => `**Роль**: <@&${p.id}>\n • Разрешено: ${p.allow.toArray().length>=1?p.allow.toArray():'Ничего'}\n • Запрещено: ${p.deny.toArray().length>=1?p.deny.toArray():'Ничего'}`).join('\n\n');
        break;
      case 21:
        result = await targetChannel.permissionOverwrites.cache;
        break;
      case 22:
        result = await targetChannel.permissionOverwrites.cache;
        break;
      case 23:
        result = await targetChannel.permissionOverwrites.cache.filter(p => p.type=='member').map(p => `**Пользователь**: <@${p.id}>\n • Разрешено: ${p.allow.toArray().length>=1?p.allow.toArray():'Ничего'}\n • Запрещено: ${p.deny.toArray().length>=1?p.deny.toArray():'Ничего'}`);
        break;
      case 24:
       result = await targetChannel.permissionOverwrites.cache.filter(p => p.type=='role').map(p => `**Роль**: <@&${p.id}>\n • Разрешено: ${p.allow.toArray().length>=1?p.allow.toArray():'Ничего'}\n • Запрещено: ${p.deny.toArray().length>=1?p.deny.toArray():'Ничего'}`);
       break;
       case 25:
       result = targetChannel.rateLimitPerUser;
       break;
       case 26:
      result = targetChannel.threads.cache.filter(p => p).map(p => p);
        break;
      default:
        break;
    }
    /* Copyright XinXyla#0001 - Replicating to another GitHub is not allowed */
    if (result !== undefined) {
      const storage = parseInt(data.storage, 10);
      const varName2 = this.evalMessage(data.varName2, cache);
      this.storeValue(result, storage, varName2, cache);
    }
    this.callNextAction(cache);
  },

  mod() {},
};
