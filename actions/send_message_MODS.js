module.exports = {
  name: "Send Message",
  displayName: "Send Message MOD",
  section: "Messaging",
  meta: {
    version: "2.1.7",
    preciseCheck: true,
    author: "[xinxyla - 172782058396057602]<br>[Tempest - 321400509326032897]",
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {
    let text = "";

    if (data.storagewebhook !== "0") {
      text = `Отправить через Webhook: ${data.varwebhook}`;
    } else {

      if (data.message) {
        text = `"${data.message.replace(/[\n\r]+/, " ↲ ")}"`;
      } else if (data.embeds?.length > 0) {
        text = `${data.embeds.length} Embeds`;
      } else if (data.attachments?.length > 0) {
        text = `${data.attachments.length} Вложения`;
      } else if (data.buttons?.length > 0 || data.selectMenus?.length > 0) {
        text = `${data.buttons.length} Кнопки и ${data.selectMenus.length} Меню выбора`;
      } else if (data.editMessage && data.editMessage !== "0") {
        if (data.editMessage === "intUpdate") {
          text = "Параметры сообщения - Редактировать взаимодействие"
        } else {
          text = `Параметры сообщения - ${presets.getVariableText(data.editMessage, data.editMessageVarName)}`;
        }
      } else {
        text = `Ничего (может привести к ошибке)`;
      }

      if (data.dontSend) {
        text = `Хранить дата: ${text}`;
      } else {
        text = `${presets.getSendReplyTargetText(data.channel, data.varName)}: ${text}`;
      }

    }

    if (data.descriptioncolor == undefined) {
      data.descriptioncolor = "#ffffff";
    }

    if (data.descriptionx == true) {
      desccor = data.descriptioncolor;
    } else {
      desccor = "none";
    }

    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">${text}</font>`
  },

  variableStorage(data, varType) {
    let vars = [];

    const type = parseInt(data.storage, 10);
    const typeError = parseInt(data.storageError, 10);

    if (type == varType) {
      vars.push(data.varName2);
      vars.push(data.dontSend ? "Параметры сообщения" : "Cообщение");
    }

    if (typeError == varType) {
      vars.push(data.varNameError);
      vars.push("Текст ~ Ошибка");
    }

    if (vars.length > 0) return vars;
  },

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
    "descriptionx",
    "storagewebhook",
    "varwebhook",
    "webhookname",
    "webhookavatar",
    "messageoff",
    "mentions",
    "actionsError",
    "storageError",
    "varNameError",
    "errcmd",
    "editweb",
    "removeComps",
    "removeEmbeds",
    "removeAttachments",
    "removeCompsE",
    "removeEmbedsE",
    "removeAttachmentsE",
    "di",
  ],

  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 4.2</div>

    <div style="height:52px;overflow: hidden;padding-top: 3px;">
    <div style="width:100%" id="xin2"><send-reply-target-input dropdownLabel="Отправить" selectId="channel" variableInputId="varName"></send-reply-target-input>
    

</div><div id="xin3"><div style="float: left; width: 35%">
<span class="dbminputlabel">Отправить</span><br>
<select class="round">
<option value="0" selected>Webhook</option>
</select>
</div>
<br><br><br>
</div>


</div>
<div style="width:100%">
<tab-system>


  <tab label="Текст" icon="align left">
  <div style="width: 100%; padding:8px;height: calc(100vh - 250px);overflow:auto">
    
      <textarea id="message" class="dbm_monospace" rows="6" placeholder="Напишите сообщение. Не обязательное поле" style="height: calc(100vh - 310px); white-space: nowrap;"></textarea>
      <br>       <div style="margin-top:-4px;float:left;text-align:left;position:relative"><dbm-checkbox style="font-size:12px" id="messageoff" label="Добавить/заменить текст" checked></dbm-checkbox></div>
      <div style="margin-top:-4px;float:left;text-align:left;position:relative"><dbm-checkbox id="mentions" style="font-size:12px" label="@ Уведомление участника /роли" checked></dbm-checkbox></div>
    
    
      <div id="contador" style="float:right;text-align:right;position:relative;width:22%">0 caracteres</div>
    </div>
  </tab>


  <tab label="Эмбеды" icon="book image">
  <div style="width: 100%; padding:8px;height: calc(100vh - 250px);overflow:auto">

      <dialog-list id="embeds" fields='["title", "url", "color", "colorrandom", "timestamp", "timestampper", "imageUrl", "thumbUrl", "description", "fields", "author", "authorUrl", "authorIcon", "footerText", "footerIconUrl", "formula", "val1", "comparar", "val2"]' dialogTitle="Информация об Эмбеде" dialogResizable dialogWidth="750" dialogHeight="550" listLabel="Эмбеды" listStyle="height: calc(100vh - 310px);" itemName="Embed" itemCols="1" itemHeight="60px;" itemTextFunction="'<div style=margin-left:-10px;background:'+data.color+';float:left;width:10px;overflow:hidden;height:60px;><br></div><div style=float:left;width:59%;overflow:hidden;margin-left:5px;> Название: ' + data.title + ' <br> Описание: ' + data.description + '</div><div style=float:right;width:39%;overflow:hidden;>Автор: '+ data.author +' <br>Поля: ' + data.fields.length + (data.formula == 1 || data.formula == 2 ? '<span style=float:right title=Condição_ligada> 🔘 </span>' : '') + '</div>'" itemStyle="text-align: left; line-height: 30px;">
        <div style="padding: 8px 8px 0px 8px;">


              <div style="padding: 8px;height: calc(100vh - 80px);overflow:auto">

          
              <div style="padding: 6px; background: rgba(0, 0, 0, 0.3);">
              <span class="dbminputlabel">Конфигурация отображения эмбеда</span>
              <select id="formula" class="round">
                <option value="0" selected>Всегда отображать эмбед</option>
                <option value="1">Отобразить эмбед, если получено значение False</option>
                <option value="2">Отобразить эмбед, если получено значение True</option>
              </select>
      
              <br>
      
              <table style="width: 100%;">
                <tr>
                  <td style="width:33%">
                    <span class="dbminputlabel">Значение A</span>
                    <input id="val1" class="round" type="text">
                  </td>
                  <td style="width:33%;padding:0px 6px 0px 6px">
                    <span class="dbminputlabel">Сравнение</span><br>
                    <select id="comparar" class="round">
                      <optgroup label="Число или Текст">
                        <option value="0">Значение A - Существует</option>
                        <option value="1" selected>Равно</option>
                        <option value="2">Абсолютно равно</option>
                      </optgroup>
                      <optgroup label="Число">
                        <option value="3">Меньше, чем</option>
                        <option value="13">Меньше или равно</option>
                        <option value="4">Больше, чем</option>
                        <option value="12">Больше или равно</option>
                        <option value="19">Значение A - Чётное число?</option>
                        <option value="20">Значение A - Нечётное число?</option>
                        <option value="21">Значение A - Число?</option>
                      </optgroup>
                      <optgroup label="Текст">
                        <option value="6">Соответствует регулярному выражению</option>
                        <option value="14">Соответствует полному регулярному выражению</option>
                        <option value="7">Длина больше, чем</option>
                        <option value="8">Длина меньше, чем</option>
                        <option value="9">Длина равна</option>
                        <option value="10">Начинается с</option>
                        <option value="11">Заканчивается на</option>
                        <option value="16">Значение A - Содержит акценты?</option>
                        <option value="18">Равно словам ["a", "b", "c"]</option>
                        <option value="24">Значение A - Текст?</option>
                        <option value="23">Значение A - URL изображения?</option>
                        <option value="25">Значение A - URL?</option>
                        <option value="26">Значение A - Электронная почта существует?</option>
                      </optgroup>
                      <optgroup label="Текст ~ Содержит">
                        <option value="5">Точно содержит</option>
                        <option value="29">Содержит ~ Без учёта регистра</option>
                        <option value="30">Содержит ~ Без учёта акцентов</option>
                        <option value="31">Содержит ~ Без учёта акцентов и регистра</option>
                        <option value="17">Точно содержит ["a" , "b" , "c"]</option>
                        <option value="27">Содержит какой-либо URL?</option>
                        <option value="28">Содержит приглашение Discord?</option>
                        <option value="32">Точно содержит слово</option>
                        <option value="33">Содержит слово ~ Без учёта регистра</option>
                        <option value="34">Содержит слово ~ Без учёта акцентов</option>
                        <option value="35">Содержит слово ~ Без учёта акцента и регистра</option>
                        <option value="36">Содержит слова ~ используйте запятые ~ Без учета акцентов и регистра</option>
                      </optgroup>
                      <optgroup label="Другое">
                        <option value="22">Значение A - Список?</option>
                      </optgroup>
                    </select>
                  </td>
                  <td style="width:33%">
                    <span class="dbminputlabel">Значение B</span><br>
                    <input id="val2" class="round" type="text">
                  </td>
                </tr>
              </table>
      
        
            </div>
            <br>
<table style="width:100%"><tr><td style="width:33%;vertical-align: top;">


<span class="dbminputlabel">Автор аватар URL / Имя вложения</span><br>
<input id="authorIcon" class="round" type="text" placeholder="Прим: image.png или ссылка https">

<br>


                  <span class="dbminputlabel">Заголовок</span><br>
                  <input id="title" class="round" type="text">

                  <br>

                </td>
                <td style="width:33%;vertical-align: top;padding:0px 6px 0px 6px">

                <span class="dbminputlabel">Автор текст</span><br>
                <input id="author" class="round" type="text" placeholder="Не обязательное поле">

                <br>


                  <span class="dbminputlabel">URL</span><br>
                  <input id="url" class="round" type="text" placeholder="Не обязательное поле">

                </td>

                <td style="width:33%;vertical-align: top">

                                                
                <span class="dbminputlabel">Автор URL</span><br>
                <input id="authorUrl" class="round" type="text" placeholder="Не обязательное поле">

                <br>

                <span class="dbminputlabel">Мини-иконка URL / Имя Файла</span><br>
                <input id="thumbUrl" class="round" type="text" placeholder="Прим: image.png или ссылка https">

                </td>
                </tr></table>

                <span class="dbminputlabel">Описание</span><br>
                <textarea id="description" class="dbm_monospace" rows="7" placeholder="Не обязательное поле"></textarea>

                <br>

                <dialog-list id="fields" fields='["name", "value", "inline", "val1", "val2", "comparar", "formula"]' dialogTitle="Информация о Поле" dialogResizable dialogWidth="540" dialogHeight="500" listLabel="Поля" listStyle="height: 120px;" itemName="Field" itemCols="1" itemHeight="25px;" itemTextFunction="'<table style=width:100%><tr><td style=width:50%>Имя: ' + data.name + '</td><td>' + 'Описание: '+ data.value + '</td></tr></table>'" itemStyle="text-align: left; line-height: 25px;">
                <div style="height: calc(100vh - 60px);overflow:auto">

<div style="padding: 16px;background:rgba(0,0,0,0.3)">

<span class="dbminputlabel">Конфигурация отображения поля</span><br>
<select id="formula" class="round">
<option value="0" selected>Всегда отображать поле</option>
<option value="1">Отобразить поле, если получено значение False</option>
<option value="2">Отобразить поле, если получено значение True</option>
</select>

<br>

<table style="width: 100%;">
<tr>
  <td style="width:33%";">
    <span class="dbminputlabel">Значение A</span>
    <input id="val1" class="round" type="text">
  </td>
  <td style="width:33%;padding:0px 6px 0px 6px">
    <span class="dbminputlabel">Сравнение</span><br>
    <select id="comparar" class="round">
      <optgroup label="Число или Текст">
        <option value="0">Значение A - Существует</option>
        <option value="1" selected>Равно</option>
        <option value="2">Абсолютно равно</option>
      </optgroup>
      <optgroup label="Число">
        <option value="3">Меньше, чем</option>
        <option value="13">Меньше или равно</option>
        <option value="4">Больше, чем</option>
        <option value="12">Больше или равно</option>
        <option value="19">Значение A - Чётное число?</option>
        <option value="20">Значение A - Нечётное число?</option>
        <option value="21">Значение A - Число?</option>
      </optgroup>
      <optgroup label="Текст">
        <option value="6">Соответствует регулярному выражению</option>
        <option value="14">Соответствует полному регулярному выражению</option>
        <option value="7">Длина больше, чем</option>
        <option value="8">Длина меньше, чем</option>
        <option value="9">Длина равна</option>
        <option value="10">Начинается с</option>
        <option value="11">Заканчивается на</option>
        <option value="16">Значение A - Содержит акценты?</option>
        <option value="18">Равно словам ["a", "b", "c"]</option>
        <option value="24">Значение A - Текст?</option>
        <option value="23">Значение A - URL изображения?</option>
        <option value="25">Значение A - URL?</option>
        <option value="26">Значение A - Электронная почта существует?</option>
      </optgroup>
      <optgroup label="Текст ~ Содержит">
        <option value="5">Точно содержит</option>
        <option value="29">Содержит ~ Без учёта регистра</option>
        <option value="30">Содержит ~ Без учёта акцентов</option>
        <option value="31">Содержит ~ Без учёта акцентов и регистра</option>
        <option value="17">Точно содержит ["a" , "b" , "c"]</option>
        <option value="27">Содержит какой-либо URL?</option>
        <option value="28">Содержит приглашение Discord?</option>
        <option value="32">Точно содержит слово</option>
        <option value="33">Содержит слово ~ Без учёта регистра</option>
        <option value="34">Содержит слово ~ Без учёта акцентов</option>
        <option value="35">Содержит слово ~ Без учёта акцента и регистра</option>
        <option value="36">Содержит слова ~ используйте запятые ~ Без учета акцентов и регистра</option>
      </optgroup>
      <optgroup label="Другое">
        <option value="22">Значение A - Список?</option>
      </optgroup>
    </select>
  </td>
  <td style="width:33%;">
    <span class="dbminputlabel">Значение B</span><br>
    <input id="val2" class="round" type="text">
  </td>
</tr>
</table>


  </div>
  <div style="padding: 16px;">


  <div style="float: left; width: calc(50% - 12px);">
    <span class="dbminputlabel">Имя поля</span><br>
    <input id="name" class="round" type="text" placeholder="Обязательное поле">
  </div>
  
  <div style="float: right; width: calc(50% - 12px);">
    <span class="dbminputlabel">В строке?</span><br>
    <select id="inline" class="round">
      <option value="true">Да</option>
      <option value="false" selected>Нет</option>
    </select>
  </div>

  <br><br><br>

  <span class="dbminputlabel">Значение поля</span><br>
  <textarea id="value" class="dbm_monospace" rows="7" placeholder="Не обязательное поле" style="height: calc(100vh - 320px); white-space: nowrap;"></textarea>

</div></div>
</dialog-list>

<br>

<span class="dbminputlabel">URL фото / Имя вложения</span><br>
<input id="imageUrl" class="round" type="text" placeholder="Прим: image.png или ссылка https">

<br>

                <table style="width:100%"><tr><td style="width:30%;vertical-align: top">
                
              <span class="dbminputlabel">Цвет</span><div style="float:right;margin-top:-6px"><dbm-checkbox id="colorrandom" style="font-size:12px" label="Рандом"></dbm-checkbox></div><br>
              <table style="width:100%"><tr><td><input id="color" name="actionxinxyla" class="round" type="text" placeholder="Не обязательное поле"><td>
              <td style="width:40px;text-align:center"><a id="btr1" style="cursor:pointer" onclick="(function(){
                 document.getElementById('color').type = 'color'
                document.getElementById('btr1').style.display = 'none';
                document.getElementById('btr2').style.display = 'block';
                })()"><button class="tiny compact ui icon button">Выбрать</button></a><a id="btr2" style="cursor:pointer;display:none" onclick="(function(){
                  document.getElementById('color').type = 'text';
                  document.getElementById('btr1').style.display = 'block';
                  document.getElementById('btr2').style.display = 'none';
                  })()"><button class="tiny compact ui icon button">Текст</button></a><td></tr></table>

                   </td>

                   <td style="width:40%;vertical-align: top;padding:0px 6px 0px 6px">

                <span class="dbminputlabel">Футер аватар URL / Имя вложения</span><br>
                <input id="footerIconUrl" class="round" type="text" placeholder="Прим: image.png или ссылка https">

                </td>
                
                <td style="width:30%;vertical-align: top;">
                <span class="dbminputlabel">Время</span><div style="float:right;margin-top:-6px"><dbm-checkbox id="timestamp"  style="font-size:12px" label="Отобразить"></dbm-checkbox></div><br>
                <input id="timestampper" class="round" type="text" placeholder="Оставить пустым для текущего">
                </td></tr></table>

                <br>

                <span class="dbminputlabel">Футер текст</span>
                <textarea id="footerText" class="dbm_monospace" rows="3" placeholder="Не обязательное поле"></textarea>

              </div>


        </div>
      </dialog-list>

    </div>
  </tab>

  <tab label="Кнопки" icon="clone">
  <div style="width: 100%; padding:8px;height: calc(100vh - 250px);overflow:auto">

  <dialog-list id="buttons" fields='["name", "typeper", "type", "id", "row", "url", "emoji", "mode", "time", "actions", "val1", "val2", "comparar", "formula"]' dialogResizable dialogTitle="Информация о Кнопке" dialogWidth="600" dialogHeight="600" listLabel="Кнопки" listStyle="height: calc(100vh - 310px);" itemName="Button" itemHeight="40px;" itemTextFunction="glob.formatItem2(data)" itemStyle="text-align: left; line-height: 40px;">
  <div style="padding: 16px;">

  <tab-system>

  <tab label="Действия" icon="list">

  <action-list-input mode="BUTTON" id="actions" height="calc(100vh - 180px)"></action-list-input>
  </tab>

  <tab label="Конфигурация кнопки" icon="cogs">
  <div style="height: calc(100vh - 138px);overflow-y: scroll;overflow-x: hidden;width:100%">

  <div style="padding: 8px;background:rgba(0,0,0,0.3)">
  <span class="dbminputlabel">Параметры отображения кнопки</span><br>
  <select id="formula" class="round">
 
  <option value="0" selected>Всегда отображать кнопку</option>
  <option value="1">Отобразить кнопку, если получено значение False</option>
  <option value="2">Отобразить кнопку, если получено значение True</option>
  <option value="3">Отключить кнопку, если получено значение False</option>
  <option value="4">Отключить кнопку, если получено значение True</option>
  <option value="5">Отключить кнопку</option>
