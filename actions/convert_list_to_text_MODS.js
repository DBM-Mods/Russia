module.exports = {
  name: "Convert List to Text MOD",
  section: "Lists and Loops",
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

    const list = presets.lists;

    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">Конвертировать ${list[parseInt(data.list, 10)]} в текст</font>`
  },


  variableStorage(data, varType) {
    let vars = [];

    const type1 = parseInt(data.storagept, 10)
    const varName1 = data.varNamept;

    if (type1 == varType && varName1) {
      vars.push(varName1);
      vars.push("Номер");
    }
    const type2 = parseInt(data.storage, 10)
    const varName2 = data.varName2;

    if (type2 == varType && varName2) {
      vars.push(varName2);
      vars.push("Текст");
    }


    if (vars.length > 0) {
      return vars;
    }


  },


  fields: ["list", "varName", "numero", "istart", "start", "istart2", "start2", "start3", "multi", "end", "end2", "end3", "posicao", "storage", "varName2", "itens", "descriptioncolor", "description", "descriptionx", "limite", "pagina", "storagept", "varNamept", "endeval", "checkend", "endlib"],

  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновление</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.4</div>

    <tab-system style="margin-top: 0;">
		<tab label="Конвертация" icon="align left">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">

    <table><tr><td class="col">
     <span class="dbminputlabel">Список</span><br>
      <select id="list" class="round" onchange="glob.listChange(this, 'varNameContainer')">
        ${data.lists[isEvent ? 1 : 0]}
      </select><br>
    </td>
    <td class="col">
    <div id="varNameContainer">
    <span class="dbminputlabel">Имя переменной</span><br>
      <input id="varName" class="round" type="text" list="variableList"><br></div>
    </td></tr></table>
 

  <table><tr><td class="col">
<span class="dbminputlabel">Результат</span><br>
		<select id="storage" class="round">
		${data.variables[1]}
		</select><br>
	</td>
	<td class="col">
  <span class="dbminputlabel">Имя переменной</span><br>
		<input id="varName2" class="round" type="text"><br>
    </td></tr></table>

  </div>
    </tab>
    <tab label="Все элементы" icon="align left">

<div style="width: 100%; padding: 10px;height: calc(100vh - 210px);overflow:auto">

<span class="dbminputlabel">Начало каждого элемента</span><br>
<textarea id="istart" rows="3" style="width: 100%; white-space: nowrap; resize: yes;"></textarea>
<br>
<dbm-checkbox id="numero" label="Укажите номер позиции на каждом элементе"></dbm-checkbox>
<br>
	
		<span class="dbminputlabel">Середина каждого элемента</span><br>
    <textarea id="start" rows="3" style="width: 100%; white-space: nowrap; resize: yes;"></textarea>
	
<br>
	
      
  <span class="dbminputlabel" name="xinelas">Конец каждого элемента</span> <div style="float:right;margin-top:-5px"><dbm-checkbox id="checkend" onchange="glob.onChange3(this)" label="EVAL ITEM"></dbm-checkbox></div><br>
  <div id="valor"><textarea id="end" rows="3" class="round" style="width:100%; white-space: nowrap; resize: yes;"></textarea></div>
  <div style="display:none" id="valoreval"><textarea id="endeval" rows="3" name="is-eval" class="round" style="width:100%; white-space: nowrap; resize: yes;"></textarea>
<br>

  <dbm-checkbox id="endlib" label="Не показывать значение каждого элемента"></dbm-checkbox>

  <br>
  Используйте <span style="background:rgba(0,0,0,0.8);color:lime;padding:2px;">list[i]</span> для сбора информации из элемента списка, если он находится в формате JSON, пример <span style="background:rgba(0,0,0,0.8);color:lime;padding:2px;">list[i].user.username</span> Из списка "Пользователи севрера"
  <br>Используйте <span style="background:rgba(0,0,0,0.8);color:lime;padding:2px;">\\n</span> что бы перенести на следушию строку.
  
  </div>
  <br>


</div>
</tab>
    <tab label="Элементы" icon="align left">
    <div style="width: 100%; padding: 10px;height: calc(100vh - 210px);overflow:auto">


  <span class="dbminputlabel">С каждым * элементом</span><br>
<input id="multi" class="round" type="text" value="0">

<br>

		<span class="dbminputlabel">Добавить без начала</span><br>
    <textarea id="istart2" rows="3" style="width: 100%; white-space: nowrap; resize: yes;"></textarea>
		
<br>

		<span class="dbminputlabel">Добавить в середину</span><br>
    <textarea id="start2" rows="3" style="width: 100%; white-space: nowrap; resize: yes;"></textarea>
	
<br>
	
		<span class="dbminputlabel">Добавить не окончательный</span><br>
    <textarea id="end2" rows="3" style="width: 100%; white-space: nowrap; resize: yes;" value="\\n"></textarea><br>

