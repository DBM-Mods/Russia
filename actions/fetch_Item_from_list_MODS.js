module.exports = {
  name: 'Fetch Item From List MOD',
  section: 'Lists and Loops',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data) {
    const list = [
      'Участники сервера',
      'Каналы сервера',
      'Роли сервера',
      'Эмодзи сервера',
      'Все сервера бота',
      'Упомянутые роли пользователя',
      'Роли автора команды',
      'Временная переменная',
      'Переменная сервера',
      'Глобальная переменная',
    ];
    if (data.descriptionx == true) {
      desccor = data.descriptioncolor
    } else {
      desccor = 'none'
    }
    const info = ['точно такой же как', 'содержит', 'соответствует Regex', 'меньше чем', 'меньше или равно', 'больше чем', 'больше или равно', 'длина больше чем', 'длина меньше чем', 'длина равна', 'начинается с', 'заканчивается на', 'содержит символы', 'является URL-адресом изображения', 'является URL-адресом', 'не является URL-адресом изображения', 'не является URL-адресом', 'является числом', 'является текстом', 'содержит ~ игнорировать регистр', 'содержит ~ игнорировать акценты', 'содержит ~ игнорировать акценты и регистр'];
    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">Искать ${info[parseInt(data.buscadoxin)]} "${data.item}" в "${data.varName}"</font>`;
  },

  variableStorage(data, varType) {
    const prse2 = parseInt(data.buscadoxin);
    if (parseInt(data.storage, 10) !== varType) return;
    return [data.varName2, 'Number'[prse2]];
  },

  fields: ['list', 'varName', 'buscadoxin', 'item', 'storage', 'varName2', 'iffalse', 'iffalseVal', 'descriptioncolor', 'description', 'descriptionx'],

  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.8</div>

    <div style="width: 100%; padding:5px 5px;height: calc(100vh - 160px);overflow:auto">

    <div id="flutuador" style="padding:0px 0px 15px 0px">
<table style="width:100%;"><tr>
<td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Необязательное поле"></td>
<td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
</tr></table>
</div>

<div style="float: left; width: 35%;">
<span class="dbminputlabel">Список</span><br>
  <select id="list" class="round" onchange="glob.listChange(this, 'varNameContainer')">
    ${data.lists[isEvent ? 1 : 0]}
  </select>
</div>
<div id="varNameContainer" style="display: none; float: right; width: 60%;">
<span class="dbminputlabel">Имя переменной</span><br>
  <input id="varName" class="round" type="text" list="variableList"><br>
</div>
<br><br><br>
<div style="padding-top: 8px; width: 100%;">
<span class="dbminputlabel">Поиск позиции элемента</span><br>
			<select id="buscadoxin" class="round" onchange="glob.onComparisonChanged2(this)">
				<option value="0" selected>Точно такой же как</option>
        <option value="1">Содержит</option>
        <option value="19">Содержит ~ Регистр не учитывается</option>
        <option value="20">Содержит ~ Учитываются акценты</option>
        <option value="21">Содержит ~ Регистр и акценты не учитываются</option>
        <option value="2">Соответствует Regex</option>
        <option value="7">Длина больше чем</option>
        <option value="8">Длина меньше чем</option>
        <option value="9">Длина равна</option>
        <option value="10">Начинается с</option>
        <option value="11">Заканчивается на</option>
        <option value="3">Меньше чем</option>
        <option value="4">Меньше или равно</option>
        <option value="5">Больше чем</option>
        <option value="6">Больше или равно</option>
        <option value="12">Содержит символы</option>
        <option value="13">Это URL изображения</option>
        <option value="14">Это URL-адрес</option>
        <option value="15">Не является URL-адресом изображения</option>
        <option value="16">Не является URL-адресом</option>
        <option value="17">Это число</option>
        <option value="18">Это текст</option>
			</select>
		</div>
<div style="padding-top: 8px;" id="xingoxyla">
    <textarea id="item" rows="2" placeholder="Вставьте переменную или текст. Эти '' не обязательны!" style="width: 100%; font-family: monospace; white-space: nowrap;"></textarea>