</select>

<br>

          <table style="width: 100%;">
            <tr>
              <td style="width:33%">
                <span class="dbminputlabel">Значение A</span>
                <input id="val1" class="round" type="text">
              </td>
              <td style="width:33%;padding:0px 6px 0px 6px">
                <span class="dbminputlabel">Сравнение</span><br>
                <select id="comparar" class="round">
                  <optgroup label="Число или Текст">
                    <option value="0">Значение A - Существует</option>
                    <option value="1" selected>Равно</option>
                    <option value="2">Абсолютно равно</option>
                  </optgroup>
                  <optgroup label="Число">
                    <option value="3">Меньше, чем</option>
                    <option value="13">Меньше или равно</option>
                    <option value="4">Больше, чем</option>
                    <option value="12">Больше или равно</option>
                    <option value="19">Значение A - Чётное число?</option>
                    <option value="20">Значение A - Нечётное число?</option>
                    <option value="21">Значение A - Число?</option>
                  </optgroup>
                  <optgroup label="Текст">
                    <option value="6">Соответствует регулярному выражению</option>
                    <option value="14">Соответствует полному регулярному выражению</option>
                    <option value="7">Длина больше, чем</option>
                    <option value="8">Длина меньше, чем</option>
                    <option value="9">Длина равна</option>
                    <option value="10">Начинается с</option>
                    <option value="11">Заканчивается на</option>
                    <option value="16">Значение A - Содержит акценты?</option>
                    <option value="18">Равно словам ["a", "b", "c"]</option>
                    <option value="24">Значение A - Текст?</option>
                    <option value="23">Значение A - URL изображения?</option>
                    <option value="25">Значение A - URL?</option>
                    <option value="26">Значение A - Электронная почта существует?</option>
                  </optgroup>
                  <optgroup label="Текст ~ Содержит">
                    <option value="5">Точно содержит</option>
                    <option value="29">Содержит ~ Без учёта регистра</option>
                    <option value="30">Содержит ~ Без учёта акцентов</option>
                    <option value="31">Содержит ~ Без учёта акцентов и регистра</option>
                    <option value="17">Точно содержит ["a" , "b" , "c"]</option>
                    <option value="27">Содержит какой-либо URL?</option>
                    <option value="28">Содержит приглашение Discord?</option>
                    <option value="32">Точно содержит слово</option>
                    <option value="33">Содержит слово ~ Без учёта регистра</option>
                    <option value="34">Содержит слово ~ Без учёта акцентов</option>
                    <option value="35">Содержит слово ~ Без учёта акцента и регистра</option>
                    <option value="36">Содержит слова ~ используйте запятые ~ Без учета акцентов и регистра</option>
                  </optgroup>
                  <optgroup label="Другое">
                    <option value="22">Значение A - Список?</option>
                  </optgroup>
                </select>
              </td>
              <td  style="width:33%">
                <span class="dbminputlabel">Значение B</span><br>
                <input id="val2" class="round" type="text">
              </td>
            </tr>
          </table>


    </div>
