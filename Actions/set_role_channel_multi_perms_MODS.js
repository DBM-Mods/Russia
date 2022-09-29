module.exports = {


  name: "Set Role Channel Multi Perms MOD",
  section: "Channel Control",
  meta: {
    version: '2.1.6',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {
    return `${presets.getChannelText(data.channel, data.varName)}`;
  },

  fields: ["channel", "varName", "role", "varName2","reparticao", "state1", "state2","state3","state4","state5","state6","state7","state8","state9","state10","state11","state12","state13","state14","state15","state16","state17","state18","state19","state20","state21","state22","state23","state24","state25","state26","state27","state1v", "state2v","state3v","state4v","state5v","state6v","state7v","state8v","state9v","state10v","state11v","state12v","state13v","state14v","state15v","state16v","state17v","state18v","state19v","state20v","state21v","state22v","state23v","state24v","state25v","state26v","state27v", "reason"],


  html(isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.4</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>

    <div style="height: calc(100vh - 170px);overflow:auto;padding:10px;">
<channel-input dropdownLabel="Канал" selectId="channel" variableContainerId="varNameContainer" variableInputId="varName"></channel-input>

<br><br><br>

<role-input style="padding-top: 8px;" dropdownLabel="Роль" selectId="role" variableContainerId="varNameContainer2" variableInputId="varName2"></role-input>

<br><br><br>
<br>
<span class="dbminputlabel">Настройки</span><br>
		<select id="reparticao" class="round" onchange="glob.onComparisonChanged(this)">
			<option value="0" selected>Меню</option>
			<option value="1">Текстовое поле [переменная]</option>
      </select>
      <br>
<div id="containerdoxin1">
<center>
<table style="width:96%">
<tr><th><span class="dbminputlabel">Permissões</span></th><th><span class="dbminputlabel">Изменить на</span></th></tr>

<tr><td>Просмотр канала</td><td><select id="state1" class="round">
<option value="0">Разрешить</option>
<option value="1" selected>Нетрально</option>
<option value="2">Запретить</option>
</select></td></tr>

<tr><td>Управлять каналом</td><td><select id="state2" class="round">
<option value="0">Разрешить</option>
<option value="1" selected>Нетрально</option>
<option value="2">Запретить</option>
</select></td></tr>

<tr><td>Управлять webhooks</td><td><select id="state3" class="round">
<option value="0">Разрешить</option>
<option value="1" selected>Нетрально</option>
<option value="2">Запретить</option>
</select></td></tr>

<tr><td>Создать приглашение</td><td><select id="state4" class="round">
<option value="0">Разрешить</option>
<option value="1" selected>Нетрально</option>
<option value="2">Запретить</option>
</select></td></tr>


<tr><td>Отправка сообщений</td><td><select id="state5" class="round">
<option value="0">Разрешить</option>
<option value="1" selected>Нетрально</option>
<option value="2">Запретить</option>
</select></td></tr>

<tr><td>Отправляйте сообщения в ветках</td><td><select id="state6" class="round">
<option value="0">Разрешить</option>
<option value="1" selected>Нетрально</option>
<option value="2">Запретить</option>
</select></td></tr>

<tr><td>Создавать публичные ветки</td><td><select id="state7" class="round">
<option value="0">Разрешить</option>
<option value="1" selected>Нетрально</option>
<option value="2">Запретить</option>
</select></td></tr>

<tr><td>Создавать приватные ветки</td><td><select id="state8" class="round">
<option value="0">Разрешить</option>
<option value="1" selected>Нетрально</option>
<option value="2">Запретить</option>
</select></td></tr>

<tr><td>Вставить ссылки</td><td><select id="state9" class="round">
<option value="0">Разрешить</option>
<option value="1" selected>Нетрально</option>
<option value="2">Запретить</option>
</select></td></tr>

<tr><td>Прикрепить файлы</td><td><select id="state10" class="round">
<option value="0">Разрешить</option>
<option value="1" selected>Нетрально</option>
<option value="2">Запретить</option>
</select></td></tr>

<tr><td>Добавить реакции</td><td><select id="state11" class="round">
<option value="0">Разрешить</option>
<option value="1" selected>Нетрально</option>
<option value="2">Запретить</option>
</select></td></tr>

<tr><td>Используйте внешние эмоджи</td><td><select id="state12" class="round">
<option value="0">Разрешить</option>
<option value="1" selected>Нетрально</option>
<option value="2">Запретить</option>
</select></td></tr>

<tr><td>Используйте внешние стикеры</td><td><select id="state13" class="round">
<option value="0">Разрешить</option>
<option value="1" selected>Нетрально</option>
<option value="2">Запретить</option>
</select></td></tr>

<tr><td>Чтобы упомянуть @everyone</td><td><select id="state14" class="round">
<option value="0">Разрешить</option>
<option value="1" selected>Нетрально</option>
<option value="2">Запретить</option>
</select></td></tr>

<tr><td>Управлять сообщениями</td><td><select id="state15" class="round">
<option value="0">Разрешить</option>
<option value="1" selected>Нетрально</option>
<option value="2">Запретить</option>
</select></td></tr>

<tr><td>Управлять ветками</td><td><select id="state16" class="round">
<option value="0">Разрешить</option>
<option value="1" selected>Нетрально</option>
<option value="2">Запретить</option>
</select></td></tr>

<tr><td>Посмотреть историю сообщений</td><td><select id="state17" class="round">
<option value="0">Разрешить</option>
<option value="1" selected>Нетрально</option>
<option value="2">Запретить</option>
</select></td></tr>

<tr><td>Отправка текстовых сообщений в голосовые сообщения</td><td><select id="state18" class="round">
<option value="0">Разрешить</option>
<option value="1" selected>Нетрально</option>
<option value="2">Запретить</option>
</select></td></tr>

<tr><td>Используйте команды приложения</td><td><select id="state19" class="round">
<option value="0">Разрешить</option>
<option value="1" selected>Нетрально</option>
<option value="2">Запретить</option>
</select></td></tr>

<tr><td>[Голосовой канал] Подключатся</td><td><select id="state20" class="round">
<option value="0">Разрешить</option>
<option value="1" selected>Нетрально</option>
<option value="2">Запретить</option>
</select></td></tr>

<tr><td>[Голосовой канал] Говорить</td><td><select id="state21" class="round">
<option value="0">Разрешить</option>
<option value="1" selected>Нетрально</option>
<option value="2">Запретить</option>
</select></td></tr>

<tr><td>[Голосовой канал] Видео</td><td><select id="state22" class="round">
<option value="0">Разрешить</option>
<option value="1" selected>Нетрально</option>
<option value="2">Запретить</option>
</select></td></tr>

<tr><td>[Голосовой канал] Использование распознавания голоса</td><td><select id="state23" class="round">
<option value="0">Разрешить</option>
<option value="1" selected>Нетрально</option>
<option value="2">Запретить</option>
</select></td></tr>

<tr><td>[Голосовой канал] Приоритетный голос</td><td><select id="state24" class="round">
<option value="0">Разрешить</option>
<option value="1" selected>Нетрально</option>
<option value="2">Запретить</option>
</select></td></tr>

<tr><td>[Голосовой канал] Отключить участников</td><td><select id="state25" class="round">
<option value="0">Разрешить</option>
<option value="1" selected>Нетрально</option>
<option value="2">Запретить</option>
</select></td></tr>

<tr><td>[Голосовой канал] Оглушить участников</td><td><select id="state26" class="round">
<option value="0">Разрешить</option>
<option value="1" selected>Нетрально</option>
<option value="2">Запретить</option>
</select></td></tr>

<tr><td>[Голосовой канал] Перемещение участников</td><td><select id="state27" class="round">
<option value="0">Разрешить</option>
<option value="1" selected>Нетрально</option>
<option value="2">Запретить</option>
</select></td></tr>

</table></center></div>
<div id="containerdoxin2">
<center>
Используйте 0, чтобы разрешить, 1, чтобы наследовать и 2, чтобы запретить<br><br>
<table style="width:96%">
<tr><th><span class="dbminputlabel">Разрешение</span></th><th><span class="dbminputlabel">Изменить на</span></th></tr>

<tr><td>Смотреть каналы</td><td><input id="state1v" class="round" type="text"></td></tr>

<tr><td>Управлять каналом</td><td><input id="state2v" class="round" type="text"></td></tr>

<tr><td>Управлять webhooks</td><td><input id="state3v" class="round" type="text"></td></tr>

<tr><td>Создать приглашение</td><td><input id="state4v" class="round" type="text"></td></tr>

<tr><td>Отправка сообщений</td><td><input id="state5v" class="round" type="text"></td></tr>

<tr><td>Отправляйте сообщения в ветках</td><td><input id="state6v" class="round" type="text"></td></tr>

<tr><td>Создавать публичные ветки</td><td><input id="state7v" class="round" type="text"></td></tr>

<tr><td>Создавать приватные ветки</td><td><input id="state8v" class="round" type="text"></td></tr>

<tr><td>Вставить ссылки</td><td><input id="state9v" class="round" type="text"></td></tr>

<tr><td>Прикрепить файлы</td><td><input id="state10v" class="round" type="text"></td></tr>

<tr><td>Добавить реакции</td><td><input id="state11v" class="round" type="text"></td></tr>

<tr><td>Используйте внешние эмоджи</td><td><input id="state12v" class="round" type="text"></td></tr>

<tr><td>Используйте внешние стикеры</td><td><input id="state13v" class="round" type="text"></td></tr>

<tr><td>Чтобы упомянуть @everyone</td><td><input id="state14v" class="round" type="text"></td></tr>

<tr><td>Управлять сообщениями</td><td><input id="state15v" class="round" type="text"></td></tr>

<tr><td>Управлять ветками</td><td><input id="state16v" class="round" type="text"></td></tr>

<tr><td>Посмотреть историю сообщений</td><td><input id="state17v" class="round" type="text"></td></tr>

<tr><td>Отправка текстовых сообщений в голосовые сообщения</td><td><input id="state18v" class="round" type="text"></td></tr>

<tr><td>Используйте команды приложения</td><td><input id="state19v" class="round" type="text"></td></tr>

<tr><td>[Голосовой канал] Подключатся</td><td><input id="state20v" class="round" type="text"></td></tr>

<tr><td>[Голосовой канал] Говорить</td><td><input id="state21v" class="round" type="text"></td></tr>

<tr><td>[Голосовой канал] Видео</td><td><input id="state22v" class="round" type="text"></td></tr>

<tr><td>[Голосовой канал] Использование распознавания голоса</td><td><input id="state23" class="round" type="text"></td></tr>

<tr><td>[Голосовой канал] Приоритетный голос</td><td><input id="state24v" class="round" type="text"></td></tr>

<tr><td>[Голосовой канал] Отключить участников</td><td><input id="state25v" class="round" type="text"></td></tr>

<tr><td>[Голосовой канал] Оглушить участников</td><td><input id="state26v" class="round" type="text"></td></tr>

<tr><td>[Голосовой канал] Перемещение участников</td><td><input id="state27v" class="round" type="text"></td></tr>

</table></center>
</div>
<br>


<div style="padding-top: 8px;">
  <span class="dbminputlabel">Коментарий</span>
  <input id="reason" placeholder="По желанию" class="round" type="text">
</div>

	
</div>
<style>
td{padding:5px;border:1px solid #777;background:rgba(255,255,255,0.1)}</style>`;
  },


  init() {
    const { glob, document } = this;

    glob.onComparisonChanged = function (event) {
      if (event.value === "0") {
        document.getElementById("containerdoxin1").style.display = null;
        document.getElementById("containerdoxin2").style.display = "none";
      } else {
        document.getElementById("containerdoxin2").style.display = null;
        document.getElementById("containerdoxin1").style.display = "none";
      }
    };

    glob.onComparisonChanged(document.getElementById("reparticao"));



  },



    async action(cache) {
    const data = cache.actions[cache.index];
    const channel = await this.getChannelFromData(data.channel, data.varName, cache);
    const role = await this.getRoleFromData(data.role, data.varName2, cache);
    const reason = this.evalMessage(data.reason, cache);

    const options = { VIEW_CHANNEL: [true, null, false][parseInt(data.state1, 10)],MANAGE_CHANNELS: [true, null, false][parseInt(data.state2, 10)],MANAGE_WEBHOOKS: [true, null, false][parseInt(data.state3, 10)],CREATE_INSTANT_INVITE: [true, null, false][parseInt(data.state4, 10)], SEND_MESSAGES: [true, null, false][parseInt(data.state5, 10)], SEND_MESSAGES_IN_THREADS: [true, null, false][parseInt(data.state6, 10)], CREATE_PUBLIC_THREADS: [true, null, false][parseInt(data.state7, 10)], CREATE_PRIVATE_THREADS: [true, null, false][parseInt(data.state8, 10)], EMBED_LINKS: [true, null, false][parseInt(data.state9, 10)], ATTACH_FILES: [true, null, false][parseInt(data.state10, 10)], ADD_REACTIONS: [true, null, false][parseInt(data.state11, 10)], USE_EXTERNAL_EMOJIS: [true, null, false][parseInt(data.state12, 10)], USE_EXTERNAL_STICKERS: [true, null, false][parseInt(data.state13, 10)], MENTION_EVERYONE: [true, null, false][parseInt(data.state14, 10)], MANAGE_MESSAGES: [true, null, false][parseInt(data.state15, 10)], MANAGE_THREADS: [true, null, false][parseInt(data.state16, 10)], READ_MESSAGE_HISTORY: [true, null, false][parseInt(data.state17, 10)], SEND_TTS_MESSAGES: [true, null, false][parseInt(data.state18, 10)], USE_APPLICATION_COMMANDS: [true, null, false][parseInt(data.state19, 10)], CONNECT: [true, null, false][parseInt(data.state20, 10)], SPEAK: [true, null, false][parseInt(data.state21, 10)], STREAM: [true, null, false][parseInt(data.state22, 10)], USE_VAD: [true, null, false][parseInt(data.state23, 10)], PRIORITY_SPEAKER: [true, null, false][parseInt(data.state24, 10)], MUTE_MEMBERS: [true, null, false][parseInt(data.state25, 10)], DEAFEN_MEMBERS: [true, null, false][parseInt(data.state26, 10)], MOVE_MEMBERS: [true, null, false][parseInt(data.state27, 10)] };
    let state1v = this.evalMessage(data.state1v, cache);
    let state2v = this.evalMessage(data.state2v, cache);
    let state3v = this.evalMessage(data.state3v, cache);
    let state4v = this.evalMessage(data.state4v, cache);
    let state5v = this.evalMessage(data.state5v, cache);
    let state6v = this.evalMessage(data.state6v, cache);
    let state7v = this.evalMessage(data.state7v, cache);
    let state8v = this.evalMessage(data.state8v, cache);
    let state9v = this.evalMessage(data.state9v, cache);
    let state10v = this.evalMessage(data.state10v, cache);
    let state11v = this.evalMessage(data.state11v, cache);
    let state12v = this.evalMessage(data.state12v, cache);
    let state13v = this.evalMessage(data.state13v, cache);
    let state14v = this.evalMessage(data.state14v, cache);
    let state15v = this.evalMessage(data.state15v, cache);
    let state16v = this.evalMessage(data.state16v, cache);
    let state17v = this.evalMessage(data.state17v, cache);
    let state18v = this.evalMessage(data.state18v, cache);
    let state19v = this.evalMessage(data.state19v, cache);
    let state20v = this.evalMessage(data.state20v, cache);
    let state21v = this.evalMessage(data.state21v, cache);
    let state22v = this.evalMessage(data.state22v, cache);
    let state23v = this.evalMessage(data.state23v, cache);
    let state24v = this.evalMessage(data.state24v, cache);
    let state25v = this.evalMessage(data.state24v, cache);
    let state26v = this.evalMessage(data.state24v, cache);
    let state27v = this.evalMessage(data.state24v, cache);
    const options2 = { VIEW_CHANNEL: [true, null, false][parseInt(state1v, 10)],MANAGE_CHANNELS: [true, null, false][parseInt(state2v, 10)],MANAGE_WEBHOOKS: [true, null, false][parseInt(state3v, 10)],CREATE_INSTANT_INVITE: [true, null, false][parseInt(state4v, 10)], SEND_MESSAGES: [true, null, false][parseInt(state5v, 10)], SEND_MESSAGES_IN_THREADS: [true, null, false][parseInt(state6v, 10)], CREATE_PUBLIC_THREADS: [true, null, false][parseInt(state7v, 10)], CREATE_PRIVATE_THREADS: [true, null, false][parseInt(state8v, 10)], EMBED_LINKS: [true, null, false][parseInt(state9v, 10)], ATTACH_FILES: [true, null, false][parseInt(state10v, 10)], ADD_REACTIONS: [true, null, false][parseInt(state11v, 10)], USE_EXTERNAL_EMOJIS: [true, null, false][parseInt(state12v, 10)], USE_EXTERNAL_STICKERS: [true, null, false][parseInt(state13v, 10)], MENTION_EVERYONE: [true, null, false][parseInt(state14v, 10)], MANAGE_MESSAGES: [true, null, false][parseInt(state15v, 10)], MANAGE_THREADS: [true, null, false][parseInt(state16v, 10)], READ_MESSAGE_HISTORY: [true, null, false][parseInt(state17v, 10)], SEND_TTS_MESSAGES: [true, null, false][parseInt(state18v, 10)], USE_APPLICATION_COMMANDS: [true, null, false][parseInt(state19v, 10)], CONNECT: [true, null, false][parseInt(state20v, 10)], SPEAK: [true, null, false][parseInt(state21v, 10)], STREAM: [true, null, false][parseInt(state22v, 10)], USE_VAD: [true, null, false][parseInt(state23v, 10)], PRIORITY_SPEAKER: [true, null, false][parseInt(state24v, 10)], MUTE_MEMBERS: [true, null, false][parseInt(state25v, 10)], DEAFEN_MEMBERS: [true, null, false][parseInt(state26v, 10)], MOVE_MEMBERS: [true, null, false][parseInt(state27v, 10)] };

    const reparticao = parseInt(data.reparticao, 10);
    
    switch (reparticao) {
      case 0:
        if (role?.id) {
          if (Array.isArray(channel)) {
            channel.permissionOverwrites.edit
            (role.id);
          }      
          else if (channel?.permissionOverwrites) {
            channel.permissionOverwrites
              .edit(role, options, { reason, type: 0 })
              .then(() => this.callNextAction(cache))
              .catch((err) => this.displayError(data, cache, err));
          } else {
            this.callNextAction(cache);
          }
        } else {
          this.callNextAction(cache);
        }
        break;
        case 1:
        if (role?.id) {
          if (Array.isArray(channel)) {
            channel.permissionOverwrites.edit
            (role.id);
          }      
          else if (channel?.permissionOverwrites) {
            channel.permissionOverwrites
              .edit(role, options2, { reason, type: 0 })
              .then(() => this.callNextAction(cache))
              .catch((err) => this.displayError(data, cache, err));
          } else {
            this.callNextAction(cache);
          }
        } else {
          this.callNextAction(cache);
        }
        break;
    }


  },






  mod() {},
};
