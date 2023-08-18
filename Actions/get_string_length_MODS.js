module.exports = {

name: "Get String Length MOD",
section: "Other Stuff",
meta: {
	version: '2.1.7',
	preciseCheck: true,
	author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },


subtitle: function(data) {
	return `${data.girdi || "Тут ничево нет :("}`;
},


variableStorage: function(data, varType) {
	const type = parseInt(data.storage);
	if(type !== varType) return;
	return ([data.varName, 'Число']);
},



fields: ["storage", "varName", "girdi"],


html: function(isEvent, data) {
	return `
	<div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.1</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>
<div>

    <br>

	<div>
	<span class="dbminputlabel">Текст</span><br>
		<textarea id="girdi" class="round" rows="5" cols="60"></textarea>
	</div>

	<br>

    <div>
		<div style="float: left; width: 35%;">
		<span class="dbminputlabel">Сохранить в</span><br>
			<select id="storage" class="round">
				${data.variables[1]}
			</select>
		</div>
		<div id="varNameContainer" style="float: right; width: 60%;">
		<span class="dbminputlabel">Имя переменной</span><br>
			<input id="varName" class="round" type="text">
		</div>
	 </div>

	</div>`
},

init: function() {
},


action: function(cache) {
	const data = cache.actions[cache.index];
	const type = parseInt(data.storage);
	const varName = this.evalMessage(data.varName, cache);
	const girdi = this.evalMessage(data.girdi, cache);
	const storage = this.getVariable(type, varName, cache);

	this.storeValue(girdi.length, type, varName, cache);
	this.callNextAction(cache);
},

mod: function(DBM) {
}

};