</div>


</tab>

<tab label="Изменить элементы" icon="align left">
<dialog-list id="itens" fields='["posicao","start3","end3", "val1", "val2", "comparar", "formula"]' dialogTitle="Редактирование элемента" dialogWidth="500" dialogHeight="510" listLabel="Элементы" listStyle="height: calc(100vh - 250px);" itemName="Редактирование" itemCols="1" itemHeight="40px;" itemTextFunction="data.formula + ' / Позиция: ' + data.posicao" itemStyle="text-align: left; line-height: 40px;">
<div style="padding: 16px;background:rgba(0,0,0,0.3)">
                 <span class="dbminputlabel">Редактировать</span><br>
                 <select id="formula" class="round">
                 <option value="Всегда" selected>Всегда редактируйте элемент</option>
                 <option value="False">Редактирование только в том случае, если компаратор ложен</option>
                 <option value="True">Редактирование только в том случае, если компаратор истинен</option>
               </select>
               <br>
                  <table style="width:100%"><tr><td class="col">
                    <span class="dbminputlabel">Значение A</span><br>
                    <input id="val1" class="round" type="text">
                    </td>
                    <td class="col">
                    <span class="dbminputlabel">Сравнить</span><br>
                    <select id="comparar" class="round">
                    <option value="0">Значение A - Существующее</option>
                    <option value="1" selected>Равный</option>
                    <option value="2">Точно так же</option>
                    <option value="3">Менее</option>
                    <option value="13">Меньше или равно</option>
                    <option value="4">Больше, чем</option>
                    <option value="12">Больше или равно</option>
                    <option value="5">Включает в себя</option>
                    <option value="6">Соответствует регексу</option>
                    <option value="14">Совпадает с полным регексом</option>
                    <option value="7">Длина больше, чем</option>
                    <option value="8">Длина меньше, чем</option>
                    <option value="9">Длина равна</option>
                    <option value="10">Она начинается с</option>
                    <option value="11">Заканчиается на</option>
                    <option value="16">Имеет ли значение A акценты?</option>
                    <option value="17">Включает в себя слова ["a" , "b" , "c"]</option>
                    <option value="18">Это просто как слова ["a" , "b" , "c"]</option>
                    <option value="19">Является ли значение A четным числом?</option>
                    <option value="20">Является ли значение A нечетным числом?</option>
                    <option value="21">Является ли значение A числом?</option>
                    <option value="24">Значение A - это текст?</option>
                    <option value="23">Является ли значение A URL-адресом изображения?</option>
                    <option value="25">Значение A - это URL?</option>
                  </select>
                   </td>
                    <td class="col">
                    <span class="dbminputlabel">Значение B</span><br>
                    <input id="val2" class="round" type="text">
                    </td>
                    </tr></table>

        </div>
<div style="width: 100%; padding: 10px">

<span class="dbminputlabel">Положение элемента</span><br>
<input id="posicao" class="round" type="text" value="0">
  
<br>

  <span class="dbminputlabel">Добавить без начала</span><br>
  <textarea id="start3" rows="3" style="width: 100%; white-space: nowrap; resize: yes;"></textarea>

<br>

  <span class="dbminputlabel">Добавить в середину</span><br>
  <textarea id="end3" rows="3" style="width: 100%; white-space: nowrap; resize: yes;" value="\\n"></textarea><br>

</div>
</dialog-list>
</tab>
<tab label="Конфиг" icon="cogs">
<div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">


<div style="padding-bottom: 12px;padding-top: 12px">
<table style="width:100%;"><tr>
<td><span class="dbminputlabel">Описание действий</span><br><input type="text" class="round" id="description" placeholder="Не обязательное поле"></td>
<td style="padding:0px 0px 0px 10px;width:55px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
</tr></table>
</div>

<span class="dbminputlabel">Ограничение количества элементов на странице</span><br><input type="text" class="round" id="limite" placeholder="Оставьте пустым, чтобы отключить">
<br>
<span class="dbminputlabel">Страница</span><br><input type="text" class="round" id="pagina" value="1" placeholder="Оставьте пустым для 1">
<br>
<div style="float: left; width: 35%;">
	<span class="dbminputlabel">Всего страниц</span><br>
		<select id="storagept" class="round" onchange="glob.variableChange(this, 'varNameContainer3')">
		${data.variables[0]}
		</select>
	</div>
	<div id="varNameContainer3" style="float: right; display: none; width: 60%;">
	<span class="dbminputlabel">Имя переменной</span><br>
		<input id="varNamept" class="round" type="text">
	</div>

</div>
</tab>
</tab-system>

<style>
table{width:100%}
.col{padding:0px 5px;width:50%}

