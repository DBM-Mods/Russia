module.exports = {


  name: "Store Role Info MOD",
  section: "Role Control",
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]<br>[Tempest - 321400509326032897]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {
    const info = [
      "Объект Роли",
      "ID Роли",
      "Имя Роли",
      "Цвет Роли",
      "Позиция Роли",
      "Временная метка создания Роли",
      "Роль можно упомянуть?",
      "Роль отделена от других",
      "Роль управляема",
      "Список участников Роли",
      "Дата создания Роли",
      "Список разрешений Роли",
      "Количество участников Роли",
      "Иконка Роли",
      "Тег Роли",
      "Сервер Роли",
      "ID Сервера Роли",
      "Роль можно редактировать?",
      "Список ID участников Роли",
      "Список онлайн-участников Роли",
      "Список офлайн-участников Роли",
      "Список отсутствующих участников Роли",
      "Список занятых участников Роли",
      "Всего онлайн-участников Роли",
      "Всего офлайн-участников Роли",
      "Всего отсутствующих участников Роли",
      "Всего занятых участников Роли",
      "Список имен участников Роли",
      "Список аватарок участников Роли",
      "Список участников с Ролью",
      "Список ID людей с Ролью",
      "Список имен людей с Ролью",
      "Список аватарок людей с Ролью",
      "Список ботов с Ролью",
      "Список ID ботов с Ролью",
      "Список имен ботов с Ролью",
      "Список аватарок ботов с Ролью",
    ];
  if (data.descriptionx) {
    desccor = data.descriptioncolor;
  } else {
    desccor = "none";
  }

  return data.description
    ? `<font style="color:${desccor}">${data.description}</font>`
    : `<font style="color:${desccor}">${presets.getRoleText(data.role, data.varName)} - ${info[parseInt(data.info, 10)]} для (${data.varName2})</font>`
},

  variableStorage(data, varType) {
    const type = parseInt(data.storage, 10);
    if (type !== varType) return;
    const info = parseInt(data.info, 10);
    let dataType = "Unknown Type";
    switch (info) {
      case 0:
        dataType = "Роль";
        break;
      case 1:
        dataType = "ID роли";
        break;
      case 2:
        dataType = "Текст";
        break;
      case 3:
        dataType = "Цвет";
        break;
      case 4:
        dataType = "Число";
        break;
      case 5:
        dataType = "Timestamp";
        break;
      case 6:
      case 7:
        dataType = "Boolean";
        break;
      case 8:
        dataType = "Boolean";
        break;
      case 9:
        dataType = "Список пользователей";
        break;
      case 10:
        dataType = "Дата";
        break;
      case 11:
      case 12:
        dataType = "Число";
        break;
      case 13:
        dataType = "URL изображения";
        break;
      case 14:
        dataType = "Объект";
        break;
      case 15:
        dataType = "Сервер";
        break;
      case 16:
        dataType = "ID сервера";
        break;
      case 17:
        dataType = "Boolean";
        break;
      case 18:
        dataType = "Список";
        break;
      case 19:
        dataType = "Список";
        break;
      case 20:
        dataType = "Список";
        break;
      case 21:
        dataType = "Список";
        break;
      case 22:
        dataType = "Список";
        break;
      case 23:
        dataType = "Число";
        break;
      case 24:
        dataType = "Число";
        break;
      case 25:
        dataType = "Число";
        break;
      case 26:
        dataType = "Число";
        break;
      case 27:
        dataType = "Список";
        break;
      case 28:
        dataType = "Список";
        break;
      case 29:
        dataType = "Список";
        break;
      case 30:
        dataType = "Список";
        break;
      case 31:
        dataType = "Список";
        break;
      case 32:
        dataType = "Список";
        break;
      case 33:
        dataType = "Список";
        break;
      case 34:
        dataType = "Список";
        break;
      case 35:
        dataType = "Список";
        break;
      case 36:
        dataType = "Список";
        break;
    }
    return [data.varName2, dataType];
  },


  fields: ["role", "varName", "info", "storage", "varName2", "description", "descriptionx", "descriptioncolor"],


  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.6</div>

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


<role-input dropdownLabel="Роль" selectId="role" variableContainerId="varNameContainer" variableInputId="varName"></role-input>

