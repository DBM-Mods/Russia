module.exports = {
  name: "Store Parameter File Info MOD",
  section: 'Other Stuff',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {
    const info = [
      "Объект файла",
      "ID файла",
      "URL файла",
      "Имя файла",
      "Размер файла",
      "Тип файла",
      "Ширина изображения",
      "Высота изображения",
    ];
    return `${info[parseInt(data.info, 10)]}`;
  },


  variableStorage: function(data, varType) {
    const type = parseInt(data.storage);
    const prse2 = parseInt(data.info);
    const info2 = ['Объект', 'ID', 'URL изображения', 'Имя', 'Размер', 'Тип', 'Ширина', 'Высота'];
    if(type !== varType) return;
    return ([data.varName2, info2[prse2]]);
},


  fields: ["parametro", "info", "storage", "varName2"],

  html(isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Обновить 0.3</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>

    <div>
    <div style="float: left; width: 100%;">
        <span class="dbminputlabel">Имя параметра</span><br>
        <input id="parametro" class="round" type="text">
    </div>
</div>
<br><br><br>

<div style="padding-top: 8px;">
	<span class="dbminputlabel">Информация</span><br>
	<select id="info" class="round">
  <option value="0" selected>Объект файла</option>
  <option value="1">ID файла</option>
  <option value="2">URL файла</option>
  <option value="3">Имя файла</option>
  <option value="4">Размер файла</option>
  <option value="5">Тип файла</option>
  <option value="6">Ширина изображения [Пиксели]</option>
  <option value="7">Высота изображения [Пиксели]</option>
	</select>
</div>

<br>
<div style="float: left; width: 35%; padding-top: 8px;">
<span class="dbminputlabel">Хранить в</span><br>
		<select id="storage" class="round" onchange="glob.variableChange(this, 'varNameContainer')">
		${data.variables[0]}
		</select>
	</div>
	<div id="varNameContainer" style="float: right; display: none; width: 60%; padding-top: 8px;">
  <span class="dbminputlabel">Имя переменной</span><br>
		<input id="varName2" class="round" type="text">
	</div>`;
  },

  init: function() {
    const {glob, document} = this;
  
    glob.variableChange(document.getElementById('storage'), 'varNameContainer');
  },

  
  async action(cache) {
    const data = cache.actions[cache.index];
    const interaction = cache.interaction;
    const parametro = this.evalMessage(data.parametro, cache);
    const info = parseInt(data.info, 10);
  
    let result;
    switch (info) {
      case 0:
        if(interaction.options._hoistedOptions.find((f) => f.type === "ATTACHMENT" && f.name === parametro) == undefined) {
          result = null
        } else {
        result = interaction.options._hoistedOptions.find((f) => f.type === "ATTACHMENT" && f.name === parametro).attachment}
        break;
      case 1:
        if(interaction.options._hoistedOptions.find((f) => f.type === "ATTACHMENT" && f.name === parametro) == undefined) {
          result = null
        } else {
        result = interaction.options._hoistedOptions.find((f) => f.type === "ATTACHMENT" && f.name === parametro).attachment.id;}
        break;
      case 2:
        if(interaction.options._hoistedOptions.find((f) => f.type === "ATTACHMENT" && f.name === parametro) == undefined) {
          result = null
        } else {
        result = interaction.options._hoistedOptions.find((f) => f.type === "ATTACHMENT" && f.name === parametro).attachment.attachment;}
        break;
      case 3:
        if(interaction.options._hoistedOptions.find((f) => f.type === "ATTACHMENT" && f.name === parametro) == undefined) {
          result = null
        } else {
        result = interaction.options._hoistedOptions.find((f) => f.type === "ATTACHMENT" && f.name === parametro).attachment.name;}
        break;
      case 4:
        if(interaction.options._hoistedOptions.find((f) => f.type === "ATTACHMENT" && f.name === parametro) == undefined) {
          result = 0
        } else {
        result = interaction.options._hoistedOptions.find((f) => f.type === "ATTACHMENT" && f.name === parametro).attachment.size;}
        break;
      case 5:
        if(interaction.options._hoistedOptions.find((f) => f.type === "ATTACHMENT" && f.name === parametro) == undefined) {
          result = null
        } else {
        result = interaction.options._hoistedOptions.find((f) => f.type === "ATTACHMENT" && f.name === parametro).attachment.contentType;}
        break;
        case 6:
          if(interaction.options._hoistedOptions.find((f) => f.type === "ATTACHMENT" && f.name === parametro) == undefined) {
            result = 0
          } else {
        result = interaction.options._hoistedOptions.find((f) => f.type === "ATTACHMENT" && f.name === parametro).attachment.width;}
        break;
        case 7:
          if(interaction.options._hoistedOptions.find((f) => f.type === "ATTACHMENT" && f.name === parametro) == undefined) {
            result = 0
          } else {
        result = interaction.options._hoistedOptions.find((f) => f.type === "ATTACHMENT" && f.name === parametro).attachment.height;}
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
