module.exports = {
  name: 'Check If Member MOD',
  section: 'Conditions',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[xinxyla - 172782058396057602]<br>[Tempest - 321400509326032897]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {

    if (data.descriptionx == true) {
      desccor = data.descriptioncolor
    } else {
      desccor = 'none'
    }

    const info = [
      "Это бот?",
      "Вас могут заблокировать?",
      "Вас можно выгнать?",
      "",
      "Вы находитесь в голосовом канале?",
      "Может ли он управляться пользователем?",
      "Являетесь ли вы владельцем бота?",
      "Вы в муте?",
      "Вы без звука?",
      "Вы являетесь автором команды?",
      "Являетесь ли вы нынешним владельцем сервера?",
      "Ты на канале AFK?",
      "Вы пробустили сервер?",
      "Являетесь ли вы пользователем?",
      "Вы находитесь на текущем сервере?",
      "Были ли вы забанены на текущем сервере?",
      "Есть ли у вас приглашения на текущем сервере?",
      "Ты в теме/постишь?",
      "Вы наказаны на сервере?",
      "Вы когда-нибудь были заземлены на сервере?",
    ];

    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">${info[parseInt(data.info, 10)]} > ${presets.getConditionsText(data)}</font>`
  },

  fields: ['member', 'varName', 'info', 'varName2', "comparison", "branch", "thread", "threadVarName", "descriptioncolor", "description", "descriptionx"],

  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновление</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.8</div>

    <div style="width: 100%; padding:5px 5px;height: calc(100vh - 160px);overflow:auto">

    <div id="flutuador" style="padding:0px 0px 15px 0px">
<table style="width:100%;"><tr>
<td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Оставьте пустым, чтобы не использовалось!"></td>
<td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
</tr></table>
</div>

<div>
<member-input dropdownLabel="Пользователь" selectId="member" variableContainerId="varNameContainer" variableInputId="varName"></member-input>
</div><br><br><br>
<div>
  <div style="float: left; width: 100%;padding-top:8px">
  <span class="dbminputlabel">Проверьте, что участник</span><br>
    <select id="info" class="round" onchange="glob.change(this)">
      <option value="0" selected>Это бот?</option>
      <option value="13">Являетесь ли вы пользователем?</option>
      <option value="1">Могут заблокировать?</option>
      <option value="2">Могут выгнать?</option>
      <option value="4">Находитесь в голосовом канале?</option>
      <option value="5">Может ли он управляться пользователем?</option>
      <option value="6">Являетесь ли вы владельцем бота?</option>
      <option value="7">В муте?</option>
      <option value="8">Без звука?</option>
      ${!isEvent && '<option value="9">Являетесь автором команды?</option>'}
      <option value="10">Являетесь ли вы нынешним владельцем сервера?</option>
      <option value="11">В канале AFK?</option>
      <option value="12">Поднял (забустил) сервер?</option>
      <option value="14">Находится ли на текущем сервере?</option>
      <option value="15">Был ли заблокирован на текущем сервере?</option>
      <option value="16">Есть ли приглашения на текущем сервере?</option>
      <option value="17">Ты в теме/постишь?</option>
      <option value="18">В муте на сервере?</option>
      <option value="19">Были ли вы когда-нибудь муте на сервере?</option>
    </select>
  </div>
</div><br><br><br>

<div id="thrxin" style="overflow:hidden">
<br>
<thread-channel-input dropdownLabel="Канал" selectId="thread" variableContainerId="varNameContainer2" variableInputId="threadVarName"></thread-channel-input>
<br><br>
</div>
<xinspace>

<hr class="subtlebar">
<conditional-input id="branch" style="padding-top: 8px;"></conditional-input>

</div>
<style>
xinspace{padding:10px 0px 0px 0px;display:block}
.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}