<br>

    <div style="width: calc(50%); float: left;">
      <span class="dbminputlabel">Имя</span>
      <input id="name" class="round" type="text">

      <br>

    <table style="width:100%"><tr><td id="bxin1">
      <span class="dbminputlabel">Тип кнопки</span><div style="float:right;margin-top:-5px"><a style="cursor:pointer" onclick="(function(){
        document.getElementById('bxin1').style.display = 'none';
        document.getElementById('bxin2').style.display = 'block';
       })()"><button class="tiny compact ui icon button">Текст</button></a></div><br>
      <select id="type" class="round">
        <option value="PRIMARY" selected>PRIMARY (Синий)</option>
        <option value="SECONDARY">SECONDARY (Серый)</option>
        <option value="SUCCESS">SUCCESS (Зелёный)</option>
        <option value="DANGER">DANGER (Красный)</option>
        <option value="LINK">LINK (Серый)</option>
      </select></td><td id="bxin2" style="display:none"><span class="dbminputlabel">Тип / Переменная</span><div style="float:right;margin-top:-5px"><a style="cursor:pointer" onclick="(function(){
        document.getElementById('bxin2').style.display = 'none';
        document.getElementById('bxin1').style.display = 'block';
         })()"><button class="tiny compact ui icon button">Меню</button></a></div><br><input placeholder="Оставьте пустым для использования меню" id="typeper" class="round" type="text"></td></tr></table>


      <br>

      <span class="dbminputlabel">Ссылка URL</span>
      <input id="url" placeholder="Только для типа кнопки: LINK" class="round" type="text">

      <br>

      <span class="dbminputlabel">
      Режим ответа действия
        <help-icon type="ACTION_RESPONSE_MODE"></help-icon>
      </span><br>
      <select id="mode" class="round">
      <option value="PERSONAL">Разовая, только для командного пользователя</option>
      <option value="PUBLIC">Разовая, каждый может использовать</option>
      <option value="MULTIPERSONAL">Многоразовая, только для командного пользователя</option>
      <option value="MULTI" selected>Многоразовая, каждый может использовать</option>
      <option value="PERSISTENT">Бесконечная</option>
      </select>
    </div>
    <div style="width: calc(50% - 12px); float: right;">
      <span class="dbminputlabel">Уникальный ID</span>
      <input id="id" placeholder="Оставьте пустым для авто-генерации" class="round" type="text">

      <br>

      <span class="dbminputlabel">Линия действия (1 - 5)</span>
      <input id="row" placeholder="Не обязательное поле" class="round" type="text">

      <br>

      <span class="dbminputlabel">Эмодзи</span>
      <input id="emoji" placeholder="Не обязательное поле" class="round" type="text">

      <br>

      <span class="dbminputlabel">Ограничение по времени (мс)</span>
      <input id="time" placeholder="1мин = 60000мс" class="round" type="text">
      
      </div>
      </div>
    </tab>
    </tab-system>

  </div>
</dialog-list>

    </div>
  </tab>


  <tab label="Меню" icon="list alternate">
  <div style="width: 100%; padding:8px;height: calc(100vh - 250px);overflow:auto">

      <dialog-list id="selectMenus" fields='["placeholder", "id", "tempVarName", "row", "min", "max", "mode", "time", "options", "actions", "disabled"]' dialogTitle="Информация о Меню" dialogWidth="800" dialogHeight="700" listLabel="Меню" listStyle="height: calc(100vh - 310px);" itemName="Меню" itemCols="1" itemHeight="80px;" itemTextFunction="glob.formatItem3(data)" itemStyle="text-align: left; line-height: 40px;">
        <div style="padding: 16px;">
          <div style="width: calc(33% - 16px); float: left; margin-right: 16px;">
            <span class="dbminputlabel">Имя меню</span>
            <input id="placeholder" class="round" type="text">

            <br>

            <span class="dbminputlabel">Имя временной переменной</span>
            <input id="tempVarName" placeholder="Хранит выбранное значение" class="round" type="text">

            <br>

            <span class="dbminputlabel">Мин. вариантов выбора</span>
            <input id="min" class="round" type="text" value="1">

            <br>

            <span class="dbminputlabel">
            Режим ответа действия
              <help-icon type="ACTION_RESPONSE_MODE"></help-icon>
            </span><br>
            <select id="mode" class="round">
            <option value="PERSONAL">Разовая, только для командного пользователя</option>
            <option value="PUBLIC">Разовая, каждый может использовать</option>
            <option value="MULTIPERSONAL">Многоразовая, только для командного пользователя</option>
            <option value="MULTI" selected>Многоразовая, каждый может использовать</option>
            <option value="PERSISTENT">Бесконечная</option>
            </select>

            <dbm-checkbox id="disabled" style="margin-top: 15px;" label="Отключить меню"></dbm-checkbox>
          </div>
          <div style="width: calc(33% - 16px); float: left; margin-right: 16px;">
            <span class="dbminputlabel">Уникальный идентефикатор (ID)</span>
            <input id="id" placeholder="Оставьте пустым для авто-генерации" class="round" type="text">

            <br>

            <span class="dbminputlabel">Линия действия (1 - 5)</span>
            <input id="row" placeholder="Не обязательное поле" class="round" type="text">

            <br>

            <span class="dbminputlabel">Макс. вариантов выбора</span>
            <input id="max" class="round" type="text" value="1">

            <br>

            <span class="dbminputlabel">Ограничение по времени (мс)</span>
            <input id="time" placeholder="1мин = 60000мс" class="round" type="text">
          </div>
          <div style="width: calc(34% - 8px); height: 300px; float: left; margin-left: 8px;">

            <dialog-list id="options" fields='["label", "description", "value", "emoji", "default", "val1", "val2", "comparar", "formula"]' dialogTitle="Информация о Меню" dialogWidth="460" dialogHeight="570" listLabel="Options" listStyle="height: 210px;" itemName="Option" itemCols="1" itemHeight="20px;" itemTextFunction="'[ ' + (data.formula || 'Exibir') + ' ] ' + data.label" itemStyle="text-align: left; line-height: 20px;">
            <div style="padding: 16px;background:rgba(0,0,0,0.3)">
                 <span class="dbminputlabel">Конфигурация отображения варианта выбора</span><br>
                 <select id="formula" class="round">
                 <option value="Отображать" selected>Всегда отображать вариант</option>
                 <option value="Ложь">Отобразить вариант, если получено значение False</option>
                 <option value="Истина">Отобразить вариант, если получено значение True</option>
               </select>
               <br>

              <table style="width: 100%;">
                  <tr>
                    <td>
                      <span class="dbminputlabel">Значение A</span>
                      <input id="val1" class="round" type="text">
                    </td>
                    <td>
                      <span class="dbminputlabel">Сравнение</span><br>
                      <select id="comparar" class="round">
                      <optgroup label="Число или Текст">
                        <option value="0">Значение A - Существует</option>
                        <option value="1" selected>Равно</option>
                        <option value="2">Абсолютно равно</option>
                      </optgroup>
                      <optgroup label="Число">
                        <option value="3">Меньше, чем</option>
                        <option value="13">Меньше или равно</option>
                        <option value="4">Больше, чем</option>
                        <option value="12">Больше или равно</option>
                        <option value="19">Значение A - Чётное число?</option>
                        <option value="20">Значение A - Нечётное число?</option>
                        <option value="21">Значение A - Число?</option>
                      </optgroup>
                      <optgroup label="Текст">
                        <option value="6">Соответствует регулярному выражению</option>
                        <option value="14">Соответствует полному регулярному выражению</option>
                        <option value="7">Длина больше, чем</option>
                        <option value="8">Длина меньше, чем</option>
                        <option value="9">Длина равна</option>
                        <option value="10">Начинается с</option>
                        <option value="11">Заканчивается на</option>
                        <option value="16">Значение A - Содержит акценты?</option>
                        <option value="18">Равно словам ["a", "b", "c"]</option>
                        <option value="24">Значение A - Текст?</option>
                        <option value="23">Значение A - URL изображения?</option>
                        <option value="25">Значение A - URL?</option>
                        <option value="26">Значение A - Электронная почта существует?</option>
                      </optgroup>
                      <optgroup label="Текст ~ Содержит">
                        <option value="5">Точно содержит</option>
                        <option value="29">Содержит ~ Без учёта регистра</option>
                        <option value="30">Содержит ~ Без учёта акцентов</option>
                        <option value="31">Содержит ~ Без учёта акцентов и регистра</option>
                        <option value="17">Точно содержит ["a" , "b" , "c"]</option>
                        <option value="27">Содержит какой-либо URL?</option>
                        <option value="28">Содержит приглашение Discord?</option>
                        <option value="32">Точно содержит слово</option>
                        <option value="33">Содержит слово ~ Без учёта регистра</option>
                        <option value="34">Содержит слово ~ Без учёта акцентов</option>
                        <option value="35">Содержит слово ~ Без учёта акцента и регистра</option>
                        <option value="36">Содержит слова ~ используйте запятые ~ Без учета акцентов и регистра</option>
                      </optgroup>
                      <optgroup label="Другое">
                        <option value="22">Значение A - Список?</option>
                      </optgroup>
                      </select>
                    </td>
                    <td>
                      <span class="dbminputlabel">Значение B</span><br>
                      <input id="val2" class="round" type="text">
                    </td>
                  </tr>
                </table>

        </div>
        <div style="padding: 16px">
                <span class="dbminputlabel">Имя</span>
                <input id="label" class="round" type="text">

                <br>

                <span class="dbminputlabel">Описание</span>
                <input id="description" class="round" type="text">

                <br>

                <span class="dbminputlabel">Значение</span>
                <input id="value" placeholder="Передаётся в переменную" class="round" type="text">

                <br>

                <span class="dbminputlabel">Эмодзи</span>
                <input id="emoji" placeholder="Не обязательное поле" class="round" type="text">

                <br>

                <span class="dbminputlabel">Выбрано по умолчанию</span><br>
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
  <div style="width: 100%; padding:8px;height: calc(100vh - 250px);overflow:auto">

      <dialog-list id="attachments" fields='["tipo", "url", "canvasvar", "canvasnome", "compress", "name", "spoiler","formula","val1","comparar","val2"]' dialogTitle="Информация о Вложении" dialogWidth="550" dialogHeight="560" listLabel="Файлы" listStyle="height: calc(100vh - 310px);" itemName="File" itemCols="1" itemHeight="30px;" itemTextFunction="glob.formatItem(data)" itemStyle="text-align: left; line-height: 30px;">
        <div style="padding: 16px;" onmouseover="(function(){

          var aselect = document.getElementById('tipo');
            var avalue = aselect.options[aselect.selectedIndex].value

            var aselect2 = document.getElementById('formula');
            var avalue2 = aselect2.options[aselect2.selectedIndex].value
            if (avalue2 == 1 || avalue2 == 2) {
              document.getElementById('xinxyla4').style.display = 'block';
            } else
            {
              document.getElementById('xinxyla4').style.display = 'none';
            }
        
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
    
    if (avalue == 2 || avalue == 3) {
      document.getElementById('xinxyla2').style.display = 'none';
      document.getElementById('xinxyla1').style.display = 'block';
      document.getElementById('xinxyla3').style.display = 'none';
    } 

        
        })()">

        <div style="width: 100%; padding:5px 5px;height: calc(100vh - 80px);overflow:auto">
        <div style="padding: 6px; background: rgba(0, 0, 0, 0.3);">
        <span class="dbminputlabel">Условие</span>
        <select id="formula" class="round" onchange="(function(){
          var aselect = document.getElementById('tipo');
            var avalue = aselect.options[aselect.selectedIndex].value;
            var aselect2 = document.getElementById('formula');
            var avalue2 = aselect2.options[aselect2.selectedIndex].value;
            if (avalue2 == 1 || avalue2 == 2) {
              document.getElementById('xinxyla4').style.display = 'block';
            } else
            {
              document.getElementById('xinxyla4').style.display = 'none';
            }
        
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
    
    if (avalue == 2 || avalue == 3) {
      document.getElementById('xinxyla2').style.display = 'none';
      document.getElementById('xinxyla1').style.display = 'block';
      document.getElementById('xinxyla3').style.display = 'none';
    }      
        
        })()">

          <option value="0" selected>Всегда отправлять файл</option>
          <option value="1">Отправить файл, если получено значение False</option>
          <option value="2">Отправить файл, если получено значение True</option>
        </select>
        <br>
        <div id="xinxyla4">
        <table style="width: 100%;">
          <tr>
            <td style="width:33%">
              <span class="dbminputlabel">Значение A</span>
              <input id="val1" class="round" type="text">
            </td>
            <td style="width:33%;padding:0px 6px 0px 6px">
            <span class="dbminputlabel">Сравнение</span><br>
            <select id="comparar" class="round">
            <optgroup label="Число или Текст">
              <option value="0">Значение A - Существует</option>
              <option value="1" selected>Равно</option>
              <option value="2">Абсолютно равно</option>
            </optgroup>
            <optgroup label="Число">
              <option value="3">Меньше, чем</option>
              <option value="13">Меньше или равно</option>
              <option value="4">Больше, чем</option>
              <option value="12">Больше или равно</option>
              <option value="19">Значение A - Чётное число?</option>
              <option value="20">Значение A - Нечётное число?</option>
              <option value="21">Значение A - Число?</option>
            </optgroup>
            <optgroup label="Текст">
              <option value="6">Соответствует регулярному выражению</option>
              <option value="14">Соответствует полному регулярному выражению</option>
              <option value="7">Длина больше, чем</option>
              <option value="8">Длина меньше, чем</option>
              <option value="9">Длина равна</option>
              <option value="10">Начинается с</option>
              <option value="11">Заканчивается на</option>
              <option value="16">Значение A - Содержит акценты?</option>
              <option value="18">Равно словам ["a", "b", "c"]</option>
              <option value="24">Значение A - Текст?</option>
              <option value="23">Значение A - URL изображения?</option>
              <option value="25">Значение A - URL?</option>
              <option value="26">Значение A - Электронная почта существует?</option>
            </optgroup>
            <optgroup label="Текст ~ Содержит">
              <option value="5">Точно содержит</option>
              <option value="29">Содержит ~ Без учёта регистра</option>
              <option value="30">Содержит ~ Без учёта акцентов</option>
              <option value="31">Содержит ~ Без учёта акцентов и регистра</option>
              <option value="17">Точно содержит ["a" , "b" , "c"]</option>
              <option value="27">Содержит какой-либо URL?</option>
              <option value="28">Содержит приглашение Discord?</option>
              <option value="32">Точно содержит слово</option>
              <option value="33">Содержит слово ~ Без учёта регистра</option>
              <option value="34">Содержит слово ~ Без учёта акцентов</option>
              <option value="35">Содержит слово ~ Без учёта акцента и регистра</option>
              <option value="36">Содержит слова ~ используйте запятые ~ Без учета акцентов и регистра</option>
            </optgroup>
            <optgroup label="Другое">
              <option value="22">Значение A - Список?</option>
            </optgroup>
              </select>
            </td>
            <td style="width:33%">
              <span class="dbminputlabel">Значение B</span><br>
              <input id="val2" class="round" type="text">
            </td>
          </tr>
        </table><br>
