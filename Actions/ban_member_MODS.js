module.exports = {
  name: "Ban Member MOD",
  section: "Member Control",
  meta: {
    version: '2.1.6',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {
    return `${data.User}`;
  },

  fields: ["acao", "User", "reason", "days", "iffalse", "iffalseVal"],


  html(isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.1</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>

    <span class="dbminputlabel">Действие</span><br>
		<select id="acao" class="round" onchange="glob.onChange1(this)">
      <option value="0">Забанить пользователя</options>
      <option value="1">Разбанить пользователя</options>
</select>

      <br>

    <span class="dbminputlabel">ID пользователя</span><br>
    <input class="round" id="User" placeholder="">

<br>

<div>
	<span class="dbminputlabel">Причина</span><br>
	<textarea id="reason" rows="3" placeholder="Вставьте причину здесь ..." style="white-space: nowrap; resize: yes;"></textarea>
</div><br>

<div id="xinelas1">
  <span class="dbminputlabel">Количество дней удаления сообщений</span>
  <input id="days" placeholder="Opcional" class="round" type="text">
  <br>
</div>


<div style="float: left; width: 40%">
<span class="dbminputlabel">Если не забенен или не разабнен</span><br>
<select id="iffalse" class="round" onchange="glob.onComparisonChanged2(this)">
<option value="0" selecionado>Продолжить действия</option>
<option value="1">Остановить последовательность действий</option>
<option value="2">Перейти к действию</option>
<option value="3">Пропустить следующие действия</option>
<option value="4">Перейти к действию якоря</option>
</select>
</div>
<div id="iffalseContainer" style="display: none; float: right; width: 55%;"><span id="xinelas" class="dbminputlabel">Para</span><br><input id="iffalseVal" class="round" name="actionxinxyla" type="text"></div>
<br><br><br>
`;
  },


  init() {
    const { glob, document } = this;
  
    glob.onComparisonChanged2 = function (event) {
      if (event.value > "1") {
        document.getElementById("iffalseContainer").style.display = null;
      } else {
        document.getElementById("iffalseContainer").style.display = "none";
      }
      if (event.value == "2") {
      document.querySelector("[id='xinelas']").innerText = (`Номер действия`);
    }
    if (event.value == "3") {
      document.querySelector("[id='xinelas']").innerText = (`Прыжок`);
    }
    if (event.value == "4") {
      document.querySelector("[id='xinelas']").innerText = (`Якоря название`);
    }
  }

    glob.onComparisonChanged2(document.getElementById("iffalse"));
    
    glob.onChange1 = function (event) {
      if (event.value == "0") {
        document.getElementById("xinelas1").style.display = null;
      } else {
        document.getElementById("xinelas1").style.display = "none";
      }
  }

    glob.onChange1(document.getElementById('acao'))

},

  async action(cache) {
    const data = cache.actions[cache.index];
    const targetServer = await this.getServerFromData(0, 0, cache);

    if (!targetServer) {
      return this.callNextAction(cache);
    }

    const User = this.evalMessage(data.User, cache)      
    const reason = this.evalMessage(data.reason, cache);
    const days = parseInt(data.days, 10) || 0;
    const acao = this.evalMessage(data.acao, cache)   

    var erro = 0

    if(acao == "0"){
      try {
        await targetServer.members.ban(User, { days, reason })
        .then(() => {
          this.callNextAction(cache);
        })
      } catch (err) {
        this.displayError(data, cache, err)
        this.executeResults(false, data, cache)
      }     
    }

    if(acao == "1"){
      try {
        await targetServer.bans.remove(User, reason)
        .then(() => {
          this.callNextAction(cache);
        })
      } catch (err) {
        this.displayError(data, cache, err)
        this.executeResults(false, data, cache)
      }     
    }
   
    
  },


  mod() {},
};
