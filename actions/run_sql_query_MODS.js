module.exports = {
  name: 'Run SQL Query MOD',
  section: 'Other Stuff',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]<br>[Tempest - 321400509326032897]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },


  variableStorage(data, varType) {
    const type = parseInt(data.storage);
    const type2 = parseInt(data.errs);
    const type3 = parseInt(data.store_source_conn_storage);

    let vars = [];

    if (type == varType) {
      vars.push(data.varName);
      vars.push("JSON Объект");
    }

    if (type2 == varType) {
      vars.push(data.errv);
      vars.push("Текст ~ Ошибка");
    }

    if (type3 == varType && parseInt(data.source_conn_storage) == 0) {
      vars.push(data.store_source_conn_varName);
      vars.push("Соединение SQL");
    }
    
    const types = ["JSON", "Число", "Текст", "Список", "True/False"];

    for (var i = 0; i < data.branches?.length || 0; i++) {
      if (data.branches[i].storage == varType) {
        vars.push(data.branches[i].varName);
        vars.push(types[parseInt(data.branches[i].formato)]);
      }
    }

    if (vars.length > 0) return vars;
  },

  subtitle(data) {
    let sub = '';
    if (data.store_source_conn_storage !== 0) {
      sub += '';
    }

    if (data.query) {
      sub += `Действие(${data.query}) `;
    }

    if (data.path) {
      sub += `Путь(${data.path}) `;
    }

    if (data.storage > 0) {
      const storage = ["", "Временная переменная", "Серверная переменная", "Глобальная переменная"]
      sub += `${storage[parseInt(data.storage)]}(${data.varName}) `
    }

    if (data.descriptionx == true) {
      desccor = data.descriptioncolor;
    } else {
      desccor = "none";
    }

    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">${sub}</font>`
  },

  fields: [
    "storage",
    "stringifyOutput",
    "formato",
    "varName",
    "hostname",
    "port",
    "username",
    "password",
    "database",
    "query",
    "path",
    "otype",
    "source_conn_storage",
    "source_conn_varName",
    "store_source_conn_storage",
    "store_source_conn_varName",
    "debugMode",
    "descriptioncolor",
    "description",
    "descriptionx",
    "iffalse",
    "iffalseVal",
    "errcmd",
    "errs",
    "errv",
    "actionserr",
    "branches"
  ],

  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 1.5</div>

    <tab-system>

    <tab label="Действие" icon="wizard">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">

   <span class="dbminputlabel">Последовательность запроса / Действие</span>
   <textarea id="query" class="round" placeholder="SELECT * FROM 'users'" style="width: 100%;" type="textarea" rows="5" cols="19"></textarea>

    <xinspace>
    <span class="dbminputlabel">Результат запроса ~ Вывод</span><br>
    <select id="stringifyOutput" class="round" onchange="glob.onComparisonChanged3(this)">
      <option value="0" selected>Все или Json Path / Имя столбца</option>
      <option value="1">Преобразовать в строку JSON</option>
    </select>

    <xinspace>

    <div id="seppath">
    <table><tr><td class="col3">
    <span class="dbminputlabel">Json путь / Имя столбца</span> 
    <input id="path" class="round"; style="width: 100%;" placeholder="Оставьте пустым, чтобы сохранить все" type="text">
    </td>
    <td class="col4">
    <span class="dbminputlabel">Формат</span>
    <select id="formato" class="round">
      <option value="0" selected>Исходный</option>
      <option value="1">Число</option>
      <option value="2">Текст</option>
      <option value="3">Список</option>
      <option value="4">True/False</option>
    </select>
    </td></tr></table>

    <xinspace></div>

    <table><tr><td class="col1">
    <span class="dbminputlabel">Результат в</span><br />
      <select id="storage" class="round" onchange="glob.variableChange(this, 'varNameContainer')">
        ${data.variables[0]}
      </select>
    </td>
    <td class="col2">
    <div id="varNameContainer">
    <span class="dbminputlabel">Имя переменной</span><br>
    <input id="varName" class="round" type="text"/>
    </div>
    </td></tr></table>

    </div>
    </tab>

    
    <tab label="Подключение" icon="point">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">


   
    <table><tr><td class="col1">
    <span class="dbminputlabel">Источник подключения</span><br>
      <select id="source_conn_storage" class="round" onchange="glob.onComparisonChanged(this)">
      <option value="0" selected>Подключить</option>
      <option value="1">Временная Переменная</option>
      <option value="2">Переменная Сервера</option>
      <option value="3">Глобальная Переменная</option>
      </select>
      </td>
      <td class="col2">
    <div id="varNameContainer2">
    <span class="dbminputlabel">Имя переменной</span><br>
      <input id="source_conn_varName" class="round" type="text" list="variableList"/>
      </td></tr></table>      

  
  <br>

  <div id="authSection" style="display: none;">
  <span class="dbminputlabel">База Данных</span><br>
              <select id="otype" class="round">
                <option value="0" selected="selected">mysql</option>
                <option value="1">postgres</option>
                <option value="2">mssql</option>
                <option value="3">sqlite</option>
              </select>

              <br>
              
                  <table><tr><td class="col3">
                  <span class="dbminputlabel">Хост</span><br>
                  <input id="hostname" class="round" placeholder="localhost" type="text" />
                  </td>
                  <td class="col4">
                  <span class="dbminputlabel">Порт</span><br>
                  <input id="port" class="round" placeholder="3311" type="text" />
                  </td></tr></table>

                  <br>

                  <table><tr><td class="col5">
                  <span class="dbminputlabel">Имя пользователя</span><br>
                  <input id="username" class="round" placeholder="root" type="text" />
                  </td>
                  <td class="col6">
                  <span class="dbminputlabel">Пароль</span><br>
                  <input id="password" class="round" placeholder="password" type="password" />
                  </td></tr></table>

                  <br>

                  <span class="dbminputlabel">Имя базы данных</span><br>
                  <input id="database" class="round"  placeholder="dbm" type="text" />

                  <br>

                  
              <div id="checkSection" class="tiny ui labeled button" tabindex="0" style="width:100% !important;background:#222 !important">
                <div id="checkConnection" class="ui button" style="float:left;width:120px">Проверить</div>
                <a id="checkConnection_lbl" class="ui basic label yellow" style="width:100% !important;background:#222 !important">Готово... Сохраните действие перед нажатием на "Проверить"!</a>
              </div>
             
      <div id="storeSource"><br />

      <span class="dbminputlabel">Режим отладки</span><br>
        <select id="debugMode" class="round">
          <option value="0" selected="selected">Отключено</option>
          <option value="1">Включить всё</option>
          <option value="2">Включить только данные подключения</option>
          <option value="3">Включить только данные запроса/действия</option>
          <option value="4">Включить только результат Json Path/Имя столбца</option>
        </select>
