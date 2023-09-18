module.exports = {
  name: 'Create Category Channel MOD',
  section: 'Channel Control',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data) {
    const storage = ['', 'Временная переменная', 'Переменная сервера', 'Переменная глобальная'];
    return `${data.channelName} > ${storage[parseInt(data.storage, 10)]} (${data.varName})`;
  },

  variableStorage(data, varType) {
    if (parseInt(data.storage, 10) !== varType) return;
    return [data.varName, 'ID'];
  },

  fields: ['channelName', 'position', 'storage', 'varName', 'iffalse', 'iffalseVal'],

  html(isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.1</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>

<span class="dbminputlabel">Имя</span>
<input id="channelName" class="round" type="text">

<br>

<span class="dbminputlabel">Позиция</span><br>
<input id="position" class="round" type="text" placeholder="Оставьте это пустым для стандарта!" style="width: 100%;">

<br>

<table>
<tr>
<td class="sep1">
<span class="dbminputlabel">Если не создано</span><br>
<select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
<option value="0" selected>Продолжать</option>
<option value="1">Остановить последовательность действий</option>
<option value="2">Перейти к действию</option>
<option value="3">Пропустить следующие действия</option>
<option value="4">Перейти к якову действия</option>
</select>
</td>
<td class="sep2">

<div id="iffalseContainer" style="display: none; float: right; width: 100%;"><span id="xinelas" class="dbminputlabel">Para</span><br><input id="iffalseVal" class="round" name="actionxinxyla" type="text"></div>
</div>
</td>
</tr>

</table>

<br>

<table>
<tr>
<td class="sep1"><span class="dbminputlabel">Хранить в</span><br>
<select id="storage" class="round" onchange="glob.variableChange(this, 'varNameContainer')">
  ${data.variables[0]}
</select></td>
<td class="sep2"><div id="varNameContainer" style="display: none"><span class="dbminputlabel">Имя переменной</span><br>
<input id="varName" class="round" type="text"></div></td>
</tr>

</table>
<style>
table{width:100%}
.sep1{padding:0px 8px 0px 0px;width:40%}
.sep2{padding:0px 0px 0px 0px;width:60%}
</style>
`;
  },

  init() {
    const { glob, document } = this;
    glob.variableChange(document.getElementById('storage'), 'varNameContainer');

    glob.onComparisonChanged = function (event) {
      if (event.value > "1") {
        document.getElementById("iffalseContainer").style.display = null;
      } else {
        document.getElementById("iffalseContainer").style.display = "none";
      }
      if (event.value == "2") {
      document.querySelector("[id='xinelas']").innerText = (`Номер действия`);
    }
    if (event.value == "3") {
      document.querySelector("[id='xinelas']").innerText = (`Количество действий`);
    }
    if (event.value == "4") {
      document.querySelector("[id='xinelas']").innerText = (`Имя якоря`);
    }
  }

    glob.onComparisonChanged(document.getElementById("iffalse"));

  },

  async action(cache) {
    const data = cache.actions[cache.index];
    const { server } = cache;
    if (!server?.channels?.create) return this.callNextAction(cache);

    const name = this.evalMessage(data.channelName, cache);
    const position = this.evalMessage(data.position, cache);
    const storage = parseInt(data.storage, 10);

    try {
    await server.channels
      .create(name, { type: 'GUILD_CATEGORY' })
      .then((channel) => {
        channel.setPosition(position);
        const varName = this.evalMessage(data.varName, cache);
        this.storeValue(channel, storage, varName, cache);
        this.callNextAction(cache);
      })}
      catch (err) {
        this.displayError(data, cache, err)
        this.executeResults(false, data, cache)
      };  

  },

  mod() {},
};
