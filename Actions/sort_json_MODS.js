module.exports = {
	name: "Sort JSON MOD",
	section: "Lists and Loops",
	meta: {
		version: '2.1.7',
		preciseCheck: true,
		author: '[xinxyla - 172782058396057602]',
		authorUrl: 'https://github.com/DBM-Mods/Russia',
		downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
	},

	subtitle: function (data) {
		const list = ['', 'Временная переменная', 'Серверная перменная', 'Глобальная перменная'];
		const classic = ['Порядок возрастания [0-9]', 'Порядок убывания [9-0]', 'Алфавитный порядок [A-Z]', 'Обратный алфавитный порядок [Z-A]', 'Длина [по возрастанию]', 'Длина [в порядке убывания]'];

		if (data.descriptionx) {
			desccor = data.descriptioncolor;
		} else {
			desccor = "none";
		}

		return data.description
			? `<font style="color:${desccor}">${data.description}</font>`
			: `<font style="color:${desccor}">(${classic[parseInt(data.sorte)]}) ${list[parseInt(data.list)]} (${data.varName}) para ${list[parseInt(data.storage)]} (${data.varName2})</font>`
	},


	variableStorage(data, varType) {
		if (parseInt(data.storage, 10) !== varType) return;
		return [data.varName2, 'List'];
	},


	fields: ["list", "varName", "storage", "varName2", "coluna", "sorte", "description", "descriptionx", "descriptioncolor"],

	html: function (isEvent, data) {
		return `
		<div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновление</div>
		<div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.1</div>
	
		<div style="width: 100%; padding:5px 0px;height: calc(100vh - 160px);overflow:auto">

		<div id="flutuador" style="padding:0px 0px 15px 0px">
		<table style="width:100%;"><tr>
		  <td>
			<span class="dbminputlabel">Описание действия</span><br>
			<input type="text" class="round" id="description" placeholder="Оставьте пустым, чтобы не использовалось!">
		  </td>
		  <td style="padding:0px 0px 0px 10px;width:70px">
			<div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px">
			  <dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox>
			</div>
			<br>
			<input type="color" value="#ffffff" class="round" id="descriptioncolor">
		  </td>
		</table>
	  </div>

	<div>
		<div style="float: left; width: 35%;">
		<span class="dbminputlabel">Источник из JSON</span><br>
			<select id="list" class="round" onchange="glob.refreshVariableList(this)">
				${data.variables[1]}
			</select><br>
		</div>
		<div id="varNameContainer" style=" float: right; width: 60%;">
		<span class="dbminputlabel">Имя переменной</span><br>
			<input id="varName" class="round" type="text" list="variableList"><br>
		</div><br><br><br>

		<span class="dbminputlabel">Сортировка по столбцу (используйте . для подстолбцов)</span><br>
		<input type="text" class="round" id="coluna">


		<br>
		<div style="width: 100%;">
		<span class="dbminputlabel">Список сортировки</span><br>
			<select id="sorte" class="round" style="width: 100%;">
			<option value="0" selected>Сортировка чисел в порядке возрастания [0-9]</option>
			<option value="1">Сортировка чисел в порядке убывания [9-0]</option>
				<option value="2">Сортировать по алфавиту [A-Z]</option>
				<option value="3">Сортировать в обратном алфавитном порядке [Z-A]</option>
				<option value="4">Сортировать по длине [по возрастанию]</option>
				<option value="5">Сортировать по длине [по убыванию]</option>
			</select>
		</div>
	</div><br>
	<div>
		<div style="float: left; width: 35%;">
		<span class="dbminputlabel">Хранить в</span><br>
			<select id="storage" class="round">
				${data.variables[1]}
			</select>
		</div>
		<div id="varNameContainer2" style="float: right; width: 60%;">
		<span class="dbminputlabel">Имя переменной</span><br>
			<input id="varName2" class="round" type="text">
		</div>
	</div>
	
	</div>

<style>
.dbmmodsbr1 {
  position: absolute;
  bottom: 0px;
  border: 0px solid rgba(50,50,50,0.7);
  background: rgba(0,0,0,0.7);
  color: #999;
  padding: 5px;
  left: 0px;
  z-index: 999999;
  cursor: pointer
}

.dbmmodsbr2 {
  position: absolute;
  bottom: 0px;
  border: 0px solid rgba(50,50,50,0.7);
  background: rgba(0,0,0,0.7);
  color: #999;
  padding: 5px;
  right: 0px;
  z-index: 999999;
  cursor: pointer
}

</style>
	`
	},

	init: function () {
		const { glob, document } = this;

		glob.refreshVariableList(document.getElementById('list'));

		const xinelaslinks = document.getElementsByClassName("xinelaslink");
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

	action: function (cache) {
		const data = cache.actions[cache.index];
		const storage = parseInt(data.storage);
		const varName = this.evalMessage(data.varName, cache);
		const coluna = this.evalMessage(data.coluna, cache);
		const list = this.getVariable(storage, varName, cache);
		const sorte = parseInt(data.sorte);

		function getNestedValue(obj, columns) {
			const columnArr = columns.split('.');
			let colunas = obj;
			
			for (let i = 0; i < columnArr.length; i++) {
			  if (colunas && colunas.hasOwnProperty(columnArr[i])) {
				colunas = colunas[columnArr[i]];
			  } else {
				return undefined;
			  }
			}
			
			return colunas;
		  }
	  
		  const colunasAninhadas = coluna;

		let result;


		switch (sorte) {
			case 0:
				result = list.sort((a, b) => getNestedValue(a, colunasAninhadas) - getNestedValue(b, colunasAninhadas));
				break;
			case 1:
				result = list.sort((a, b) => getNestedValue(b, colunasAninhadas) - getNestedValue(a, colunasAninhadas));

				break;
			case 2:
				result = list.sort((a, b) => getNestedValue(a, colunasAninhadas).localeCompare(getNestedValue(b, colunasAninhadas)));
				break;
			case 3:
				result = list.sort((a, b) => getNestedValue(b, colunasAninhadas).localeCompare(getNestedValue(a, colunasAninhadas)));
				break;
			case 4:
				result = list.sort(function (a, b) { return getNestedValue(a, colunasAninhadas).length - getNestedValue(b, colunasAninhadas).length });
				break;
			case 5:
				result = list.sort(function (a, b) { return getNestedValue(b, colunasAninhadas).length - getNestedValue(a, colunasAninhadas).length });
				break;
		}

		if (result !== undefined) {
			const storage = parseInt(data.storage, 10);
			const varName2 = this.evalMessage(data.varName2, cache);
			this.storeValue(result, storage, varName2, cache);
		}

		this.callNextAction(cache);
	},

	mod() { },
};
