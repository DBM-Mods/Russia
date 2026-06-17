module.exports = {

  name: "Trigger MOD",
  section: "Conditions",
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
      : `<font style="color:${desccor}">Время (${data.tempo}с) Скорость (${data.velocidade}) Проверить (${data.storage})</font>`

  },

  fields: ["storage", "comparison", "value", "value2", "velocidade", "descriptioncolor", "description", "descriptionx", "tempo", "acao", "iftrue", "iftrueVal", "actionstrue", "iffalse", "iffalseVal", "actionsfalse"],


  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновление</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.1</div>

    <div>
    <tab-system>

    <tab label="Триггер" icon="wizard">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">

<span class="dbminputlabel">Информация</span><br>
<textarea id="storage" rows="2" placeholder="Введите информацию здесь..." style="width: 100%; font-family: monospace; white-space: nowrap;"></textarea>

<br>
<div style="width: 100%">
	<div style="width:100%">
		<span class="dbminputlabel">Срабатывает, если</span><br>
		<select id="comparison" class="round" onchange="glob.onComparisonChanged(this)">
    <optgroup label="Номер или текст">
    <option value="0">Существует</option>
			<option value="1" selected>Равно</option>
			<option value="2">Точно так же</option>
    </optgroup>
    <optgroup label="Номер">
			<option value="3">Меньше, чем</option>
      <option value="13">Меньше или равно</option>
			<option value="4">Больше, чем</option>
      <option value="12">Больше или равно</option>
      <option value="15">Между</option>
      <option value="19">Это четное число?</option>
      <option value="20">Это нечетное число?</option>
      <option value="21">Это число?</option>
      </optgroup>
      <optgroup label="Текст">
			<option value="6">Соответствует Regex</option>
      <option value="14">Совпадает с полным регулярным выражении</option>
      <option value="7">Длина больше, чем</option>
			<option value="8">Длина меньше, чем</option>
			<option value="9">Длина равна</option>
			<option value="10">Начинается с</option>
			<option value="11">Заканчивается на</option>
      <option value="16">Есть ли в нем акценты?/option>
      <option value="18">Это как слова  ["a" , "b" , "c"]</option>
      <option value="24">Это текст?</option>
      <option value="23">Это URL изображения?</option>
      <option value="25">Это URL?</option>
      <option value="26">Существует ли электронная почта?</option>
    </optgroup>
    <optgroup label="Текст ~ Включает в себя">
    <option value="5">Включает в себя</option>
    <option value="29">Включает ~ Игнорировать Нижний/Верхний Регистр</option>
    <option value="30">Включает ~ игнорировать акцентуации</option>
    <option value="31">Включает в себя ~ игнорировать строчные и заглавные & акцентуации</option>
    <option value="17">Включает в себя точно ["a" , "b" , "c"]</option>
    <option value="27">Содержит URL?</option>
    <option value="28">Включает ли оно приглашение в Discord?</option>
    <option value="32">Включает в себя именно слово</option>
    <option value="33">Включает слово ~ Игнорировать строчные прописные/прописные буквы</option>
    <option value="34">Включает слово ~ Игнорировать ударения</option>
    <option value="35">Включает слово ~ Игнорировать ударения, строчные и прописные буквы</option>
    <option value="36">Включите слова ~ используйте запятые ~ игнорируйте ударения и нижний и верхний регистрa</option>
    </optgroup>
    <optgroup label="Другое">
      <option value="22">Это список?</option>
      </optgroup>
		</select>
	</div>

	<table style="width: 100%"><tr><td><div style="width: 100%" id="directValue"><br>
		<span class="dbminputlabel">Значение</span><br>
		<input id="value" class="round" type="text">
	</div></td><td> <div style="width: 100%;padding:0px 0px 0px 6px" id="containerxin"><br>
  <span class="dbminputlabel">И</span><br>
  <input id="value2" class="round" type="text"></td></tr></table>
</div>
<br>
<div>


