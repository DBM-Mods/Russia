module.exports = {
  name: 'Canvas Draw Image on Image MOD',
  section: 'Image Editing',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[xinxyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {
    const storage = presets.variables;

    if(data.storage2 == "10"){
      nova = `Local/WEB URL: ${data.local}`
      } else{
      nova = `${storage[parseInt(data.storage2, 10)]} (${data.varName2})`
      }  

    if (data.descriptionx == true) {
      desccor = data.descriptioncolor
    } else {
      desccor = 'none'
    }

    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">Juntar: ${storage[parseInt(data.storage, 10)]} (${data.varName}) Com: ${storage[parseInt(data.storage2, 10)]} (${data.varName2})</font>`
  },

  fields: ['local', 'width', 'height', 'storage', 'varName', 'storage2', 'varName2', 'x', 'y', 'effect', 'descriptioncolor', 'description', 'descriptionx',],

  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Portugues/archive/refs/heads/main.zip">Обновление</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Portugues">Версия 0.3</div>

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
    </select>
  </div>
  <div id="varNameContainer" style="float: right; width: 50%;">
  <span class="dbminputlabel">Имя переменной</span><br>
    <input id="varName" class="round" type="text" list="variableList"><br>
  </div>
</div><br><br><br>


<table style="width:100%;">
<tr>
  <td id="controlador1">
    <span class="dbminputlabel">Соединение с изображением</span><br>
    <select id="storage2" class="round" style="width: 100%" onchange="glob.onChangexin2(this)">
      ${data.variables[1]}
      <option value="10">Локально/Web URL</option>
    </select>
    </td>
    <td id="controlador2" style="padding:0px 0px 0px 8px">
      <span class="dbminputlabel">Имя переменной</span><br>
      <input id="varName2" class="round" type="text" list="variableList">
    </td>
    <td id="controlador3" style="padding:0px 0px 0px 8px">
    <span class="dbminputlabel">Локально/Web URL</span><br>
    <input id="local" class="round" type="text" placeholder="resources/output.png">
  </td>
  </tr>
  </table>
  <div id="controlador4">
  <br>
    <div style="float: left; width: 50%;padding:0px 5px 0px 0px">
    <span class="dbminputlabel">Ширина (px или %)</span><br>
      <input id="width" class="round" type="text" placeholder="Оставьте пустым для значения по умолчанию" value="100%"><br>
  </div>
  <div style="float: right; width: 50%;padding:0px">
  <span class="dbminputlabel">Высота (px или %)</span><br>
    <input id="height" class="round" type="text" placeholder="Оставьте пустым для значения по умолчанию" value="100%"><br>
  </div>

  </div>

  <br>

  <div>

  <div style="float: left; width: 50%;padding:0px 5px 0px 0px">
  <span class="dbminputlabel">Позиция X</span><br>
    <input id="x" class="round" type="text" value="0"><br>
  </div>
  <div style="float: right; width: 50%;padding:0px 0px 0px 5px">
  <span class="dbminputlabel">Позиция Y</span><br>
    <input id="y" class="round" type="text" value="0"><br>
  </div>
</div><br><br><br>
<div style="padding-top: 8px;">
  <div style="width: 100%;">
  <span class="dbminputlabel">Тип объеденения</span><br>
    <select id="effect" class="round" onchange="glob.onComparisonChanged(this)">>
      <option value="0" selected>Наложение изображения</option>
      <option value="1">Оставить прозрачным и наложить</option>
      <option value="2">Наложение с прозрачностью</option>
      <option value="3">Вырезание с прозрачностью</option>
      <option value="4">Перекрывает позиции</option>
      <option value="5">Перекрывает позиции</option>
      <option value="6">Вырезание позициия</option>
      <option value="7">Частичное перекрытие в позиции</option>
      <option value="8">Более четкий</option>
      <option value="9">Копировать</option>
      <option value="10">Перекрытие исключительно</option>
      <option value="11">Умножить</option>
      <option value="12">Экран</option>
      <option value="13">Перекрытие с перекрытием</option>
      <option value="14">Затемнить</option>
      <option value="15">Осветлить</option>
      <option value="16">Осветлить цвет</option>
      <option value="17">Затемнить цвет</option>
      <option value="18">Интенсивное перекрытие</option>
      <option value="19">Мягкое наложение</option>
    </select>
  </div>
</div>

<br>

<span class="dbminputlabel">Информация об объеденении</span>
<div id="informacao" style="color:#ccc;border:1px solid rgba(200,200,200,0.3);background:rgba(50,50,50,0.5);padding:5px"></div>

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

  init() {
    const { glob, document } = this

    glob.onChangexin2 = function (event) {
      if (event.value === "10") {
        document.getElementById("controlador2").style.display = 'none';
        document.getElementById("controlador3").style.display = null;
        document.getElementById("controlador4").style.display = null;
      } else {
        document.getElementById("controlador2").style.display = null;
        document.getElementById("controlador3").style.display = 'none';
        document.getElementById("controlador4").style.display = 'none';
      }
    }
    glob.onChangexin2(document.getElementById('storage2'))

    glob.onComparisonChanged = function (event) {
      if (event.value == "0") {
        document.querySelector("[id='informacao']").innerText = (`Это значение по умолчанию, и оно просто рисует новый графический элемент поверх существующего содержимого в контексте.`);
      }
      if (event.value == "1") {
        document.querySelector("[id='informacao']").innerText = (`Область существующего содержимого, которая перекрывается новым графическим элементом, становится прозрачной, а остальная часть сохраняется.`);
      }
      if (event.value == "2") {
        document.querySelector("[id='informacao']").innerText = (`Сохраняется только та область нового графического элемента, которая перекрывает существующий контент, а остальная часть делается прозрачной.`);
      }
      if (event.value == "3") {
        document.querySelector("[id='informacao']").innerText = (`Область нового графического элемента, которая перекрывает существующий контент, делается прозрачной, а остальная часть сохраняется.`);
      }
      if (event.value == "4") {
        document.querySelector("[id='informacao']").innerText = (`Новый графический элемент рисуется поверх существующего содержимого, но только там, где есть перекрытие. Остальное существующее содержимое сохраняется.`);
      }
      if (event.value == "5") {
        document.querySelector("[id='informacao']").innerText = (`Новый графический элемент рисуется под существующим содержимым в контексте.`);
      }
      if (event.value == "6") {
        document.querySelector("[id='informacao']").innerText = (`Сохраняется только та область существующего содержимого, которая перекрывается новым графическим элементом, а остальная часть делается прозрачной.`);
      }
      if (event.value == "7") {
        document.querySelector("[id='informacao']").innerText = (`Новый графический элемент рисуется под существующим содержимым, но только там, где есть перекрытие. Остальное существующее содержимое сохраняется.`);
      }
      if (event.value == "8") {
        document.querySelector("[id='informacao']").innerText = (`Цветовые значения нового графического элемента и существующего содержимого складываются вместе, в результате чего в местах наложения цветов получается более светлый вид.`);
      }
      if (event.value == "9") {
        document.querySelector("[id='informacao']").innerText = (`Новый графический элемент полностью заменяет существующий контент в контексте.`);
      }
      if (event.value == "10") {
        document.querySelector("[id='informacao']").innerText = (`Области, где новый графический элемент и существующее содержимое накладываются друг на друга, становятся прозрачными, а остальные области сохраняются.`);
      }
      if (event.value == "11") {
        document.querySelector("[id='informacao']").innerText = (`Значения цветов нового графического элемента и существующего содержимого перемножаются, что приводит к более темному виду в местах наложения цветов.`);
      }
      if (event.value == "12") {
        document.querySelector("[id='informacao']").innerText = (`Цветовые значения нового графического элемента и существующего содержимого инвертируются, умножаются и снова инвертируются, что приводит к более четкому виду наложения.`);
      }
      if (event.value == "13") {
        document.querySelector("[id='informacao']").innerText = (`Цветовые значения нового графического элемента и существующего содержимого умножаются или умножаются на их инверсии, в зависимости от исходных цветовых значений, что приводит к контрастному наложению.`);
      }
      if (event.value == "14") {
        document.querySelector("[id='informacao']").innerText = (`Значения цвета нового графического элемента и существующего содержимого сравниваются пиксель за пикселем, и самое темное значение сохраняется.`);
      }
      if (event.value == "15") {
        document.querySelector("[id='informacao']").innerText = (`Значения цвета нового графического элемента и существующего содержимого сравниваются пиксель за пикселем, и самое светлое значение сохраняется.`);
      }
      if (event.value == "16") {
        document.querySelector("[id='informacao']").innerText = (`Цветовые значения нового графического элемента и существующего содержимого инвертируются, разделяются и снова инвертируются, что приводит к более четкому виду наложения.`);
      }
      if (event.value == "17") {
        document.querySelector("[id='informacao']").innerText = (`Цветовые значения нового графического элемента и существующего содержимого инвертируются, разделяются и снова инвертируются, в результате чего получается более темный вид наложения.`);
      }
      if (event.value == "18") {
        document.querySelector("[id='informacao']").innerText = (`Цветовые значения нового графического элемента и существующего содержимого умножаются или умножаются на их инверсии, в зависимости от исходных цветовых значений, в результате чего создается высококонтрастный вид наложения.`);
      }
      if (event.value == "19") {
        document.querySelector("[id='informacao']").innerText = (`Цветовые значения нового графического элемента и существующего содержимого сглаживаются и смешиваются, в результате чего получается плавное наложение.`);
      }
    }

    glob.onComparisonChanged(document.getElementById("effect"));

    glob.refreshVariableList(document.getElementById('storage'))

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

  },

  async action(cache) {
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
    const x = parseInt(this.evalMessage(data.x, cache))
    const y = parseInt(this.evalMessage(data.y, cache))
    const effect = parseInt(data.effect)
    const local = this.evalMessage(data.local, cache)

    const image = new Canvas.Image()
    image.src = imagedata

    if (storage2 == 10) {
      try {
        await Canvas.loadImage(local).then((imagex) => {
        var scalex = this.evalMessage(data.width, cache)
        var scaley = this.evalMessage(data.height, cache)
        if (scalex == '') { scalex = "100%" }
        if (scaley == '') { scaley = "100%" }
        let imagew = imagex.width
        let imageh = imagex.height
        let scalew = 1
        let scaleh = 1
        scale(scalex, scaley)
          const canvas2 = Canvas.createCanvas(imagew, imageh)
          const ctx2 = canvas2.getContext('2d')
          ctx2.drawImage(imagex, 0, 0, imagew, imageh)
          image2 = new Canvas.Image()
          image2.src = canvas2.toDataURL('image/png').replace('image/png', 'image/octet-stream')

          function scale(w, h) {
            if (w.endsWith('%')) {
              const percent = w.replace('%', '')
              scalew = parseInt(percent) / 100
            } else {
              scalew = parseInt(w) / imagew
            }
            if (h.endsWith('%')) {
              const percent = h.replace('%', '')
              scaleh = parseInt(percent) / 100
            } else {
              scaleh = parseInt(h) / imageh
            }
            imagew *= scalew
            imageh *= scaleh
          }

        })
      } catch (err) {
        this.callNextAction(cache)
        return
      }
    } else {
      if (!imagedata2) {
        this.callNextAction(cache)
        return
      }
      image2 = new Canvas.Image()
      image2.src = imagedata2
    }

    const canvas = Canvas.createCanvas(image.width, image.height)
    const ctx = canvas.getContext('2d')
    ctx.drawImage(image, 0, 0, image.width, image.height)

    if (effect == "1") { ctx.globalCompositeOperation = 'destination-out' }
    if (effect == "2") { ctx.globalCompositeOperation = 'source-in' }
    if (effect == "3") { ctx.globalCompositeOperation = 'source-out' }
    if (effect == "4") { ctx.globalCompositeOperation = 'source-atop' }
    if (effect == "5") { ctx.globalCompositeOperation = 'destination-over' }
    if (effect == "6") { ctx.globalCompositeOperation = 'destination-in' }
    if (effect == "7") { ctx.globalCompositeOperation = 'destination-atop' }
    if (effect == "8") { ctx.globalCompositeOperation = 'lighter' }
    if (effect == "9") { ctx.globalCompositeOperation = 'copy' }
    if (effect == "10") { ctx.globalCompositeOperation = 'xor' }
    if (effect == "11") { ctx.globalCompositeOperation = 'multiply' }
    if (effect == "12") { ctx.globalCompositeOperation = 'screen' }
    if (effect == "13") { ctx.globalCompositeOperation = 'overlay' }
    if (effect == "14") { ctx.globalCompositeOperation = 'darken' }
    if (effect == "15") { ctx.globalCompositeOperation = 'lighten' }
    if (effect == "16") { ctx.globalCompositeOperation = 'color-dodge' }
    if (effect == "17") { ctx.globalCompositeOperation = 'color-burn' }
    if (effect == "18") { ctx.globalCompositeOperation = 'hard-light' }
    if (effect == "19") { ctx.globalCompositeOperation = 'soft-light' }
    
    ctx.drawImage(image2, x, y, image2.width, image2.height)
    const result = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
    this.storeValue(result, storage, varName, cache)
    this.callNextAction(cache)
  },

  mod() { }
}
