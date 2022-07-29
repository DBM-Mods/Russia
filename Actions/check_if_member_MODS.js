module.exports = {
  name: 'Check If Member MOD',
  section: 'Conditions',
  meta: {
    version: '2.1.5',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

    subtitle(data, presets) {
      const info = [
        "Это Бот?",
        "Можно ли забанить?",
        "Можно ли кикнуть?",
        "",
        "В голосовом канале?",
        "Управляется пользователем?",
        "Владелец бота?",
        "Заглушен?",
        "Отключен звук?",
        "Автор команды?",
        "Текущий владелец сервера?",
        "В канале АФК?",
        "Бустер сервера?",
      ];
      return `${info[parseInt(data.info, 10)]} > ${presets.getConditionsText(data)}`;
    },

  fields: ['member', 'varName', 'info', 'varName2', "comparison", "branch"],

  html(isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.3</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>
<div>
<member-input dropdownLabel="Пользователь" selectId="member" variableContainerId="varNameContainer" variableInputId="varName"></member-input>
</div><br><br><br><br>
<div>
  <div style="float: left; width: 100%;">
  <span class="dbminputlabel">Проверить, является ли пользователь</span><br>
    <select id="info" class="round">
      <option value="0" selected>Это Бот?</option>
      <option value="1">Можно ли забанить??</option>
      <option value="2">Можно ли кикнуть?</option>
      <option value="4">В голосовом канале?</option>
      <option value="5">Управляется пользователем?</option>
      <option value="6">Владелец бота?</option>
      <option value="7">Заглушен?</option>
      <option value="8">Отключен звук?</option>
      ${!isEvent && '<option value="9">Автор команды?</option>'}
      ${!isEvent && '<option value="10">Текущий владелец сервера?</option>'}
      <option value="11">В канале АФК?</option>
      <option value="12">Бустер сервера?</option>
    </select>
  </div>
</div><br><br><br><br>
<hr class="subtlebar"><br>
<conditional-input id="branch" style="padding-top: 8px;"></conditional-input>`;
  },

  preInit(data, formatters) {
    return formatters.compatibility_2_0_0_iftruefalse_to_branch(data);
  },

  init() {},

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
      console.error('Вам нужно предоставить пользователя некоторого типа для «Проверить, если пользователь"');
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
      default:
        console.log('Проверьте свое действие «Подтвердить участника»! Здесь что-то не так...');
        break;
    }
    this.executeResults(result, data?.branch ?? data, cache);
  },



  modInit(data) {
    this.prepareActions(data.branch?.iftrueActions);
    this.prepareActions(data.branch?.iffalseActions);
  },


  mod() {},
};
