module.exports = {
  name: "Store Message Info MOD",
  section: "Messaging",
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[xinxyla - 172782058396057602]<br>[Tempest - 321400509326032897]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {
    const info = [
      "Объект сообщения",
      "ID сообщения",
      "Текст сообщения",
      "Автор сообщения",
      "Канал сообщения",
      "Отметка времени сообщения",
      "Сообщение закреплено?",
      "Сообщение TTS?",
      "Список вложений сообщения [Объект]",
      "Изменения в сообщении",
      "ID сервера сообщения",
      "",
      "Количество реакций на сообщение",
      "Список упомянутых пользователей",
      "Количество упомянутых пользователей",
      "URL сообщения",
      "Дата создания сообщения",
      "Длина содержимого сообщения",
      "Количество вложений в сообщении",
      "Сервер сообщения",
      "Тип сообщения",
      "ID вебхука сообщения",
      "Объект встраивания сообщения",
      "Заголовок встраивания",
      "Описание встраивания",
      "URL встраивания",
      "Цвет встраивания",
      "Отметка времени встраивания",
      "Миниатюра встраивания",
      "Изображение встраивания",
      "Имя автора встраивания",
      "URL иконки автора встраивания",
      "URL автора встраивания",
      "Текст нижнего колонтитула встраивания",
      "URL иконки нижнего колонтитула встраивания",
      "Имя поля встраивания",
      "Значение поля встраивания",
      "Inline поля встраивания",
      "Количество встраиваний",
      "Количество полей",
      "Объект взаимодействия",
      "ID взаимодействия",
      "Имя взаимодействия",
      "Тип взаимодействия",
      "ID автора взаимодействия",
      "Имя автора взаимодействия",
      "Дискриминатор автора взаимодействия",
      "Тег автора взаимодействия",
      "Аватар автора взаимодействия",
      "Общее количество строк",
      "Общее количество компонентов в строке",
      "Объект компонента",
      "ID компонента",
      "Тип компонента",
      "Метка компонента",
      "Стиль компонента",
      "URL компонента",
      "Компонент включен/выключен",
      "Заполнитель компонента",
      "Минимальное количество значений в меню",
      "Максимальное количество значений в меню",
      "Опции меню",
      "Список вложений сообщения [URL]",
      "Является ли это сообщение ответом?",
      "Объект ответного сообщения",
      "Идентификатор ответного сообщения",
      "Идентификатор сервера ответного сообщения",
      "Идентификатор канала ответного сообщения",
    ];

    if (data.descriptionx) {
      desccor = data.descriptioncolor;
    } else {
      desccor = "none";
    }

    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">${presets.getMessageText(data.message, data.varName)} - ${info[parseInt(data.info, 10)]}</font>`
  },

  variableStorage(data, varType) {
    const type = parseInt(data.storage, 10);
    if (type !== varType) return;
    const info = parseInt(data.info, 10);
    let dataType = "Unknown Type";
    switch (info) {
      case 0:
        dataType = "Сообщение";
        break;
      case 1:
        dataType = "ID";
        break;
      case 2:
        dataType = "Текст";
        break;
      case 3:
        dataType = "Пользователь";
        break;
      case 4:
        dataType = "Канал";
        break;
      case 5:
        dataType = "Текст";
        break;
      case 6:
        dataType = "True/False";
        break;
      case 7:
        dataType = "True/False";
        break;
      case 8:
        dataType = "Дата";
      case 9:
        dataType = "Список";
      case 12:
        dataType = "Число";
        break;
      case 13:
        dataType = "Список";
        break;
      case 14:
        dataType = "Число";
        break;
      case 15:
        dataType = "URL";
        break;
      case 16:
        dataType = "Дата";
        break;
      case 17:
        dataType = "Число"
        break;
      case 18:
        dataType = "Число";
        break;
      case 19:
        dataType = "Сервер";
        break;
      case 20:
        dataType = "Текст";
        break;
      case 21:
        dataType = "ID";
        break;
      case 22:
        dataType = "Эмбед сообщение";
        break;
      case 23:
        dataType = "Эмбед сообщение";
        break;
      case 24:
        dataType = "Эмбед сообщение";
        break;
      case 25:
        dataType = "Эмбед сообщение";
        break;
      case 26:
        dataType = "Эмбед сообщение";
        break;
      case 27:
        dataType = "Эмбед сообщение";
        break;
      case 28:
        dataType = "Эмбед сообщение";
        break;
      case 29:
        dataType = "Эмбед сообщение";
        break;
      case 30:
        dataType = "Эмбед сообщение";
        break;
      case 31:
        dataType = "Эмбед сообщение";
        break;
      case 32:
        dataType = "Эмбед сообщение";
        break;
      case 33:
        dataType = "Эмбед сообщение";
        break;
      case 34:
        dataType = "Эмбед сообщение";
        break;
      case 35:
        dataType = "Эмбед сообщение";
        break;
      case 36:
        dataType = "Эмбед сообщение";
        break;
      case 37:
        dataType = "Эмбед сообщение";
        break;
      case 38:
        dataType = "Число";
        break;
      case 39:
        dataType = "Число";
        break;
      case 40:
        dataType = "Взаимодействие";
        break;
      case 41:
        dataType = "Взаимодействие";
        break;
      case 42:
        dataType = "Взаимодействие";
        break;
      case 43:
        dataType = "Взаимодействие";
        break;
      case 44:
        dataType = "Пользователь взаимодействия";
        break;
      case 45:
        dataType = "Пользователь взаимодействия";
        break;
      case 46:
        dataType = "Пользователь взаимодействия";
        break;
      case 47:
        dataType = "Пользователь взаимодействия";
        break;
      case 48:
        dataType = "Пользователь взаимодействия";
        break;
      case 49:
        dataType = "Компонент";
        break;
      case 50:
        dataType = "Компонент";
        break;
      case 51:
        dataType = "Компонент";
        break;
      case 52:
        dataType = "Компонент";
        break;
      case 53:
        dataType = "Компонент";
        break;
      case 54:
        dataType = "Компонент";
        break;
      case 55:
        dataType = "Компонент";
        break;
      case 56:
        dataType = "Компонент";
        break;
      case 57:
        dataType = "Компонент";
        break;
      case 58:
        dataType = "Компонент";
        break;
      case 59:
        dataType = "Компонент";
        break;
      case 60:
        dataType = "Компонент";
        break;
      case 61:
        dataType = "Компонент";
        break;
      case 62:
        dataType = "Список";
        break;
      case 63:
        dataType = "True/False";
        break;
      case 64:
        dataType = "Объект";
         break;
      case 65:
        dataType = "ID";
        break;
      case 66:
        dataType = "ID";
        break;
      case 67:
        dataType = "ID";
        break;
    }
    return [data.varName2, dataType];
  },

  fields: ["message", "varName", "info", "embednumero", "field", "comp1", "comp2", "storage", "varName2", "description", "descriptionx", "descriptioncolor"],


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

    <div style="float: left; width: 35%;">
    <span class="dbminputlabel">Сообщение</span><br>
    <select id="message" class="round" onchange="glob.onChangeMode(this)">
    <option value="0" selected>Командное сообщение</option>
    <option value="1">Временная переменная</option>
    <option value="2">Сервернная переменная</option>
    <option value="3">Глобальнная переменная</option>
    </select>
    </div>
    <div id="xinxylagatu" style="float: right; width: 60%;">
    <span class="dbminputlabel">Имя переменной</span><br>
      <input id="varName" class="round" type="text" list="variableList"><br>
    </div>

<br><br><br>

<div style="padding-top: 8px;">
	<span class="dbminputlabel">Информация</span><br>
	<select id="info" class="round2" onchange="glob.onComparisonChanged(this)">
		<option value="0" selected>Объект сообщения</option>
		<option value="1">ID сообщения</option>
		<option value="2">Текст сообщения</option>
		<option value="3">Автор сообщения</option>
		<option value="4">Канал сообщения</option>
		<option value="5">Отметка времени сообщения</option>
		<option value="6">Сообщение закреплено?</option>
    <option value="7">Сообщение TTS?</option>
    <option value="8">Список вложений сообщения [Объект]</option>
    <option value="62">Список вложений сообщения [URL]</option>
		<option value="9">Изменения в сообщении</option>
		<option value="12">Количество реакций на сообщение</option>
		<option value="13">Список упомянутых пользователей в сообщении</option>
		<option value="14">Количество упомянутых пользователей в сообщении</option>
		<option value="15">URL сообщения</option>
		<option value="16">Дата создания сообщения</option>
		<option value="17">Длина содержимого сообщения</option>
		<option value="18">Количество вложений в сообщении</option>
		<option value="10">ID сервера сообщения</option>
    <option value="19">Сервер сообщения</option>
		<option value="20">Тип сообщения</option>
		<option value="21">ID вебхука сообщения</option>
    <optgroup label="Информации об интеракции">
    <option value="40">Объект интеракции</option>
    <option value="41">ID интеракции</option>
    <option value="42">Имя интеракции</option>
    <option value="43">Тип интеракции</option>
    <option value="44">ID Автора интеракции</option>
    <option value="45">Имя Автора интеракции</option>
    <option value="46">Дискриминатор Автора интеракции</option>
    <option value="47">Тег Автора интеракции</option>
    <option value="48">Аватар Автора интеракции</option>
    <optgroup label="Информации об Embed">
    <option value="22">Объект Embed сообщения</option>
    <option value="38">Количество Embeds</option>
    <option value="39">Количество Fields</option>
    <option value="23">Заголовок</option>
    <option value="24">Описание</option>
    <option value="25">URL</option>
    <option value="26">Цвет</option>
    <option value="27">Отметка времени</option>
    <option value="28">Миниатюра</option>
    <option value="29">Изображение</option>
    <option value="30">Имя автора</option>
    <option value="31">URL иконки автора</option>
    <option value="32">URL автора</option>
    <option value="33">Текст нижнего колонтитула</option>
    <option value="34">URL иконки нижнего колонтитула</option>
    <option value="35">Имя поля</option>
    <option value="36">Значение поля</option>
    <option value="37">Inline поля</option>
    <optgroup label="Информации о компонентах">
    <option value="49">Общее количество строк</option>
    <option value="50">Общее количество компонентов в строке</option>
    <option value="51">Объект компонента</option>
    <option value="52">ID компонента</option>
    <option value="53">Тип компонента</option>
    <option value="54">Метка компонента</option>
    <option value="55">Стиль компонента</option>
    <option value="56">URL компонента</option>
    <option value="57">Компонент включен/выключен</option>
    <option value="58">Заполнитель компонента</option>
    <option value="59">Минимальное количество значений в меню</option>
    <option value="60">Максимальное количество значений в меню</option>
    <option value="61">Опции меню</options>
    </optgroup>
    <optgroup label="Информация о ответном сообщении">
    <option value="63">Является ли это сообщение ответом?</options>
    <option value="64">Объект ответного сообщения</options>
    <option value="65">Идентификатор ответного сообщения</options>
    <option value="66">Идентификатор сервера ответного сообщения</options>
    <option value="67">Идентификатор канала ответного сообщения</options>
    </optgroup>
	</select>
  <input type="text" id="filtrodoxinxyla" class="round" placeholder="Фильтр опций...">
</div><br><div style="width: 100%;display:none" id="containerxin2">
<table style="width:100%"><tr><td style="padding:5px">
<span class="dbminputlabel">Номер Эмбеда</span><br>
<input id="embednumero" value="0" class="round" type="text">
<br></td><td style="padding:5px">
<div style="width: 100%;" id="containerxin">
<span class="dbminputlabel">Номер Поля</span><br>
<input id="field" value="0" class="round" type="text">
<br>
</div></td></tr></table></div>
<table style="width:100%">
<tr><td style="padding:5px"><div id="containerxin3">
<span class="dbminputlabel">Номер строки</span><br>
<input id="comp1" value="0" class="round" type="text">
<br></div></td><td style="padding:5px"><div id="containerxin4">
<span class="dbminputlabel">Номер компонента</span><br>
<input id="comp2" value="0" class="round" type="text">
<br></div>
</td></tr></table>

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
    height: 130px;
    min-height: 100px;
    height: calc(100vh - 420px);
  }
}
.fechar {
  height: 130px;
  min-height: 100px;
  height: calc(100vh - 420px);
  animation: fechar .5s forwards;
}
@keyframes fechar {
  from {
    height: 130px;
    min-height: 100px;
    height: calc(100vh - 420px);
  }
  to {
    min-height: 30px;
    height: 30px;
  }
}

