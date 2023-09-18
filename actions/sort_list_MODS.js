module.exports = {

	name: "Sort List MOD",
	section: "Lists and Loops",
	meta: {
		version: '2.1.7',
		preciseCheck: true,
		author: '[XinXyla - 172782058396057602]',
		authorUrl: 'https://github.com/DBM-Mods/Russia',
		downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
	  },
	
	subtitle: function(data) {
		const list = ['', 'Временная переменная', 'Переменная сервера', 'Глобальная переменная'];
		const classic = ['По возрастанию [0-9]','По убыванию [9-0]','По алфавиту [A-Z]','По алфавиту в обратном порядке [Z-A]','По длине [по возрастанию]','По длине [по убыванию]'];
		return `(${classic[parseInt(data.sorte)]}) ${list[parseInt(data.list)]} (${data.varName}) в ${list[parseInt(data.storage)]} (${data.varName2})`;
	  },
	  
	  variableStorage(data, varType) {
		if (parseInt(data.storage, 10) !== varType) return;
		return [data.varName2, 'Список'];
	  },
	  
	  fields: ["list", "varName", "storage", "varName2", "sorte"],
	  
	  html: function(isEvent, data) {
		return `
		  <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.2</div>
		  <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>
		  <div>
			<div style="float: left; width: 35%;">
			  <span class="dbminputlabel">Источник списка</span><br>
			  <select id="list" class="round" onchange="glob.refreshVariableList(this)">
				${data.variables[1]}
			  </select><br>
			</div>
			<div id="varNameContainer" style=" float: right; width: 60%;">
			  <span class="dbminputlabel">Имя переменной</span><br>
			  <input id="varName" class="round" type="text" list="variableList"><br>
			</div><br><br><br>
			<div style=" float: right; width: 100%;">
			  <span class="dbminputlabel">Сортировать список</span><br>
			  <select id="sorte" class="round" style="width: 100%;">
				<option value="0" selected>По возрастанию чисел [0-9]</option>
				<option value="1">По убыванию чисел [9-0]</option>
				<option value="2">По алфавиту [A-Z]</option>
				<option value="3">По алфавиту в обратном порядке [Z-A]</option>
				<option value="4">По длине [по возрастанию]</option>
				<option value="5">По длине [по убыванию]</option>
			  </select>
			</div>
		  </div><br><br><br><br>
		  <div>
			<div style="float: left; width: 35%;">
			  <span class="dbminputlabel">Сохранить в</span><br>
			  <select id="storage" class="round">
				${data.variables[1]}
			  </select>
			</div>
			<div id="varNameContainer2" style="float: right; width: 60%;">
			  <span class="dbminputlabel">Имя переменной</span><br>
			  <input id="varName2" class="round" type="text">
			</div>
		  </div>`;
	  },
	  
	  init: function() {
		const {glob, document} = this;
		glob.refreshVariableList(document.getElementById('list'));
	  },
	  
	  action: function(cache) {
		const data = cache.actions[cache.index];
		const storage = parseInt(data.storage);
		const varName = this.evalMessage(data.varName, cache);
		const list = this.getVariable(storage, varName, cache);
		const sorte = parseInt(data.sorte);
	
		let result;
	
		switch(sorte) {
		  case 0:
			result = list.sort((a, b) => a - b);
			break;
		  case 1:
			result = list.sort((a, b) => b - a);
			break;
		  case 2:
			result = list.sort();
			break;
		  case 3:
			result = list.sort().reverse();
			break;
		  case 4:
			result = list.sort(function(a, b){return a.length - b.length});
			break;
		  case 5:
			result = list.sort(function(a, b){return b.length - a.length});
			break;
		}
		
		if (result !== undefined) {
		  const storage = parseInt(data.storage, 10);
		  const varName2 = this.evalMessage(data.varName2, cache);
		  this.storeValue(result, storage, varName2, cache);
		}
	  
		this.callNextAction(cache);
	  },
	
		mod() {},
};
