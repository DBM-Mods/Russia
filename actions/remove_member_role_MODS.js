module.exports = {
  name: "Remove Member Role MOD",
  section: "Member Control",
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {
    return `${presets.getMemberText(data.member, data.varName2)} - ${presets.getRoleText(data.role, data.varName)}`;
  },

  fields: ["member", "varName2", "role", "varName", "reason", "iffalse", "iffalseVal"],

  html(isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.1</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>

<role-input dropdownLabel="Роль" selectId="role" variableContainerId="varNameContainer" variableInputId="varName"></role-input>

<br><br><br>

<member-input style="padding-top: 8px;" dropdownLabel="Пользователь" selectId="member" variableContainerId="varNameContainer2" variableInputId="varName2"></member-input>

<br><br><br>

<div style="padding-top: 8px;">
  <span class="dbminputlabel">Причина</span>
  <input id="reason" placeholder="Не обязательное поле" class="round" type="text">
</div>

<br>

<div style="padding-top: 8px;">
<div style="float: left; width: 40%">
<span class="dbminputlabel">Если роль не была снята</span><br>
<select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
<option value="0" selecionado>Продолжить действия</option>
<option value="1">Остановить последовательность действий</option>
<option value="2">Перейти к действию</option>
<option value="3">Пропустить следующие действия</option>
<option value="4">Перейти к якорю</option>
</select>
</div>
<div id="iffalseContainer" style="display: none; float: right; width: 55%;"><span id="xinelas" class="dbminputlabel">Для</span><br><input id="iffalseVal" class="round" name="actionxinxyla" type="text"></div>
<br><br><br>`;
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
    const role = await this.getRoleFromData(data.role, data.varName, cache);
    const find = this.evalMessage(data.varName2, cache);
    const memberfind = this.evalMessage(data.member, cache);
    var member = await this.getMemberFromData(data.member, data.varName2, cache);
    const reason = this.evalMessage(data.reason, cache);

    if(memberfind == "100" || memberfind == "101"){

      const server = cache.server;
      if (!server?.members) {
        this.callNextAction(cache);
        return;
      }
      if (server.memberCount !== server.members.cache.size) server.members.fetch();
      const members = server.members.cache;

      if(memberfind == "100"){member = members.find((m) => m.user?.username === find);}
      if(memberfind == "101"){member = members.get(find)}
    }

    if (Array.isArray(member)) {
      this.callListFunc(
        member.map((m) => m.roles),
        "remove",
        [role, reason],
      ).then(() => this.callNextAction(cache))
      .catch((err) => this.displayError(data, cache, err) || this.executeResults(false, data, cache));
    } else if (member?.roles) {
      member.roles
        .remove(role, reason)
        .then(() => this.callNextAction(cache))
        .catch((err) => this.displayError(data, cache, err) || this.executeResults(false, data, cache));
    } else {
      this.callNextAction(cache);
    }
  },

  mod() {},
};