</style>
`;
  },


  init() {
    const { glob, document } = this;

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

    glob.onChangeMode = function (message) {
      if (parseInt(message.value) == 0) {
        document.getElementById("xinxylagatu").style.display = "none";
      } else {
        document.getElementById("xinxylagatu").style.display = null;
      }
    }

    glob.onChangeMode(document.getElementById("message"));



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

    glob.onComparisonChanged = function (event) {
      if (event.value > 21) {
        document.getElementById("containerxin2").style.display = "block";
        document.getElementById("containerxin3").style.display = "none";
        document.getElementById("containerxin4").style.display = "none";
      }
      if (event.value < 22) {
        document.getElementById("containerxin2").style.display = "none";
        document.getElementById("containerxin3").style.display = "none";
        document.getElementById("containerxin4").style.display = "none";
      }
      if (event.value < 35) {
        document.getElementById("containerxin").style.display = "none";
        document.getElementById("containerxin3").style.display = "none";
        document.getElementById("containerxin4").style.display = "none";
      } else {
        document.getElementById("containerxin").style.display = "block";
        document.getElementById("containerxin3").style.display = "none";
        document.getElementById("containerxin4").style.display = "none";
      }
      if (event.value > 37) {
        document.getElementById("containerxin").style.display = "none";
        document.getElementById("containerxin2").style.display = "none";
        document.getElementById("containerxin3").style.display = "none";
        document.getElementById("containerxin4").style.display = "none";
      }
      if (event.value == 39) {
        document.getElementById("containerxin").style.display = "none";
        document.getElementById("containerxin2").style.display = "block";
        document.getElementById("containerxin3").style.display = "none";
        document.getElementById("containerxin4").style.display = "none";
      }
      if (event.value > 50) {
        document.getElementById("containerxin").style.display = "none";
        document.getElementById("containerxin2").style.display = "none";
        document.getElementById("containerxin3").style.display = "block";
        document.getElementById("containerxin4").style.display = "block";
      }
      if (event.value == 50) {
        document.getElementById("containerxin").style.display = "none";
        document.getElementById("containerxin2").style.display = "none";
        document.getElementById("containerxin3").style.display = "block";
        document.getElementById("containerxin4").style.display = "none";
      }
      if (event.value >= 62) {
        document.getElementById("containerxin2").style.display = "none";
        document.getElementById("containerxin3").style.display = "none";
        document.getElementById("containerxin4").style.display = "none";
      }
    };

    glob.onComparisonChanged(document.getElementById("info"));



  },

  async action(cache) {
    const data = cache.actions[cache.index];
    let field = this.evalMessage(data.field, cache);
    let embednumero = this.evalMessage(data.embednumero, cache);
    let comp1 = this.evalMessage(data.comp1, cache);
    let comp2 = this.evalMessage(data.comp2, cache);
    const msg = await this.getMessageFromData(data.message, data.varName, cache);

    if (!msg) {
      this.callNextAction(cache);
      return
    }

    const info = parseInt(data.info, 10);

    let result;
    switch (info) {
      case 0:
        result = msg;
        break;
      case 1:
        result = msg.id;
        break;
      case 2:
        result = msg.content;
        break;
      case 3:
        result = msg.member ?? msg.author;
        break;
      case 4:
        result = msg.channel;
        break;
      case 5:
        result = msg.createdTimestamp;
        break;
      case 6:
        result = msg.pinned;
        break;
      case 7:
        result = msg.tts;
        break;
      case 8:
        result = [...msg.attachments.values()];
        break;
      case 9:
        result = msg.edits;
        break;
      case 10:
        result = msg.guild.id;
        break;
      case 12:
        result = msg.reactions.cache.size;
        break;
      case 13:
        result = msg.mentions.users.filter(p => p).map(p => p);
        break;
      case 14:
        result = msg.mentions.users.size;
        break;
      case 15:
        result = msg.url;
        break;
      case 16:
        result = msg.createdAt;
        break;
      case 17:
        result = msg.content.length;
        break;
      case 18:
        result = msg.attachments.size;
        break;
      case 19:
        result = msg.guild;
        break;
      case 20:
        result = msg.type;
        break;
      case 21:
        result = msg.webhookId;
        break;
      case 22:
        if (msg.embeds.length <= embednumero) {
          result = undefined;
        } else {
          result = msg.embeds[embednumero];
        }
        break;
      case 23:
        if (msg.embeds.length <= embednumero) {
          result = "";
        } else {
          result = msg.embeds[embednumero].title;
        }
        break;
      case 24:
        if (msg.embeds.length <= embednumero) {
          result = "";
        } else {
          result = msg.embeds[embednumero].description;
        }
        break;
      case 25:
        if (msg.embeds.length <= embednumero) {
          result = "";
        } else {
          result = msg.embeds[embednumero].url;
        }
        break;
      case 26:
        if (msg.embeds.length <= embednumero) {
          result = "";
        } else {
          result = msg.embeds[embednumero].color;
        }
        break;
      case 27:
        if (msg.embeds.length <= embednumero) {
          result = "";
        } else {
          result = msg.embeds[embednumero].timestamp;
        }
        break;
      case 28:
        if (msg.embeds.length <= embednumero) {
          result = "";
        } else {


          try{
          result = msg.embeds[embednumero].thumbnail.url;
          }catch{
            result = ""
          }

        }
        break;
      case 29:
        if (msg.embeds.length <= embednumero) {
          result = "";
        } else {

          try{
            result = msg.embeds[embednumero].image.url;
            } catch {
            result = ""
            }

        }
        break;
      case 30:
        if (msg.embeds.length <= embednumero) {
          result = "";
        } else {

          try{
            result = msg.embeds[embednumero].author.name;
            } catch {
            result = ""
            }

        }
        break;
      case 31:
        if (msg.embeds.length <= embednumero) {
          result = "";
        } else {

          try{
            result = msg.embeds[embednumero].author.iconURL;
            } catch {
            result = ""
            }

        }
        break;
      case 32:
        if (msg.embeds.length <= embednumero) {
          result = "";
        } else {

          try{
            result = msg.embeds[embednumero].author.url;
            } catch {
            result = ""
            }

        }
        break;
      case 33:
        if (msg.embeds.length <= embednumero) {
          result = "";
        } else {

          try{
          result = msg.embeds[embednumero].footer.text;
          } catch {
          result = ""
          }

        }
        break;
      case 34:
        if (msg.embeds.length <= embednumero) {
          result = "";
        } else {

          try{
            result = msg.embeds[embednumero].footer.iconURL;
            } catch {
            result = ""
            }

        }
        break;
      case 35:
        if (msg.embeds.length <= embednumero) {
          result = "";
        } else {
          if (msg.embeds[embednumero].fields.length <= field) {
            result = "";
          }
          else {
            result = msg.embeds[embednumero].fields[field].name;
          }
        }
        break;
      case 36:
        if (msg.embeds.length <= embednumero) {
          result = "";
        } else {
          if (msg.embeds[embednumero].fields.length <= field) {
            result = "";
          }
          else {
            result = msg.embeds[embednumero].fields[field].value;
          }
        }
        break;
      case 37:
        if (msg.embeds.length <= embednumero) {
          result = "";
        } else {
          if (msg.embeds[embednumero].fields.length <= field) {
            result = "";
          }
          else {
            result = msg.embeds[embednumero].fields[field].inline;
          }
        }
        break;
      case 38:
        if (msg.embeds.length == undefined) {
          result = 0;
        } else {
          result = msg.embeds.length;
        }
        break;
      case 39:
        if (msg.embeds.length <= embednumero) {
          result = 0;
        } else {
          result = msg.embeds[embednumero].fields.length
        }
        break;
      case 40:
        if (msg.interaction == undefined) {
          result = null;
        } else {
          result = msg.interaction
        }
        break;
      case 41:
        if (msg.interaction == undefined) {
          result = null;
        } else {
          result = msg.interaction.id
        }
        break;
      case 42:
        if (msg.interaction == undefined) {
          result = null;
        } else {
          result = msg.interaction.commandName
        }
        break;
      case 43:
        if (msg.interaction == undefined) {
          result = null;
        } else {
          result = msg.interaction.type
        }
        break;
      case 44:
        if (msg.interaction == undefined) {
          result = null;
        } else {
          result = msg.interaction.user.id
        }
        break;
      case 45:
        if (msg.interaction == undefined) {
          result = null;
        } else {
          result = msg.interaction.user.username
        }
        break;
      case 46:
        if (msg.interaction == undefined) {
          result = null;
        } else {
          result = msg.interaction.user.discriminator
        }
        break;
      case 47:
        if (msg.interaction == undefined) {
          result = null;
        } else {
          result = msg.interaction.user.tag
        }
        break;
      case 48:
        if (msg.interaction == undefined) {
          result = null;
        } else {
          result = msg.interaction.user.displayAvatarURL({ dynamic: true, format: "png", size: 4096 })
        }
        break;

      case 49:
        if (msg.components.length == 0) {
          result = null;
        } else {
          result = msg.components.length
        }
        break;

      case 50:
        if (msg.components.length == 0) {
          result = null;
        } else {
          if (msg.components.length <= comp1) {
            result = null;
          } else {
            result = msg.components[comp1].components.length
          }
        }
        break;

      case 51:
        if (msg.components.length == 0) {
          result = null;
        } else {
          if (msg.components.length <= comp1) {
            result = null;
          } else {
            result = msg.components[comp1].components[comp2]
          }
        }
        break;

      case 52:
        if (msg.components.length == 0) {
          result = null;
        } else {
          if (msg.components.length <= comp1) {
            result = null;
          } else {
            result = msg.components[comp1].components[comp2].customId
          }
        }
        break;

      case 53:
        if (msg.components.length == 0) {
          result = null;
        } else {
          if (msg.components.length <= comp1) {
            result = null;
          } else {
            result = msg.components[comp1].components[comp2].type
          }
        }
        break;

      case 54:
        if (msg.components.length == 0) {
          result = null;
        } else {
          if (msg.components.length <= comp1) {
            result = null;
          } else {
            result = msg.components[comp1].components[comp2].label
          }
        }
        break;

      case 55:
        if (msg.components.length == 0) {
          result = null;
        } else {
          if (msg.components.length <= comp1) {
            result = null;
          } else {
            result = msg.components[comp1].components[comp2].style
          }
        }
        break;

      case 56:
        if (msg.components.length == 0) {
          result = null;
        } else {
          if (msg.components.length <= comp1) {
            result = null;
          } else {
            result = msg.components[comp1].components[comp2].url
          }
        }
        break;

      case 57:
        if (msg.components.length == 0) {
          result = null;
        } else {
          if (msg.components.length <= comp1) {
            result = null;
          } else {
            result = msg.components[comp1].components[comp2].disabled
          }
        }
        break;

      case 58:
        if (msg.components.length == 0) {
          result = null;
        } else {
          if (msg.components.length <= comp1) {
            result = null;
          } else {
            result = msg.components[comp1].components[comp2].placeholder
          }
        }
        break;

      case 59:
        if (msg.components.length == 0) {
          result = null;
        } else {
          if (msg.components.length <= comp1) {
            result = null;
          } else {
            result = msg.components[comp1].components[comp2].minValues
          }
        }
        break;

      case 60:
        if (msg.components.length == 0) {
          result = null;
        } else {
          if (msg.components.length <= comp1) {
            result = null;
          } else {
            result = msg.components[comp1].components[comp2].maxValues
          }
        }
        break;

      case 61:
        if (msg.components.length == 0) {
          result = null;
        } else {
          if (msg.components.length <= comp1) {
            result = null;
          } else {
            result = msg.components[comp1].components[comp2].options
          }
        }
        break;
      case 62:
        result = msg.attachments.map((t) => t.attachment);
        break;
      case 63:
        result = msg.type === 'REPLY' && msg.reference?.messageId !== undefined;
        break;
      case 64:
        result = msg.reference;
        break;
      case 65:
        result = msg.reference?.messageId;
        break;
      case 66:
        result = msg.reference?.guildId;
        break;
      case 67:
        result = msg.reference?.channelId;
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