module.exports = {
  name: 'Canvas Draw Image on Image MOD',
  section: 'Image Editing',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle (data) {
    const storeTypes = ['', 'Временная переменная', 'Переменная сервера', 'Глобальная переменная']
    return `${storeTypes[parseInt(data.storage2)]} (${data.varName2}) -> ${storeTypes[parseInt(data.storage)]} (${data.varName})`
  },

  fields: ['storage', 'varName', 'storage2', 'varName2', 'x', 'y', 'effect'],

  html (isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.1</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>
<div>
  <div style="float: left; width: 45%;">
  <span class="dbminputlabel">Изображение холста</span><br>
    <select id="storage" class="round" onchange="glob.refreshVariableList(this)">
      ${data.variables[1]}
    </select>
  </div>
  <div id="varNameContainer" style="float: right; width: 50%;">
  <span class="dbminputlabel">Имя переменной</span><br>
    <input id="varName" class="round" type="text" list="variableList"><br>
  </div>
</div><br><br><br>
<div style="padding-top: 8px;">
  <div style="float: left; width: 45%;">
  <span class="dbminputlabel">Объединить с изображением</span><br>
    <select id="storage2" class="round">
      ${data.variables[1]}
    </select>
  </div>
  <div id="varNameContainer2" style="float: right; width: 50%;">
  <span class="dbminputlabel">Имя переменной</span><br>
    <input id="varName2" class="round" type="text" list="variableList"><br>
  </div>
</div><br><br><br>
<div style="padding-top: 8px">
  <div style="float: left; width: 50%;padding:5px">
  <span class="dbminputlabel">X позиция</span><br>
    <input id="x" class="round" type="text" value="0"><br>
  </div>
  <div style="float: right; width: 50%;padding:5px">
  <span class="dbminputlabel">Y позиция</span><br>
    <input id="y" class="round" type="text" value="0"><br>
  </div>
</div><br><br><br>
<div style="padding-top: 8px;">
  <div style="float: left; width: 100%;">
  <span class="dbminputlabel">Эффект</span><br>
    <select id="effect" class="round">
      <option value="0" selected>Наложение</option>
      <option value="1">Маскировать</option>
    </select>
  </div>
</div>`
  },

  init () {
    const { glob, document } = this

    glob.refreshVariableList(document.getElementById('storage'))
  },

  action (cache) {
    const Canvas = require('canvas')
    const data = cache.actions[cache.index]
    const storage = parseInt(data.storage)
    const varName = this.evalMessage(data.varName, cache)
    const imagedata = this.getVariable(storage, varName, cache)
    if (!imagedata) {
      this.callNextAction(cache)
      return
    }
    const storage2 = parseInt(data.storage2)
    const varName2 = this.evalMessage(data.varName2, cache)
    const imagedata2 = this.getVariable(storage2, varName2, cache)
    if (!imagedata2) {
      this.callNextAction(cache)
      return
    }
    const x = parseInt(this.evalMessage(data.x, cache))
    const y = parseInt(this.evalMessage(data.y, cache))
    const effect = parseInt(data.effect)
    const image = new Canvas.Image()
    image.src = imagedata
    const image2 = new Canvas.Image()
    image2.src = imagedata2
    const canvas = Canvas.createCanvas(image.width, image.height)
    const ctx = canvas.getContext('2d')
    ctx.drawImage(image, 0, 0, image.width, image.height)
    switch (effect) {
      case 1:
        ctx.globalCompositeOperation = 'destination-out'
    }
    ctx.drawImage(image2, x, y, image2.width, image2.height)
    const result = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
    this.storeValue(result, storage, varName, cache)
    this.callNextAction(cache)
  },

  mod () {}
}