</style>
`;
  },

  preInit(data, formatters) {
    return formatters.compatibility_2_0_0_iftruefalse_to_branch(data);
  },

  init() {
    const { glob, document } = this;

    glob.change = function (event) {
      if (event.value == "17") {
        document.getElementById("thrxin").style.display = null;
      } else {
        document.getElementById("thrxin").style.display = "none";
      }
    }

    glob.change(document.getElementById("info"));

    const xinelaslinks = document.getElementsByClassName('xinelaslink');
    for (let x = 0; x < xinelaslinks.length; x++) {
      const xinelaslink = xinelaslinks[x];
      const url = xinelaslink.getAttribute('data-url');
      if (url) {
        xinelaslink.setAttribute('title', url);
        xinelaslink.addEventListener('click', (e) => {
          e.stopImmediatePropagation();
          console.log(`Запуск URL: [${url}] в браузере по умолчанию.`);
          require('child_process').execSync(`start ${url}`);
        });
      }
    }
  },

  async action(cache) {
    const data = cache.actions[cache.index];
    const type = parseInt(data.member, 10);
    const varName = this.evalMessage(data.varName, cache);
    const member = await this.getMember(type, varName, cache);
    const autor = await this.getMember(1, varName, cache);
    const targetServer = await this.getServerFromData(0, data.varName, cache);
    const info = parseInt(data.info, 10);
    const { Files } = this.getDBM();

    if (!member) {
      console.error('Вам необходимо предоставить участнику какого-либо типа для действия "Проверить наличие участника".');
      return this.executeResults(false, data, cache);
    }

    let result = false;
    switch (info) {
      case 0:
        result = member.user?.bot || member.bot;
        break;
      case 1:
        result = member.bannable;
        break;
      case 2:
        result = member.kickable;
        break;
      case 4:
        result = Boolean(member.voice?.channel);
        break;
      case 5:
        result = member.manageable;
        break;
      case 6: {
        const fs = require('fs');
        const filePath = require('path').join(__dirname, '../data', 'multiple_bot_owners.json');
        if (!fs.existsSync(filePath)) {
          result = member.id === Files.data.settings.ownerId;
        } else {
          result =
            JSON.parse(fs.readFileSync(filePath, 'utf8')).includes(member.id) ||
            member.id === Files.data.settings.ownerId;
        }
        break;
      }
      case 7:
        result = Boolean(member.voice?.mute);
        break;
      case 8:
        result = Boolean(member.voice?.deaf);
        break;
      case 9:
        result = member.id === autor.id;
        break;
      case 10:
        result = member.id === targetServer.ownerId;
        break;
      case 11:
        result = member.voice?.channel === targetServer.afkChannel;
        break;
      case 12:
        result = Boolean(member.premiumSinceTimestamp);
        break;
      case 13:
        if (member.user?.bot || member.bot) {
          result = false;
        } else {
          result = true;
        }
        break;
      case 14:
        const server = cache.server;

        if (!server?.members) {
          result = false;
        } else {
          if (server.memberCount !== server.members.cache.size) {
            server.members.fetch();
          }

          const members = server.members.cache;

          result = Boolean(members.get(member.id));
        }
        break;
      case 15:
        const bans = await targetServer.bans.fetch();
        banidos = [...bans.values()];
        banidos = banidos.map(v => v.user)
        banido = banidos.findIndex((item) => item.id == member.id)
        if (banido == -1) { result = false } else { result = true }
        break;
      case 16:
        const invites = await targetServer.invites.fetch();
        convites = [...invites.values()];
        convites = convites.map(v => v.inviter)
        convite = convites.findIndex((item) => item.id == member.id)
        if (convite == -1) { result = false } else { result = true }
        break;
      case 17:
        const targetChannel = await this.getChannelFromData(data.thread, data.threadVarName, cache);
        const members = await targetChannel.members.fetch();
        const ids = Array.from(members.keys());
        id = ids.findIndex((item) => item == member.id)
        if (id == -1) { result = false } else { result = true }
        break;
      case 18:
        result = member.communicationDisabledUntilTimestamp > Date.now()
         break;
      case 19:
        result = member.communicationDisabledUntilTimestamp > 0
        break;
      default:
        console.log('Проверьте действие "Проверить, является ли пользователь участником"! Что-то не так...');
        break;
    }
    this.executeResults(result, data?.branch ?? data, cache);
  },



  modInit(data) {
    this.prepareActions(data.branch?.iftrueActions);
    this.prepareActions(data.branch?.iffalseActions);
  },


  mod() { },
};
