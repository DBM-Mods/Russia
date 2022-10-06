module.exports = {
  //---------------------------------------------------------------------
  // Action Name
  //
  // This is the name of the action displayed in the editor.
  //---------------------------------------------------------------------

  name: "Send Message",

  //---------------------------------------------------------------------
  // Action Section
  //
  // This is the section the action will fall into.
  //---------------------------------------------------------------------

  section: "Messaging",

  //---------------------------------------------------------------------
  // Action Subtitle
  //
  // This function generates the subtitle displayed next to the name.
  //---------------------------------------------------------------------

  subtitle(data, presets) {
    let text = "";
    if (data.message) {
      text = `"${data.message.replace(/[\n\r]+/, " ↲ ")}"`;
    } else if (data.embeds?.length > 0) {
      text = `${data.embeds.length} Эмбедов`;
    } else if (data.attachments?.length > 0) {
      text = `${data.attachments.length} Файловый менеджер`;
    } else if (data.buttons?.length > 0 || data.selectMenus?.length > 0) {
      text = `${data.buttons.length} Кнопки и ${data.selectMenus.length} Меню выбора`;
    } else if (data.editMessage && data.editMessage !== "0") {
      if (data.editMessage === "intUpdate") {
        text = "Параметры сообщения - Изменить взаимодействие"
      } else {
        text = `Опции сообщения - ${presets.getVariableText(data.editMessage, data.editMessageVarName)}`;
      }
    } else {
      text = `Ничего (Может привести к ошибке)`;
    }
    if (data.dontSend) {
      return `Хранить данные: ${text}`;
    }
    if (data.descriptioncolor == undefined) {
      data.descriptioncolor = "#ffffff"
    }
    if (data.storagewebhook > "0") {
      return `Отправка через Webhook: ${data.varwebhook}`;
    }
    return data.description
      ? `<font color="${data.descriptioncolor}">${data.description}</font>`
      : `<font color="${data.descriptioncolor}">${presets.getSendReplyTargetText(data.channel, data.varName)}: ${text}</font>`
  },

  //---------------------------------------------------------------------
  // Action Storage Function
  //
  // Stores the relevant variable info for the editor.
  //---------------------------------------------------------------------

  variableStorage(data, varType) {
    const type = parseInt(data.storage, 10);
    if (type !== varType) return;
    return [data.varName2, data.dontSend ? "Message Options" : "Message"];
  },

  //---------------------------------------------------------------------
  // Action Meta Data
  //
  // Helps check for updates and provides info if a custom mod.
  // If this is a third-party mod, please set "author" and "authorUrl".
  //
  // It's highly recommended "preciseCheck" is set to false for third-party mods.
  // This will make it so the patch version (0.0.X) is not checked.
  //---------------------------------------------------------------------

  meta: {
    version: "2.1.6",
    preciseCheck: true,
    author: "[Modificado por XinXyla - 172782058396057602]<br>[Tempest - 321400509326032897]",
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  //---------------------------------------------------------------------
  // Action Fields
  //
  // These are the fields for the action. These fields are customized
  // by creating elements with corresponding IDs in the HTML. These
  // are also the names of the fields stored in the action's JSON data.
  //---------------------------------------------------------------------

  fields: [
    "channel",
    "varName",
    "message",
    "buttons",
    "selectMenus",
    "attachments",
    "embeds",
    "reply",
    "ephemeral",
    "tts",
    "overwrite",
    "dontSend",
    "editMessage",
    "editMessageVarName",
    "storage",
    "varName2",
    "iffalse",
    "iffalseVal",
    "descriptioncolor",
    "description",
    "storagewebhook",
    "varwebhook",
    "webhookname",
    "webhookavatar",
    "messageoff",
    "mentions",
  ],

  //---------------------------------------------------------------------
  // Command HTML
  //
  // This function returns a string containing the HTML used for
  // editing actions.
  //
  // The "isEvent" parameter will be true if this action is being used
  // for an event. Due to their nature, events lack certain information,
  // so edit the HTML to reflect this.
  //---------------------------------------------------------------------

  html(isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 2.4</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>

    <div style="width:100%" id="xin2"><send-reply-target-input dropdownLabel="Отправить" selectId="channel" variableInputId="varName"></send-reply-target-input>
    <br><br><br>
</div><div id="xin3"><div style="float: left; width: 35%">
<span class="dbminputlabel">Отправить</span><br>
<select class="round">
<option value="0" selected>Webhook</option>
</select>
</div>
<br><br><br>
</div>
<div style="width:100%">
<tab-system style="margin-top: 20px;">


  <tab label="Текст" icon="align left">
    <div style="padding: 8px;">
      <textarea id="message" class="dbm_monospace" rows="9" placeholder="Введите сообщение здесь..." style="height: calc(100vh - 309px); white-space: nowrap;"></textarea>
    </div>
  </tab>


  <tab label="Эмбеды" icon="book image">
    <div style="padding: 8px;">

      <dialog-list id="embeds" fields='["title", "url", "color", "colorrandom", "timestamp", "timestampper", "imageUrl", "thumbUrl", "description", "fields", "author", "authorUrl", "authorIcon", "footerText", "footerIconUrl"]' dialogTitle="Embed Info" dialogWidth="540" dialogHeight="460" listLabel="Эмбеды" listStyle="height: calc(100vh - 350px);" itemName="Embed" itemCols="1" itemHeight="30px;" itemTextFunction="data.title + ' - ' + data.description" itemStyle="text-align: left; line-height: 30px;">
        <div style="padding: 16px 16px 0px 16px;">

          <tab-system>

            <tab label="Главное" icon="certificate">
              <div style="padding: 8px">
                <div style="float: left; width: calc(50% - 12px);">
                  <span class="dbminputlabel">Заголовок</span><br>
                  <input id="title" class="round" type="text">

                  <br>

                  <span class="dbminputlabel">Цвет (Только HEX)</span><div style="float:right;margin-top:-5px"><dbm-checkbox id="colorrandom" label="Случайный"></dbm-checkbox></div><br>
                  <table style="width:100%"><tr><td><input id="color" name="actionxinxyla" class="round" type="text" placeholder="Оставьте пустым по умолчанию..."><td>
                  <td style="width:40px;text-align:center;padding:4px"><a id="btr1" style="cursor:pointer" onclick="(function(){
                     document.getElementById('color').type = 'color'
                    document.getElementById('btr1').style.display = 'none';
                    document.getElementById('btr2').style.display = 'block';
                    })()"><button class="tiny compact ui icon button">Цвет</button></a><a id="btr2" style="cursor:pointer;display:none" onclick="(function(){
                      document.getElementById('color').type = 'text';
                      document.getElementById('btr1').style.display = 'block';
                      document.getElementById('btr2').style.display = 'none';
                      })()"><button class="tiny compact ui icon button">Текст</button></a><td></tr></table>
                </div>
                
                

                <div style="float: right; width: calc(50% - 12px);">
                  <span class="dbminputlabel">URL</span><br>
                  <input id="url" class="round" type="text" placeholder="Оставьте пустым, если нет...">

                  <br>

                  <span class="dbminputlabel">Использовать отметку времени</span><div style="float:right;margin-top:-5px"><dbm-checkbox id="timestamp" label="Sim" checked></dbm-checkbox></div><br>
                  <input id="timestampper" class="round" type="text" placeholder="Оставьте пустым для текушей">
                </div>

                <br><br><br><br><br><br><br>

                <hr class="subtlebar">

                <br>

                <span class="dbminputlabel">URL-адрес изображения/имя вложения</span><br>
                <input id="imageUrl" class="round" type="text" placeholder="Оставьте пустым, если нет, image.png или ссылка http">

                <br>

                <span class="dbminputlabel">URL миниатюры/имя вложения</span><br>
                <input id="thumbUrl" class="round" type="text" placeholder="Оставьте пустым, если нет, image.png или ссылка http">
              </div>
            </tab>

            <tab label="Описание" icon="file image">
              <div style="padding: 8px">
                <textarea id="description" class="dbm_monospace" rows="10" placeholder="Введите описание здесь..." style="height: calc(100vh - 149px); white-space: nowrap; resize: none;"></textarea>
                </div>
            </tab>

            <tab label="Поля" icon="list">
              <div style="padding: 8px">
                <dialog-list id="fields" fields='["name", "value", "inline", "val1", "val2", "comparar", "formula"]' dialogTitle="Field Info" dialogWidth="540" dialogHeight="500" listLabel="Fields" listStyle="height: calc(100vh - 190px);" itemName="Field" itemCols="1" itemHeight="30px;" itemTextFunction="data.name + '<br>' + data.value" itemStyle="text-align: left; line-height: 30px;">
                                  

                  <div style="padding: 16px;background:rgba(0,0,0,0.3)">

                  <span class="dbminputlabel">Имя поля</span><br>
                  <select id="formula" class="round">
                  <option value="0" selected>Всегда отображать поле / игнорировать Действие ниже</option>
                  <option value="1">Поле отображения только в том случае, если Действие имеет значение false</option>
                  <option value="2">Поле отображения, только если Действие сушествует</option>
                </select>

                <br>

                  <table style="width:100%"><tr><td>
                    <span class="dbminputlabel">Значение А</span><br>
                    <input id="val1" class="round" type="text">
                    </td>
                    <td>
                    <span class="dbminputlabel">Действия</span><br>
                    <select id="comparar" class="round">
                    <option value="0">Значение А — существует</option>
                    <option value="1" выбрано > равно</option>
                    <option value="2">Точно так же</option>
                    <option value="3">Меньше, чем</option>
                    <option value="13">Меньше или равно</option>
                    <option value="4">Тогда больше</option>
                    <option value="12">Больше или равно</option>
                    <option value="5">Включает?</option>
                    <option value="6">Соответствия регулярным выражениям</option>
                    <option value="14">Полные совпадения с регулярными выражениями</option>
                    <option value="7">Длина больше, чем</option>
                    <option value="8">Длина меньше, чем</option>
                    <option value="9">Длина равна</option>
                    <option value="10">Начинается с</option>
                    <option value="11">Заканчивается на</option>
                    <option value="16">Имеет ли значение A акценты?</option>
                    <option value="17">Включает слова  ["a" , "b" , "c"]</option>
                    <option value="18">Это как слова  ["a" , "b" , "c"]</option>
                    <option value="19">Значение А является четным числом?</option>
                    <option value="20">Значение A является нечетным числом?</option>
                    <option value="21">Значение А является числом?</option>
                    <option value="24">Является ли значение А текстом?</option>
                    <option value="23">Значение A является URL-адресом изображения?</option>
                    <option value="25">Значение А является URL?</option>
                  </select>
                   </td>
                    <td>
                    <span class="dbminputlabel">Значение Б</span><br>
                    <input id="val2" class="round" type="text">
                    </td>
                    </tr></table>


                    </div>
                    <div style="padding: 16px;">
              

                    <div style="float: left; width: calc(50% - 12px);">
                      <span class="dbminputlabel">Имя поля</span><br>
                      <input id="name" class="round" type="text">
                    </div>
                    
                    <div style="float: right; width: calc(50% - 12px);">
                      <span class="dbminputlabel">В соответствии?</span><br>
                      <select id="inline" class="round">
                        <option value="true">Да</option>
                        <option value="false" selected>Нет</option>
                      </select>
                    </div>

                    <br><br><br>

                    <span class="dbminputlabel">Значение поля</span><br>
                    <textarea id="value" class="dbm_monospace" rows="7" placeholder="Введите текст поля здесь..." style="height: calc(100vh - 320px); white-space: nowrap;"></textarea>

                  </div>
                </dialog-list>
              </div>
            </tab>

            <tab label="Autor" icon="user circle">
              <div style="padding: 8px">
                <span class="dbminputlabel">Текст автора</span>
                <input id="author" class="round" type="text" placeholder="Оставьте пустым, если нет....">

                <br>

                <span class="dbminputlabel">URL-адрес автора</span><br>
                <input id="authorUrl" class="round" type="text" placeholder="Оставьте пустым, если нет...">

                <br>

                <span class="dbminputlabel">URL значка автора / имя вложения</span><br>
                <input id="authorIcon" class="round" type="text" placeholder="Оставьте пустым, если нет...">
              </div>
            </tab>

            <tab label="Footer" icon="map outline">
              <div style="padding: 8px;">
                <span class="dbminputlabel">URL значка нижнего поля (Footer URL) / имя вложения</span><br>
                <input id="footerIconUrl" class="round" type="text" placeholder="Оставьте пустым, если нет...">

                <br>

                <span class="dbminputlabel">Текст нижнего поля (Footer Text)</span><br>
                <textarea id="footerText" class="dbm_monospace" rows="10" placeholder="Оставьте пустым, если нет..." style="height: calc(100vh - 234px); white-space: nowrap; resize: none;"></textarea>
              </div>
            </tab>

          </tab-system>

        </div>
      </dialog-list>

    </div>
  </tab>

  <tab label="Кнопка" icon="clone">
  <div style="padding: 16px;text-align:center"id="xin4n">Webhook не поддерживает кнопки</div>
    <div style="padding: 8px;" id="xin4">

      <dialog-list id="buttons" fields='["name", "typeper", "type", "id", "row", "url", "emoji", "disabled", "mode", "time", "actions"]' dialogTitle="Button Info" dialogWidth="600" dialogHeight="700" listLabel="Кнопки" listStyle="height: calc(100vh - 350px);" itemName="Button" itemCols="4" itemHeight="40px;" itemTextFunction="data.name" itemStyle="text-align: center; line-height: 40px;">
        <div style="padding: 16px;">
          <div style="width: calc(50%); float: left;">
            <span class="dbminputlabel">Название</span>
            <input id="name" class="round" type="text">

            <br>

          <table style="width:100%"><tr><td id="bxin1">
            <span class="dbminputlabel">Тип / Меню</span><div style="float:right;margin-top:-5px"><a style="cursor:pointer" onclick="(function(){
              document.getElementById('bxin1').style.display = 'none';
              document.getElementById('bxin2').style.display = 'block';
             })()"><button class="tiny compact ui icon button">Текст</button></a></div><br>
            <select id="type" class="round">
              <option value="PRIMARY" selected> ОСНОВНОЙ (Синий/Размытый)</option>
              <option value="SECONDARY">ВТОРИЧНЫЙ (серый)</option>
              <option value="SUCCESS">УСПЕХ (зеленый)</option>
              <option value="DANGER">ОПАСНО (красный)</option>
              <option value="LINK">ССЫЛКА (серый)</option>
            </select></td><td id="bxin2" style="display:none"><span class="dbminputlabel">Тип/переменная</span><div style="float:right;margin-top:-5px"><a style="cursor:pointer" onclick="(function(){
              document.getElementById('bxin2').style.display = 'none';
              document.getElementById('bxin1').style.display = 'block';
               })()"><button class="tiny compact ui icon button">Меню</button></a></div><br><input placeholder="Оставьте пустым, чтобы использовать меню" id="typeper" class="round" type="text"></td></tr></table>


            <br>

            <span class="dbminputlabel">URL-ссылка</span>
            <input id="url" placeholder="Оставьте пустым, если нет..." class="round" type="text">

            <br>

            <span class="dbminputlabel">
            Режим дейсвия
              <help-icon type="ACTION_RESPONSE_MODE"></help-icon>
            </span><br>
            <select id="mode" class="round">
            <option value="PERSONAL">Один раз только для командного пользователя</option>
            <option value="PUBLIC">Один раз любой может использовать</option>
            <option value="MULTIPERSONAL">Многоразовая, только для командного пользователя</option>
            <option value="MULTI" selected>Многоразовая, каждый может использовать</option>
            <option value="PERSISTENT">Бесконечная</option>
            </select>
          </div>
          <div style="width: calc(50% - 12px); float: right;">
            <span class="dbminputlabel">ID кнопки</span>
            <input id="id" placeholder="Оставьте пустым для автоматического создания..." class="round" type="text">

            <br>

            <span class="dbminputlabel">Линия кнопки (1 - 5)</span>
            <input id="row" placeholder="Оставьте пустым по умолчанию..." class="round" type="text">

            <br>

            <span class="dbminputlabel">Эмоджи</span>
            <input id="emoji" placeholder="Оставьте пустым, если нет..." class="round" type="text">

            <br>

            <span class="dbminputlabel">Время работы (миллисекунды)</span>
            <input id="time" placeholder="60000" class="round" type="text">
          </div>

          <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

          <action-list-input mode="BUTTON" id="actions" height="calc(100vh - 460px)"></action-list-input>

        </div>
      </dialog-list>

    </div>
  </tab>


  <tab label="Меню" icon="list alternate">
  <div style="padding: 16px;text-align:center"id="xin5n">Webhook не поддерживает меню</div>
    <div style="padding: 8px;" id="xin5">

      <dialog-list id="selectMenus" fields='["placeholder", "id", "tempVarName", "row", "min", "max", "mode", "time", "options", "actions"]' dialogTitle="Select Menu Info" dialogWidth="800" dialogHeight="700" listLabel="Меню" listStyle="height: calc(100vh - 350px);" itemName="Select Menu" itemCols="1" itemHeight="40px;" itemTextFunction="data.placeholder + '<br>' + data.options" itemStyle="text-align: left; line-height: 40px;">
        <div style="padding: 16px;">
          <div style="width: calc(33% - 16px); float: left; margin-right: 16px;">
            <span class="dbminputlabel">Название Меню</span>
            <input id="placeholder" class="round" type="text">

            <br>

            <span class="dbminputlabel">Название временной переменной</span>
            <input id="tempVarName" placeholder="Сохраняет выбранное значение..." class="round" type="text">

            <br>

            <span class="dbminputlabel">Минимальное количество выбора</span>
            <input id="min" class="round" type="text" value="1">

            <br>

            <span class="dbminputlabel">
            Режим действия
              <help-icon type="ACTION_RESPONSE_MODE"></help-icon>
            </span><br>
            <select id="mode" class="round">
            <option value="PERSONAL">Один раз только для командного пользователя</option>
            <option value="PUBLIC">Один раз любой может использовать</option>
            <option value="MULTIPERSONAL">Многоразовая, только для командного пользователя</option>
            <option value="MULTI" selected>Многоразовая, каждый может использовать</option>
            <option value="PERSISTENT">Бесконечная</option>
            </select>
          </div>
          <div style="width: calc(33% - 16px); float: left; margin-right: 16px;">
            <span class="dbminputlabel">ID меню</span>
            <input id="id" placeholder="Оставьте пустым для автоматического создания..." class="round" type="text">

            <br>

            <span class="dbminputlabel">Линия действия (1 - 5)</span>
            <input id="row" placeholder="Оставьте пустым по умолчанию..." class="round" type="text">

            <br>

            <span class="dbminputlabel">Макс количество выбора</span>
            <input id="max" class="round" type="text" value="1">

            <br>

            <span class="dbminputlabel">Время ожидания (миллисекунды)</span>
            <input id="time" placeholder="60000" class="round" type="text">
          </div>
          <div style="width: calc(34% - 8px); height: 300px; float: left; margin-left: 8px;">

            <dialog-list id="options" fields='["label", "description", "value", "emoji", "default", "val1", "val2", "comparar", "formula"]' dialogTitle="Select Menu Option Info" dialogWidth="460" dialogHeight="570" listLabel="Options" listStyle="height: 210px;" itemName="Option" itemCols="1" itemHeight="20px;" itemTextFunction="'[ ' + (data.formula || 'Отображать') + ' ] ' + data.label" itemStyle="text-align: left; line-height: 20px;">
            <div style="padding: 16px;background:rgba(0,0,0,0.3)">
                 <span class="dbminputlabel">Отображать</span><br>
                 <select id="formula" class="round">
                 <option value="Отображать" selected>Опция Всегда отображать / Игнорировать действие ниже</option>
                 <option value="Нету">Опция отображения только в том случае, если действие имеет значение false</option>
                 <option value="Сушествует">Опция отображения, только если действие сушествует</option>
               </select>
               <br>
                  <table style="width:100%"><tr><td>
                    <span class="dbminputlabel">Значение A</span><br>
                    <input id="val1" class="round" type="text">
                    </td>
                    <td>
                    <span class="dbminputlabel">Действия</span><br>
                    <select id="comparar" class="round">
                    <option value="0">Значение A-Существует</option>
                    <option value="1" Выбрано > равно</option>
                    <option value="2">Точно так же</option>
                    <option value="3">Меньше, чем</option>
                    <option value="13">Меньше или равно</option>
                    <option value="4">Тогда больше</option>
                    <option value="12">Больше или равно</option>
                    <option value="5">Включает</option>
                    <option value="6">Соответствия регулярным выражениям</option>
                    <option value="14">Полные совпадения с регулярными выражениями</option>
                    <option value="7">Длина больше, чем</option>
                    <option value="8">Длина меньше, чем</option>
                    <option value="9">Длина равна</option>
                    <option value="10">Начинается с</option>
                    <option value="11">Заканчивается</option>
                    <option value="16">Имеет ли значение A акценты?</option>
                    <option value="17">Включает слова  ["a" , "b" , "c"]</option>
                    <option value="18">Это как слова  ["a" , "b" , "c"]</option>
                    <option value="19">Значение А является четным числом?</option>
                    <option value="20">Значение A является нечетным числом?</option>
                    <option value="21">Значение А является числом?</option>
                    <option value="24">Является ли значение А текстом?</option>
                    <option value="23">Значение A является URL-адресом изображения?</option>
                    <option value="25">Значение А является URL?</option>
                  </select>
                   </td>
                    <td>
                    <span class="dbminputlabel">Значение Б</span><br>
                    <input id="val2" class="round" type="text">
                    </td>
                    </tr></table>

        </div>
        <div style="padding: 16px">
                <span class="dbminputlabel">Название</span>
                <input id="label" class="round" type="text">

                <br>

                <span class="dbminputlabel">Описание</span>
                <input id="description" class="round" type="text">

                <br>

                <span class="dbminputlabel">Переменая</span>
                <input id="value" placeholder="Текст, переданный в переменную temp..." class="round" type="text">

                <br>

                <span class="dbminputlabel">Эмоджи</span>
                <input id="emoji" placeholder="Оставьте пустым, если нет..." class="round" type="text">

                <br>

                <span class="dbminputlabel">Выбранный шаблон</span><br>
                <select id="default" class="round">
                  <option value="true">Да</option>
                  <option value="false" selected>Нет</option>
                </select>
              </div>
            </dialog-list>

          </div>

          <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

          <action-list-input mode="SELECT" id="actions" height="calc(100vh - 460px)">
            <script class="setupTempVars">
              const elem = document.getElementById("tempVarName");
              if(elem?.value) {
                tempVars.push([elem.value, "Text"]);
              }
            </script>
          </action-list-input>

        </div>
      </dialog-list>

    </div>
  </tab>


  <tab label="Файлы" icon="file image">
    <div style="padding: 8px;">

      <dialog-list id="attachments" fields='["tipo", "url", "canvasvar", "canvasnome", "compress", "name", "spoiler"]' dialogTitle="Информация о вложении" dialogWidth="400" dialogHeight="480" listLabel="Файлы" listStyle="height: calc(100vh - 350px);" itemName="File" itemCols="1" itemHeight="30px;" itemTextFunction="glob.formatItem(data)" itemStyle="text-align: left; line-height: 30px;">
        <div style="padding: 16px;" onmouseover="(function(){

          var aselect = document.getElementById('tipo');
            var avalue = aselect.options[aselect.selectedIndex].value
        
          if (avalue == 0) {
              document.getElementById('xinxyla1').style.display = 'none';
              document.getElementById('xinxyla2').style.display = 'block';
              document.getElementById('xinxyla3').style.display = 'block';
        }
        if (avalue == 1) {
          document.getElementById('xinxyla2').style.display = 'none';
          document.getElementById('xinxyla1').style.display = 'block';
          document.getElementById('xinxyla3').style.display = 'block';
    }   
    
    if (avalue == 2) {
      document.getElementById('xinxyla2').style.display = 'none';
      document.getElementById('xinxyla1').style.display = 'block';
      document.getElementById('xinxyla3').style.display = 'none';
    } 

        
        })()">

        <span class="dbminputlabel">Тип вложения</span>
        <select id="tipo" class="round" onchange="(function(){

          var aselect = document.getElementById('tipo');
            var avalue = aselect.options[aselect.selectedIndex].value
        
            if (avalue == 0) {
              document.getElementById('xinxyla1').style.display = 'none';
              document.getElementById('xinxyla2').style.display = 'block';
              document.getElementById('xinxyla3').style.display = 'block';
        }
        if (avalue == 1) {
          document.getElementById('xinxyla2').style.display = 'none';
          document.getElementById('xinxyla1').style.display = 'block';
          document.getElementById('xinxyla3').style.display = 'block';
    }   
    
    if (avalue == 2) {
      document.getElementById('xinxyla2').style.display = 'none';
      document.getElementById('xinxyla1').style.display = 'block';
      document.getElementById('xinxyla3').style.display = 'none';
    }      
        
        })()">>
          <option value="0">Локальный/веб-URL вложения</option>
          <option value="1">Canvas</option>
          <option value="2">Изображения DBM</option>
        </select>
        <br><div id="xinxyla2">
          <span class="dbminputlabel">Локальный/веб-URL вложения</span>
          <input id="url" class="round" type="text" value="resources/">

          <br></div>
          <div id="xinxyla1">
          <span class="dbminputlabel">Тип переменной</span><br>
    <select id="canvasvar" class="round">
      ${data.variables[1]}
    </select>
