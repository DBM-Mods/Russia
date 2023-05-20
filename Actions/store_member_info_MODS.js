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
      "Имя пользователя участника", "Отображаемое имя участника",
      "Отображаемое имя участника", "Отображаемое имя участника",
      "Цвет участника", "Цвет участника",
      "Имя сервера пользователя",
      "Последнее сообщение пользователя (удалено)",
      "Самая высокая позиция участника", "Самая высокая позиция участника", "Самая высокая позиция участника", "Самая высокая позиция участника",
      "Повышенная позиция участника", "Повышенная позиция участника",
      "Цветовое положение участника", "Цветовое положение участника",
      "Владеет ли участник?",
      "Является ли участник немым?",
      "Является ли участник глухим?", 
      "Является ли участник глухим?",
      "Может ли участник быть изгнанным?",
      "Игровой статус участника",
      "Статус пользователя",
      "URL аватара пользователя",
      "Список рангов пользователя",
      "Количество сообщений пользователя",
      "Голосовой канал пользователя",
      "Дискриминатор участника",
      "Метка участника",
      "Учетная запись участника, созданная в",
      "Временная метка аккаунта, созданного пользователем",
      "Member logged in on", "Участник вошел в систему",
      "Временная метка входа участника на сервер",
      "ID последнего сообщения (удалено)",
      "Список разрешений участника",
      "Список значков участника",
      "Клиентский статус участника",
      "Пользовательский статус участника",
      "URL-адрес аватара сервера участника",
      "Member expired on",
      "Временная метка участника истекла на",
      "URL баннера участника",
      "ID сервера участника",
      "Временная метка импульса участника",
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
    let dataType = "Unknown Type";

    switch (info) {
      case 0:
        dataType = "участник сервера";
        break;
      case 1:
        dataType = "ID"
        break;
      case 2:
        dataType = "Text";
        break
      case 3:
        dataType = "Text";
        break
      case 4:
        dataType = "Text";
        break;
      case 5:
        dataType = "Text";
        break;
      case 6:
        dataType = "Text";
        break;
      case 7:
        dataType = "Position";
        break;
      case 8:
        dataType = "Position";
        break;
      case 9:
        dataType = "Position";
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
        dataType = "Text";
        break;
      case 15:
        dataType = "Text";
        break
      case 16:
        dataType = "URL"
        break;
      case 17:
        dataType = "List"
        break
      case 18:
        dataType = "Число";
        break;
      case 19:
        dataType = "Channel";
        break;
      case 20:
        dataType = "Число";
        break;
      case 21:
        dataType = "Text";
        break;
      case 22:
        dataType = "Data";
        break
      case 23:
        dataType = "Timestamp";
        break
      case 24:
        dataType = "Data";
        break;
      case 25:
        dataType = "Timestamp";
        break
      case 26:
        dataType = "ID";
        break;
      case 27:
        dataType = "List";
        break;
      case 28:
        dataType = "List";
        break;
      case 29:
        dataType = "Text";
        break;
      case 30:
        dataType = "Text";
        break;
      case 31:
        dataType = "URL";
        break;
      case 32:
        dataType = "Data";
        break
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
    }

    return [data.varName2, dataType];
  },

  fields: ["member", "varName", "info", "storage", "varName2", "description", "descriptionx", "descriptioncolor"],

  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zipм">Обновление</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 1.3</div>

    <style>
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

<member-input dropdownLabel="Пользователь" selectId="member" variableContainerId="varNameContainer" variableInputId="varName"></member-input>

<br><br><br>

<div style="padding-top: 8px;">
	<span class="dbminputlabel">Информация</span><br>
	<select id="info" class="round2">
  <option value="0" selected>Объект участника</option>
  <option value="1">Идентификатор участника</option>
  <option value="2">Имя пользователя участника</option>
  <option value="3">Образное имя участника [Nickname]</option>
  <option value="21">Тег участника</option>
  <option value="20">Дискриминатор участника</option>
  <option value="4">Цвет участника</option>
  <option value="15">Статус участника</option>
  <option value="16">URL аватара участника</option>
  <option value="34">URL баннера участника</option>
  <option value="31">URL аватара сервера пользователя</option>
  <option value="5">Имя сервера участника</option>
  <option value="35">Идентификатор сервера участника</option>
  <option value="6">Последнее сообщение пользователя (удалено)</option>
  <option value="26">Идентификатор последнего сообщения пользователя (удален)</option>
  <option value="7">Высшее звание участника</option>
  <option value="8">Высшее звание участника</option>
  <option value="9">Цветовая позиция участника</option>
  <option value="17">Список рангов участника</option>
  <option value="18">Количество позиций участника</option>
  <option value="10">Является ли пользователь владельцем?
  <option value="11">Выключен ли звук у пользователя?
  <option value="12">Глухой ли участник? </option>
  <option value="13">Можно ли запретить пользователя? </option>
  <option value="14">Наименование игрового статуса участника</option>
  <option value="30">Название пользовательского статуса участника</option>
  <option value="19">Голосовой канал пользователя</option>
  <option value="22">Учетная запись участника создана на</option>
  <option value="23">Временная метка учетной записи, созданной участником</option>
  <option value="24">участник присоединился к серверу</option>
  <option value="25">Временная метка пользователя, который присоединился к серверу</option>
  <option value="27">Список разрешений участника</option>
  <option value="28">Список бейджей участника</option>
  <option value="29">Статус клиента участника [веб или мобильный]</option>
  <option value="32">Время ожидания участника</option>
  <option value="33">Временная метка участника истекла</option>
  <option value="36">Временная метка импульса участника</option>
	</select>
  <input type="text" id="filtrodoxinxyla" class="round" placeholder="Параметры фильтра...">
  </div>

<br>

<store-in-variable dropdownLabel="Сохранить в" selectId="storage" variableContainerId="varNameContainer2" variableInputId="varName2"></store-in-variable>

<style>
.round2{width:100%;height:30px;outline:0}
.round2 option{padding:3px 8px;}
.abrir {
  height: 30px;
  animation: abrir .5s forwards;
}

@keyframes abrir {
  from {
    height: 30px;
  }
  to {
    height: 140px;
  }
}

.fechar {
  height: 140px;
  animation: fechar .5s forwards;
}

@keyframes fechar {
  from {
    height: 140px;
  }
  to {
    height: 30px;
  }
}

select {
  max-height: 140px;
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
          console.log(`Запуск URL: [${url}] в браузере по умолчанию.`);
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
            case "offline": { result = "Невидимый"; break; }
            case "idle": { result = "Неактивен"; break; }
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
