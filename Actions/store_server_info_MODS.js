module.exports = {

  name: "Store Server Info MOD",
  section: "Server Control",
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]<br>[Tempest - 321400509326032897]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {
    const info = [
      "Сервер (объект)",
      "Идентификатор сервера",
      "Имя сервера", "Имя сервера",
      "Аббревиатура имени сервера", "Аббревиатура имени сервера",
      "Предпочтительный язык сервера",
      "URL-адрес значка сервера",
      "Уровень верификации сервера",
      "Канал сервера по умолчанию",
      "Канал AFK сервера",
      "Системный канал сервера",
      "Роль сервера по умолчанию",
      "Владелец сервера (объект)",
      "Серверный бот",
      "Список каналов сервера",
      "Список позиций сервера",
      "Список участников сервера",
      "Список эмодзи сервера",
      "Общее количество членов сервера",
      "Сервер создан на",
      "Таймаут сервера AFK",
      "Сервер доступен",
      "Сервер большой",
      "Сервер подключен",
      "Всего каналов сервера",
      "Всего эмодзи сервера",
      "Сервер включен",
      "Всего занятых участников сервера",
      "Всего онлайн-участников сервера",
      "Total offline members of the server",
      "Всего незанятых членов сервера",
      "Общее количество ботов сервера",
      "Список идентификаторов каналов сервера",
      "Список идентификаторов позиций сервера",
      "Список идентификаторов участников сервера",
      "",
      "Общее количество людей на сервере",
      "",
      "Всего позиций на сервере",
      "Всего текстовых каналов сервера",
      "Всего голосовых каналов сервера",
      "Сервер проверен",
      "Список запрещенных на сервере",
      "Список приглашений сервера",
      "Фильтр явного содержимого сервера",
      "Счетчик импульсов сервера",
      "Уровень форсирования сервера",
      "URL баннера сервера",
      "Список ресурсов сервера",
      "ID владельца сервера",
      "URL-код сервера ванити",
      "ID канала виджета сервера",
      "ID канала AFK сервера",
      "Включить прогресс-бар сервера",
      "Описание сервера",
      "Партнерский сервер",
      "Канал правил сервера",
      "Идентификатор канала правил сервера",
      "Канал виджета сервера",
      "Идентификатор системного канала сервера",
      "Уровень NSFW сервера",
      "Уровень MFA/2FA сервера", "Уровень MFA/2FA сервера",
      "Временная метка сервера",
      "URL-адрес шаблона", "Код шаблона",
      "Код шаблона", "Имя шаблона",
      "Имя шаблона",
      "Описание шаблона",
      "Время использования шаблона",
      "ID создателя шаблона",
      "Временная метка создания шаблона", 
      "Временная метка создания шаблона", 
      "Временная метка обновления шаблона",
      "Общее количество участников в голосовом канале",
      "Список членов по ID, присутствующих в голосовых каналах",
      "Список членов, присутствующих в голосовых каналах",
      "Список текстовых каналов сервера",
      "Список ID текстовых каналов сервера",
      "Список голосовых каналов сервера",
      "Список идентификаторов голосовых каналов сервера",
      "Список категорий сервера",
      "Список ID категорий сервера", "Список ID категорий сервера",
      "Список ботов сервера",
      "Список ID ботов сервера",
      "Список членов сервера в порядке поступления",
      "Список ID членов сервера в порядке поступления",
      "Список серверных Webhooks",
      "Список имен категорий сервера",
      "Список имен каналов сервера",
      "Список имен текстовых каналов сервера",
      "Список имен голосовых каналов сервера",
      "Список имен эмодзи сервера",
      "Список имен позиций сервера",
      "Список имен членов сервера",
      "Список имен членов сервера", "Список имен членов сервера",
      "Список дискрипторов членов сервера",
      "Список тегов членов сервера в порядке поступления",
      "Список фигурок сервера",
      "Список названий фигурок сервера",
      "Список описаний фигурок сервера", "Список описаний фигурок сервера",
      "Список идентификаторов фигурок сервера",
      "Общее количество фигурок сервера",
      "Список событий сервера",
      "Список имен событий сервера",
      "Всего событий сервера",
      "Список идентификаторов событий сервера",
    ];

    if (data.descriptionx) {
      desccor = data.descriptioncolor;
    } else {
      desccor = "none";
    }

    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">${presets.getServerText(data.server, data.varName)} - ${info[parseInt(data.info, 10)]}</font>`
  },

  variableStorage(data, varType) {
    const type = parseInt(data.storage, 10);
    if (type !== varType) return;
    const info = parseInt(data.info, 10);
    let dataType = "Unknown Type";
    switch (info) {
      case 0:
        dataType = "Server";
        break;
      case 1:
        dataType = "ID сервера"
        break;
      case 2:
        dataType = "Текст";
        break
      case 3:
        dataType = "Text";
        break
      case 4:
        dataType = "Text";
        break;
      case 5:
        dataType = "Icon URL";
        break;
      case 6:
        dataType = "Text";
        break;
      case 7:
        dataType = "Channel";
        break;
      case 8:
        dataType = "Channel";
        break;
      case 9:
        dataType = "Channel";
        break;
      case 10:
        dataType = "Позиция";
        break;
      case 11:
        dataType = "Член сервера";
        break;
      case 12:
        dataType = "Член сервера";
        break;
      case 13:
        dataType = "Список";
        break;
      case 14:
        dataType = "List";
        break
      case 15:
        dataType = "List";
        break
      case 16:
        dataType = "List";
        break;
      case 17:
        dataType = "Число";
        break;
      case 18:
        dataType = "Дата";
        break
      case 19:
        dataType = "Number";
        break;
      case 20:
        dataType = "True/False";
        break;
      case 21:
        dataType = "True/False";
        break;
      case 22:
        dataType = "Data";
        break
      case 23:
        dataType = "Number";
        break
      case 24:
        dataType = "Number";
        break;
      case 25:
        dataType = "True/False";
        break;
      case 26:
        dataType = "Число";
        break;
      case 27:
        dataType = "Number";
        break;
      case 28:
        dataType = "Number";
        break;
      case 29:
        dataType = "Number";
        break;
      case 30:
        dataType = "Number";
        break;
      case 31:
        dataType = "Список";
        break;
      case 32:
        dataType = "List";
        break;
      case 33:
        dataType = "List";
        break;
      case 35:
        dataType = "Число";
        break;
      case 37:
        dataType = "Number";
        break;
      case 38:
        dataType = "Number";
        break;
      case 39:
        dataType = "Number";
        break;
      case 40:
        dataType = "True/False";
        break;
      case 41:
        dataType = "List";
        break;
      case 42:
        dataType = "List";
        break;
      case 43:
        dataType = "Text";
        break;
      case 44:
        dataType = "Number";
        break;
      case 45:
        dataType = "Number";
        break;
      case 46:
        dataType = "URL баннера";
        break;
      case 47:
        dataType = "Список";
        break;
      case 48:
        dataType = "ID";
        break;
      case 49:
        dataType = "Text";
        break;
      case 50:
        dataType = "ID";
        break;
      case 51:
        dataType = "ID";
        break;
      case 52:
        dataType = "True/False";
        break;
      case 53:
        dataType = "Text";
        break;
      case 54:
        dataType = "True/False";
        break;
      case 55:
        dataType = "Channel";
        break;
      case 56:
        dataType = "ID";
        break;
      case 57:
        dataType = "Channel";
        break;
      case 58:
        dataType = "ID";
        break;
      case 59:
        dataType = "Text";
        break;
      case 60:
        dataType = "Text";
        break;
      case 61:
        dataType = "Timestamp";
        break;
      case 62:
        dataType = "URL";
        break;
      case 63:
        dataType = "Code";
        break;
      case 64:
        dataType = "Text";
        break;
      case 65:
        dataType = "Text";
        break;
      case 66:
        dataType = "Number";
        break;
      case 67:
        dataType = "ID";
        break;
      case 68:
        dataType = "Timestamp";
        break;
      case 69:
        dataType = "Timestamp";
        break;
      case 70:
        dataType = "Number";
        break;
      case 71:
        dataType = "Список";
      case 92:
        dataType = "Список";
        break;
    }

    return [data.varName2, dataType];
  },



  fields: ["server", "varName", "info", "storage", "varName2", "description", "descriptionx", "descriptioncolor"],



  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновление</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 1.8</div>

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

