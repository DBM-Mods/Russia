module.exports = {
  name: "Get Item from List MOD",
  section: "Lists and Loops",
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },


  subtitle(data, presets) {

    const list = presets.lists;
    let lista
    if (data.list == 7 || data.list == 8 || data.list == 9) { lista = `${list[parseInt(data.list, 10)]}(${data.varName})` } else { lista = `"${list[parseInt(data.list, 10)]}"` }


    if (data.descriptionx == true) {
      desccor = data.descriptioncolor
    } else {
      desccor = 'none'
    }

    const storage = presets.variables;

    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">Получить элемент из ${lista} и сохранить в ${storage[parseInt(data.storage, 10)]} (${data.varName2})</font>`
  },


  variableStorage(data, varType) {
    const type = parseInt(data.storage, 10);
    if (type !== varType) return;
    const list = parseInt(data.list, 10);
    let dataType = "Неизвестно";
    switch (list) {
      case 0:
        dataType = "Пользователь";
        break;
      case 1:
        dataType = "Канал";
        break;
      case 2:
        dataType = "Роль";
        break;
      case 3:
        dataType = "Эмодзи";
        break;
      case 4:
        dataType = "Все серверы бота";
        break;
      case 5:
      case 6:
        dataType = "Роль";
        break;
      case 7:
        dataType = "Переменная = " + data.varName;
        break;
      case 8:
        dataType = "Переменная = " + data.varName;
        break;
      case 9:
        dataType = "Переменная = " + data.varName;
        break;
    }

    const type2 = parseInt(data.storage3, 10);
    if (type2 > 0) { montagem = [data.varName2, dataType, data.varName3, "Позиция элемента"] } else { montagem = [data.varName2, dataType] }
    return montagem
  },


  fields: ["list", "varName", "getType", "position", "escolher", "storage3", "varName3", "storage", "varName2", "descriptioncolor", "description", "descriptionx", "convert"],


  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.4</div>

    <div style="width: 100%; padding:5px 0px;height: calc(100vh - 160px);overflow:auto">

    <div id="flutuador" style="padding:0px 0px 15px 0px">
    <table style="width:100%;"><tr>
    <td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Не обязательно поле"></td>
    <td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
    </tr></table>
    </div>

<div>
	<div style="float: left; width: 40%;">
  <span class="dbminputlabel">Список</span><br>
		<select id="list" class="round" onchange="glob.listChange(this, 'varNameContainer')">
			${data.lists[isEvent ? 1 : 0]}
		</select>
	</div>
	<div id="varNameContainer" style="display: none; float: right; width: 58%;">
  <span class="dbminputlabel">Имя переменной</span><br>
		<input id="varName" class="round" type="text" list="variableList"><br>
	</div>
</div>

<br><br><br>

<div style="padding-top: 8px;">
	<div style="float: left; width: 40%;">
		<span class="dbminputlabel">Извлечь</span><br>
		<select id="getType" class="round" onchange="glob.onChange1(this)">
			<option value="0" selected>Первый элемент</option>
      <option value="6">Средний элемент</option>
			<option value="1">Последний элемент</option>
      <option value="3">Элемент по позиции</option>
			<option value="2">Случайный элемент</option>
      <option value="4">Случайный элемент [чётный]</option>
      <option value="5">Случайный элемент [нечётный]</option>
      <option value="7">Случайный элемент [между]</option>
      <option value="8">Случайный элемент [равный]</option>
		</select>
	</div>
	<div id="positionHolder" style="float: right; width: 58%; display: none;">
		<span class="dbminputlabel">Позиция</span><br>
		<input id="position" class="round" type="text"><br>
	</div>
  <div id="escolherHolder" style="float: right; width: 58%; display: none;">
		<span class="dbminputlabel" name="alter">Выбрать</span><br>
		<input id="escolher" class="round" type="text"><br>
	</div>
</div>

<br><br><br><br>

<div style="float: left; width: 40%;">
	<span class="dbminputlabel">Сохранить позицию элемента</span><br>
		<select id="storage3" class="round" onchange="glob.variableChange(this, 'varNameContainer3')">
		${data.variables[0]}
		</select>
	</div>
	<div id="varNameContainer3" style="float: right; display: none; width: 58%;">
	<span class="dbminputlabel">Имя переменной</span><br>
		<input id="varName3" class="round" type="text">
	</div>
  <br><br><br><br>