<br>
          <span class="dbminputlabel">Название переменной</span>
          <input id="canvasnome" class="round" type="text" list="variableList">
<br>
<div id="xinxyla3">
          <span class="dbminputlabel">Уровень сжатия</span><br>
          <select id="compress" class="round">
            <option value="0">1</option>
            <option value="1">2</option>
            <option value="2">3</option>
            <option value="3">4</option>
            <option value="4">5</option>
            <option value="5">6</option>
            <option value="6">7</option>
            <option value="7">8</option>
            <option value="8">9</option>
            <option value="9" selected>10</option>
          </select>
          <br></div></div>

          <span class="dbminputlabel">Название вложения</span>
          <input id="name" class="round" type="text" placeholder="Оставьте пустым по умолчанию...">

          <br>

          <div style="text-align: center; padding-top: 4px;">
            <dbm-checkbox id="spoiler" label="Сделать под сполером"></dbm-checkbox>
          </div>
        </div>
      </dialog-list>
    </div>
  </tab>


  <tab label="Конфиг" icon="cogs">
    <div style="padding: 8px;height: calc(100vh - 292px);overflow-y: scroll;overflow-x: hidden;width:100%">
    <div id="xincheck">
    <span class="dbminputlabel">Конфиг</span><br><div style="padding:10px;background:rgba(0,0,0,0.2)">
      <dbm-checkbox id="reply" label="Отвечайте на обращение, если это возможно" checked></dbm-checkbox>
      <xinspace>
      <dbm-checkbox id="ephemeral" label="Сделать ответ приватным"></dbm-checkbox>
      <xinspace>
      <dbm-checkbox id="mentions" label="@ Уведомить членов/должности" checked></dbm-checkbox>
      <xinspace>
      <dbm-checkbox id="messageoff" label="Добавить/Заменить текст" checked></dbm-checkbox>
      <xinspace>
      <dbm-checkbox id="tts" label="Текст в речь"></dbm-checkbox>
      <xinspace>
      <dbm-checkbox id="overwrite" label="Перезаписать изменения"></dbm-checkbox>
      <xinspace>
      <dbm-checkbox id="dontSend" label="Не отправлять сообщение"></dbm-checkbox>
      
      </div><br></div>
      
      <div style="width:96%;display:block">
      <div style="padding-bottom: 12px;" id="xin1">
        <retrieve-from-variable allowNone dropdownLabel="Изменить сообщение" selectId="editMessage" variableInputId="editMessageVarName" variableContainerId="editMessageVarNameContainer">
          <option value="intUpdate">Interaction Update</option>
        </retrieve-from-variable>
      

      <br><br><br></div>

   
    <div>
      <div style="float: left; width: 35%">
      <span class="dbminputlabel">Отправить как webhook</span><br>
      <select id="storagewebhook" class="round" onchange="glob.onComparisonChanged2(this)">
      <option value="0" selecionado>Нет</option>
      <option value="1">Временная переменная</option>
      <option value="2">Переменная сервера</option>
      <option value="3">Глобальная переменная</option>
    </select>
    </div>
    <div id="webhookdiv" style="display: none; float: right; width: 60%;"><span id="ifName" class="dbminputlabel">Имя переменной</span><br><input list="variableList" id="varwebhook" class="round" name="actionxinxyla" type="text"></div>
    <div id="webhookdiv2" style="display: none;padding-top: 12px;">
    <br><br><br>
    <span class="dbminputlabel">Название Webhook</span><br>
    <input id="webhookname" class="round" type="text" style="width:100%" placeholder="Opcional">
    <br>
    <span class="dbminputlabel">URL изображения аватара webhook</span><br>
    <input id="webhookavatar" class="round" type="text" style="width:100%" placeholder="Opcional"><br>
    <hr class="subtlebar" style="margin-top: 4px; margin-bottom: -54px">
    </div>
      <br><br><br>
      <div style="padding-top: 12px">
        <store-in-variable allowNone dropdownLabel="Хрнаить в" selectId="storage" variableInputId="varName2" variableContainerId="varNameContainer2"></store-in-variable>
      </div>

      <br><br><br>
      <hr class="subtlebar" style="margin-top: 4px; margin-bottom: 4px">
      <br>
      <div>
      <div style="float: left; width: 35%">
      <span class="dbminputlabel">Если сообщение не отправляется</span><br>
      <select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
      <option value="0">Продолжить действия</option>
      <option value="1" selecionado>Остановить последовательность действий</option>
      <option value="2">Перейти к действию</option>
      <option value="3">Пропустить следующие действия</option>
      <option value="4">Перейти к якорю действия</option>
    </select>
    </div>
    <div id="iffalseContainer" style="display: none; float: right; width: 60%;"><span id="ifName" class="dbminputlabel">Para</span><br><input id="iffalseVal" class="round" name="actionxinxyla" type="text"></div>
      <br><br><br>

      <div style="padding-bottom: 12px;padding-top: 12px">
      <table style="width:100%;"><tr>
      <td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Оставьте пустым, чтобы удалить"></td>
      <td style="padding:0px 0px 0px 10px;width:55px"><span class="dbminputlabel">Цвет</span><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
      </tr></table>
      </div>

      </div>

    </div>
  </tab>
