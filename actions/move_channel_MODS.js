module.exports = {
  name: "Move Channel MOD",
  section: "Channel Control",
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

    const info2 = [`"ID категории: ${data.find2}"`, `"Имя категории: ${data.find2}"`, `"Та же категория"`];
    const mover = [``, `на "Позицию: ${data.posicao}"`];
    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">Переместить канал в ${info2[parseInt(data.info2, 10)]} ${mover[parseInt(data.mover, 10)]}</font>`
  },


  fields: ["info", "find", "info2", "find2", "mover", "posicao", "iffalse", "iffalseVal", "errcmd", "sync", "descriptioncolor", "description", "descriptionx", "errcmd", "errs", "errv", "actionserr"],


  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.2</div>

    <div style="width: 100%; padding:5px 5px;height: calc(100vh - 160px);overflow:auto">

    <div id="flutuador" style="padding:0px 0px 15px 0px">
<table style="width:100%;"><tr>
<td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Не обязательное поле"></td>
<td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
</tr></table>
</div>

    <table>
    <tr>
    <td class="xin1"><span class="dbminputlabel">Канал для перемещения</span><br>
		<select id="info" class="round" onchange="glob.onComparisonChanged4(this)">
     <option value="4" selected>Текущий канал</option>
     <option value="0">ID канала</option>
     <option value="1">Имя канала</option>
     <option value="2">Тема канала</option>
     <option value="3">Положение канала</option>
		</select></td>
    <td class="xin2"><div id="oculta3"><span class="dbminputlabel" id="xinxylaalter">Значение</span><br>
		<input id="find" class="round" type="text"></div></td>
    </tr>

    <tr>
    <td class="xin1"><span class="dbminputlabel">Переместить в другую категорию</span><br>
    <select id="info2" class="round" onchange="glob.onComparisonChanged2(this)">
      <option value="2">Нет</option>
      <option value="0" selected>ID категории</option>
      <option value="1">Имя категории</option>
    </select></td>
    <td class="xin2"><div id="oculta"><span class="dbminputlabel">Значение</span><br>
    <input id="find2" class="round" type="text"></div></td>
    </tr>


    <tr>
    <td class="xin1"><span class="dbminputlabel">Переместить в другую позицию</span><br>
    <select id="mover" class="round" onchange="glob.onComparisonChanged3(this)">
      <option value="0" selected>Нет</option>
      <option value="1">Да</option>
    </select></td>
    <td class="xin2"><div id="oculta2"><span class="dbminputlabel">Позиция</span><br>
    <input id="posicao" class="round" value="0" type="text"></div></td>
    </tr>
    </table>

    <div id="oculta4">
    <span class="dbminputlabel">Права на канал</span><br>
      <select id="sync" class="round">
      <option value="0" selected>Синхронизировать с правами категории</option>
      <option value="1">Синхронизировать с правами родительской категории</option>
      <option value="2">Сохранить права на канал</option>
      </select>
      <br>
      </div>
    <div>
    <table>
      <tr>
      <td class="col1"><span class="dbminputlabel">Хранить ошибку</span><br>
      <select id="errs" value="0" class="round" onchange="glob.variableChange(this, 'varerrsv')">
        ${data.variables[0]}
      </select></td>
      <td class="col2"><div id="varerrsv"><span class="dbminputlabel">Имя переменной</span><br>
      <input id="errv" class="round" type="text"></div></td>
      </tr>
      </table>
    </div>

    <br>

    <div>
      <div style="float: left; width: 38%" id="xinext">
      <span class="dbminputlabel">При ошибке</span><br>
      <select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
      <option value="0" selected>Продолжить действия</option>
      <option value="1">Остановить последовательность действий</option>
      <option value="2">Перейти к действию</option>
      <option value="3">Пропустить действия</option>
      <option value="4">Перейти к якорю</option>
      <option value="5">Выполнить действия и остановиться</option>
      <option value="6">Выполнить действия и продолжить</option>
      </select>
      <br>
      </div>
      <div id="iffalseContainer" style="display: none; float: right; width: 60%;"><div id="xincontrol"><span id="xinelas" class="dbminputlabel">Para</span><br><input id="iffalseVal" class="round" name="actionxinxyla" type="text"></div>
      </div><br></div>
      <div id="containerxin" style="width:100%">
      <br><br>
      <action-list-input id="actionserr" height="calc(100vh - 450px)"></action-list-input>
      </div>
      
    

      <br><br>

    <span class="dbminputlabel">Опции</span><br>
    <div style="padding:10px;background:rgba(255,255,255,0.2)">
<dbm-checkbox id="errcmd" label="Отображать ошибку в консоли" checked></dbm-checkbox> 
</div>

    </div>

    <style>
    table{width:100%}
    .xin1{padding:0px 6px 20px 0px;width:50%}
    .xin2{padding:0px 0px 20px 0px;width:50%}
    .col1{width:35%;padding:0px 10px 0px 0px}
    .col2{width:65%}
    .dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
    .dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}
    </style>
