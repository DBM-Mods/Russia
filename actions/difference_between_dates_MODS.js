module.exports = {

  name: 'Difference Between Dates MOD',
  section: 'Other Stuff',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[Tempest - 321400509326032897]',
  authorUrl: 'https://github.com/DBM-Mods/Russia',
  downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data) {
    return `Разница между ${data.date || "Новая дата"} и ${data.date2 || "Новая дата"}`;
  },

  variableStorage(data, varType) {
    if (parseInt(data.storage, 10) !== varType) return;
    if (data.mode) {
      return [data.varName, "Текст"];
    } else {
      return [data.varName, "Число"];
    }
  },

  fields: ['date', 'date2', 'format','mode', 'storage', 'varName'],

  html(_isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.2</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>

    <div style="float: left; width: 65%">
      <span class="dbminputlabel">Формат даты</span>
      <input type="text" id="format" class="round" placeholder="Прим: DD/MM/YYYY HH:mm:ss">
    </div>

  <dbm-checkbox id="mode" label="Преобразование секунд" style="float: right;margin-top: 10px;"></dbm-checkbox>
  
  <div style="float: left; width: 100%; padding-top: 10px; padding-bottom: 15px;">
  <span class="dbminputlabel">Дата 1</span>
  <input id="date" class="round" type="text" placeholder='22/02/2022 22:22:22 или оставьте поле пустым для новой даты.'>
</div>
<div style="float: left; width: 100%; padding-top: 10px; padding-bottom: 15px;">
<span class="dbminputlabel">Дата 2</span>
  <input id="date2" class="round" type="text" placeholder='22/02/2022 22:22:22 или оставьте поле пустым для новой даты.'>
</div>
<div style="float: left; width: 35%; padding-top: 8px;">
<span class="dbminputlabel">Сохранить в</span><br>
  <select id="storage" class="round" onchange="glob.variableChange(this, 'varNameContainer')">
  ${data.variables[1]}
  </select>
</div>
<div id="varNameContainer" style="float: right; display: none; width: 60%; padding-top: 8px;">
<span class="dbminputlabel">Имя переменной</span><br>
  <input id="varName" class="round" type="text">
</div>`;
  },

  init() {
    const { glob, document } = this;
    glob.variableChange(document.getElementById('storage'), 'varNameContainer');
  },

  async action(cache) {
      const data = cache.actions[cache.index];
      const moment = require('moment');

      const date = this.evalMessage(data.date, cache) || new Date();
      const date2 = this.evalMessage(data.date2, cache) || new Date();
      const format = this.evalMessage(data.format, cache) || "DD/MM/YYYY HH:mm:ss";

      let conta = parseFloat(moment(date2, format).format("X"));
      conta -= parseFloat(moment(date, format).format("X"));

      if(isNaN(conta)) {
        result = "Неправильная Дата";
      } else {
        if(data.mode) {
          let time = conta;

          let s = time;

          let m = Math.floor(s / 60);
          s = s % 60;
          let h = Math.floor(m / 60);
          m = m % 60;
          let a = Math.floor(time / 60 / 60 / 24 / 365.242214);
          let mes = Math.floor(time / 60 / 60 / 24 / 30.43685116666667 - (a * 12));
          let d = Math.floor(h / 24 - (a * 365.242214) - (30.43685116666667 * mes));
          h = h % 24;

          result = (a > 1 ? '' + a + ' лет ' : '') + (a == 1 ? '' + a + ' год ' : '') + (mes > 1 ? '' + mes + ' месяцев ' : '') + (mes == 1 ? '' + mes + ' месяц ' : '') + (d > 1 ? d + ' дней ' : '') + (d == 1 ? '' + d + ' день ' : '') + (h > 1 ? h + ' часов ' : '') + (h == 1 ? '' + h + ' час ' : '') + (m > 0 ? m + ' минут ' : '') + (s > 0 ? s + ' секунд' : '');
        } else {
          result = conta;
        }
      }

      const storage = parseInt(data.storage, 10);
      const varName = this.evalMessage(data.varName, cache);
      this.storeValue(result, storage, varName, cache);

    this.callNextAction(cache);
  },

  mod() {},
};