<table style="width:100%"><tr><td style="padding:0px 6px 0px 0px">
<span class="dbminputlabel">Тайм-аут проверки (секунды)</span><br>
		<input id="tempo" value="60" class="round" type="text">
</td><td>

<span class="dbminputlabel">Проверка скорости</span><br>
<select id="velocidade" class="round">
<option value="16x">16x (Не рекомендуется)</option>
<option value="8x">8x (Не рекомендуется)</option>
<option value="4x">4x</option>
<option value="2x">2x</option>
<option value="1x" selected>1x</option>
<option value="0.75x">0.75x</option>
<option value="0.5x">0.5x</option>
<option value="0.38x">0.38x</option>
<option value="0.25x">0.25x</option>
<option value="0.22x">0.22x</option>
<option value="0.12x">0.12x</option>
<option value="0.06x">0.06x</option>
</select>

</td></tr></table>
</div>

</div>
</tab>

<tab label="Действие" icon="play">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">

    <div style="width:100%">
    <div style="float: left; width: 38%" id="xinext">
    <span class="dbminputlabel">Если триггер запущен</span><br>
    <select id="iftrue" class="round" onchange="glob.onComparisonChanged2(this)">
    <option value="0" selected>Продолжить выполнение действий</option>
    <option value="1">Остановить выполнение действий</option>
    <option value="2">Перейти к действию</option>
    <option value="3">Пропустить следующие действия</option>
    <option value="4">Перейти к якорю действия</option>
    <option value="5">Выполнить действия и остановиться</option>
    <option value="6">Выполнить действия и продолжить</option>
    </select>
    <br>
    </div>
    <div id="iftrueContainer" style="display: none; float: right; width: 60%;"><div id="xincontrol"><span id="xinelas" class="dbminputlabel">На</span><br><input id="iftrueVal" class="round" name="actionxinxyla" type="text"></div>
    </div><br>
    <div id="containerxintrue" style="width:100%">
    <br><br>
    <action-list-input id="actionstrue" height="calc(100vh - 450px)"></action-list-input>
    </div>
    </div>

    <br><br><br>
   
    <div>
    <div style="float: left; width: 38%" id="xinext">
    <span class="dbminputlabel">Если триггер истекает</span><br>
    <select id="iffalse" class="round" onchange="glob.onComparisonChanged3(this)">
    <option value="0" selected>Продолжить выполнение действий</option>
    <option value="1">Остановить выполнение действий</option>
    <option value="2">Перейти к действию</option>
    <option value="3">Пропустить следующие действия</option>
    <option value="4">Перейти к якорю действия</option>
    <option value="5">Выполнить действия и остановиться</option>
    <option value="6">Выполнить действия и продолжить</option>
    </select>
    <br>
    </div>
    <div id="iffalseContainer" style="display: none; float: right; width: 60%;"><div id="xincontrol2"><span id="xinelas2" class="dbminputlabel">На</span><br><input id="iffalseVal" class="round" name="actionxinxyla2" type="text"></div>
    </div><br></div>
    <div id="containerxinfalse" style="width:100%">
    <br><br>
    <action-list-input id="actionsfalse" height="calc(100vh - 450px)"></action-list-input>
    </div>
    

</div>
</tab>

<tab label="Конфиг" icon="cogs">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">

    <div style="padding:0px 0px 15px 0px">
<table style="width:100%;"><tr>
<td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Оставьте пустым, чтобы не использовать."></td>
<td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
</tr></table>
</div>


<span class="dbminputlabel">Trigger</span><br>
    <select id="acao" class="round">
    <option value="0" selected>Остановиться и дождаться выполнения действия триггера</option>
    <option value="1">Продолжить выполнение действий (Это повлияет на непрерывность действий триггера в разделе "Действие")</option>
</select>
</div>
</tab>

</tab-system>
</div>


<style>

.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}

