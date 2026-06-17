module.exports = {
  name: "Google Planilhas MOD",
  section: "Other Stuff",
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[xinxyla - 172782058396057602],[mahtio - 195200331951505408],[claus_veronesi - 378915342963048448]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {
    const info = [
      "Добавлять",
      "Изменить значения",
      "Обновить значение",
      "Очистить значения",
      "Консультировать",
      "Получить точное значение столбца",
      "Поиск строк по Regex"
    ];
    const info2 = [
      "[Текст]",
      "[JSON]",
    ];

    if (data.errcmd == true) { bug = '🐛' } else { bug = '' }
    if (data.cmd == true) { terminal = '🖥️' } else { terminal = '' }

    if (data.descriptionx == true) {
      desccor = data.descriptioncolor
    } else {
      desccor = 'none'
    }


    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">${bug}${terminal} ${info[parseInt(data.acao, 10)]} в ${data.coluna} - ${info2[parseInt(data.stringifyOutput, 10)]}</font>`
  },


  variableStorage(data, varType) {
    let vars = [];

    const type = parseInt(data.storage, 10);
    const typeError = parseInt(data.errs, 10);

    if (type == varType) {
      vars.push(data.varName);
      vars.push("Текст ~ Лог");
    }

    if (typeError == varType) {
      vars.push(data.errv);
      vars.push("Текст ~ Ошибка");
    }

    if (vars.length > 0) return vars;
  },


  fields: ["acao", "planilha", "coluna", "valor", "errcmd", "cmd", "storage", "varName", "stringifyOutput", "descriptioncolor", "description", "descriptionx", "iffalse", "iffalseVal", "errs", "errv", "actionserr",],


  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновление</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.1</div>

    <div style="width: 100%; padding:1px 0px;height: calc(100vh - 160px);overflow:auto">


    <tab-system>

    <tab label="Действие" icon="wizard">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">

    <span class="dbminputlabel">Действие</span><br>
      <select id="acao" class="round"  onchange="glob.onComparisonChanged2(this)">
      <option value="0" selected>Добавить [пропустить строку если есть какое-либо значение, используйте JSON]</option>
      <option value="1">Изменить значения [использовать JSON]</option>
      <option value="2">Обновить значение [использовать только числа]</option>
      <option value="3">Очистить значения</option>
      <option value="4">Консультировать</option>
      <option value="5">Получить строку [точное значение столбца]</option>
      <option value="6">Поиск строк по Regex</option>
      </optgroup>
      </select>

       <xinspace>

    <div>
    <span class="dbminputlabel">Страница!Столбец</span><br>
    <input id="coluna" class="round" type="text" placeholder="Страница1!A1">
    </div>

     <xinspace>

     <div id="ocultado">
    <span class="dbminputlabel">Значание</span><br>
    <textarea id="valor" rows="2" style="width: 100%; font-family: monospace; white-space: nowrap" placeholder="['Значание1', 'Значание2']"></textarea>
</div>
  
   <xinspace>
  <div id="xinxylagotoso">
      <span class="dbminputlabel">Результат запроса ~ вывод</span><br>
    <select id="stringifyOutput" class="round">
      <option value="0">Текст</option>
      <option value="1" selected>JSON</option>
    </select>
     <xinspace>
  <div style="float: left; width: 35%;">
              <span class="dbminputlabel">Сохронить в</span>
              <select id="storage" class="round" onchange="glob.variableChange(this, 'varNameContainer')">
                  ${data.variables[0]}
              </select>
          </div>
  
          <div style="float: right; width: 60%;" id="varNameContainer">
              <span class="dbminputlabel">Имя переменной</span>
              <input id="varName" class="round" type="text">
          </div>
</div><br><br><br>
    </div>
    </tab>

    
    <tab label="Конфигурация" icon="settings">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">

    <table style="width:100%;"><tr>
<td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Оставьте пустым, чтобы не использовать."></td>
<td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
</tr></table>
<br>

<div>
	<div>
  <span class="dbminputlabel">Идентификатор (id) списка</span><br>
  <input id="planilha" class="round" type="text">
	</div>

  <br>

  <dbm-checkbox style="float:left" id="errcmd" label="🐛Отображение ошибки в консоли" checked></dbm-checkbox>
  <dbm-checkbox style="float:left" id="cmd" label="🖥️Просмотр журналов в консоли"></dbm-checkbox>

  <br>
  <br>
  <br>

  <table>
        <tr>
        <td class="col1"><span class="dbminputlabel">Сохранить ошибку в</span><br>
        <select id="errs" value="0" class="round" onchange="glob.variableChange(this, 'varerrsv')">
          ${data.variables[0]}
        </select></td>
        <td class="col2"><div id="varerrsv"><span class="dbminputlabel">Имя переменной</span><br>
        <input id="errv" class="round" type="text"></div></td>
        </tr>
        </table>

         <br>

  <div>
      <div style="float: left; width: 38%" id="xinext">
      <span class="dbminputlabel">Если возникает ошибка</span><br>
      <select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
      <option value="0" selected>Продолжить выполнение действий</option>
      <option value="1">Пропустить следующий действия</option>
      <option value="2">Перейти к действию</option>
      <option value="3">Пропустить следующий действия</option>
      <option value="4">Перейти к якорю действи</option>
      <option value="5">Выполнить действия и остановитьсяся</option>
      <option value="6">Выполнить действия и продолжить</option>
      </select>
      <br>
      </div>
      <div id="iffalseContainer" style="display: none; float: right; width: 60%;"><div id="xincontrol"><span id="xinelas" class="dbminputlabel">для</span><br><input id="iffalseVal" class="round" name="actionxinxyla" type="text"></div>
      </div><br></div>
      <div id="containerxin" style="width:100%">
      <br><br>
      <action-list-input id="actionserr" height="calc(100vh - 450px)"></action-list-input>
      </div>



</div>





    </div>
    </tab>

    <tab label="Помощь" icon="help">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">

        <tlt><b>Установить API</b></tlt>
    <tl><table>
    <tr><td class="cols">1- Перейдите в папку вашего бота, щелкните адресную строку, введите cmd и введите enter<br>
    2 - Я возвращаюсь к терминалу, вводите npm i googleapis<br>
    3 - Нажмите enter и дождитесь установки, если закончлась установка успешно закройте.
</td></tr>
    </table>
    </tl><br>

    
    <tlt><b>Настройка API</b></tlt>
    <tl><table>
    <tr><td class="cols">1 - Создать проект в <button class="tiny compact ui icon button"><span class="xinelaslink" data-url="https://console.cloud.google.com/projectselector2">https://console.cloud.google.com/projectselector2</span></button>
<br>
2 - Перейдите в API и службы > учетные данные<br>
3 - Нажмите создать учетные данные > Учетная запись службы<br>
4 - Введите идентификатор учетной записи службы по вашему выбору и нажмите " Создать и продолжить<br>
5 - Выберите "в использовании > владелец" и нажмите " Продолжить<br>
6 - Нажмите Готово<br>
7 - Перейдите в учетные записи служб > Нажмите на электронное письмо > Сохраните электронное письмо, а затем перейдите на вкладку "ключи".<br>
8 - Нажмите Добавить ключ > Создать новый ключ > JSON и создайте!<br>
9 - Переименуйте файл в credentials и сохраните в папке" data " вашего бота
</td></tr>
    </table>
    </tl><br>

     <tlt><b>Настроить Электронную Таблицу</b></tlt>
    <tl><table>
    <tr><td class="cols">1 - Создать электронную таблицу в <button class="tiny compact ui icon button"><span class="xinelaslink" data-url="https://docs.google.com/spreadsheets/u/0/">https://docs.google.com/spreadsheets/u/0/</span></button>
<br>
2 - Перейдите в раздел "поделиться" и добавьте электронное письмо, в которое вы скопировали "тот подарок в учетной записи службы, в которой вы создали ключи".<br>
3 - Измените разрешение электронной почты на "редактор" и нажмите Готово
</td></tr>
    </table>
    </tl><br>

         <tlt><b>Настроить МОД</b></tlt>
    <tl><table>
    <tr><td class="cols">1 - Скопируйте идентификатор списка, присутствующий в его URL-адресе "находится в # https://docs.google.com/spreadsheets/d/##########/edit?gid=0#gid=0"</span></button>
<br>
2 - Поместите идентификатор на вкладку Конфигурация > Идентификатор (id) списка , присутствующего в этом действии<br>
3 - Все готово, чтобы иметь возможность использовать ее
</td></tr>
    </table>
    </tl><br>


    </div>
    </tab>
    </tab-system>



</div>
<style>
table{width:100%}
xinspace{padding:10px 0px 0px 0px;display:block}
.col{padding:0px 4px}
.cols{padding:6px 4px;border:1px solid rgba(0,0,0,0.5)}
.col3{width:75%;padding:0px 10px 0px 0px}
.col4{width:25%}
.col5{width:50%;padding:0px 10px 0px 0px}
.col6{width:50%}
.xinelaslink {cursor:pointer}
tl{background:rgba(0,0,0,0.1);border: 1px solid rgba(50,50,50,0.1);padding:5px;width:100%;display:block}
tlt{background:rgba(0,0,0,0.2);border: 1px solid rgba(50,50,50,0.2);padding:4px;width:100%;display:block;text-align:center}
.col1{width:38%;padding:0px 10px 0px 0px}
.col2{width:60%}
.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}

