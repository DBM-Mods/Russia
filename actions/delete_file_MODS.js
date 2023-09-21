module.exports = {
  name: "Delete File MOD",
  section: "File Stuff",
  meta: {
      version: '2.1.7',
      preciseCheck: true,
      author: '[XinXyla - 172782058396057602]',
      authorUrl: 'https://github.com/DBM-Mods/Russia',
      downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
    },
  
  
  subtitle: function(data) {
    return `Удалить [${data.filePath}]`;
  },
  
  fields: ["filePath","iffalse","iffalseVal"],
  
  html: function(isEvent, data) {
    return `
      <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.1</div>
      <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>
      <div style="float: left; width: 99%">
      <span class="dbminputlabel">Файл</span><br>
      <input id="filePath" placeholder="./resources" class="round" type="text">
      <br>
  
          <hr class="subtlebar">
  
  <br>
  <div style="padding-top: 8px;">
  <div style="float: left; width: 40%">
  <span class="dbminputlabel">Если не удалён</span><br>
  <select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
  <option value="0">Продолжить действия</option>
  <option value="1" selected>Остановить последовательность действий</option>
  <option value="2">Перейти к действию</option>
  <option value="3">Пропустить следующие действия</option>
  <option value="4">Перейти к якору</option>
  </select>
  </div>
  
  <div id="iffalseContainer" style="display: none; float: right; width: 55%;"><span id="xinelas" class="dbminputlabel">Para</span><br><input id="iffalseVal" class="round" name="actionxinxyla" type="text"></div>
  </div>
  <br><br><br><br>
  
  Будьте осторожны, после удаления файл не может быть восстановлен!
      </div>`
  },
  
  
  init: function () {
      const { glob, document } = this;
  
  
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
        document.querySelector("[id='xinelas']").innerText = (`Количество действий`);
      }
      if (event.value == "4") {
        document.querySelector("[id='xinelas']").innerText = (`Имя якоря`);
      }
    }
  
      glob.onComparisonChanged(document.getElementById("iffalse"));
  
  
    },
  
  action: function (cache) {
      const data = cache.actions[cache.index];
  result = false
  try {
      const fs = require('fs');
      const filePath = this.evalMessage(data.filePath, cache);
      if (filePath) {
          result = fs.existsSync(filePath)
        } else {
          result = false
        }
      if (filePath) {         
          fs.exists(`${filePath}`, function(exists) {
              if(exists) {
                  fs.unlink(`${filePath}`, (err) => {
                      if (err) return console.log(`Что-то пошло не так при удалении: [${err}]`);
                      console.log(`Файл удалён > [${filePath}]`);
                    });
              } else {
                  console.log('Файл не найден, нет ничего для удаления.');
              }
            });
  
      } else {
      console.log(`Не сущетсвует путь к файлу.`);
      }
  } catch (err) {
      console.log("Ошибка!" + err.stack ? err.stack : err);
  
  }
  
  if(result == true){this.callNextAction(cache);}else{
  this.executeResults(result, data, cache)}
  },
  
  
    mod() {},
  };
  