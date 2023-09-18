module.exports = {
  name: 'Delete Json Data',
  displayName: "Delete Json Data MOD",
  section: 'Custom Data',

  meta: {
    version: '2.1.7',
    preciseCheck: false,
    author: '[Дизайнер LIK (Данил) - 866884416151355392]<br>[lolmak - 259315943103004672]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },
  subtitle(data, presets) {
    if(data.descriptionx == true){
    desccor = data.descriptioncolor
    } else {
      desccor = 'none'
    }

    return data.description
    ? `<font style="color:${desccor}">${data.description}</font>`
    : `<font style="color:${desccor}">${data.patchJson}</font>`

  },

  fields: ['patchJson', 'patchFile', 'indexVal', 'descriptioncolor', 'description', 'descriptionx'],

  html(_isEvent, data) {
    return `
	<div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.1</div>

<div style="padding:0px 0px 15px 0px">
<table style="width:100%;"><tr>
<td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Оставьте пустым, чтобы не использовалось!"></td>
<td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
</tr></table>
</div>

<div style="float: left; width: 100%; padding-top: 10px;">
<span class="dbminputlabel">Путь к файлу</span><br>
  <input id="patchFile" class="round" type="text" placeholder="data/File.json">
</div>

<div style="float: left; width: 100%; padding-top: 20px;">
<table style="width:100%;"><tr>
<td><span class="dbminputlabel">JSON путь</span><br><input type="text" class="round" id="patchJson" placeholder="Через &quot;/&quot; Например: Билеты/номер билета"></td>
<td style="padding:0px 0px 0px 15px;width:85px"><div style="float:left"><span class="dbminputlabel"> Индекс </span></div><br><input type="text" value="N" class="round" placeholder="&quot;N&quot;" id="indexVal"></td>
</tr></table>
</div>

<style>

.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}

  </style>`;
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
			console.log(`Запуск URL: [${url}] В вашем браузере по умолчанию.`);
			require('child_process').execSync(`start ${url}`);
		  });
		}
	  }
  },

  async action(cache) {
	const fs = require("fs-extra")
	const data = cache.actions[cache.index];
	let dataPatchJson = this.evalMessage(data.patchJson, cache);
    let dataPatchFile = this.evalMessage(data.patchFile, cache);
	let dataIndexVal = this.evalMessage(data.indexVal, cache);
	if (dataIndexVal == "N") {
		let jsonText;
		try {
			jsonText = JSON.parse(fs.readFileSync(dataPatchFile))
		} catch (err) {
			console.error('Ошибка в действии \"Delete Json Data\":\n' +
			'Ошибка при чтении файла. Возможно путь указан неверно. Полная ошибка:\n' + err)
		}
		if (jsonText !== undefined) {
			dataPatchJson = '[\"' + dataPatchJson.replaceAll('/', '\"]?.[\"') + '\"]';
			if (eval('jsonText' + dataPatchJson + '') == undefined) {
				console.error('Ошибка в действии \"Delete Json Data\":\n' +
				'Неверно указан Json путь.\n\n' +
				'Если вы не знаете как работает JSON-путь, вам может помочь сайт https://jsonpathfinder.com' +
				'\nПросто скопируйте Patch с сайта, убрав \"x.\" вначале и заменив последующие точки на \"/\".')
			} else {
				let jsonTextEdt = 'delete jsonText' + dataPatchJson + '';
				eval(jsonTextEdt)
				try {
					fs.writeFileSync(dataPatchFile, JSON.stringify(jsonText, null, 4));
				} catch (err) {
					console.error(err);
				}
			}
		}
	} else {
				let jsonText;
		try {
			jsonText = JSON.parse(fs.readFileSync(dataPatchFile))
		} catch (err) {
			console.error('Ошибка в действии \"Delete Json Data\":\n' +
			'Ошибка при чтении файла. Возможно путь указан неверно. Полная ошибка:\n' + err)
		}
		if (jsonText !== undefined) {
			dataPatchJson = '[\"' + dataPatchJson.replaceAll('/', '\"]?.[\"') + '\"]';
			if (eval('jsonText' + dataPatchJson + '[dataIndexVal]') == undefined) {
				console.error('Ошибка в действии \"Delete Json Data\":\n' +
				'Неверно указан Json путь.\n\n' +
				'Если вы не знаете как работает JSON-путь, вам может помочь сайт https://jsonpathfinder.com' +
				'\nПросто скопируйте Patch с сайта, убрав \"x.\" вначале и заменив последующие точки на \"/\".')
			} else {
				let jsonTextEdt = 'jsonText' + dataPatchJson + '.splice(dataIndexVal,1)';
				eval(jsonTextEdt)
				try {
					fs.writeFileSync(dataPatchFile, JSON.stringify(jsonText, null, 4));
				} catch (err) {
					console.error(err);
				}
			}
		}
	}
    this.callNextAction(cache);
  },
  mod() {},
};
