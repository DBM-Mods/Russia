module.exports = {
    name: "Call Function MOD",
    section: "Other Stuff",
    meta: {
        version: "2.1.7",
        preciseCheck: true,
        author: "[Tempest - 321400509326032897]",
        authorUrl: "https://github.com/DBM-Mods/Russia",
        downloadURL: "https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip",
    },

    subtitle(data) {
        if (data.descriptionx == true) {
            desccor = data.descriptioncolor;
        } else {
            desccor = "#fff";
        }

        return data.description
            ? `<font color="${desccor}">Выполнение функции: ${data.functionName} | ${data.description}</font>`
            : `<font color="${desccor}">Выполнение функции: ${data.functionName}</font>`
    },

    fields: ["descriptioncolor", "description", "descriptionx", "functionName", "acao"],

    html() {
        return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.1</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>

    <div id="flutuador" style="padding: 0px 0px 15px 0px; margin-top: 10px;">
        <table style="width:100%;">
            <tr>
                <td>
                    <span class="dbminputlabel">Описание действия</span>
                    <br>
                    <input type="text" class="round" id="description" placeholder="Не обязательное поле">
                </td>
                <td style="padding: 0px 0px 0px 10px; width: 70px;">
                    <div style="float: left; padding: 0px 0px 0px 7px; margin-top: -5px">
                        <dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox>
                    </div>
                    <br>
                    <input type="color" value="#ffffff" class="round" id="descriptioncolor">
                </td>
            </tr>
        </table>
    </div>

    <span class="dbminputlabel">Выполнение функции</span>
    <input type="text" id="functionName" class="round">

    <br>
    
    <span class="dbminputlabel">Выполнение</span>
    <select id="acao" class="round">
        <option value="0" selected>Дождаться выполнения всех действий и продолжить</option>
        <option value="1">Дождаться выполнения всех действий и остановиться</option>
        <option value="2">Продолжить действия и выполнить контейнер вместе</option>
    </select>
`;
    },

    init() { },


    action(cache) {
        const data = cache.actions[cache.index];
        const functionName = this.evalMessage(data.functionName, cache);

        const Mods = this.getdbmmods();
        const DBM = this.getDBM().Files.data;

        const commands = DBM.commands.concat(DBM.events);
        const Function = Mods.jsonPath(commands, `$..[?(@ && @.name == "Function MOD" && @.nome == "${functionName}")]`)[0];

        if (!Function) return this.callNextAction(cache);

        switch (parseInt(data.acao)) {
            case 0:
                this.executeSubActionsThenNextAction(Function.actions, cache);
                break;
            case 1:
                this.executeSubActions(Function.actions, cache);
                break;
            case 2:
                this.executeSubActions(Function.actions, cache);
                this.callNextAction(cache);
                break;
        }
    },

    mod() { },
};