<br><br><br>

<div style="padding-top: 8px;">
	<span class="dbminputlabel">Информация о Роли</span><br>
	<select id="info" class="round2">
    <optgroup label="Информация о Роли">
		<option value="0" selected>Роль - Объект</option>
    <option value="1">ID Роли</option>
    <option value="2">Название Роли</option>
    <option value="3">Цвет Роли</option>
    <option value="4">Позиция Роли</option>
    <option value="14">Тег Роли</option>
    <option value="13">Иконка Роли</option>
    </optgroup>
    <optgroup label="Условия Роли">
		<option value="6">Можно упомянуть Роль?</option>
    <option value="17">Роль редактируема?</option>
    <option value="7">Роль отделена от других?</option>
    <option value="8">Роль управляема ботом/интеграцией?</option>
    </optgroup>
    <optgroup label="Дата Роли">
		<option value="5">Метка времени создания Роли</option>
    <option value="10">Дата создания Роли</option>
    </optgroup>
    <optgroup label="Информация о Роли">
    <option value="15">Сервер Роли</option>
    <option value="16">ID Сервера Роли</option>
    </optgroup>
    <optgroup label="Счетчики Роли">
    <option value="12">Количество участников Роли</option>
    <option value="23">Общее количество онлайн участников Роли</option>
    <option value="24">Общее количество офлайн участников Роли</option>
    <option value="25">Общее количество отсутствующих участников Роли</option>
    <option value="26">Общее количество занятых участников Роли</option>
    </optgroup>
    <optgroup label="Информация о Роли в списках">
    <option value="9">Список участников Роли</option>
    <option value="18">Список ID участников Роли</option>
    <option value="27">Список имен участников Роли</option>
    <option value="28">Список аватаров участников Роли</option>
    <option value="11">Список разрешений Роли</option>
    <option value="19">Список онлайн участников Роли</option>
    <option value="20">Список офлайн участников Роли</option>
    <option value="21">Список отсутствующих участников Роли</option>
    <option value="22">Список занятых участников Роли</option>
    <option value="29">Список людей в Роли</option>
    <option value="30">Список ID людей в Роли</option>
    <option value="31">Список имен людей в Роли</option>
    <option value="32">Список аватаров людей в Роли</option>
    <option value="33">Список ботов в Роли</option>
    <option value="34">Список ID ботов в Роли</option>
    <option value="35">Список имен ботов в Роли</option>
    <option value="36">Список аватаров ботов в Роли</option>
    </optgroup>
	</select>
  <input type="text" id="filtrodoxinxyla" class="round" placeholder="Фильтр опций...">
</div>

<br>

<store-in-variable dropdownLabel="Хранить в" selectId="storage" variableContainerId="varNameContainer2" variableInputId="varName2"></store-in-variable>

</div>

