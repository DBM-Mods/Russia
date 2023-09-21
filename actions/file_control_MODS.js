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

    subtitle(data, presets) {

        const infoc = [
            ``,
            `Создать / Записать`,
            `Добавить`,
            `Вставить`,
            `Удалить`,
            `Скопировать в ${data.copy}${data.nome2}`,
            `Переместить в ${data.copy}`,
            `Переименовать`,
          ];

        if(data.descriptionx == true){
          desccor = data.descriptioncolor
          } else {
            desccor = 'none'
          }
    
        return data.description
        ? `<font style="color:${desccor}">${data.description}</font>`
        : `<font style="color:${desccor}">${data.path}${data.nome}.${data.format} (${infoc[parseInt(data.function, 10)]})</font>`
      },

    fields: ['path', 'nome', 'format', 'function', 'iffalse', 'iffalseVal', 'text', 'texteval', 'addType2', 'copy', 'nome2', 'line', 'descriptioncolor', 'description', 'descriptionx'],

    html(_isEvent, data) {
        return `
        <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.2</div>

    <div style="width: 100%; padding:5px 5px;height: calc(100vh - 160px);overflow:auto">

    <div id="flutuador" style="padding:0px 0px 0px 0px">
<table style="width:100%;"><tr>
<td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Не обязательное поле"></td>
<td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
</tr></table>
</div>
    
        <table style="width:100%"><tr>
        <td style="width:calc(50% - 50px)">
            <span class="dbminputlabel">Путь к файлу</span>
            <input type="text" id="path" class="round" value="./resources" placeholder="Прим: ./resources/">
        </td>
        <td style="width:calc(50% - 50px)">
            <span class="dbminputlabel">Имя файла</span>
            <input type="text" id="nome" class="round" placeholder="Прим: dbmmods">
        </td>

        <td style="width: 100px">
            <span class="dbminputlabel">Формат</span>
            <input type="text" id="format" class="round" placeholder="Прим: js">
        </td>
        </tr></table>

        <xinspace>
        
<div style="float:left;width:calc(50% - 10px)" id="xinelasx">
        <span class="dbminputlabel">Действие</span>
        <select id="function" class="round" onchange="glob.change(this)">
            <option value="1" selected>Создать / Записать</option>
            <option value="2">Добавить</option>
            <option value="3">Вставить</option>
            <option value="4">Удалить</option>
            <option value="5">Копировать</option>
            <option value="6">Переместить</option>
            <option value="7">Переименовать</option>
        </select></div>
        
        <div class="campo1 campo2" style="float:right;width:calc(50% - 10px)">
            <span class="dbminputlabel">Строка</span>
            <input type="text" id="line" class="round" placeholder="Оставьте пустым, чтобы добавить в первую строку">
        </div>

        <br><br>
        <div class="campo1">
        <br>
            <span class="dbminputlabel" name="xinelas">Текст</span><div style="float:right;margin-top:-5px"><dbm-checkbox id="addType2" onchange="glob.onChange2(this)" label="EVAL"></dbm-checkbox></div>
            <div id="valor"><textarea id="text" class="round" rows="5" id="rows"></textarea></div>
            <div style="display:none" id="valoreval"><textarea id="texteval" class="round" rows=" 5" name="is-eval" id="rows"></textarea></div>
        </div>

        <div class="campo3">
        <br>
            <span class="dbminputlabel" id="loc">Копировать в папку</span>
            <input type="text" class="round" id="copy" value="./resources/" placeholder="Прим: ./resources/">
</div>
<div class="campo4"><br>
            <span class="dbminputlabel" id="nome2x">Новое имя файла</span>
            <input type="text" id="nome2" class="round" placeholder="Прим: dbmmods2">

        </div>
        
        <br>

        <div style="float: left; width: 35%">
            <span class="dbminputlabel">При ошибке</span><br>
            <select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
              <option value="0">Продолжить действия</option>
              <option value="1" selecionado>Остановить последовательность действий</option>
              <option value="2">Перейти к действию</option>
              <option value="3">Пропустить действия</option>
              <option value="4">Перейти к якорю</option>
            </select>
        </div>

        <div id="iffalseContainer" style="display: none; float: right; width: 60%;">
            <span id="xinelas" class="dbminputlabel">К</span>
            <br>
            <input id="iffalseVal" class="round" type="text">
        </div>

        <style>
        td{padding:5px;}xinspace{margin:5px 0px 0px 0px;display:block}
        .dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
        .dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}
        </style>
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
                document.querySelector("[id='xinelas']").innerText = (`Пропустить действия`);
            }
            if (event.value == "4") {
                document.querySelector("[id='xinelas']").innerText = (`Имя якоря`);
            }
        }

        glob.onComparisonChanged(document.getElementById("iffalse"));

        glob.onChange2 = function (event) {
            if (event.value == true) {
                document.getElementById("valoreval").style.display = null;
                document.getElementById("valor").style.display = "none";
                document.querySelector("[name='xinelas']").innerText = (`EVAL`);
            }
            if (event.value == false) {
                document.getElementById("valoreval").style.display = "none";
                document.getElementById("valor").style.display = null;
                document.querySelector("[name='xinelas']").innerText = (`Текст`);
            }
        };

        glob.onChange2(document.getElementById("addType2"));

        glob.change = function (event) {
            const value = parseInt(event.value);

            if (value == 0) {
                for (var i = 0; i < document.querySelectorAll(".campo1").length; i++) {
                    document.querySelectorAll(".campo1")[i].style.display = "none";
                }
                document.querySelector(".campo3").style.display = "none";
                document.querySelector(".campo4").style.display = "none";
                document.getElementById("xinelasx").style.width = 100 + "%";
            } else if (value == 1 || value == 2) {
                for (var i = 0; i < document.querySelectorAll(".campo1").length; i++) {
                    document.querySelectorAll(".campo1")[i].style.display = "block";
                }
                document.querySelector(".campo2").style.display = "none";
                document.querySelector(".campo3").style.display = "none";
                document.querySelector(".campo4").style.display = "none";
                document.getElementById("xinelasx").style.width = 100 + "%";
            } else if (value == 3) {
                for (var i = 0; i < document.querySelectorAll(".campo1").length; i++) {
                    document.querySelectorAll(".campo1")[i].style.display = "block";
                }
                document.querySelector(".campo2").style.display = "block";
                document.querySelector(".campo3").style.display = "none";
                document.querySelector(".campo4").style.display = "none";
                document.getElementById("xinelasx").style.width = 50 + "%";
            } else if (value == 4) {
                for (var i = 0; i < document.querySelectorAll(".campo1").length; i++) {
                    document.querySelectorAll(".campo1")[i].style.display = "none";
                }
                document.querySelector(".campo2").style.display = "none";
                document.querySelector(".campo3").style.display = "none";
                document.querySelector(".campo4").style.display = "none";
                document.getElementById("xinelasx").style.width = 100 + "%";
            } else if (value == 5) {
                for (var i = 0; i < document.querySelectorAll(".campo1").length; i++) {
                    document.querySelectorAll(".campo1")[i].style.display = "none";
                }
                document.querySelector(".campo2").style.display = "none";
                document.querySelector(".campo3").style.display = "block";
                document.querySelector(".campo4").style.display = "block";
                document.getElementById("loc").innerHTML = "Копировать в папку";
                document.getElementById("nome2x").innerHTML = "Новое имя файла";
                document.getElementById("xinelasx").style.width = 100 + "%";
            } else if (value == 6) {
                for (var i = 0; i < document.querySelectorAll(".campo1").length; i++) {
                    document.querySelectorAll(".campo1")[i].style.display = "none";
                }
                document.querySelector(".campo2").style.display = "none";
                document.querySelector(".campo3").style.display = "block";
                document.querySelector(".campo4").style.display = "none";
                document.getElementById("loc").innerHTML = "Переместить в папку";
                document.getElementById("xinelasx").style.width = 100 + "%";
            } else if (value == 7) {
                for (var i = 0; i < document.querySelectorAll(".campo1").length; i++) {
                    document.querySelectorAll(".campo1")[i].style.display = "none";
                }
                document.querySelector(".campo2").style.display = "none";
                document.querySelector(".campo3").style.display = "none";
                document.querySelector(".campo4").style.display = "block";
                document.getElementById("nome2x").innerHTML = "Переименовать в";
                document.getElementById("xinelasx").style.width = 100 + "%";
            }
        }

        glob.change(document.getElementById("function"));

        const xinelaslinks = document.getElementsByClassName('xinelaslink');
        for (let x = 0; x < xinelaslinks.length; x++) {
          const xinelaslink = xinelaslinks[x];
          const url = xinelaslink.getAttribute('data-url');
          if (url) {
           xinelaslink.setAttribute('title', url);
           xinelaslink.addEventListener('click', (e) => {
              e.stopImmediatePropagation();
              console.log(`Запуск URL: [${url}] в браузере.`);
              require('child_process').execSync(`start ${url}`);
            });
          }
        }

    },

    async action(cache) {
        const data = cache.actions[cache.index];
        const info = parseInt(data.function, 10);
        fs = require("fs-extra");
        path = require('path');

        try {
            if (!this.evalMessage(data.path, cache)) {
                throw "File Control MOD: Введите местоположение файла!";
            }

            const diretorio = path.normalize(this.evalMessage(data.path, cache));

            const nome = this.evalMessage(data.nome, cache);
            const nome2 = this.evalMessage(data.nome2, cache);
            const format = this.evalMessage(data.format, cache);

            if (!nome) {
                throw "File Control MOD: Введите имя файла!";
            }

            if (!format) {
                throw "File Control MOD: Введите формат файла!";
            }

            const filePath = path.join(diretorio, nome + "." + format);

            if (data.addType2 == true) {
                text = this.evalMessage(data.texteval, cache)
                text = this.eval(text, cache)
                text = JSON.stringify(text)
            } else {
                text = this.evalMessage(data.text, cache)
            }

            switch (info) {
                case 1:
                    fs.writeFileSync(filePath, text);
                    break;
                case 2:
                    fs.appendFileSync(filePath, text);
                    break;
                case 3:
                    const insertLine = require('insert-line');
                    const line = this.evalMessage(data.line, cache) || 1;
                    insertLine(filePath).content(text).at(line).then((err) => { });
                    break;
                case 4:
                    fs.unlinkSync(filePath);
                    break;
                case 5:
                    if (!this.evalMessage(data.copy, cache)) {
                        throw "File Control MOD: Укажите местоположение для копирования файла!";
                    }

                    const diretorio2 = path.normalize(this.evalMessage(data.copy, cache));
                    const filePath2 = path.join(diretorio2, nome2 + "." + format);

                    fs.copySync(filePath, filePath2);
                    break;
                case 6:
                    if (!this.evalMessage(data.copy, cache)) {
                        throw "File Control MOD: Укажите местоположение для копирования файла!";
                    }

                    if (!fs.existsSync(data.copy)) {
                        fs.mkdirSync(data.copy, {
                            recursive: true
                        });
                    }
                    var oldPath = this.evalMessage(data.path, cache) + this.evalMessage(data.nome, cache) + '.' + this.evalMessage(data.format, cache)
                    var newPath = this.evalMessage(data.copy, cache) + this.evalMessage(data.nome, cache) + '.' + this.evalMessage(data.format, cache)
                    fs.renameSync(oldPath, newPath)
                    break;
                case 7:
                    var oldPath = this.evalMessage(data.path, cache) + this.evalMessage(data.nome, cache) + '.' + this.evalMessage(data.format, cache)
                    var newPath = this.evalMessage(data.path, cache) + this.evalMessage(data.nome2, cache) + '.' + this.evalMessage(data.format, cache)
                    fs.renameSync(oldPath, newPath)
                    break;
            }



        } catch (err) {
            this.executeResults(false, data, cache);
        }
        this.callNextAction(cache);
    },

    mod() { },
};
