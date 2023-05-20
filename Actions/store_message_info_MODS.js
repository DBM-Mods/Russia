module.exports = {
  name: "Store Message Info MOD",
  section: "Messaging",
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]<br>[Tempest - 321400509326032897]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {
    const info = [
      "объект сообщения",
      "Идентификатор сообщения",
      "Текст сообщения",
      "Автор сообщения",
      "Канал сообщения",
      "Метка времени сообщения",
      "Является ли сообщение фиксированным?",
      "Является ли сообщение TTS?",
      "Список вложений сообщения [объект]",
      "Редактирование сообщения",
      "Идентификатор сервера сообщения",
      "",
      "Количество реакций на сообщение",
      "Список упомянутых пользователей",
      "Count of Users Mentioned",
      "URL сообщения",
      "Дата создания сообщения",
      "Длина содержимого сообщения",
      "Количество вложений в сообщении",
      "Сервер сообщения",
      "Тип сообщения",
      "Идентификатор веб-крючка сообщения",
      "Объект встраивания сообщения",
      "embed title", "embed description", "embed object", "embed title",
      "embed description", "embed url", "embed title", "embed description",
      "embed url",
      "embed color",
      "Timestamp of the embed",
      "Thumbnail from the embed",
      "Изображение из вставки",
      "Имя автора в embed",
      "Иконка URL автора в embed",
      "URL автора в embed", "URL автора в embed",
      "Текст нижнего колонтитула из embed",
      "Иконка URL футера из embed", "URL футера из embed",
      "имя поля embed", "имя поля embed",
      "Значение поля embed", "Значение поля embed", "embed field inline",
      "Inline from embed field",
      "Количество встраиваемых полей",
      "Количество полей",
      "Объект взаимодействия",
      "ID взаимодействия", "ID взаимодействия",
      "Имя взаимодействия", "Имя взаимодействия",
      "Тип взаимодействия",
      "Идентификатор автора взаимодействия",
      "Имя автора взаимодействия",
      "Дискриминатор автора взаимодействия",
      "Метка автора взаимодействия",
      "Аватар автора взаимодействия",
      "Всего строк",
      "Всего компонентов в строке",
      "Объект компонента",
      "ID компонента",
      "Тип компонента",
      "Метка компонента",
      "Стиль компонента",
      "URL-адрес компонента",
      "Компонент включен/выключен",
      "Component Placeholder",
      "Минимальные значения меню",
      "Максимальные значения меню",
      "Параметры меню",
      "Список вложений в сообщении [URL]",
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
        dataType = "Text";
        break
      case 3:
        dataType = "Member";
        break
      case 4:
        dataType = "Channel";
        break;
      case 5:
        dataType = "Text";
        break;
      case 6:
        dataType = "True/False";
        break;
      case 7:
        dataType = "True/False";
        break;
      case 8:
        dataType = "Data";
      case 9:
        dataType = "List"; 
        break;
      case 12:
        dataType = "Number";
        break
      case 13:
        dataType = "List";
        break;
      case 14:
        dataType = "Number";
        break
      case 15:
        dataType = "URL";
        break
      case 16:
        dataType = "Data";
        break
      case 17:
        dataType = "Number";
        break;
      case 18:
        dataType = "Number";
        break;
      case 19:
        dataType = "Сервер";
        break;
      case 20:
        dataType = "Text";
        break
      case 21:
        dataType = "ID";
        break;
      case 22:
        dataType = "Embed Message";
        break;
      case 23:
        dataType = "Message Embed";
        break;
      case 24:
        dataType = "Message Embed";
        break;
      case 25:
        dataType = "Message Embed";
        break;
      case 26:
        dataType = "Message Embed";
        break;
      case 27:
        dataType = "Message Embed";
        break;
      case 28:
        dataType = "Message Embed";
        break;
      case 29:
        dataType = "Message Embed";
        break;
      case 30:
        dataType = "Message Embed";
        break;
      case 31:
        dataType = "Message Embed";
        break;
      case 32:
        dataType = "Message Embed";
        break;
      case 33:
        dataType = "Message Embed";
        break;
      case 34:
        dataType = "Message Embed";
        break;
      case 35:
        dataType = "Message Embed";
        break;
      case 36:
        dataType = "Message Embed";
        break;
      case 37:
        dataType = "Message Embed";
        break;
      case 38:
        dataType = "Число";
        break;
      case 39:
        dataType = "Number";
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
        dataType = "Interaction User";
        break;
      case 46:
        dataType = "Interaction User";
        break;
      case 47:
        dataType = "Interaction User";
        break;
      case 48:
        dataType = "Interaction User";
        break;
      case 49:
        dataType = "Компонент";
        break;
      case 50:
        dataType = "Component";
        break;
      case 51:
        dataType = "Component";
        break;
      case 52:
        dataType = "Component";
        break;
      case 53:
        dataType = "Component";
        break;
      case 54:
        dataType = "Component";
        break;
      case 55:
        dataType = "Component";
        break;
      case 56:
        dataType = "Component";
        break;
      case 57:
        dataType = "Component";
        break;
      case 58:
        dataType = "Component";
        break;
      case 59:
        dataType = "Component";
        break;
      case 60:
        dataType = "Component";
        break;
      case 61:
        dataType = "Component";
        break;
    }
    return [data.varName2, dataType];
  },

  fields: ["message", "varName", "info", "embednumero", "field", "comp1", "comp2", "storage", "varName2", "description", "descriptionx", "descriptioncolor"],


  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновление</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 1.8</div>

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

