module.exports = {
  name: "Run Script MOD",
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


    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">${data.code}</font>`
  },



  variableStorage(data, varType) {
    const type = parseInt(data.storage, 10);
    if (type !== varType) return;
    return [data.varName, "Unknown Type"];
  },


  fields: ["behavior", "interpretation", "code", "storage", "varName", "descriptioncolor", "description", "descriptionx",],


  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.1</div>

    <div style="width: 100%; padding:1px 0px;height: calc(100vh - 160px);overflow:auto">


    <tab-system>

    <tab label="Действие" icon="wizard">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">


    <span class="dbminputlabel">Код</span><br>
    <textarea id="code" rows="9" name="is-eval" style="width: 100%; font-family: monospace; white-space: nowrap;height: calc(100vh - 320px)"></textarea>

  
  <br>
  
  <div style="float: left; width: 35%;">
              <span class="dbminputlabel">Сохранить в</span>
              <select id="storage" class="round" onchange="glob.variableChange(this, 'varNameContainer')">
                  ${data.variables[0]}
              </select>
          </div>
  
          <div style="float: right; width: 60%;" id="varNameContainer">
              <span class="dbminputlabel">Имя переменной</span>
              <input id="varName" class="round" type="text">
          </div>

    </div>
    </tab>

    
    <tab label="Конфигурация" icon="settings">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">

    <table style="width:100%;"><tr>
<td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Не обязательное поле"></td>
<td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
</tr></table>
<br>

<div>
	<div>
		<span class="dbminputlabel">Окончательное поведение</span><br>
		<select id="behavior" class="round">
			<option value="0" selected>Вызывайте следующее действие автоматически</option>
			<option value="1">Не вызывайте следующее действие</option>
		</select>
	</div>

  <br> 

	<div>
		<span class="dbminputlabel">Стиль интерпретации</span><br>
		<select id="interpretation" class="round">
			<option value="0">Сначала проверить код</option>
			<option value="1" selected>Выполните код напрямую</option>
		</select>
	</div>
</div>





    </div>
    </tab>

    <tab label="Помощь" icon="help">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">

    
    <tlt><b>Хранение информации в переменных DBM</b></tlt>
    <tl><table>
    <tr><td class="cols">Временная переменная</td><td class="cols">Actions.storeValue(<span style="color:gold">variaveljs</span>, 1, "<span style="color:green">Имя переменной DBM</span>", cache);</td></tr>
    <tr><td class="cols">Сервернная переменная</td><td class="cols">Actions.storeValue(<span style="color:gold">variaveljs</span>, 2, "<span style="color:green">Имя переменной DBM</span>", cache);</td></tr>
    <tr><td class="cols">Глобальнная переменная</td><td class="cols">Actions.storeValue(<span style="color:gold">variaveljs</span>, 3, "<span style="color:green">Имя переменной DBM</span>", cache);</td></tr>
    </table>
    </tl><br>

    <tlt><b>Получение данных из переменной DBM</b></tlt>
    <tl><table>
    <tr><td class="cols">let text = tempVars("<span style="color:green">Имя переменной DBM</span>")</td></tr>
    </table>
    </tl><br>

    
    <tlt><b>Продолжение действий ДБМ</b></tlt>
    <tl><table>
    <tr><td class="cols">Actions.callNextAction(cache)</td></tr>
    </table>
    </tl><br>

    <tlt><b>Перейти к якорю действия</b></tlt>
    <tl><table>
    <tr><td class="cols">cache.goToAnchor("<span style="color:green">Название якоря</span>")</td></tr>
    </table>
    </tl><br>

    <tlt><b>Перейти к действию X</b></tlt>
    <tl><table>
    <tr><td class="cols">const irpara = <span style="color:green">3</span>;<br>
    const index = Math.max(irpara - 1, 0);<br>
    if(cache.actions[index]) {cache.index = index - 1;this.callNextAction(cache);}</td></tr>
    </table>
    </tl><br>

    </div>
    </tab>
    </tab-system>



</div>
<style>
table{width:100%}
xinspace{padding:10px 0px 0px 0px;display:block}
.col{padding:0px 4px}
.cols{padding:6px 4px;border:1px solid rgba(0,0,0,0.5)}
.col3{width:75%;padding:0px 10px 0px 0px}
.col4{width:25%}
.col5{width:50%;padding:0px 10px 0px 0px}
.col6{width:50%}
.xinelaslink {cursor:pointer}
tl{background:rgba(0,0,0,0.1);border: 1px solid rgba(50,50,50,0.1);padding:5px;width:100%;display:block}
tlt{background:rgba(0,0,0,0.2);border: 1px solid rgba(50,50,50,0.2);padding:4px;width:100%;display:block;text-align:center}
.col1{width:38%;padding:0px 10px 0px 0px}
.col2{width:60%}
.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}

</style>
`;
  },



  init() {
    const { glob, document } = this;

    glob.variableChange(document.getElementById('storage'), 'varNameContainer')

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

  },



  action(cache) {
    const data = cache.actions[cache.index];
    let code;
    if (data.interpretation === "0") {
      code = this.evalMessage(data.code, cache);
    } else {
      code = data.code;
    }
    const result = this.eval(code, cache);
    const varName = this.evalMessage(data.varName, cache);
    const storage = parseInt(data.storage, 10);
    this.storeValue(result, storage, varName, cache);
    if (data.behavior === "0") {
      this.callNextAction(cache);
    }
  },


  mod() {},
};
