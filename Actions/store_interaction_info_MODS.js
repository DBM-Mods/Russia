module.exports = {
  name: "Store interaction Info MOD",
  section: 'Other Stuff',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]<br>[Tempest - 321400509326032897]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {
    const info = [
      "Объект взаимодействия",
      "ID взаимодействия",
      "Язык автора",
      "Тип взаимодействия",
      "Токен взаимодействия",
      "Канал взаимодействия",
      "ID канала взаимодействия",
      "Объект > Опции взаимодействия",
      "Общее количество параметров",
      "Сообщение взаимодействия",
      "ID сообщения взаимодействия",
    ];
    return `${info[parseInt(data.info, 10)]}`;
  },


  variableStorage: function (data, varType) {
    const type = parseInt(data.storage);
    const prse2 = parseInt(data.info);
    const info2 = ['Объект', 'ID', 'Язык', 'Тип', 'Токен', 'Канал', 'ID Канала', 'Объект > Опции', 'Число', 'Сообщение', 'ID Сообщения'];
    if (type !== varType) return;
    return ([data.varName2, info2[prse2]]);
  },


  fields: ["info", "storage", "varName2"],

  html(isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.3</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>

    <div>
<div style="padding-top: 8px;">
	<span class="dbminputlabel">Информация</span><br>
	<select id="info" class="round">
  <option value="0 selected">Объект взаимодействия</option>
  <option value="1">ID взаимодействия</option>
  <option value="2">Язык автора</option>
  <option value="3">Тип взаимодействия</option>
  <option value="4">Токен взаимодействия</option>
  <option value="9">Сообщение взаимодействия</option>
  <option value="10">ID сообщения взаимодействия</option>
  <option value="5">Канал взаимодействия</option>
  <option value="6">ID канала взаимодействия</option>
  <option value="8">Общее количество параметров</option>
  <option value="7">Объект > Опции взаимодействия</option>
	</select>
</div>

<br>

<div style="float: left; width: 35%; padding-top: 8px;">
<span class="dbminputlabel">Сохранить в</span><br>
		<select id="storage" class="round" onchange="glob.variableChange(this, 'varNameContainer')">
		${data.variables[0]}
		</select>
	</div>
	<div id="varNameContainer" style="float: right; display: none; width: 60%; padding-top: 8px;">
  <span class="dbminputlabel">Имя Переменной</span><br>
		<input id="varName2" class="round" type="text">
	</div>`;
  },

  init: function () {
    const { glob, document } = this;

    glob.variableChange(document.getElementById('storage'), 'varNameContainer');
  },

  async action(cache) {
    const data = cache.actions[cache.index];
    const interaction = cache.interaction;
    const info = parseInt(data.info, 10);

    let result;
    switch (info) {
      case 0:
        result = interaction;
        break;
      case 1:
        result = interaction.id;
        break;
      case 2:
        result = interaction.locale;
        break;
      case 3:
        result = interaction.type;
        break;
      case 4:
        result = interaction.token;
        break;
      case 5:
        result = interaction.channel;
        break;
      case 6:
        result = interaction.channel.id;
        break;
      case 7:
        result = interaction.options._hoistedOptions;
        break;
      case 8:
        parametros = interaction.options._hoistedOptions
        result = parametros.length
        break;
      case 9:
        result = interaction.message;
        break;
      case 10:
        result = interaction.message.id;
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

  mod() { },
};
