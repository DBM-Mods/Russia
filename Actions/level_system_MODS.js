module.exports = {
    name: "Level System MOD",
    section: "Other Stuff",
    meta: {
        version: '2.1.7',
        preciseCheck: true,
        author: '[XinXyla - 172782058396057602]',
        authorUrl: 'https://github.com/DBM-Mods/Russia',
        downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
      },
    

    subtitle: function(data, presets) {
    const storage = presets.variables;
    return `XPT: ${data.xptotal} - XP за уровень: ${data.up} - Результат в: ${storage[parseInt(data.storage, 10)]} (${data.varName})`;
    },
    
    variableStorage: function(data, varType) {
            const type = parseInt(data.storage);
            if(type !== varType) return;
            return ([data.varName, 'Number']);
        },
    
    
    fields: ["xptotal", "up", "multi", "somar", "retornar", "personalizado", "storage", "varName"],
    
    html: function(isEvent, data) {
        return `
        <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.2</div>
        <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>

        <span class="dbminputlabel">Общее количество XP</span>
        <input id="xptotal" type="text" class="round" placeholder="Введите все XPT">
        <br>

        <table><tr><td class="sep1"><span class="dbminputlabel">Выбор рашёта</span>
        <select id="multi" class="round" onchange="glob.onChange2(this)">
            <option value="0" selected>Потенцирование</option>
            <option value="1">Начните с мощности</option>
        </select>
        </td>
        <td class="sep3" id="sep3">
        <div id="xinelas4">
        <span class="dbminputlabel" name="xinelas3">XP, необходимый для повышения уровня</span><br>
        <input id="somar" type="text" class="round"></div>
        </td>
        <td class="sep4" id="sep4">
        <span class="dbminputlabel" name="xinelas2">XP, необходимый для повышения уровня</span><br>
        <input id="up" type="text" class="round" placeholder="Введите множитель">
        </td></tr></table>
        <br>

        <div style="width:100%;">
        <span class="dbminputlabel">Что выводим?</span>
        <select id="retornar" class="round" onchange="glob.onChange1(this)">
            <option value="0" selected>[LVL] Уровень</option>
            <option value="1">[XPF] Опыт, необходимый для перехода на следующий уровень</option>
            <option value="2">[EXP] Текущий опыт</option>
            <option value="3">[XPR] EXP остался для следующего уровня</option>
            <option value="4">[XPP] Процент опыта</option>
            <option value="5">[XPN] XPT, необходимый для перехода на следующий уровень</option>
            <option value="6">Все (список)</option>
            <option value="7">Пользовательский</option>
        </select>
    </div>
    <br>
    <div id="xinxylaper"><span class="dbminputlabel">Вывод?</span>
    <input id="personalizado" class="round" placeholder='"Уровень " + LVL + " | EXP: " + EXP + " / " + XPR + " ( " + XPP + "% ) | XPT: " + XPT' value='"Уровень " + LVL + " | EXP: " + EXP + " / " + XPR + " ( " + XPP + "% ) | XPT: " + XPT'>
    <br></div>

        <table>
        <tr>
        <td class="sep1"><span class="dbminputlabel">Результат в</span><br>
        <select id="storage" class="round">
          ${data.variables[1]}
        </select></td>
        <td class="sep2"><span class="dbminputlabel">Название</span><br>
        <input id="varName" class="round" type="text"></td>
        </tr>
        
        </table>
        
        <style>
        table{width:100%}
.sep1{padding:0px 8px 0px 0px;width:40%}
.sep2{padding:0px 0px 0px 0px;width:60%}
.sep3{padding:0px 8px 0px 0px;width:53%}
.sep4{padding:0px 0px 0px 0px;width:7%}
</style>`;
    },
    
    init: function() {
        const {glob, document} = this;

        glob.onChange1 = function (event) {
            const value = parseInt(event.value, 10);
            if (value == 7) {
              document.getElementById("xinxylaper").style.display = null;
            } else {
              document.getElementById("xinxylaper").style.display = "none";
            }
          };
      
            glob.onChange1(document.getElementById("retornar"));


            glob.onChange2 = function(event) {
                const value = parseInt(event.value);
                if (value == 1) {
                    document.querySelector("[name='xinelas2']").innerText = (`Усилитель`);
                    document.querySelector("[name='xinelas3']").innerText = (`XP, необходимый для уровня +`);
                    document.getElementById("xinelas4").style.display = null;
                    document.getElementById("sep3").style.display = null;
                } else {
                    document.querySelector("[name='xinelas2']").innerText = (`XP, необходимый для повышения уровня + Бустер`);
                    document.querySelector("[name='xinelas3']").innerText = (`XP, необходимый для повышения уровня`);
                    document.getElementById("xinelas4").style.display = "none";
                    document.getElementById("sep3").style.display = "none";
                    document.getElementById("sep4").style = "width:60%";
                }
            }

            glob.onChange2(document.getElementById("multi"));
    
    },
    
    action: function(cache) {    
        const data = cache.actions[cache.index];
        const xptotal = parseInt(this.evalMessage(data.xptotal, cache), 10);
        var soma = parseInt(this.evalMessage(data.somar, cache), 10);
        var up = this.evalMessage(data.up, cache);
        const retornar = parseInt(data.retornar, 10);
        const multi = parseInt(data.multi, 10);
        let resultFormat = String(this.evalMessage(data.personalizado, cache));

        switch (multi) {
            case 0:
                level = 1
        calc = xptotal
        calc2 = level * up
        calc3 = level * up
        result = 0

        for(var i = 0; i < xptotal; i++){
            if(i == (calc3 - 1)){
            level = level + 1
            calc2 = level * up
            calc3 = (level * up) + calc3
            calc = xptotal - i - 1
            }
            }

        switch (retornar) {
        case 0:
            result = level
            break
        case 1:
            result = level * up
            break
        case 2:
            result = calc
            break
        case 3:
            result = calc2 - calc
            break
        case 4:
            xinelas = level * up
            result = Math.floor((100 / xinelas) * calc)
            break
        case 5:
            result = calc3
            break     
        case 6:
            tudo = [level,(level * up),calc,(calc2 - calc),Math.floor((100 / (level * up)) * calc),calc3]
            result = tudo
            break
        case 7:
            let array1 = []
            const XPR = level * up
            const EXP = calc
            const LVL = level
            const XPT = xptotal
            const XPF = calc2 - calc
            const XPP = Math.floor((100 / (level * up)) * calc)
            const XPN = calc3
            array1.push(`${eval(resultFormat)}`)
            result = array1.join('')
            break
            }
                break
                case 1:
                    level = 1
            calc = xptotal
            calc2 = (level * up) + soma
            calc3 = (level * up) + soma
            result = 0
    
            for(var i = 0; i < xptotal; i++){
                if(i == (calc3 - 1)){
                level = level + 1
                calc2 = level * up + soma
                calc3 = (level * up + soma) + calc3
                calc = xptotal - i - 1
                }
                }
    
            switch (retornar) {
            case 0:
                result = level
                break
            case 1:
                result = level * up + soma
                break
            case 2:
                result = calc
                break
            case 3:
                result = calc2 - calc
                break
            case 4:
                xinelas = level * up + soma
                result = Math.floor((100 / xinelas) * calc)
                break
            case 5:
                result = calc3
                break
            case 6:
                tudo = [level,(level * up + soma),calc,(calc2 - calc),Math.floor((100 / (level * up + soma)) * calc),calc3]
                result = tudo
                break
            case 7:
                let array1 = []
                const XPR = (level * up) + soma
                const EXP = calc
                const LVL = level
                const XPT = xptotal
                const XPF = calc2 - calc
                const XPP = Math.floor((100 / (level * up + soma)) * calc)
                const XPN = calc3
                array1.push(`${eval(resultFormat)}`)
                result = array1.join('')
                break
                }
                    break
                }


    
        if(result !== undefined) {
            const storage = parseInt(data.storage);
            const varName = this.evalMessage(data.varName, cache);
            this.storeValue(result, storage, varName, cache);
        }
        this.callNextAction(cache);
    },
    
    mod: function(DBM) {
    }
    
    };
    
