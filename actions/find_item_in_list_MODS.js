module.exports = {
  name: 'Find Item in List MOD',
  section: 'Lists and Loops',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data) {
    const list = [
      'Участники сервера',
      'Каналы сервера',
      'Роли сервера',
      'Эмодзи сервера',
      'Все серверы бота',
      'Роли упомянутых пользователей',
      'Роли автора команды',
      'Временная переменная',
      'Переменная сервера',
      'Глобальная переменная',
    ];
    return `Найти "${data.item}" в ${list[parseInt(data.list, 10)]}`;
  },

  variableStorage(data, varType) {
    if (parseInt(data.storage, 10) !== varType) return;
    return [data.varName2, 'Число'];
  },

  fields: ['list', 'varName', 'item', 'storage', 'varName2'],

  html(isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.1</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>
<div style="float: left; width: 35%;">
<span class="dbminputlabel">Список</span><br>
  <select id="list" class="round" onchange="glob.listChange(this, 'varNameContainer')">
    ${data.lists[isEvent ? 1 : 0]}
  </select>
</div>
<div id="varNameContainer" style="display: none; float: right; width: 60%;">
<span class="dbminputlabel">Имя переменной</span><br>
  <input id="varName" class="round" type="text" list="variableList"><br>
</div>
</div><br><br><br>
<div style="padding-top: 8px;">
<span class="dbminputlabel">Найти элемент</span><br>
  <textarea id="item" rows="4" placeholder="Введите переменную или текст. Одиночные кавычки '' не обязательны!" style="width: 100%; font-family: monospace; white-space: nowrap;"></textarea>
</div><br>
<div style="padding-top: 8px;">
  <div style="float: left; width: 35%;">
  <span class="dbminputlabel">Сохранить в</span><br>
    <select id="storage" class="round">
      ${data.variables[1]}
    </select>
  </div>
  <div id="varNameContainer2" style="float: right; width: 60%;">
  <span class="dbminputlabel">Имя переменной</span><br>
    <input id="varName2" class="round" type="text">
  </div>
</div><br><br><br>
<div><p>Это действие ищет элемент в списке и возвращает его позицию.<br>
Обратите внимание, что в JavaScript индексация списка начинается с 0<br>
Если элемент не найден, всегда будет возвращено -1</p></div>`;
  },

  init() {
    const { glob, document } = this;

    glob.onChange1 = function onChange1(event) {
      const value = parseInt(event.value, 10);
      const dom = document.getElementById('positionHolder');
      if (value < 3) {
        dom.style.display = 'none';
      } else {
        dom.style.display = null;
      }
    };

    glob.listChange(document.getElementById('list'), 'varNameContainer');
  },

  async action(cache) {
    const data = cache.actions[cache.index];
    const storage = parseInt(data.list, 10);
    const varName = this.evalMessage(data.varName, cache);
    const list = await this.getList(storage, varName, cache);
    const item = this.evalMessage(data.item, cache);

    const result = list.findIndex((i) => i === item);

    if (result !== undefined) {
      const varName2 = this.evalMessage(data.varName2, cache);
      const storage2 = parseInt(data.storage, 10);
      this.storeValue(result, storage2, varName2, cache);
    }

    this.callNextAction(cache);
  },

  mod() {},
};
