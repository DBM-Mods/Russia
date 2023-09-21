module.exports = {
  name: 'Store Category Info MOD',
  section: 'Channel Control',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
    },

  subtitle(data) {
    const categories = ['Что мы тут забыли?', 'Временная переменная', 'Переменная сервера', 'Глобальная переменная'];
    const info = [
      "ID категории",
      "Название категории",
      "Сервер категории",
      "Позиция категории",
      "Категория управляема?",
      "Категория может быть удалена?",
      "Список каналов",
      "Всего каналов",
      "Список текстовых каналов",
      "Всего текстовых каналов",
      "Список голосовых каналов",
      "Всего голосовых каналов",
      "Список сценических каналов (трибун)",
      "Всего сценических каналов (трибун)",
      "Список тем каналов",
      "Список по ID каналов",
      "Список по ID текстовых каналов",
      "Список по ID голосовых каналов",
      "Список по ID сценических каналов",
      "Список по названию каналов",
      "Список по названию текстовых каналов",
      "Список по названию голосовых каналов",
      "Список по названию сценических каналов",
      "Список участников по ID в голосовых каналах",
      "Список участников в голосовых каналах",
      "Всего участников в голосовых каналах",
    ];
    return `${categories[parseInt(data.category, 10)]} - ${info[parseInt(data.info, 10)]}`;
  },

  variableStorage(data, varType) {
    if (parseInt(data.storage, 10) !== varType) return;
    let dataType = 'Desconhecido';
    switch (parseInt(data.info, 10)) {
case 0:
dataType = 'ID категории';
break;
case 1:
dataType = 'Текст';
break;
case 2:
dataType = 'Сервер';
break;
case 3:
case 7:
case 9:
case 11:
dataType = 'Число';
break;
case 4:
case 5:
dataType = 'Boolean';
break;
case 6:
dataType = 'Список';
break;
case 7:
dataType = 'Число';
break;
case 8:
dataType = 'Список';
break;
case 9:
dataType = 'Число';
break;
case 10:
dataType = 'Список';
break;
case 11:
dataType = 'Число';
break;
case 12:
dataType = 'Список';
break;
case 13:
dataType = 'Число';
break;
case 14:
dataType = 'Список';
break;
case 15:
dataType = 'Список';
break;
case 16:
dataType = 'Список';
break;
case 17:
dataType = 'Список';
break;
case 18:
dataType = 'Список';
break;
case 19:
dataType = 'Список';
break;
case 20:
dataType = 'Список';
break;
case 21:
dataType = 'Список';
break;
case 22:
dataType = 'Список';
break;
case 23:
dataType = 'Список';
break;
case 24:
dataType = 'Список';
break;
case 25:
dataType = 'Число';
break;
      default:
        break;
    }
    return [data.varName2, dataType];
  },

  fields: ['category', 'varName', 'info', 'storage', 'varName2'],

  html(isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.6</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>
<div>
<div style="float: left; width: 35%;">
  <span class="dbminputlabel">Категория</span><br>
    <select id="category" class="round" onchange="glob.refreshVariableList(this)">
      ${data.variables[1]}
    </select>
  </div>
  <div id="varNameContainer" style="float: right; width: 60%;">
  <span class="dbminputlabel">Имя переменной</span><br>
    <input id="varName" class="round" type="text" list="variableList"><br>
  </div>
</div><br><br><br>
<div>
  <div style="padding-top: 8px; width: 100%;">
  <span class="dbminputlabel">Исходные данные</span><br>
    <select id="info" class="round">
      <optgroup label="Основные">
      <option value="0">ID категории</option>
      <option value="1">Название категории</option>
      <option value="2">Сервер категории</option>
      <option value="3">Позиция категории</option>
      <option value="4">Категория управляема?</option>
      <option value="5">Категория может быть удалена?</option>
      </optgroup>
      <optgroup label="Итого">
      <option value="7">Всего каналов</option>
      <option value="9">Всего текстовых каналов</option>
      <option value="11">Всего голосовых каналов</option>
      <option value="13">Всего сценических каналов (трибуны)</option>
      <option value="25">Всего участников в голосовых каналах</option>
      <optgroup label="Списки">
      <option value="6">Список каналов</option>
      <option value="8">Список текстовых каналов</option>
      <option value="10">Список голосовых каналов</option>
      <option value="12">Список сценических каналов</option>
      <option value="14">Список тем каналов</option>
      <option value="15">Список по ID каналов</option>
      <option value="16">Список по ID текстовых каналов</option>
      <option value="17">Список по ID голосовых каналов</option>
      <option value="18">Список по ID сценических каналов</option>
      <option value="19">Список по названию каналов</option>
      <option value="20">Список по названию текстовых каналов</option>
      <option value="21">Список по названию голосовых каналов</option>
      <option value="22">Список по названию сценических каналов</option>
      <option value="23">Список участников по ID в голосовых каналах</option>
      <option value="24">Список участников в голосовых каналах</options>
    </select>
  </div>
</div><br>
<div>
  <div style="float: left; width: 35%;">
  <span class="dbminputlabel">Хранить в</span><br>
    <select id="storage" class="round">
      ${data.variables[1]}
    </select>
  </div>
  <div id="varNameContainer2" style="float: right; width: 60%;">
  <span class="dbminputlabel">Имя переменной</span><br>
    <input id="varName2" class="round" type="text"><br>
  </div>
</div>`;
  },

  init() {
    const { glob, document } = this;
    glob.refreshVariableList(document.getElementById('category'));
  },

  async action(cache) {
    const data = cache.actions[cache.index];
    const category = parseInt(data.category, 10);
    const varName = this.evalMessage(data.varName, cache);
    const info = parseInt(data.info, 10);
    const targetCategory = this.getVariable(category, varName, cache);
    if (!targetCategory) return this.callNextAction(cache);

    let result;
    switch (info) {
      case 0:
        result = targetCategory.id;
        break;
      case 1:
        result = targetCategory.name;
        break;
      case 2:
        result = targetCategory.guild;
        break;
      case 3:
        result = targetCategory.position;
        break;
      case 4:
        result = targetCategory.manageable;
        break;
      case 5:
        result = targetCategory.deletable;
        break;
      case 6:
        result = targetCategory.children.filter(channels => channels).map(channels => channels);
        break;
      case 7:
        if(targetCategory.children.size == undefined) {
          result = 0;
        } else {
        result = targetCategory.children.size;}
        break;
      case 8:
        result = targetCategory.children.filter((c) => ['GUILD_TEXT', 'GUILD_NEWS'].includes(c.type)).map(channels => channels);
        break;
      case 9:
        if(targetCategory.children.filter((c) => ['GUILD_TEXT', 'GUILD_NEWS'].includes(c.type)).size == undefined) {
          result = 0;
        } else {
        result = targetCategory.children.filter((c) => ['GUILD_TEXT', 'GUILD_NEWS'].includes(c.type)).size;}
        break;
        case 10:
          result = targetCategory.children.filter((c) => ['GUILD_VOICE'].includes(c.type)).map(channels => channels);
          break;
        case 11:
          if(targetCategory.children.filter((c) => ['GUILD_VOICE'].includes(c.type)).size == undefined) {
            result = 0;
          } else {
          result = targetCategory.children.filter((c) => ['GUILD_VOICE'].includes(c.type)).size;}
          break;
          case 12:
            result = targetCategory.children.filter((c) => ['GUILD_STAGE_VOICE'].includes(c.type)).map(channels => channels);
            break;
          case 13:
            if(targetCategory.children.filter((c) => ['GUILD_STAGE_VOICE'].includes(c.type)).size == undefined) {
              result = 0;
            } else {
            result = targetCategory.children.filter((c) => ['GUILD_STAGE_VOICE'].includes(c.type)).size;}
            break;
            case 14:
              result = targetCategory.children.filter((c) => ['GUILD_TEXT', 'GUILD_NEWS'].includes(c.type)).map(channels => channels.topic);
              break;
              case 15:
                result = targetCategory.children.filter(channels => channels).map(channels => channels.id);
                break;
                case 16:
                  result = targetCategory.children.filter((c) => ['GUILD_TEXT', 'GUILD_NEWS'].includes(c.type)).map(channels => channels.id);
                  break;
                  case 17:
                    result = targetCategory.children.filter((c) => ['GUILD_VOICE'].includes(c.type)).map(channels => channels.id);
                    break;
                    case 18:
                      result = targetCategory.children.filter((c) => ['GUILD_STAGE_VOICE'].includes(c.type)).map(channels => channels.id);
                   break;
                   case 19:
                    result = targetCategory.children.filter(channels => channels).map(channels => channels.name);
                    break;
                    case 20:
                      result = targetCategory.children.filter((c) => ['GUILD_TEXT', 'GUILD_NEWS'].includes(c.type)).map(channels => channels.name);
                      break;
                      case 21:
                        result = targetCategory.children.filter((c) => ['GUILD_VOICE'].includes(c.type)).map(channels => channels.name);
                        break;
                        case 22:
                          result = targetCategory.children.filter((c) => ['GUILD_STAGE_VOICE'].includes(c.type)).map(channels => channels.name);
                       break;
                       case 23:
                        str = targetCategory.children.filter((c) => ['GUILD_VOICE'].includes(c.type)).map(c => c.members.map(member => member.user.id + ',').join('')).join('');
        result = str.substring(0, str.length - 1).split(new RegExp(","));
        break;
        case 24:
          let channels = targetCategory.children.filter((c) => ['GUILD_VOICE'].includes(c.type))
          let members = new Array();
  
          for (const [channelID, channel] of channels) {
            for (const [memberID, member] of channel.members) {
              members.push(member);
            }
          }
          result = members;
          break;
           case 25:
            result = targetCategory.children.filter((c) => ['GUILD_VOICE'].includes(c.type)).map(c => c.members.size).reduce((s, a) => s + a, 0);

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
