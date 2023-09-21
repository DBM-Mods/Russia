module.exports = {
    name: "Search Webhook MOD",
    section: "Webhook Control",
    meta: {
        version: "2.1.7",
        preciseCheck: true,
        author: "[Tempest - 321400509326032897]",
        authorUrl: "https://github.com/DBM-Mods/Russia",
        downloadURL: "https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip",
    },

    subtitle(data) {
        if (data.descriptionx) {
            desccor = data.descriptioncolor;
        } else {
            desccor = "none";
        }

        return data.description
            ? `<font style="color:${desccor}">${data.description}</font>`
            : `<font style="color:${desccor}">Поиск по ${data.search}</font>`
    },

    variableStorage(data, varType) {
        const type = parseInt(data.storage, 10);
        if (type !== varType) return;
        return [data.varName2, "Webhook"];
    },

    fields: ["server", "varName", "info", "search", "description", "descriptionx", "descriptioncolor", "iffalse", "iffalseVal", "storage", "varName2"],

    html(isEvent, data) {
        return `
<div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
<div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.1</div>

<div id="flutuador" style="padding:0px 0px 15px 0px">
    <table style="width:100%;">
        <tr>
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

<style>
    .dbmmodsbr1 {
        position: absolute;
        bottom: 0px;
        border: 0px solid rgba(50, 50, 50, 0.7);
        background: rgba(0, 0, 0, 0.7);
        color: #999;
        padding: 5px;
        left: 0px;
        z-index: 999999;
        cursor: pointer
    }

    .dbmmodsbr2 {
        position: absolute;
        bottom: 0px;
        border: 0px solid rgba(50, 50, 50, 0.7);
        background: rgba(0, 0, 0, 0.7);
        color: #999;
        padding: 5px;
        right: 0px;
        z-index: 999999;
        cursor: pointer
    }
</style>

<div id="divValue">
    <server-input dropdownLabel="Сервер" selectId="server" variableContainerId="varNameContainer" variableInputId="varName"></server-input>
    <br><br><br><br>
</div>

<div style="float: left; width: 29%;">
    <span class="dbminputlabel">Поиск по</span>
    <select id="info" class="round" onchange="glob.change(this)">
        <option value="6">URL</option>
        <option value="0" selected>ID</option>
        <option value="1">Имя</option>
        <option value="2">ID владельца</option>
        <option value="3">Имя владельца пользователя</option>
        <option value="4">Тэг владельца</option>
        <option value="5">ID канала</option>
    </select>
</div>

<div style="float: right; width: 70%; padding-left: 18px;">
    <span class="dbminputlabel">Введите туть...</span>
    <input type="text" class="round" id="search">
</div>

<br><br><br><br>

<div style="float: left; width: 40%">
  <span class="dbminputlabel">В случае отсутствия</span>
  <select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
      <option value="0" selecionado>Продолжить действия</option>
      <option value="1">Остановить последовательность действий</option>
      <option value="2">Перейти к действию</option>
      <option value="3">Пропустить действия</option>
      <option value="4">Перейти к якорю</option>
  </select>
</div>

<div id="iffalseContainer" style="display: none; float: right; width: 55%;">
    <span id="xinelas" class="dbminputlabel">Para</span>
    <br>
    <input id="iffalseVal" class="round" name="actionxinxyla" type="text">
</div>
      
<br><br><br><br>
      
<div style="float: left; width: 35%;">
    <span class="dbminputlabel">Хранить в</span>
    <select id="storage" class="round">
        ${data.variables[1]}
    </select>
</div>
<div id="varNameContainer2" style="float: right; width: 60%;">
    <span class="dbminputlabel">Имя переменной</span><br>
    <input id="varName2" class="round" type="text">
</div>
`;
    },

    init() {
        const xinelaslinks = document.getElementsByClassName("xinelaslink");
        for (let x = 0; x < xinelaslinks.length; x++) {
            const xinelaslink = xinelaslinks[x]; const
                url = xinelaslink.getAttribute('data-url'); if (url) {
                    xinelaslink.setAttribute('title', url);
                    xinelaslink.addEventListener('click', (e) => {
                        e.stopImmediatePropagation();
                        console.log(`Запуск URL: [${url}] в браузере.`);
                        require('child_process').execSync(`start ${url}`);
                    });
                }
        }

        glob.change = function(event) {
            if(event.value == "6") {
                document.getElementById("divValue").style.display = "none";
            } else {
                document.getElementById("divValue").style.display = "block";
            }
        };

        glob.change(document.getElementById("info"));

        glob.onComparisonChanged = function (event) {
            if (event.value > "1") {
                document.getElementById("iffalseContainer").style.display = null;
            } else {
                document.getElementById("iffalseContainer").style.display = "none";
            }

            if (event.value == "2") {
                document.querySelector("[id='xinelas']").innerText = (`Номер действия`);
            }

            if (event.value == "3") {
                document.querySelector("[id='xinelas']").innerText = (`Количество действий`);
            }

            if (event.value == "4") {
                document.querySelector("[id='xinelas']").innerText = (`Имя якоря`);
            }
        }

        glob.onComparisonChanged(document.getElementById("iffalse"));
    },

    async action(cache) {
        const data = cache.actions[cache.index];
        const server = await this.getServerFromData(data.server, data.varName, cache);
        const webhooks = await server.fetchWebhooks();
        const search = this.evalMessage(data.search, cache);
        let result;

        switch (parseInt(data.info)) {
            case 0:
                result = webhooks.get(search);
                break;
            case 1:
                result = webhooks.find((w) => w.name == search);
                break;
            case 2:
                result = webhooks.find((w) => w.owner.id == search);
                break;
            case 3:
                result = webhooks.find((w) => w.owner.username == search);
                break;
            case 4:
                result = webhooks.find((w) => w.owner.tag == search);
                break;
            case 5:
                result = webhooks.find((w) => w.channelId == search);
                break;
            case 6:
                const { DiscordJS } = this.getDBM();
                try {
                    result = new DiscordJS.WebhookClient({ url: search });
                } catch {}
                break;
        }

        if (!Boolean(result)) {
            return this.executeResults(false, data, cache);
        }

        const storage = parseInt(data.storage, 10);
        const varName = this.evalMessage(data.varName2, cache);
        this.storeValue(result, storage, varName, cache);

        this.callNextAction(cache);
    },

    mod() { },
};