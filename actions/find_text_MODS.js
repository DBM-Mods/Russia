module.exports = {
name: "Find Text MOD",
section: "Other Stuff",
meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]<br>[Tempest - 321400509326032897]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

subtitle: function(data) {
	return `Поиск "${data.find}" из "${data.text}"`;
},

variableStorage: function(data, varType) {
	const type = parseInt(data.storage);
	if(type !== varType) return;
	let dataType = 'Число';
	return ([data.varName, dataType]);
},

fields: ["text", "position", "find", "mai", "ace", "storage", "varName","iffalse", "iffalseVal"],


html: function(isEvent, data) {
	return `
	<div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.1</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>

	<div style="width: 100%; padding:10px 5px;height: calc(100vh - 180px);overflow:auto">

	<span class="dbminputlabel">Текст</span><br>
	<textarea id="text" rows="3" style="width: 100%; font-family: monospace; white-space: nowrap"></textarea>

	<br>

	<table><tr><td class="col1">
	<span class="dbminputlabel">Позиция</span><br>
		<select id="position" class="round">
			<option value="0" selected>Начало текста</option>
			<option value="1">Конец текста</option>
	</select>
	</td>
	<td class="col2">
	<span class="dbminputlabel">Найти текст</span><br>
		<input id="find" class="round" type="text">
		</td></tr></table>

	<br>
	<div style="width:100%">
	<dbm-checkbox id="mai" style="float:left" label="Даже с прописным/нижним регистрацией" checked></dbm-checkbox> <dbm-checkbox style="float:left" id="ace" label="Даже с акцентами" checked></dbm-checkbox>
	</div>
	
	<br><br>

<table><tr><td class="col1">
<span class="dbminputlabel">Сохранить в</span><br>
    <select id="storage" class="round">
        ${data.variables[1]}
    </select>
</td>
<td class="col2">
<span class="dbminputlabel">Имя переменной</span><br>
        <input id="varName" class="round" type="text">
    </div>
</td></tr></table>
<br>

<table><tr><td class="col1">
<span class="dbminputlabel">Если не найдено</span><br>
<select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
<option value="0">Продолжать</option>
<option value="1" selecionado>Остановить выполнение действий</option>
<option value="2">Перейти к действию</option>
<option value="3">Пропустить следующие действия</option>
<option value="4">Перейти к якорю действия</option>
</select>
</td>
<td class="col2">
<div id="iffalseContainer" style="display: none"><span id="xinelas" class="dbminputlabel">Para</span><br><input id="iffalseVal" class="round" name="actionxinxyla" type="text"></div>
</td></tr></table>
	</div>
	
<style>	
table{width:100%}
.col1{width:35%;padding:0px 10px 0px 0px}
.col2{width:65%}
</style>`
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
      document.querySelector("[id='xinelas']").innerText = (`Пропустить`);
    }
    if (event.value == "4") {
      document.querySelector("[id='xinelas']").innerText = (`Якоря название`);
    }
  }

    glob.onComparisonChanged(document.getElementById("iffalse"));

  },

  async action(cache) {
    const data = cache.actions[cache.index];
    text = this.evalMessage(data.text, cache);
    find = this.evalMessage(data.find, cache);
    const position = parseInt(data.position, 10);

if(data.mai == true){
	find = find.toString().toLowerCase()
	text = text.toString().toLowerCase()
}

if(data.ace == true){
const comAcentos = "ÄÅÁÂÀÃĀĂĄāăąäáâàãÉÊËÈĖĘĚĔĒėęěĕēéêëèÍÎÏÌİĮĪıįīíîïìÖÓÔÒÕŐŌőōöóôòõÜÚÛŲŰŮŪųűůūüúûùÇĆČçćčÑŇŅŃñňņńŸÝÿýŹŻŽźżžŁĽĻĹłľļĺĶķĢĞģğĎďŚŠŞśšşŤȚŢťțţŔŘŕř";
const semAcentos = "AAAAAAAAAaaaaaaaaEEEEEEEEEeeeeeeeeeIIIIIIIiiiiiiiOOOOOOOoooooooUUUUUUUuuuuuuuuCCCcccNNNNnnnnYYyyZZZzzzLLLLllllKkGGggDdSSSsssTTTtttRRrr";                           

find = find.toString();
text = text.toString();

for(var i = 0; i <= comAcentos.length; i++) {
	text = text.replaceAll(comAcentos[i], semAcentos[i])
	find = find.replaceAll(comAcentos[i], semAcentos[i])
}

}

	let result;

    switch (position) {
      case 0:
        result = text.indexOf(find);
        break;
      case 1:
		if(text.indexOf(find) >= 0){
        result = find.length + text.indexOf(find)} else
		{result = -1}
        break;
      default:
        break;
    }

    const storage = parseInt(data.storage, 10);
    const varName = this.evalMessage(data.varName, cache);
    this.storeValue(result, storage, varName, cache);

    if(result == -1){this.executeResults(false, data, cache)}else{
    this.callNextAction(cache)}
  },

  mod() {},
};