<br>
      
      <table><tr><td class="col1">
      <span class="dbminputlabel">Хранить соединение</span><br />
        <select id="store_source_conn_storage" class="round" onchange="glob.variableChange(this, 'varNameContainer3')">
          ${data.variables[0]}
        </select>
        </td>
        <td class="col2">
      <div id="varNameContainer3">
      <span class="dbminputlabel">Имя переменной</span><br />
        <input id="store_source_conn_varName" class="round" type="text" />
      </div>
      </td></tr></table>
      </div>
    </div>

    </div>

    </div>
    </tab>

    <tab label="Сохранить" icon="download">
      <dialog-list id="branches" fields='["jsonPath", "debug", "formato", "storage", "varName"]' dialogResizable dialogTitle="Парсинг" dialogWidth="600" dialogHeight="400" listLabel="Парсеры" listStyle="height: calc(100vh - 250px);" itemName="Item" itemHeight="28px;" itemTextFunction="glob.formatItem(data)" itemStyle="line-height: 28px;">
         
        <div style="margin: 10px;" onmouseover='(function(){
          const xinelaslink = document.getElementsByClassName("xinelaslink")[0];
          const url = xinelaslink.getAttribute("data-url");
          if (url) {
            xinelaslink.setAttribute("title", url);
            xinelaslink.addEventListener("click", (e) => {
              e.stopImmediatePropagation();
              console.log("Запуск URL: [" + url + "] в браузере.");
              require("child_process").execSync("start " + url);
            });
          }
        })()'>

        <span class="dbminputlabel" style="float: left";>JSON путь / Имя колонки</span>
        <span class="xinelaslink dbminputlabel" style="float: right; cursor: pointer; text-decoration: underline;" data-url="http://goessner.net/articles/JsonPath/index.html#e2">Примеры</span>
        <input type="text" class="round" id="jsonPath">

        <br>

        <span class="dbminputlabel">Опции</span><br>
        <div style="padding: 10px; background: rgba(0,0,0,0.2);">
          <dbm-checkbox id="debug" label="Отладка в консоли"></dbm-checkbox>
        </div>

        <br>

        <span class="dbminputlabel">Формат</span>
        <select id="formato" class="round">
          <option value="0">Исходный</option>
          <option value="1">Число</option>
          <option value="2">Текст</option>
          <option value="3">Список</option>
          <option value="4">True/False</option>
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
    </tab>

    <tab label="Конфиг" icon="settings">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">

    <div id="flutuador" style="padding:0px 0px 15px 0px">
    <table style="width:100%;"><tr>
    <td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Не обязательное поле"></td>
    <td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
    </tr></table>
    </div>


    