</style>
`;
  },



  init() {
    const { glob, document } = this;

    glob.onComparisonChanged2 = function (event) {
      if (event.value == 0 || event.value == 1 || event.value == 2 || event.value == 5 || event.value == 6) {
        document.getElementById("xinxylagotoso").style.display = null;
        document.getElementById("ocultado").style.display = null;
      }
      if (event.value == 3) {
        document.getElementById("xinxylagotoso").style.display = "none";
        document.getElementById("ocultado").style.display = "none";
      }
      if (event.value == 4) {
        document.getElementById("xinxylagotoso").style.display = null;
        document.getElementById("ocultado").style.display = "none";
      }
    }
    glob.onComparisonChanged2(document.getElementById('acao'), 'onComparisonChanged2')

    glob.variableChange(document.getElementById('storage'), 'varNameContainer')

    const xinelaslinks = document.getElementsByClassName('xinelaslink');
    for (let x = 0; x < xinelaslinks.length; x++) {
      const xinelaslink = xinelaslinks[x];
      const url = xinelaslink.getAttribute('data-url');
      if (url) {
        xinelaslink.setAttribute('title', url);
        xinelaslink.addEventListener('click', (e) => {
          e.stopImmediatePropagation();
          console.log(`Launching URL: [${url}] in your default browser.`);
          require('child_process').execSync(`start ${url}`);
        });
      }
    }

    glob.onComparisonChanged = function (event) {
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
        document.querySelector("[id='xinelas']").innerText = (`Количество действий для пропуска`);
      }
      if (event.value == "4") {
        document.querySelector("[id='xinelas']").innerText = (`Имя якоря`);
      }
    }

    glob.onComparisonChanged(document.getElementById("iffalse"));
    glob.variableChange(document.getElementById('errs'), 'varerrsv');


  },



  action(cache) {
    const data = cache.actions[cache.index];
    const { google } = require('googleapis');
    const fs = require('fs');

    const credentialsPath = './data/credentials.json';

    function loadCredentials() {
      if (!fs.existsSync(credentialsPath)) {
        throw new Error('Файл учетных данных не найден!');
      }
      return JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));
    }

    const credentials = loadCredentials();
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    async function getAuthClient() {
      const client = await auth.getClient();
      return client;
    }

    async function appendRow(sheetId, range, values) {
      const authClient = await getAuthClient();
      const response = await google.sheets('v4').spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: range,
        valueInputOption: 'USER_ENTERED',
        resource: {
          values: [values],
        },
        auth: authClient,
      });
      if (data.cmd === true) { console.log(`Добавлена строка: ${JSON.stringify(response.data, null, 2)}`); };
      return response.data;
    }


    async function updateValues(sheetId, range, values) {
      const authClient = await getAuthClient();
      const sheets = google.sheets({ version: 'v4', auth: authClient });
      const response = await sheets.spreadsheets.values.update({
        spreadsheetId: sheetId,
        range: range,
        valueInputOption: 'USER_ENTERED',
        resource: {
          values: [values],
        },
      });
      if (data.cmd === true) { console.log(`Измененные значения: ${JSON.stringify(response.data, null, 2)}`); };
      return response.data;
    }


    async function getCellValue(sheetId, range) {

      const authClient = await getAuthClient();
      const sheets = google.sheets({ version: 'v4', auth: authClient });
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: range,
      });
      const cellValue = response.data.values ? response.data.values[0][0] : null;
      if (data.cmd === true) { console.log(`Значение, полученное из ячейки: ${cellValue}`); }
      return cellValue;
    }



    async function updateCellValue(sheetId, range, value) {

      const authClient = await getAuthClient();
      const sheets = google.sheets({ version: 'v4', auth: authClient });
      const response = await sheets.spreadsheets.values.update({
        spreadsheetId: sheetId,
        range: range,
        valueInputOption: 'RAW',
        resource: {
          values: [[value]],
        },
      });
      if (data.cmd === true) { console.log(`Обновленное значение в ячейке: ${value}`) };
      return response.data;
    }


    async function clearValues(sheetId, range) {
      const authClient = await getAuthClient();
      const sheets = google.sheets({ version: 'v4', auth: authClient });
      const response = await sheets.spreadsheets.values.clear({
        spreadsheetId: sheetId,
        range: range,
      });

      if (data.cmd === true) { console.log(`Чистые значения: ${JSON.stringify(response.data, null, 2)}`) };
      return response.data;
    }

    async function getColumnData(sheetId, range) {
      const authClient = await getAuthClient();
      const sheets = google.sheets({ version: 'v4', auth: authClient });
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: range,
      });
      if (data.cmd === true) { console.log(`Собранные данные: ${JSON.stringify(response.data.values, null, 2)}`) };
      return response.data.values;

    }


    async function findValueInColumn(sheetId, range, searchValue) {
      const authClient = await getAuthClient();
      const sheets = google.sheets({ version: 'v4', auth: authClient });

        const response = await sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: range,
      });

      const values = response.data.values;

      if (!values || values.length === 0) {
        if (data.cmd === true) { console.log('Данные не найдены.'); };
        return null;
      }

     
      for (let i = 0; i < values.length; i++) {
        if (values[i][0] == searchValue) {
          return i + 1; 
        }
      }

      return null; 

    }


    async function findValuesInColumnWithRegex(sheetId, range, regexPattern) {
        const authClient = await getAuthClient();
        const sheets = google.sheets({ version: 'v4', auth: authClient });
    
        const response = await sheets.spreadsheets.values.get({
          spreadsheetId: sheetId,
          range: range,
        });
    
        const values = response.data.values;
    
        if (!values || values.length === 0) {
          if (data.cmd === true) { console.log('Данные не найдены.'); };
          return null;
        }

        const regex = new RegExp(regexPattern);

        const matches = [];
        for (let i = 0; i < values.length; i++) {
          if (regex.test(values[i][0])) {
            matches.push({ row: i + 1, value: values[i][0] });
          }
        }
    
        return matches.length > 0 ? matches : null;

    }



    (async () => {
      try {
        const sheetId = this.evalMessage(data.planilha, cache);
        const range = this.evalMessage(data.coluna, cache);
        const code = this.evalMessage(data.valor, cache);
        const values = this.eval(code, cache)
        let result

        if (data.acao == "0") {
          result = await appendRow(sheetId, range, values);
        }
        if (data.acao == "1") {
          result = await updateValues(sheetId, range, values);
        }
        if (data.acao == "2") {
          const existingValue = await getCellValue(sheetId, range);
          const numericValue = parseFloat(existingValue);

          if (isNaN(numericValue)) {
            throw new Error(`Значение в ячейке не числовое: ${existingValue}`);
          }

          const newValue = numericValue + parseFloat(values);

          result = await updateCellValue(sheetId, range, newValue);
        }
        if (data.acao == "3") {
          result = await clearValues(sheetId, range);
        }
        if (data.acao == "4") {
          result = await getColumnData(sheetId, range);
        }
        if (data.acao == "5") {
          result = await findValueInColumn(sheetId, range, values);
          if(result == null){ result = 0}
          if (data.cmd === true) { console.log('Значение найдено в строке: ' + result); }
        }
        if (data.acao == "6") {
          result = await findValuesInColumnWithRegex(sheetId, range, values);

          if (result !== null) {
                
              if (data.cmd === true) { console.log(result);}
        
          }

          if(result == null){ result = 0}
          
          
        }

        if (data.acao == "0" || data.acao == "1" || data.acao == "2" || data.acao == "4" || data.acao == "5" || data.acao == "6") {
          const varName = this.evalMessage(data.varName, cache);
          const storage = parseInt(data.storage, 10);

          const stringifyOutput = this.evalMessage(data.stringifyOutput, cache)

          if (stringifyOutput == "0") {
            this.storeValue(JSON.stringify(result), storage, varName, cache);
          }
          if (stringifyOutput == "1") {
            this.storeValue(result, storage, varName, cache);
          }
        }
        this.callNextAction(cache);


      } catch (error) {
        const varName3 = this.evalMessage(data.errv, cache);
        const storage3 = parseInt(data.errs, 10);
        this.storeValue(error, storage3, varName3, cache);


        if (data.errcmd === true) {
          console.log('ОШИБКА: ' + cache.toString() + ' - Действие ' + (cache.index + 1) + '# ' + data.name)
          console.error('Ошибка:', error)
        }

        if (data.iffalse > 0) {
          if (data.iffalse == "5") return this.executeSubActions(data.actionserr, cache);
          if (data.iffalse == "99") return this.executeSubActionsThenNextAction(data.actionserr, cache);

          return this.executeResults(false, data, cache);
        } else {
          this.callNextAction(cache);
        }


      }


    })();

  },


  mod() { },
};
