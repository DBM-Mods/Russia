module.exports = {
  name: "Fetch Thred MOD",
  section: "Channel Control",
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[Tempest - 321400509326032897]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle() {
    return "";
  },

  variableStorage(data, varType) {
    if (parseInt(data.storage, 10) !== varType) return;
    return [data.varName, "Канал"];
  },

  fields: ["thread", "iffalse", "iffalseVal", "varName", "storage"],

  html(isEvent, data) {
    return `
      <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.1</div>
      <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>

      <span class="dbminputlabel">ID треда</span>
      <input type="text" class="round" id="thread">

      <br>
  
      <div style="float: left; width: 40%">
        <span class="dbminputlabel">Если тред не найден</span>
        <select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
            <option value="0" selected>Продолжить действия</option>
            <option value="1">Остановить последовательность действий</option>
            <option value="2">Перейти к действию</option>
            <option value="3">Пропустить следующие действия</option>
            <option value="4">Перейти к якорю</option>
        </select>
      </div>

      <div id="iffalseContainer" style="display: none; float: right; width: 55%;">
        <span id="xinelas" class="dbminputlabel">Для</span>
        <br>
        <input id="iffalseVal" class="round" name="actionxinxyla" type="text">
      </div>

      <br><br><br><br>
  
      <div id="varNameContainer" style="float: right; width: 60%;">
        <span class="dbminputlabel">Имя переменной</span>
        <input id="varName" class="round" type="text">
      </div>
  
      <div style="float: left; width: 35%;">
        <span class="dbminputlabel">Сохранить в</span>
        <select id="storage" class="round">
          ${data.variables[1]}
        </select>
      </div>
      `;
  },

  init() {
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
        document.querySelector("[id='xinelas']").innerText = (`Пропустить действия`);
      }

      if (event.value == "4") {
        document.querySelector("[id='xinelas']").innerText = (`Имя якоря`);
      }
    }

    glob.onComparisonChanged(document.getElementById("iffalse"));
  },

  action(cache) {
    const data = cache.actions[cache.index];
    const find = this.evalMessage(data.channel, cache);
    const storage = parseInt(data.storage);
    const varName = this.evalMessage(data.varName, cache);
    const threads = this.getDBM().Bot.bot.channels.fetch().filter((el) => el.isThread());

    result = threads.get(find);

    if (Boolean(result)) {
      this.storeValue(result, storage, varName, cache);
      this.callNextAction(cache);
    } else {
      this.executeResults(false, data, cache);
    }
  },

  mod() { },
};