<message-input dropdownLabel="Сообщение" selectId="message" variableContainerId="varNameContainer" variableInputId="varName"></message-input>

<br><br><br>

<div style="padding-top: 8px;">
	<span class="dbminputlabel">Информация</span><br>
	<select id="info" class="round2" onchange="glob.onComparisonChanged(this)">
  <option value="0" selected>Объект сообщения</option>
  <option value="1">Идентификатор сообщения</option>
  <option value="2">Текст сообщения</option>
  <option value="3">Автор сообщения</option>
  <option value="4">Канал сообщения</option>
  <option value="5">Временная метка сообщения</option>
  <option value="6">Подтверждено ли сообщение?</option>
  <option value="7">Является ли сообщение TTS? </option>
  <option value="8">Список вложений сообщения [объект]</option>
  <option value="62">Список вложений сообщения [URL]</option>
  <option value="9">Редактирование сообщения</option>
  <option value="12">Количество реакций на сообщение</option>
  <option value="13">Список пользователей, упомянутых в сообщении</option>
  <option value="14">Количество пользователей, упомянутых в сообщении</option>
  <option value="15">URL сообщения</option>
  <option value="16">Дата создания сообщения</option>
  <option value="17">Длина содержимого сообщения</option>
  <option value="18">Количество вложений в сообщении</option>
  <option value="10">Идентификатор сервера сообщений</option>
  <option value="19">Сервер сообщений</option>
  <option value="20">Тип сообщения</option>
  <option value="21">Идентификатор вебхука сообщения</option>
  <optgroup label="Информация о взаимодействии">
  <option value="40">Объект взаимодействия</options>
  <option value="41">ID взаимодействия</options>
  <option value="42">Имя взаимодействия</options>
  <option value="43">Тип взаимодействия</options>
  <option value="44">Идентификатор автора взаимодействия</options>
  <option value="45">Имя автора взаимодействия</options>
  <option value="46">Идентификатор автора взаимодействия</options
  <option value="47">Тэг автора взаимодействия</options>
  <option value="48">Аватар автора взаимодействия</options>
  <optgroup label="Встроенная информация">
  <option value="22">Объект встраивания сообщения</option>
  <option value="38">Количество вкраплений</options>
  <option value="39">Количество полей</option>
  <option value="23">Заголовок</options>
  <option value="24">Описание</options>
  <option value="25">Url</options>
  <option value="26">Цвет</options>
  <option value="27">Временная метка</options>
  <option value="28">Эскиз</options>
  <option value="29">Изображение</options>
  <option value="30">Имя автора</options
  <option value="31">Иконка URL-адреса автора</options>
  <option value="32">Авторский URL</options>
  <option value="33">Текст футера</options>
  <option value="34">Урл иконки футера</options>
  <option value="35">Имя поля</options>
  <option value="36">Значение поля</options>
  <option value="37">FieldInline</options>
  <optgroup label="Информация о компоненте">
  <option value="49">Общее количество строк</options>
  <option value="50">Общее количество компонентов в ряду</options>
  <option value="51">Объект компонента</options
  <option value="52">Идентификатор компонента</options>
  <option value="53">Тип компонента</options>
  <option value="54">Маркировка компонента</options
  <option value="55">Стиль компонента</options
  <option value="56">URL компонента</options>
  <option value="57">Компонент включен/выключен</options>
  <option value="58">Пользователь компонента</options>
  <option value="59">Минимальные значения меню</options>
  <option value="60">Максимальные значения меню</options>
  <option value="61">Опции меню</options>
    </optgroup>
	</select>
  <input type="text" id="filtrodoxinxyla" class="round" placeholder="Параметры фильтра...">
</div><br><div style="width: 100%;display:none" id="containerxin2">
<table style="width:100%"><tr><td style="padding:5px">
<span class="dbminputlabel">Номер встраивания</span><br>
<input id="embednumero" value="0" class="round" type="text">
<br></td><td style="padding:5px">
<div style="width: 100%;" id="containerxin">
<span class="dbminputlabel">Номер поля</span><br>
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
</td></tr></table></div>

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
      if (event.value == 62) {
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
          result = msg.embeds[embednumero].thumbnail.url;
        }
        break;
      case 29:
        if (msg.embeds.length <= embednumero) {
          result = "";
        } else {
          result = msg.embeds[embednumero].image.url;
        }
        break;
      case 30:
        if (msg.embeds.length <= embednumero) {
          result = "";
        } else {
          result = msg.embeds[embednumero].author.name;
        }
        break;
      case 31:
        if (msg.embeds.length <= embednumero) {
          result = "";
        } else {
          result = msg.embeds[embednumero].author.iconURL;
        }
        break;
      case 32:
        if (msg.embeds.length <= embednumero) {
          result = "";
        } else {
          result = msg.embeds[embednumero].author.url;
        }
        break;
      case 33:
        if (msg.embeds.length <= embednumero) {
          result = "";
        } else {
          result = msg.embeds[embednumero].footer.text;
        }
        break;
      case 34:
        if (msg.embeds.length <= embednumero) {
          result = "";
        } else {
          result = msg.embeds[embednumero].footer.iconURL;
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
    }

    if (result !== undefined) {
      const storage = parseInt(data.storage, 10);
      const varName2 = this.evalMessage(data.varName2, cache);
      this.storeValue(result, storage, varName2, cache);
    }
    this.callNextAction(cache);
  },

  mod() {},
};
