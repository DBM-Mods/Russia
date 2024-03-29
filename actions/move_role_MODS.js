module.exports = {
  name: "Move Role MOD",
  section: "Role Control",
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {
    return `${presets.getRoleText(data.storage, data.varName)} переместить в позицию "${data.posicao}"`;
  },

  fields: ["storage", "varName", "posicao", "iffalse", "iffalseVal"],

  html(isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.1</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>

<role-input dropdownLabel="Роль" selectId="storage" variableContainerId="varNameContainer" variableInputId="varName"></role-input>
<br><br><br>

<span class="dbminputlabel">Позиция</span><br>
    <input id="posicao" class="round" value="0" type="text">
<br>
    <table>
    <tr>
    <td class="xin1"><span class="dbminputlabel">Если не удалось переместить</span><br>
    <select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
    <option value="0" selected>Продолжить действия</option>
    <option value="1">Остановить последовательность действий</option>
    <option value="2">Перейти к действию</option>
    <option value="3">Пропустить действия</option>
    <option value="4">Перейти к якорю</option>
    </select></td>
    <td class="xin2"><div id="iffalseContainer" style="display: none; float: right; width: 100%;"><span id="xinelas" class="dbminputlabel">Para</span><br><input id="iffalseVal" class="round" name="actionxinxyla" type="text"></div>
    </td>
    </tr>
    </table>

    <style>
    table{width:100%}
    .xin1{padding:0px 6px 20px 0px;width:50%}
    .xin2{padding:0px 0px 20px 0px;width:50%}
    </style>`;
  },


  init: function () {
    const { glob, document } = this;


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


  async action(cache) {
    const data = cache.actions[cache.index];
    const role = await this.getRoleFromData(data.storage, data.varName, cache);
    const posicao = this.evalMessage(data.posicao, cache);
    let end

    try {
    await role.setPosition(posicao)
    } catch(err) {
    this.executeResults(false, data, cache);
    end = 2
    } 

    if(end !== 2){
    this.callNextAction(cache)}
  },


  mod() {},
};
