module.exports = {
  name: "Store Channel Info MOD",
  section: "Channel Control",
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[xinxyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {
    const info = [
      "Объект канала",
      "ID канала",
      "Имя канала",
      "Тема канала",
      "Последнее сообщение в канале",
      "Позиция канала",
      "Это NSFW-канал?",
      "Это личное сообщение?",
      "Канал может быть удален?",
      "Дата создания канала",
      "ID категории канала",
      "Имя категории канала",
      "Timestamp создания канала",
      "Это текстовый канал?",
      "Это голосовой канал?",
      "Это категория?",
      "Это канал новостей?",
      "Это трибуна?",
      "Тип канала",
      "Права пользователей на канале [режим текста]",
      "Права ролей на канале [режим текста]",
      "Права пользователей на канале [режим объекта]",
      "Права ролей на канале [режим объекта]",
      "Права пользователей на канале [режим списка]",
      "Права ролей на канале [режим списка]",
      "Режим медленного режима канала [секунды]",
      "Темы каналов [режим списка с объектом]",
      "Список сообщений канала",
    ];

    if (data.descriptionx) {
      desccor = data.descriptioncolor;
    } else {
      desccor = "none";
    }

    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">${presets.getChannelText(data.channel, data.varName)} - ${info[parseInt(data.info, 10)]}</font>`
  },

  variableStorage(data, varType) {
    const type = parseInt(data.storage, 10);
    if (type !== varType) return;
    const info = parseInt(data.info, 10);
    let dataType = "Неизвестный Тип";
    switch (info) {
      case 0:
        dataType = "Объект";
        break;
      case 1:
        dataType = "Число";
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
        dataType = "Число";
        break;
      case 6:
        dataType = "true/false";
        break;
      case 7:
        dataType = "true/false";
        break;
      case 8:
        dataType = "true/false";
        break;
      case 9:
        dataType = "Дата";
        break;
      case 10:
        dataType = "Число";
        break;
      case 11:
        dataType = "Текст";
        break;
      case 12:
        dataType = "Timestamp";
        break;
      case 13:
        dataType = "true/false";
        break;
      case 14:
        dataType = "true/false";
        break;
      case 15:
        dataType = "true/false";
        break;
      case 16:
        dataType = "true/false";
        break;
      case 17:
        dataType = "true/false";
        break;
      case 18:
        dataType = "Текст";
        break;
      case 19:
        dataType = "Текст";
        break;
      case 20:
        dataType = "Текст";
        break;
      case 21:
        dataType = "Объект";
        break;
      case 22:
        dataType = "Объект";
        break;
      case 23:
        dataType = "Список";
        break;
      case 24:
        dataType = "Список";
        break;
      case 25:
        dataType = "Число";
        break;
      case 26:
        dataType = "Список/Объект";
        break;
      case 27:
        dataType = "Список/Объект";
        break;
    }
    return [data.varName2, dataType];
  },

  fields: ["channel", "varName", "info", "storage", "varName2", "description", "descriptionx", "descriptioncolor"],

  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.2</div>

    <div style="width: 100%; padding:5px 0px;height: calc(100vh - 160px);overflow:auto">

  <div id="flutuador" style="padding:0px 0px 15px 0px">
    <table style="width:100%;"><tr>
        <td>
        <span class="dbminputlabel">Описание действия</span>
        <br>
        <input type="text" class="round" id="description" placeholder="Не обязательно поле">
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
<channel-input dropdownLabel="Целевой канал" selectId="channel" variableContainerId="varNameContainer" variableInputId="varName"></channel-input>
</div>

<div style="padding-top: 8px;">
	<span class="dbminputlabel">Целевая информация</span><br>
	<select id="info" class="round">
  <optgroup label="Информация о канале">
  <option value="0" selecionado>Объект канала</option>
  <option value="1">ID канала</option>
  <option value="2">Название канала</option>
  <option value="3">Тема канала</option>
  <option value="4">Последнее сообщение канала</option>
  <option value="5">Позиция канала</option>
  <option value="9">Дата создания канала</option>
  <option value="12">Timestamp создания канала</option>
  <option value="18">Тип канала</option>
  <option value="25">Медленный режим канала [секунды]</option>
  <option value="26">Открытые темы канала [режим списка с объектом]</option>
  </optgroup>
  <optgroup label="Категория канала">
  <option value="10">ID категории канала</option>
  <option value="11">Название категории канала</option>
  </optgroup>
  <optgroup label="true/false">
  <option value="6">Канал NSFW?</option>
  <option value="7">Это прямое сообщение?</option>
  <option value="8">Можно ли удалить канал?</option>
  <option value="13">Это текстовый канал?</option>
  <option value="14">Это голосовой канал?</option>
  <option value="15">Это категория?</option>
  <option value="16">Это канал новостей?</option>
  <option value="17">Это трибуна?</option>
  </optgroup>
  <optgroup label="Разрешения канала">
  <option value="19">Права доступа пользователей канала [текстовый режим]</option>
  <option value="20">Права канала [текстовый режим]</option>
  <option value="21">Права доступа пользователей канала [режим объекта]</option>
  <option value="22">Права канала [режим объекта]</option>
  <option value="23">Права доступа пользователей канала [режим списка]</option>
  <option value="24">Права канала [режим списка]</option>
  </optgroup>
  <optgroup label="Сообщения канала">
  <option value="27">Список сообщений канала [Объект]</option>
  </optgroup>
	</select>
  <input type="text" id="filtrodoxinxyla" class="round" placeholder="Фильтр элементов...">
</div>

<br>

<store-in-variable dropdownLabel="Сохранить в" selectId="storage" variableContainerId="varNameContainer2" variableInputId="varName2"></store-in-variable>

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
    const { glob, document } = this

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
    const DiscordJS = this.getDBM().DiscordJS;

    const targetChannel = await this.getChannelFromData(data.channel, data.varName, cache);

    if (!targetChannel) {
      this.callNextAction(cache);
      return;
    }

    const info = parseInt(data.info, 10);

    let result;
    switch (info) {
      case 0:
        result = targetChannel;
        break;
      case 1:
        result = targetChannel.id;
        break;
      case 2:
        result = targetChannel.name;
        break;
      case 3:
        result = targetChannel.topic;
        break;
      case 4:
        result = targetChannel.lastMessage;
        break;
      case 5:
        result = targetChannel.position;
        break;
      case 6:
        result = targetChannel.nsfw;
        break;
      case 7:
        result = targetChannel.type === "DM";
        break;
      case 8:
        result = targetChannel.deletable;
        break;
      case 9:
        result = targetChannel.createdAt;
        break;
      case 10:
        result = targetChannel.parentId;
        break;
      case 11:
        result = targetChannel.parent;
        break;
      case 12:
        result = targetChannel.createdTimestamp;
        break;
      case 13:
        result = targetChannel instanceof DiscordJS.TextChannel;
        break;
      case 14:
        result = targetChannel instanceof DiscordJS.VoiceChannel;
        break;
      case 15:
        result = targetChannel instanceof DiscordJS.CategoryChannel;
        break;
      case 16:
        result = targetChannel instanceof DiscordJS.NewsChannel;
        break;
      case 17:
        result = targetChannel instanceof DiscordJS.StoreChannel;
        break
      case 18:
        result = targetChannel.type;
        break;
      case 19:
        result = await targetChannel.permissionOverwrites.cache.filter(p => p.type == 'member').map(p => `**Пользователь**: <@${p.id}>\n • Разрешено: ${p.allow.toArray().length >= 1 ? p.allow.toArray() : 'Ничего'}\n • Запрещено: ${p.deny.toArray().length >= 1 ? p.deny.toArray() : 'Ничего'}`).join('\n\n');
        break;
      case 20:
        result = await targetChannel.permissionOverwrites.cache.filter(p => p.type == 'role').map(p => `**Роль**: <@&${p.id}>\n • Разрешено: ${p.allow.toArray().length >= 1 ? p.allow.toArray() : 'Ничего'}\n • Запрещено: ${p.deny.toArray().length >= 1 ? p.deny.toArray() : 'Ничего'}`).join('\n\n');
        break;
      case 21:
        result = await targetChannel.permissionOverwrites.cache;
        break;
      case 22:
        result = await targetChannel.permissionOverwrites.cache;
        break;
      case 23:
        result = await targetChannel.permissionOverwrites.cache.filter(p => p.type == 'member').map(p => `**Пользователь**: <@${p.id}>\n • Разрешено: ${p.allow.toArray().length >= 1 ? p.allow.toArray() : 'Ничего'}\n • Запрещено: ${p.deny.toArray().length >= 1 ? p.deny.toArray() : 'Ничего'}`);
        break;
      case 24:
        result = await targetChannel.permissionOverwrites.cache.filter(p => p.type == 'role').map(p => `**Роль**: <@&${p.id}>\n • Разрешено: ${p.allow.toArray().length >= 1 ? p.allow.toArray() : 'Ничего'}\n • Запрещено: ${p.deny.toArray().length >= 1 ? p.deny.toArray() : 'Ничего'}`);
        break;
      case 25:
        result = targetChannel.rateLimitPerUser;
        break;
      case 26:
        result = targetChannel.threads.cache.filter(p => p).map(p => p);
        break;
      case 27:
        const options = {
          limit: 100
        };
        if (cache.msg) {
          options.before = cache.msg.id;
        }
        await targetChannel.messages
          .fetch(options)
          .then((messages) => {

            result = messages

          })

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