</div>
  
      </div>
      


        <span class="dbminputlabel">Тип вложения</span>
        <select id="tipo" class="round" onchange="(function(){

          var aselect = document.getElementById('tipo');
            var avalue = aselect.options[aselect.selectedIndex].value

            var aselect2 = document.getElementById('formula');
            var avalue2 = aselect2.options[aselect2.selectedIndex].value
            if (avalue2 == 1 || avalue2 == 2) {
              document.getElementById('xinxyla4').style.display = 'block';
            } else
            {
              document.getElementById('xinxyla4').style.display = 'none';
            }
        
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
    
    if (avalue == 2 || avalue == 3) {
      document.getElementById('xinxyla2').style.display = 'none';
      document.getElementById('xinxyla1').style.display = 'block';
      document.getElementById('xinxyla3').style.display = 'none';
    }      
        
        })()">
          <option value="0">Локальный/Веб-адрес URL</option>
          <option value="1">Canvas</option>
          <option value="2">DBM изображение</option>
          <option value="3">Отправить переменную</option>
        </select>
        <br><div id="xinxyla2">
          <span class="dbminputlabel">Локальный/Веб-адрес URL</span>
          <input id="url" class="round" type="text" value="resources/">

          <br></div>
          <div id="xinxyla1">
          <span class="dbminputlabel">Тип переменной</span><br>
    <select id="canvasvar" class="round">
      ${data.variables[1]}
    </select>
