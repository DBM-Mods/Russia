module.exports = {
  name: "Store Member Info MOD",
  section: "Member Control",
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]<br>[Tempest - 321400509326032897]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {
    const info = [
      "Объект участника",
      "ID участника",
      "Юзернейм участника",
      "Отображаемое на сервере имя участника",
      "Цвет участника",
      "Имя сервера участника",
      "Последнее сообщение участника (удалено)",
      "Наивысшая роль участника",
      "Повышающая участника роль (отображаемая справа)",
      "Наивысшая цветная роль участника",
      "Является ли участник владельцем?",
      "Выключен ли микрофон у участника?",
      "Выключен ли звук у частника",
      "Может ли участник быть забаненным?",
      "Имя игрового статуса участника",
      "Пользовательский статус участника",
      "URL аватара участника",
      "Список ролей участника",
      "Количество ролей участника",
      "Голосовой канал участника",
      "Дискриминатор участника",
      "Тег участника",
      "Учетная запись участника создана",
      "Метка времени создания аккаунта участника",
      "Дата входа участника на сервер",
      "Метка времени входа участника на сервер",
      "ID последнего сообщения (удалено)",
      "Список разрешений участника",
      "Список значков участника",
      "Статус клиента участника",
      "Пользовательский статус участника",
      "URL отображаемого аватара участника",
      "Время истечения Тайм-аута участника",
      "Метка времени истечения Тайм-аута участника",
      "URL баннера участника",
      "ID сервера участника",
      "Метка времени Буста участником",
      "Всего приглашений участника на текущем сервере",
      "Список приглашений участника на текущий сервер",
      "Список использований приглашений участника на текущий сервер",
      "Всего использований приглашений участника на текущий сервер",
    ];

    if (data.descriptionx) {
      desccor = data.descriptioncolor;
    } else {
      desccor = "none";
    }

    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">${presets.getMemberText(data.member, data.varName)} - ${info[parseInt(data.info, 10)]}</font>`
  },


  variableStorage(data, varType) {
    const type = parseInt(data.storage, 10);
    if (type !== varType) return;
    const info = parseInt(data.info, 10);
    let dataType = "Неизвестный тип";

    switch (info) {
      case 0:
        dataType = "Объект участника";
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
        dataType = "Текст";
        break;
      case 6:
        dataType = "Текст";
        break;
      case 7:
        dataType = "Роль";
        break;
      case 8:
        dataType = "Роль";
        break;
      case 9:
        dataType = "Роль";
        break;
      case 10:
        dataType = "True/False";
        break;
      case 11:
        dataType = "True/False";
        break;
      case 12:
        dataType = "True/False";
        break;
      case 13:
        dataType = "True/False";
        break;
      case 14:
        dataType = "Текст";
        break;
      case 15:
        dataType = "Текст";
        break;
      case 16:
        dataType = "URL"
        break;
      case 17:
        dataType = "Список";
        break;
      case 18:
        dataType = "Число";
        break;
      case 19:
        dataType = "Канал";
        break;
      case 20:
        dataType = "Число";
        break;
      case 21:
        dataType = "Текст";
        break;
      case 22:
        dataType = "Дата";
        break;
      case 23:
        dataType = "Timestamp";
        break;
      case 24:
        dataType = "Data";
        break;
      case 25:
        dataType = "Timestamp";
        break;
      case 26:
        dataType = "ID";
        break;
      case 27:
        dataType = "Список";
        break;
      case 28:
        dataType = "Список";
        break;
      case 29:
        dataType = "Текст";
        break;
      case 30:
        dataType = "Текст";
        break;
      case 31:
        dataType = "URL";
        break;
      case 32:
        dataType = "Дата";
        break;
      case 33:
        dataType = "Timestamp";
        break;
      case 34:
        dataType = "URL";
        break;
      case 35:
        dataType = "ID";
        break;
      case 36:
        dataType = "Timestamp";
        break;
      case 37:
        dataType = "Число";
        break;
      case 38:
        dataType = "Список";
        break;
      case 39:
        dataType = "Список";
        break;
      case 40:
        dataType = "Число";
        break;
    }

    return [data.varName2, dataType];
  },

  fields: ["member", "varName", "info", "storage", "varName2", "description", "descriptionx", "descriptioncolor"],

  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновление</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 1.4</div>

    <div style="width: 100%; padding:5px 0px;height: calc(100vh - 160px);overflow:auto">

  <div id="flutuador" style="padding:0px 0px 15px 0px">
    <table style="width:100%;"><tr>
        <td>
        <span class="dbminputlabel">Описание действия</span>
        <br>
        <input type="text" class="round" id="description" placeholder="Не обязательное поле">
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

  <div style="overflow: hidden">
<member-input dropdownLabel="Пользователь" selectId="member" variableContainerId="varNameContainer" variableInputId="varName"></member-input>
</div>


