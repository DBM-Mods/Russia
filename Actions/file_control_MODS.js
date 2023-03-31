module.exports = {
    name: 'File Control MOD',
    section: 'File Stuff',
    meta: {
      version: '2.1.7',
      preciseCheck: true,
      author: '[Tempest - 321400509326032897]<br>[XinXyla - 172782058396057602]',
      authorUrl: 'https://github.com/DBM-Mods/Russia',
      downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
    },

    subtitle: function(data) {
      return ``;
    },
  
    fields: ['path', 'nome', 'format', 'function', 'iffalse', 'iffalseVal', 'text', 'copy', 'nome2', 'line'],
  
    html(_isEvent, data) {
      return `
        <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.1</div>
        <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>
    
        <table style="width:100%"><tr>
        <td style="width:calc(50% - 50px)">
            <span class="dbminputlabel">Расположение файла</span>
            <input type="text" id="path" class="round" value="./resources" placeholder="Exemplo: ./resources/">
        </td>
        <td style="width:calc(50% - 50px)">
            <span class="dbminputlabel">Имя файла</span>
            <input type="text" id="nome" class="round" placeholder="Exemplo: dbmmods">
        </td>

        <td style="width: 100px">
            <span class="dbminputlabel">Формат</span>
            <input type="text" id="format" class="round" placeholder="Пример: js">
        </td>
        </tr></table>

        <xinspace>
<div style="float:left;width:calc(50% - 10px)" id="xinelasx">
        <span class="dbminputlabel">Функция</span>
        <select id="function" class="round" onchange="glob.change(this)">
            <option value="1" selected>Создать / написать</option>
            <option value="2">Добавлять</option>
            <option value="3">Вставить</option>
            <option value="4">Удалить</option>
            <option value="5">Копия</option>
            <option value="6">Двигать</option>
            <option value="7">Переименовать</option>
        </select></div>
        <div class="campo1 campo2" style="float:right;width:calc(50% - 10px)">
            <span class="dbminputlabel">Линия</span>
            <input type="text" id="line" class="round" placeholder="Оставьте это пустым, чтобы добавить к первой строке">
        </div>
        <br><br>
        <div class="campo1">
        <br>
            <span class="dbminputlabel">Текст</span>
            <textarea id="text" class="round" rows="7" id="rows"></textarea>
        </div>

        <div class="campo3">
        <br>
            <span class="dbminputlabel" id="loc">Копия для местоположения</span>
            <input type="text" class="round" id="copy" value="./resources/" placeholder="Пример: ./resources/">
</div>
<div class="campo4"><br>
            <span class="dbminputlabel" id="nome2x">Новое имя файла</span>
            <input type="text" id="nome2" class="round" placeholder="Пример: dbmmods2">

        </div>
        
        <br>

        <div style="float: left; width: 35%">
            <span class="dbminputlabel">Если действие не удается</span><br>
            <select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
              <option value="0">Продолжать</option>
              <option value="1" selecionado>Остановить последовательность действий</option>
              <option value="2">Перейти к действию</option>
              <option value="3">Пропустить следующие действия</option>
              <option value="4">Перейти к якову действия</option>
            </select>
        </div>

        <div id="iffalseContainer" style="display: none; float: right; width: 60%;">
            <span id="xinelas" class="dbminputlabel">для</span>
            <br>
            <input id="iffalseVal" class="round" type="text">
        </div>

        <style>td{padding:5px;}xinspace{margin:5px 0px 0px 0px;display:block}</style>
      `;
    },
  
    init() {
        
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

        glob.change = function(event) {
            const value = parseInt(event.value);

            if(value == 0) {
                for(var i = 0; i < document.querySelectorAll(".campo1").length; i++) {
                    document.querySelectorAll(".campo1")[i].style.display = "none";
                }
                document.querySelector(".campo3").style.display = "none";
                document.querySelector(".campo4").style.display = "none";
                document.getElementById("xinelasx").style.width = 100+"%";
            } else if(value == 1 || value == 2) {
                for(var i = 0; i < document.querySelectorAll(".campo1").length; i++) {
                    document.querySelectorAll(".campo1")[i].style.display = "block";
                }
                document.querySelector(".campo2").style.display = "none";
                document.querySelector(".campo3").style.display = "none";
                document.querySelector(".campo4").style.display = "none";
                document.getElementById("xinelasx").style.width = 100+"%";
            } else if(value == 3) {
                for(var i = 0; i < document.querySelectorAll(".campo1").length; i++) {
                    document.querySelectorAll(".campo1")[i].style.display = "block";
                }
                document.querySelector(".campo2").style.display = "block";
                document.querySelector(".campo3").style.display = "none";
                document.querySelector(".campo4").style.display = "none";
                document.getElementById("xinelasx").style.width = 50+"%";
            } else if(value == 4) {
                for(var i = 0; i < document.querySelectorAll(".campo1").length; i++) {
                    document.querySelectorAll(".campo1")[i].style.display = "none";
                }
                document.querySelector(".campo2").style.display = "none";
                document.querySelector(".campo3").style.display = "none";
                document.querySelector(".campo4").style.display = "none";
                document.getElementById("xinelasx").style.width = 100+"%";
            } else if(value == 5) {
                for(var i = 0; i < document.querySelectorAll(".campo1").length; i++) {
                    document.querySelectorAll(".campo1")[i].style.display = "none";
                }
                document.querySelector(".campo2").style.display = "none";
                document.querySelector(".campo3").style.display = "block";
                document.querySelector(".campo4").style.display = "block";
                document.getElementById("loc").innerHTML = "Копировать в папку";
                document.getElementById("nome2x").innerHTML = "Новое имя файла";
                document.getElementById("xinelasx").style.width = 100+"%";
            } else if(value == 6) {
            for(var i = 0; i < document.querySelectorAll(".campo1").length; i++) {
                document.querySelectorAll(".campo1")[i].style.display = "none";
            }
            document.querySelector(".campo2").style.display = "none";
            document.querySelector(".campo3").style.display = "block";
            document.querySelector(".campo4").style.display = "none";
            document.getElementById("loc").innerHTML = "Перейти в папку";
            document.getElementById("xinelasx").style.width = 100+"%";
        } else if(value == 7) {
            for(var i = 0; i < document.querySelectorAll(".campo1").length; i++) {
                document.querySelectorAll(".campo1")[i].style.display = "none";
            }
            document.querySelector(".campo2").style.display = "none";
            document.querySelector(".campo3").style.display = "none";
            document.querySelector(".campo4").style.display = "block";
            document.getElementById("nome2x").innerHTML = "Переименовать в";
            document.getElementById("xinelasx").style.width = 100+"%";
        }
        }

        glob.change(document.getElementById("function"));
    },
  
    async action(cache) {
        const data = cache.actions[cache.index];
        const info = parseInt(data.function, 10);
        fs = require("fs-extra");
        path = require('path');

        try {
            if(!this.evalMessage(data.path, cache)) {
                throw "File Control MOD: введите местоположение файла!";
            }

            const diretorio = path.normalize(this.evalMessage(data.path, cache));

            const nome = this.evalMessage(data.nome, cache);
            const nome2 = this.evalMessage(data.nome2, cache);
            const format = this.evalMessage(data.format, cache);

            if(!nome) {
                throw "File Control MOD: введите имя файла!";
            }

            if(!format) {
                throw "File Control MOD: введите формат файла!";
            }

            const filePath = path.join(diretorio, nome + "." + format);

            const text = this.evalMessage(data.text, cache);

            switch(info) {
                case 1:
                    fs.writeFileSync(filePath, text);
                    break;
                case 2:
                    fs.appendFileSync(filePath, text);
                    break;
                case 3:
                    const insertLine = require('insert-line');
                    const line = this.evalMessage(data.line, cache) || 1;
                    insertLine(filePath).content(text).at(line).then((err) => {});
                    break;
                case 4:
                    fs.unlinkSync(filePath);
                    break;
                case 5:
                    if(!this.evalMessage(data.copy, cache)) {
                        throw "File Control MOD: Введите местоположение, чтобы onder скопировал файл!";
                    }

                    const diretorio2 = path.normalize(this.evalMessage(data.copy, cache));
                    const filePath2 = path.join(diretorio2,nome2 + "." + format); 

                    fs.copySync(filePath, filePath2);
                    break;
                    case 6:
                        if(!this.evalMessage(data.copy, cache)) {
                            throw "File Control MOD: Введите местоположение, чтобы скопировать файл!";
                        }

                        if (!fs.existsSync(data.copy)) {
                            fs.mkdirSync(data.copy, {
                                recursive: true
                            });
                        }
                        var oldPath = this.evalMessage(data.path, cache)+this.evalMessage(data.nome, cache)+'.'+this.evalMessage(data.format, cache)
                        var newPath = this.evalMessage(data.copy, cache)+this.evalMessage(data.nome, cache)+'.'+this.evalMessage(data.format, cache)
                        fs.renameSync(oldPath, newPath)
                        break;
                        case 7:   
                            var oldPath = this.evalMessage(data.path, cache)+this.evalMessage(data.nome, cache)+'.'+this.evalMessage(data.format, cache)
                            var newPath = this.evalMessage(data.path, cache)+this.evalMessage(data.nome2, cache)+'.'+this.evalMessage(data.format, cache)
                            fs.renameSync(oldPath, newPath)
                            break;
            }



        } catch(err) {
            this.executeResults(false, data, cache);
        }
        this.callNextAction(cache);
    },
  
    mod() {},
};