<br>
          <span class="dbminputlabel">Имя переменной</span>
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

          <span class="dbminputlabel">Имя файла</span>
          <input id="name" class="round" type="text" placeholder="Не обязательное поле">

          <br>

          <div style="text-align: center; padding-top: 4px;">
            <dbm-checkbox id="spoiler" label="Отправить как спойлер"></dbm-checkbox>
          </div>
          <br>
        </div>
        </div>
      </dialog-list>
    </div>
  </tab>


  <tab label="Конфиг" icon="cogs">
    <div style="width: 100%; padding:8px;height: calc(100vh - 250px);overflow-y: scroll;overflow-x: hidden;">
    <div style="padding-bottom: 12px;padding-top: 12px">
    <table style="width:100%;"><tr>
    <td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Не обязательное поле"></td>
    <td style="padding:0px 0px 0px 10px;width:55px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
    </tr></table>
    </div>

    <div id="xincheck">
    <div style="padding:10px">
      <dbm-checkbox id="di" label="Отсоединить от Start Thinking"></dbm-checkbox>
      <xinspace>
      <dbm-checkbox id="reply" label="Ответить на взаимодействие, если возможно" checked></dbm-checkbox>
      <xinspace>
      <dbm-checkbox id="ephemeral" label="Сделать ответ приватным"></dbm-checkbox>
      <xinspace>
      <dbm-checkbox id="tts" label="Текст в Речь"></dbm-checkbox>
      <xinspace>
      <dbm-checkbox id="overwrite" label="Заменить изменения"></dbm-checkbox>
      <xinspace>
      <dbm-checkbox id="dontSend" label="Не отправлять сообщение"></dbm-checkbox>
      <xinspace>
      <dbm-checkbox id="errcmd" label="Вывести ошибку в консоль" checked></dbm-checkbox>
      <xinspace>
      <dbm-checkbox id="removeComps" label="Удалить или не отправлять кнопки/меню"></dbm-checkbox>
      <xinspace>
      <dbm-checkbox id="removeEmbeds" label="Удалить или не отправлять Эмбеды"></dbm-checkbox>
      <xinspace>
      <dbm-checkbox id="removeAttachments" label="Удалить или не отправлять вложения"></dbm-checkbox>
      <xinspace>
      <dbm-checkbox id="removeCompsE" label="Удалить кнопки/меню только при редактировании сообщения"></dbm-checkbox>
      <xinspace>
      <dbm-checkbox id="removeEmbedsE" label="Удалить встроенные элементы только при редактировании сообщения"></dbm-checkbox>
      <xinspace>
      <dbm-checkbox id="removeAttachmentsE" label="Удалить вложения только при редактировании сообщения"></dbm-checkbox>
   
      </div><br></div>
      
      <div style="width:96%;display:block">
      <div style="padding-bottom: 12px;" id="xin1">
        <retrieve-from-variable allowNone dropdownLabel="Отредактировать" selectId="editMessage" variableInputId="editMessageVarName" variableContainerId="editMessageVarNameContainer">
          <option value="intUpdate">Обновления взаимодействия</option>
        </retrieve-from-variable>
      

      <br><br></div>

   
      <div style="padding-top: 12px">
        <store-in-variable allowNone dropdownLabel="Хранить в" selectId="storage" variableInputId="varName2" variableContainerId="varNameContainer2"></store-in-variable>
      </div>

      <br><br><br>

      <div>
      <div style="float: left; width: 38%; padding-top: 5px">
      <span class="dbminputlabel">Отправить как WebHook</span><br>
      <select id="storagewebhook" class="round" onchange="glob.onComparisonChanged2(this)">
      <option value="0" selecionado>Нет</option>
      <option value="4">URL WebHook</option>
      <option value="1">Временная переменная</option>
      <option value="2">Серверная переменная</option>
      <option value="3">Глобальная переменная</option>
    </select>
    </div>
    <div id="webhookdiv" style="display: none; float: right; width: 60%; padding-top: 5px"><span id="ifName" class="dbminputlabel">Имя переменной</span><br><input list="variableList" id="varwebhook" class="round" name="actionxinxyla" type="text"></div>
    <div id="webhookdiv2" style="display: none;padding-top: 12px;">
    <br><br><br>
    <span class="dbminputlabel">Редактировать WebHook / ID сообщения</span><br>
    <input id="editweb" class="round" type="text" style="width:100%" placeholder="Оставьте пустым только для отправки">
    <span style="margin-bottom:-50px;"></span>
    <br>
    <span class="dbminputlabel">Имя WebHook'a</span><br>
    <input id="webhookname" class="round" type="text" style="width:100%" placeholder="Разово меняет имя WebHook'a">
    <br>
    <span class="dbminputlabel">URL-адрес аватарки WebHook'a</span><br>
    <input id="webhookavatar" class="round" type="text" style="width:100%" placeholder="Разово меняет аватар WebHook'a">
    </div>    


      <br><div id="corrigir"><br><br></div>
      <hr class="subtlebar" style="margin-top: 4px; margin-bottom: 4px">
      <div>

    <div id="divValueError" style="margin-top: 5px;">
      <div style="float: left; width: 38%;">
        <span class="dbminputlabel">Сохранить ошибку в</span>
        <select id="storageError" class="round" onchange="glob.variableChangeError(this, 'varNameContainer')">
          ${data.variables[0]}
        </select>
      </div>
    
      <div id="varNameContainerError" style="float: right; display: none; width: 60%;">
        <span class="dbminputlabel">Имя переменной</span>
        <input id="varNameError" class="round" type="text">
      </div>
    </div>

      </div>

      <br><br><br>

   
    <div id="divValueError2" style="float: left; width: 38%">
      <span class="dbminputlabel">Если возникает ошибка</span><br>
      <select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
        <option value="0">Продолжить действия</option>
        <option value="1" selecionado>Остановить последовательность действий</option>
        <option value="2">Перейти к действию</option>
        <option value="3">Пропустить следующие действия</option>
        <option value="4">Перейти к якорю</option>
        <option value="5">Выполнить действия и остановиться</option>
        <option value="99">Выполнить действия и продолжить</option>
      </select>
    </div>

    <div id="iffalseContainer" style="display: none; float: right; width: 55%;">
      <span id="xinelasT" class="dbminputlabel">Для</span>
      <input id="iffalseVal" class="round" type="text">
    </div>

    <action-list-input id="actionsError" style="margin-top: 50px;" height="calc(100vh - 430px)"></action-list-input>
              
    <br>

    </div>
  </tab>
</tab-system></div>

