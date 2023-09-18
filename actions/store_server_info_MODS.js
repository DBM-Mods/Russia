module.exports = {

  name: "Store Server Info MOD",
  section: "Server Control",
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[xinxyla - 172782058396057602]<br>[Tempest - 321400509326032897]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {
    const info = [
      "Сервер (Объект)",
      "ID сервера",
      "Имя сервера",
      "Акроним имени сервера",
      "Предпочитаемый язык сервера",
      "URL иконки сервера",
      "Уровень проверки сервера",
      "Стандартный канал сервера",
      "AFK-канал сервера",
      "Системный канал сервера",
      "Стандартная роль сервера",
      "Владелец сервера (Объект)",
      "Бот сервера",
      "Список каналов сервера",
      "Список ролей сервера",
      "Список участников сервера",
      "Список эмодзи сервера",
      "Общее количество участников сервера",
      "Сервер создан",
      "Время ожидания AFK на сервере",
      "Сервер доступен",
      "Большой сервер",
      "Сервер подключен",
      "Общее количество каналов сервера",
      "Общее количество эмодзи сервера",
      "Встраивание сервера включено",
      "Общее количество занятых участников сервера",
      "Общее количество онлайн-участников сервера",
      "Общее количество оффлайн-участников сервера",
      "Общее количество неактивных участников сервера",
      "Общее количество ботов на сервере",
      "Список ID каналов сервера",
      "Список ID ролей сервера",
      "Список ID участников сервера",
      "",
      "Общее количество людей на сервере",
      "",
      "Общее количество ролей на сервере",
      "Общее количество текстовых каналов сервера",
      "Общее количество голосовых каналов сервера",
      "Сервер подтвержден",
      "Список забаненных на сервере",
      "Список приглашений на сервере",
      "Фильтр контента сервера",
      "Количество ускорений сервера",
      "Уровень ускорения сервера",
      "URL баннера сервера",
      "Список возможностей сервера",
      "ID владельца сервера",
      "Пользовательский URL-адрес сервера",
      "ID канала виджета сервера",
      "ID AFK-канала сервера",
      "Активирован прогресс-бар сервера",
      "Описание сервера",
      "Сервер в партнерстве",
      "Канал правил сервера",
      "ID канала правил сервера",
      "Канал виджета сервера",
      "ID системного канала сервера",
      "Уровень NSFW сервера",
      "Уровень MFA/2FA сервера",
      "Отметка времени сервера",
      "URL шаблона",
      "Код шаблона",
      "Имя шаблона",
      "Описание шаблона",
      "Количество использований шаблона",
      "ID создателя шаблона",
      "Отметка времени создания шаблона",
      "Отметка времени обновления шаблона",
      "Общее количество участников в голосовых каналах",
      "Список участников по ID, присутствующих в голосовых каналах",
      "Список присутствующих участников в голосовых каналах",
      "Список текстовых каналов сервера",
      "Список ID текстовых каналов сервера",
      "Список голосовых каналов сервера",
      "Список ID голосовых каналов сервера",
      "Список категорий сервера",
      "Список ID категорий сервера",
      "Список ботов на сервере",
      "Список ID ботов на сервере",
      "Список участников сервера в порядке входа",
      "Список ID участников сервера в порядке входа",
      "Список вебхуков сервера",
      "Список имен категорий сервера",
      "Список имен каналов сервера",
      "Список имен текстовых каналов сервера",
      "Список имен голосовых каналов сервера",
      "Список имен эмодзи сервера",
      "Список имен ролей сервера",
      "Список тегов участников сервера",
      "Список имен участников сервера",
      "Список дискриминаторов участников сервера",
      "Список тегов участников сервера в порядке входа",
      "Список стикеров сервера",
      "Список имен стикеров сервера",
      "Список описаний стикеров сервера",
      "Список ID стикеров сервера",
      "Общее количество стикеров на сервере",
      "Список событий на сервере",
      "Список имен событий на сервере",
      "Общее количество событий на сервере",
      "Список ID событий на сервере",
      "Роль Server Booster",
      "Список участников с ускорением в порядке ускорения",
      "Список участников с Тайм-аутом (сейчас)",
      "Общее количество участников с Тайм-аутом (сейчас)",
      "Общее количество участников когда-либо получивших Тайм-аут",
      "Список участников когда-либо получивших Тайм-аут",
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
    let dataType = "Неизвестный тип";
    switch (info) {
      case 0:
        dataType = "Сервер";
        break;
      case 1:
        dataType = "ID сервера";
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
        dataType = "URL значок сервера";
        break;
      case 6:
        dataType = "Текст";
        break;
      case 7:
        dataType = "Канал";
        break;
      case 8:
        dataType = "Канал";
        break;
      case 9:
        dataType = "Канал";
        break;
      case 10:
        dataType = "Роль";
        break;
      case 11:
        dataType = "Участник сервера";
        break;
      case 12:
        dataType = "Участник сервера";
        break;
      case 13:
        dataType = "Список";
        break;
      case 14:
        dataType = "Список";
        break;
      case 15:
        dataType = "Список";
        break;
      case 16:
        dataType = "Список";
        break;
      case 17:
        dataType = "Число";
        break;
      case 18:
        dataType = "Дата";
        break;
      case 19:
        dataType = "Число";
        break;
      case 20:
        dataType = "True/False";
        break;
      case 21:
        dataType = "True/False";
        break;
      case 22:
        dataType = "Дата";
        break;
      case 23:
        dataType = "Число";
        break;
      case 24:
        dataType = "Число";
        break;
      case 25:
        dataType = "True/False";
        break;
      case 26:
        dataType = "Число";
        break;
      case 27:
        dataType = "Число";
        break;
      case 28:
        dataType = "Число";
        break;
      case 29:
        dataType = "Число";
        break;
      case 30:
        dataType = "Число";
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
      case 35:
        dataType = "Число";
        break;
      case 37:
        dataType = "Число";
        break;
      case 38:
        dataType = "Число";
        break;
      case 39:
        dataType = "Число";
        break;
      case 40:
        dataType = "True/False";
        break;
      case 41:
        dataType = "Список";
        break;
      case 42:
        dataType = "Список";
        break;
      case 43:
        dataType = "Текст";
        break;
      case 44:
        dataType = "Число";
        break;
      case 45:
        dataType = "Число";
        break;
      case 46:
        dataType = "URL Баннера сервера";
        break;
      case 47:
        dataType = "Список";
        break;
      case 48:
        dataType = "ID";
        break;
      case 49:
        dataType = "Текст";
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
        dataType = "Текст";
        break;
      case 54:
        dataType = "True/False";
        break;
      case 55:
        dataType = "Канал";
        break;
      case 56:
        dataType = "ID";
        break;
      case 57:
        dataType = "Канал";
        break;
      case 58:
        dataType = "ID";
        break;
      case 59:
        dataType = "Текст";
        break;
      case 60:
        dataType = "Текст";
        break;
      case 61:
        dataType = "Timestamp";
        break;
      case 62:
        dataType = "URL";
        break;
      case 63:
        dataType = "Код";
        break;
      case 64:
        dataType = "Текст";
        break;
      case 65:
        dataType = "Текст";
        break;
      case 66:
        dataType = "Число";
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
        dataType = "Число";
        break;
      case 71:
        dataType = "Список";
      case 92:
        dataType = "Список";
      case 102:
        dataType = "Список";
        break;
      case 103:
        dataType = "Объект";
        break;
      case 104:
        dataType = "Список";
        break;
      case 105:
        dataType = "Список";
        break;
      case 106:
        dataType = "Число";
        break;
      case 107:
        dataType = "Число";
        break;
      case 108:
        dataType = "Список";
        break;
    }

    return [data.varName2, dataType];
  },



  fields: ["server", "varName", "info", "storage", "varName2", "description", "descriptionx", "descriptioncolor"],



  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 2.0</div>

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

<server-input dropdownLabel="Сервер" selectId="server" variableContainerId="varNameContainer" variableInputId="varName"></server-input>

<br><br><br>

<div>
	<div style="padding-top: 8px; width: 100%;">
		<span class="dbminputlabel">Информация</span><br>
		<select id="info" class="round2">
      <optgroup label="Общая информация о сервере">
      <option value="0">Сервер (Объект)</option>
      <option value="1">ID сервера</option>
      <option value="2">Имя сервера</option>
      <option value="3">Акроним имени сервера</option>
      <option value="53">Описание сервера</option>
      <option value="5">URL иконки сервера</option>
      <option value="7">Стандартный канал сервера</option>
      <option value="58">ID системного канала сервера</option>
      <option value="9">Системный канал сервера</option>
      <option value="21">Большой сервер</option>
      <option value="43">Фильтр контента сервера</option>
      <option value="10">Стандартная роль сервера</option>
      <option value="12">Бот сервера</option>
      <option value="20">Сервер доступен</option>
      </optgroup>
      <optgroup label="Информация об AFK на сервере">
      <option value="8">AFK-канал сервера</option>
      <option value="51">ID AFK-канала сервера</option>
      <option value="19">Время AFK на сервере</option>
      </optgroup>
      <optgroup label="Информация о преимуществах сервера">
      <option value="44">Количество ускорений сервера</option>
      <option value="45">Уровень ускорения сервера</option>
      <option value="103">Роль Server Booster</option>
      <option value="104">Список участников с ускорением в порядке ускорения</option>
      </optgroup>
      <optgroup label="Счетчики">
      <option value="17">Общее количество участников сервера</option>
      <option value="35">Общее количество людей на сервере</option>
      <option value="30">Общее количество ботов на сервере</option>
      <option value="24">Общее количество эмодзи на сервере</option>
      <option value="37">Общее количество ролей на сервере</option>
      <option value="23">Общее количество каналов на сервере</option>
      <option value="38">Общее количество текстовых каналов на сервере</option>
      <option value="39">Общее количество голосовых каналов на сервере</option>
      <option value="70">Общее количество участников в голосовых каналах</option>
      <option value="98">Общее количество стикеров на сервере</option>
      <option value="101">Общее количество событий на сервере</option>
      <option value="106">Общее количество участников с Тайм-аутом (сейчас)</option>
      <option value="107">Общее количество участников когда-либо получивших Тайм-аут</option>
      </optgroup>
      <optgroup label="Информация о сообществе на сервере">
      <option value="54">Сервер в партнерстве</option>
      <option value="55">Канал правил сервера</option>
      <option value="56">ID канала правил сервера</option>
      <option value="4">Предпочитаемый язык сервера</option>
      <option value="40">Сервер подтвержден</option>
      <option value="52">Активирован премиум-серверный прогресс-бар</option>
      <option value="46">URL баннера сервера</option>
      <option value="47">Список возможностей сервера</option>
      <option value="49">Пользовательский URL-адрес сервера</option>
      <option value="57">Канал виджета сервера</option>
      <option value="50">ID канала виджета сервера</option>
      <option value="25">Встраиваемый сервер активирован</option>
      </optgroup>
      <optgroup label="Информация о датах на сервере">
      <option value="61">Отметка времени сервера</option>
      <option value="18">Сервер создан</option>
      <option value="22">Сервер подключен</option>
      </optgroup>
      <optgroup label="Уровни сервера">
      <option value="59">Уровень NSFW сервера</option>
      <option value="6">Уровень проверки сервера</option>
      <option value="60">Уровень MFA/2FA сервера</option>
      </optgroup>
      <optgroup label="Информация о списках серверов">
      <option value="15">Список участников сервера</option>
      <option value="90">Список тегов участников сервера</option>
      <option value="91">Список имен участников сервера</option>
      <option value="92">Список дискриминаторов участников сервера</option>
      <option value="33">Список ID участников сервера</option>
      <option value="79">Список ботов на сервере</option>
      <option value="80">Список ID ботов на сервере</option>
      <option value="77">Список категорий сервера</option>
      <option value="84">Список имен категорий сервера</option>
      <option value="78">Список ID категорий сервера</option>
      <option value="13">Список каналов на сервере</option>
      <option value="85">Список имен каналов на сервере</option>
      <option value="31">Список ID каналов сервера</option>
      <option value="73">Список текстовых каналов на сервере</option>
      <option value="86">Список имен текстовых каналов на сервере</option>
      <option value="74">Список ID текстовых каналов на сервере</option>
      <option value="75">Список голосовых каналов на сервере</option>
      <option value="87">Список имен голосовых каналов на сервере</option>
      <option value="76">Список ID голосовых каналов сервера</option>
      <option value="16">Список эмодзи на сервере</option>
      <option value="88">Список имен эмодзи на сервере</option>
      <option value="14">Список ролей на сервере</option>
      <option value="89">Список имен ролей на сервере</option>
      <option value="32">Список ID ролей сервера</option>
      <option value="41">Список забаненных на сервере</option>
      <option value="42">Список приглашений на сервере</option>
      <option value="71">Список участников по ID, присутствующих в голосовых каналах</option>
      <option value="72">Список присутствующих участников в голосовых каналах</option>
      <option value="81">Список участников сервера в порядке входа</option>
      <option value="93">Список тегов участников сервера в порядке входа</option>
      <option value="82">Список ID участников сервера в порядке входа</option>
      <option value="83">Список вебхуков сервера</option>
      <option value="94">Список стикеров на сервере</option>
      <option value="95">Список имен стикеров на сервере</option>
      <option value="96">Список описаний стикеров на сервере</option>
      <option value="97">Список ID стикеров на сервере</option>
      <option value="99">Список событий на сервере</option>
      <option value="100">Список имен событий на сервере</option>
      <option value="102">Список ID событий на сервере</option>
      <option value="105">Список участников с Тайм-аутом (сейчас)</option>
      <option value="108">Список участников когда-либо получивших Тайм-аут</option>
      </optgroup>
      <optgroup label="Информация о владельце сервера">
      <option value="48">ID владельца сервера</option>
      <option value="11">Владелец сервера (Объект)</option>
      </optgroup>
      <optgroup label="Счетчики статуса сервера">
      <option value="27">Общее количество участников онлайн на сервере</option>
      <option value="29">Общее количество участников неактивных на сервере</option>
      <option value="26">Общее количество участников занятых на сервере</option>
      <option value="28">Общее количество участников оффлайн на сервере</option>
      </optgroup>
      <optgroup label="Шаблон сервера">
      <option value="62">URL шаблона</option>
      <option value="63">Код шаблона</option>
      <option value="64">Имя шаблона</option>
      <option value="65">Описание шаблона</option>
      <option value="66">Количество использований шаблона</option>
      <option value="67">ID создателя шаблона</option>
      <option value="68">Отметка времени создания шаблона</option>
      <option value="69">Отметка времени обновления шаблона</option>
      </optgroup>
		</select>
    <input type="text" id="filtrodoxinxyla" class="round" placeholder="Фильтр элементов...">
	</div>
</div>

<br>

<store-in-variable dropdownLabel="Хранить в" selectId="storage" variableContainerId="varNameContainer2" variableInputId="varName2"></store-in-variable>

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
    const xinelaslinks = document.getElementsByClassName("xinelaslink");
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
      case 103:
        result = targetServer.roles.cache.find((item) => item.tags && item.tags.premiumSubscriberRole === true);
        break;
      case 104:
        result = targetServer.members.cache.filter((m) => m.premiumSinceTimestamp).sort((a, b) => parseFloat(a.premiumSinceTimestamp) - parseFloat(b.premiumSinceTimestamp)).map(a => a)
        break;
      case 105:
        result = targetServer.members.cache.filter((m) => m.communicationDisabledUntilTimestamp > Date.now()).sort((a, b) => parseFloat(a.communicationDisabledUntilTimestamp) - parseFloat(b.communicationDisabledUntilTimestamp)).map(a => a)
        break;
      case 106:
        result = targetServer.members.cache.filter((m) => m.communicationDisabledUntilTimestamp > Date.now()).map(a => a).length
        break;
      case 107:
        result = targetServer.members.cache.filter((m) => m.communicationDisabledUntilTimestamp > 0).map(a => a).length
        break;
      case 108:
        result = targetServer.members.cache.filter((m) => m.communicationDisabledUntilTimestamp > 0).sort((a, b) => parseFloat(a.communicationDisabledUntilTimestamp) - parseFloat(b.communicationDisabledUntilTimestamp)).map(a => a)
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