<div style="float: left; width: 35%;">
	<span class="dbminputlabel">Сохранить в</span><br>
		<select id="storage" class="round">
		${data.variables[1]}
		</select>
	</div>
	<div style="float: left; width: 40%;padding:0px 6px">
	<span class="dbminputlabel">Имя переменной</span><br>
		<input id="varName2" class="round" type="text">
    </div>
    <div style="float: right; width: 25%;">
    <span class="dbminputlabel">Формат</span><br>
		<select id="convert" class="round">
			<option value="0" selected>Источник</option>
			<option value="1">Число</option>
      <option value="2">Текст</option>
		</select>
	</div>


  </div>

<style>

.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}

</style>
`
  },


  init() {
    const { glob, document } = this;

    glob.onChange1 = function (event) {
      const value = parseInt(event.value, 10);
      const dom = document.getElementById("positionHolder");
      const dom2 = document.getElementById("escolherHolder");
      if (value == 3) {
        dom.style.display = null;
      } else {
        dom.style.display = "none";
      }
      if (value == 7 || value == 8) {
        dom2.style.display = null;
      } else {
        dom2.style.display = "none";
      }
    };

    glob.onChange2 = function (event) {
      const value = parseInt(event.value, 10);
      const dom = document.getElementById("varNameContainer3");
      if (value == 0) {
        dom.style.display = "none";
      } else {
        dom.style.display = null;
      }
    };



    glob.listChange(document.getElementById("list"), "varNameContainer");
    glob.onChange1(document.getElementById("getType"));
    glob.onChange2(document.getElementById("storage3"));

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
    const list = await this.getListFromData(data.list, data.varName, cache);

    const type = parseInt(data.getType, 10);
    let result;
    let result2;
    switch (type) {
      case 0:
        result = list[0];
        result2 = 0;
        break;
      case 1:
        result = list[list.length - 1];
        result2 = Math.floor(list.length - 1);
        break;
      case 2:
        result2 = Math.floor(Math.random() * list.length);
        result = list[result2];
        break;
      case 3:
        const position = parseInt(this.evalMessage(data.position, cache), 10);
        if (position < 0) {
          result = list[0];
          result2 = 0;
        } else if (position >= list.length) {
          result = list[list.length - 1];
          result2 = Math.floor(list.length - 1);
        } else {
          result = list[position];
          result2 = Math.floor(position);
        }
        break;
      case 4:
        calc1 = Math.floor(list.length / 2);
        calc2 = Math.floor(Math.random() * calc1);
        calc3 = Math.floor(calc2 * 2);
        result2 = Math.floor(calc3 + 1)
        result = list[result2];
        break;
      case 5:
        calc1 = Math.ceil(list.length / 2);
        calc2 = Math.floor(Math.random() * calc1);
        result2 = Math.floor(calc2 * 2);
        result = list[result2];
        break;
      case 6:
        calc1 = Math.floor(list.length / 2);
        result2 = Math.floor(calc1);
        result = list[result2];
        break;
      case 7:
        const escolher = parseInt(this.evalMessage(data.escolher, cache), 10);
        calc1 = Math.floor(list.length / escolher);
        calc2 = Math.floor(Math.random() * calc1);
        calc3 = Math.floor(escolher * calc2);
        result2 = Math.floor(calc3)
        result = list[result2];
        break;
      case 8:
        const posicoes = [];
        list.forEach((item, indice) => {
          if (item === this.evalMessage(data.escolher, cache)) {
            posicoes.push(indice);
          }
        });
        random = Math.floor(Math.random() * posicoes.length);
        result2 = posicoes[random]
        result = list[result2];
        break;
    }

    const varName2 = this.evalMessage(data.varName2, cache);
    const storage2 = parseInt(data.storage, 10);

    if (data.convert == "1") { result = parseFloat(result) }
    if (data.convert == "2") { result = result.toString() }

    this.storeValue(result, storage2, varName2, cache);

    if (result2 !== undefined) {
      const varName3 = this.evalMessage(data.varName3, cache);
      const storage3 = parseInt(data.storage3, 10);
      this.storeValue(result2, storage3, varName3, cache);
    }

    this.callNextAction(cache);
  },


  mod() { },
};
