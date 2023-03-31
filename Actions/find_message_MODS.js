module.exports = {
  name: 'Find Message MOD',
  section: 'Messaging',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[Snull - 612775910449610763]<br>[XinXyla - 172782058396057602]<br>[Tempest - 321400509326032897]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data) {
    const info = [
    "Localizar por conteúdo",
    "Localizar por ID",
    "Localizar por timestamp",
    "Localizar por usuário",
    "Localizar mensagens de BOTs",
    "Localizar mensagens de Humanos",
    "Localizar mensagens fixadas",
    `Localizar mensagens entre ${data.search} e ${data.search2 || "Timestamp atual"}`,
    `Localizar mensagens com o comprimento igual a ${data.search}`,
    `Localizar mensagens com o comprimento maior que ${data.search}`,
    `Localizar mensagens com o comprimento menor que ${data.search}`,
    ];

    if (data.descriptionx) {
      desccor = data.descriptioncolor;
    } else {
      desccor = "none";
    }

    return data.description
    ? `<font style="color:${desccor}">${data.description}</font>`
    : `<font style="color:${desccor}">${info[parseInt(data.info, 10)]}</font>`
  },

  variableStorage(data, varType) {
    if (parseInt(data.storage, 10) !== varType) return;
    return [data.varName3, "Mensagem"];
  },

  fields: ["channel", "info", "member", "search", "search2", "storage", "varName", "varName2", "varName3", "description", "descriptionx", "descriptioncolor", "iffalse", "iffalseVal"],

  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.5</div>

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

  <channel-input dropdownLabel="Канал для проверки" selectId="channel" variableContainerId="varNameContainer" variableInputId="varName"></channel-input>

  <br><br><br>

  <tab-system>

  <tab label="Поиск" icon="align left">

      <div style="float: left; width: 70%;">
        <span class="dbminputlabel">Найти по</span><br>
        <select id="info" class="round" onchange="glob.change(this)">
          <option value="0" selected>Содержание</option>
          <option value="1">Найти по (ID) идентификатору</option>
          <option value="2">Найдите по (timestamp) временной метке</option>
          <option value="7">Найдите сообщение между двумя (timestamp) временными метками</option>
          <option value="3">Поиск по пользователю</option>
          <option value="4">Найти сообщение от ботов</option>
          <option value="5">Найти сообщение от людей</option>
          <option value="6">Найти закрепленное сообщение</option>
          <option value="8">Найти сообщение с длиной (равной)</option>
          <option value="9">Найти сообщение с длиной (больше чем)</option>
          <option value="10">Найдите сообщение с длиной (меньше чем)</option>
        </select>
      </div>

      <br><br><br>

      <member-input dropdownLabel="Участник" selectId="member" variableContainerId="varNameContainer2" variableInputId="varName2"></member-input>

      <div id="divValue" style="float: left; width: 100%;">
        <span class="dbminputlabel" id="span">Поиск по</span><br>
        <input id="search" class="round" type="text"><br>
      </div>
    </div>

      <div id="divValue2" style="padding-left: 10px; float: left; width: 55%;">
        <span class="dbminputlabel">Конечная (timestamp) временная метка</span><br>
        <input id="search2" class="round" type="text" placeholder="Оставьте это пустым, чтобы использовать текущую временную метку.">
      </div>

    <br><br><br><br>

    <div>
      <div style="float: left; width: 35%;">
      <span class="dbminputlabel">Хранить в</span><br>
        <select id="storage" class="round">
          ${data.variables[1]}
        </select>
      </div>
      <div id="varNameContainer3" style="float: right; width: 60%;">
      <span class="dbminputlabel">Имя переменной</span><br>
        <input id="varName3" class="round" type="text"><br>
      </div>
    </div><br><br><br>
    <div>
      <u>Nota:</u><br>
      Этот мод может найти сообщения только <b>conteúdo</b> В последних 100 сообщениях.<br>
      Если есть несколько сообщений с одним и тем же контентом, бот всегда будет использовать самое старое сообщение (после начала).
    </div>
  </tab>

  <tab label="Конфиг" icon="cogs">
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

    <br>

    <div style="float: left; width: 40%">
      <span class="dbminputlabel">Если вы не можете найти</span>
      <select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
          <option value="0" selecionado>Продолжать</option>
          <option value="1">Остановить последовательность действий</option>
          <option value="2">Перейти к действию</option>
          <option value="3">Пропустить следующие действия</option>
          <option value="4">Перейти к якорю</option>
      </select>
    </div>

    <div id="iffalseContainer" style="display: none; float: right; width: 55%;">
      <span id="xinelas" class="dbminputlabel">Для</span>
      <br>
      <input id="iffalseVal" class="round" name="actionxinxyla" type="text">
    </div>

  </tab>