<style>
xinspace{padding:5px 0px 0px 0px;display:block}
.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}
</style>`;
  },

  init: function () {
    const { glob, document } = this;

    const textarea = document.getElementById('message');
    const contador = document.getElementById('contador');
    const comprimentoTexto = textarea.value.length;
    contador.textContent = `${comprimentoTexto} символов`;
    textarea.addEventListener('input', () => {
      const comprimentoTexto = textarea.value.length;
      contador.textContent = `${comprimentoTexto} символов`;
    });


    glob.onComparisonChanged = function (event) {
      if (event.value == "0" || event.value == "1" || event.value == "7") {
        document.getElementById("iffalseContainer").style.display = "none";
        document.getElementById("actionsError").style.display = "none";
      } else if (event.value == "5" || event.value == "99") {
        document.getElementById("iffalseContainer").style.display = "none";
        document.getElementById("actionsError").style.display = null;
      } else {
        document.getElementById("iffalseContainer").style.display = null;
        document.getElementById("actionsError").style.display = "none";
      }

      if (event.value > "4") {
        document.getElementById("divValueError").style.marginTop = "0px";
      } else {
        document.getElementById("divValueError").style.marginTop = "10px";
      }

      if (event.value == "2") {
        document.querySelector("[id='xinelasT']").innerText = "Номер действия";
      }

      if (event.value == "3") {
        document.querySelector("[id='xinelasT']").innerText = "Пропустить действия";
      }

      if (event.value == "4") {
        document.querySelector("[id='xinelasT']").innerText = "Имя якоря";
      }
    }

    glob.variableChangeError = function (event) {
      if (event.value == "0") {
        document.getElementById("varNameContainerError").style.display = "none";
      } else {
        document.getElementById("varNameContainerError").style.display = null;
      }
    }

    glob.onComparisonChanged2 = function (event) {
      if (event.value > "0") {
        document.getElementById("webhookdiv").style.display = null;
        document.getElementById("webhookdiv2").style.display = null;
        document.getElementById("xincheck").style.display = "none";
        document.getElementById("xin1").style.display = "none";
        document.getElementById("xin2").style.display = "none";
        document.getElementById("xin3").style.display = "block";
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
        document.getElementById("corrigir").style.display = "none";

        if (event.value == "4") {
          const myvarwebhook = document.querySelector("#varwebhook")
          myvarwebhook.setAttribute('list', 'none')
          document.querySelector("[id='ifName']").innerText = "URL";
        } else {
          const myvarwebhook = document.querySelector("#varwebhook")
          myvarwebhook.setAttribute('list', 'variableList')
          document.querySelector("[id='ifName']").innerText = "Имя переменной";
        }

      } else {
        document.getElementById("webhookdiv").style.display = "none";
        document.getElementById("webhookdiv2").style.display = "none";
        document.getElementById("xincheck").style.display = null;
        document.getElementById("xin1").style.display = null;
        document.getElementById("xin2").style.display = "block";
        document.getElementById("xin3").style.display = "none";
        document.getElementById("corrigir").style.display = "block";
      }
    }

    glob.onComparisonChanged2(document.getElementById("storagewebhook"));
    glob.onComparisonChanged(document.getElementById("iffalse"));

    glob.variableChangeError(document.getElementById("storageError"));

    glob.formatItem = function (data) {
      let result = '<div style="display: inline-block;width: calc(100% - 5px); padding-left: 8px;">';
      const comp = data.tipo;
      switch (comp) {
        case "0":
          result += "Файл: " + data.url;
          break;
        case "1":
          result += "Canvas: " + data.canvasnome;
          break;
        case "2":
          result += "DBM изображение: " + data.canvasnome;
          break;
        case "3":
          result += "Отправить переменную: " + data.canvasnome;
          break;
      }
      result += (data.formula == 1 || data.formula == 2 ? '<div style="float:right" title="Condição ligada">🔘 </div>' : '') + "</div>";
      return result;
    }

    glob.formatItem2 = function (data) {
      let setcor = ""
      if (data.type == "PRIMARY") { setcor = "rgb(88,101,242)" }
      if (data.type == "SECONDARY" || data.type == "LINK") { setcor = "rgb(78,80,88)" }
      if (data.type == "SUCCESS") { setcor = "rgb(36,128,70)" }
      if (data.type == "DANGER") { setcor = "rgb(218,55,60)" }
      let result = '<div style="display: inline-block; width: 100%;"><div style="width:10px;background:' + setcor + ';float:left;margin-left:-10px"><br></div><table style="margin-left:10px"><tr><td style="width:100%">';
      const comp = "0";
      switch (comp) {
        case "0":
          result += data.emoji + ' ' + data.name;
          break;
      }
      result += "</td><td style='width:120px;text-align:right;padding:0px 10px 0px 0px'>" + data.id + (data.formula == 1 || data.formula == 2 ? '<span title="Condição ligada"> 🔘 </span>' : '') + "</td></tr></table></div>";
      return result;
    }

    glob.formatItem3 = function (data) {
      let result = '<div style="display: inline-block; width: 100%; padding-left: 8px"><div style="float:left;width: calc(100% - 200px);overflow: hidden;">Имя: ';
      const comp = "0";
      switch (comp) {
        case "0":
          result += data.placeholder;
          break;
      }
      result += "<br>Переменная " + data.tempVarName + "</div><div style='float:right;width:190px;text-align:right;padding:0px 10px 0px 0px'>" + data.id + "<br>Опции: " + data.options.length + " / 25</div></div>";
      return result;
    }

    const xinelaslinks = document.getElementsByClassName('xinelaslink');
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

  },

  onSave(data, helpers) {

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


  async action(cache) {
    const _this = this;
    const data = cache.actions[cache.index];
    var messageoff = data.messageoff;
    if (messageoff == undefined) messageoff = true;
    const channel = parseInt(data.channel, 10);
    const message = this.evalMessage(data.message, cache);
    const storagewebhook = parseInt(data.storagewebhook)
    const webhookname = this.evalMessage(data.webhookname, cache)
    const webhookavatar = this.evalMessage(data.webhookavatar, cache)
    if (storagewebhook > 0) {
      varwebhook = this.evalMessage(data.varwebhook, cache)

      if (storagewebhook == 4) {
        const { DiscordJS } = this.getDBM();
        webhook = new DiscordJS.WebhookClient({ url: varwebhook });
      } else {
        Mods = this.getMods()
        webhook = Mods.getWebhook(storagewebhook, varwebhook, cache)
      }

    }
    if (data.channel === undefined || message === undefined) {
      return;
    }

    let target = await this.getSendReplyTarget(channel, this.evalMessage(data.varName, cache), cache);

    let messageOptions = {};

    const overwrite = data.overwrite;

    let isEdit = 0;
    if (data.editMessage === "intUpdate") {
      if (cache.interaction?.replied && cache.interaction?.editReply) {
        isEdit = 2;
      } else if (cache?.interaction?.update) {
        isEdit = 2;
      }
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
    if (messageoff == true) content = message.length > 0 ? message : null;

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

        if (embedData.formula == "1" || embedData.formula == "2") {
          const comparar = parseInt(embedData.comparar, 10);
          val1 = this.evalMessage(embedData.val1, cache);
          val2 = this.evalMessage(embedData.val2, cache);

          switch (comparar) {
            case 0:
              result = val1 !== undefined;
              break;
            case 1:
              result = val1 == val2;
              break;
            case 2:
              result = val1 === val2;
              break;
            case 3:
              result = val1 < val2;
              break;
            case 4:
              result = val1 > val2;
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
              result = Boolean(val1.toString().match(new RegExp(val2)));
              break;
            case 16:
              const conditions = ["Ä", "Å", "Á", "Â", "À", "Ã", "Ā", "Ă", "Ą", "ā", "ă", "ą", "ä", "á", "â", "à", "ã", "É", "Ê", "Ë", "È", "Ė", "Ę", "Ě", "Ĕ", "Ē", "ė", "ę", "ě", "ĕ", "ē", "é", "ê", "ë", "è", "Í", "Î", "Ï", "Ì", "İ", "Į", "Ī", "ı", "į", "ī", "í", "î", "ï", "ì", "Ö", "Ó", "Ô", "Ò", "Õ", "Ő", "Ō", "ő", "ō", "ö", "ó", "ô", "ò", "õ", "Ü", "Ú", "Û", "Ų", "Ű", "Ů", "Ū", "ų", "ű", "ů", "ū", "ü", "ú", "û", "ù", "Ç", "Ć", "Č", "ç", "ć", "č", "Ñ", "Ň", "Ņ", "Ń", "ñ", "ň", "ņ", "ń", "Ÿ", "Ý", "ý", "Ź", "Ż", "Ž", "ź", "ż", "ž", "Ł", "Ľ", "Ļ", "Ĺ", "ł", "ľ", "ĺ", "Ķ", "ķ", "Ģ", "Ğ", "ģ", "ğ", "Ď", "ď", "Ś", "Š", "Ş", "ś", "š", "ş", "Ť", "Ț", "Ţ", "ť", "ț", "ţ", "Ŕ", "Ř", "ŕ", "ř"]
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
            case 22:
              result = Boolean(Array.isArray(val1));
              break;
            case 23:
              const isImageUrl = require("is-image-url");
              result = isImageUrl(val1);
              break;
            case 24:
              result = typeof val1 === "string";
              break;
            case 25:
              const isUrl = require("is-url");
              result = isUrl(val1);
              break;
            case 26:
              const mail = require("email-existence");
              mail.check(val1, (error, response) => {
                result = response;
              });
              break;
            case 27:
              let pattern = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
              result = val1.match(pattern);
              break;
            case 28:
              invite = new RegExp(/(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z]/g);
              result = invite.test(val1);
              break;
            case 29:
              result = val1.toLowerCase().includes(val2.toLowerCase());
              break;
            case 30:
              tratarval1 = val1.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              tratar = val2.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              result = tratarval1.includes(tratar);
              break;
            case 31:
              tratarval1 = val1.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              tratar = val2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              result = tratarval1.toLowerCase().includes(tratar);
              break;
            case 32:
              var words = val1.split(" ");
              result = words.includes(val2);
              break;
            case 33:
              var words = val1.toLowerCase().split(" ");
              result = words.includes(val2.toLowerCase());
              break;
            case 34:
              var words = val1.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
              result = words.includes(val2.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
              break;
            case 35:
              var words = val1.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
              result = words.includes(val2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
              break;
            case 36:
              var separador = val1.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
              var valor2 = val2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(",");
              result = separador.some(els => valor2.includes(els));
              break;
          }

          if (embedData.formula == "1" && Boolean(result) != false) continue;
          if (embedData.formula == "2" && Boolean(result) != true) continue;
        }

        const embed = new MessageEmbed();
        if (embedData.title) embed.setTitle(this.evalMessage(embedData.title, cache));
        if (this.evalMessage(embedData.url, cache)) embed.setURL(this.evalMessage(embedData.url, cache));
        if (embedData.colorrandom == true) {
          embed.setColor("RANDOM");
        }
        if (embedData.color) {
          if (embedData.colorrandom == true) {
            embed.setColor("RANDOM");
          } else {
            embed.setColor(this.evalMessage(embedData.color, cache));
          }
        }

        if (embedData.timestamp == "true" || embedData.timestamp == true) {
          if (embedData.timestampper == "" || embedData.timestampper == undefined) {
            embed.setTimestamp()
          } else {
            embed.setTimestamp(parseFloat(this.evalMessage(embedData.timestampper, cache)))
          }
        }

        var imgURL = this.evalMessage(embedData.imageUrl, cache);

        if (imgURL) {
          if (imgURL.toString().startsWith("http")) {
            embed.setImage(imgURL);
          } else {
            embed.setImage("attachment://" + imgURL);
          }
        }

        var thumb = this.evalMessage(embedData.thumbUrl, cache);

        if (thumb) {
          if (thumb.toString().startsWith("http")) {
            embed.setThumbnail(thumb);
          } else {
            embed.setThumbnail("attachment://" + thumb);
          }
        }

        if (embedData.description) embed.setDescription(this.evalMessage(embedData.description || "\u200B", cache));

        if (embedData.fields?.length > 0) {
          const fields = embedData.fields;
          for (let i = 0; i < fields.length; i++) {
            const f = fields[i];

            val1 = this.evalMessage(f.val1, cache);
            val2 = this.evalMessage(f.val2, cache);
            result = true;

            if (f.formula == "1" || f.formula == "2") {
              const compare = parseInt(f.comparar, 10);
              if (compare !== 6) {
                val1 = this.evalIfPossible(val1, cache)
                val2 = this.evalIfPossible(val2, cache)
              }
              switch (compare) {
                case 0:
                  result = val1 !== undefined;
                  break;
                case 1:
                  result = val1 == val2;
                  break;
                case 2:
                  result = val1 === val2;
                  break;
                case 3:
                  result = val1 < val2;
                  break;
                case 4:
                  result = val1 > val2;
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
                  result = Boolean(val1.toString().match(new RegExp(val2)));
                  break;
                case 16:
                  const conditions = ["Ä", "Å", "Á", "Â", "À", "Ã", "Ā", "Ă", "Ą", "ā", "ă", "ą", "ä", "á", "â", "à", "ã", "É", "Ê", "Ë", "È", "Ė", "Ę", "Ě", "Ĕ", "Ē", "ė", "ę", "ě", "ĕ", "ē", "é", "ê", "ë", "è", "Í", "Î", "Ï", "Ì", "İ", "Į", "Ī", "ı", "į", "ī", "í", "î", "ï", "ì", "Ö", "Ó", "Ô", "Ò", "Õ", "Ő", "Ō", "ő", "ō", "ö", "ó", "ô", "ò", "õ", "Ü", "Ú", "Û", "Ų", "Ű", "Ů", "Ū", "ų", "ű", "ů", "ū", "ü", "ú", "û", "ù", "Ç", "Ć", "Č", "ç", "ć", "č", "Ñ", "Ň", "Ņ", "Ń", "ñ", "ň", "ņ", "ń", "Ÿ", "Ý", "ý", "Ź", "Ż", "Ž", "ź", "ż", "ž", "Ł", "Ľ", "Ļ", "Ĺ", "ł", "ľ", "ĺ", "Ķ", "ķ", "Ģ", "Ğ", "ģ", "ğ", "Ď", "ď", "Ś", "Š", "Ş", "ś", "š", "ş", "Ť", "Ț", "Ţ", "ť", "ț", "ţ", "Ŕ", "Ř", "ŕ", "ř"]
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
                case 22:
                  result = Boolean(Array.isArray(val1));
                  break;
                case 23:
                  const isImageUrl = require("is-image-url");
                  result = isImageUrl(val1);
                  break;
                case 24:
                  result = typeof val1 === "string";
                  break;
                case 25:
                  const isUrl = require("is-url");
                  result = isUrl(val1);
                  break;
                case 26:
                  const mail = require("email-existence");
                  mail.check(val1, (error, response) => {
                    result = response;
                  });
                  break;
                case 27:
                  let pattern = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
                  result = val1.match(pattern);
                  break;
                case 28:
                  invite = new RegExp(/(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z]/g);
                  result = invite.test(val1);
                  break;
                case 29:
                  result = val1.toLowerCase().includes(val2.toLowerCase());
                  break;
                case 30:
                  tratarval1 = val1.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                  tratar = val2.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                  result = tratarval1.includes(tratar);
                  break;
                case 31:
                  tratarval1 = val1.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                  tratar = val2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                  result = tratarval1.toLowerCase().includes(tratar);
                  break;
                case 32:
                  var words = val1.split(" ");
                  result = words.includes(val2);
                  break;
                case 33:
                  var words = val1.toLowerCase().split(" ");
                  result = words.includes(val2.toLowerCase());
                  break;
                case 34:
                  var words = val1.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
                  result = words.includes(val2.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
                  break;
                case 35:
                  var words = val1.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
                  result = words.includes(val2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
                  break;
                case 36:
                  var separador = val1.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
                  var valor2 = val2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(",");
                  result = separador.some(els => valor2.includes(els));
                  break;
              }
            }

            if (f.formula == "1") {
              if (result == false) {
                result = true
              } else { result = false }
            }

            if (result == true) {
              embed.addFields({ name: this.evalMessage(f.name || '\u200B', cache), value: this.evalMessage(f.value || '\u200B', cache), inline: f.inline === "true" })
            };
          }
        }

        var authorIcon = this.evalMessage(embedData.authorIcon, cache) || null;
        var authorURL = this.evalMessage(embedData.authorUrl, cache) || null;

        if (!authorIcon?.toString().startsWith("http")) {
          authorIcon = "attachment://" + authorIcon;
        }

        if (embedData.author) {
          embed.setAuthor({
            name: this.evalMessage(embedData.author, cache),
            iconURL: authorIcon,
            url: authorURL,
          });
        }

        var iconURL = this.evalMessage(embedData.footerIconUrl, cache) || null;

        if (!iconURL?.toString().startsWith("http")) {
          iconURL = "attachment://" + iconURL;
        }

        if (embedData.footerText) {
          embed.setFooter({
            text: this.evalMessage(embedData.footerText, cache),
            iconURL: iconURL,
          });
        }

        messageOptions.embeds.push(embed);
      }
    }

    if (data.mentions == false) {
      messageOptions.allowedMentions = {};
      messageOptions.allowedMentions.repliedUser = [];
      messageOptions.allowedMentions.repliedUser = data.mentions;
    }

    let componentsArr = [];
    let awaitResponses = [];

    if (!overwrite && messageOptions.components?.length > 0) {
      componentsArr = messageOptions.components.map((comps) => {
        return comps.components;
      });
    }

    const defaultTime = 60000;

    if (Array.isArray(data.buttons)) {
      for (let i = 0; i < data.buttons.length; i++) {

        const botoesconfig = data.buttons;
        const fbot = botoesconfig[i];

        val1 = this.evalMessage(fbot.val1, cache);
        val2 = this.evalMessage(fbot.val2, cache);
        result = true;

        if (fbot.formula == "1" || fbot.formula == "2" || fbot.formula == "3" || fbot.formula == "4") {
          const compare = parseInt(fbot.comparar, 10);
          if (compare !== 6) {
            val1 = this.evalIfPossible(val1, cache)
            val2 = this.evalIfPossible(val2, cache)
          }
          switch (compare) {
            case 0:
              result = val1 !== undefined;
              break;
            case 1:
              result = val1 == val2;
              break;
            case 2:
              result = val1 === val2;
              break;
            case 3:
              result = val1 < val2;
              break;
            case 4:
              result = val1 > val2;
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
              result = Boolean(val1.toString().match(new RegExp(val2)));
              break;
            case 16:
              const conditions = ["Ä", "Å", "Á", "Â", "À", "Ã", "Ā", "Ă", "Ą", "ā", "ă", "ą", "ä", "á", "â", "à", "ã", "É", "Ê", "Ë", "È", "Ė", "Ę", "Ě", "Ĕ", "Ē", "ė", "ę", "ě", "ĕ", "ē", "é", "ê", "ë", "è", "Í", "Î", "Ï", "Ì", "İ", "Į", "Ī", "ı", "į", "ī", "í", "î", "ï", "ì", "Ö", "Ó", "Ô", "Ò", "Õ", "Ő", "Ō", "ő", "ō", "ö", "ó", "ô", "ò", "õ", "Ü", "Ú", "Û", "Ų", "Ű", "Ů", "Ū", "ų", "ű", "ů", "ū", "ü", "ú", "û", "ù", "Ç", "Ć", "Č", "ç", "ć", "č", "Ñ", "Ň", "Ņ", "Ń", "ñ", "ň", "ņ", "ń", "Ÿ", "Ý", "ý", "Ź", "Ż", "Ž", "ź", "ż", "ž", "Ł", "Ľ", "Ļ", "Ĺ", "ł", "ľ", "ĺ", "Ķ", "ķ", "Ģ", "Ğ", "ģ", "ğ", "Ď", "ď", "Ś", "Š", "Ş", "ś", "š", "ş", "Ť", "Ț", "Ţ", "ť", "ț", "ţ", "Ŕ", "Ř", "ŕ", "ř"]
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
            case 22:
              result = Boolean(Array.isArray(val1));
              break;
            case 23:
              const isImageUrl = require("is-image-url");
              result = isImageUrl(val1);
              break;
            case 24:
              result = typeof val1 === "string";
              break;
            case 25:
              const isUrl = require("is-url");
              result = isUrl(val1);
              break;
            case 26:
              const mail = require("email-existence");
              mail.check(val1, (error, response) => {
                result = response;
              });
              break;
            case 27:
              let pattern = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
              result = val1.match(pattern);
              break;
            case 28:
              invite = new RegExp(/(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z]/g);
              result = invite.test(val1);
              break;
            case 29:
              result = val1.toLowerCase().includes(val2.toLowerCase());
              break;
            case 30:
              tratarval1 = val1.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              tratar = val2.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              result = tratarval1.includes(tratar);
              break;
            case 31:
              tratarval1 = val1.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              tratar = val2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              result = tratarval1.toLowerCase().includes(tratar);
              break;
            case 32:
              var words = val1.split(" ");
              result = words.includes(val2);
              break;
            case 33:
              var words = val1.toLowerCase().split(" ");
              result = words.includes(val2.toLowerCase());
              break;
            case 34:
              var words = val1.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
              result = words.includes(val2.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
              break;
            case 35:
              var words = val1.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
              result = words.includes(val2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
              break;
            case 36:
              var separador = val1.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
              var valor2 = val2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(",");
              result = separador.some(els => valor2.includes(els));
              break;
          }
        }

        if (fbot.formula == "1") {
          if (result == false) {
            result = true;
          } else {
            result = false;
          }
        }


        if (result == true || fbot.formula == "3" || fbot.formula == "4" || fbot.formula == "5") {

          if (!data.buttons[i].name) data.buttons[i].name = "\u200b";


          data.buttons[i].disabled = false;

          if (fbot.formula == "3") {

            if (result == false) {
              result = true;
            } else {
              result = false;
            }

            if (result == true) {
              data.buttons[i].disabled = true;
            } else {
              data.buttons[i].disabled = false;
            }

          }
          if (fbot.formula == "4") {


            if (result == true) {
              data.buttons[i].disabled = true;
            } else {
              data.buttons[i].disabled = false;
            }

          }

          if (fbot.formula == "5") {

            data.buttons[i].disabled = true;

          }

          const button = data.buttons[i];
          if (button.typeper == "" || button.typeper == undefined) {
            button.type = this.evalMessage(button.type, cache);
          } else {
            check = this.evalMessage(button.typeper, cache);
            if (check == "PRIMARY" || check == "SECONDARY" || check == "SUCCESS" || check == "DANGER" || check == "LINK") {
              button.type = this.evalMessage(button.typeper, cache);
            }
          }
          const buttonData = this.generateButton(button, cache);
          buttonData.disabled = button.disabled;

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


    }

    if (Array.isArray(data.selectMenus)) {
      for (let i = 0; i < data.selectMenus.length; i++) {
        select = data.selectMenus[i];

        totales = data.selectMenus[i].options.length;

        if (select?.disabled) {
          select.disabled = true;
        } else {
          select.disabled = false;
        }

        for (let ix = 0; ix < totales; ix++) {
          val1 = this.evalMessage(data.selectMenus[i].options[ix].val1, cache);
          val2 = this.evalMessage(data.selectMenus[i].options[ix].val2, cache);

          select.options[ix].emoji = this.evalMessage(select.options[ix].emoji, cache);

          result = true;

          if (data.selectMenus[i].options[ix].formula == "Ложь" || data.selectMenus[i].options[ix].formula == "Истина") {
            compare = parseInt(data.selectMenus[i].options[ix].comparar, 10);
            if (compare !== 6) {
              val1 = this.evalIfPossible(val1, cache);
              val2 = this.evalIfPossible(val2, cache);
            }

            switch (compare) {
              case 0:
                result = val1 !== undefined;
                break;
              case 1:
                result = val1 == val2;
                break;
              case 2:
                result = val1 === val2;
                break;
              case 3:
                result = val1 < val2;
                break;
              case 4:
                result = val1 > val2;
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
                result = Boolean(val1.toString().match(new RegExp(val2)));
                break;
              case 16:
                const conditions = ["Ä", "Å", "Á", "Â", "À", "Ã", "Ā", "Ă", "Ą", "ā", "ă", "ą", "ä", "á", "â", "à", "ã", "É", "Ê", "Ë", "È", "Ė", "Ę", "Ě", "Ĕ", "Ē", "ė", "ę", "ě", "ĕ", "ē", "é", "ê", "ë", "è", "Í", "Î", "Ï", "Ì", "İ", "Į", "Ī", "ı", "į", "ī", "í", "î", "ï", "ì", "Ö", "Ó", "Ô", "Ò", "Õ", "Ő", "Ō", "ő", "ō", "ö", "ó", "ô", "ò", "õ", "Ü", "Ú", "Û", "Ų", "Ű", "Ů", "Ū", "ų", "ű", "ů", "ū", "ü", "ú", "û", "ù", "Ç", "Ć", "Č", "ç", "ć", "č", "Ñ", "Ň", "Ņ", "Ń", "ñ", "ň", "ņ", "ń", "Ÿ", "Ý", "ý", "Ź", "Ż", "Ž", "ź", "ż", "ž", "Ł", "Ľ", "Ļ", "Ĺ", "ł", "ľ", "ĺ", "Ķ", "ķ", "Ģ", "Ğ", "ģ", "ğ", "Ď", "ď", "Ś", "Š", "Ş", "ś", "š", "ş", "Ť", "Ț", "Ţ", "ť", "ț", "ţ", "Ŕ", "Ř", "ŕ", "ř"]
                result = conditions.some(el => val1.includes(el));
                break;
              case 17:
                const conditionsX = val2;
                result = conditionsX.some(els => val1.includes(els));
                break;
              case 18:
                const conditionsZ = val2;
                result = conditionsZ.some(elz => val1 == (elz));
                break;
              case 19:
                result = val1 % 2 == 0;
                break;
              case 20:
                result = val1 % 2 == 1;
                break;
              case 21:
                result = Boolean(!isNaN(parseFloat(val1.toString().replace(",", "."))));
                break;
              case 22:
                result = Boolean(Array.isArray(val1));
                break;
              case 23:
                const isImageUrl = require("is-image-url");
                result = isImageUrl(val1);
                break;
              case 24:
                result = typeof val1 === "string";
                break;
              case 25:
                const isUrl = require("is-url");
                result = isUrl(val1);
                break;
              case 26:
                const mail = require("email-existence");
                mail.check(val1, (error, response) => {
                  result = response;
                });
                break;
              case 27:
                let pattern = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
                result = val1.match(pattern);
                break;
              case 28:
                invite = new RegExp(/(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z]/g);
                result = invite.test(val1);
                break;
              case 29:
                result = val1.toLowerCase().includes(val2.toLowerCase());
                break;
              case 30:
                tratarval1 = val1.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                tratar = val2.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                result = tratarval1.includes(tratar);
                break;
              case 31:
                tratarval1 = val1.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                tratar = val2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                result = tratarval1.toLowerCase().includes(tratar);
                break;
              case 32:
                var words = val1.split(" ");
                result = words.includes(val2);
                break;
              case 33:
                var words = val1.toLowerCase().split(" ");
                result = words.includes(val2.toLowerCase());
                break;
              case 34:
                var words = val1.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
                result = words.includes(val2.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
                break;
              case 35:
                var words = val1.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
                result = words.includes(val2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
                break;
              case 36:
                var separador = val1.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
                var valor2 = val2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(",");
                result = separador.some(els => valor2.includes(els));
                break;
            }
          }

          if (data.selectMenus[i].options[ix].formula == "Falso") {
            if (result == false) {
              result = true;
            } else {
              result = false;
            }
          }

          if (result == false) {
            data.selectMenus[i].options.splice([ix], 1);
            ix = parseFloat([ix]) - 1;
            totales = totales - 1;
          }

        }

        selectData = this.generateSelectMenu(select, cache);
        selectData.disabled = select.disabled;

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
      newComponents = componentsArr
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
        messageOptions.username = webhookname;
      }
      if (webhookavatar !== "") {
        messageOptions.avatarURL = await webhookavatar;
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

        let liberolum = true

        if (data.attachments[i].formula == "1" || data.attachments[i].formula == "2") {
          const comparar = parseInt(data.attachments[i].comparar, 10);
          val1 = this.evalMessage(data.attachments[i].val1, cache);
          val2 = this.evalMessage(data.attachments[i].val2, cache);

          switch (comparar) {
            case 0:
              result = val1 !== undefined;
              break;
            case 1:
              result = val1 == val2;
              break;
            case 2:
              result = val1 === val2;
              break;
            case 3:
              result = val1 < val2;
              break;
            case 4:
              result = val1 > val2;
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
              result = Boolean(val1.toString().match(new RegExp(val2)));
              break;
            case 16:
              const conditions = ["Ä", "Å", "Á", "Â", "À", "Ã", "Ā", "Ă", "Ą", "ā", "ă", "ą", "ä", "á", "â", "à", "ã", "É", "Ê", "Ë", "È", "Ė", "Ę", "Ě", "Ĕ", "Ē", "ė", "ę", "ě", "ĕ", "ē", "é", "ê", "ë", "è", "Í", "Î", "Ï", "Ì", "İ", "Į", "Ī", "ı", "į", "ī", "í", "î", "ï", "ì", "Ö", "Ó", "Ô", "Ò", "Õ", "Ő", "Ō", "ő", "ō", "ö", "ó", "ô", "ò", "õ", "Ü", "Ú", "Û", "Ų", "Ű", "Ů", "Ū", "ų", "ű", "ů", "ū", "ü", "ú", "û", "ù", "Ç", "Ć", "Č", "ç", "ć", "č", "Ñ", "Ň", "Ņ", "Ń", "ñ", "ň", "ņ", "ń", "Ÿ", "Ý", "ý", "Ź", "Ż", "Ž", "ź", "ż", "ž", "Ł", "Ľ", "Ļ", "Ĺ", "ł", "ľ", "ĺ", "Ķ", "ķ", "Ģ", "Ğ", "ģ", "ğ", "Ď", "ď", "Ś", "Š", "Ş", "ś", "š", "ş", "Ť", "Ț", "Ţ", "ť", "ț", "ţ", "Ŕ", "Ř", "ŕ", "ř"]
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
            case 22:
              result = Boolean(Array.isArray(val1));
              break;
            case 23:
              const isImageUrlx = require("is-image-url");
              result = isImageUrlx(val1);
              break;
            case 24:
              result = typeof val1 === "string";
              break;
            case 25:
              const isUrl = require("is-url");
              result = isUrl(val1);
              break;
            case 26:
              const mailx = require("email-existence");
              mailx.check(val1, (error, response) => {
                result = response;
              });
              break;
            case 27:
              let pattern = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
              result = val1.match(pattern);
              break;
            case 28:
              invite = new RegExp(/(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z]/g);
              result = invite.test(val1);
              break;
            case 29:
              result = val1.toLowerCase().includes(val2.toLowerCase());
              break;
            case 30:
              tratarval1 = val1.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              tratar = val2.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              result = tratarval1.includes(tratar);
              break;
            case 31:
              tratarval1 = val1.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              tratar = val2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              result = tratarval1.toLowerCase().includes(tratar);
              break;
            case 32:
              var words = val1.split(" ");
              result = words.includes(val2);
              break;
            case 33:
              var words = val1.toLowerCase().split(" ");
              result = words.includes(val2.toLowerCase());
              break;
            case 34:
              var words = val1.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
              result = words.includes(val2.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
              break;
            case 35:
              var words = val1.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
              result = words.includes(val2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
              break;
            case 36:
              var separador = val1.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ");
              var valor2 = val2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(",");
              result = separador.some(els => valor2.includes(els));
              break;
          }

          liberolum = result

          if (data.attachments.formula == "1") {
            if (liberolum == false) {
              liberolum = true
            } else { liberolum = false }
          }


        }



        if (liberolum == true) {

          if (data.attachments[i].tipo == "1") {
            const { DiscordJS } = this.getDBM();
            const Canvas = require("canvas")
            const attachment = data.attachments[i];
            const varnamer = this.evalMessage(attachment?.canvasnome, cache);
            const varid = this.evalMessage(attachment?.canvasvar, cache);
            const imagedata = this.getVariable(varid, varnamer, cache)
            if (imagedata) {
              const image = new Canvas.Image()
              image.src = imagedata
              const canvas = Canvas.createCanvas(image.width, image.height)
              const ctx = canvas.getContext("2d")
              ctx.drawImage(image, 0, 0, image.width, image.height)
              const buffer = canvas.toBuffer('image/png', { compressionLevel: data.attachments[i].compress })
              const spoiler = !!attachment?.spoiler;
              const name = this.evalMessage(attachment?.name, cache) || (spoiler ? Util.basename("image.png") : undefined);
              const msgAttachment = new MessageAttachment(buffer, name);
              if (spoiler) {
                msgAttachment.setSpoiler(true);
              }
              messageOptions.files.push(msgAttachment);
            }

          }
          if (data.attachments[i].tipo == "2") {
            const { Images } = this.getDBM();
            const attachment = data.attachments[i];
            const varnamer = this.evalMessage(attachment?.canvasnome, cache);
            const varid = this.evalMessage(attachment?.canvasvar, cache);
            const imagedata = this.getVariable(varid, varnamer, cache)
            const spoiler = !!attachment?.spoiler;
            const name = this.evalMessage(attachment?.name, cache) || (spoiler ? Util.basename("image.png") : undefined);
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
              const name = this.evalMessage(attachment?.name, cache) || (spoiler ? Util.basename(url) : undefined);
              const msgAttachment = new MessageAttachment(url, name);
              if (spoiler) {
                msgAttachment.setSpoiler(true);
              }
              messageOptions.files.push(msgAttachment);
            }
          }
          if (data.attachments[i].tipo == "3") {
            const attachment = data.attachments[i];
            const varnamer = this.evalMessage(attachment?.canvasnome, cache);
            const varid = this.evalMessage(attachment?.canvasvar, cache);
            const conteudodata = this.getVariable(varid, varnamer, cache)
            const spoiler = !!attachment?.spoiler;
            var name = this.evalMessage(attachment?.name, cache)
            if (name == "") { name = "texto.txt" }
            const buffer = Buffer.from(conteudodata)
            const msgAttachment = new MessageAttachment(buffer, name);
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

    if(data.di == true){
      isMessageTarget = target
      } else {
      isMessageTarget = target instanceof this.getDBM().DiscordJS.Message;
      }

    const sameId = target?.id?.length > 0 && (target?.id ?? "") === cache?.interaction?.channel?.id;
    const sameChannel = channel === 0 || sameId;
    const canReply = !isMessageTarget && cache?.interaction?.replied === false && sameChannel;

    if (data.removeComps == true) messageOptions.components = [];
    if (data.removeEmbeds == true) messageOptions.embeds = [];
    if (data.removeAttachments == true) messageOptions.files = [];

    if (data.removeCompsE == true && isEdit !== 0) messageOptions.components = [];
    if (data.removeEmbedsE == true && isEdit !== 0) messageOptions.embeds = [];
    if (data.removeAttachmentsE == true && isEdit !== 0) messageOptions.files = [];

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
        this.displayError(data, cache, "Сообщение/Конфигурация для редактирования -> Обновление взаимодействия / Не удалось найти взаимодействие для редактирования");
      }

      if (promise) {
        promise
          .then(onComplete)
          .catch((err) => erro(err));
      }
    }

    else if (isEdit === 1 && target?.edit) {
      target
        .edit(messageOptions)
        .then(onComplete)
        .catch((err) => erro(err));
    }

    else if (isMessageTarget && target?.reply) {
      target
        .reply(messageOptions)
        .then(onComplete)
        .catch((err) => erro(err));
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
      promise.then(onComplete).catch((err) => erro(err));
    }


    else if (target?.send || storagewebhook > 0) {

      if (storagewebhook > 0) {

        const editweb = this.evalMessage(data.editweb, cache);
        if (editweb == "" || editweb == undefined || editweb == "undefined" || editweb == null || editweb == "null") {
          webhook
            .send(messageOptions)
            .then(onComplete)
            .catch((err) => erro(err));
        } else {
          webhook
            .editMessage(editweb, messageOptions)
            .then(onComplete)
            .catch((xty) => {
              webhook
                .send(messageOptions)
                .then(onComplete)
                .catch((err) => erro(err))
            });
        }


      } else {
        target
          .send(messageOptions)
          .then(onComplete)
          .catch((err) => erro(err));
      }

    }

    else {

      if (data.iffalse > 0) {
        if (data.iffalse == "5") return _this.executeSubActions(data.actionsError, cache);
        if (data.iffalse == "99") return _this.executeSubActionsThenNextAction(data.actionsError, cache);

        return _this.executeResults(false, data, cache);
      } else {
        this.callNextAction(cache);
      }
    }

    function erro(err) {
      if (data.errcmd) _this.displayError(data, cache, err);

      _this.storeValue(err, parseInt(data.storageError), _this.evalMessage(data.varNameError, cache), cache);

      if (data.iffalse == "5") return _this.executeSubActions(data.actionsError, cache);
      if (data.iffalse == "99") return _this.executeSubActionsThenNextAction(data.actionsError, cache);

      return _this.executeResults(false, data, cache);
    }

  },

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

    this.prepareActions(data.actionsError);
  },

  mod() { },
};