</tab-system></div>

<style>
xinspace{padding:5px 0px 0px 0px;display:block}
</style>`;
  },

  //---------------------------------------------------------------------
  // Action Editor Init Code
  //
  // When the HTML is first applied to the action editor, this code
  // is also run. This helps add modifications or setup reactionary
  // functions for the DOM elements.
  //---------------------------------------------------------------------

  init: function () {
    const { glob, document } = this;


    glob.onComparisonChanged = function (event) {
      if (event.value > "1") {
        document.getElementById("iffalseContainer").style.display = null;
      } else {
        document.getElementById("iffalseContainer").style.display = "none";
      }
    }

    glob.onComparisonChanged(document.getElementById("iffalse"));


    glob.onComparisonChanged2 = function (event) {
      if (event.value > "0") {
        document.getElementById("webhookdiv").style.display = null;
        document.getElementById("webhookdiv2").style.display = null;
        document.getElementById("xincheck").style.display = "none";
        document.getElementById("xin1").style.display = "none";
        document.getElementById("xin2").style.display = "none";
        document.getElementById("xin3").style.display = "block";
        document.getElementById("xin4").style.display = "none";
        document.getElementById("xin5").style.display = "none";
        document.getElementById("xin4n").style.display = null;
        document.getElementById("xin5n").style.display = null;
        const myInput = document.querySelector("#reply")
        myInput.value = false
        const myInput2 = document.querySelector("#dontSend")
        myInput2.value = false
        const myInput3 = document.querySelector("#ephemeral")
        myInput3.value = false
        const myInput4 = document.querySelector("#tts")
        myInput4.value = false
        const myInput5 = document.querySelector("#overwrite")
        myInput5.value = false
        const myInput6 = document.querySelector("#editMessage")
        myInput6.value = 0
        const myInput7 = document.querySelector("#channel")
        myInput7.value = 0
      } else {
        document.getElementById("webhookdiv").style.display = "none";
        document.getElementById("webhookdiv2").style.display = "none";
        document.getElementById("xincheck").style.display = null;
        document.getElementById("xin1").style.display = null;
        document.getElementById("xin2").style.display = "block";
        document.getElementById("xin3").style.display = "none";
        document.getElementById("xin4").style.display = null;
        document.getElementById("xin5").style.display = null;
        document.getElementById("xin4n").style.display = "none";
        document.getElementById("xin5n").style.display = "none";
      }
    }

    glob.onComparisonChanged2(document.getElementById("storagewebhook"));


    glob.formatItem = function (data) {
      let result = '<div style="display: inline-block; width: 200px; padding-left: 8px;">';
      const comp = data.tipo;
      switch (comp) {
        case "0":
          result += "Вложение: " + data.url;
          break;
        case "1":
          result += "Canvas: " + data.canvasnome;
          break;
        case "2":
          result += "Изображения DBM: " + data.canvasnome;
          break;
      }
      result += "</div>";
      return result;
    };

  },
  //---------------------------------------------------------------------
  // Action Editor On Save
  //
  // When the data for the action is saved, this function is called.
  // It provides the ability to modify the final data associated with
  // the action by retrieving it as an argument and returning a modified
  // version through the return value. This can be used to verify the
  // data and fill required entries the user did not.
  //
  // Its inclusion within action mods is optional.
  //---------------------------------------------------------------------

  onSave(data, helpers) {
    // generate unique ids if not provided by user since they are important
    if (Array.isArray(data?.buttons)) {
      for (let i = 0; i < data.buttons.length; i++) {
        if (!data.buttons[i].id) {
          data.buttons[i].id = "msg-button-" + helpers.generateUUID().substring(0, 7);
        }
      }
    }
    if (Array.isArray(data?.selectMenus)) {
      for (let i = 0; i < data.selectMenus.length; i++) {
        if (!data.selectMenus[i].id) {
          data.selectMenus[i].id = "msg-select-" + helpers.generateUUID().substring(0, 7);
        }
      }
    }
    return data;
  },

  //---------------------------------------------------------------------
  // Action Editor On Paste
  //
  // When the data for the action is pasted, this function is called.
  // It provides the ability to modify the final data associated with
  // the action by retrieving it as an argument and returning a modified
  // version through the return value.
  //
  // Its inclusion within action mods is optional.
  //---------------------------------------------------------------------

  onPaste(data, helpers) {
    if (Array.isArray(data?.buttons)) {
      for (let i = 0; i < data.buttons.length; i++) {
        const id = data.buttons[i].id;
        if (!id || id.startsWith("msg-button-")) {
          data.buttons[i].id = "msg-button-" + helpers.generateUUID().substring(0, 7);
        }
      }
    }
    if (Array.isArray(data?.selectMenus)) {
      for (let i = 0; i < data.selectMenus.length; i++) {
        const id = data.selectMenus[i].id;
        if (!id || id.startsWith("msg-select-")) {
          data.selectMenus[i].id = "msg-select-" + helpers.generateUUID().substring(0, 7);
        }
      }
    }
    return data;
  },

  //---------------------------------------------------------------------
  // Action Bot Function
  //
  // This is the function for the action within the Bot's Action class.
  // Keep in mind event calls won't have access to the "msg" parameter,
  // so be sure to provide checks for variable existence.
  //---------------------------------------------------------------------

  async action(cache) {

    const data = cache.actions[cache.index];
    var messageoff = data.messageoff;
    if(messageoff == undefined){messageoff = true}
    const channel = parseInt(data.channel, 10);
    const message = this.evalMessage(data.message, cache);
    const storagewebhook = parseInt(data.storagewebhook)
    const webhookname = this.evalMessage(data.webhookname, cache)
    const webhookavatar = this.evalMessage(data.webhookavatar, cache)
    if (storagewebhook > 0) {
      varwebhook = this.evalMessage(data.varwebhook, cache)
      Mods = this.getMods()
      webhook = Mods.getWebhook(storagewebhook, varwebhook, cache)
    }
    if (data.channel === undefined || message === undefined) {
      return;
    }

    let target = await this.getSendReplyTarget(channel, this.evalMessage(data.varName, cache), cache);

    let messageOptions = {};

    const overwrite = data.overwrite;

    let isEdit = 0;
    if (data.editMessage === "intUpdate") {
      isEdit = 2;
    } else {
      const editMessage = parseInt(data.editMessage, 10);
      if (typeof editMessage === "number" && editMessage >= 0) {
        const editVarName = this.evalMessage(data.editMessageVarName, cache);
        const editObject = this.getVariable(editMessage, editVarName, cache);
        const { Message } = this.getDBM().DiscordJS;
        if (editObject) {
          if (editObject instanceof Message) {
            target = editObject;
            isEdit = 1;
          } else {
            messageOptions = editObject;
          }
        }
      }
    }

    let content;

    if(messageoff == true){
    if (message.length > 0) {
      content = this.evalMessage(message, cache);
    } else {
      content = this.evalMessage("", cache);
    }}


    if (content) {
      if (messageOptions.content && !overwrite) {
        messageOptions.content += content;
      } else {
        messageOptions.content = content;
      }
    }

    if (data.embeds?.length > 0) {
      const { MessageEmbed } = this.getDBM().DiscordJS;

      if (!Array.isArray(messageOptions.embeds) || overwrite) {
        messageOptions.embeds = [];
      }

      const embedDatas = data.embeds;
      for (let i = 0; i < embedDatas.length; i++) {
        const embedData = embedDatas[i];
        const embed = new MessageEmbed();
        if (embedData.title) embed.setTitle(this.evalMessage(embedData.title, cache));
        if (embedData.url) embed.setURL(this.evalMessage(embedData.url, cache));
        if (embedData.colorrandom == true) {
          embed.setColor("RANDOM");
        }
        if (embedData.color){
          if (embedData.colorrandom == true) {
            embed.setColor("RANDOM");
          } else {
            embed.setColor(this.evalMessage(embedData.color, cache));
          }
        }

        if (embedData.timestamp == "true" || embedData.timestamp == true) {
          if(embedData.timestampper == "" || embedData.timestampper == undefined) {
            embed.setTimestamp()
          } else{
            embed.setTimestamp(parseFloat(this.evalMessage(embedData.timestampper, cache)))
          }
        }

        var imgURL = this.evalMessage(embedData.imageUrl, cache);

        if(imgURL) {
          if(imgURL.toString().startsWith("http")) {
            embed.setImage(imgURL);
          } else {
            embed.setImage("attachment://" + imgURL);
          } 
        }

        var thumb = this.evalMessage(embedData.thumbUrl, cache);

        if(thumb) {
          if(thumb.toString().startsWith("http")) {
            embed.setThumbnail(thumb);
          } else {
            embed.setThumbnail("attachment://" + thumb);
          }
        }

        if (embedData.description) embed.setDescription(this.evalMessage(embedData.description || '\u200B', cache));

        if (embedData.fields?.length > 0) {
          const fields = embedData.fields;
          for (let i = 0; i < fields.length; i++) {
            const f = fields[i];

            val1 = this.evalMessage(f.val1, cache);
            val2 = this.evalMessage(f.val2, cache);
            result = true;

            if(f.formula == "1" || f.formula == "2") {
            const compare = parseInt(f.comparar, 10);
            if (compare !== 6){
              val1 = this.evalIfPossible(val1, cache)
              val2 = this.evalIfPossible(val2, cache)
            }
            switch (compare) {
                case 0:
                  result = val1.toString() !== "undefined";
                  break;
                case 1:
                  result = val1 == val2;
                  break;
                case 2:
                  result = val1 === val2;
                  break;
                case 3:
                  result = parseFloat(val1) < parseFloat(val2);
                  break;
                case 4:
                  result = parseFloat(val1) > parseFloat(val2);
                  break;
                case 5:
                  if (typeof val1?.toString().includes === "function") {
                    result = val1.toString().includes(val2);
                  }
                  break;
                case 6:
                  result = Boolean(val1.toString().match(new RegExp('^' + val2 + '$', 'i')));
                  break;
                case 7:
                  result = Boolean(val1.toString().length > val2);
                  break;
                case 8:
                  result = Boolean(val1.toString().length < val2);
                  break;
                case 9:
                  result = Boolean(val1.toString().length == val2);
                  break;
                case 10:
                  result = val1.toString().startsWith(val2);
                  break;
                case 11:
                  result = val1.toString().endsWith(val2);
                  break;
                case 12:
                  result = Boolean(val1 >= val2);
                  break;
                case 13:
                  result = Boolean(val1 <= val2);
                  break;
                case 14:
                  result = Boolean(val1.toString().match(new RegExp(val2)))
                  break;
                case 16:
                  const conditions = ["Ä","Å","Á","Â","À","Ã","Ā","Ă","Ą","ā","ă","ą","ä","á","â","à","ã","É","Ê","Ë","È","Ė","Ę","Ě","Ĕ","Ē","ė","ę","ě","ĕ","ē","é","ê","ë","è","Í","Î","Ï","Ì","İ","Į","Ī","ı","į","ī","í","î","ï","ì","Ö","Ó","Ô","Ò","Õ","Ő","Ō","ő","ō","ö","ó","ô","ò","õ","Ü","Ú","Û","Ų","Ű","Ů","Ū","ų","ű","ů","ū","ü","ú","û","ù","Ç","Ć","Č","ç","ć","č","Ñ","Ň","Ņ","Ń","ñ","ň","ņ","ń","Ÿ","Ý","ý","Ź","Ż","Ž","ź","ż","ž","Ł","Ľ","Ļ","Ĺ","ł","ľ","ĺ","Ķ","ķ","Ģ","Ğ","ģ","ğ","Ď","ď","Ś","Š","Ş","ś","š","ş","Ť","Ț","Ţ","ť","ț","ţ","Ŕ","Ř","ŕ","ř"]
                  result = conditions.some(el => val1.includes(el));
                  break;
                case 17:
                  const conditionsX = val2
                  result = conditionsX.some(els => val1.includes(els));
                  break;
                case 18:
                  const conditionsZ = val2
                  result = conditionsZ.some(elz => val1 == (elz));
                  break;
                case 19:
                  result = val1 % 2 == 0
                  break;
                case 20:
                  result = val1 % 2 == 1
                  break;
                case 21:
                  result = Boolean(!isNaN(parseFloat(val1.toString().replace(",", "."))));
                  break;
                case 23:
                  const isImageUrl = require('is-image-url');
                  result = isImageUrl(val1);
                  break;
                case 24:
                  result = typeof val1 === "string";
                  break;
                case 25:
                  const isUrl = require("is-url");
                  result = isUrl(val1);
            }
          }

          if(f.formula == "1") {
            if(result == false) {
              result = true
            } else {result = false}
          }

          if(result == true){
            embed.addField(this.evalMessage(f.name || '\u200B', cache), this.evalMessage(f.value || '\u200B', cache), f.inline === "true")};
          }
        }

        var authorIcon = this.evalMessage(embedData.authorIcon, cache) || null;

        if(!authorIcon?.toString().startsWith("http")) {
          authorIcon = "attachment://" + authorIcon;
        }

        if(embedData.author) {
          embed.setAuthor({
            name: this.evalMessage(embedData.author, cache),
            iconURL: authorIcon,
            url: embedData.authorUrl ? this.evalMessage(embedData.authorUrl, cache) : null,
          });
        }
        
        var iconURL = this.evalMessage(embedData.footerIconUrl, cache) || null;

        if(!iconURL?.toString().startsWith("http")) {
          iconURL = "attachment://" + iconURL;
        }

        if(embedData.footerText) {
          embed.setFooter({
            text: this.evalMessage(embedData.footerText, cache),
            iconURL: iconURL,
          });
        }

        messageOptions.embeds.push(embed);
      }
    }

    if(data.mentions == false){
    messageOptions.allowedMentions = {};
    messageOptions.allowedMentions.repliedUser = []
    messageOptions.allowedMentions.repliedUser = data.mentions
  }

    let componentsArr = [];
    let awaitResponses = [];

    if (!overwrite && messageOptions.components?.length > 0) {
      componentsArr = messageOptions.components.map(function (comps) {
        return comps.components;
      });
    }

    const defaultTime = 60000;

    if (Array.isArray(data.buttons)) {
      for (let i = 0; i < data.buttons.length; i++) {
        if(!data.buttons[i].name) data.buttons[i].name = "\u200b";
        const button = data.buttons[i];
        if(button.typeper == "" || button.typeper == undefined){
          button.type = this.evalMessage(button.type, cache)
        }else{
          check = this.evalMessage(button.typeper, cache)
          if(check == "PRIMARY" || check == "SECONDARY" || check == "SUCCESS" || check == "DANGER" || check == "LINK"){
          button.type = this.evalMessage(button.typeper, cache)}
        }
        const buttonData = this.generateButton(button, cache);
        this.addButtonToActionRowArray(componentsArr, this.evalMessage(button.row, cache), buttonData, cache);

        if (button.mode !== "PERSISTENT") {
          awaitResponses.push({
            type: "BUTTON",
            time: button.time ? parseInt(this.evalMessage(button.time, cache)) || defaultTime : defaultTime,
            id: this.evalMessage(button.id, cache),
            user: button.mode.endsWith("PERSONAL") ? cache.getUser()?.id : null,
            multi: button.mode.startsWith("MULTI"),
            data: button,
          });
        }
      }
    }

    if (Array.isArray(data.selectMenus)) {
      for (let i = 0; i < data.selectMenus.length; i++) {
           const select = data.selectMenus[i];

      totales = data.selectMenus[i].options.length
       
        
        for (let ix = 0; ix < totales; ix++) {
          val1 = this.evalMessage(data.selectMenus[i].options[ix].val1, cache);
          val2 = this.evalMessage(data.selectMenus[i].options[ix].val2, cache);
      
          result = true;

          if(data.selectMenus[i].options[ix].formula == "Falso" || data.selectMenus[i].options[ix].formula == "Verdadeiro") {
          const compare = parseInt(data.selectMenus[i].options[ix].comparar, 10);
          if (compare !== 6){
            val1 = this.evalIfPossible(val1, cache)
            val2 = this.evalIfPossible(val2, cache)
          }

          switch (compare) {
              case 0:
                result = val1.toString() !== "undefined";
                break;
              case 1:
                result = val1 == val2;
                break;
              case 2:
                result = val1 === val2;
                break;
              case 3:
                result = parseFloat(val1) < parseFloat(val2);
                break;
              case 4:
                result = parseFloat(val1) > parseFloat(val2);
                break;
              case 5:
                if (typeof val1?.toString().includes === "function") {
                  result = val1.toString().includes(val2);
                }
                break;
              case 6:
                result = Boolean(val1.toString().match(new RegExp('^' + val2 + '$', 'i')));
                break;
              case 7:
                result = Boolean(val1.toString().length > val2);
                break;
              case 8:
                result = Boolean(val1.toString().length < val2);
                break;
              case 9:
                result = Boolean(val1.toString().length == val2);
                break;
              case 10:
                result = val1.toString().startsWith(val2);
                break;
              case 11:
                result = val1.toString().endsWith(val2);
                break;
              case 12:
                result = Boolean(val1 >= val2);
                break;
              case 13:
                result = Boolean(val1 <= val2);
                break;
              case 14:
                result = Boolean(val1.toString().match(new RegExp(val2)))
                break;
              case 16:
                const conditions = ["Ä","Å","Á","Â","À","Ã","Ā","Ă","Ą","ā","ă","ą","ä","á","â","à","ã","É","Ê","Ë","È","Ė","Ę","Ě","Ĕ","Ē","ė","ę","ě","ĕ","ē","é","ê","ë","è","Í","Î","Ï","Ì","İ","Į","Ī","ı","į","ī","í","î","ï","ì","Ö","Ó","Ô","Ò","Õ","Ő","Ō","ő","ō","ö","ó","ô","ò","õ","Ü","Ú","Û","Ų","Ű","Ů","Ū","ų","ű","ů","ū","ü","ú","û","ù","Ç","Ć","Č","ç","ć","č","Ñ","Ň","Ņ","Ń","ñ","ň","ņ","ń","Ÿ","Ý","ý","Ź","Ż","Ž","ź","ż","ž","Ł","Ľ","Ļ","Ĺ","ł","ľ","ĺ","Ķ","ķ","Ģ","Ğ","ģ","ğ","Ď","ď","Ś","Š","Ş","ś","š","ş","Ť","Ț","Ţ","ť","ț","ţ","Ŕ","Ř","ŕ","ř"]
                result = conditions.some(el => val1.includes(el));
                break;
              case 17:
                const conditionsX = val2
                result = conditionsX.some(els => val1.includes(els));
                break;
              case 18:
                const conditionsZ = val2
                result = conditionsZ.some(elz => val1 == (elz));
                break;
              case 19:
                result = val1 % 2 == 0
                break;
              case 20:
                result = val1 % 2 == 1
                break;
              case 21:
                result = Boolean(!isNaN(parseFloat(val1.toString().replace(",", "."))));
                break;
              case 23:
                const isImageUrl = require('is-image-url');
                result = isImageUrl(val1);
                break;
              case 24:
                result = typeof val1 === "string";
                break;
              case 25:
                const isUrl = require("is-url");
                result = isUrl(val1);
          }
        }
        
        if(data.selectMenus[i].options[ix].formula == "Falso") {
          if(result == false) {
            result = true
          } else {result = false}
        }

        if(result == false){
        data.selectMenus[i].options.splice([ix], 1);
        ix = parseFloat([ix]) - 1
        totales = totales - 1
        }


      }
        
      const selectData = this.generateSelectMenu(select, cache);
      this.addSelectToActionRowArray(componentsArr, this.evalMessage(select.row, cache), selectData, cache);

        if (select.mode !== "PERSISTENT") {
          awaitResponses.push({
            type: "SELECT",
            time: select.time ? parseInt(this.evalMessage(select.time, cache)) || defaultTime : defaultTime,
            id: this.evalMessage(select.id, cache),
            user: select.mode.endsWith("PERSONAL") ? cache.getUser()?.id : null,
            multi: select.mode.startsWith("MULTI"),
            data: select,
          });
        }
      }
    }

    if (messageOptions._awaitResponses?.length > 0) {
      if (overwrite && awaitResponses.length > 0) {
        messageOptions._awaitResponses = [];
      } else {
        awaitResponses = messageOptions._awaitResponses.concat(awaitResponses);
      }
    }

    if (componentsArr.length > 0) {
      const newComponents = componentsArr
        .filter((comps) => comps.length > 0)
        .map(function (comps) {
          return {
            type: "ACTION_ROW",
            components: comps,
          };
        });

      messageOptions.components = newComponents;
    }

    if (storagewebhook > 0) {
      if (webhookname !== "") {
        messageOptions.username = webhookname
      }
      if (webhookavatar !== "") {
        messageOptions.avatarURL = await webhookavatar
      }
    }

    if (data.tts) {
      messageOptions.tts = true;
    }



    if (data.attachments?.length > 0) {
      const { Util, MessageAttachment } = this.getDBM().DiscordJS;
      if (!Array.isArray(messageOptions.files) || overwrite) {
        messageOptions.files = [];
      }
      for (let i = 0; i < data.attachments.length; i++) {

        if (data.attachments[i].tipo == "1") {
          const { DiscordJS } = this.getDBM();
          const Canvas = require('canvas')
          const attachment = data.attachments[i];
          const varnamer = this.evalMessage(attachment?.canvasnome, cache);
          const varid = this.evalMessage(attachment?.canvasvar, cache);
          const imagedata = this.getVariable(varid, varnamer, cache)
          if (!imagedata) {
            this.callNextAction(cache)
            return
          }
          const image = new Canvas.Image()
          image.src = imagedata
          const canvas = Canvas.createCanvas(image.width, image.height)
          const ctx = canvas.getContext('2d')
          ctx.drawImage(image, 0, 0, image.width, image.height)
          const buffer = canvas.toBuffer('image/png', { compressionLevel: data.attachments[i].compress })
          const spoiler = !!attachment?.spoiler;
          const name = attachment?.name || (spoiler ? Util.basename("image.png") : undefined);
          const msgAttachment = new MessageAttachment(buffer, name);
          if (spoiler) {
            msgAttachment.setSpoiler(true);
          }
          messageOptions.files.push(msgAttachment);

        }
        if (data.attachments[i].tipo == "2") {
          const { Images } = this.getDBM();
          const attachment = data.attachments[i];
          const varnamer = this.evalMessage(attachment?.canvasnome, cache);
          const varid = this.evalMessage(attachment?.canvasvar, cache);
          const imagedata = this.getVariable(varid, varnamer, cache)
          const spoiler = !!attachment?.spoiler;
          const name = attachment?.name || (spoiler ? Util.basename("image.png") : undefined);
          const buffer = await Images.createBuffer(imagedata)
          const msgAttachment = new MessageAttachment(buffer, name);
          if (spoiler) {
            msgAttachment.setSpoiler(true);
          }
          messageOptions.files.push(msgAttachment);

        }
        if (data.attachments[i].tipo == "0" || data.attachments[i].tipo == undefined) {
          const attachment = data.attachments[i];
          const url = this.evalMessage(attachment?.url, cache);
          if (url) {
            const spoiler = !!attachment?.spoiler;
            const name = attachment?.name || (spoiler ? Util.basename(url) : undefined);
            const msgAttachment = new MessageAttachment(url, name);
            if (spoiler) {
              msgAttachment.setSpoiler(true);
            }
            messageOptions.files.push(msgAttachment);
          }
        }
      }
    }

    let defaultResultMsg = null;
    const onComplete = (resultMsg) => {
      if (defaultResultMsg) {
        resultMsg ??= defaultResultMsg;
      }

      if (resultMsg) {
        const varName2 = this.evalMessage(data.varName2, cache);
        const storage = parseInt(data.storage, 10);
        this.storeValue(resultMsg, storage, varName2, cache);
        this.callNextAction(cache);

        for (let i = 0; i < awaitResponses.length; i++) {
          const response = awaitResponses[i];
          const originalInteraction = cache.interaction?.__originalInteraction ?? cache.interaction;
          const tempVariables = cache.temp || {};
          this.registerTemporaryInteraction(resultMsg.id, response.time, response.id, response.user, response.multi, (interaction) => {
            if (response.data) {
              interaction.__originalInteraction = originalInteraction;
              if (response.type === "BUTTON") {
                this.preformActionsFromInteraction(interaction, response.data, cache.meta, tempVariables);
              } else {
                this.preformActionsFromSelectInteraction(interaction, response.data, cache.meta, tempVariables);
              }
            }
          });
        }
      } else {
        this.callNextAction(cache);
      }
    };

    const isMessageTarget = target instanceof this.getDBM().DiscordJS.Message;

    const sameId = target?.id?.length > 0 && (target?.id ?? "") === cache?.interaction?.channel?.id;
    const sameChannel = channel === 0 || sameId;
    const canReply = !isMessageTarget && cache?.interaction?.replied === false && sameChannel;

    if (data.dontSend) {
      const varName2 = this.evalMessage(data.varName2, cache);
      const storage = parseInt(data.storage, 10);
      messageOptions._awaitResponses = awaitResponses;
      this.storeValue(messageOptions, storage, varName2, cache);
      this.callNextAction(cache);
    }

    else if (Array.isArray(target)) {
      this.callListFunc(target, "send", [messageOptions]).then(onComplete);
    }

    else if (isEdit === 2) {
      let promise = null;

      defaultResultMsg = cache.interaction?.message;

      if (cache.interaction?.replied && cache.interaction?.editReply) {
        promise = cache.interaction.editReply(messageOptions);
      } else if (cache?.interaction?.update) {
        promise = cache.interaction.update(messageOptions);
      } else {
        this.displayError(data, cache, "Send Message -> Message/Options to Edit -> Interaction Update / Could not find interaction to edit");
      }

      if (promise) {
        promise
          .then(onComplete)
          .catch((err) => this.displayError(data, cache, err) || this.executeResults(false, data, cache));
      }
    }

    else if (isEdit === 1 && target?.edit) {
      target
        .edit(messageOptions)
        .then(onComplete)
        .catch((err) => this.displayError(data, cache, err) || this.executeResults(false, data, cache));;
    }

    else if (isMessageTarget && target?.reply) {
      target
        .reply(messageOptions)
        .then(onComplete)
        .catch((err) => this.displayError(data, cache, err) || this.executeResults(false, data, cache));
    }

    else if (data.reply === true && canReply) {
      messageOptions.fetchReply = true;
      if (data.ephemeral === true) {
        messageOptions.ephemeral = true;
      }
      let promise = null;
      if (cache.interaction.deferred) {
        promise = cache.interaction.editReply(messageOptions);
      } else {
        promise = cache.interaction.reply(messageOptions);
      }
      promise.then(onComplete).catch((err) => this.displayError(data, cache, err));
    }


    else if (target?.send) {

      if (storagewebhook > 0) {
        webhook
          .send(messageOptions)
          .then(onComplete)
          .catch((err) => this.displayError(data, cache, err) || this.executeResults(false, data, cache));
      } else {
        target
          .send(messageOptions)
          .then(onComplete)
          .catch((err) => this.displayError(data, cache, err) || this.executeResults(false, data, cache));
      }

    }



    else {
      this.callNextAction(cache);
    }

  },

  //---------------------------------------------------------------------
  // Action Bot Mod Init
  //
  // An optional function for action mods. Upon the bot's initialization,
  // each command/event's actions are iterated through. This is to
  // initialize responses to interactions created within actions
  // (e.g. buttons and select menus for Send Message).
  //
  // If an action provides inputs for more actions within, be sure
  // to call the `this.prepareActions` function to ensure all actions are
  // recursively iterated through.
  //---------------------------------------------------------------------

  modInit(data) {
    if (Array.isArray(data?.buttons)) {
      for (let i = 0; i < data.buttons.length; i++) {
        const button = data.buttons[i];
        if (button.mode === "PERSISTENT") {
          this.registerButtonInteraction(button.id, button);
        }
        this.prepareActions(button.actions);
      }
    }
    if (Array.isArray(data?.selectMenus)) {
      for (let i = 0; i < data.selectMenus.length; i++) {
        const select = data.selectMenus[i];
        if (select.mode === "PERSISTENT") {
          this.registerSelectMenuInteraction(select.id, select);
        }
        this.prepareActions(select.actions);
      }
    }
  },

  //---------------------------------------------------------------------
  // Action Bot Mod
  //
  // Upon initialization of the bot, this code is run. Using the bot's
  // DBM namespace, one can add/modify existing functions if necessary.
  // In order to reduce conflicts between mods, be sure to alias
  // functions you wish to overwrite.
  //---------------------------------------------------------------------

  mod() { },
};