</div><br>


<table><tr><td class="col1">
  <span class="dbminputlabel">Сохранить в</span><br>
    <select id="storage" class="round">
      ${data.variables[1]}
    </select>
    </td>
    <td class="col2">
  <div id="varNameContainer2">
  <span class="dbminputlabel">Имя переменной</span><br>
    <input id="varName2" class="round" type="text">
  </div>
  </td></tr></table>
<br>
<table><tr><td class="col1">
<span class="dbminputlabel">Если не найдено</span><br>
<select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
<option value="0">Продолжить выполнение действий</option>
<option value="1" selecionado>Остановить выполнение действий</option>
<option value="2">Перейти к действию</option>
<option value="3">Пропустить действия</option>
<option value="4">Перейти к якорю</option>
</select>
</td>
<td class="col2">
<div id="iffalseContainer" style="display: none"><span id="xinelas" class="dbminputlabel">Para</span><br><input id="iffalseVal" class="round" name="actionxinxyla" type="text"></div>
</td></tr></table>


</div>
<style>	

.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}

table{width:100%}
.col1{width:35%;padding:0px 10px 0px 0px}
.col2{width:65%}
</style>
`;
  },

  init() {
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
        document.querySelector("[id='xinelas']").innerText = (`Количество действий для пропуска`);
      }
      if (event.value == "4") {
        document.querySelector("[id='xinelas']").innerText = (`Имя якоря`);
      }
    }

    glob.onComparisonChanged(document.getElementById("iffalse"));


    glob.onComparisonChanged2 = function (event) {
      if (event.value <= 11 || event.value >= 19) {
        document.getElementById("xingoxyla").style.display = null;
      } else {
        document.getElementById("xingoxyla").style.display = "none";
      }
    }

    glob.onComparisonChanged2(document.getElementById("buscadoxin"));


    glob.onChange1 = function onChange1(event) {
      const value = parseInt(event.value, 10);
      const dom = document.getElementById('positionHolder');
      if (value < 3) {
        dom.style.display = 'none';
      } else {
        dom.style.display = null;
      }
    };

    glob.listChange(document.getElementById('list'), 'varNameContainer');

    const xinelaslinks = document.getElementsByClassName('xinelaslink');
    for (let x = 0; x < xinelaslinks.length; x++) {
      const xinelaslink = xinelaslinks[x];
      const url = xinelaslink.getAttribute('data-url');
      if (url) {
        xinelaslink.setAttribute('title', url);
        xinelaslink.addEventListener('click', (e) => {
          e.stopImmediatePropagation();
          console.log(`Открываю URL: [${url}] в браузере.`);
          require('child_process').execSync(`start ${url}`);
        });
      }
    }

  },

  async action(cache) {
    const data = cache.actions[cache.index];
    const storage = parseInt(data.list, 10);
    const varName = this.evalMessage(data.varName, cache);
    list = await this.getList(storage, varName, cache);
    const buscadoxin = parseInt(data.buscadoxin);
    const item = this.evalMessage(data.item, cache);

    let result;

    switch (buscadoxin) {
      case 0:
        result = list.findIndex((i) => i === item);
        break;
      case 1:
        result = list.findIndex((i) => i.includes(item));
        break;
      case 2:
        result = list.findIndex((i) => Boolean(i.match(new RegExp('^' + item + '$', 'i'))));
        break;
      case 3:
        result = list.findIndex((i) => parseFloat(i) < parseFloat(item));
        break;
      case 4:
        result = list.findIndex((i) => parseFloat(i) <= parseFloat(item));
        break;
      case 5:
        result = list.findIndex((i) => parseFloat(i) > parseFloat(item));
        break;
      case 6:
        result = list.findIndex((i) => parseFloat(i) >= parseFloat(item));
        break;
      case 7:
        result = list.findIndex((i) => Boolean(i.length > parseFloat(item)));
        break;
      case 8:
        result = list.findIndex((i) => Boolean(i.length < parseFloat(item)));
        break;
      case 9:
        result = list.findIndex((i) => Boolean(i.length == parseFloat(item)));
        break;
      case 10:
        result = list.findIndex((i) => i.startsWith(item));
        break;
      case 11:
        result = list.findIndex((i) => i.endsWith(item));
      case 12:
        const conditions = ["Ä", "Å", "Á", "Â", "À", "Ã", "Ā", "Ă", "Ą", "ā", "ă", "ą", "ä", "á", "â", "à", "ã", "É", "Ê", "Ë", "È", "Ė", "Ę", "Ě", "Ĕ", "Ē", "ė", "ę", "ě", "ĕ", "ē", "é", "ê", "ë", "è", "Í", "Î", "Ï", "Ì", "İ", "Į", "Ī", "ı", "į", "ī", "í", "î", "ï", "ì", "Ö", "Ó", "Ô", "Ò", "Õ", "Ő", "Ō", "ő", "ō", "ö", "ó", "ô", "ò", "õ", "Ü", "Ú", "Û", "Ų", "Ű", "Ů", "Ū", "ų", "ű", "ů", "ū", "ü", "ú", "û", "ù", "Ç", "Ć", "Č", "ç", "ć", "č", "Ñ", "Ň", "Ņ", "Ń", "ñ", "ň", "ņ", "ń", "Ÿ", "Ý", "ý", "Ź", "Ż", "Ž", "ź", "ż", "ž", "Ł", "Ľ", "Ļ", "Ĺ", "ł", "ľ", "ĺ", "Ķ", "ķ", "Ģ", "Ğ", "ģ", "ğ", "Ď", "ď", "Ś", "Š", "Ş", "ś", "š", "ş", "Ť", "Ț", "Ţ", "ť", "ț", "ţ", "Ŕ", "Ř", "ŕ", "ř"]

        result = list.findIndex((i) => conditions.some(el => i.includes(el)));
        break;
      case 13:
        isImageUrl = require('is-image-url');
        result = list.findIndex((i) => isImageUrl(i));
        break;
      case 14:
        isUrl = require("is-url");
        result = list.findIndex((i) => isUrl(i));
        break;
      case 15:
        isImageUrl = require('is-image-url');
        not = false
        for (var ix = 0; ix < list.length; ix++) {
          if (isImageUrl(list[ix]) == false && not == false) {
            result = [ix]
            not = true
          }
        }
        break;
      case 16:
        isUrl = require("is-url");
        not = false
        for (var ix = 0; ix < list.length; ix++) {
          if (isUrl(list[ix]) == false && not == false) {
            result = [ix]
            not = true
          }
        }
        break;
      case 17:
        result = list.findIndex((i) => Boolean(!isNaN(parseFloat(i.toString().replace(",", ".")))));
        break;
      case 18:
        result = list.findIndex((i) => typeof (i) == "string");
        not = false
        for (var ix = 0; ix < list.length; ix++) {
          if (not == false) {
            itens = Math.floor(list[ix])
            if (itens.toString() == "NaN") {
              not = true
              result = [ix]
            }
          }
        }
        break;
      case 19:
        result = list.findIndex((i) => i.toLowerCase().includes(item.toLowerCase()));
        break;
      case 20:
        var listarem = list.map(item => item.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
        tratar = item.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        result = listarem.findIndex((i) => i.includes(tratar));
        break;
      case 21:
        var listarem = list.map(item => item.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
        tratar = item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        result = listarem.findIndex((i) => i.toLowerCase().includes(tratar));
        break;
    }


    if (result !== undefined) {
      const varName2 = this.evalMessage(data.varName2, cache);
      const storage2 = parseInt(data.storage, 10);
      this.storeValue(result, storage2, varName2, cache);
    }

    if (result == -1) { this.executeResults(false, data, cache) } else {
      this.callNextAction(cache)
    }
  },

  mod() { },
};
