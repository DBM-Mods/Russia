module.exports = {
  name: 'Await Response Call Action MOD',
  section: 'Messaging',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  fields: [
    'storage',
    'varName',
    'filter',
    'max',
    'time',
    'iftrue',
    'iftrueVal',
    'actionstrue',
    'iffalse',
    'iffalseVal',
    'actionsfalse',
    'storage2',
    'varName2',
    'descriptioncolor',
    'description',
    'descriptionx',
  ],

  subtitle(data) {
    if (data.descriptionx == true) {
      desccor = data.descriptioncolor
    } else {
      desccor = 'none'
    }
    const getPlural = (n) => (n !== '1' ? 'ns' : 'm');
    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">Подождать ${data.max} сообщение${getPlural(data.max)} время ${data.time} миллисекунды</font>`
  },

  variableStorage(data, varType) {
    if (parseInt(data.storage2, 10) !== varType) return;
    return [data.varName2, parseInt(data.max, 10) === 1 ? 'Сообщение' : 'Сообщение / список'];
  },

  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.2</div>

    <tab-system>

    <tab label="Настроить" icon="wizard">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">


    <div style="margin-right: 25px">
      <channel-input dropdownLabel="Канал" selectId="storage" variableContainerId="varNameContainer" variableInputId="varName"></channel-input>
    </div>
    <br><br><br><xinspace>

      <div>
      <span class="dbminputlabel">Проверка</span><br>
      <textarea id="filter" class="round" type="text" rows="3">content.length > 0 && author.id === user.id</textarea>
      </div>

      <br>

    <div>
      <div style="float: left; width: 48%;">
      <span class="dbminputlabel">Сообщения для активации</span><br>
        <input id="max" class="round" type="text" value="1" placeholder="Opcional"><br>
      </div>
      <div style="float: right; width: 48%;">
      <span class="dbminputlabel">Лимит времени (миллисекунды)</span><br>
        <input id="time" class="round" type="text" value="60000" placeholder="Opcional"><br>
      </div>
      </div>

    <br><br><br>
    </div>
    </tab>
    <tab label="Действие" icon="wizard">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">

    <div>
      <div style="float: left; width: 38%" id="xinxylatrue">
      <span class="dbminputlabel">Ответ на сообщение</span><br>
        <select id="iftrue" class="round" onchange="glob.onChangeTrue(this)">
        <option value="0" selected>Продолжить действия</option>
        <option value="1">Остановить последовательность действий</option>
        <option value="2">Перейти к действию</option>
        <option value="3">Пропустить следующие действия</option>
        <option value="4">Перейти к якову действия</option>
        <option value="5">Выполнять действия и останавливаться</option>
        <option value="6">Выполнять действия и продолжить</option>
        </select>
        <br>
        </div>
        <div id="iftrueContainer" style="display: none; float: right; width: 60%;"><div id="xincontrolt"><span id="iftrueName" class="dbminputlabel">Для</span><br><input id="iftrueVal" class="round" name="iftrueVal" type="text"></div>
        </div><br></div>
        <div id="containerxint" style="width:100%;height:calc(100vh - 410px)">
        <br><br>
        <action-list-input id="actionstrue" height="calc(100vh - 450px)"></action-list-input>
        </div>
        <br><br><br>
    
    <div>
      <div style="float: left; width: 38%" id="xinxylafalse">
      <span class="dbminputlabel">Тайм-аут достигнут</span><br>
        <select id="iffalse" class="round" onchange="glob.onChangeFalse(this)">
        <option value="0" selected>Продолжить действия</option>
        <option value="1">Остановить последовательность действий</option>
        <option value="2">Перейти к действию</option>
        <option value="3">Пропустить следующие действия</option>
        <option value="4">Перейти к якову действия</option>
        <option value="5">Выполнять действия и останавливаться</option>
        <option value="6">Выполнять действия и продолжить</option>
        </select>
        <br>
        </div>
        <div id="iffalseContainer" style="display: none; float: right; width: 60%;"><div id="xincontrolf"><span id="iffalseName" class="dbminputlabel">Для</span><br><input id="iffalseVal" class="round" name="iffalseVal" type="text"></div>
        </div><br></div>
        <div id="containerxinf" style="width:100%;height:calc(100vh - 410px)">
        <br><br>
        <action-list-input id="actionsfalse" height="calc(100vh - 450px)"></action-list-input>
        </div>
    <br><br><br>

    
    <div>
      <div style="float: left; width: 35%;">
      <span class="dbminputlabel">Сообщение / список</span><br>
        <select id="storage2" class="round" onchange="glob.variableChange(this, 'varNameContainer2')">${data.variables[0]}</select>
      </div>
      <div id="varNameContainer2" style="display: block; float: right; width: 58%; margin-right: 25px;">
      <span class="dbminputlabel">Имя переменной</span><br>
        <input id="varName2" class="round" type="text">
      </div>
      <br><br><br>
    </div>
  </div>

    </div>
    </tab>

    <tab label="Конфиг" icon="settings">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">

    <div id="flutuador" style="padding:0px 0px 15px 0px">
    <table style="width:100%;"><tr>
    <td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Оставьте пустым, чтобы не использовалось!"></td>
    <td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
    </tr></table>
    </div>

    </div>
    </tab>

    <tab label="Помощь" icon="help">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">

    <button class="tiny compact ui icon button"><span class="xinelaslink" data-url="https://www.w3schools.com/js/js_comparisons.asp">Сравнение JavaScript и логические операторы</span></button>
      <br><br>
      <center>
      <tlt><b>Функционирование</b></tlt>
      <tl>Это действие работает только с намерением активного сообщения<br>
      Чтобы активировать <button class="tiny compact ui icon button"><span class="xinelaslink" data-url="https://discord.com/developers/applications/">https://discord.com/developers/applications/</span></button> Выберите своего бота и активируйте "MESSAGE CONTENT INTENT"</tl>
      <br>
      
      <tlt><b>Доступные варианты</b></tlt>
      <tl>
      <table>
      <tr><td class="cols">user</td><td class="cols">Автор командного сообщения</td></tr>
      <tr><td class="cols">server</td><td class="cols">Сервер, где использовалась команда</td></tr>
      </table>
      </tl><br>

      <tlt><b>Переменные сообщения (ожидается сообщение)</b></tlt>
      <tl>
      <table>
      <tr><td class="cols">content</td><td class="cols">Содержание сообщения</td></tr>
      <tr><td class="cols">author</td><td class="cols">Автор сообщения</td></tr>
      <tr><td class="cols">msg</td><td class="cols">Объект сообщения</td></tr>
      </table>
      </tl><br>

      <tlt><b>Примеры содержания</b></tlt>
      <tl>
      <table>
      <tr><td class="cols">content === 'введите содержимое здесь'</td><td class="cols">Точно сообщение</td></tr>
      <tr><td class="cols">content.includes('вставьте что-нибудь здесь')</td><td class="cols">Включает в сообщение</td></tr>
      <tr><td class="cols">content.startsWith('Начать')</td><td class="cols">Начинается с текста сообщения</td></tr>
      <tr><td class="cols">content.endsWith('конец.')</td><td class="cols">Заканчивается текстом сообщения</td></tr>
      <tr><td class="cols">content.match(/^\\d+$/g)</td><td class="cols">Только ответы с цифрами</td></tr>
      <tr><td class="cols">content.length > 0 </td><td class="cols">Принять любой ответ</td></tr>

      </table>
      </tl><br>

      <tlt><b>Примеры авторов</b></tlt>
      <tl>
      <table>
      <tr><td class="cols">author.id === '172782058396057602'</td><td class="cols">Идентификатор автора</td></tr>
      <tr><td class="cols">author.username === 'XinXyla'</td><td class="cols">Имя автора</td></tr>
      <tr><td class="cols">author.tag === 'XinXyla#0001'</td><td class="cols">Тег автора</td></tr>
      <tr><td class="cols">author.id === user.id</td><td class="cols">Идентификатор автора совпадает с идентификатором того, кто отправил сообщение</td></tr>
      <tr><td class="cols">content.match(/^\\d+$/g)</td><td class="cols">Только ответы с числами</td></tr>
      <tr><td class="cols">content.length > 0 </td><td class="cols">Принимает любой ответ</td></tr>

      </table>
      </tl><br>

      <tlt><b>Примеры контента плюс автор</b></tlt>
      <tl>
      <table>
      <tr><td class="cols">content.length > 0 && author.id === user.id</td><td class="cols">Получите любой ответ от командного сообщения автора</td></tr>
      <tr><td class="cols">content.length > 0 && author.id === tempVars('nome da variavel')</td><td class="cols">Возьмите любой ответ от участника с идентификатором, хранящимся во временной переменной</td></tr>

      </table>
      </tl><br>


    </div>
    </tab>
    </tab-system>

<style>
    xinspace{padding:10px 0px 0px 0px;display:block}
    table{width:100%}
    .col{padding:0px 4px}
    .cols{padding:0px 4px;border:1px solid rgba(0,0,0,0.5)}
    .col1{width:35%;padding:0px 10px 0px 0px}
    .col2{width:65%}
    .col3{width:75%;padding:0px 10px 0px 0px}
    .col4{width:25%}
    .col5{width:50%;padding:0px 10px 0px 0px}
    .col6{width:50%}
    .xinelaslink {cursor:pointer}
    tl{background:rgba(0,0,0,0.1);border: 1px solid rgba(50,50,50,0.1);padding:5px;width:100%;display:block;text-align:left}
    tlt{background:rgba(0,0,0,0.2);border: 1px solid rgba(50,50,50,0.2);padding:2px;width:100%;display:block}
   .dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
   .dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}