<span class="dbminputlabel">Опции</span><br><div style="padding:10px;background:rgba(0,0,0,0.2)">
<dbm-checkbox id="errcmd" label="Отображать ошибку в консоли" checked></dbm-checkbox>
</div>

<br>


      <div>
      <div style="float: left; width: 38%" id="xinext">
      <span class="dbminputlabel">При ошибке</span><br>
      <select id="iffalse" class="round" onchange="glob.onComparisonChanged2(this)">
      <option value="0" selected>Продолжить действия</option>
      <option value="1">Остановить последовательность действий</option>
      <option value="2">Перейти к действию</option>
      <option value="3">Пропустить действия</option>
      <option value="4">Перейти к якорю</option>
      <option value="5">Выполнить действия и остановиться</option>
      <option value="6">Выполнить действия и продолжить</option>
      </select>
      <br>
      </div>
      <div id="iffalseContainer" style="display: none; float: right; width: 60%;"><div id="xincontrol"><span id="xinelas" class="dbminputlabel">Para</span><br><input id="iffalseVal" class="round" name="actionxinxyla" type="text"></div>
      </div><br></div>
      <div id="containerxin" style="width:100%">
      <br><br>
      <action-list-input id="actionserr" height="calc(100vh - 450px)"></action-list-input>
      </div>
      
      <div style="padding-top:8px">
      <table>
        <tr>
        <td class="col1"><span class="dbminputlabel">Хранить ошибку в</span><br>
        <select id="errs" value="0" class="round" onchange="glob.variableChange(this, 'varerrsv')">
          ${data.variables[0]}
        </select></td>
        <td class="col2"><div id="varerrsv"><span class="dbminputlabel">Имя переменной</span><br>
        <input id="errv" class="round" type="text"></div></td>
        </tr>
        </table>
      </div>
    

      </div>
      </tab>

