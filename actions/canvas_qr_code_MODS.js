module.exports = {
  name: 'Canvas QR Code MOD',
  section: 'Image Editing',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {

    if (data.descriptionx == true) {
      desccor = data.descriptioncolor
    } else {
      desccor = 'none'
    }

    const storage = presets.variables;

    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">${data.draw} - ${storage[parseInt(data.storage, 10)]} (${data.varName})</font>`
  },

  variableStorage(data, varType) {
    const type = parseInt(data.storage)
    if (type !== varType) return
    return ([data.varName, 'Image'])
  },

  fields: ['draw', 'largura', 'altura', 'fcolor', 'color', 'margem', 'storage', 'varName', 'iffalse', 'iffalseVal', 'descriptioncolor', 'description', 'descriptionx'],

  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.1</div>

    <div style="width: 100%; padding:5px 5px;height: calc(100vh - 160px);overflow:auto">

      <tab-system style="margin-top: 5px">
        <tab label="Текст" icon="align left">
          <div style="padding:8px">

        <span class="dbminputlabel">Текст для преобразования</span><br>
    <textarea id="draw" rows="6" style="width: 100%; white-space: nowrap; resize:yes"></textarea>

</div>
  </tab>
    <tab label="Размер и цвета" icon="align left">
      <div style="padding:8px">
   
    <div style="float: left; width: 50%;">
    <span class="dbminputlabel">Ширина (px)</span><br>
      <input id="largura" class="round" type="text" placeholder="Необходимый"><br>
    </div>
    <div style="padding-left: 3px; float: left; width: 50%;">
    <span class="dbminputlabel">Высота (px)</span><br>
      <input id="altura" class="round" type="text" placeholder="Необходимый"><br>
    </div>
  <br><br><br>

   

    <table><tr><td>
    <div id="Solid" style="float: left; width: 100%;">
    <span class="dbminputlabel">Фон QR-кода (HEX)</span><br>
      <table style="width:100%"><tr><td><input id="fcolor" name="actionxinxyla" class="round" type="text" value="#FFFFFF" placeholder="#FFFFFF ou rgba(0,0,0,0.5)"><td>
      <td style="width:40px;text-align:center;padding:4px"><a id="btr1" style="cursor:pointer" onclick="(function(){
        document.getElementById('fcolor').type = 'color'
        document.getElementById('btr1').style.display = 'none';
        document.getElementById('btr2').style.display = 'block';
        })()"><button class="tiny compact ui icon button">Выбор</button></a><a id="btr2" style="cursor:pointer;display:none" onclick="(function(){
          document.getElementById('fcolor').type = 'text';
          document.getElementById('btr1').style.display = 'block';
          document.getElementById('btr2').style.display = 'none';
          })()"><button class="tiny compact ui icon button">Вручную</button></a><td></tr></table>
    </div>

</td><td>

 <div id="Solid" style="float: left; width: 100%;">
  <span class="dbminputlabel">Цвет QR-кода (HEX)</span><br>
    <table style="width:100%"><tr><td><input id="color" name="actionxinxyla" class="round" type="text" placeholder="#000000 ou rgba(0,0,0,0.5)"><td>
    <td style="width:40px;text-align:center;padding:4px"><a id="2btr1" style="cursor:pointer" onclick="(function(){
      document.getElementById('color').type = 'color'
      document.getElementById('2btr1').style.display = 'none';
      document.getElementById('2btr2').style.display = 'block';
      })()"><button class="tiny compact ui icon button">Выбор</button></a><a id="2btr2" style="cursor:pointer;display:none" onclick="(function(){
        document.getElementById('color').type = 'text';
        document.getElementById('2btr1').style.display = 'block';
        document.getElementById('2btr2').style.display = 'none';
        })()"><button class="tiny compact ui icon button">Вручную</button></a><td></tr></table>
  </div>

  </tr></table>

  <br>

  <span class="dbminputlabel">Берег</span><br>
  <input id="margem" class="round" value="0" type="text">
  
  </div>
  </tab>
    <tab label="Конфиг и сохранить" icon="settings">
      <div style="padding:8px">

      <div style="padding:0px 0px 15px 0px">