<div style="padding-top: 8px;">
  <span class="dbminputlabel">Информация</span><br>
  <select id="info" class="round2">
    <option value="0" selecionado>Объект участника</option>
    <option value="1">ID участника</option>
    <option value="2">Юзернейм участника</option>
    <option value="3">Отображаемое на сервере имя участника [Псевдоним]</option>
    <option value="21">Тег участника</option>
    <option value="20">Дискриминатор участника (#0000)</option>
    <option value="4">Цвет участника</option>
    <option value="15">Пользовательский статус участника</option>
    <option value="16">URL: аватар участника</option>
    <option value="34">URL: баннер участника</option>
    <option value="31">URL: отображаемый на сервере аватар участника</option>
    <option value="5">Имя сервера участника</option>
    <option value="35">ID сервера участника</option>
    <option value="6">Последнее сообщение участника (удалено)</option>
    <option value="26">ID последнего сообщения участника (удалено)</option>
    <option value="7">Наивысшая роль участника</option>
    <option value="8">Повышающая участника роль (отображаемая справа)</option>
    <option value="9">Наивысшая цветная роль участника</option>
    <option value="17">Список ролей участника</option>
    <option value="18">Количество ролей участника</option>
    <option value="10">Является ли участник владельцем? (true | false)</option>
    <option value="11">Выключен ли микрофон у участника? (true | false)</option>
    <option value="12">Выключен ли звук у участника? (true | false)</option>
    <option value="13">Может ли участник быть забаненным? (true | false)</option>
    <option value="14">Имя игрового статуса участника</option>
    <option value="30">Пользовательский статус участника</option>
    <option value="19">Голосовой канал участника</option>
    <option value="22">Учетная запись участника создана</option>
    <option value="23">Метка времени создания учетной записи участника</option>
    <option value="24">Участник присоединился к серверу</option>
    <option value="25">Метка времени присоединения участника к серверу</option>
    <option value="27">Список разрешений участника</option>
    <option value="28">Список значков участника</option>
    <option value="29">Статус клиента участника [Веб или Мобильное]</option>
    <option value="32">Время истечения Тайм-аута участника</option>
    <option value="33">Метка времени истечения Тайм-аута участника</option>
    <option value="36">Метка времени Буста участником (?)</option>
    <option value="37">Общее количество приглашений участника на текущем сервере</option>
    <option value="38">Список приглашений участника на текущем сервере</option>
    <option value="39">Список использований приглашений участника на текущем сервере</option>
    <option value="40">Общее количество использований приглашений участника на текущем сервере</option>
  </select>
  <input type="text" id="filtrodoxinxyla" class="round" placeholder="Фильтровать опции...">
</div>

<br>

<store-in-variable dropdownLabel="Хранить в" selectId="storage" variableContainerId="varNameContainer2" variableInputId="varName2"></store-in-variable>

</div>

<style>
.round2{width:100%;height:30px;outline:0}
.round2 option{padding:3px 8px;text-align:left}
.round2 optgroup{text-align:center;padding:4px 0px;}


.abrir {
  min-height: 30px;
  height: 30px;
  animation: abrir .5s forwards;
}

@keyframes abrir {
  from {
    min-height: 30px;
    height: 30px;
  }
  to {
    min-height: 100px;
    height: calc(100vh - 420px);
  }
}

.fechar {
  min-height: 100px;
  height: calc(100vh - 420px);
  animation: fechar .5s forwards;
}

@keyframes fechar {
  from {
    min-height: 100px;
    height: calc(100vh - 420px);
  }
  to {
    min-height: 30px;
    height: 30px;
  }
}
.xin {
  padding: 5px;
  border: 1px solid #777;
  background: rgba(255,255,255,0.1);
}

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

  init() {
    const xinelaslinks = document.getElementsByClassName("xinelaslink");
    for (let x = 0; x < xinelaslinks.length; x++) {
      const xinelaslink = xinelaslinks[x];
      const url = xinelaslink.getAttribute('data-url');
      if (url) {
        xinelaslink.setAttribute('title', url);
        xinelaslink.addEventListener('click', (e) => {
          e.stopImmediatePropagation();
          console.log(`Запуск URL: [${url}] в стандартном браузере.`);
          require('child_process').execSync(`start ${url}`);
        });
      }
    }

    document.getElementById("info").addEventListener("click", function () {
      this.size = this.options.length;
      document.getElementById("info").classList.add("abrir");
      document.getElementById("info").classList.remove("fechar");
      document.getElementById("info").style.display = "block";
    });

    document.getElementById("info").addEventListener("blur", function () {
      this.size = 1;
      document.getElementById("info").classList.remove("abrir");
      document.getElementById("info").classList.add("fechar");
      document.getElementById("info").style.height = "30px";
    });
    document.getElementById("filtrodoxinxyla").addEventListener("keyup", function () {
      var filter = this.value.toLowerCase();
      var options = document.getElementById("info").options;
      for (var i = 0; i < options.length; i++) {
        var option = options[i];
        if (option.text.toLowerCase().indexOf(filter) === -1) {
          option.style.display = "none";
        } else {
          option.style.display = "";
        }
      }
      document.getElementById("info").dispatchEvent(new Event('click'));
    });




  },


  async action(cache) {
    const data = cache.actions[cache.index];
    const memberfind = this.evalMessage(data.member, cache);
    const find = this.evalMessage(data.varName, cache);
    var member = await this.getMemberFromData(data.member, data.varName, cache);

    if (memberfind == "100" || memberfind == "101") {

      const server = cache.server;
      if (!server?.members) {
        this.callNextAction(cache);
        return;
      }
      if (server.memberCount !== server.members.cache.size) server.members.fetch();
      const members = server.members.cache;

      if (memberfind == "100") { member = members.find((m) => m.user?.username === find); }
      if (memberfind == "101") { member = members.get(find) }
    }

    const targetServer = await this.getServerFromData(0, data.varName, cache);

    if (!member) {
      this.callNextAction(cache);
      return;
    }

    const info = parseInt(data.info, 10);

    let result;
    switch (info) {
      case 0:
        result = member;
        break;
      case 1:
        result = member.id;
        break;
      case 2:
        result = member.user?.username ?? member.username;
        break;
      case 3:
        result = member.displayName;
        break;
      case 4:
        result = member.displayHexColor;
        break;
      case 5:
        result = member.guild;
        break;
      case 7:
        result = member.roles.highest;
        break;
      case 8:
        result = member.roles.hoist;
        break;
      case 9:
        result = member.roles.color;
        break;
      case 10:
        result = member.id === member.guild?.ownerId;
        break;
      case 11:
        result = member.voice.mute;
        break;
      case 12:
        result = member.voice.deaf;
        break;
      case 13:
        result = member.bannable;
        break;
      case 14:
        if (member.presence?.activities.length) {
          const status = member.presence.activities.filter((s) => s.type !== "CUSTOM");
          result = status[0]?.name;
        }
        break;
      case 15:
        if (member.presence?.status) {
          const status = member.presence.status;
          switch (status) {
            case "online": { result = "В сети"; break; }
            case "offline": { result = "Не в сети"; break; }
            case "idle": { result = "Не активен"; break; }
            case "dnd": { result = "Не беспокоить"; break; }
          }
        }
        break;
      case 16:
        if (member.user) {
          result = member.user.displayAvatarURL({ dynamic: true, format: "png", size: 4096 });
        } else {
          result = member.displayAvatarURL({ dynamic: true, format: "png", size: 4096 });
        }
        break;
      case 17:
        result = [...member.roles.cache.values()];
        break;
      case 18:
        result = member.roles.cache.size;
        break;
      case 19:
        result = member.voice.channel;
        break;
      case 20:
        result = member.user?.discriminator ?? member.discriminator;
        break;
      case 21:
        result = member.user?.tag ?? member.tag;
        break;
      case 22:
        result = member.user?.createdAt ?? member.createdAt;
        break;
      case 23:
        result = member.user?.createdTimestamp ?? member.createdTimestamp;
        break;
      case 24:
        result = member.joinedAt;
        break;
      case 25:
        result = member.joinedTimestamp;
        break;
      case 27:
        result = member.permissions.toArray();
        break;
      case 28:
        if (member.user) {
          result = member.user?.flags?.toArray() ?? (await member.user?.fetchFlags())?.toArray();
        } else {
          result = member.flags.toArray();
        }
        break;
      case 29:
        const status = member.presence?.clientStatus;
        result = status && Object.keys(status);
        break;
      case 30:
        result = member.presence?.activities.find((s) => s.type === "CUSTOM")?.state;
        break;
      case 31:
        if (member.user) {
          result = member.displayAvatarURL({ dynamic: true, format: "png", size: 4096 });
        }
        break;
      case 32:
        result = member.communicationDisabledUntil;
        break;
      case 33:
        result = member.communicationDisabledUntilTimestamp;
        break;
      case 34:
        const user = await member.user.fetch();
        result = member.user.bannerURL({ format: "png", size: 4096, dynamic: true });
        break;
      case 35:
        result = member.guild.id;
        break;
      case 36:
        result = member.premiumSinceTimestamp;
        break;
      case 37:
        invites = await targetServer.invites.fetch();
        convites = [...invites.values()];
        convites = convites.map(v => v.inviter)
        convite = convites.filter((item) => item.id == member.id)
        result = convite.length
        break;
      case 38:
        invites = await targetServer.invites.fetch();
        convites = [...invites.values()];
        convites = convites.map(v => v)
        convite = convites.filter((item) => item.inviter.id == member.id)
        result = convite
        break;
      case 39:
        invites = await targetServer.invites.fetch();
        convites = [...invites.values()];
        convites = convites.map(v => v)
        convite = convites.filter((item) => item.inviter.id == member.id)
        convite = convite.map(v => v.uses)
        result = convite
        break;
      case 40:
        invites = await targetServer.invites.fetch();
        convites = [...invites.values()];
        convites = convites.map(v => v)
        convite = convites.filter((item) => item.inviter.id == member.id)
        convite = convite.map(v => v.uses)
        result = convite.reduce((acumulador, numero) => acumulador + numero, 0);
        break;
      default:
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
