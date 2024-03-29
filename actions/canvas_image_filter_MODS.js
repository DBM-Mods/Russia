module.exports = {
  name: 'Canvas Image Filter MOD',
  section: 'Image Editing',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[xinxyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle (data) {
    const storeTypes = ['', 'Временная переменная', 'Сервернная переменная', 'Глобальная переменная']
    const filter = ['Размытие', 'Повернуть оттенок', 'Яркость', 'Контраст', 'Оттенки серого', 'Изменять', 'Непрозрачность', 'Насыщенность', 'Сепия']

    if (data.descriptionx == true) {
      desccor = data.descriptioncolor
  } else {
      desccor = 'none'
  }

    return data.description
        ? `<font style="color:${desccor}">${data.description}</font>`
        : `<font style="color:${desccor}">${storeTypes[parseInt(data.storage)]} (${data.varName}) -> ${filter[parseInt(data.info)]} (${data.value})</font>`
  },


  fields: ['storage', 'varName', 'info', 'value', 'descriptioncolor','description','descriptionx'],

  html (isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновление</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.2</div>

    <div style="width: 100%; padding:5px 5px;height: calc(100vh - 160px);overflow:auto">

    <div id="flutuador" style="padding:0px 0px 15px 0px">
<table style="width:100%;"><tr>
<td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Оставьте пустым, чтобы не использовалось!"></td>
<td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
</tr></table>
</div>

<div>
  <div style="float: left; width: 45%;">
  <span class="dbminputlabel">Изображение Canvas</span><br>
    <select id="storage" class="round" onchange="glob.refreshVariableList(this)">
      ${data.variables[1]}
    </select><br>
  </div>
  <div id="varNameContainer" style="float: right; width: 50%;">
  <span class="dbminputlabel">Имя переменной</span><br>
    <input id="varName" class="round" type="text" list="variableList"><br>
  </div>
</div><br><br><br>

<div style="padding-top: 8px;">
  <div style="float: left; width: 45%;">
  <span class="dbminputlabel">Фильтр</span><br>
    <select id="info" class="round" onchange="glob.onChange1(this)">
    <option value="0" selected>Размытие</option>
    <option value="1">Повернуть оттенок</option>
    <option value="2">Яркость</option>
    <option value="3">Контраст</option>
    <option value="4">Оттенки серого</option>
    <option value="5">Изменять</option>
    <option value="6">Непрозрачность</option>
    <option value="7">Насыщать</option>
    <option value="8">Сепия</option>
    </select><br>
  </div>
  <div style="float: right; width: 50%;">
  <span class="dbminputlabel"><span id="valuetext">Значение</span></span><br>
    <input id="value" class="round" type="text" placeholder="0 = Нету фильтра"><br>
  </div>
</div>

<style>
table{width:100%}
.col1{width:38%;padding:0px 10px 0px 0px}
.col2{width:60%}
.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}
.xinelaslink{margin-top:-4px}
.xinelaslink:hover{opacity:0.8 !important}
</style>
`
  },

  init () {
    const { glob, document } = this

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

    glob.refreshVariableList(document.getElementById('storage'))

    glob.onChange1 = function (event) {
      const value = parseInt(event.value)
      const valuetext = document.getElementById('valuetext')
      if (value === 1) {
        valuetext.innerHTML = 'Значение (Степень)'
      } else {
        valuetext.innerHTML = 'Значение (В Процентах)'
      }
    }

    glob.onChange1(document.getElementById('info'))
  },

  action (cache) {
    const Canvas = require('canvas')
    const Filter = require('imagedata-filters')
    const data = cache.actions[cache.index]
    const storage = parseInt(data.storage)
    const varName = this.evalMessage(data.varName, cache)
    const imagedata = this.getVariable(storage, varName, cache)
    if (!imagedata) {
      this.callNextAction(cache)
      return
    }
    const image = new Canvas.Image()
    image.src = imagedata
    const info = parseInt(data.info)
    let value = this.evalMessage(data.value, cache)
    const canvas = Canvas.createCanvas(image.width, image.height)
    const ctx = canvas.getContext('2d')
    ctx.drawImage(image, 0, 0)
    const imgdata = ctx.getImageData(0, 0, image.width, image.height)
    let imagedata2
    if(info == 0){
      value = (Number(value) / 100).toString()
      imagedata2 = Filter.blur(imgdata, { amount: value })
    }
    if(info == 1){
      value = (Number(value) / 180 * Math.PI).toString()
      imagedata2 = Filter.hueRotate(imgdata, { amount: value })
    }
    if(info == 2){
      value = ((100 - Number(value)) / 100).toString()
      imagedata2 = Filter.brightness(imgdata, { amount: value })
    }
    if(info == 3){
      value = ((100 - Number(value)) / 100).toString()
      imagedata2 = Filter.contrast(imgdata, { amount: value })
    }
    if(info == 4){
      value = (Number(value) / 100).toString()
      imagedata2 = Filter.grayscale(imgdata, { amount: value })
    }
    if(info == 5){
      value = (Number(value) / 100).toString()
      imagedata2 = Filter.invert(imgdata, { amount: value })
    }
    if(info == 6){
      value = ((100 - Number(value)) / 100).toString()
      imagedata2 = Filter.opacity(imgdata, { amount: value })
    }
    if(info == 7){
      value = ((100 - Number(value)) / 100).toString()
      imagedata2 = Filter.saturate(imgdata, { amount: value })
    }
    if(info == 8){
      value = (Number(value) / 100).toString()
      imagedata2 = Filter.sepia(imgdata, { amount: value })
    }

    ctx.putImageData(imagedata2, 0, 0)
    const result = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
    this.storeValue(result, storage, varName, cache)
    this.callNextAction(cache)
  },

  mod () {}
}