<style>
.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}
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
</style>`;
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
          console.log(`Запуск URL: [${url}] в браузере.`);
          require('child_process').execSync(`start ${url}`);
        });
      }
    }

    document.getElementById("info").addEventListener("click", function () {
      document.getElementById("info").classList.add("abrir");
      document.getElementById("info").classList.remove("fechar");
      this.size = this.options.length;
    });

    document.getElementById("info").addEventListener("blur", function () {
      this.size = 1;
      document.getElementById("info").classList.remove("abrir");
      document.getElementById("info").classList.add("fechar");
      document.getElementById("info").style.height = "30px";
    });

    document.getElementById("filtrodoxinxyla").addEventListener("keyup", function () {
      var select = document.getElementById("info");
      var optgroups = select.getElementsByTagName("optgroup");
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

      for (var i = 0; i < optgroups.length; i++) {
        var optgroup = optgroups[i];
        var options = optgroup.getElementsByTagName("option");
        var visibleOptions = 0;
        for (var j = 0; j < options.length; j++) {
          if (options[j].style.display !== "none") {
            visibleOptions++;
          }
        }
        if (visibleOptions === 0) {
          optgroup.style.display = "none";
        } else {
          optgroup.style.display = "";
        }
      }

      document.getElementById("info").dispatchEvent(new Event("click"));
    });

    var select = document.getElementById("my-select");
    var optgroups = select.getElementsByTagName("optgroup");

    for (var i = 0; i < optgroups.length; i++) {
      var optgroup = optgroups[i];
      var options = optgroup.getElementsByTagName("option");
      var visibleOptions = 0;
      for (var j = 0; j < options.length; j++) {
        if (options[j].style.display !== "none") {
          visibleOptions++;
        }
      }
      if (visibleOptions === 0) {
        optgroup.style.display = "none";
      } else {
        optgroup.style.display = "";
      }
    }
  },


  async action(cache) {
    const data = cache.actions[cache.index];
    const targetRole = await this.getRoleFromData(data.role, data.varName, cache);
    const info = parseInt(data.info, 10);
    if (!targetRole) {
      this.callNextAction(cache);
      return;
    }
    let result;
    switch (info) {
      case 0:
        result = targetRole;
        break;
      case 1:
        result = targetRole.id;
        break;
      case 2:
        result = targetRole.name;
        break;
      case 3:
        result = targetRole.hexColor;
        break;
      case 4:
        result = targetRole.position;
        break;
      case 5:
        result = targetRole.createdTimestamp;
        break;
      case 6:
        result = targetRole.mentionable;
        break;
      case 7:
        result = targetRole.hoist;
        break;
      case 8:
        result = targetRole.managed;
        break;
      case 9:
        result = [...targetRole.members.values()];
        break;
      case 10:
        result = targetRole.createdAt;
        break;
      case 11:
        result = targetRole.permissions.toArray().map(v => v.replace(/_/g, ' ').toLowerCase());
        break;
      case 12:
        result = targetRole.members.size;
        break;
      case 13:
        result = targetRole.iconURL({ dynamic: true, format: "png", size: 4096 });
        break;
      case 14:
        result = targetRole.tags;
        break;
      case 15:
        result = targetRole.guild;
        break;
      case 16:
        result = targetRole.guild.id;
        break;
      case 17:
        result = targetRole.editable;
        break;
      case 18:
        result = [...targetRole.members.keys()];
        break;
      case 19:
        result = targetRole.members.filter((m) => m.presence?.status == "online").map((c) => c);
        break;
      case 20:
        result = targetRole.members.filter((m) => m.presence?.status == "offline").map((c) => c);
        break;
      case 21:
        result = targetRole.members.filter((m) => m.presence?.status == "idle").map((c) => c);
        break;
      case 22:
        result = targetRole.members.filter((m) => m.presence?.status == "dnd").map((c) => c);
        break;
      case 23:
        result = targetRole.members.filter((m) => m.presence?.status == "online").map((c) => c).length;
        break;
      case 24:
        result = targetRole.members.filter((m) => m.presence?.status == "offline").map((c) => c).length;
        break;
      case 25:
        result = targetRole.members.filter((m) => m.presence?.status == "idle").map((c) => c).length;
        break;
      case 26:
        result = targetRole.members.filter((m) => m.presence?.status == "dnd").map((c) => c).length;
        break;
      case 27:
        result = targetRole.members.map(v => v.user.username);
        break;
      case 28:
        result = targetRole.members.map(v => v.user.displayAvatarURL({ dynamic: true, format: "png", size: 4096 }));
        break;
      case 29:
        result = targetRole.members.filter((v) => v.user.bot === false).map(v => v.user);
        break;
      case 30:
        result = targetRole.members.filter((v) => v.user.bot === false).map(v => v.id);
        break;
      case 31:
        result = targetRole.members.filter((v) => v.user.bot === false).map(v => v.user.username);
        break;
      case 32:
        result = targetRole.members.filter((v) => v.user.bot === false).map(v => v.user.displayAvatarURL({ dynamic: true, format: "png", size: 4096 }));
        break;
      case 33:
        result = targetRole.members.filter((v) => v.user.bot === true).map(v => v.user);
        break;
      case 34:
        result = targetRole.members.filter((v) => v.user.bot === true).map(v => v.id);
        break;
      case 35:
        result = targetRole.members.filter((v) => v.user.bot === true).map(v => v.user.username);
        break;
      case 36:
        result = targetRole.members.filter((v) => v.user.bot === true).map(v => v.user.displayAvatarURL({ dynamic: true, format: "png", size: 4096 }));
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