`;
  },

  init: function () {
    const { glob, document } = this;

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


    glob.onComparisonChanged = function (event) {
      if (event.value > "1") {
        document.getElementById("iffalseContainer").style.display = null;
      } else {
        document.getElementById("iffalseContainer").style.display = "none";
      }
      if (event.value == "5" || event.value == "6") {
        document.getElementById("containerxin").style.display = null;
        document.getElementById("xincontrol").style.display = "none";
        document.getElementById("xinext").style.width = "100%";
      } else {
        document.getElementById("containerxin").style.display = "none";
        document.getElementById("xincontrol").style.display = null;
        document.getElementById("xinext").style.width = "38%";
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
    glob.variableChange(document.getElementById('errs'), 'varerrsv');


    glob.onComparisonChanged2 = function (event) {
      if (event.value == "2") {
        document.getElementById("oculta").style.display = "none";
        document.getElementById("oculta4").style.display = "none";
      } else {
        document.getElementById("oculta").style.display = null;
        document.getElementById("oculta4").style.display = null;
      }
    }

    glob.onComparisonChanged2(document.getElementById("info2"));

    glob.onComparisonChanged(document.getElementById("iffalse"));


    glob.onComparisonChanged3 = function (event) {
      if (event.value == "0") {
        document.getElementById("oculta2").style.display = "none";
      } else {
        document.getElementById("oculta2").style.display = null;
      }
    }

    glob.onComparisonChanged3(document.getElementById("mover"));


    glob.onComparisonChanged4 = function (event) {
      if (event.value == "0") {
        document.getElementById("oculta3").style.display = null;
        document.querySelector("[id='xinxylaalter']").innerText = (`ID`);
      }
      if (event.value == "1") {
        document.getElementById("oculta3").style.display = null;
        document.querySelector("[id='xinxylaalter']").innerText = (`Название`);
      }
      if (event.value == "2") {
        document.getElementById("oculta3").style.display = null;
        document.querySelector("[id='xinxylaalter']").innerText = (`Топик`);
      }
      if (event.value == "3") {
        document.getElementById("oculta3").style.display = null;
        document.querySelector("[id='xinxylaalter']").innerText = (`Позиция`);
      }
      if (event.value == "4") {
        document.getElementById("oculta3").style.display = "none";
      }
    }


    glob.onComparisonChanged4(document.getElementById("info"));


  },


  async action(cache) {
    const data = cache.actions[cache.index];
    const server = cache.server;
    if (!server?.channels) {
      this.callNextAction(cache);
      return;
    }
    var errostatus = data.errcmd
    if (errostatus == "" || errostatus == undefined || errostatus == "undefined") { errostatus = true }
    var sync = data.sync
    if (sync === "" || sync === undefined || sync === "undefined") { sync = "0" }
    const info = parseInt(data.info, 10);
    const info2 = parseInt(data.info2, 10);
    const mover = parseInt(data.mover, 10);
    const find = this.evalMessage(data.find, cache);
    const find2 = this.evalMessage(data.find2, cache);
    const posicao = this.evalMessage(data.posicao, cache);
    const canais = server.channels.cache.filter((c) => c.type === "GUILD_TEXT" || c.type === "GUILD_NEWS" || c.type === "GUILD_VOICE");
    const categorias = server.channels.cache.filter((s) => s.type === 'GUILD_CATEGORY');
    let end
    let canal;
    switch (info) {
      case 0:
        canal = canais.get(find);
        break;
      case 1:
        canal = canais.find((c) => c.name === find);
        break;
      case 2:
        canal = canais.find((c) => c.topic === find);
        break;
      case 3:
        const position = parseInt(find, 10);
        canal = canais.find((c) => c.position === position);
        break;
      case 4:
        canal = await this.getChannelFromData(0, 0, cache);
        break;
      default:
        break;
    }
    if (info2 == 0) { categoria = categorias.get(find2) }
    if (info2 == 1) { categoria = categorias.find((e) => e.name === find2) }


    try {


      if (info2 == 0 || info2 == 1) {

        canal.setParent(categoria.id)


        if (sync == "1") {

          canal.lockPermissions()

        }

        if (sync == "2") {

          const canalantigo = canal
          canal.permissionOverwrites.set(canalantigo.permissionOverwrites.cache)

        }

      }
      if (mover == 1) {

        await canal.setPosition(posicao)

      }
    } catch (error) {

      if (data.errcmd === true) {
        console.log('Ошибка: ' + cache.toString() + ' - Действие ' + (cache.index + 1) + '# ' + data.name)
        console.log(`${error.stack ? error.stack : error}`)
      }

      this.storeValue(error, parseFloat(data.errs), this.evalMessage(data.errv, cache), cache)

      if (data.iffalse == "5" || data.iffalse == "6") {

        if (data.iffalse == "5") {
          this.executeSubActions(data.actionserr, cache)
        } else {
          this.executeSubActionsThenNextAction(data.actionserr, cache)
        }

      } else {
        this.executeResults(false, data, cache);
      }

    }
  },


  mod() { },
};