<tab label="Помощь" icon="help">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">

      <button class="tiny compact ui icon button"><span class="xinelaslink" data-url="https://www.w3schools.com/sql/">Учебник W3Schools по SQL</span></button>
      <button class="tiny compact ui icon button"><span class="xinelaslink" data-url="https://tutorialzine.com/2016/01/learn-sql-in-20-minutes">Изучите SQL за 20 минут</span></button>
      <br><br>

      <center>
      <tlt><b>Создать таблицу</b></tlt>
      <tl>CREATE TABLE <span style="color:green">имя_таблицы</span> (<span style="color:gold">id</span> <span style="color:red">int</span>, <span style="color:gold">nome</span> <span style="color:red">varchar(255)</span>, <span style="color:gold">money</span> <span style="color:red">int</span>);</tl><br>

      <tlt><b>Добавить столбец и проигнорировать существующий</b></tlt>
      <tl>INSERT IGNORE INTO <span style="color:green">имя_таблицы</span>(<span style="color:gold">id</span>) VALUES(<span style="color:orange">\${member.id}</span>)</tl><br>

      <tlt><b>Запросить</b></tlt>
      <tl>SELECT * FROM <span style="color:green">имя_таблицы</span> WHERE id = '<span style="color:orange">\${member.id}</span>'</tl><br>

      <tlt><b>Обновить столбец</b></tlt>
      <tl>UPDATE <span style="color:green">имя_таблицы</span> SET <span style="color:orange">money</span> = <span style="color:orange">money</span> + 1 WHERE <span style="color:gold">id</span>=<span style="color:orange">\${member.id}</span></tl><br>

      <tlt><b>Удалить столбец</b></tlt>
      <tl>DELETE FROM <span style="color:green">имя_таблицы</span> WHERE <span style="color:gold">id</span>=<span style="color:orange">\${member.id}</span></tl><br>

      <tlt><b>Суммировать все столбцы таблицы [Используйте .SUM(money) в Json Path]</b></tlt>
      <tl>SELECT SUM(<span style="color:gold">money</span>) FROM <span style="color:green">имя_таблицы</span></tl><br>

      <tlt><b>Подсчитать столбцы таблицы с более чем 100 в столбце money [Используйте .COUNT(id) в Json Path]</b></tlt>
      <tl>SELECT COUNT(<span style="color:gold">id</span>) FROM <span style="color:green">имя_таблицы</span> WHERE <span style="color:gold">money</span> > 100</tl><br>

      <tlt><b>Рейтинг - При выводе преобразуйте в строку JSON</b></tlt>
      <tl>SELECT <span style="color:gold">id</span>, <span style="color:gold">money</span>, RANK() over(ORDER BY <span style="color:gold">money</span> DESC) AS rank FROM <span style="color:green">nome_da_tabela</span></tl><br>

      <tlt><b>Компараторы</b></tlt>
      <tl><table>
      <tr><td class="cols">=</td><td class="cols">Равно</td></tr>
      <tr><td class="cols">!=</td><td class="cols">Не равно</td></tr>
      <tr><td class="cols"><</td><td class="cols">Меньше</td></tr>
      <tr><td class="cols">></td><td class="cols">Больше</td></tr>
      <tr><td class="cols"><=</td><td class="cols">Меньше или равно</td></tr>
      <tr><td class="cols">>=</td><td class="cols">Больше или равно</td></tr>
      <tr><td class="cols">@></td><td class="cols">Содержит</td></tr>
      <tr><td class="cols"><@</td><td class="cols">Содержится в</td></tr>
      <tr><td class="cols">~</td><td class="cols">Соответствует регулярному выражению, учитывает регистр</td></tr>
      <tr><td class="cols">~*</td><td class="cols">Соответствует регулярному выражению, не учитывает регистр</td></tr>
      <tr><td class="cols">!~</td><td class="cols">Не соответствует регулярному выражению, учитывает регистр</td></tr>
      <tr><td class="cols">!~*</td><td class="cols">Не соответствует регулярному выражению, не учитывает регистр</td></tr>
      </table>
      
      </tl><br>

      <tlt><b>Добавление дополнительных операторов<br>SELECT * FROM имя_столбца WHERE имя_столбца ...</b></tlt>
      <tl><table>
      <tr><td class="cols">OR</td><td class="cols">ИЛИ</td><td class="cols">money = 100 OR money = 200</td></tr>
      <tr><td class="cols">AND</td><td class="cols">И</td><td class="cols">money > 0 AND показать = 1</td></tr>
      <tr><td class="cols">IN</td><td class="cols">В</td><td class="cols">IN ('синий','зеленый');</td></tr>
      <tr><td class="cols">BETWEEN</td><td class="cols">Между</td><td class="cols">BETWEEN 500 AND 100</td></tr>
      <tr><td class="cols">LIKE</td><td class="cols">Ищет определенный шаблон<br>Символ % указывает на то, что после "Луиз" может быть что угодно</td></tr>
      </table>
      </tl><br>

      <tlt><b>Функции</b></tlt>
      <tl><table>
      <tr><td class="cols">COUNT()</td><td class="cols">Возвращает количество строк</td></tr>
      <tr><td class="cols">SUM()</td><td class="cols">Возвращает общую сумму числового столбца</td></tr>
      <tr><td class="cols">AVG()</td><td class="cols">Возвращает среднее значение набора значений</td></tr>
      <tr><td class="cols">MIN()</td><td class="cols">Получает минимальное значение столбца</td></tr>
      <tr><td class="cols">MAX()</td><td class="cols">Получает максимальное значение столбца</td></tr>
      </table>
      </tl><br>

      </center>



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
    tl{background:rgba(0,0,0,0.1);border: 1px solid rgba(50,50,50,0.1);padding:5px;width:100%;display:block}
    tlt{background:rgba(0,0,0,0.2);border: 1px solid rgba(50,50,50,0.2);padding:2px;width:100%;display:block}
   .dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
   .dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}