<server-input dropdownLabel="Сервер" selectId="server" variableContainerId="varNameContainer" variableInputId="varName"></server-input>

<br><br><br>

<div>
	<div style="padding-top: 8px; width: 100%;">
  <span class="dbminputlabel">Информация</span><br>
  <select id="info" class="round2">
  <optgroup label="Общая информация о сервере">
  <option value="0">Сервер (объект)</options>
  <option value="1">Идентификатор сервера</options>
  <option value="2">Имя сервера</options>
  <option value="3">Имя сервера</options>
  <option value="53">Описание сервера</options>
  <option value="5">URL иконки сервера</options>
  <option value="7">Канал сервера по умолчанию</options>
  <option value="58">Идентификатор системного канала сервера</options>
  <option value="9">Системный канал сервера</options
  <option value="21">Большой сервер</options>
  <option value="43">Явный фильтр содержимого сервера</options>
  <option value="10">Роль сервера по умолчанию</options>
  <option value="12">Серверный бот</options
  <option value="20">Сервер доступен</options>
  </optgroup>
  <optgroup label="Информация об AFK сервере">
  <option value="8">Канал AFK сервера</options
  <option value="51">Идентификатор канала АФК сервера</options>
  <option value="19">Таймаут АФК сервера</options>
  </optgroup>
  <optgroup label="Информация об ускорении сервера">
  <option value="44">Счетчик импульсов сервера</options>
  <option value="45">Уровень усиления сервера</options>
  </optgroup>
  <optgroup label="Counts">
  <option value="17">Общее количество участников сервера</options>
  <option value="35">Общее количество людей на сервере</options>
  <option value="30">Общее количество ботов на сервере</options
  <option value="24">Общее количество эмодзи на сервере</options>
  <option value="37">Общее количество постов на сервере</options
  <option value="23">Общее количество каналов на сервере</options
  <option value="38">Общие текстовые каналы сервера</options>
  <option value="39">Общие голосовые каналы сервера</options>
  <option value="70">Общее количество участников голосовых каналов</options>
  <option value="98">Общее количество участников на сервере</option>
  <option value="101">Общее количество событий на сервере</option>
  </optgroup>
  <optgroup label="Информация о сообществе сервера"">
  <option value="54">Серверное партнерство</options>
  <option value="55">Канал правил сервера</options>
  <option value="56">Идентификатор канала правил сервера</options>
  <option value="4">Предпочитаемый язык сервера</options>
  <option value="40">Сервер проверен</options>
  <option value="52">Включен индикатор прогресса на сервере премиум-класса</options>
  <option value="46">URL баннера сервера</options>
  <option value="47">Список ресурсов сервера</options>
  <option value="49">Код URL сервера</options>
  <option value="57">Канал виджетов сервера</options>
  <option value="50">Идентификатор канала виджета сервера</options>
  <option value="25">Встроить сервер включено</options>
  </optgroup>
  <optgroup label="Информация о дате сервера">
  <option value="61">Временная метка сервера</options>
  <option value="18">Сервер создан на</options>
  <option value="22">Сервер подключен на</options>
  </optgroup>
  <optgroup label="Уровни сервера">
  <option value="59">Уровень NSFW сервера</options>
  <option value="6">Уровень проверки сервера</options>
  <option value="60">Уровень MFA/2FA сервера</options>
  </optgroup>
  <optgroup label="Информация о списке серверов">
  <option value="15">Список участников сервера</options>
  <option value="90">Список тегов участников сервера</options>
  <option value="91">Список имен участников сервера</options
  <option value="92">Список дискриминаторов участников сервера</options>
  <option value="33">Список идентификаторов участников сервера</options>
  <option value="79">Список ботов сервера</options
  <option value="80">Список идентификаторов ботов сервера</options>
  <option value="77">Список категорий серверов</options
  <option value="84">Список названий категорий серверов</options>
  <option value="78">Список идентификаторов категорий серверов</options>
  <option value="13">Список каналов сервера</options>
  <option value="85">Список имен серверных каналов</options
  <option value="31">Список идентификаторов серверных каналов</options>
  <option value="73">Список текстовых каналов сервера</options>
  <option value="86">Перечень имен текстовых каналов сервера</options>
  <option value="74">Перечень идентификаторов текстовых каналов сервера</option>
  <option value="75">Список голосовых каналов сервера</options>
  <option value="87">Перечень имен голосовых каналов сервера</options>
  <option value="76">Список идентификаторов голосовых каналов сервера</option>
  <option value="16">Список эмодзи сервера</options>
  <option value="88">Список имен эмодзи сервера</options>
  <option value="14">Список позиций сервера</options>
  <option value="89">Список названий ролей сервера</options
  <option value="32">Список идентификаторов ролей сервера</option>
  <option value="41">Список запрещенных лиц сервера</options
  <option value="42">Список приглашенных на сервер</options
  <option value="71">Список участников по ID, присутствующих на голосовых каналах</option>
  <option value="72">Список участников, присутствующих на голосовых каналах</options>
  <option value="81">Список участников сервера в порядке поступления</option>
  <option value="93">Список тегов участников сервера в порядке поступления</option>
  <option value="82">Список идентификаторов участников сервера в порядке возрастания</option>
  <option value="83">Список серверных Webhooks</option>
  <option value="94">Список фигурок сервера</option>
  <option value="95">Список имен фигурок сервера</option>
  <option value="96">Список описаний фигурок сервера</option>
  <option value="97">Список идентификаторов наклеек сервера</option>
  <option value="99">Список событий сервера</option>
  <option value="100">Список названий событий сервера</option>
  <option value="102">Список идентификаторов событий сервера</option>
  </optgroup>
  <optgroup label="Информация о владельце сервера">
  <option value="48">Идентификатор владельца сервера</options>
  <option value="11">Владелец сервера (объект)</options>
  </optgroup>
  <optgroup label="Счетчик состояния сервера">
  <option value="27">Общее количество онлайн-участников сервера</options>
  <option value="29">Общее количество неактивных участников сервера</options>
  <option value="26">Общее количество занятых участников сервера</options
  <option value="28">Общее количество автономных участников сервера</options>
  </optgroup>
  <optgroup label="Шаблон сервера">
  <option value="62">URL шаблона</options>
  <option value="63">Код шаблона</options>
  <option value="64">Имя шаблона</options>
  <option value="65">Описание шаблона</options>
  <option value="66">Время использования шаблона</options>
  <option value="67">Идентификатор создателя шаблона</options
  <option value="68">Временная метка создания шаблона</options>
  <option value="69">Временная метка обновления шаблона</options>
      </optgroup>
		</select>
    <input type="text" id="filtrodoxinxyla" class="round" placeholder="Фильтр элементов...">
	</div>
