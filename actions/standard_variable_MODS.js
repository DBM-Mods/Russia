module.exports = {

  name: "Standart Variable MOD",
  section: "Other Stuff",
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[xinxyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {

    if (data.descriptionx == true) {
      desccor = data.descriptioncolor
    } else {
      desccor = 'none'
    }

    const storage = presets.variables;

    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">${storage[parseInt(data.storage, 10)]} (${data.varName}) ${data.changeType === "1" ? "+=" : "="} ${data.value
      }</font>`
  },


  variableStorage(data, varType) {
    const type = parseInt(data.storage, 10);
    if (type !== varType) return;
    return [data.varName, "Unknown Type"];
  },


  fields: ["storage", "varName", "und", "null", "NaN", "false", "nolista", "value", "descriptioncolor", "description", "descriptionx"],


  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.1</div>

    <div style="width: 100%; padding:5px 5px;height: calc(100vh - 160px);overflow:auto">

    <div id="flutuador" style="padding:0px 0px 15px 0px">
<table style="width:100%;"><tr>
<td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Не обязательное поле"></td>
<td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
</tr></table>
</div>

<store-in-variable dropdownLabel="Хранить в" selectId="storage" variableContainerId="varNameContainer" variableInputId="varName"></store-in-variable>

<br><br><br>


	<div style="float: left; width: 100%;">
		<span class="dbminputlabel">Значение</span><br>
    <textarea id="value" rows="4" class="round" name="is-eval" style="width:100%"></textarea><br>
	</div>

  <br>
  <span class="dbminputlabel">Установить по умолчанию, если</span><br>
  <div style="background:rgba(255,255,255,0.1);padding:8px;overflow: hidden;">
  <dbm-checkbox id="und" style="float:left;padding:2px 0px" label="Для undefined"></dbm-checkbox>
  <dbm-checkbox style="float:left;padding:2px 0px" id="null" label="Для null/undefined" checked></dbm-checkbox>
  <dbm-checkbox style="float:left;padding:2px 0px" id="NaN" label="Для NaN/null/undefined"></dbm-checkbox>
  <dbm-checkbox style="float:left;padding:2px 0px" id="false" label="Для false"></dbm-checkbox>
  <dbm-checkbox style="float:left;padding:2px 0px" id="nolista" label="Если это не список"></dbm-checkbox>
</div>
  </div>

<style>

.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}

</style>
`;
  },



  init() {
    const { glob, document } = this;

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
    const storage = this.getVariable(type, varName, cache);

    let val = this.evalMessage(data.value, cache);
    try {
      val = this.eval(val, cache);
    } catch (e) {
      this.displayError(data, cache, e);
    }

    if (data.und == true) {
      if (storage == undefined || storage == "undefined") {
        result = val;
        this.storeValue(result, type, varName, cache);
      }
    }

    if (data.NaN == true) {

      if (storage == NaN || storage == "NaN" || isNaN(parseFloat(storage))) {
        result = val;
        this.storeValue(result, type, varName, cache);
      }
    }

    if (data.null == true) {
      if (storage == "null" || storage == null) {
        result = val;
        this.storeValue(result, type, varName, cache);
      }
    }

    if (data.false == true) {
      if (storage == false) {
        result = val;
        this.storeValue(result, type, varName, cache);
      }
    }

    if (data.nolista == true) {
      if (Boolean(Array.isArray(storage)) == false){
        result = val;
        this.storeValue(result, type, varName, cache);
      }
    }


    this.callNextAction(cache);
  },


  mod() { },
};