</style>`;
  },


  init() {
    const { glob, document } = this;

    glob.onComparisonChanged = function (event) {
      if (event.value === "0") {
        document.getElementById("directValue").style.display = "none";
        document.getElementById("containerxin").style.display = "none";
      } else {
        document.getElementById("directValue").style.display = null;
        document.getElementById("containerxin").style.display = "none";
      }
      if (event.value === "15") {
        document.getElementById("directValue").style.display = null;
        document.getElementById("containerxin").style.display = null;
        document.getElementById("containerxin2").style.display = "none";
      }
      if (event.value === "16" || event.value === "19" || event.value === "20" || event.value === "21" || event.value === "22" || event.value === "23" || event.value === "24" || event.value === "25" || event.value === "26" || event.value === "27" || event.value === "28") {
        document.getElementById("directValue").style.display = "none";
        document.getElementById("containerxin").style.display = "none";
      }
    };


    glob.onComparisonChanged(document.getElementById("comparison"));

    const xinelaslinks = document.getElementsByClassName('xinelaslink');
    for (let x = 0; x < xinelaslinks.length; x++) {
      const xinelaslink = xinelaslinks[x];
      const url = xinelaslink.getAttribute('data-url');
      if (url) {
        xinelaslink.setAttribute('title', url);
        xinelaslink.addEventListener('click', (e) => {
          e.stopImmediatePropagation();
          console.log(`Открываю URL: [${url}] в браузере по умолчанию.`);
          require('child_process').execSync(`start ${url}`);
        });
      }
    }

    glob.onComparisonChanged2 = function (event) {
      if (event.value > "1") {
        document.getElementById("iftrueContainer").style.display = null;
      } else {
        document.getElementById("iftrueContainer").style.display = "none";
      }
      if (event.value == "5" || event.value == "6") {
        document.getElementById("containerxintrue").style.display = null;
        document.getElementById("xincontrol").style.display = "none";
        document.getElementById("xinext").style.width = "100%";
      } else {
        document.getElementById("containerxintrue").style.display = "none";
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
        document.querySelector("[id='xinelas']").innerText = (`Название якоря`);
      }
    }

    glob.onComparisonChanged2(document.getElementById("iftrue"));



    glob.onComparisonChanged3 = function (event) {
      if (event.value > "1") {
        document.getElementById("iffalseContainer").style.display = null;
      } else {
        document.getElementById("iffalseContainer").style.display = "none";
      }
      if (event.value == "5" || event.value == "6") {
        document.getElementById("containerxinfalse").style.display = null;
        document.getElementById("xincontrol2").style.display = "none";
        document.getElementById("xinext2").style.width = "100%";
      } else {
        document.getElementById("containerxinfalse").style.display = "none";
        document.getElementById("xincontrol2").style.display = null;
        document.getElementById("xinext2").style.width = "38%";
      }
      if (event.value == "2") {
        document.querySelector("[id='xinelas2']").innerText = (`Номер действия`);
      }
      if (event.value == "3") {
        document.querySelector("[id='xinelas2']").innerText = (`Пропустить действия`);
      }
      if (event.value == "4") {
        document.querySelector("[id='xinelas2']").innerText = (`Название якоря`);
      }
    }

    glob.onComparisonChanged3(document.getElementById("iffalse"));



  },


  action(cache) {
    const data = cache.actions[cache.index];

    roda = 0

    velocidademenu = data.velocidade

    velocidade = 1000

    if(velocidademenu == "16x"){velocidade = 62;tempo = parseFloat(this.evalMessage(data.tempo, cache))*16}
    if(velocidademenu == "8x"){velocidade = 125;tempo = parseFloat(this.evalMessage(data.tempo, cache))*8}
    if(velocidademenu == "4x"){velocidade = 250;tempo = parseFloat(this.evalMessage(data.tempo, cache))*4}
    if(velocidademenu == "2x"){velocidade = 500;tempo = parseFloat(this.evalMessage(data.tempo, cache))*2}
    if(velocidademenu == "1x"){velocidade = 1000;tempo = parseFloat(this.evalMessage(data.tempo, cache))}
    if(velocidademenu == "0.75x"){velocidade = 1500;tempo = parseFloat(this.evalMessage(data.tempo, cache))/1.5}
    if(velocidademenu == "0.5x"){velocidade = 2000;tempo = parseFloat(this.evalMessage(data.tempo, cache))/2}
    if(velocidademenu == "0.38x"){velocidade = 3000;tempo = parseFloat(this.evalMessage(data.tempo, cache))/2.63}
    if(velocidademenu == "0.25x"){velocidade = 4000;tempo = parseFloat(this.evalMessage(data.tempo, cache))/4}
    if(velocidademenu == "0.22x"){velocidade = 5000;tempo = parseFloat(this.evalMessage(data.tempo, cache))/4.54}
    if(velocidademenu == "0.12x"){velocidade = 8000;tempo = parseFloat(this.evalMessage(data.tempo, cache))/8}
    if(velocidademenu == "0.06x"){velocidade = 16000;tempo = parseFloat(this.evalMessage(data.tempo, cache))/16}

    let counter = 0;
    const intervalId = setInterval(() => {
        if (counter < tempo && roda == 0) {
        const val1 = this.evalMessage(data.storage, cache);
        let result = false;
        const compare = parseInt(data.comparison, 10);
        let val2 = this.evalMessage(data.value, cache);
        let val3 = this.evalMessage(data.value2, cache);
        if (compare !== 6) val2 = this.evalIfPossible(val2, cache);
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
            result = Boolean(val1.toString().match(new RegExp(val2)))
            break;
          case 15:
            var numberj = val1.toString();
            if (numberj >= val2 && val1 <= val3) {
              result = numberj
            }
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
            const isImageUrl = require('is-image-url');
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
            _this = this

            const mail = require("email-existence");
            ignorar = 2
            mail.check(val1, function (error, response) {
              _this.executeResults(response, data?.branch ?? data, cache)
            });
            break;
          case 27:
            let pattern = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
            result = val1.match(pattern)
            break;
          case 28:
            invite = new RegExp(/(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z]/g);
            result = invite.test(val1)
            break;
          case 29:
            result = val1.toLowerCase().includes(val2.toLowerCase());
            break;
          case 30:
            tratarval1 = val1.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            tratar = val2.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            result = tratarval1.includes(tratar)
            break;
          case 31:
            tratarval1 = val1.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            tratar = val2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            result = tratarval1.toLowerCase().includes(tratar)
            break;
          case 32:
            var words = val1.split(" ");
            result = words.includes(val2)
            break;
          case 33:
            var words = val1.toLowerCase().split(" ");
            result = words.includes(val2.toLowerCase())
            break;
          case 34:
            var words = val1.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
            result = words.includes(val2.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
            break;
          case 35:
            var words = val1.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
            result = words.includes(val2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
            break;
          case 36:
            var separador = val1.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ")
            var valor2 = val2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(",")
            result = separador.some(els => valor2.includes(els))
            break;
        }


        if (result == true) {
          
          roda = roda + 1
      if (roda == 1) {



        if (data.iftrue == "5" || data.iftrue == "6") {

          if (data.iftrue == "5") {
            this.executeSubActions(data.actionstrue, cache)
          } else {
            this.executeSubActionsThenNextAction(data.actionstrue, cache)
          }

        } else {
          this.executeResults(true, data, cache);
        }



        clearInterval(intervalId);
      }

        }
        counter++;
      } else if (roda == 0) {
        if (data.iffalse == "5" || data.iffalse == "6") {

          if (data.iffalse == "5") {
            this.executeSubActions(data.actionsfalse, cache)
          } else {
            this.executeSubActionsThenNextAction(data.actionsfalse, cache)
          }

        } else {
          this.executeResults(false, data, cache);
        }

        clearInterval(intervalId);
      }
    }, velocidade);


if(data.acao == "1"){
    this.callNextAction(cache)
}


  },


  mod() { },
};
