module.exports = {
    name: "Multi Edit Buttons MOD",
    section: "Messaging",
    meta: {
        version: '2.1.7',
        preciseCheck: true,
        author: '[Tempest - 321400509326032897]<br>[XinXyla#0001 - 172782058396057602]',
        authorUrl: 'https://github.com/DBM-Mods/Russia',
        downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
    },

    subtitle(data, presets) {
        if (data.descriptionx) {
            desccor = data.descriptioncolor;
        } else {
            desccor = "none";
        }

        return data.description
            ? `<font style="color:${desccor}">${data.description}</font>`
            : `<font style="color:${desccor}">Editar ${data.branches.length == 1 ? data.branches.length + "  botão" : data.branches.length + " botões"}</font>`
    },


    fields: ["message", "varName", "description", "descriptionx", "descriptioncolor", "branches"],

    html(isEvent, data) {
        return `
  <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновление</div>
  <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.1</div>

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
  
  <message-input dropdownLabel="Mensagem" selectId="message" variableContainerId="varNameContainer" variableInputId="varName"></message-input>
  
  <br><br><br>
  
  <dialog-list id="branches" fields='["btn", "mode", "name", "emoji", "type", "nomecheck", "emojicheck", "typecheck", "val1", "val2", "comparar", "formula"]' dialogResizable dialogTitle="Кнопка редактирования" dialogWidth="600" dialogHeight="500" listLabel="Кнопки редактирования" listStyle="height: calc(100vh - 320px);" itemName="Item" itemHeight="28px;" itemTextFunction="glob.formatItem(data)" itemStyle="line-height: 28px;">
  <div style="width: 100%; padding:8px;height: calc(100vh - 60px);overflow:auto">
  <div style="padding: 16px;background:rgba(0,0,0,0.3)">
  <span class="dbminputlabel">Просмотр</span><br>
  <select id="formula" class="round">
  <option value="0" selected>Кнопка редактирования / Пропустить сравнения ниже</option>
  <option value="1">Редактирование кнопки только в том случае, если сравнения будет False</option>
  <option value="2">Редактирование кнопки только в том случае, если сравнения будет True</option>
</select>
<br>
   <table style="width:100%"><tr><td>
     <span class="dbminputlabel">Значение A</span><br>
     <input id="val1" class="round" type="text">
     </td>
     <td>
     <span class="dbminputlabel">Сравнения</span><br>
     <select id="comparar" class="round">
     <option value="0">Значение A - Существует</option>
     <option value="1" selected>Равный</option>
     <option value="2">Точно так же</option>
     <option value="3">Меньше, чем</option>
     <option value="13">Меньше или равно</option>
     <option value="4">Больше, чем</option>
     <option value="12">Больше или равно</option>
     <option value="5">Включает в себя</option>
     <option value="6">Соответствует регулярному выражению</option>
     <option value="14">Соответствует полному регулярному выражению</option>
     <option value="7">Длина больше, чем</option>
     <option value="8">Длина меньше, чем</option>
     <option value="9">Длина равна</option>
     <option value="10">Начинается с</option>
     <option value="11">Заканчивается на</option>
     <option value="16">Имеет ли значение A акценты?</option>
     <option value="17">Включает в себя слова  ["a" , "b" , "c"]</option>
     <option value="18">Это просто как слова  ["a" , "b" , "c"]</option>
     <option value="19">Является ли значение A четным числом?</option>
     <option value="20">Является ли значение A нечетным числом?</option>
     <option value="21">Является ли значение A числом?</option>
     <option value="24">Значение A - это текст?</option>
     <option value="23">Является ли значение A URL-адресом изображения?</option>
     <option value="25">Значение A - это URL?</option>
   </select>
    </td>
     <td>
     <span class="dbminputlabel">Значение B</span><br>
     <input id="val2" class="round" type="text">
     </td>
     </tr></table>

</div>
    <div style="margin: 10px;">
    
    <table style="width:100%"><tr><td style="padding:0px 6px 0px 0px">
        <span class="dbminputlabel">Идентификатор (ID) кнопки</span>
        <input type="text" id="btn" class="round">
        
        </td><td>

        <span class="dbminputlabel">Кнопочный режим</span>
        <select id="mode" class="round">
            <option value="0">Сохранить</option>
            <option value="1">Включить</option>
            <option value="2">Отключить</option>
        </select>

        </td></tr></table>

        <br>

        <table style="width:100%"><tr><td>
        <span class="dbminputlabel">Измените название на</span>
        <input type="text" id="name" class="round">
        </td>
        <td style="width:50px"><br><dbm-checkbox id="nomecheck" label="Изменить" checked></dbm-checkbox></td></tr></table>
        <br>

        <table style="width:100%"><tr><td>
        <span class="dbminputlabel">Измените эмодзи на</span>
        <input type="text" id="emoji" class="round">
        </td>
        <td style="width:50px"><br><dbm-checkbox id="emojicheck" label="Изменить" checked></dbm-checkbox></td></tr></table>
        <br>

        <table style="width:100%"><tr><td>
        <span class="dbminputlabel">Измените тип кнопки на</span>
        <br>
        <input id="type" value="PRIMARY" class="round" type="text">
        </td>
        <td style="width:50px"><br><dbm-checkbox id="typecheck" label="Изменить" checked></dbm-checkbox></td></tr></table>
        <br>

        PRIMARY (Синий)<br>
        SECONDARY (Серый)<br>
        SUCCESS (Зелённый)<br>
        DANGER (Красный)<br>
        Или используйте переменную, например \${tempVars("цвет")}</div>
    </div>
    </div>
  </dialog-list>
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

        glob.formatItem = function (data) {
            let result = '<div style="display: inline-block; width: 100%; padding-left: 8px;"><table><tr><td style="width:100%">';
            const comp = "0";
            switch (comp) {
                case "0":
                    result += data.emoji + ' ' + data.name;
                    break;
            }
            result += "</td><td style='width:120px;text-align:right;padding:0px 10px 0px 0px'>" + data.btn + "</td></tr></table></div>";
            return result;
        }
    },

    async action(cache) {
        const data = cache.actions[cache.index];
        const message = await this.getMessageFromData(data.message, data.varName, cache);

        const branches = data.branches;

        const { MessageActionRow } = this.getDBM().DiscordJS;
        const oldComponents = message.components;
        const newComponents = [];

        for (var i = 0; i < oldComponents.length; i++) {
            const compData = oldComponents[i];
            const comps = (compData instanceof MessageActionRow) ? compData.toJSON() : compData;

            for (var j = 0; j < comps.components.length; j++) {
                const comp = comps.components[j];
                if (comp.type != 2) continue;

                const id = comp.custom_id || comp.customId;

                for (var t = 0; t < branches.length; t++) {
                    const branch = branches[t];

                    val1 = this.evalMessage(branch.val1, cache);
                    val2 = this.evalMessage(branch.val2, cache);
                    result = true;

                    if (branch.formula == "1" || branch.formula == "2") {
                        const compare = parseInt(branch.comparar, 10);
                        if (compare !== 6) {
                            val1 = this.evalIfPossible(val1, cache)
                            val2 = this.evalIfPossible(val2, cache)
                        }
                        switch (compare) {
                            case 0:
                                if (typeof val1 !== 'undefined') {
                                    result = true
                                } else {
                                    result = false
                                }
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

                    if (branch.formula == "1") {
                        if (result == false) {
                            result = true
                        } else { result = false }
                    }

                    if (result == true) {

                        if (id == this.evalMessage(branch.btn, cache)) {
                            const mode = parseInt(branch.mode);
                            if (mode == 1) {
                                comp.disabled = false;
                            } else if (mode == 2) {
                                comp.disabled = true;
                            }
                            if(branch.typecheck == true){comp.style = this.evalMessage(branch.type, cache)}
                            if(branch.nomecheck == true){comp.label = this.evalMessage(branch.name, cache)}
                            if(branch.emojicheck == true){comp.emoji = this.evalMessage(branch.emoji, cache)}
                        }

                    }

                }
            }

            newComponents.push(comps);
        }

        const components = newComponents;

        if (cache.interaction?.message?.id === message?.id && cache.interaction?.update && !cache.interaction?.replied) {
            cache.interaction
                .update({ components })
                .then(() => this.callNextAction(cache))
                .catch((err) => this.displayError(data, cache, err));
        } else if (message?.edit) {
            message
                .edit({ components })
                .then(() => this.callNextAction(cache))
                .catch((err) => this.displayError(data, cache, err));
        } else {
            if (message.components) message.components = components;
            this.callNextAction(cache);
        }

    },

    mod() { },
};