<table style="width:100%;"><tr>
<td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Оставьте пустым, чтобы не использовалось!"></td>
<td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
</tr></table>
</div>

<div style="padding-top: 8px;">
  <div style="float: left; width: 38%">
  <span class="dbminputlabel">Если не получилось</span><br>
  <select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
  <option value="0" selected>Продолжать</option>
  <option value="1">Остановить последовательность действий</option>
  <option value="2">Перейти к действию</option>
  <option value="3">Пропустить следующие действия</option>
  <option value="4">Перейти к якову действия</option>
  </select>
  </div>
  
  <div id="iffalseContainer" style="display: none; float: right; width: 60%;"><span id="xinelas" class="dbminputlabel">Para</span><br><input id="iffalseVal" class="round" name="actionxinxyla" type="text"></div>
  </div>

  <br><br><br><br>
 

  <div style="float: left; width: 35%;">
  <span class="dbminputlabel">Хранить в</span><br>
    <select id="storage" class="round">
      ${data.variables[1]}
    </select>
  </div>
  <div style="float: right; width: 60%;">
  <span class="dbminputlabel">Имя переменной</span><br>
    <input id="varName" class="round" type="text"><br>
  </div>
  </div>
</tab>
</tab-system>

</div>

<style>
.xin {background:#222;padding:2px 4px;}
table{width:100%}

.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}

</style>
`
  },

  init() {
    const { glob, document } = this

    const xinelaslinks = document.getElementsByClassName('xinelaslink');
    for (let x = 0; x < xinelaslinks.length; x++) {
      const xinelaslink = xinelaslinks[x];
      const url = xinelaslink.getAttribute('data-url');
      if (url) {
       xinelaslink.setAttribute('title', url);
       xinelaslink.addEventListener('click', (e) => {
          e.stopImmediatePropagation();
          console.log(`Запуск URL: [${url}] В вашем браузере по умолчанию.`);
          require('child_process').execSync(`start ${url}`);
        });
      }
    }

    glob.onComparisonChanged = function (event) {
      if (event.value > "1") {
        document.getElementById("iffalseContainer").style.display = null;
      } else {
        document.getElementById("iffalseContainer").style.display = "none";
      }
      if (event.value == "2") {
        document.querySelector("[id='xinelas']").innerText = (`Номер действия`);
      }
      if (event.value == "3") {
        document.querySelector("[id='xinelas']").innerText = (`Действий для пропуска`);
      }
      if (event.value == "4") {
        document.querySelector("[id='xinelas']").innerText = (`Якоря название`);
      }
    }

    glob.onComparisonChanged(document.getElementById("iffalse"));

  },

  async action(cache) {
    const data = cache.actions[cache.index]
    const Canvas = require('canvas')
    const largura = parseInt(this.evalMessage(data.largura, cache))
    const altura = parseInt(this.evalMessage(data.altura, cache))
    const margem = parseInt(this.evalMessage(data.margem, cache))
    const draw = this.evalMessage(data.draw, cache)
    const fcolor = this.evalMessage(data.fcolor, cache)
    const color = this.evalMessage(data.color, cache)
    const canvas = Canvas.createCanvas(largura, altura)
    const ctx = canvas.getContext('2d')
    const _this = this
    var QRCode = require('qrcode')

    var opts = {
      errorCorrectionLevel: 'H',
      type: 'image/png',
      quality: 1,
      margin: margem,
      color: {
        dark: color,
        light: fcolor
      }
    }

    try{
    QRCode.toDataURL(draw, opts, function (error, url) {
      if (error){ console.error(error)
      }

      const image2 = new Canvas.Image()
      image2.src = url
      ctx.drawImage(image2, 0, 0, largura, altura)

      result = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')


      const varName = _this.evalMessage(data.varName, cache)
      const storage = parseInt(data.storage)
      _this.storeValue(result, storage, varName, cache)
      _this.callNextAction(cache)
    })
  }
  catch (err) {this.executeResults(false, data, cache)}



  },

  mod() { }
}
