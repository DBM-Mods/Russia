module.exports = {
  name: "Create Forum Channel MOD",
  section: "Channel Control",
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[xinxyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },


  subtitle(data) {

    if (data.descriptionx == true) {
      desccor = data.descriptioncolor
    } else {
      desccor = 'none'
    }

    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">${data.channelName}</font>`
  },


  variableStorage(data, varType) {
    const type = parseInt(data.storage, 10);
    if (type !== varType) return;
    return [data.varName, "Channel"];
  },



  fields: ["channelName", "topic", "position", "storage", "varName", "categoryID", "emoji", "slowmodepost", "reason", "nsfw", "errcmd", "errs", "errv", "iffalse", "iffalseVal", "actionsfalse", "descriptioncolor", "description", "descriptionx", "tags"],


  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновление</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.2</div>

    <div style="width: 100%; padding:5px 5px;height: calc(100vh - 170px);overflow:auto">

    <tab-system style="margin-top: 0;">

		<tab label="Общий" icon="align left">
				<div style="padding:8px">

        <span class="dbminputlabel">Имя</span><br>
<input id="channelName" class="round" type="text">

<br>

<table><tr><td class="sep3">
<span class="dbminputlabel">Идентификатор категории</span><br>
<input id= "categoryID" class="round" type="text" placeholder="Оставьте пустым, если не относится к категории">
</td>
<td class="sep4">
<span class="dbminputlabel">Позиция</span><br>
<input id="position" class="round" type="text" placeholder="Оставьте пустым для стандарта">
</td></tr></table>


        <br>

        <span class="dbminputlabel">Правила публикации</span><br>
        <textarea id="topic" rows="6" style="width: 100%; font-family: monospace; white-space: nowrap;"></textarea>
        <xinspace><xinspace>
        <div id="contador" style="float:right;text-align:right;position:relative;width:22%">0 символов</div>
        <xinspace><xinspace><xinspace>
        
        
        </div>
        </tab>

        <tab label="Теги" icon="tags">
				<div style="width: 100%; padding:8px;height: calc(100vh - 220px);overflow:auto">

        <dialog-list id="tags" fields='["name", "moderated", "emoji", "val1", "val2", "comparar", "formula"]' dialogTitle="Информацию о теге" dialogResizable dialogWidth="540" dialogHeight="500" listLabel="Теги" listStyle="height: calc(100vh - 280px);" itemName="Field" itemCols="1" itemHeight="25px;" itemTextFunction="'<table style=width:100%><tr><td style=width:50%>Имя: ' + data.name + '</td></tr></table>'" itemStyle="text-align: left; line-height: 25px;">
        <div style="height: calc(100vh - 60px);overflow:auto">

<div style="padding: 16px;background:rgba(0,0,0,0.3)">

<span class="dbminputlabel">Отображение тега</span><br>
<select id="formula" class="round">
<option value="0" selected>Установить тег / Игнорируйте сравнения ниже</option>
<option value="1">Установить тег только в том случае если получено значение False</option>
<option value="2">Установить тег только в том случае если получено значение True</option>
</select>

<br>

<table style="width: 100%;">
<tr>
  <td style="width:33%";">
    <span class="dbminputlabel">Значение A</span>
    <input id="val1" class="round" type="text">
  </td>
  <td style="width:33%;padding:0px 6px 0px 6px">
  <span class="dbminputlabel">Сравнения</span><br>
  <select id="comparar" class="round">
  <optgroup label="Номер или текст">
    <option value="0">Существует</option>
    <option value="1" selected>Равно</option>
    <option value="2">Точно так же</option>
  </optgroup>
  <optgroup label="Число">
    <option value="3">Меньше чем</option>
    <option value="13">Меньше или равно</option>
    <option value="4">Больше тогда</option>
    <option value="12">Больше или равно</option>
    <option value="19">Это четное число?</option>
    <option value="20">Это нечетное число?</option>
    <option value="21">Это число?</option>
  </optgroup>
  <optgroup label="Текст">
    <option value="6">Соответствует регулярному выражению</option>
    <option value="14">Соответствует полному регулярному выражению</option>
    <option value="7">Длина больше, чем</option>
    <option value="8">Длина меньше, чем</option>
    <option value="9">Длина равена</option>
    <option value="10">Начинается с</option>
    <option value="11">Заканчивается</option>
    <option value="16">Есть ли у него акценты?</option>
    <option value="18">Равны словам  ["a" , "b" , "c"]</option>
    <option value="24">Это текст?</option>
    <option value="23">Это URL адрес изображения?</option>
    <option value="25">Это URL?</option>
    <option value="26">Электронная почта существует?</option>
  </optgroup>
  <optgroup label="Текст ~ включает">
    <option value="5">Включает в себя точно</option>
    <option value="29">Включает ~ Игнорировать Нижний/Верхний Регистр</option>
    <option value="30">Включает ~ Игнорировать акценты</option>
    <option value="31">Включает в себя ~ игнорировать строчные и заглавные & акцентуации</option>
    <option value="17">Включает точно ["a" , "b" , "c"]</option>
    <option value="27">Включает URL?</option>
    <option value="28">Включите приглашение от Discord?</option>
    <option value="32">Включает именно это слово</option>
    <option value="33">Включает слово ~ игнорировать нижний/верхний регистр</option>
    <option value="34">Включает слово ~ игнорировать ударения</option>
    <option value="35">Включает слово ~ игнорировать акцентуации & строчные и заглавные</option>
    <option value="36">Включает слова ~ используйте девственницы ~ игнорировать акцентуации & в Нижнем и верхнем регистре</option>
  </optgroup>
  <optgroup label="Другие">
    <option value="22">Это список?</option>
    </optgroup>
    </select>
  </td>
  <td style="width:33%;">
    <span class="dbminputlabel">Значение B</span><br>
    <input id="val2" class="round" type="text">
  </td>
</tr>
</table>


  </div>

  <div style="padding: 16px;">

  <div>
    <span class="dbminputlabel">Имя тега</span><br>
    <input id="name" class="round" type="text">
  </div>

  <br>

  <div>
  <span class="dbminputlabel">Разрешить применение тега только модераторам [true/false]</span><br>
  <input id="moderated" class="round" type="text" value="false">
</div>

<br>

<div>
<span class="dbminputlabel">Emoji или пользовательский идентификатор emoji</span><br>
<input id="emoji" class="round" type="text" placeholder="Оставьте пустым, чтобы не ставить">
</div>

  </div>
  </div>
</dialog-list>

        </div>
        </tab>

		<tab label="Конфиг" icon="cogs">
				<div style="width: 100%; padding:8px;height: calc(100vh - 220px);overflow:auto">

        <div>
        <table style="width:100%;"><tr>
        <td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Оставьте пустым, чтобы не использовалось!"></td>
        <td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
        </tr></table>
        </div>

        <br> 

        <span class="dbminputlabel">Медленный режим публикации</span><br>
        <input id="slowmodepost" class="round" type="text" placeholder="Оставьте пустым, чтобы не использовалось!">
        
        <br>

        <span class="dbminputlabel">Возрастное ограничение [true/false]</span><br>
        <input id="nsfw" class="round" type="text" value="false">
        
        <br>

        <span class="dbminputlabel">Эмодзи по умолчанию или пользовательский идентификатор эмодзи</span><br>
        <input id="emoji" class="round" type="text" value="" placeholder="Оставьте пустым, чтобы отключить">
        
        <br>
        
        <span class="dbminputlabel">Причина</span><br>
        <input id="reason" placeholder="Дополнительно" class="round" type="text">
        
        <br>

        
        <table>
        <tr>
        <td class="sep1"><span class="dbminputlabel">Хранить в</span><br>
        <select id="storage" class="round" onchange="glob.variableChange(this, 'varNameContainer')">
          ${data.variables[0]}
        </select></td>
        <td class="sep2"><div id="varNameContainer" style="display: none"><span class="dbminputlabel">Имя переменной</span><br>
        <input id="varName" class="round" type="text"></div></td>
        </tr>
        
        </table>

        </div>
        </tab>

        <tab label="Ошибка" icon="align left">
				<div style="padding:8px">
        
        <span class="dbminputlabel">Опции</span><br><div style="padding:10px;background:rgba(0,0,0,0.2)">
        <dbm-checkbox id="errcmd" label="Выводить ли ошибку в консоль" checked></dbm-checkbox>
        </div>

        <br>

        <div style="padding-top:8px">
        <table>
          <tr>
          <td class="col1"><span class="dbminputlabel">Сохрнаить ошибку в</span><br>
          <select id="errs" value="0" class="round" onchange="glob.variableChanged(this, 'varerrsv')">
            ${data.variables[0]}
          </select></td>
          <td class="col2"><div id="varerrsv"><span class="dbminputlabel">Имя переменной</span><br>
          <input id="errv" class="round" type="text"></div></td>
          </tr>
          </table>
        </div>

        <br>
        
        <div style="overflow:hidden"><xinspace>
        <div style="float: left; width: 38%" id="xinext">
        <span class="dbminputlabel">Если не создался</span><br>
        <select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
        <option value="0" selected>Продолжить действия</option>
        <option value="1">Остановить последовательность действий</option>
        <option value="2">Перейти к действию</option>
        <option value="3">Пропустить следующие действия</option>
        <option value="4">Перейти к якорю действия</option>
        <option value="5">Выполнение действий и остановить</option>
        <option value="6">Выполнить действия и продолжить</option>
        </select>
        </div>
        
        <div id="iffalseContainer" style="display: none; float: right; width: 60%;">
        
        <div id="xincontrol"><span id="xinelas" class="dbminputlabel">Para</span><br>
        <input id="iffalseVal" class="round" name="actionxinxyla" type="text">
        </div>
        
        </div>
        
        <div id="containerxin" style="width:100%">
        <br><br><br>
        <action-list-input id="actionsfalse" style="margin-bottom: 0px" min-height="100" height="calc(100vh - 350px)"></action-list-input>
        </div>

        </div>
        <br>

        </div>
        </tab>
        </tab-system>


</div>

<style>
table{width:100%}
.sep1{padding:0px 8px 0px 0px;width:40%}
.sep2{padding:0px 0px 0px 0px;width:60%}
.sep3{padding:0px 8px 0px 0px;width:60%}
.sep4{padding:0px 0px 0px 0px;width:40%}
.col1{width:35%;padding:0px 10px 0px 0px}
.col2{width:65%}
.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}
xinspace{padding:6px 0px 0px 0px;display:block}
</style>
`;
  },



  init() {
    const { glob, document } = this;

    const textarea = document.getElementById('topic');
    const contador = document.getElementById('contador');
    const comprimentoTexto = textarea.value.length;
    contador.textContent = `${comprimentoTexto} символов`;
    textarea.addEventListener('input', () => {
      const comprimentoTexto = textarea.value.length;
      contador.textContent = `${comprimentoTexto} символов`;
    });

    glob.variableChange = function (event) {
      if (event.value == "0") {
        document.getElementById("varNameContainer").style.display = "none";
      } else {
        document.getElementById("varNameContainer").style.display = null;
      }
    }

    glob.variableChange(document.getElementById("storage"));

    glob.variableChanged = function (event) {
      if (event.value == "0") {
        document.getElementById("varerrsv").style.display = "none";
      } else {
        document.getElementById("varerrsv").style.display = null;
      }
    }

    glob.variableChanged(document.getElementById("errs"));


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
        document.querySelector("[id='xinelas']").innerText = (`Número da ação`);
      }
      if (event.value == "3") {
        document.querySelector("[id='xinelas']").innerText = (`Pular ações`);
      }
      if (event.value == "4") {
        document.querySelector("[id='xinelas']").innerText = (`Nome da âncora`);
      }
    }

    glob.onComparisonChanged(document.getElementById("iffalse"));

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
    const data = cache.actions[cache.index];
    const { server } = cache;
    if (!server?.channels?.create) return this.callNextAction(cache);

    const name = this.evalMessage(data.channelName, cache);
    const nsfw = this.evalMessage(data.nsfw, cache);

    const channelData = { reason: this.evalMessage(data.reason, cache) };

    if (data.topic) {
      channelData.topic = this.evalMessage(data.topic, cache);
    }
    if (data.position) {
      channelData.position = parseInt(this.evalMessage(data.position, cache));
    }
    if (data.categoryID) {
      channelData.parent = this.evalMessage(data.categoryID, cache);
    }
    if (data.slowmodepost) {
      channelData.rateLimitPerUser = parseInt(this.evalMessage(data.slowmodepost, cache), 10);
    }
    channelData.type = 15


    if (nsfw == true || nsfw == "true") {
      channelData.nsfw = true
    }

    if (this.evalMessage(data.emoji, cache) == "") { } else {

      if (this.evalMessage(data.emoji, cache) > 100) {
        channelData.defaultReactionEmoji = { id: this.evalMessage(data.emoji, cache), name: null }
      } else {
        channelData.defaultReactionEmoji = { id: null, name: this.evalMessage(data.emoji, cache) }
      }

    }

    channelData.availableTags = []

    if (data.tags.length > 0) {
      const tags = data.tags;
      for (let i = 0; i < tags.length; i++) {
        const f = tags[i];
        objtag = []

        val1 = this.evalMessage(f.val1, cache);
        val2 = this.evalMessage(f.val2, cache);
        result = true;

        if (f.formula == "1" || f.formula == "2") {
          const compare = parseInt(f.comparar, 10);
          if (compare !== 6) {
            val1 = this.evalIfPossible(val1, cache)
            val2 = this.evalIfPossible(val2, cache)
          }
          switch (compare) {
            case 0:
              result = val1 !== undefined;
              break;
            case 1:
              result = val1 == val2;
              break;
            case 2:
              result = val1 === val2;
              break;
            case 3:
              result = val1 < val2;
              break;
            case 4:
              result = val1 > val2;
              break;
            case 5:
              if (typeof val1?.toString().includes === "function") {
                result = val1.toString().includes(val2);
              }
              break;
            case 6:
              result = Boolean(val1.toString().match(new RegExp('^' + val2 + '$', 'i')));
              break;
            case 7:
              result = Boolean(val1.toString().length > val2);
              break;
            case 8:
              result = Boolean(val1.toString().length < val2);
              break;
            case 9:
              result = Boolean(val1.toString().length == val2);
              break;
            case 10:
              result = val1.toString().startsWith(val2);
              break;
            case 11:
              result = val1.toString().endsWith(val2);
              break;
            case 12:
              result = Boolean(val1 >= val2);
              break;
            case 13:
              result = Boolean(val1 <= val2);
              break;
            case 14:
              result = Boolean(val1.toString().match(new RegExp(val2)));
              break;
            case 16:
              const conditions = ["Ä", "Å", "Á", "Â", "À", "Ã", "Ā", "Ă", "Ą", "ā", "ă", "ą", "ä", "á", "â", "à", "ã", "É", "Ê", "Ë", "È", "Ė", "Ę", "Ě", "Ĕ", "Ē", "ė", "ę", "ě", "ĕ", "ē", "é", "ê", "ë", "è", "Í", "Î", "Ï", "Ì", "İ", "Į", "Ī", "ı", "į", "ī", "í", "î", "ï", "ì", "Ö", "Ó", "Ô", "Ò", "Õ", "Ő", "Ō", "ő", "ō", "ö", "ó", "ô", "ò", "õ", "Ü", "Ú", "Û", "Ų", "Ű", "Ů", "Ū", "ų", "ű", "ů", "ū", "ü", "ú", "û", "ù", "Ç", "Ć", "Č", "ç", "ć", "č", "Ñ", "Ň", "Ņ", "Ń", "ñ", "ň", "ņ", "ń", "Ÿ", "Ý", "ý", "Ź", "Ż", "Ž", "ź", "ż", "ž", "Ł", "Ľ", "Ļ", "Ĺ", "ł", "ľ", "ĺ", "Ķ", "ķ", "Ģ", "Ğ", "ģ", "ğ", "Ď", "ď", "Ś", "Š", "Ş", "ś", "š", "ş", "Ť", "Ț", "Ţ", "ť", "ț", "ţ", "Ŕ", "Ř", "ŕ", "ř"]
              result = conditions.some(el => val1.includes(el));
              break;
            case 17:
              const conditionsX = val2
              result = conditionsX.some(els => val1.includes(els));
              break;
            case 18:
              const conditionsZ = val2
              result = conditionsZ.some(elz => val1 == (elz));
              break;
            case 19:
              result = val1 % 2 == 0
              break;
            case 20:
              result = val1 % 2 == 1
              break;
            case 21:
              result = Boolean(!isNaN(parseFloat(val1.toString().replace(",", "."))));
              break;
            case 22:
              result = Boolean(Array.isArray(val1));
              break;
            case 23:
              const isImageUrl = require("is-image-url");
              result = isImageUrl(val1);
              break;
            case 24:
              result = typeof val1 === "string";
              break;
            case 25:
              const isUrl = require("is-url");
              result = isUrl(val1);
              break;
            case 26:
              const mail = require("email-existence");
              mail.check(val1, (error, response) => {
                result = response;
              });
              break;
            case 27:
              let pattern = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
              result = val1.match(pattern);
              break;
            case 28:
              invite = new RegExp(/(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z]/g);
              result = invite.test(val1);
              break;
            case 29:
              result = val1.toLowerCase().includes(val2.toLowerCase());
              break;
            case 30:
              tratarval1 = val1.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              tratar = val2.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              result = tratarval1.includes(tratar);
              break;
            case 31:
              tratarval1 = val1.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              tratar = val2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              result = tratarval1.toLowerCase().includes(tratar);
              break;
            case 32:
              var words = val1.split(" ");
              result = words.includes(val2);
              break;
            case 33:
              var words = val1.toLowerCase().split(" ");
              result = words.includes(val2.toLowerCase());
              break;
            case 34:
              var words = val1.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
              result = words.includes(val2.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
              break;
            case 35:
              var words = val1.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
              result = words.includes(val2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
              break;
            case 36:
              var separador = val1.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
              var valor2 = val2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(",");
              result = separador.some(els => valor2.includes(els));
              break;
          }
        }

        if (f.formula == "1") {
          if (result == false) {
            result = true
          } else { result = false }
        }

        if (result == true) {

          channelData.availableTags.push

          objtag.name = this.evalMessage(f.name || '\u200B', cache)
          objtag.moderated = this.evalMessage(f.moderated || 'false', cache)

          if (this.evalMessage(f.emoji, cache) == "") { } else {

            if (this.evalMessage(f.emoji, cache) > 100) {
              objtag.emoji = { id: this.evalMessage(f.emoji, cache), name: null }
            } else {
              objtag.emoji = { id: null, name: this.evalMessage(f.emoji, cache) }
            }

          }

          channelData.availableTags.push(objtag)

        };
      }
    }

    try {
      await server.channels
        .create(name, channelData)
        .then((channel) => {
          const storage = parseInt(data.storage, 10);
          const varName = this.evalMessage(data.varName, cache);
          this.storeValue(channel, storage, varName, cache);
          this.callNextAction(cache);
        })
    }
    catch (error) {

      if (data.errcmd === true) {
        console.log('ERROR: ' + cache.toString() + ' - Action ' + (cache.index + 1) + '# ' + data.name)
        console.log(error)
      }

      this.storeValue(error, parseFloat(data.errs), this.evalMessage(data.errv, cache), cache)

      if (data.iffalse == "5" || data.iffalse == "6") {

        if (data.iffalse == "5") {
          this.executeSubActions(data.actionsfalse, cache)
        } else {
          this.executeSubActionsThenNextAction(data.actionsfalse, cache)
        }

      } else {
        this.executeResults(false, data, cache);
      }


    }
  },


  mod() { },
};
