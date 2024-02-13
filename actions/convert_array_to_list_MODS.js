module.exports = {
  name: 'Convert Arrey to List MOD',
  section: 'Lists and Loops',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[lik_rus - 866884416151355392 & tonyaleksandr - 679236786798460958]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {

    const storeTypes = ['', 'Временная переменную', 'Сервернную переменную', 'Глобальнную переменную', 'Параметры команды'];

    if (data.descriptionx == true) {
      desccor = data.descriptioncolor
    } else {
      desccor = 'none'
    }

    const list = presets.lists;

    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">Преобразовать масив ${storeTypes[parseInt(data.storage, 10)]} (${data.varName}) в список ${
      storeTypes[parseInt(data.storage2, 10)]
    } (${data.varName2})</font>`
  },

  variableStorage(data, varType) {
    if (parseInt(data.storage, 10) !== varType) return;
    return [data.varName2, 'Список'];
  },

  fields: ['storage', 'varName', 'valor', 'storage2', 'varName2', "descriptioncolor", "description", "descriptionx", "undefined"],

  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновление</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.2</div>

<tab-system style="margin-top: 0;">
<tab label="Конвертация" icon="align left">
<div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">

<retrieve-from-variable allowSlashParams dropdownLabel="Переменная" selectId="storage" variableContainerId="varNameContainer" variableInputId="varName"></retrieve-from-variable>

<br><br><br>
<span class="dbminputlabel">Значение</span><br><input type="text" class="round" id="valor">
<br>

  <div style="float: left; width: 35%;">
  <span class="dbminputlabel">Сохранить в</span><br>
    <select id="storage2" class="round">
      ${data.variables[1]}
    </select>
  </div>
  <div style="float: right; width: 60%;">
  <span class="dbminputlabel">Имя переменной</span><br>
    <input id="varName2" class="round" type="text">
  </div>
</div>

</tab>

<tab label="Конфигурация" icon="cogs">
<div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">


<div style="padding-bottom: 12px;padding-top: 12px">
<table style="width:100%;"><tr>
<td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Не обязательное поле"></td>
<td style="padding:0px 0px 0px 10px;width:55px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
</tr></table>
</div>

<span class="dbminputlabel">Опции</span><br><div style="padding:10px;background:rgba(0,0,0,0.2)">
<dbm-checkbox id="undefined" label="Исключить undefined" checked></dbm-checkbox>
</div><br></div>

  </tab>
  </tab-system></div>

<style>
table{width:100%}
.col{padding:0px 5px;width:50%}

.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}

</style>
`;
  },

  init() {
    const { glob, document } = this;

    glob.refreshVariableList(document.getElementById('storage'));

    const xinelaslinks = document.getElementsByClassName('xinelaslink');
    for (let x = 0; x < xinelaslinks.length; x++) {
      const xinelaslink = xinelaslinks[x];
      const url = xinelaslink.getAttribute('data-url');
      if (url) {
        xinelaslink.setAttribute('title', url);
        xinelaslink.addEventListener('click', (e) => {
          e.stopImmediatePropagation();
          console.log(`Launching URL: [${url}] in your default browser.`);
          require('child_process').execSync(`start ${url}`);
        });
      }
    }
  },

  async action(cache) {
    const data = cache.actions[cache.index];
    const storage = parseInt(data.storage, 10);
    const varName = this.evalMessage(data.varName, cache);
    const arrey = this.getVariable(storage, varName, cache);
    const valor = this.evalMessage(data.valor, cache);

    var params = arrey.map(item => item[valor]);

    if (data.undefined) {
      var paramsWithoutUndefined = params.filter(item => item !== undefined);
    } else {
      paramsWithoutUndefined = params;
    }

    const storage2 = parseInt(data.storage2, 10);
    const varName2 = this.evalMessage(data.varName2, cache);
    this.storeValue(paramsWithoutUndefined, storage2, varName2, cache);

    this.callNextAction(cache);
  },

  mod() {},
};
