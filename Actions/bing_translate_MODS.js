module.exports = {
    name: "Bing translate MOD",
    section: "Translate",

    subtitle(data, presets) {
        if (data.descriptionx) {
            desccor = data.descriptioncolor;
        } else {
            desccor = "none";
        }

        return data.description
        ? `<font style="color:${desccor}">${data.description}</font>`
        : `<font style="color:${desccor}">Перевести текст на ${data.to}</font>`
    },

    variableStorage(data, varType) {
        let vars = [];

        for(var i = 0; i < data.branches.length; i++) {
            const type = parseInt(data.branches[i].storage, 10);
            const varName = data.branches[i].varName;

            if(type == varType && varName) {
                let tipo;

                switch(parseInt(data.branches[i].info)) {
                    case 0:
                        tipo = "Текст";
                        break;
                    case 1:
                        tipo = "Текст";
                        break;
                    case 2:
                        tipo = "Текст";
                        break;
                    case 3:
                        tipo = "Текст";
                        break;
                }

                vars.push(varName);
                vars.push(tipo);
            }
        }

        if (vars.length > 0) {
            return vars;
        }
    },

    meta: {
        version: '2.1.7',
        preciseCheck: true,
        author: '[lik_rus - 866884416151355392]',
        authorUrl: 'https://github.com/DBM-Mods/Russia',
        downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
    },

    fields: ["varName", "branches", "description", "descriptionx", "descriptioncolor", "message", "from", "to", "errcmd"],

    html(isEvent, data) {
        return `
  <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновление</div>
  <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.1</div>

  <div style="width: 100%; padding:5px 5px;height: calc(100vh - 160px);overflow:auto">

  <tab-system>
  <tab label="Текст" icon="cloud download">
  <div style="padding:8px">

  <textarea id="message" class="dbm_monospace" rows="6" placeholder="Вставьте текст здесь..." style="height: calc(100vh - 450px); white-space: nowrap;"></textarea>
  <div id="contador" style="float:right;text-align:right;position:relative;width:22%">0 символов</div>

  <br>

  <table style="width: 100%;">
  <td>
    <span class="dbminputlabel">Первести с</span>
    <input id="from" placeholder="Пусто для авто определения" class="round" type="text">
  </td>
  <td style="padding-left: 18px;">
    <span class="dbminputlabel">Первести на</span>
    <input id="to" placeholder="en" class="round" type="text">
  </td>
 </table>

  </div>

  </dialog-list>

  </tab>

  <tab label="Вывод" icon="question circle">
  <div style="padding:8px">
  
  <dialog-list id="branches" fields='["info", "storage", "varName"]' dialogResizable dialogTitle="Переводчик" dialogWidth="600" dialogHeight="200" listLabel="Список" listStyle="height: calc(100vh - 320px);" itemName="Item" itemHeight="28px;" itemTextFunction="glob.formatItem(data)" itemStyle="line-height: 28px;">
        
    <div style="margin: 10px;">

        <span class="dbminputlabel">Информация</span>
        <select id="info" class="round">
          <optgroup label="Текст">
            <option value="0">Переведённый текст</option>
            <option value="1">Оригенальнный текст</option>
          </optgroup>
          <optgroup label="Язык">
              <option value="2">Переведно с языка</option>
              <option value="3">Переведно на язык</option>
        </select>
  
        <br>
  
        <div style="float: left; width: 35%;">
            <span class="dbminputlabel">Хранить в</span>
            <select id="storage" class="round">
                ${data.variables[1]}
            </select>
        </div>
  
        <div style="float: right; width: 60%;">
            <span class="dbminputlabel">Имя переменной</span>
            <input id="varName" class="round" type="text">
        </div>

        </div>
        </dialog-list>
      
        </div>
  </tab>

  <tab label="Конфиг" icon="settings">
  <div style="padding:8px">
  <table style="width:100%;"><tr>
<td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Оставьте пустым, чтобы не использовалось!"></td>
<td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
</tr></table>

<br>

<span class="dbminputlabel">Опции</span><br><div style="padding:10px;background:rgba(0,0,0,0.2)">
<dbm-checkbox id="errcmd" label="Вывести ошибку на консоль" checked></dbm-checkbox>
</div>
</table>

</div>
</div>
</tab>
</tab-system>

<style>

<style>

  table{width:100%}
  .dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
  .dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}
  
</style>
  `;
},
init() {

    const { glob, document } = this;

    const textarea = document.getElementById('message');
    const contador = document.getElementById('contador');
    const comprimentoTexto = textarea.value.length;
    contador.textContent = `${comprimentoTexto} символов`;
    textarea.addEventListener('input', () => {
      const comprimentoTexto = textarea.value.length;
      contador.textContent = `${comprimentoTexto} символов`;
    });
  
    glob.formatItem = function (data) {
        let result = '<div style="display: inline-block; width: 200px; padding-left: 8px;">Хранить "';
        const info = parseInt(data.info);
      
        switch (info) {
          case 0:
            result += "Переведённый текст";
            break;
          case 1:
            result += "Оригенальнный текст";
            break;
          case 2:
            result += "Переведно с языка";
            break;
          case 3:
            result += "Переведно на язык";
            break;
        }
      
        result += `" в "${data.varName}" </div>`;
        return result;
      };
      
      const xinelaslinks = document.getElementsByClassName("xinelaslink");
      for (let x = 0; x < xinelaslinks.length; x++) {
        const xinelaslink = xinelaslinks[x];
        const url = xinelaslink.getAttribute("data-url");
        if (url) {
          xinelaslink.setAttribute("title", url);
          xinelaslink.addEventListener("click", (e) => {
            e.stopImmediatePropagation();
            console.log(`Запуск URL: [${url}] в браузере по умолчанию.`);
            require("child_process").execSync(`start ${url}`);
          });
        }
      }
    },

    async action(cache) {
        const data = cache.actions[cache.index];
        const { translate } = require('bing-translate-api');
        const text = this.evalMessage(data.message, cache);
        const froms = this.evalMessage(data.from, cache);
        const to = this.evalMessage(data.to, cache);

        const from = froms ? froms : 'auto-detect';

      
        const branches = data.branches;
      
        try {
          const translates = await translate(text, from, to);
      
          for (var i = 0; i < branches.length; i++) {
            const branch = branches[i];
            const info = parseInt(branch.info);
      
            try {
              let result;
      
              switch (info) {
                case 0:
                  result = translates.translation;
                  break;
                case 1:
                  result = translates.text;
                  break;
                case 2:
                  result = translates.language.to;
                  break;
                case 3:
                  result = translates.language.from;
                  break;
              }
      
              const varName = this.evalMessage(branch.varName, cache);
              const storage = parseInt(branch.storage, 10);
              this.storeValue(result, storage, varName, cache);
            } catch (error) {
              if (data.errcmd === true) {
                console.log('ERROR: ' + cache.toString() + ' - Action ' + (cache.index + 1) + '# ' + data.name);
                console.log(error);
              }
            }
          }
      
          this.callNextAction(cache);
        } catch (error) {
          if (data.errcmd === true) {
            console.log('ERROR: ' + cache.toString() + ' - Action ' + (cache.index + 1) + '# ' + data.name);
            console.log(error);
          }
        }
      },
      
      

mod() { },
};