<tab-system>`;
  },

  init() {
    glob.change = function (event) {
      if(event.value === "7") {
        document.querySelector("member-input").style.display = "none";
        document.getElementById("divValue").style.display = "block";
        document.getElementById("divValue").style.width = "45%";
        document.getElementById("divValue2").style.display = "block";
        document.getElementById("span").innerHTML = "Timestamp Inicial";
      } else if(event.value === "4" || event.value === "5" || event.value === "6") {
        document.querySelector("member-input").style.display = "none";
        document.getElementById("divValue").style.display = "none";
        document.getElementById("divValue2").style.display = "none";
        document.getElementById("span").innerHTML = "Поиск по";
      } else if(event.value === "3") {
        document.querySelector("member-input").style.display = "block";
        document.getElementById("divValue").style.display = "none";
        document.getElementById("divValue2").style.display = "none";
      } else {
        document.querySelector("member-input").style.display = "none";
        document.getElementById("divValue").style.display = "block";
        document.getElementById("divValue").style.width = "100%";
        document.getElementById("divValue2").style.display = "none";
        document.getElementById("span").innerHTML = "Поиск по";
      }
    };

    glob.change(document.getElementById("info"));

    const xinelaslinks = document.getElementsByClassName("xinelaslink");
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
        document.querySelector("[id='xinelas']").innerText = (`Пропустить действий`);
      }

      if (event.value == "4") {
        document.querySelector("[id='xinelas']").innerText = (`Якоря название`);
      }
    }

    glob.onComparisonChanged(document.getElementById("iffalse"));
  },

  async action(cache) {
    const data = cache.actions[cache.index];
    const channel = parseInt(data.channel, 10);
    const varName = this.evalMessage(data.varName, cache);
    const info = parseInt(data.info, 10);
    const search = this.evalMessage(data.search, cache);
    const search2 = this.evalMessage(data.search2, cache) || Math.floor(new Date().getTime()/1000.0);
    const targetChannel = await this.getChannel(channel, varName, cache);
    const storage = parseInt(data.storage, 10);
    const varName3 = this.evalMessage(data.varName3, cache);

    if (!targetChannel) return this.callNextAction(cache);

    if(info == 3 || info == 4 || info == 5 || info == 6) {
    } else {
      if(!search) {
        console.error('Ошибка: вставьте что -нибудь, чтобы найти действие «Найти сообщение».');
        return this.callNextAction(cache);
      }
    }

    if(info == 7) {
      if(!search2) {
        console.error('Ошибка: вставьте что -нибудь, чтобы найти «TimeStamp 2» в действие «Найти сообщение».');
        return this.callNextAction(cache);
      }
    }

    try {
      const messages = await targetChannel.messages.fetch({ limit: 100 });
      let result;

      switch(info) {
          case 0:
            result = messages.find((el) => el.content.includes(search));
            break;
          case 1:
            result = await targetChannel.messages.fetch(search);
            break;
          case 2:
            result = messages.find((el) => el.createdTimestamp.toString() === search.toString());
            break;
          case 3:
            const member = await this.getMemberFromData(data.member, data.varName2, cache);

            if(!member) return this.callNextAction(cache);

            result = messages.find((el) => el.author.id.toString() === member.id.toString());
            break;
          case 4:
            result = messages.find((el) => el.author.bot === true);
            break;
          case 5:
            result = messages.find((el) => el.author.bot === false);
            break;
          case 6:
            result = messages.find((el) => el.pinned === true)
            break;
          case 7:
            result = messages.find((el) => el.createdTimestamp.toString() >= search.toString() && el.createdTimestamp.toString() <= search2.toString());
            break;
          case 8:
            result = messages.find((el) => el.content.length === parseInt(search.toString().replace(",", ".")));
            break;
          case 9:
            result = messages.find((el) => el.content.length > parseInt(search.toString().replace(",", ".")));
            break;
          case 10:
            result = messages.find((el) => el.content.length < parseInt(search.toString().replace(",", ".")));
            break;
      }
      
      this.storeValue(result, storage, varName3, cache);
      this.callNextAction(cache);
    } catch {
      this.executeResults(false, data, cache);
    }

  },

  mod() {},
};
