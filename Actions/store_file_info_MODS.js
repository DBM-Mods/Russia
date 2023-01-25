module.exports = {
  name: 'Store File Info MOD',
  section: 'File Stuff',
  meta: {
    version: '2.1.6',
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

    const info = [
      'Размер файла (байты)',
      'Формат файла',
      'Количество символов файла',
      'Временная метка (Timestamp) последней модификации файла',
      'Дата последней модификации файла',
      'Файл существует?<',
      'Содержание файла',
      'Имя файла',
      'Временная метка (Timestamp) создания файла',
      'Дата создания файлов',
      'Общая продолжительность музыки',
    ];

    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">${info[parseInt(data.info, 10)]} - ${storage[parseInt(data.storage, 10)]} (${data.varName})</font>`
  },

  fields: ['filePath', 'info', 'storage', 'varName', 'descriptioncolor', 'description', 'descriptionx'],

  variableStorage(data, varType) {
    if (parseInt(data.storage, 10) !== varType) return;
    let dataType = 'Unknown type';
    switch (data.info) {
      case 0:
        dataType = 'Число';
        break;
      case 1:
        dataType = 'Текст';
        break;
      case 2:
        dataType = 'Число';
        break;
      case 3:
        dataType = 'Временная метка (Timestamp)';
        break;
      case 4:
        dataType = 'Данные';
        break;
      case 5:
        dataType = 'true/false';
        break;
      case 6:
        dataType = 'Текст';
        break;
      case 7:
        dataType = 'Текст';
        break;
      case 8:
        dataType = 'Временная метка (Timestamp)';
        break;
      case 9:
        dataType = 'Данные';
        break;
      case 10:
        dataType = 'Число';
        break;
    }
    return [data.varName, dataType];
  },

  html(_isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.3</div>

    <div style="width: 100%; padding:5px 5px;height: calc(100vh - 160px);overflow:auto">

    <div id="flutuador" style="padding:0px 0px 15px 0px">
<table style="width:100%;"><tr>
<td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Оставьте пустым, чтобы не использовалось!"></td>
<td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
</tr></table>
</div>

<span class="dbminputlabel">Расположение файла</span><br>
<input class='round' id='filePath' placeholder='./resources/teste.txt' /><br>

<span class="dbminputlabel">Информация</span>
<select class='round' id='info'>
  <option value='0'>Размер файла (байты)</option>
  <option value='1'>Формат файла</option>
  <option value='2'>Количество символов файла</option>
  <option value='3'>Временная метка (Timestamp) последней модификации файла</option>
  <option value='4'>Дата последней модификации файла</option>
  <option value='5'>Файл существует?</option>
  <option value='6'>Содержание файла</option>
  <option value='7'>Имя файла</option>
  <option value='8'>Временная метка (Timestamp) создания файла</option>
  <option value='9'>Дата создания файлов</option>
  <option value='10'>Общая продолжительность музыки за секунды</option>
</select><br>
<table>
<tr>
<td class="sep1"><span class="dbminputlabel">Хранить в</span><br>
<select id="storage" class="round">
  ${data.variables[1]}
</select></td>
<td class="sep2"><span class="dbminputlabel">Имя переменной</span><br>
<input id="varName" class="round" type="text"></td>
</tr>

</table>
</div>

<style>

.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}

table{width:100%}
.sep1{padding:0px 8px 0px 0px}
.sep2{padding:0px 0px 0px 0px}
</style>`;
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
          console.log(`Запуск URL: [${url}] В вашем браузере по умолчанию.`);
          require('child_process').execSync(`start ${url}`);
        });
      }
    }
  },

  async action(cache) {
    const data = cache.actions[cache.index];
    const storage = parseInt(data.storage, 10);
    const info = parseInt(data.info, 10);
    const path = require('path');
    const fs = require('fs');
    const varName = this.evalMessage(data.varName, cache);
    const filePath = this.evalMessage(data.filePath, cache);
    var sincronizar = 0

    if (!filePath) return this.displayError('Вставьте путь файла!');

    let result;
    switch (info) {
      case 0:
        result = fs.statSync(filePath).size;
        break;
      case 1:
        result = path.extname(/[^/]*$/.exec(filePath)[0]);
        break;
      case 2:
        result = fs.readFileSync(filePath).toString().length;
        break;
      case 3:
        result = Math.round(fs.statSync(filePath).mtimeMs / 1000);
        break;
      case 4:
        result = fs.statSync(filePath).mtime;
        break;
      case 5:
        result = fs.existsSync(filePath);
        break;
      case 6:
        result = fs.readFileSync(filePath).toString();
        break;
      case 7:
        result = path.basename(filePath);
        break;
      case 8:
        result = Math.round(fs.statSync(filePath).birthtimeMs / 1000);
        break;
      case 9:
        result = fs.statSync(filePath).birthtime;
        break;
      case 10:
        const fs = require('fs');
        const child_process = require('child_process');

        sincronizar = 1

        async function getDuration(filePath) {
          return new Promise((resolve, reject) => {
            child_process.execFile('ffprobe.exe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'default=noprint_wrappers=1:nokey=1', filePath], (err, stdout, stderr) => {
              if (err) {
                reject(err);
              } else {
                const duration = parseInt(stdout);
                resolve(duration);
              }
            });
          });
        }

        try {
          result = await getDuration(filePath);
          this.storeValue(result, storage, varName, cache);
        } catch (err) {
          console.error(err);
        }

        break;
    }

    if (sincronizar == 0) {
      this.storeValue(result, storage, varName, cache)
    }

    this.callNextAction(cache);
  },

  mod() { },
};