module.exports = {
  name: 'Replace Text MOD',
  section: 'Other Stuff',
  meta: {
    version: '2.1.5',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data) {
    const info = ['Замените первый результат', 'Замените все результаты'];
    return `${info[data.info]} "${data.text2}" в "${data.text3}" в "${data.text}"`;
  },

  variableStorage(data, varType) {
    if (parseInt(data.storage, 10) !== varType) return;
    return [data.varName, 'String'];
  },

  fields: ['text', 'text2', 'text3', 'info', 'storage', 'varName'],

  html(isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.3</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>

    <div style="padding-top: 3px;">
	  <span class="dbminputlabel">Оригинал текста</span>
		  <textarea id="text" rows="5" placeholder="Введите текст здесь..." style="width: 99%; font-family: monospace; white-space: nowrap;"></textarea>
	  </div>
	  <div>
		  <div style="padding-top: 8px; width: 100%;">
		  <span class="dbminputlabel">Заменять</span><br>
			  <textarea id="text2" rows="1" class="round" style="width:100%;"></textarea>
		  </div><div style=" padding-top: 8px; width: 100%;">
      Для этого:<br>
			  <textarea id="text3" rows="1" class="round" style="width:100%"></textarea>
		  </div>
	  </div>
	  <div style="padding-top: 8px; width: 100%;">
	  <span class="dbminputlabel">Модель</span><br>
	  <select id="info" class="round">
		  <option value="0" selected>Замените первый результат</option>
		  <option value="1">Замените все результаты</option>
	  </select>
	  </div>
	  <div style="padding-top: 8px;">
		  <div style="float: left; width: 35%;">
		  <span class="dbminputlabel">Хранить в</span><br>
			  <select id="storage" class="round">
				  ${data.variables[1]}
			  </select>
		  </div>
		  <div id="varNameContainer" style="float: right; width: 60%;">
			  <span class="dbminputlabel">Имя переменной</span><br>
			  <input id="varName" class="round" type="text">
		  </div>
	  </div>`;
  },

  init() {},

  async action(cache) {
    const data = cache.actions[cache.index];
    const text = this.evalMessage(data.text, cache);
    const oldValue = this.evalMessage(data.text2, cache);
    const newValue = this.evalMessage(data.text3, cache);
    const info = parseInt(data.info, 10);

    let result;
    switch (info) {
      case 0:
        result = text.replace(oldValue, newValue);
        break;
      case 1:
        result = text.split(oldValue).join(newValue);
        break;
    }
    if (result !== undefined) {
      const storage = parseInt(data.storage, 10);
      const varName = this.evalMessage(data.varName, cache);
      this.storeValue(result, storage, varName, cache);
    }
    this.callNextAction(cache);
  },

  mod() {},
};
