module.exports = {
  name: 'Go To Action Anchor MOD',
  section: 'Other Stuff',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },
  
  subtitle(data) {
    return data.description
    ? `<font color="${data.color}">Перейти к якорю: ${data.anchorName} | ${data.description}</font>`
    : `<font color="${data.color}">Перейти к якорю: ${data.anchorName}`},

  fields: ['description', 'anchorName', 'color'],

  html() {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.2</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>
<div style="float: left; width: 74%;">
<span class="dbminputlabel">Перейти к якорю</span><br>
  <input type="text" class="round" id="anchorName"><br>
</div>
<div style="float: right; width: 24%;text-align:center">
<span class="dbminputlabel">Цвет</span><br>
  <input type="color" id="color" class="round"><br>
</div>
<div style="float: left; width: 98%;">
<span class="dbminputlabel">Описание</span><br>
  <input type="text" class="round" id="description"><br>
</div>`;
  },

  init() {},


  action(cache) {
    const data = cache.actions[cache.index];
    const anchorName = this.evalMessage(data.anchorName, cache);
    cache.goToAnchor(anchorName);
  },

  mod() {},
};
