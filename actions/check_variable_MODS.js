module.exports = {

  name: "Check Variable MOD",
  section: "Conditions",
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]<br>[Tempest - 321400509326032897]',
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
      : `<font style="color:${desccor}">${presets.getConditionsText(data)}</font>`

  },

  fields: ["storage", "varName", "comparison", "value", "value2", "branch", "descriptioncolor", "description", "descriptionx"],


  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 1.7</div>

    <div style="width: 100%; padding:5px 5px;height: calc(100vh - 160px);overflow:auto">

    <div id="flutuador" style="padding:0px 0px 15px 0px">
<table style="width:100%;"><tr>
<td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Не обязательное поле"></td>
<td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
</tr></table>
</div>

   <retrieve-from-variable allowSlashParams dropdownLabel="Переменная" selectId="storage" variableContainerId="varNameContainer" variableInputId="varName"></retrieve-from-variable>

<br><br><br>

<div>
	<div style="width: 100%;padding-top: 8px;">
		<span class="dbminputlabel">Тип сравнения</span><br>
		<select id="comparison" class="round" onchange="glob.onComparisonChanged(this)">
    <optgroup label="Число или Текст">
    <option value="0">Существует</option>
			<option value="1" selected>Равно</option>
      <option value="2">Точное соответствие</option>
    </optgroup>
    <optgroup label="Число">
			<option value="3">Меньше чем</option>
      <option value="13">Меньше или равно</option>
      <option value="4">Больше чем</option>
      <option value="12">Больше или равно</option>
      <option value="15">Между</option>
      <option value="19">Является четным числом?</option>
      <option value="20">Является нечетным числом?</option>
      <option value="21">Является числом?</option>
      </optgroup>
      <optgroup label="Текст">
			<option value="6">Соответствует регулярному выражению</option>
      <option value="14">Соответствует полному регулярному выражению</option>
      <option value="7">Длина больше чем</option>
      <option value="8">Длина меньше чем</option>
      <option value="9">Длина равна</option>
      <option value="10">Начинается с</option>
      <option value="11">Заканчивается на</option>
      <option value="16">Содержит акценты?</option>
      <option value="18">Равно словам ["a", "b", "c"]</option>
      <option value="24">Является текстом?</option>
      <option value="23">Является URL изображением?</option>
      <option value="25">Является URL?</option>
      <option value="26">Существует почта?</option>
    </optgroup>
    <optgroup label="Текст ~ Включает">
    <option value="5">Точно включает</option>
    <option value="29">Включает ~ Регистронезависимо</option>
    <option value="30">Включает ~ Без учета акцентов</option>
    <option value="31">Включает ~ Без учета акцентов и регистра</option>
    <option value="17">Точное включение ["a", "b", "c"]</option>
    <option value="27">Включает URL?</option>
    <option value="28">Включает приглашение Discord?</option>
    <option value="32">Точное включение слова</option>
    <option value="33">Включает слово ~ Регистронезависимо</option>
    <option value="34">Включает слово ~ Без учета акцентов</option>
    <option value="35">Включает слово ~ Без учета акцентов и регистра</option>
    <option value="36">Включает слова ~ используйте запятые ~ Без учета акцентов и регистра</option>
    </optgroup>
    <optgroup label="Другое">
      <option value="22">Это список?</option>
      </optgroup>
		</select>
	</div> 
	<table style="width: 100%;"><tr><td><div style="width: 100%" id="directValue"><br>
		<span class="dbminputlabel">Значение для сравнения</span>
		<input id="value" class="round" type="text">
	</div></td><td><div style="width: 100%;padding:0px 0px 0px 8px" id="containerxin"><br>
  <span class="dbminputlabel">и</span><br>
  <input id="value2" class="round" type="text"></td></tr></table>
</div>
<br>
<div>
<conditional-input id="branch"></conditional-input></div>

</div>

<style>

.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}

</style>`;
  },


  preInit(data, formatters) {
    return formatters.compatibility_2_0_0_iftruefalse_to_branch(data);
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
      }
      if (event.value === "16" || event.value === "19" || event.value === "20" || event.value === "21" || event.value === "22" || event.value === "23" || event.value == "24" || event.value === "25" || event.value === "26" || event.value === "27" || event.value === "28") {
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
          console.log(`Запуск URL: [${url}] в браузере.`);
          require('child_process').execSync(`start ${url}`);
        });
      }
    }


  },


  action(cache) {
    const data = cache.actions[cache.index];
    const type = parseInt(data.storage, 10);
    const varName = this.evalMessage(data.varName, cache);
    const variable = this.getVariable(type, varName, cache);
    let result = false;
    let ignorar

    const val1 = variable;
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
    if (ignorar !== 2) {
      this.executeResults(result, data?.branch ?? data, cache)
    }
  },



  modInit(data) {
    this.prepareActions(data.branch?.iftrueActions);
    this.prepareActions(data.branch?.iffalseActions);
  },


  mod() { },
};
