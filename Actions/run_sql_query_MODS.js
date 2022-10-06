module.exports = {
  name: 'Run SQL Query MOD',
  section: 'Other Stuff',
  meta: {
    version: '2.1.6',
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
      sub += 'C: Stored '
    }

    if (data.query) {
      sub += `Q: ${data.query}`
    }

    if (data.path) {
      sub += `P: ${data.path}`
    }

    if (data.storage > 0) {
      const storage = ['', 'Temp', 'Server', 'Global']
      sub += `${storage[parseInt(data.storage)]} :${data.varName}`
    }

    return sub
  },

  fields: ['storage', 'stringifyOutput', 'varName', 'hostname', 'port', 'username', 'password', 'database', 'query', 'path', 'otype', 'source_conn_storage', 'source_conn_varName', 'store_source_conn_storage', 'store_source_conn_varName', 'debugMode'],

  html (isEvent, data) {
    return `

    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.8</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>

  <div id="wrexdiv" style="height: calc(100vh - 170px); overflow-y: scroll;padding:0px 10px">
    <div id="getSource"><br />
     <div style="float: left; width: 35%;">
    <span class="dbminputlabel">Источник соединения</span><br />
      <select id="source_conn_storage" class="round" onchange="glob.variableChange(this, 'varNameContainer2')">
        ${data.variables[0]}
      </select><br />
    </div>
    <div id="varNameContainer2" style="display: ; float: right; width: 60%;">
    <span class="dbminputlabel">Имя переменной</span><br />
      <input id="source_conn_varName" class="round" type="text" />
    </div><br /><br />
  </div><br /><br />
  <div style="margin-left: 5px;" class="ui toggle checkbox">
    <input type="checkbox" name="public" id="toggleAuth" onclick='document.getElementById("authSection").style.display = this.checked ? "" : "none";' />
    <label><font color="white">Показать параметры подключения</font></label>
    Показать / скрыть параметры соединения.<br />
    Будет деактивирован, если выбран выше соединение
  </div>
  <div id="authSection" style="display: none;"><br />
    <div class="ui inverted column stackable center">
      <div class="four wide column"></div>
        <form class="ui six wide column form segment">
          <div class="ui form">
            <div class="field">
              <label>Тип</label>
              <select id="otype" class="ui search dropdown round">
                <option value="0" selected="selected">mysql</option>
                <option value="1">postgres</option>
                <option value="2">mssql</option>
                <option value="3">sqlite</option>
              </select>
            </div>
            <div id="auth">
              <div class="two fields">
                <div class="field">
                  <label>Имя хоста</label>
                  <input id="hostname" placeholder="localhost" type="text" />
                </div>
                <div class="field">
                  <label>Порт</label>
                  <input id="port" placeholder="3311" type="text" />
                </div>
              </div>
              <div class="two fields">
                <div class="field">
                  <label>Имя пользователя</label>
                  <input id="username"placeholder="root" type="text" />
                </div>
                <div class="field">
                  <label>Пароль</label>
                  <input id="password" placeholder="password" type="text" />
                </div>
              </div>
            </div>
            <div class="field">
              <label>Путь базы данных</label>
              <input id="database" placeholder="dbm" type="text" />
            </div>
              <div id="checkSection" class="tiny ui labeled button" tabindex="0">
                <div id="checkConnection" class="ui button">
                  Проверить
                </div>
                <a id="checkConnection_lbl" class="ui basic label yellow">Ready</a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div><br />
        <label for="query"> <span class="dbminputlabel">Строка запроса</span></label>
        <textarea id="query" class="round" placeholder="SELECT * FROM 'users'" style="width: 100%;" type="textarea" rows="6" cols="19"></textarea><br />
      </div>
      <div><span class="dbminputlabel">JSON ПАТЧ</span> 
      <input id="path" class="round"; style="width: 100%;" type="text"></div><br>
      Оставьте это пустым, чтобы хранить все<br /> Он поддерживает использование пути JSON<br>
      Больше информации здесь  <u><span class="wrexlink" data-url="http://goessner.net/articles/JsonPath/index.html#e2">JSON ПАТЧ</span></u><br /><br />
      <div style="float: left; width: 35%;">
      <span class="dbminputlabel">Результаты в</span><br />
        <select id="storage" class="round" onchange="glob.variableChange(this, 'varNameContainer')">
          ${data.variables[0]}
        </select>
      </div>
      <div id="varNameContainer" style="display: ; float: right; width: 60%;">
      <span class="dbminputlabel">Имя переменной</span><br />
        <input id="varName" class="round" type="text" /><br />
      </div><br><br><br>
      <div id="storeSource"><br />
      
        <div style="float: left; width: 35%;">
        <span class="dbminputlabel">Хранимое соединение</span><br />
          <select id="store_source_conn_storage" class="round" onchange="glob.variableChange(this, 'varNameContainer3')">
            ${data.variables[0]}
          </select>
        </div>
        <div id="varNameContainer3" style="display: ; float: right; width: 60%;">
        <span class="dbminputlabel">Имя переменной</span><br />
          <input id="store_source_conn_varName" class="round" type="text" />
        </div>
      </div><br /><br /><br /><br />Храните соединение с переменной для сохранения соединений с базой данных.<br>
      Не используется, если определено исходное соединение<br /><br /><br />
      <div style="float: left; width: 100%;">
      <span class="dbminputlabel">Режим отладки</span><br />
        <select id="debugMode" class="round">
          <option value="1">Способный</option>
          <option value="0" selected="selected">Неполноценный</option>
        </select>
      </div><br /><div style="width:100%">Активируйте, чтобы увидеть подробное впечатление на консоли бота</div><br /><br />
      <div style="float: left; width: 100%;">
      <span class="dbminputlabel">Ограничить вывод</span>
      <select id="stringifyOutput" class="round">
        <option value="1">Способный</option>
        <option value="0" selected="selected">Неполноценный</option>
      </select>
      </div>
      <br /><br />
      Ограничивает результаты в чате<br />
    Включить это не показывать [объект объекта] в чате
    Должен быть деактивирован, чтобы проверить условия.<br /><br />
      <div>
      <p>
      С помощью этого мода вы можете запустить SQL -запросы, используя MySQL, MSSQL, Postgres и SQLite.
      </p>
      <p>
        <u><span class="wrexlink" data-url="https://www.w3schools.com/sql/">Учебное пособие по SQL</span></u> / <u><span class="wrexlink" data-url="https://tutorialzine.com/2016/01/learn-sql-in-20-minutes">Узнайте SQL за 20 минут</span></u><br />
      </p>
    </div><br />


    </div>
 
    <style>
  .embed {
    position: relative;
  }

  .embedinfo {
    background: rgba(46,48,54,.45) fixed;
    border: 1px solid hsla(0,0%,80%,.3);
    padding: 10px;
    margin:0 4px 0 7px;
    border-radius: 0 3px 3px 0;
  }

  embedleftline {
    background-color: #eee;
    width: 4px;
    border-radius: 3px 0 0 3px;
    border: 0;
    height: 100%;
    margin-left: 4px;
    position: absolute;
  }

  span {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  span.embed-auth {
    color: rgb(255, 255, 255);
  }

  span.embed-desc {
    color: rgb(128, 128, 128);
  }

  span.wrexlink {
    color: #99b3ff;
    text-decoration:underline;
    cursor:pointer;
  }

  span.wrexlink:hover {
    color:#4676b9;
  }
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
        document.getElementById('checkConnection_lbl').innerHTML = 'Checking...'

        function isValid (bool, message = false) {
          document.getElementById('checkConnection_lbl').setAttribute('class', `ui basic label ${bool ? 'green' : 'red'}`)
          document.getElementById('checkConnection_lbl').innerHTML = ((bool ? 'Valid' : 'Invalid') + (message ? `: ${message}` : ''))
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
       const wrexlinks = document.getElementsByClassName('wrexlink');
       for (let x = 0; x < wrexlinks.length; x++) {
         const wrexlink = wrexlinks[x];
         const url = wrexlink.getAttribute('data-url');
         if (url) {
           wrexlink.setAttribute('title', url);
           wrexlink.addEventListener('click', (e) => {
             e.stopImmediatePropagation();
             console.log(`Launching URL: [${url}] in your default browser.`);
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

    glob.variableChange(document.getElementById('storage'), 'varNameContainer')
    glob.variableChange(document.getElementById('source_conn_storage'), 'varNameContainer2')
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
          if (DEBUG) console.log(`Соединение хранения с хостом '${storedConnection.hostname}:${storedConnection.port}', Использование базы данных '${storedConnection.database}'`)
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
            if (DEBUG) console.log(`Соединение хранения с хостом '${storedConnection.hostname}:${storedConnection.port}' Использование базы данных '${storedConnection.database}'`)
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
                if (DEBUG) console.log(`Запустите SQL -запрос: значения данных JSON, начиная с [${path}] Хранится в [${varName}]`)
                if (DEBUG) console.dir(jsonOut)
              }
            }
            if (results && path === undefined && DEBUG) {
              console.log('\nStored value(s);\r\n')
              console.log('Key =  Json')
              for (let i = 0; i < results.length; i++) {
                console.log(`[${i}] = ${JSON.stringify(results[i])}`)
              }
              console.log('\r\nПодключите ключ, с помощью которого вы хотите сохранить это значение к переменной.')
              const storageType = ['', 'tempVars', 'serverVars', 'globalVars']
              const output = storageType[storage]
              console.log('Если вы не используете текстовое поле Path в MOD, посмотрите, как получить специальные значения.')
              console.log(`Пример \${${output}("${varName}")} к \${${output}("${varName}")[0]["${Object.keys(results[0])[0]}"]}`)
              console.log(`Пример запустить скрипт ${output}("${varName}")["${Object.keys(results[0])[0]}"] или место без \${}.\r\n`)
              console.log('Прикрепите путь к концу после ключа или используйте Parse из сохраненного JSON, \n Чтобы получить желаемую ценность')
              console.log(`Пример \${${output}("${varName}")[key].path} Или используйте поле JSON Way на пользовательском интерфейсе MOD.`)
            }
            const out = jsonOut || results
            this.storeValue(stringifyOutput ? JSON.stringify(out) : out, storage, varName, cache)
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
      console.log(`SQL Мод ошибка: ${error.stack ? error.stack : error}`)
    }
  },

  mod () {}
}
