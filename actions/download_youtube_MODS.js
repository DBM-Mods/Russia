module.exports = {
  name: 'Download Youtube MOD',
  section: 'File Stuff',
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

    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">Скачать "${data.url}" в "${data.filePath}</font>`
  },

  variableStorage(data, varType) {
    const type = parseInt(data.storage, 10);
    if (type !== varType) return;
    let dataType = "Текст";
    return [data.varName, dataType];
  },

  fields: ["url", "addType", "fileName", "tit", "filePath", "iffalse", "iffalseVal", "descriptioncolor", "description", "descriptionx", "storage", "varName"],

  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Portugues/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Portugues">Версия 0.4</div>

    <div style="width: 100%; padding:5px 5px;height: calc(100vh - 160px);overflow:auto">

    <div id="flutuador" style="padding:0px 0px 15px 0px">
<table style="width:100%;"><tr>
<td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Не обязательное поле"></td>
<td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
</tr></table>
</div>

    
<div style="width: 100%">
<span class="dbminputlabel">URL файла</span><br>
  <input id="url" class="round" type="text">
</div><br>

<table style="width:100%;"><tr>
<td> 
<span class="dbminputlabel">Фильтр</span><br>
<select id="addType" class="round" onchange="glob.onChange1(this)">
			<option value="0">Нет</option>
			<option value="1" selected>Только аудио</option>
		</select>
    </td>
<td style="padding:0px 0px 0px 10px;width:49%">
<span class="dbminputlabel">Тип</span><br>
<select id="tit" class="round" onchange="glob.onChange1(this)">
			<option value="0">использовать название файла</option>
			<option value="1" selected>Использовать заголовок + mp3</option>
      <option value="2">Использовать заголовок + mp4</option>
		</select>
</td>
</tr></table>

    <br>


    <table style="width:100%;"><tr>
<td> 
<span class="dbminputlabel">Место хранения</span><br>
<input id="filePath" class="round" type="text" placeholder="./resources/" value="./resources/">
</td>
<td style="padding:0px 0px 0px 10px;width:49%" id="xinelaso">
<span class="dbminputlabel">Имя файла + Формат</span><br>
<input id="fileName" class="round" type="text" placeholder="musica.mp3">
</td>
</tr></table>

<br>

<table><tr><td class="col1">
  <span class="dbminputlabel">Место сохранения</span><br>
    <select id="storage" class="round">
      ${data.variables[1]}
    </select>
    </td>
    <td class="col2">
  <div id="varNameContainer2">
  <span class="dbminputlabel">Имя переменной</span><br>
    <input id="varName" class="round" type="text">
  </div>
  </td></tr></table>
 

<br>

<div>
<div style="float: left; width: 38%">
<span class="dbminputlabel">Если произошла ошибка</span><br>
<select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
<option value="0">Продолжить действия</option>
<option value="1" selected>Остановить последовательность действий</option>
<option value="2">Перейти к действию</option>
<option value="3">Пропустить следующие действия</option>
<option value="4">Перейти к якорю действия</option>
</select>
</div>

<div id="iffalseContainer" style="display: none; float: right; width: 60%;"><span id="xinelas" class="dbminputlabel">Para</span><br><input id="iffalseVal" class="round" name="actionxinxyla" type="text"></div>
</div>

</div>

<style>
table{width:100%}
.col1{width:38%;padding:0px 10px 0px 0px}
.col2{width:60%}
.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}

</style>
`;
  },

  init() {

    const { glob, document } = this;

    const xinelaslinks = document.getElementsByClassName('xinelaslink');
    for (let x = 0; x < xinelaslinks.length; x++) {
      const xinelaslink = xinelaslinks[x];
      const url = xinelaslink.getAttribute('data-url');
      if (url) {
        xinelaslink.setAttribute('title', url);
        xinelaslink.addEventListener('click', (e) => {
          e.stopImmediatePropagation();
          console.log(`Запуск URL: [${url}] в стандартном браузере.`);
          require('child_process').execSync(`start ${url}`);
        });
      }
    }


    glob.onChange1 = function (event) {
      const value = parseInt(event.value, 10);
      if (value == 0) {
        document.getElementById("xinelaso").style.display = null;
      } else {
        document.getElementById("xinelaso").style.display = "none";
      }
    };


    glob.onChange1(document.getElementById("tit"));

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
        document.querySelector("[id='xinelas']").innerText = (`Пропустить действия`);
      }
      if (event.value == "4") {
        document.querySelector("[id='xinelas']").innerText = (`Имя якоря`);
      }
    }

    glob.onComparisonChanged(document.getElementById("iffalse"));

  },

  async action(cache) {
    const data = cache.actions[cache.index];

    const ytdl = require('ytdl-core');
    const fs = require('fs');

    let url = this.evalMessage(data.url, cache);
    var title = this.evalMessage(data.fileName, cache);
    const savePath = this.evalMessage(data.filePath, cache);
    const _this = this
    const type = parseInt(data.addType, 10);
    const tit = parseInt(data.tit, 10);
    let filtermenu

    if (!fs.existsSync(savePath)) {
      fs.mkdirSync(savePath, {
          recursive: true
      });
  }


    switch (type) {
      case 0:
        filtermenu = ''
        break;
      case 1:
        filtermenu = 'audioonly'
        break;
    }

    try {
      const infox = await ytdl.getInfo(url);

      if (tit == 1 || tit == 2) {
        var title = infox.videoDetails.title

        title = title.replaceAll("/", "")
        title = title.replaceAll("/\/", "")
        title = title.replaceAll('.', '')
        title = title.replaceAll(':', '-')
        title = title.replaceAll('*', '')
        title = title.replaceAll('?', '')
        title = title.replaceAll('"', '')
        title = title.replaceAll('<', '')
        title = title.replaceAll('>', '')
        title = title.replaceAll('|', '-')

        if (title.length == 0) { title = "audio" }

        if (tit == 1) {
          title = title + '.mp3'
        }
        if (tit == 2) {
          title = title + '.mp4'
        }

      }
      

      ytdl.getInfo(url).then(info => {
        const writeStream = fs.createWriteStream(savePath + title);
        ytdl(url, { filter: `${filtermenu}` }).pipe(writeStream);
    
        writeStream.on("close", () => {
            const storage = parseInt(data.storage, 10);
            const varName = this.evalMessage(data.varName, cache);
            this.storeValue(savePath + title, storage, varName, cache);
    
            this.callNextAction(cache);
        });
    }).catch(function (error) {
        console.log(error);
        _this.executeResults(false, data, cache)
      });
    } catch (err) { console.log(err); this.executeResults(false, data, cache) }

  },

  mod() { },
};