.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}

</style>
`;
  },


  init() {
    const { glob, document } = this;

    glob.listChange(document.getElementById("list"), "varNameContainer");

    const xinelaslinks = document.getElementsByClassName('xinelaslink');
    for (let x = 0; x < xinelaslinks.length; x++) {
      const xinelaslink = xinelaslinks[x];
      const url = xinelaslink.getAttribute('data-url');
      if (url) {
        xinelaslink.setAttribute('title', url);
        xinelaslink.addEventListener('click', (e) => {
          e.stopImmediatePropagation();
          console.log(`Launching URL: [${url}] in your default browser.`);
          require('child_process').execSync(`start ${url}`);
        });
      }
    }

    glob.onChange2 = function (event) {
      const value = parseInt(event.value, 10);
      const dom = document.getElementById("varNameContainer3");
      if (value == 0) {
        dom.style.display = "none";
      } else {
        dom.style.display = null;
      }
    };

    glob.onChange2(document.getElementById("storagept"));

    glob.onChange3 = function (event) {
      if (event.value == true) {
        document.getElementById("valoreval").style.display = null;
        document.getElementById("valor").style.display = "none";
        document.querySelector("[name='xinelas']").innerText = (`Конец каждого пункта / EVAL ITEM`);
      }
      if (event.value == false) {
        document.getElementById("valoreval").style.display = "none";
        document.getElementById("valor").style.display = null;
        document.querySelector("[name='xinelas']").innerText = (`Конец каждого пункта`);
      }
    };

    glob.onChange3(document.getElementById("checkend"));

    ;





  },

  async action(cache) {
    const data = cache.actions[cache.index];
    var list = await this.getListFromData(data.list, data.varName, cache);

    const start = this.evalMessage(data.start, cache).replace("\\n", "\n");
    const istart = this.evalMessage(data.istart, cache).replace("\\n", "\n");
    const end = this.evalMessage(data.end, cache).replace("\\n", "\n");

    var totaldeitens = list.length

    var irseguir = 0

    var pagina = this.evalMessage(data.pagina, cache)
    if (pagina == "" || pagina == "undefined" || pagina == undefined || pagina == null) {
      pagina = 1
    } else {
      pagina = parseFloat(this.evalMessage(data.pagina, cache))
      if (pagina > 0) { } else { pagina = 1 }
      list = list.slice(0, limite)
    }

  

    const multi = parseFloat(this.evalMessage(data.multi, cache))
    var limite = this.evalMessage(data.limite, cache)
    if (limite == "" || limite == "undefined" || limite == undefined || limite == null) {
      limite = ""
      limiteoff = "off"
    } else {
      limite = parseFloat(this.evalMessage(data.limite, cache))

      if (limite > 0) { } else { limite = 10 }

      var paginatotal = Math.ceil(totaldeitens / limite)

      const varNamept = this.evalMessage(data.varNamept, cache);
      const storagept = parseInt(data.storagept, 10);

      this.storeValue(paginatotal, storagept, varNamept, cache);

      if (pagina > paginatotal) { pagina = paginatotal }
      if (pagina <= 0) { pagina = 1 }

      var irseguir = Math.ceil(pagina * limite - limite)

      const indiceFim = irseguir + limite;


      list = list.slice(irseguir, indiceFim)
    }

    const istart2 = this.evalMessage(data.istart2, cache).replace("\\n", "\n");
    const start2 = this.evalMessage(data.start2, cache).replace("\\n", "\n");
    const end2 = this.evalMessage(data.end2, cache).replace("\\n", "\n");

    let result = "";
    acont = -1
    acont = acont + multi


    for (let i = 0; i <= (list.length - 1); i++) {

      resultitem = ""
      resultitem2 = ""

      if (data.numero == true) {
        resultitem = parseFloat(parseFloat([i + irseguir]) + 1) + resultitem
        resultitem2 = parseFloat(parseFloat([i + irseguir]) + 1) + resultitem2
      }


      if (acont == [i] && multi > 0) {
        acont = acont + multi
        resultitem = istart2 + istart + resultitem + start + start2 + String(list[i]) + end2
        resultitem2 = istart2 + istart + resultitem2 + start + start2 + end2
      } else {
        resultitem = istart + resultitem + start + String(list[i]);
        resultitem2 = istart + resultitem2 + start
      }


      for (let ix = 0; ix < data.itens.length; ix++) {

        const posicao = parseFloat(this.evalMessage(data.itens[ix].posicao, cache))

        if (posicao == (i + irseguir)) {
          val1 = this.evalMessage(data.itens[ix].val1, cache);
          val2 = this.evalMessage(data.itens[ix].val2, cache);
          resulty = true;

          if (data.itens[ix].formula == "False" || data.itens[ix].formula == "True") {
            const compare = parseInt(data.itens[ix].comparar, 10);
            switch (compare) {
              case 0:
                resulty = val1.toString() !== "undefined";
                break;
              case 1:
                resulty = val1 == val2;
                break;
              case 2:
                resulty = val1 === val2;
                break;
              case 3:
                resulty = parseFloat(val1) < parseFloat(val2);
                break;
              case 4:
                resulty = parseFloat(val1) > parseFloat(val2);
                break;
              case 5:
                if (typeof val1?.toString().includes === "function") {
                  resulty = val1.toString().includes(val2);
                }
                break;
              case 6:
                resulty = Boolean(val1.toString().match(new RegExp('^' + val2 + '$', 'i')));
                break;
              case 7:
                resulty = Boolean(val1.toString().length > val2);
                break;
              case 8:
                resulty = Boolean(val1.toString().length < val2);
                break;
              case 9:
                resulty = Boolean(val1.toString().length == val2);
                break;
              case 10:
                resulty = val1.toString().startsWith(val2);
                break;
              case 11:
                resulty = val1.toString().endsWith(val2);
                break;
              case 12:
                resulty = Boolean(val1 >= val2);
                break;
              case 13:
                resulty = Boolean(val1 <= val2);
                break;
              case 14:
                resulty = Boolean(val1.toString().match(new RegExp(val2)))
                break;
              case 16:
                const conditions = ["Ä", "Å", "Á", "Â", "À", "Ã", "Ā", "Ă", "Ą", "ā", "ă", "ą", "ä", "á", "â", "à", "ã", "É", "Ê", "Ë", "È", "Ė", "Ę", "Ě", "Ĕ", "Ē", "ė", "ę", "ě", "ĕ", "ē", "é", "ê", "ë", "è", "Í", "Î", "Ï", "Ì", "İ", "Į", "Ī", "ı", "į", "ī", "í", "î", "ï", "ì", "Ö", "Ó", "Ô", "Ò", "Õ", "Ő", "Ō", "ő", "ō", "ö", "ó", "ô", "ò", "õ", "Ü", "Ú", "Û", "Ų", "Ű", "Ů", "Ū", "ų", "ű", "ů", "ū", "ü", "ú", "û", "ù", "Ç", "Ć", "Č", "ç", "ć", "č", "Ñ", "Ň", "Ņ", "Ń", "ñ", "ň", "ņ", "ń", "Ÿ", "Ý", "ý", "Ź", "Ż", "Ž", "ź", "ż", "ž", "Ł", "Ľ", "Ļ", "Ĺ", "ł", "ľ", "ĺ", "Ķ", "ķ", "Ģ", "Ğ", "ģ", "ğ", "Ď", "ď", "Ś", "Š", "Ş", "ś", "š", "ş", "Ť", "Ț", "Ţ", "ť", "ț", "ţ", "Ŕ", "Ř", "ŕ", "ř"]
                resulty = conditions.some(el => val1.includes(el));
                break;
              case 17:
                const conditionsX = val2
                resulty = conditionsX.some(els => val1.includes(els));
                break;
              case 18:
                const conditionsZ = val2
                resulty = conditionsZ.some(elz => val1 == (elz));
                break;
              case 19:
                resulty = val1 % 2 == 0
                break;
              case 20:
                resulty = val1 % 2 == 1
                break;
              case 21:
                resulty = Boolean(!isNaN(parseFloat(val1.toString().replace(",", "."))));
                break;
              case 23:
                const isImageUrl = require('is-image-url');
                resulty = isImageUrl(val1);
                break;
              case 24:
                resulty = typeof val1 === "string";
                break;
              case 25:
                const isUrl = require("is-url");
                resulty = isUrl(val1);
            }
          }

          if (data.itens[ix].formula == "False") {
            if (resulty == false) {
              resulty = true
            } else { resulty = false }
          }


          if (resulty == true) {
            const start3 = this.evalMessage(data.itens[ix].start3, cache).replace("\\n", "\n");
            const end3 = this.evalMessage(data.itens[ix].end3, cache).replace("\\n", "\n");
            resultitem = start3 + resultitem + end3;
            resultitem2 = start3 + resultitem2 + end3;
          }

        }

      }

      if (data.checkend == true) {

        if (data.endlib == true) {
          result += resultitem2 + eval(String(this.evalMessage(data.endeval, cache)))
        } else {
          result += resultitem + eval(String(this.evalMessage(data.endeval, cache)))
        }

      } else {

        result += resultitem + end

      }

    }

    if (result) {
      const varName2 = this.evalMessage(data.varName2, cache);
      const storage2 = parseInt(data.storage, 10);
      this.storeValue(result, storage2, varName2, cache);
    }

    this.callNextAction(cache);
  },


  mod() { },
};
