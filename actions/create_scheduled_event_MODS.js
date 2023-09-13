module.exports = {
    name: "Create Scheduled Event MOD",
    section: "Scheduled Event",
    meta: {
        version: "2.1.7",
        preciseCheck: true,
        author: "[tempestdbm - 321400509326032897]",
        authorUrl: "https://github.com/DBM-Mods/Russia",
        downloadURL: "https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip",
    },

    subtitle(data, presets) {
        if (data.descriptionx == true) {
            desccor = data.descriptioncolor;
        } else {
            desccor = "none";
        }

        return data.description
            ? `<font style="color:${desccor}">${data.description}</font>`
            : `<font style="color:${desccor}">${data.nome} > ${data.local == "3" ? data.location : presets.getChannelText(data.channel, data.varName2)}</font>`
    },

    variableStorage(data, varType) {
        if (data.storage == varType) return [data.varName3, "Evento"];
    },

    fields: ["server", "varName", "nome", "reason", "local", "channel", "varName2", "location", "descricao", "startTime", "endTime", "image", "storage", "varName3", "description", "descriptionx", "descriptioncolor", "iffalse", "iffalseVal", "actionsError", "errcmd"],

    html(isEvent, data) {
        return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.1</div>

    <tab-system>
        <tab label="Событие" icon="align left">
            <div style="margin: 5px; height: calc(100vh - 210px); overflow: auto;">
                <server-input dropdownLabel="Сервер" selectId="server" variableContainerId="varNameContainer" variableInputId="varName"></server-input>

                <br><br><br>

                <span class="dbminputlabel">Название события</span>
                <input type="text" class="round" id="nome">

                <br>

                <span class="dbminputlabel">Причина</span>
                <input type="text" class="round" id="reason" placeholder="Не обязательное поле">

                <br>

                <span class="dbminputlabel">Место проведения события</span>
                <select class="round" id="local" onchange="glob.change(this)">
                    <option value="1">Сцена</option>
                    <option value="2">Голосовой канал</option>
                    <option value="3">Внешнее местоположение</option>
                </select>

                <br>

                <div id="divValue">
                    <voice-channel-input dropdownLabel="Канал" selectId="channel" variableContainerId="varNameContainer2" variableInputId="varName2"></voice-channel-input>
                    <br><br><br>
                </div>

                <div id="divValue2">
                    <span class="dbminputlabel">Местоположение</span>
                    <input type="text" class="round" id="location" placeholder="Укажите место, ссылку или тп">
                    <br>
                </div>

                <span class="dbminputlabel">Описание</span>
                <textarea type="text" class="round" id="descricao" placeholder="Не обязательное поле"></textarea>

                <br>

                <table style="width: 100%;">
                    <td>
                        <span class="dbminputlabel">Timestamp начала</span>
                        <input type="text" class="round" id="startTime">
                    </td>
                    <td style="padding-left: 18px;">
                        <span class="dbminputlabel">Timestamp окончания</span>
                        <input type="text" class="round" id="endTime">
                    </td>
                </table>

                <br>

                <span class="dbminputlabel">Изображение (необязательно)</span>
                <input type="text" class="round" id="image" placeholder="Локальное изображение или URL">

                <br>

                <store-in-variable allowNone dropdownLabel="Хранить в" selectId="storage" variableContainerId="varNameContainer3" variableInputId="varName3"></store-in-variable>
            </div>
        </tab>
        <tab label="Конфигурация" icon="cogs">
            <div style="margin: 5px;">
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

            <span class="dbminputlabel">Опции</span>
            <br>
            <div style="padding: 10px; background: rgba(0,0,0,0.2);">
                <dbm-checkbox id="errcmd" label="Отображать ошибку в консоли" checked></dbm-checkbox>
            </div>

            <br>
            
            <div style="float: left; width: 40%">
                <span class="dbminputlabel">Если канал не найден</span>
                <select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
                <option value="0">Продолжить действия</option>
                <option value="1">Остановить последовательность действий</option>
                <option value="2">Перейти к действию</option>
                <option value="3">Пропустить действия</option>
                <option value="4">Перейти к якорю</option>
                <option value="5">Выполнить действия и остановиться</option>
                <option value="99">Выполнить действия и продолжить</option>
                </select>
            </div>
            
            <div id="iffalseContainer" style="display: none; float: right; width: 55%;">
                <span id="xinelasT" class="dbminputlabel">Para</span>
                <input id="iffalseVal" class="round" type="text">
            </div>
            
            <action-list-input id="actionsError" style="margin-top: 50px;" height="calc(100vh - 400px)"></action-list-input>
          
            </div>
        </tab>
    </tab-system>

    <style>
      .dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
      .dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}
    </style>

`;
    },

    init() {
        const xinelaslinks = document.getElementsByClassName("xinelaslink");
        for (let x = 0; x < xinelaslinks.length; x++) {
            const xinelaslink = xinelaslinks[x];
            const url = xinelaslink.getAttribute("data-url");
            if (url) {
                xinelaslink.setAttribute("title", url);
                xinelaslink.addEventListener("click", (e) => {
                    e.stopImmediatePropagation();
                    console.log(`Запуск URL: [${url}] в браузере.`);
                    require("child_process").execSync(`start ${url}`);
                });
            }
        }

        glob.change = function (event) {
            if (event.value == "3") {
                document.getElementById("divValue").style.display = "none";
                document.getElementById("divValue2").style.display = "block";
            } else {
                document.getElementById("divValue").style.display = "block";
                document.getElementById("divValue2").style.display = "none";
            }
        };

        glob.change(document.getElementById("local"));

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

            if (event.value == "2") {
                document.querySelector("[id='xinelasT']").innerText = "Номер действия";
            }

            if (event.value == "3") {
                document.querySelector("[id='xinelasT']").innerText = "Количество действий";
            }

            if (event.value == "4") {
                document.querySelector("[id='xinelasT']").innerText = "Имя якоря";
            }
        }

        glob.onComparisonChanged(document.getElementById("iffalse"));
    },

    async action(cache) {
        const data = cache.actions[cache.index];
        const server = await this.getServerFromData(data.server, data.varName, cache);
        const local = Number(data.local);

        const moment = require("moment");

        const eventData = {
            reason: this.evalMessage(data.reason, cache),
            name: this.evalMessage(data.nome, cache),
            description: this.evalMessage(data.descricao, cache),
            privacyLevel: 2,
            entityType: local,
            scheduledStartTime: moment(this.evalMessage(data.startTime, cache), "X"),
            scheduledEndTime: moment(this.evalMessage(data.endTime, cache), "X"),
        };

        if (local == 3) {
            eventData.entityMetadata = {};
            eventData.entityMetadata.location = this.evalMessage(data.location, cache);
        } else {
            const channel = await this.getVoiceChannelFromData(data.channel, data.varName2, cache);
            eventData.channel = channel;
        }

        if (this.evalMessage(data.image, cache)) {
            const Canvas = require("canvas");
            const image = await Canvas.loadImage(this.evalMessage(data.image, cache));
            const canvas = Canvas.createCanvas(image.width, image.height);
            const ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0, image.width, image.height);
            eventData.image = canvas.toDataURL("image/png");
        }

        try {
            const event = await server.scheduledEvents.create(eventData);

            this.storeValue(event, parseInt(data.storage), this.evalMessage(data.varName3, cache), cache);
            this.callNextAction(cache);
        } catch (err) {
            if (data.errcmd) this.displayError(data, cache, err);
            if (data.iffalse == "5") return this.executeSubActions(data.actionsError, cache);
            if (data.iffalse == "99") return this.executeSubActionsThenNextAction(data.actionsError, cache);

            this.executeResults(false, data, cache);
        }
    },

    modInit(data) {
        this.prepareActions(data.actionsError);
    },
};