module.exports = {
  name: 'Store Webhook Info MOD',
  section: 'Webhook Control',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
    },

  subtitle(data) {
    const info = ['URL ', 'ID ', 'Токен '];
    return `${info[parseInt(data.info, 10)]}`;
  },

  variableStorage(data, varType) {
    if (parseInt(data.storage, 10) !== varType) return;
    let dataType = 'Webhook Info';

    switch (parseInt(data.info, 10)) {
      case 0:
        dataType = 'Вебхук URL';
        break;
      case 1:
        dataType = 'Вебхук ID';
        break;
      case 2:
        dataType = 'Вебхук токен';
        break;
      default:
        break;
    }
    return [data.varName2, dataType];
  },

  fields: ['webhook', 'varName', 'info', 'storage', 'varName2'],

  html(_isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.1</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>
<div>
  <div style="float: left; width: 35%;">
  <span class="dbminputlabel">Webhook</span><br>
    <select id="webhook" class="round" onchange="glob.refreshVariableList(this)">
      ${data.variables[1]}
    </select>
  </div>
  <div id="varNameContainer" style="float: right; width: 60%;">
  <span class="dbminputlabel">Имя переменной</span><br>
    <input id="varName" class="round" type="text" list="variableList"><br>
  </div>
</div><br><br><br>
<div style="width: 100%; padding-top: 8px;">
<span class="dbminputlabel">Информация</span><br>
  <select id="info" class="round">
    <option value="0" selected>URL Webhook</option>
    <option value="1">ID Webhook</option>
    <option value="2">Токен Webhook</option>
  </select>
</div><br>
<div>
  <div style="float: left; width: 35%;">
  <span class="dbminputlabel">Хранить в</span><br>
    <select id="storage" class="round">
      ${data.variables[1]}
    </select>
  </div>
  <div id="varNameContainer2" style="float: right; width: 60%;">
  <span class="dbminputlabel">Имя переменной</span><br>
    <input id="varName2" class="round" type="text"><br>
  </div>
</div>`;
  },

  init() {
    const { glob, document } = this;
    glob.refreshVariableList(document.getElementById('webhook'));
  },

  async action(cache) {
    const data = cache.actions[cache.index];
    const webhookobj = parseInt(data.webhook, 10);
    const varName = this.evalMessage(data.varName, cache);
    const info = parseInt(data.info, 10);
    const Mods = this.getMods();
    const webhook = await Mods.getWebhook(webhookobj, varName, cache);

    let result;
    switch (info) {
      case 0:
        result = webhook.url;
        break;
      case 1:
        result = webhook.id;
        break;
      case 2:
        result = webhook.token;
        break;
      default:
        break;
    }

    if (result !== undefined) {
      const storage = parseInt(data.storage, 10);
      const varName2 = this.evalMessage(data.varName2, cache);
      this.storeValue(result, storage, varName2, cache);
    }
    this.callNextAction(cache);
  },

  mod() {},
};
