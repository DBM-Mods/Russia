module.exports = {
  name: 'Run SQL Query MOD',
  section: 'Other Stuff',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
    },

  variableStorage (data, varType) {
    const type = parseInt(data.storage)
    if (type !== varType) return
    return ([data.varName, 'JSON Object'])
  },

  subtitle (data) {
    let sub = ''
    if (data.store_source_conn_storage !== 0) {
      sub += ''
    }

    if (data.query) {
      sub += `Ação(${data.query}) `
    }

    if (data.path) {
      sub += `Path(${data.path}) `
    }

    if (data.storage > 0) {
      const storage = ['', 'Временная переменная', 'Серверная переменная', 'Глобальная переменная']
      sub += `${storage[parseInt(data.storage)]}(${data.varName}) `
    }

     if(data.descriptionx == true){
      desccor = data.descriptioncolor
      } else {
        desccor = 'none'
      }

    return data.description
    ? `<font style="color:${desccor}">${data.description}</font>`
    : `<font style="color:${desccor}">${sub}</font>`
  },

  fields: [
  'storage',
  'stringifyOutput',
  'formato',
  'varName',
  'hostname',
  'port',
  'username',
  'password',
  'database',
  'query',
  'path',
  'otype',
  'source_conn_storage',
  'source_conn_varName',
  'store_source_conn_storage',
  'store_source_conn_varName',
  'debugMode',
  'descriptioncolor',
  'description',
  'descriptionx'],

  html (isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 1.0</div>

    <tab-system>

    <tab label="Действие" icon="wizard">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">

   <span class="dbminputlabel">Последовательность запросов / действий</span>
   <textarea id="query" class="round" placeholder="SELECT * FROM 'users'" style="width: 100%;" type="textarea" rows="6" cols="19"></textarea>

    <xinspace>

    <table><tr><td class="col3">
    <span class="dbminputlabel">Json путь / имя столбца</span> 
    <input id="path" class="round"; style="width: 100%;" placeholder="Оставьте это пустым, чтобы хранить все" type="text">
    </td>
    <td class="col4">
    <span class="dbminputlabel">Формат</span>
    <select id="formato" class="round">
      <option value="0" selected>Источник</option>
      <option value="1">Число</option>
      <option value="2">Текст</option>
      <option value="3">Список</option>
    </select>
    </td></tr></table>

    <xinspace>

    <table><tr><td class="col1">
    <span class="dbminputlabel">Результаты в</span><br />
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

    
    <tab label="Соединение" icon="point">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">


   
    <table><tr><td class="col1">
    <span class="dbminputlabel">Источник соединения</span><br>
      <select id="source_conn_storage" class="round" onchange="glob.onComparisonChanged(this)">
      <option value="0" selected>Подсоединять (Даные)</option>
      <option value="1">Временная переменная</option>
      <option value="2">Переменная сервера</option>
      <option value="3">Глобальная переменная</option>
      </select>
      </td>
      <td class="col2">
    <div id="varNameContainer2">
    <span class="dbminputlabel">Имя переменной</span><br>
      <input id="source_conn_varName" class="round" type="text" list="variableList"/>
      </td></tr></table>      

  
  <br>

  <div id="authSection" style="display: none;">
  <span class="dbminputlabel">База данных</span><br>
              <select id="otype" class="round">
                <option value="0" selected="selected">mysql</option>
                <option value="1">postgres</option>
                <option value="2">mssql</option>
                <option value="3">sqlite</option>
              </select>

              <br>
              
                  <table><tr><td class="col3">
                  <span class="dbminputlabel">Имя хоста</span><br>
                  <input id="hostname" class="round" placeholder="localhost" type="text" />
                  </td>
                  <td class="col4">
                  <span class="dbminputlabel">Порта</span><br>
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
                <a id="checkConnection_lbl" class="ui basic label yellow" style="width:100% !important;background:#222 !important">Подготовьте ... Сохраните действие перед нажатием проверки!</a>
              </div>
              
           
              


      <div id="storeSource"><br />
      
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
    </tab>


    <tab label="Конфиг" icon="settings">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">

    <div id="flutuador" style="padding:0px 0px 15px 0px">
    <table style="width:100%;"><tr>
    <td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Оставьте пустым, чтобы не использовалось!"></td>
    <td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
    </tr></table>
    </div>


    <span class="dbminputlabel">Режим отладки</span><br>
        <select id="debugMode" class="round">
          <option value="0" selected="selected">Отключено</option>
          <option value="1">Включить все</option>
          <option value="2">Включить только данные подключения</option>
          <option value="3">Включить только данные запроса / действия</option>
          <option value="4">Включить только результат имени столбца</option>
        </select>
<br>
      
      <span class="dbminputlabel">Вывод результата</span><br>
      <select id="stringifyOutput" class="round">
        <option value="0" selected="selected">Обычный</option>
        <option value="1">Конвертер пара -строка json</option>
      </select>
    

      </div>
      </tab>

<tab label="Помощь" icon="help">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">

      <button class="tiny compact ui icon button"><span class="xinelaslink" data-url="https://www.w3schools.com/sql/">Узнать подробнее о W3Schools SQL</span></button>
      <button class="tiny compact ui icon button"><span class="xinelaslink" data-url="https://tutorialzine.com/2016/01/learn-sql-in-20-minutes">Узнать SQL за 20 минут</span></button>
      <br><br>

      <center>
      <tlt><b>Создать таблицу</b></tlt>
      <tl>CREATE TABLE <span style="color:green">nome_da_tabela</span> (<span style="color:gold">id</span> <span style="color:red">int</span>, <span style="color:gold">nome</span> <span style="color:red">varchar(255)</span>, <span style="color:gold">money</span> <span style="color:red">int</span>);</tl><br>

      <tlt><b>Вставить столбец и игнорировать существующий</b></tlt>
      <tl>INSERT IGNORE INTO <span style="color:green">nome_da_tabela</span>(<span style="color:gold">id</span>) VALUES(<span style="color:orange">\${member.id}</span>)</tl><br>

      <tlt><b>Консультировать</b></tlt>
      <tl>SELECT * FROM <span style="color:green">nome_da_tabela</span> WHERE id = '<span style="color:orange">\${member.id}</span>'</tl><br>

      <tlt><b>Обновление столбца</b></tlt>
      <tl>UPDATE <span style="color:green">nome_da_tabela</span> SET <span style="color:orange">money</span> = <span style="color:orange">money</span> + 1 WHERE <span style="color:gold">id</span>=<span style="color:orange">\${member.id}</span></tl><br>

      <tlt><b>Удалить столбец</b></tlt>
      <tl>DELETE FROM <span style="color:green">nome_da_tabela</span> WHERE <span style="color:gold">id</span>=<span style="color:orange">\${member.id}</span></tl><br>

      <tlt><b>Добавьте все столбцы таблицы [Use .SUM(money) в путь в формате Json]</b></tlt>
      <tl>SELECT SUM(<span style="color:gold">money</span>) FROM <span style="color:green">nome_da_tabela</span></tl><br>

      <tlt><b>Столбцы пользовательской таблицы с более чем 100 money [Use .COUNT(id) в путь в формате Json]</b></tlt>
      <tl>SELECT COUNT(<span style="color:gold">id</span>) FROM <span style="color:green">nome_da_tabela</span> WHERE <span style="color:gold">money</span> > 100</tl><br>

      <tlt><b>Ranking - В выводе преобразовать в строку JSON</b></tlt>
      <tl>SELECT <span style="color:gold">id</span>, <span style="color:gold">money</span>, RANK() over(ORDER BY <span style="color:gold">money</span> DESC) AS rank FROM <span style="color:green">nome_da_tabela</span></tl><br>

      <tlt><b>Сравнения</b></tlt>
      <tl><table>
      <tr><td class="cols">=</td><td class="cols">Равно</td></tr>
      <tr><td class="cols">!=</td><td class="cols">Не равен</td></tr>
      <tr><td class="cols"><</td><td class="cols">Меньше чем</td></tr>
      <tr><td class="cols">></td><td class="cols">Больше тогда</td></tr>
      <tr><td class="cols"><=</td><td class="cols">Меньше или равно</td></tr>
      <tr><td class="cols">>=</td><td class="cols">Больше или равно</td></tr>
      <tr><td class="cols">@></td><td class="cols">Содержать</td></tr>
      <tr><td class="cols"><@</td><td class="cols">Он содержится</td></tr>
      <tr><td class="cols">~</td><td class="cols">Соответствует регулярному выражению, чувствительно к регистру</td></tr>
      <tr><td class="cols">~*</td><td class="cols">Соответствует регулярному выражению, не чувствительно к регистру</td></tr>
      <tr><td class="cols">!~</td><td class="cols">Не соответствует регулярному выражению, чувствительно к регистру</td></tr>
      <tr><td class="cols">!~*</td><td class="cols">Не соответствует регулярному выражению, не чувствителен к регистру</td></tr>
      </table>
      
      </tl><br>

      <tlt><b>Добавить больше сравнений<br>SELECT * FROM nome_da_coluna WHERE nome_da_coluna ...</b></tlt>
      <tl><table>
      <tr><td class="cols">OR</td><td class="cols">OU</td><td class="cols">money = 100 OR money = 200</td></tr>
      <tr><td class="cols">AND</td><td class="cols">E</td><td class="cols">money > 0 AND mostrar = 1</td></tr>
      <tr><td class="cols">IN</td><td class="cols">DENTRO</td><td class="cols">IN ('azul','verde');</td></tr>
      <tr><td class="cols">BETWEEN</td><td class="cols">ENTRE</td><td class="cols">BETWEEN 500 AND 100</td></tr>
      <tr><td class="cols">LIKE</td><td class="cols">Procura um padrão específico<br>Характер Curinga %указывает на то, что после «Луиза» может быть что угодно</td><td class="cols">LIKE 'Luiz%'</td></tr>
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

  init () {
    const { glob, document } = this

    function getType (key) {
      switch (key) {
        case '0':
          return 'mysql'
        case '1':
          return 'postgres'
        case '2':
          return 'mssql'
        case '3':
          return 'sqlite'
        default:
          return 'mysql'
      }
    }

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

        function isValid (bool, message = false) {
          document.getElementById('checkConnection_lbl').setAttribute('class', `ui basic label ${bool ? 'green' : 'red'}`)
          document.getElementById('checkConnection_lbl').innerHTML = ((bool ? 'Válido' : 'Inválido') + (message ? `: ${message}` : ''))
        }

        sequelize.authenticate()
          .then(() => isValid(true))
          .catch((err) => isValid(false, err))
      }

      // to show/hide certian connection options if sqllite is selected
      document.getElementById('otype').onchange = function (evt) {
        const lite = evt.target.value === '3'
        document.getElementById('auth').style.display = lite ? 'none' : ''
        document.getElementById('showPath').style.display = lite ? '' : 'none'
        document.getElementById('database').setAttribute('placeholder', lite ? './mydb.sql' : 'dbm')
      }
      document.getElementById('database').setAttribute('placeholder', document.getElementById('otype').value === '3' ? './mydb.sql' : 'dbm')

       // interactive links
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
     } catch (error) {
      // write any init errors to errors.txt in dbm's main directory
      // eslint-disable-next-line no-undef
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


   

  },

  action (cache) {
    // fields: ["storage", "varName", "hostname", "port", "username", "password", "database", "query", "otype",
    // "source_conn_storage", "storage_conn_varName", "store_source_conn_storage", "store_storage_conn_varName", "debugMode"],

    const data = cache.actions[cache.index]

    const sourceConnStorage = parseInt(data.source_conn_storage)
    const sourceConnVarName = this.evalMessage(data.source_conn_varName, cache)

    const storeSourceConnStorage = parseInt(data.store_source_conn_storage)
    const storeSourceConnVarName = this.evalMessage(data.store_source_conn_varName, cache)

    // 0=mysql, 1=postgres, 2=mssql, 3=sqllite
    const type = data.otype
    const hostname = this.evalMessage(data.hostname, cache)
    const port = this.evalMessage(data.port, cache)
    const username = this.evalMessage(data.username, cache)
    const password = this.evalMessage(data.password, cache)
    const database = this.evalMessage(data.database, cache)
    const query = this.evalMessage(data.query, cache)
    const path = this.evalMessage(data.path, cache)
    const varName = this.evalMessage(data.varName, cache)

    const storage = parseInt(data.storage)

    const DEBUG = parseInt(data.debugMode)

    const stringifyOutput = parseInt(data.stringifyOutput)

    const Mods = this.getMods()
    function getType (key) {
      let res
      switch (key) {
        case '0':
          res = 'mysql'
          Mods.require('mysql2')
          break
        case '1':
          res = 'postgres'
          Mods.require('pg-hstore')
          break
        case '2':
          res = 'mssql'
          Mods.require('tedious')
          break
        case '3':
          res = 'sqlite'
          Mods.require('sqlite3')
          break
        default:
          res = 'sqlite'
          Mods.require('sqlite3')
          break
      }
      return res
    }

    try {
      const Sequelize = Mods.require('sequelize')

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

      if (!DEBUG) {
        options.logging = false
      }

      if (getType(type) === 'sqlite') options.storage = (require('path').resolve(database) || 'database.sqlite')

      let sequelize
      if (sourceConnStorage > 0 && sourceConnVarName && storeSourceConnStorage === 0) {
        const storedConnection = this.getVariable(sourceConnStorage, sourceConnVarName, cache)
        sequelize = storedConnection && storedConnection.sequelize
        if (sequelize) {
          if (DEBUG == 1 || DEBUG == 2) console.log(`Запустите SQL -запрос Mod: установленное соединение для хоста '${storedConnection.hostname}:${storedConnection.port}', Использование базы данных '${storedConnection.database}'`)
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
            if (DEBUG == 1 || DEBUG == 2) console.log(`Запустите SQL -запрос Mod: установленное соединение для хоста '${storedConnection.hostname}:${storedConnection.port}' Использование базы данных '${storedConnection.database}'`)
            this.storeValue(storedConnection, storeSourceConnStorage, storeSourceConnVarName, cache)
          }
        }
        if (query) {
          sequelize.query(query, { type: Object.keys(Sequelize.QueryTypes).find(type => query.toUpperCase().startsWith(type)) || Sequelize.QueryTypes.RAW }).then((results, metadata) => {
            let jsonOut = false
            if (results && path !== undefined) {
              jsonOut = Mods.jsonPath(results, path)
              // if it failed and if they didn't the required initial object, add it for them
              if (jsonOut === false) jsonOut = Mods.jsonPath(results, ('$.').concat(path))
              // if it failed still, try just pulling the first object
              if (jsonOut === false) jsonOut = Mods.jsonPath(results, ('$.[0].').concat(path))
              if (jsonOut) {
                if (jsonOut.length === 0) jsonOut = jsonOut[0]
                if (DEBUG == 1 || DEBUG == 4) console.log(`Запустите SQL -запрос MOD: значения данных JSON, начиная с [${path}] Хранится в [${varName}]`)
                if (DEBUG == 1 || DEBUG == 4) console.dir(jsonOut)
              }
            }
            if (DEBUG == 1 || DEBUG == 3 ) {
              console.log('Запустите SQL -запрос MOD: Данные/действие консультации')
              for (let i = 0; i < results.length; i++) {
                console.log(`[${i}] = ${JSON.stringify(results[i])}`)
              }
              const storageType = ['', 'tempVars', 'serverVars', 'globalVars']
              const output = storageType[storage]
              console.log(`\r\nПодключите ключ, с помощью которого вы хотите сохранить это значение к переменной.\nЕсли вы не используете текстовое поле Path в MOD, посмотрите, как получить специальные значения. \${${output}("${varName}")} пара \${${output}("${varName}")[0]["${Object.keys(results[0])[0]}"]}\nПример: запустить скрипт ${output}("${varName}")["${Object.keys(results[0])[0]}"] или место без \${}.\r\nПрикрепите путь к концу после ключа или используйте Parse из сохраненного JSON, чтобы получить желаемое значение, которое вы хотите\nПример \${${output}("${varName}")[key].path} Или используйте поле JSON Way на пользовательском интерфейсе MOD.`)
            }
            out = jsonOut || results

            if(data.formato == "0" || data.formato == "undefined" || data.formato == undefined){
              this.storeValue(stringifyOutput ? JSON.stringify(out) : out, storage, varName, cache)
            }
            if(data.formato == "1"){
            out = parseFloat(out)
            this.storeValue(out, storage, varName, cache)
            }
            if(data.formato == "2"){
              out = out.toString()
              this.storeValue(out, storage, varName, cache)
              }
            if(data.formato == "3"){
              out = out.toString().split(new RegExp(','))
              this.storeValue(out, storage, varName, cache)
              }

             this.callNextAction(cache)
          }).catch((err) => {
            if (err && err.original) {
              this.storeValue({ message: err.original, error: err.original }, storage, varName, cache)
              console.error(err.original)
              this.callNextAction(cache)
            }
          })
        } else {
          this.callNextAction(cache)
        }
      }).catch((err) => {
        console.log('Не было возможности подключиться к базе данных')
        console.error(err)
      })
    } catch (error) {
      console.log(`Ошибка мода SQL: ${error.stack ? error.stack : error}`)
    }
  },

  mod () {}
}