</div>

<br>

<store-in-variable dropdownLabel="Хранить в" selectId="storage" variableContainerId="varNameContainer2" variableInputId="varName2"></store-in-variable>
<style>
.round2{width:100%;height:30px;outline:0}
.round2 option{padding:3px 8px;text-align:left}
.round2 optgroup{text-align:center;padding:4px 0px;}


.abrir {
  height: 30px;
  animation: abrir .5s forwards;
}

@keyframes abrir {
  from {
    height: 30px;
  }
  to {
    height: 130px;
  }
}

.fechar {
  height: 130px;
  animation: fechar .5s forwards;
}

@keyframes fechar {
  from {
    height: 130px;
  }
  to {
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
    const targetServer = await this.getServerFromData(data.server, data.varName, cache);

    if (!targetServer) {
      return this.callNextAction(cache);
    }

    const fetchMembers = async (withPresences = false) => {
      if (targetServer.memberCount !== targetServer.members.cache.size) {
        await targetServer.members.fetch({ withPresences });
      }
    }

    const info = parseInt(data.info, 10);

    let result;
    switch (info) {
      case 0:
        result = targetServer;
        break;
      case 1:
        result = targetServer.id;
        break;
      case 2:
        result = targetServer.name;
        break;
      case 3:
        result = targetServer.nameAcronym;
        break;
      case 4:
        result = targetServer.preferredLocale;
        break;
      case 5:
        result = targetServer.iconURL({ dynamic: true, format: "png", size: 4096 });
        break;
      case 6:
        result = targetServer.verificationLevel;
        break;
      case 7:
        result = targetServer.getDefaultChannel();
        break;
      case 8:
        result = targetServer.afkChannel;
        break;
      case 9:
        result = targetServer.systemChannel;
        break;
      case 10:
        result = targetServer.roles.resolve(targetServer.id);
        break;
      case 11:
        result = await targetServer.fetchOwner();
        break;
      case 12:
        result = targetServer.members.me;
        break;
      case 13:
        result = [...targetServer.channels.cache.values()];
        break;
      case 14:
        result = [...targetServer.roles.cache.values()];
        break;
      case 15:
        result = [...targetServer.members.cache.values()];
        break;
      case 16:
        result = [...targetServer.emojis.cache.values()];
        break;
      case 17:
        result = targetServer.memberCount;
        break;
      case 18:
        result = targetServer.createdAt;
        break;
      case 19:
        result = targetServer.afkTimeout ?? 0;
        break;
      case 20:
        result = targetServer.available;
        break;
      case 21:
        result = targetServer.large;
        break;
      case 22:
        result = targetServer.joinedAt;
        break;
      case 23:
        result = targetServer.channels.cache.size;
        break;
      case 24:
        result = targetServer.emojis.cache.size;
        break;
      case 25:
        result = !!targetServer.widgetEnabled;
        break;
      case 26:
        await fetchMembers(true);
        result = targetServer.members.cache.filter((m) => m.presence?.status === "dnd").size;
        break;
      case 27:
        await fetchMembers(true);
        result = targetServer.members.cache.filter((m) => m.presence?.status === "online").size;
        break;
      case 28:
        await fetchMembers(true);
        result = targetServer.members.cache.filter((m) => m.presence?.status === "offline").size;
        break;
      case 29:
        await fetchMembers(true);
        result = targetServer.members.cache.filter((m) => m.presence?.status === "idle").size;
        break;
      case 30:
        result = targetServer.members.cache.filter((m) => m.user?.bot).size;
        break;
      case 31:
        result = [...targetServer.channels.cache.keys()];
        break;
      case 32:
        result = [...targetServer.roles.cache.keys()];
        break;
      case 33:
        await fetchMembers();
        result = [...targetServer.members.cache.keys()];
        break;
      case 35:
        await fetchMembers();
        result = targetServer.members.cache.filter((m) => !m.user?.bot).size;
        break;
      case 37:
        result = targetServer.roles.cache.size;
        break;
      case 38:
        result = targetServer.channels.cache.filter((c) => c.type === "GUILD_TEXT" || c.type === "GUILD_NEWS").size;
        break;
      case 39:
        result = targetServer.channels.cache.filter((c) => c.type === "GUILD_VOICE").size;
        break;
      case 40:
        result = targetServer.verified;
        break;
      case 41:
        const bans = await targetServer.bans.fetch();
        result = [...bans.values()];
        break;
      case 42:
        const invites = await targetServer.invites.fetch();
        result = [...invites.values()];
        break;
      case 43:
        result = targetServer.explicitContentFilter;
        break;
      case 44:
        result = targetServer.premiumSubscriptionCount ?? 0;
        break;
      case 45:
        result = targetServer.premiumTier;
        break;
      case 46:
        result = targetServer.bannerURL({ format: "png", size: 4096 });
        break;
      case 47:
        result = targetServer.features;
        break;
      case 48:
        result = targetServer.ownerId;
        break;
      case 49:
        result = targetServer.vanityURLCode;
        break;
      case 50:
        result = targetServer.widgetChannelId;
        break;
      case 51:
        result = targetServer.afkChannelId;
        break;
      case 52:
        result = targetServer.premiumProgressBarEnabled;
        break;
      case 53:
        result = targetServer.description;
        break;
      case 54:
        result = targetServer.partnered;
        break;
      case 55:
        result = targetServer.rulesChannel;
        break;
      case 56:
        result = targetServer.rulesChannelId;
        break;
      case 57:
        result = targetServer.widgetChannel;
        break;
      case 58:
        result = targetServer.systemChannelId;
        break;
      case 59:
        result = targetServer.nsfwLevel;
        break;
      case 60:
        result = targetServer.mfaLevel;
        break;
      case 61:
        result = targetServer.createdTimestamp;
        break;
      case 62:
        result = `https://discord.new/${(await targetServer.fetchTemplates()).map(v => v.code)}`;
        break;
      case 63:
        result = `${(await targetServer.fetchTemplates()).map(v => v.code)}`;
        break;
      case 64:
        result = `${(await targetServer.fetchTemplates()).map(v => v.name)}`;
        break;
      case 65:
        result = `${(await targetServer.fetchTemplates()).map(v => v.description)}`;
        break;
      case 66:
        result = `${(await targetServer.fetchTemplates()).map(v => v.usageCount)}`;
        break;
      case 67:
        result = `${(await targetServer.fetchTemplates()).map(v => v.creatorId)}`;
        break;
      case 68:
        result = `${(await targetServer.fetchTemplates()).map(v => v.createdAt)}`;
        break;
      case 69:
        result = `${(await targetServer.fetchTemplates()).map(v => v.updatedAt)}`;
        break;
      case 70:
        result = targetServer.channels.cache.filter(c => c.type === 'GUILD_VOICE').map(c => c.members.size).reduce((s, a) => s + a, 0);
        break;
      case 71:
        const str = targetServer.channels.cache.filter(c => c.type === 'GUILD_VOICE').map(c => c.members.map(member => member.user.id + ',').join('')).join('');
        result = str.substring(0, str.length - 1).split(new RegExp(","));
        break;
      case 72:
        let channels = targetServer.channels.cache.filter((c) => c.type === "GUILD_VOICE");
        let members = new Array();

        for (const [channelID, channel] of channels) {
          for (const [memberID, member] of channel.members) {
            members.push(member);
          }
        }

        result = members;
        break;
      case 73:
        result = targetServer.channels.cache.filter((c) => ["GUILD_TEXT", "GUILD_NEWS"].includes(c.type)).map(channels => channels);
        break;
      case 74:
        result = targetServer.channels.cache.filter((c) => ["GUILD_TEXT", "GUILD_NEWS"].includes(c.type)).map(channels => channels.id);
        break;
      case 75:
        result = targetServer.channels.cache.filter((c) => c.type === "GUILD_VOICE").map(channels => channels);
        break;
      case 76:
        result = targetServer.channels.cache.filter((c) => c.type === "GUILD_VOICE").map(channels => channels.id);
        break;
      case 77:
        result = targetServer.channels.cache.filter((c) => c.type === "GUILD_CATEGORY").map(channels => channels);
        break;
      case 78:
        result = targetServer.channels.cache.filter((c) => c.type === "GUILD_CATEGORY").map(channels => channels.id);
        break;
      case 79:
        result = targetServer.members.cache.filter((m) => m.user?.bot).map((m) => m);
        break;
      case 80:
        result = targetServer.members.cache.filter((m) => m.user?.bot).map((m) => m.id);
        break;
      case 81:
        result = targetServer.members.cache.sort((a, b) => parseFloat(a.joinedTimestamp) - parseFloat(b.joinedTimestamp)).map((m) => m);
        break;
      case 82:
        result = targetServer.members.cache.sort((a, b) => parseFloat(a.joinedTimestamp) - parseFloat(b.joinedTimestamp)).map((m) => m.id);
        break;
      case 83:
        const webhooks = await targetServer.fetchWebhooks();
        result = webhooks.map((w) => w);
        break;
      case 84:
        result = targetServer.channels.cache.filter((c) => c.type === "GUILD_CATEGORY").map(channels => channels.name);
        break;
      case 85:
        result = targetServer.channels.cache.map(channels => channels.name);
        break;
      case 86:
        result = targetServer.channels.cache.filter((c) => ["GUILD_TEXT", "GUILD_NEWS"].includes(c.type)).map(channels => channels.name);
        break;
      case 87:
        result = targetServer.channels.cache.filter((c) => c.type === "GUILD_VOICE").map(channels => channels.name);
        break;
      case 88:
        result = targetServer.emojis.cache.map(emoji => emoji.name);
        break;
      case 89:
        result = targetServer.roles.cache.map(roles => roles.name);
        break;
      case 90:
        result = targetServer.members.cache.filter((m) => m).map((m) => m.user.tag);
        break;
      case 91:
        result = targetServer.members.cache.filter((m) => m).map((m) => m.user.username);
        break;
      case 92:
        result = targetServer.members.cache.filter((m) => m).map((m) => m.user.discriminator);
        break;
      case 93:
        result = targetServer.members.cache.sort((a, b) => parseFloat(a.joinedTimestamp) - parseFloat(b.joinedTimestamp)).map((m) => m.user.tag);
        break;
      case 94:
        result = [...targetServer.stickers.cache.values()];
        break;
      case 95:
        result = targetServer.stickers.cache.map(sticker => sticker.name);
        break;
      case 96:
        result = targetServer.stickers.cache.map(sticker => sticker.description);
        break;
      case 97:
        result = targetServer.stickers.cache.map(sticker => sticker.id);
        break;
      case 98:
        result = targetServer.stickers.cache.size;
        break;
      case 99:
        result = [...targetServer.scheduledEvents.cache.values()];
        break;
      case 100:
        result = targetServer.scheduledEvents.cache.map(scheduledEvents => scheduledEvents.name);
        break;
      case 101:
        result = targetServer.scheduledEvents.cache.size;
        break;
      case 102:
        result = targetServer.scheduledEvents.cache.map(scheduledEvents => scheduledEvents.id);
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