</style>
`;
  },

  init() {
    const { glob, document } = this;

    const xinelaslinks = document.getElementsByClassName('xinelaslink');
      for (let x = 0; x < xinelaslinks.length; x++) {
        const xinelaslink = xinelaslinks[x];
        const url = xinelaslink.getAttribute('data-url');
        if (url) {
          xinelaslink.setAttribute('title', url);
          xinelaslink.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            console.log(`Запуск URL: [${url}] В вашем браузере по умолчанию.`);
            require('child_process').execSync(`start ${url}`);
          });
        }
      }

    glob.variableChange(document.getElementById('storage2'), 'varNameContainer2');

    glob.onChangeTrue = function (event) {
      if (event.value > "1") {
        document.getElementById("iftrueContainer").style.display = null;
      } else {
        document.getElementById("iftrueContainer").style.display = "none";
      }
      if (event.value == "5" || event.value == "6") {
        document.getElementById("containerxint").style.display = null;
        document.getElementById("xincontrolt").style.display = "none";
        document.getElementById("xinxylatrue").style.width = "100%";
      } else {
        document.getElementById("containerxint").style.display = "none";
        document.getElementById("xincontrolt").style.display = null;
        document.getElementById("xinxylatrue").style.width = "38%";
      }
      if (event.value == "2") {
        document.querySelector("[id='iftrueName']").innerText = (`Número da ação`);
      }
      if (event.value == "3") {
        document.querySelector("[id='iftrueName']").innerText = (`Pular ações`);
      }
      if (event.value == "4") {
        document.querySelector("[id='iftrueName']").innerText = (`Nome da âncora`);
      }
    }

    glob.onChangeTrue(document.getElementById('iftrue'));

    glob.onChangeFalse = function (event) {
      if (event.value > "1") {
        document.getElementById("iffalseContainer").style.display = null;
      } else {
        document.getElementById("iffalseContainer").style.display = "none";
      }
      if (event.value == "5" || event.value == "6") {
        document.getElementById("containerxinf").style.display = null;
        document.getElementById("xincontrolf").style.display = "none";
        document.getElementById("xinxylafalse").style.width = "100%";
      } else {
        document.getElementById("containerxinf").style.display = "none";
        document.getElementById("xincontrolf").style.display = null;
        document.getElementById("xinxylafalse").style.width = "38%";
      }
      if (event.value == "2") {
        document.querySelector("[id='iffalseName']").innerText = (`Número da ação`);
      }
      if (event.value == "3") {
        document.querySelector("[id='iffalseName']").innerText = (`Pular ações`);
      }
      if (event.value == "4") {
        document.querySelector("[id='iffalseName']").innerText = (`Nome da âncora`);
      }
    }

    glob.onChangeFalse(document.getElementById('iffalse'));
  },

  async action(cache) {
    const data = cache.actions[cache.index];
    const { Actions } = this.getDBM();
    const channel = await this.getChannelFromData(data.storage, data.varName, cache);

    const storage = parseInt(data.storage2, 10);
    const varName2 = this.evalMessage(data.varName2, cache);

    if (channel) {
      const js = String(this.evalMessage(data.filter, cache));

      var max = parseInt(this.evalMessage(data.max, cache), 10);
      if(isNaN(max)){max = 1}
      
      var time = parseInt(this.evalMessage(data.time, cache), 10);
      if(isNaN(time)){time = 60000}

      const filter = (msg) => {
        const { interaction, msg: message, server } = cache;
        const { author, content } = msg;
        const user = message?.author ?? interaction?.user;
        const member = message?.member ?? interaction?.member;
        const tempVars = Actions.getActionVariable.bind(cache.temp);
        const globalVars = Actions.getActionVariable.bind(Actions.global);
        const serverVars = server ? Actions.getActionVariable.bind(Actions.server[server.id]) : null;

        try {
          return Boolean(eval(js));
        } catch {
          return false;
        }
      };

      channel
        .awaitMessages({
          filter,
          max,
          time,
          errors: ['time'],
        })
        .then((c) => {
          this.storeValue(c.size === 1 ? c.first() : [...c.values()], storage, varName2, cache);

          {
            if (data.iftrue == "5" || data.iftrue == "6") {
  
              if (data.iftrue == "5") {
                this.executeSubActions(data.actionstrue, cache)
              } else {
                this.executeSubActionsThenNextAction(data.actionstrue, cache)
              }
      
            } else {
              this.executeResults(true, data, cache);
            }
          }

        })
        .catch(() => {
          if (data.iffalse == "5" || data.iffalse == "6") {

            if (data.iffalse == "5") {
              this.executeSubActions(data.actionsfalse, cache)
            } else {
              this.executeSubActionsThenNextAction(data.actionsfalse, cache)
            }
    
          } else {
            this.executeResults(false, data, cache);
          }
        },        
        
        
        )



    }
  },

  modInit(data) {
    this.prepareActions(data.actionstrue);
    this.prepareActions(data.actionsfalse);
  },

  mod() {},
};
