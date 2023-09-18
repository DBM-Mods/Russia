module.exports = {
	name: "Store User Info MOD",
	section: "Member Control",
	meta: {
		version: '2.1.7',
		preciseCheck: true,
		author: '[XinXyla - 172782058396057602]<br>[Tempest - 321400509326032897]',
		authorUrl: 'https://github.com/DBM-Mods/Russia',
		downloadURL: 'https://github.com/DBM-Mods/Portugues/archive/refs/heads/main.zip',
	},

	subtitle(data, presets) {
		const info = [
			"Объект",
			"Идентификатор пользователя",
			"Имя пользователя",
			"Дискриминатор",
			"Тег пользователя",
			"URL-адрес аватара",
			"Учетная запись создана в (дата)",
			"Учетная запись создана в (метка времени)",
			"Список значков",
			"Это бот?",
			"Баннер пользователя",
		];

		if (data.descriptionx) {
			desccor = data.descriptioncolor;
		} else {
			desccor = "none";
		}

		return data.description
			? `<font style="color:${desccor}">${data.description}</font>`
			: `<font style="color:${desccor}">Пользователь: ${data.id} - ${info[parseInt(data.info, 10)]} </font>`
	},



	variableStorage: function (data, varType) {
		const type = parseInt(data.storage2);
		if (type !== varType) return;
		const info = parseInt(data.info);
		let dataType = "Unknown Type";
		switch (info) {
			case 0:
				dataType = "Объект";
				break;
			case 1:
				dataType = "ID";
				break;
			case 2:
				dataType = "Текст";
				break;
			case 3:
				dataType = "Текст";
				break;
			case 4:
				dataType = "Текст";
				break;
			case 5:
				dataType = "URL";
				break;
			case 6:
				dataType = "Data";
				break;
			case 7:
				dataType = "Timestamp";
				break;
			case 8:
				dataType = "Флаги";
				break;
			case 9:
				dataType = "true/false";
				break;
			case 10:
				dataType = "URL";
				break;
			default:
				break;
		}
		return ([data.varName2, dataType]);
	},



	fields: ["id", "info", "storage2", "varName2", "description", "descriptionx", "descriptioncolor", "iffalse", "iffalseVal", "actionsfalse",],



	html(isEvent, data) {
		return `
		<div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Portugues/archive/refs/heads/main.zip">Обновление</div>
		<div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.1</div>
	
		<div style="width: 100%; padding:5px 0px;height: calc(100vh - 160px);overflow:auto">
	
	  <div id="flutuador" style="padding:0px 0px 15px 0px">
		<table style="width:100%;"><tr>
			<td>
			<span class="dbminputlabel">Описание действия</span>
			<br>
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
	
	
	  <span class="dbminputlabel">Идентификатор пользователя</span><br>
	  <input type="text" class="round" id="id">


	  <br>
<div>
	<span class="dbminputlabel">Информация</span><br>
		<select id="info" class="round">
	  <option value="0" selected>Объект</option>
	  <option value="1">Идентификатор пользователя</option>
	  <option value="2">Имя пользователя</option>
	  <option value="3">Дискриминатор</option>
	  <option value="4">Тег пользователя</option>
	  <option value="5">URL-адрес аватара</option>
      <option value="6">Учетная запись создана в (дата)</option>
      <option value="7">Учетная запись создана в (метка времени)</option>
      <option value="8">Список флагов</option>
	  <option value="9">Это бот?</option>
	  <option value="10">Баннер пользователя</option>
	  <option value="11">Цвет выделения пользователя</option>
		</select>
</div>

<br>


<div style="overflow:hidden">
	<div style="float: left; width: 35%;">
	<span class="dbminputlabel">Хранить в</span><br>
		<select id="storage2" class="round">
			${data.variables[1]}
		</select>
	</div>
	<div id="varNameContainer2" style="float: right; width: 60%;">
	<span class="dbminputlabel">Имя переменной</span><br>
		<input id="varName2" class="round" type="text"><br>
	</div>
</div>


<div>
<div style="float: left; width: 38%" id="xinxylafalse">
<span class="dbminputlabel">Если не найдено</span><br>
  <select id="iffalse" class="round" onchange="glob.onChangeFalse(this)">
  <option value="0" selected>Продолжить действия</option>
  <option value="1">Остановить последовательность действий</option>
  <option value="2">Перейти к действию</option>
  <option value="3">Пропустить следующие действия</option>
  <option value="4">Перейти к якорю действия</option>
  <option value="5">Выполнение действий и остановить</option>
  <option value="6">Выполнить действия и продолжить</option>
  </select>
  <br>
  </div>
  <div id="iffalseContainer" style="display: none; float: right; width: 60%;"><div id="xincontrolf"><span id="iffalseName" class="dbminputlabel">Para</span><br><input id="iffalseVal" class="round" name="iffalseVal" type="text"></div>
  </div><br></div>
  <div id="containerxinf" style="width:100%;height:calc(100vh - 410px)">
  <br><br>
  <action-list-input id="actionsfalse" height="calc(100vh - 450px)"></action-list-input>
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
  cursor: pointer;
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
  cursor: pointer;
}
</style>

`;
	},



	init: function () {
		const { glob, document } = this;

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

		glob.onChangeFalse = function (event) {
			if (event.value > "1") {
				document.getElementById("iffalseContainer").style.display = null;
			} else {
				document.getElementById("iffalseContainer").style.display = "none";
			}
			if (event.value == "5" || event.value == "6") {
				document.getElementById("containerxinf").style.display = null;
				document.getElementById("xincontrolf").style.display = "none";
				document.getElementById("xinxylafalse").style.width = "100%";
			} else {
				document.getElementById("containerxinf").style.display = "none";
				document.getElementById("xincontrolf").style.display = null;
				document.getElementById("xinxylafalse").style.width = "38%";
			}
			if (event.value == "2") {
				document.querySelector("[id='iffalseName']").innerText = (`Номер действия`);
			}
			if (event.value == "3") {
				document.querySelector("[id='iffalseName']").innerText = (`Пропустить действия`);
			}
			if (event.value == "4") {
				document.querySelector("[id='iffalseName']").innerText = (`Название якоря`);
			}
		}

		glob.onChangeFalse(document.getElementById('iffalse'));

	},


	async action(cache) {
		const data = cache.actions[cache.index];
		const iduser = this.evalMessage(data.id, cache)
		const client = this.getDBM().Bot.bot

		try {
			mem = await client.users.fetch(iduser);
			const info = parseInt(data.info);
			let result;
			switch (info) {
				case 0:
					result = mem;
					break;
				case 1:
					result = mem.id;
					break;
				case 2:
					result = mem.username;
					break;
				case 3:
					result = mem.discriminator;
					break;
				case 4:
					result = mem.tag;
					break;
				case 5:
					result = mem.displayAvatarURL({ dynamic: true, format: "png", size: 4096 });
					break;
				case 6:
					result = mem.createdAt;
					break;
				case 7:
					result = mem.createdTimestamp;
					break;
				case 8:
					if (mem) {
						result = mem?.flags?.toArray() ?? (await mem?.fetchFlags())?.toArray();
					} else {
						result = mem.flags.toArray();
					}
					break;
				case 9:
					result = mem.bot
					break;
				case 10:
					try {
						result = mem.bannerURL({ format: "png", size: 4096, dynamic: true });
					} catch (err) {
						server = cache.server;
						if (server.memberCount !== server.members.cache.size) server.members.fetch();
						const members = server.members.cache;

						member = members.get(iduser)
						user = await member.user.fetch();
						result = member.user.bannerURL({ format: "png", size: 4096, dynamic: true });
					}
					break;
				case 11:
					result = mem.accentColor

					if (result == undefined || result == "undefined") {
						server = cache.server;
						if (server.memberCount !== server.members.cache.size) server.members.fetch();
						const members = server.members.cache;

						member = members.get(iduser)
						user = await member.user.fetch();
						result = member.user.accentColor
					}
					break;
			}

			const storage2 = parseInt(data.storage2);
			const varName2 = this.evalMessage(data.varName2, cache);
			this.storeValue(result, storage2, varName2, cache);
			this.callNextAction(cache);

		} catch (err) {


			if (data.iffalse == "5" || data.iffalse == "6") {

				if (data.iffalse == "5") {
					this.executeSubActions(data.actionsfalse, cache)
				} else {
					this.executeSubActionsThenNextAction(data.actionsfalse, cache)
				}

			} else {
				this.executeResults(false, data, cache);
			}


		}
	},

	modInit(data) {
		this.prepareActions(data.actionsfalse);
	},

	mod() { }
}
