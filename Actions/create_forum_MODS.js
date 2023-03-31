module.exports = {
  name: "Create Forum Channel MOD",
  section: "Channel Control",
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {
    return `${data.channelName}`;
  },

  variableStorage(data, varType) {
    const type = parseInt(data.storage, 10);
    if (type !== varType) return;
    return [data.varName, "Channel"];
  },



  fields: ["channelName", "topic", "position", "storage", "varName", "categoryID", "slowmodepost","reason", "iffalse", "iffalseVal"],


  html(isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.1</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>

    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 170px);overflow:auto">

<span class="dbminputlabel">Имя</span><br>
<input id="channelName" class="round" type="text">

<br>

<table><tr><td class="sep3">
<span class="dbminputlabel">Идентификатор (ID) категории</span><br>
<input id= "categoryID" class="round" type="text" placeholder="Оставьте пустым без категории">
</td>
<td class="sep4">
<span class="dbminputlabel">Позиция</span><br>
<input id="position" class="round" type="text" placeholder="Оставить пустым в стандарте">
</td></tr></table>

<br>

<span class="dbminputlabel">Рекомендации по публикации</span><br>
<textarea id="topic" rows="3" style="width: 99%; font-family: monospace; white-space: nowrap;"></textarea>

<br>

<span class="dbminputlabel">Медленный режим сообщений</span><br>
<input id="slowmodepost" class="round" type="text" placeholder="Оставьте это пустым, чтобы отключить">

<br>

<span class="dbminputlabel">Причина</span>
<input id="reason" placeholder="По желанию" class="round" type="text">

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

<div id="iffalseContainer" style="display: none; float: right; width: 100%;"><span id="xinelas" class="dbminputlabel">Для</span><br><input id="iffalseVal" class="round" name="actionxinxyla" type="text"></div>
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

</div>

<style>
table{width:100%}
.sep1{padding:0px 8px 0px 0px;width:40%}
.sep2{padding:0px 0px 0px 0px;width:60%}
.sep3{padding:0px 8px 0px 0px;width:60%}
.sep4{padding:0px 0px 0px 0px;width:40%}
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
      document.querySelector("[id='xinelas']").innerText = (`Пропустить действий`);
    }
    if (event.value == "4") {
      document.querySelector("[id='xinelas']").innerText = (`Якоря название`);
    }
  }

    glob.onComparisonChanged(document.getElementById("iffalse"));

},


  async action(cache) {
  const data = cache.actions[cache.index];
  const { server } = cache;
  if (!server?.channels?.create) return this.callNextAction(cache);

    const name = this.evalMessage(data.channelName, cache); 
    
    const channelData = { reason: this.evalMessage(data.reason, cache)};

    if (data.topic) {
      channelData.topic = this.evalMessage(data.topic, cache);
    }
    if (data.position) {
      channelData.position = parseInt(this.evalMessage(data.position, cache));
    }
    if (data.categoryID) {
      channelData.parent = this.evalMessage(data.categoryID, cache);
    }
    if (data.slowmodepost) {
      channelData.rateLimitPerUser = parseInt(this.evalMessage(data.slowmodepost, cache), 10);
    }
    channelData.type = 15
 
    try {
      await server.channels
      .create(name, channelData)
      .then((channel) => {
        const storage = parseInt(data.storage, 10);
        const varName = this.evalMessage(data.varName, cache);
        this.storeValue(channel, storage, varName, cache);
        this.callNextAction(cache);
      })
    }
      catch(err) {this.displayError(data, cache, err)
        this.executeResults(false, data, cache)
      }
  },


  mod() {},
};