</style>`
  },

  init() {
    const { glob, document } = this;

    function getType(key) {
      switch (key) {
        case '0':
          return 'mysql';
        case '1':
          return 'postgres';
        case '2':
          return 'mssql';
        case '3':
          return 'sqlite';
        default:
          return 'mysql';
      }
    }

    glob.onComparisonChanged2 = function (event) {
      if (event.value > "1") {
        document.getElementById("iffalseContainer").style.display = null;
      } else {
        document.getElementById("iffalseContainer").style.display = "none";
      }
      if (event.value == "5" || event.value == "6") {
        document.getElementById("containerxin").style.display = null;
        document.getElementById("xincontrol").style.display = "none";
        document.getElementById("xinext").style.width = "100%";
      } else {
        document.getElementById("containerxin").style.display = "none";
        document.getElementById("xincontrol").style.display = null;
        document.getElementById("xinext").style.width = "38%";
      }
      if (event.value == "2") {
        document.querySelector("[id='xinelas']").innerText = (`Номер действия`);
      }
      if (event.value == "3") {
        document.querySelector("[id='xinelas']").innerText = (`Пропустить действия`);
      }
      if (event.value == "4") {
        document.querySelector("[id='xinelas']").innerText = (`Имя якоря`);
      }
    }

    glob.onComparisonChanged2(document.getElementById("iffalse"));
    glob.variableChange(document.getElementById('errs'), 'varerrsv');



    glob.onComparisonChanged3 = function (event) {
      if (event.value == "0") {
        document.getElementById("seppath").style.display = null;
      } else {
        document.getElementById("seppath").style.display = "none";
      }
    }

    glob.onComparisonChanged3(document.getElementById("stringifyOutput"));

    try {
      const type = document.getElementById('otype').value
      const hostname = document.getElementById('hostname').value
      const port = document.getElementById('port').value
      const username = document.getElementById('username').value
      const password = document.getElementById('password').value
      const database = document.getElementById('database').value

      document.getElementById('checkConnection').onclick = function (evt) {
        const Sequelize = require('sequelize')

        const options = {
          host: hostname || 'localhost',
          port: port || '3311',
          dialect: getType(type) || 'sqlite',
          operatorsAliases: false,
          pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
          }
        }

        const sequelize = new Sequelize(database || 'database', username || 'username', password || 'password', options)

        document.getElementById('checkConnection_lbl').setAttribute('class', 'ui basic label yellow')
        document.getElementById('checkConnection_lbl').innerHTML = 'Checando...'

        function isValid(bool, message = false) {
          document.getElementById('checkConnection_lbl').setAttribute('class', `ui basic label ${bool ? 'green' : 'red'}`)
          document.getElementById('checkConnection_lbl').innerHTML = ((bool ? 'Válido' : 'Inválido') + (message ? `: ${message}` : ''))
        }

        sequelize.authenticate()
          .then(() => isValid(true))
          .catch((err) => isValid(false, err))
      }

      document.getElementById('otype').onchange = function (evt) {
        const lite = evt.target.value === '3'
        document.getElementById('auth').style.display = lite ? 'none' : ''
        document.getElementById('showPath').style.display = lite ? '' : 'none'
        document.getElementById('database').setAttribute('placeholder', lite ? './mydb.sql' : 'dbm')
      }
      document.getElementById('database').setAttribute('placeholder', document.getElementById('otype').value === '3' ? './mydb.sql' : 'dbm')

      const xinelaslinks = document.getElementsByClassName('xinelaslink');
      for (let x = 0; x < xinelaslinks.length; x++) {
        const xinelaslink = xinelaslinks[x];
        const url = xinelaslink.getAttribute('data-url');
        if (url) {
          xinelaslink.setAttribute('title', url);
          xinelaslink.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            console.log(`Запуск URL: [${url}] в браузере.`);
            require('child_process').execSync(`start ${url}`);
          });
        }
      }
    } catch (error) {
      alert(`[Run SQL Query] Error: \n\n ${error.message}\n\n Check \n ''${require('path').resolve('dbmmods_dbm_errors.txt')}' for more details.`)
      require('fs').appendFileSync('dbmmods_dbm_errors.txt', `${new Date().toUTCString()} : ${error.stack ? error.stack : error}\n\n`)
    }

    glob.onComparisonChanged = function (event) {
      if (event.value == 0) {
        document.getElementById("varNameContainer2").style.display = "none";
        document.getElementById("authSection").style.display = null;
      } else {
        document.getElementById("varNameContainer2").style.display = null;
        document.getElementById("authSection").style.display = "none";
      }
    }

    glob.onComparisonChanged(document.getElementById("source_conn_storage"));

    glob.variableChange(document.getElementById('storage'), 'varNameContainer')
    glob.variableChange(document.getElementById('store_source_conn_storage'), 'varNameContainer3')

    glob.formatItem = function (data) {
      let result = `<div style="width: calc(100% - 40px); overflow: hidden; float: left;">Хранить: `;

      switch (parseInt(data.formato)) {
        case 0:
          result += "Источник";
          break;
        case 1:
          result += "Число";
          break;
        case 2:
          result += "Текст";
          break;
        case 3:
          result += "Список";
          break;
        case 4:
          result += "True/False";
          break;
      }

      result += `: "${data.jsonPath}" em "${data.varName}"</div><div style="color:#d77979;overflow: hidden;float:right;width:40px;text-align:right;padding:0px 10px 0px 0px">${data.debug ? '<i class="bug icon"></i>': ""}</div>`;
      return result;
    };

  },

  action(cache) {
    const data = cache.actions[cache.index];

    const sourceConnStorage = parseInt(data.source_conn_storage);
    const sourceConnVarName = this.evalMessage(data.source_conn_varName, cache);

    const storeSourceConnStorage = parseInt(data.store_source_conn_storage);
    const storeSourceConnVarName = this.evalMessage(data.store_source_conn_varName, cache);

    const type = data.otype;
    const hostname = this.evalMessage(data.hostname, cache);
    const port = this.evalMessage(data.port, cache);
    const username = this.evalMessage(data.username, cache);
    const password = this.evalMessage(data.password, cache);
    const database = this.evalMessage(data.database, cache);
    const query = this.evalMessage(data.query, cache);
    var path = this.evalMessage(data.path, cache);
    const varName = this.evalMessage(data.varName, cache);

    const storage = parseInt(data.storage);

    const DEBUG = parseInt(data.debugMode);

    const stringifyOutput = parseInt(data.stringifyOutput);
    if (stringifyOutput == 1) path = "";

    const Mods = this.getMods();
    function getType(key) {
      let res
      switch (key) {
        case '0':
          res = 'mysql';
          Mods.require('mysql2');
          break
        case '1':
          res = 'postgres';
          Mods.require('pg-hstore');
          break
        case '2':
          res = 'mssql';
          Mods.require('tedious');
          break
        case '3':
          res = 'sqlite';
          Mods.require('sqlite3');
          break
        default:
          res = 'sqlite';
          Mods.require('sqlite3');
          break
      }
      return res;
    }

    try {
      const Sequelize = Mods.require('sequelize');

      const options = {
        host: hostname || 'localhost',
        port: port || '3311',
        dialect: getType(type) || 'sqlite',
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
      }

      if (!DEBUG) options.logging = false;

      if (getType(type) === 'sqlite') options.storage = (require('path').resolve(database) || 'database.sqlite')

      let sequelize
      if (sourceConnStorage > 0 && sourceConnVarName && storeSourceConnStorage === 0) {
        const storedConnection = this.getVariable(sourceConnStorage, sourceConnVarName, cache)
        sequelize = storedConnection && storedConnection.sequelize
        if (sequelize) {
          if (DEBUG == 1 || DEBUG == 2) console.log(`Run SQL Query MOD: Соединение установлено для хоста '${storedConnection.hostname}:${storedConnection.port}', используя базу данных '${storedConnection.database}'`)
        } else {
          sequelize = new Sequelize(database || 'database', username || 'username', password || 'password', options)
        }
      } else {
        sequelize = new Sequelize(database || 'database', username || 'username', password || 'password', options)
      }

      sequelize.authenticate().then(() => {
        if (storeSourceConnStorage > 0 && storeSourceConnVarName && sourceConnStorage === 0) {
          if (sequelize) {
            const storedConnection = { hostname, port, database, sequelize }
            if (DEBUG == 1 || DEBUG == 2) console.log(`Run SQL Query MOD: Соединение установлено для хоста '${storedConnection.hostname}:${storedConnection.port}' с использованием базы данных '${storedConnection.database}'`)
            this.storeValue(storedConnection, storeSourceConnStorage, storeSourceConnVarName, cache)
          }
        }
        if (query) {
          sequelize.query(query, { type: Object.keys(Sequelize.QueryTypes).find(type => query.toUpperCase().startsWith(type)) || Sequelize.QueryTypes.RAW }).then((results, metadata) => {
            let jsonOut = false;
            if (results && path !== undefined) {
              jsonOut = Mods.jsonPath(results, path)

              if (jsonOut === false) jsonOut = Mods.jsonPath(results, ('$.').concat(path))

              if (jsonOut === false) jsonOut = Mods.jsonPath(results, ('$.[0].').concat(path))
              if (jsonOut) {
                if (jsonOut.length === 0) jsonOut = jsonOut[0]
                if (DEBUG == 1 || DEBUG == 4) console.log(`Run SQL Query MOD: Значения JSON-данных, начиная с [${path}], сохранены в [${varName}]`)
                if (DEBUG == 1 || DEBUG == 4) console.dir(jsonOut)
              }
            }
            if (DEBUG == 1 || DEBUG == 3) {
              console.log('Run SQL Query MOD: Данные запроса/действия')
              for (let i = 0; i < results.length; i++) {
                console.log(`[${i}] = ${JSON.stringify(results[i])}`)
              }
              const storageType = ['', 'tempVars', 'serverVars', 'globalVars']
              const output = storageType[storage]
              console.log(`\r\nПрисоедините ключ, с которым вы хотите сохранить это значение, к переменной.\nЕсли вы не используете поле Path в модуле, посмотрите, как получить специальные значения. Пример \${${output}("${varName}")} для \${${output}("${varName}")[0]["${Object.keys(results[0])[0]}"]}\nПример: Run Script ${output}("${varName}")["${Object.keys(results[0])[0]}"] или без \${}.\r\nПрисоедините путь в конце после ключа или используйте модуль Parse From Stored JSON, чтобы получить желаемое значение\nПример \${${output}("${varName}")[key].path} или используйте поле JSON Path в пользовательском интерфейсе модуля.`)
            }

            const branches = data.branches;

            for (var i = 0; i < branches?.length || 0; i++) {
              const branch = branches[i];
              const pathParse = this.evalMessage(branch.jsonPath, cache);
              const varNameParse = this.evalMessage(branch.varName, cache);
              const storageParse = parseInt(branch.storage, 10);

              try {
                if (pathParse && results) {
                  var outData = Mods.jsonPath(results, pathParse);

                  if (outData == false) {
                    outData = Mods.jsonPath(results, `$.${pathParse}`);
                  }

                  if (outData == false) {
                    outData = Mods.jsonPath(results, `$..${pathParse}`);
                  }

                  if (branch.debug) console.log(outData);

                  try {
                    JSON.parse(JSON.stringify(outData));
                  } catch (error) {
                    const errorJson = JSON.stringify({ error, success: false });
                    this.storeValue(errorJson, storageParse, varNameParse, cache);
                    this.displayError(data, cache, error.stack ? error.stack : error);
                    continue;
                  }

                  var outValue = eval(JSON.stringify(outData), cache);

                  switch (parseInt(branch.formato)) {
                    case 1:
                      outValue = parseFloat(outValue);
                      if(isNaN(outValue)){outValue = 0}
                      break;
                    case 2:
                      outValue = String(outValue);
                      break;
                    case 3:
                      outValue = String(outValue).split(",");
                      break;
                    case 4:
                      outValue = Boolean(outValue);
                      break;
                  }

                  if (outData.success === null || outValue.success === null) {
                    const errorJson = JSON.stringify({
                      error: "error",
                      statusCode: 0,
                      success: false
                    });

                    this.storeValue(errorJson, storageParse, varNameParse, cache);
                    continue;

                  } else if (!outValue || outValue.success === null) {
                    const errorJson = JSON.stringify({
                      error: "error",
                      statusCode: 0,
                      success: false
                    });
                    this.storeValue(outValue, storageParse, varNameParse, cache);
                    continue;
                  } else {
                    this.storeValue(outValue, storageParse, varNameParse, cache);
                    if (branch.debug) console.log(`Run SQL Query MOD: Значения [${pathParse}] были сохранены в [${varNameParse}]`);
                  }
                }
              } catch (error) {
                const errorJson = JSON.stringify({
                  error,
                  statusCode: 0,
                  success: false,
                });
                this.storeValue(errorJson, storageParse, varNameParse, cache);
                this.displayError(data, cache, `Run SQL Query MOD: Ошибка: ${errorJson} сохранена в [${varNameParse}]`);
                continue;
              }
            }

            out = jsonOut || results;

            if (stringifyOutput == 1) {
              out = JSON.stringify(out);
            }

            if (data.formato == "0" || data.formato == "undefined" || data.formato == undefined) {
              this.storeValue(out, storage, varName, cache);
            }

            if (data.formato == "1") {
              out = parseFloat(out);
              this.storeValue(out, storage, varName, cache);
            }

            if (data.formato == "2") {
              out = String(out);
              this.storeValue(out, storage, varName, cache);
            }

            if (data.formato == "3") {
              out = String(out).split(new RegExp(","));
              this.storeValue(out, storage, varName, cache);
            }

            if (data.formato == "4") {
              out = Boolean(out);
              this.storeValue(out, storage, varName, cache);
            }

            this.callNextAction(cache);
          }).catch((err) => {
            if (err && err.original) {

              if (data.errcmd === true) {
                console.log('Ошибка: ' + cache.toString() + ' - Действие ' + (cache.index + 1) + '# ' + data.name);
                console.log(err.original);
              }

              this.storeValue(err.original, parseFloat(data.errs), this.evalMessage(data.errv, cache), cache);

              if (data.iffalse == "5" || data.iffalse == "6") {

                if (data.iffalse == "5") {
                  this.executeSubActions(data.actionserr, cache);
                } else {
                  this.executeSubActionsThenNextAction(data.actionserr, cache);
                }

              } else {
                this.executeResults(false, data, cache);
              }
            }
          })
        } else {
          this.callNextAction(cache);
        }
      }).catch((err) => {

        if (data.errcmd === true) {
          console.log('Ошибка: ' + cache.toString() + ' - Действие ' + (cache.index + 1) + '# ' + data.name)
          console.log(err)
        }

        this.storeValue(err, parseFloat(data.errs), this.evalMessage(data.errv, cache), cache)

        if (data.iffalse == "5" || data.iffalse == "6") {

          if (data.iffalse == "5") {
            this.executeSubActions(data.actionserr, cache);
          } else {
            this.executeSubActionsThenNextAction(data.actionserr, cache);
          }

        } else {
          this.executeResults(false, data, cache);
        }


      })
    } catch (error) {

      if (data.errcmd === true) {
        console.log('Ошибка: ' + cache.toString() + ' - Действие ' + (cache.index + 1) + '# ' + data.name);
        console.log(`${error.stack ? error.stack : error}`);
      }

      this.storeValue(error, parseFloat(data.errs), this.evalMessage(data.errv, cache), cache);

      if (data.iffalse == "5" || data.iffalse == "6") {
        if (data.iffalse == "5") {
          this.executeSubActions(data.actionserr, cache);
        } else {
          this.executeSubActionsThenNextAction(data.actionserr, cache);
        }
      } else {
        this.executeResults(false, data, cache);
      }
    }
  },

  mod() { }
}