module.exports = {
  name: "Timeout Member MOD",
  section: "Member Control",
  meta: {
    version: '2.1.6',
    preciseCheck: true,
    author: '[Tempest - 321400509326032897]<br>[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {

    if (data.descriptionx == true) {
      desccor = data.descriptioncolor
    } else {
      desccor = 'none'
    }

    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">${presets.getMemberText(data.member, data.varName)}</font>`
  },

  fields: ["opcao", "member", "varName", "tempo", "time", "reason", "iffalse", "iffalseVal", "descriptioncolor", "description", "descriptionx"],

  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.2</div>

    <div style="width: 100%; padding:5px 5px;height: calc(100vh - 160px);overflow:auto">

    <div id="flutuador" style="padding:0px 0px 15px 0px">
<table style="width:100%;"><tr>
<td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Оставьте пустым, чтобы не использовалось!"></td>
<td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
</tr></table>
</div>

    <member-input dropdownLabel="Пользователь" selectId="member" variableContainerId="varNameContainer" variableInputId="varName"></member-input>

    <br><br><br>

    <div style="float: left; width: 33%">
      <span class="dbminputlabel">Вариант</span>
      <select id="opcao" class="round" onchange="glob.change(this)">
        <option value="0" selected>Наказание</option>
        <option value="1">Снять наказание</option>
      </select>
    </div>
    
    <div id="campo1" style="float: left; width: 34%;padding:0px 3px">
      <span class="dbminputlabel">Время</span><br>
      <select id="tempo" class="round">
        <option value="0" selected>Секунды</option>
        <option value="1">Минуты</option>
        <option value="2">Часы</option>
        <option value="3">Дни</option>
      </select>
    </div>
    <div id="campo2" style="float: left; width: 33%">
      <span class="dbminputlabel">Количество</span><br>
      <input id="time" class="round" type="text">
    </div>
    <br><br><br>
    <div>
      <span class="dbminputlabel">Причина</span><br>
      <textarea id="reason" class="dbm_monospace" rows="3" placeholder="Вставьте причину здесь..." style="white-space: nowrap; resize: none;"></textarea>
    </div>

<br>

    <div>
<div style="float: left; width: 38%">
<span class="dbminputlabel">Если возникает ошибка</span><br>
<select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
<option value="0" selected>Продолжать</option>
<option value="1">Остановить последовательность действий</option>
<option value="2">Перейти к действию</option>
<option value="3">Пропустить следующие действия</option>
<option value="4">Перейти к якову действия</option>
</select>
</div>

<div id="iffalseContainer" style="display: none; float: right; width: 60%;"><span id="xinelas" class="dbminputlabel">Для</span><br><input id="iffalseVal" class="round" name="actionxinxyla" type="text"></div>
</div>

</div>

    
    </div>

<style>
table{width:100%}
.col1{width:38%;padding:0px 10px 0px 0px}
.col2{width:60%}
.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}

</style>`;
  },


  init() {
    glob.change = function(event) {
      if(event.value === "0") {
        document.getElementById("campo1").style.display = "block";
        document.getElementById("campo2").style.display = "block";
      } else {
        document.getElementById("campo1").style.display = "none";
        document.getElementById("campo2").style.display = "none";
      }
    }

    glob.change(document.getElementById("opcao"));

    const xinelaslinks = document.getElementsByClassName('xinelaslink');
    for (let x = 0; x < xinelaslinks.length; x++) {
      const xinelaslink = xinelaslinks[x];
      const url = xinelaslink.getAttribute('data-url');
      if (url) {
        xinelaslink.setAttribute('title', url);
        xinelaslink.addEventListener('click', (e) => {
          e.stopImmediatePropagation();
          console.log(`Запуск URL: [${url}] В вашем браузере по умолчанию.`);
          require('child_process').execSync(`start ${url}`);
        });
      }
    }

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
    var find = this.evalMessage(data.varName, cache);
    var memberfind = this.evalMessage(data.member, cache);
    var member = await this.getMemberFromData(data.member, data.varName, cache);
    const tempo = parseInt(data.tempo, 10);

    let time = this.evalMessage(data.time, cache);
    if(data.opcao === "0") {
      switch (tempo) {
        case 0: 
        time = time ? Date.now() + time * 1000 : null;
        break;
        case 1: 
        time = time ? Date.now() + time * 60000 : null;
        break;
        case 2:
        time = time ? Date.now() + time * 3600000 : null;
        break;
        case 3:
        time = time ? Date.now() + time * 86400000 : null;
        break;
        default:
        break;
      }
    } else {
      time = time ? Date.now() + 0 : null;
    }
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
      this.callListFunc(member, "disableCommunicationUntil", [time, reason])
        .then(() => this.callNextAction(cache))
        .catch((err) => this.displayError(data, cache, err) + this.executeResults(false, data, cache));
    } else if (member?.disableCommunicationUntil) {
      member.disableCommunicationUntil(time, reason)
        .then(() => this.callNextAction(cache))
        .catch((err) => this.displayError(data, cache, err) + this.executeResults(false, data, cache));
    } else {
      this.callNextAction(cache);
    }
  },


  mod() {},
};
