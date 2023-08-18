module.exports = {
  name: 'Check If Message MOD',
  section: 'Conditions',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {
    return `${presets.getConditionsText(data)}`;
  },

  fields: ['message', 'varName', 'info', "branch"],

  html(isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.1</div>
		<div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>
      <message-input dropdownLabel="Сообщение" selectId="message" variableContainerId="varNameContainer" variableInputId="varName"></message-input>

<br><br><br><br>

<div>

  <div style="width: 100%;">
  <span class="dbminputlabel">Проверить сообщение</span><br>
    <select id="info" class="round">
      <option value="0">Может быть закреплено?</option>
      <option value="1">Закреплено?</option>
      <option value="2">Может быть удалено?</option>
      <option value="3">Удалено?</option>
      <option value="4">TTS?</option>
      <option value="5">Системное сообщение?</option>
      <option value="6">Содержит упоминание пользователя/бота?</option>
      <option value="7">Содержит более одного упоминания пользователя/бота?</option>
      <option value="8">Содержит реакции?</option>
      <option value="9">Содержит вложение?</option>
      <option value="10">Содержит более одного вложения?</option>
      <option value="11">Содержит приглашение Discord?</option>
    </select>
  </div>

</div>
<br>
<hr class="subtlebar">

<br>
<div>
<conditional-input id="branch" style="padding-top: 8px;"></conditional-input></div>

`;
  },

  preInit(data, formatters) {
    return formatters.compatibility_2_0_0_iftruefalse_to_branch(data);
  },

  init() {},

  async action(cache) {
    const data = cache.actions[cache.index];
    const message = parseInt(data.message, 10);
    const varName = this.evalMessage(data.varName, cache);
    const msg = await this.getMessage(message, varName, cache);
    const info = parseInt(data.info, 10);
    let result = false;
    switch (info) {
      case 0:
        result = msg.pinnable;
        break;
      case 1:
        result = msg.pinned;
        break;
      case 2:
        result = msg.deletable;
        break;
      case 3:
        result = msg.deleted;
        break;
      case 4:
        result = msg.tts;
        break;
      case 5:
        result = msg.system;
        break;
      case 6:
        mentions = msg.mentions.users.size
        if(mentions == 1){result = true}else{result = false}
        console.log(mentions)
        break;
        case 7:
          mentions = msg.mentions.users.size
          if(mentions > 1){result = true}else{result = false}
          break;
          case 8:
           react = msg.reactions.cache.size
           if(react > 0){result = true}else{result = false}
            break;
            case 9:
              att = msg.attachments.size
              if(att == 1){result = true}else{result = false}
               break;
               case 10:
                att = msg.attachments.size
                if(att > 1){result = true}else{result = false}
                 break;
                 case 11:
                  invite = new RegExp(/(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z]/g);
                  if(invite.test(msg.content)){result = true}else{result = false}
                   break;
      default:
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
