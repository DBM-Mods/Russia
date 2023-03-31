module.exports = {
  commandOnly: true,
  name: 'Check Parameters MOD',
  section: 'Conditions',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[Pocky - 213946899034537986]<br>[Tempest - 321400509326032897]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {
    return `${presets.getConditionsText(data)}`;
  },

  fields: ['condition', 'comparison', 'value', 'value2', 'branch'],

  html(isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.1</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>
    
<div>
	<div style="width: 100%;">
		<span class="dbminputlabel">Условие</span><br>
		<select id="condition" class="round">
			<option value="0" selected>Количество параметров равно...</option>
			<option value="1">Количество упомянутых пользователей...</option>
			<option value="2">Количество упомянутых каналов...</option>
      <option value="4">Количество упомянутых текстовых каналов...</option>
      <option value="5">Количество упомянутых голосовых каналов...</option>
      <option value="6">Количество упомянутых категорий...</option>
			<option value="3">Количество упомянутых ролей...</option>
		</select>
	</div>

  <br>

	<div style="float: left; width: 33%;">
		<span class="dbminputlabel">Сравнение</span><br>
		<select id="comparison" class="round" onchange="glob.change(this)">
			<option value="0" selected>Равно</option>
			<option value="1">Меньше чем</option>
			<option value="2">Больше тогда</option>
			<option value="3">Меньше или равно</option>
			<option value="4">Больше или равно</option>
      <option value="5">Между</option>
		</select>
	</div>

	<div id="divValue" style="padding-left: 18px; float: left; width: 67%;">
		<span class="dbminputlabel">Число</span><br>
		<input id="value" class="round" type="text">
	</div>

  <div id="divValue2" style="padding-left: 18px; float: left; width: 32%;">
    <span class="dbminputlabel">И</span><br>
    <input id="value2" class="round" type="text">
  </div>

</div>

<br><br><br><br>

<hr class="subtlebar">

<br>

<conditional-input id="branch" style="padding-top: 8px;"></conditional-input>`;
  },

  preInit(data, formatters) {
    return formatters.compatibility_2_0_0_iftruefalse_to_branch(data);
  },

  init() {
    glob.change = function (event) {
      if (event.value === "5") {
        document.getElementById("divValue2").style.display = "block";
        document.getElementById("divValue").style.width = "35%";
      } else {
        document.getElementById("divValue2").style.display = "none";
        document.getElementById("divValue").style.width = "67%";
      }
    };

    glob.change(document.getElementById("comparison"));
  },

  action(cache) {
    const data = cache.actions[cache.index];
    const msg = cache.msg;
    let result = false;
    if (msg && msg.content.length > 0) {
      const condition = parseInt(data.condition, 10);
      let value = 0;
      switch (condition) {
        case 0:
          value = msg.content.split(/\s+/).length - 1;
          break;
        case 1:
          value = msg.mentions.members.size;
          break;
        case 2:
          value = msg.mentions.channels.size;
          break;
        case 3:
          value = msg.mentions.roles.size;
          break;
        case 4:
          value = msg.mentions.channels.filter((c) => ['GUILD_TEXT', 'GUILD_NEWS'].includes(c.type)).size;
          break;
        case 5:
          value = msg.mentions.channels.filter((c) => ['GUILD_VOICE'].includes(c.type)).size;
          break;
        case 6:
          value = msg.mentions.channels.filter((c) => ['GUILD_CATEGORY'].includes(c.type)).size;
          break;
      }
      const comparison = parseInt(data.comparison, 10);
      const value2 = parseInt(data.value, 10);
      switch (comparison) {
        case 0:
          result = value === value2;
          break;
        case 1:
          result = value < value2;
          break;
        case 2:
          result = value > value2;
          break;
        case 3:
          result = value <= value2;
          break;
        case 4:
          result = value >= value2;
          break;
        case 5:
          const value3 = this.evalMessage(data.value2, cache);
          result = value >= value2 && value <= value3;
          break;
      }
    }
    this.executeResults(result, data?.branch ?? data, cache);
  },

  modInit(data) {
    this.prepareActions(data.branch?.iftrueActions);
    this.prepareActions(data.branch?.iffalseActions);
  },

  mod() { },
};
