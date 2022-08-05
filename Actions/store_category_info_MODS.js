module.exports = {
  name: 'Store Category Info MOD',
  section: 'Channel Control',
  meta: {
    version: '2.1.5',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data) {
    const categories = ['Ты обманщик!', 'Временная переменная', 'Серверная переменная', 'Глобальная переменная'];
    const info = [
      "ID Категории",
      "Название Категории",
      "Категория сервера",
      "Позиция категории",
      "Является ли категория управляемой?",
      "Можно ли удалить категорию?",
      "Список всех каналов в этой категории",
      "Всего каналов в этой категории",
      "Список текстовых каналов в этой категории",
      "Всего текстовых каналов в этой категории",
      "Список голосовых каналов в этой категории",
      "Всего голосовых каналов в этой категории",
      "Список трибунных каналов в этой категории",
      "Всего трибунных каналов в этой категории",
      "Список тем канала в этой категории",
      "Список по ID канала в этой категории",
      "Список по ID текстовых каналов в этой категории",
      "Список по ID голосовых каналов в этой категории",
      "Список по ID трибунных каналов в этой категории",
      "Список по названию канала в этой категории",
      "Список по названию текстовых каналов в этой категории",
      "Список по названию голосовых каналов в этой категории",
      "Список по названию трибунных каналов в этой категории",
    ];
    return `${categories[parseInt(data.category, 10)]} - ${info[parseInt(data.info, 10)]}`;
  },

  variableStorage(data, varType) {
    if (parseInt(data.storage, 10) !== varType) return;
    let dataType = 'Unknown Type';
    switch (parseInt(data.info, 10)) {
      case 0:
  dataType = 'Category ID';
        break;
      case 1:
  dataType = 'Text';
        break;
      case 2:
  dataType = 'Server';
        break;
      case 3:
      case 7:
      case 9:
      case 11:
  dataType = 'Number';
        break;
      case 4:
      case 5:
  dataType = 'Boolean';
        break;
      case 6:
  dataType = 'List';
        break;
        case 7:
    dataType = 'Number';
          break;
          case 8:
dataType = 'List';
            break;
            case 9:
  dataType = 'Number';
              break;
              case 10:
dataType = 'List';
                break;
                case 11:
dataType = 'Number';
                  break;
                  case 12:
dataType = 'List';
                    break;
                    case 13:
dataType = 'Number';
                      break;
                      case 14:
dataType = 'List';
break;
case 15:
dataType = 'List';
break;
case 16:
dataType = 'List';
break;
case 17:
dataType = 'List';
break;
case 18:
dataType = 'List';
break;
case 19:
dataType = 'List';
break;
case 20:
dataType = 'List';
break;
case 21:
dataType = 'List';
break;
case 22:
dataType = 'List';
break;

        break;
      default:
        break;
    }
    return [data.varName2, dataType];
  },

  fields: ['category', 'varName', 'info', 'storage', 'varName2'],

  html(isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.5</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>
<div>
<div style="float: left; width: 35%;">
  <span class="dbminputlabel">Категория источника</span><br>
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
  <span class="dbminputlabel">Сведения об источнике</span><br>
    <select id="info" class="round">
      <optgroup label="Основное">
      <option value="0">ID Категории</option>
      <option value="1">Название категории</option>
      <option value="2">Категория сервера</option>
      <option value="3">Позиция категории</option>
      <option value="4">Является ли категория управляемой?</option>
      <option value="5">Можно ли удалить категорию?</option>
      </optgroup>
      <optgroup label="Общий">
      <option value="7">Всего каналов в этой категории</option>
      <option value="9">Всего текстовых каналов в этой категории</option>
      <option value="11">Всего голосовых каналов в этой категории</option>
      <option value="13">Всего трибунных каналов в этой категории</option>
      <optgroup label="Списки">
      <option value="6">Список всех каналов в этой категории</option>
      <option value="8">Список текстовых каналов в этой категории</option>
      <option value="10">Список голосовых каналов в этой категории</option>
      <option value="12">Список трибунных каналов в этой категории</option>
      <option value="14">Список тем канала в этой категории</option>
      <option value="15">Список по ID канала в этой категории</option>
      <option value="16">Список по ID текстовых каналов в этой категории</option>
      <option value="17">Список по ID голосовых каналов в этой категории</option>
      <option value="18">Список по ID трибунных каналов в этой категории</option>
      <option value="19">Список по названию канала в этой категории</option>
      <option value="20">Список по названию текстовых каналов в этой категории</option>
      <option value="21">Список по названию голосовых каналов в этой категории</option>
      <option value="22">Список по названию трибунных каналов в этой категории</option>
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
</div>
<style>
  div.embed { /* <div class="embed"></div> */
    position: relative;
  }

  embedleftline { /* <embedleftline></embedleftline> OR if you want to change the Color: <embedleftline style="background-color: #HEXCODE;"></embedleftline> */
    background-color: #eee;
    width: 4px;
    border-radius: 3px 0 0 3px;
    border: 0;
    height: 100%;
    margin-left: 4px;
    position: absolute;
  }

  div.embedinfo { /* <div class="embedinfo"></div> */
    background: rgba(46,48,54,.45) fixed;
    border: 1px solid hsla(0,0%,80%,.3);
    padding: 10px;
    margin:0 4px 0 7px;
    border-radius: 0 3px 3px 0;
  }

  span.embed-auth { /* <span class="embed-auth"></span> (Title thing) */
    color: rgb(255, 255, 255);
  }

  span.embed-desc { /* <span class="embed-desc"></span> (Description thing) */
    color: rgb(128, 128, 128);
  }

  span { /* Only making the text look, nice! */
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
</style>`;
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
