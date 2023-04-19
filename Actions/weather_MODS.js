module.exports = {
    name: 'Weather MOD',
    section: 'Other Stuff',


    subtitle(data, presets) {

        if (data.descriptionx == true) {
            desccor = data.descriptioncolor
        } else {
            desccor = 'none'
        }


        return data.description
            ? `<font style="color:${desccor}">${data.description}</font>`
            : `<font style="color:${desccor}">Получить ${data.branches.length == 1 ? data.branches.length + " предмет" : data.branches.length + " Предметы"}</font>`
    },


    variableStorage(data, varType) {
        let vars = [];

        for (var i = 0; i < data.branches.length; i++) {
            const type = parseInt(data.branches[i].storage, 10);
            const varName = data.branches[i].varName;

            if (type == varType && varName) {
                let tipo;

                switch (parseInt(data.branches[i].info)) {
                    case 0:
                        tipo = "Objeto";
                        break;
                    case 1:
                        tipo = "Objeto";
                        break;
                    case 2:
                        tipo = "Número";
                        break;
                    case 3:
                        tipo = "Texto";
                        break;
                    case 4:
                        tipo = "Texto";
                        break;
                    case 5:
                        tipo = "Texto";
                        break;
                    case 6:
                        tipo = "Texto";
                        break;
                    case 7:
                        tipo = "Texto";
                        break;
                    case 8:
                        tipo = "Texto";
                        break;
                    case 9:
                        tipo = "Número";
                        break;
                    case 10:
                        tipo = "Texto";
                        break;
                    case 11:
                        tipo = "Texto";
                        break;
                    case 12:
                        tipo = "Número";
                        break;
                    case 13:
                        tipo = "Número";
                        break;
                    case 14:
                        tipo = "Texto";
                        break;
                    case 15:
                        tipo = "Texto";
                        break;
                    case 16:
                        tipo = "Número"
                        break;
                    case 17:
                        tipo = "Número";
                        break;
                    case 18:
                        tipo = "Texto";
                        break;
                    case 19:
                        tipo = "Texto";
                        break;
                    case 20:
                        tipo = "Texto";
                        break;
                    case 21:
                        tipo = "Texto";
                        break;
                    case 22:
                        tipo = "Número"
                        break;
                    case 23:
                        tipo = "Número";
                        break;
                    case 24:
                        tipo = "Texto";
                        break;
                    case 25:
                        tipo = "Texto";
                        break;
                    case 26:
                        tipo = "Texto";
                        break;
                    case 27:
                        tipo = "Texto";
                        break;
                    case 28:
                        tipo = "Número"
                        break;
                    case 29:
                        tipo = "Número";
                        break;
                    case 30:
                        tipo = "Texto";
                        break;
                    case 31:
                        tipo = "Texto";
                        break;
                    case 32:
                        tipo = "Texto";
                        break;
                    case 33:
                        tipo = "Texto";
                        break;
                    case 34:
                        tipo = "Número"
                        break;
                    case 35:
                        tipo = "Número";
                        break;
                    case 36:
                        tipo = "Texto";
                        break;
                    case 37:
                        tipo = "Texto";
                        break;
                    case 38:
                        tipo = "Texto";
                        break;
                    case 39:
                        tipo = "Texto";
                        break;
                    case 40:
                        tipo = "Número"
                        break;
                    case 41:
                        tipo = "Número";
                        break;
                    case 42:
                        tipo = "Texto";
                        break;
                    case 43:
                        tipo = "Texto";
                        break;
                    case 44:
                        tipo = "Texto";
                        break;
                    case 45:
                        tipo = "Texto";
                        break;
                    case 46:
                        tipo = "Texto";
                        break;
                    case 47:
                        tipo = "Texto";
                        break;
                    case 48:
                        tipo = "Texto";
                        break;
                    case 49:
                        tipo = "Texto";
                        break;
                    case 50:
                        tipo = "Texto";
                        break;
                    case 51:
                        tipo = "Texto";
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
        author: '[XinXyla - 172782058396057602]',
        authorUrl: 'https://github.com/DBM-Mods/Russia',
        downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
    },

    fields: ["idioma", "city", "degreeType", "info", "iffalse", "iffalseVal", "descriptioncolor", "description", "descriptionx", "timeout", "errcmd", "errs", "errv", "actionserr", "branches"],

    html(isEvent, data) {
        return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.2</div>

    <div style="width: 100%; padding:5px 5px;height: calc(100vh - 160px);overflow:auto">

    <tab-system>

    <tab label="Город" icon="point">
    <div style="padding:8px">


<table><tr><td class="td1">
<span class="dbminputlabel">Город</span><br>
  <input id="city" class="round" type="text">

  </td><td class="td2">

  <span class="dbminputlabel">Тип измерения</span><br>
  <select id="degreeType" class="round">
    <option value="F">Фаренгейт</option>
    <option value="C" selected>Цельсия</option>
  </select>
  </td>
  

  
  </tr></table>

  <br>

  <span class="dbminputlabel">Язык</span><br>
  <select id="idioma" class="round">
  <option value="0">Português</option>
  <option value="1">English</option>
  <option value="2" selected>Русский</option>
  <option value="3">Français</option>
  </select>

  <br> 
  <span class="dbminputlabel">Тайм-аут в миллисекундах</span><br>
  <input id="temenout" value="10000" class="round" type="text">
<br>
Таймаут - это предельное время ответа API, чем оно короче, тем выше риск возврата. "ESOCKETTIMEDOUT"


  <br>
</div>
  </tab>

  <tab label="Хранить и поиск" icon="point">
  <div style="padding:8px">

  <dialog-list id="branches" fields='["info", "storage", "varName"]' dialogResizable dialogTitle="Store" dialogWidth="600" dialogHeight="400" listLabel="Информация" listStyle="height: calc(100vh - 270px);" itemName="Item" itemHeight="28px;" itemTextFunction="glob.formatItem(data)" itemStyle="line-height: 28px;">
        
    <div style="margin: 10px;">

    <span class="dbminputlabel">Информация</span><br>
    <select id="info" class="round">
      <option value="0">Время объекта</option>
      <option value="1">Объект прогнозирования</option>
      <option value="2">Температура</option>
      <option value="3">Климат</option>
      <option value="4">Данные</option>
      <option value="5">Столица</option>
      <option value="6">Точка наблюдения</option>
      <option value="7">Широта</option>
      <option value="8">Долготу</option>
      <option value="9">Часовой пояс</option>
      <option value="10">Скорость ветра</option>
      <option value="11">Направление ветра</option>
      <option value="12">Влага</option>
      <option value="13">Тепловое ощущение</option>
      <option value="14">URL изображения</option>
      <option value="15">День недели</option>
      <option value="46">Эмодзи климата</option>
      <optgroup label="Прогноз времени 1 -й день">
      <option value="16">Низкая температура</option>
      <option value="17">Высокая температура</option>
      <option value="18">Запланированный климат</option>
      <option value="47">Эмодзи ожидаемой погоды</option>
      <option value="19">Дата дня</option>
      <option value="20">День недели</option>
      <option value="21">Осадки</option>
      <optgroup label="Прогноз погоды 2 -й день">
      <option value="22">Низкая температура</option>
      <option value="23">Высокая температура</option>
      <option value="24">Запланированный климат</option>
      <option value="48">Эмодзи ожидаемой погоды</option>
      <option value="25">Дата дня</option>
      <option value="26">День недели</option>
      <option value="27">Осадки</option>
      <optgroup label="Прогноз погоды 3 -й день">
      <option value="28">Низкая температура</option>
      <option value="29">Высокая температура</option>
      <option value="30">Запланированный климат</option>
      <option value="49">Эмодзи ожидаемой погоды</option>
      <option value="31">Дата дня</option>
      <option value="32">День недели</option>
      <option value="33">Осадки</option>
      <optgroup label="Прогноз погоды 4 -й день">
      <option value="34">Низкая температура</option>
      <option value="35">Высокая температура</option>
      <option value="36">Запланированный климат</option>
      <option value="50">Эмодзи ожидаемой погоды</option>
      <option value="37">Дата дня</option>
      <option value="38">День недели</option>
      <option value="39">Осадки</option>
      <optgroup label="Прогноз погоды 5 -й день">
      <option value="40">Низкая температура</option>
      <option value="41">Высокая температура</option>
      <option value="42">Запланированный климат</option>
      <option value="51">Эмодзи ожидаемой погоды</option>
      <option value="43">Дата дня</option>
      <option value="44">День недели</option>
      <option value="45">Осадки</option>
      </optgroup>
    </select>
  
    
    <br>
 
    <div style="float: left; width: 35%; padding-top: 8px;">
    <span class="dbminputlabel">Хранить в</span><br>
      <select id="storage" class="round" onchange="glob.variableChange(this, 'varNameContainer')">
        ${data.variables[1]}
      </select>
    </div>
    <div id="varNameContainer" style="float: right; width: 60%; padding-top: 8px;">
    <span class="dbminputlabel">Имя переменной</span><br>
      <input id="varName" class="round" type="text"><br>
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

<br>
      <div>
      <div style="float: left; width: 38%" id="xinext">
      <span class="dbminputlabel">При возникновении ошибки</span><br>
      <select id="iffalse" class="round" onchange="glob.onComparisonChanged2(this)">
      <option value="0" selected>Продолжить действия</option>
      <option value="1">Остановить последовательность действий</option>
      <option value="2">Перейти к действию</option>
      <option value="3">Пропустить следующие действия</option>
      <option value="4">Перейти к якорю действия</option>
      <option value="5">Выполнение действий и остановить</option>
      <option value="6">Выполнить действия и продолжить</option>
      </select>
      <br>
      </div>
      <div id="iffalseContainer" style="display: none; float: right; width: 60%;"><div id="xincontrol"><span id="xinelas" class="dbminputlabel">Для</span><br><input id="iffalseVal" class="round" name="actionxinxyla" type="text"></div>
      </div><br></div>
      <div id="containerxin" style="width:100%">
      <br><br>
      <action-list-input id="actionserr" height="calc(100vh - 450px)"></action-list-input>
      </div>
      
      <div style="padding-top:8px">
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
      </div>

</div>
  </tab>
  </tab-system>

</div>

<style>

table{width:100%}
.td1{width:50%;padding:0px 5px 0px 0px}
.td2{width:25%;padding:0px 3px 0px 3px}
.td3{width:25%;padding:0px 0px 0px 5px}
.col1{width:35%;padding:0px 10px 0px 0px}
.col2{width:65%}
.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}

</style>
`
    },

    init() {
        const { glob, document } = this

        const xinelaslinks = document.getElementsByClassName('xinelaslink');
        for (let x = 0; x < xinelaslinks.length; x++) {
            const xinelaslink = xinelaslinks[x];
            const url = xinelaslink.getAttribute('data-url');
            if (url) {
                xinelaslink.setAttribute('title', url);
                xinelaslink.addEventListener('click', (e) => {
                    e.stopImmediatePropagation();
                    console.log(`URL-адрес запуска: [${url}] в браузере по умолчанию.`);
                    require('child_process').execSync(`start ${url}`);
                });
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
              document.querySelector("[id='xinelas']").innerText = (`Número da ação`);
            }
            if (event.value == "3") {
              document.querySelector("[id='xinelas']").innerText = (`Pular ações`);
            }
            if (event.value == "4") {
              document.querySelector("[id='xinelas']").innerText = (`Nome da âncora`);
            }
          }

          glob.onComparisonChanged2(document.getElementById("iffalse"));
          glob.variableChange(document.getElementById('errs'), 'varerrsv');

        glob.formatItem = function (data, presets) {
            let result = '<div style="display: inline-block; width: 200px; padding-left: 8px;">';
            const info = parseInt(data.info);
            const storage = ['Ваш кситаду', 'Временная переменная', 'Переменный сервер', 'Глобальная переменная'];


            switch (info) {
                case 0:
                    result += "Время объекта";
                    break;
                case 1:
                    result += "Объект прогнозирования";
                    break;
                case 2:
                    result += "Температура";
                    break;
                case 3:
                    result += "Климат";
                    break;
                case 4:
                    result += "Данные";
                    break;
                case 5:
                    result += "Столица";
                    break;
                case 6:
                    result += "Точка наблюдения";
                    break;
                case 7:
                    result += "Широта";
                    break;
                case 8:
                    result += "Долготу";
                    break;
                case 9:
                    result += "Часовой пояс";
                    break;
                case 10:
                    result += "Скорость ветра";
                    break;
                case 11:
                    result += "Направление ветра";
                    break;
                case 12:
                    result += "Влага";
                    break;
                case 13:
                    result += "Тепловое ощущение";
                    break;
                case 14:
                    result += "URL изображения";
                    break;
                case 15:
                    result += "День недели";
                    break;
                case 16:
                    result += "1 й день - низкая температура";
                    break;
                case 17:
                    result += "1 й день - высокая температура";
                    break;
                case 18:
                    result += "1 й день - ожидаемый климат";
                    break;
                case 19:
                    result += "1 й день - дата дня";
                    break;
                case 20:
                    result += "1 й день - день недели";
                    break;
                case 21:
                    result += "1 й день - осаждение";
                    break;
                case 22:
                    result += "2 й день - низкая температура";
                    break;
                case 23:
                    result += "2 й день - высокая температура";
                    break;
                case 24:
                    result += "2 й день - ожидаемый климат";
                    break;
                case 25:
                    result += "2 й день - дата дня";
                    break;
                case 26:
                    result += "2 й день - день недели";
                    break;
                case 27:
                    result += "2 й день - осаждение";
                    break;
                case 28:
                    result += "3 й день - низкая температура";
                    break;
                case 29:
                    result += "3 й день - высокая температура";
                    break;
                case 30:
                    result += "3 й день - ожидаемый климат";
                    break;
                case 31:
                    result += "3 й день - дата дня";
                    break;
                case 32:
                    result += "3 й день - день недели";
                    break;
                case 33:
                    result += "3 й день - осадки";
                    break;
                case 34:
                    result += "4 й день - низкая температура";
                    break;
                case 35:
                    result += "4 й день - высокая температура";
                    break;
                case 36:
                    result += "4 й день - ожидаемый климат";
                    break;
                case 37:
                    result += "4 й день - дата дня";
                    break;
                case 38:
                    result += "4 й день - день недели";
                    break;
                case 39:
                    result += "4 й день - осаждение";
                    break;
                case 40:
                    result += "5 й день - низкая температура";
                    break;
                case 41:
                    result += "5 й день - высокая температура";
                    break;
                case 42:
                    result += "5 й день - ожидаемый климат";
                    break;
                case 43:
                    result += "5 й день - дата дня";
                    break;
                case 44:
                    result += "5 й день - день недели";
                    break;
                case 45:
                    result += "5 й день - осаждение";
                    break;
                case 46:
                    result += "Эмодзи климата";
                    break;
                case 47:
                    result += "1 й день - эмодзи ожидаемого климата";
                    break;
                case 48:
                    result += "2 й день - эмодзи ожидаемого климата";
                    break;
                case 49:
                    result += "3 й день - эмодзи ожидаемого климата";
                    break;
                case 50:
                    result += "4 й день - эмодзи ожидаемого климата";
                    break;
                case 51:
                    result += "5 й день - эмодзи ожидаемого климата";
                    break;
            }

            result += ` > ${storage[parseInt(data.storage, 10)]} (${data.varName}) </div>`;
            return result;
        }

    },

    action(cache) {
        const data = cache.actions[cache.index]
        const city = this.evalMessage(data.city, cache)
        const degreeType2 = this.evalMessage(data.degreeType, cache)
        const idioma = parseInt(data.idioma)
        const timeout = parseInt(this.evalMessage(data.timeout, cache)) || 10000

        const branches = data.branches;

        if (!city) return console.log('Пожалуйста, укажите город для получения информации о погоде')

        const weather = require('weather-js')

        const options = {
            search: city,
            degreeType: degreeType2,
            timeout: timeout,
          };

        weather.find(options, (err, response) => {
            if (err || !response || response.length == 0) {

                let error = err
                if(response == [] || err == null || err == "null"){
                    
                    if (idioma == 0) {error = "A Cidade não foi encontrada"}
                    if (idioma == 1) {error = "City not found"}
                    if (idioma == 2) {error = "Город не найден"}
                    if (idioma == 3) {error = "Ville introuvable"}
                }
                
                if (data.errcmd === true) {
                    console.log('ERROR: ' + cache.toString() + ' - Action ' + (cache.index + 1) + '# ' + data.name)
                    console.log(error)
                  }
    
                  this.storeValue(error, parseFloat(data.errs), this.evalMessage(data.errv, cache), cache)
    
                  if (data.iffalse == "5" || data.iffalse == "6") {
    
                    if (data.iffalse == "5") {
                      this.executeSubActions(data.actionserr, cache)
                    } else {
                      this.executeSubActionsThenNextAction(data.actionserr, cache)
                    }
    
                  } else {
                    this.executeResults(false, data, cache);
                  }


            } else {

                for (var i = 0; i < branches.length; i++) {
                    const branch = branches[i];
                    const info = parseInt(branch.info);
                    let result

                    switch (info) {
                        case 0:
                            result = response[0]
                            break
                        case 1:
                            result = response[0].forecast
                            break
                        case 2:
                            result = response[0].current.temperature
                            break
                        case 3:
                            result = response[0].current.skytext
                            break
                        case 4:
                            result = response[0].current.date
                            break
                        case 5:
                            result = response[0].location.name
                            break
                        case 6:
                            result = response[0].current.observationpoint
                            break
                        case 7:
                            result = response[0].location.lat
                            break
                        case 8:
                            result = response[0].location.long
                            break
                        case 9:
                            result = response[0].location.timezone
                            break
                        case 10:
                            result = response[0].current.windspeed
                            break
                        case 11:
                            result = response[0].current.winddisplay
                            break
                        case 12:
                            result = response[0].current.humidity
                            break
                        case 13:
                            result = response[0].current.feelslike
                            break
                        case 14:
                            result = response[0].current.imageUrl
                            break
                        case 15:
                            result = response[0].current.day
                            break
                        case 16:
                            result = response[0].forecast[0].low
                            break
                        case 17:
                            result = response[0].forecast[0].high
                            break
                        case 18:
                            result = response[0].forecast[0].skytextday
                            break
                        case 19:
                            result = response[0].forecast[0].date
                            break
                        case 20:
                            result = response[0].forecast[0].day
                            break
                        case 21:
                            result = response[0].forecast[0].precip
                            break
                        case 22:
                            result = response[0].forecast[1].low
                            break
                        case 23:
                            result = response[0].forecast[1].high
                            break
                        case 24:
                            result = response[0].forecast[1].skytextday
                            break
                        case 25:
                            result = response[0].forecast[1].date
                            break
                        case 26:
                            result = response[0].forecast[1].day
                            break
                        case 27:
                            result = response[0].forecast[1].precip
                            break
                        case 28:
                            result = response[0].forecast[2].low
                            break
                        case 29:
                            result = response[0].forecast[2].high
                            break
                        case 30:
                            result = response[0].forecast[2].skytextday
                            break
                        case 31:
                            result = response[0].forecast[2].date
                            break
                        case 32:
                            result = response[0].forecast[2].day
                            break
                        case 33:
                            result = response[0].forecast[2].precip
                            break
                        case 34:
                            result = response[0].forecast[3].low
                            break
                        case 35:
                            result = response[0].forecast[3].high
                            break
                        case 36:
                            result = response[0].forecast[3].skytextday
                            break
                        case 37:
                            result = response[0].forecast[3].date
                            break
                        case 38:
                            result = response[0].forecast[3].day
                            break
                        case 39:
                            result = response[0].forecast[3].precip
                            break
                        case 40:
                            result = response[0].forecast[4].low
                            break
                        case 41:
                            result = response[0].forecast[4].high
                            break
                        case 42:
                            result = response[0].forecast[4].skytextday
                            break
                        case 43:
                            result = response[0].forecast[4].date
                            break
                        case 44:
                            result = response[0].forecast[4].day
                            break
                        case 45:
                            result = response[0].forecast[4].precip
                            break
                        case 46:
                            result = response[0].current.skytext
                            climalist = ["Light Rain and Snow", "Rain and Snow", "Mostly Sunny", "Rain Showers", "Mostly Clear", "Partly Cloudy", "Light Rain", "Rain", "Mostly Cloudy", "Smoke", "Partly Sunny", "Cloudy", "Haze", "Sunny", "Clear", "Fair", "Heavy T-Storms", "T-Storms", "Light Snow", "Snow Showers", "Snow"]
                            climalist2 = ["🌨", "🌨", "☀️", "🌧️", "🌤", "⛅", "🌧️", "🌧️", "⛅", "🌫️", "⛅", "☁", "🌫", "☀️", "☀️", "☀️", "🌩", "🌩", "❄", "🌨", "☃"]
                            for (var idx = 0; idx <= climalist.length; idx++) {
                                result = result.replace(climalist[idx], climalist2[idx]);
                            }
                            break
                        case 47:
                            result = response[0].forecast[0].skytextday
                            climalist = ["Light Rain and Snow", "Rain and Snow", "Mostly Sunny", "Rain Showers", "Mostly Clear", "Partly Cloudy", "Light Rain", "Rain", "Mostly Cloudy", "Smoke", "Partly Sunny", "Cloudy", "Haze", "Sunny", "Clear", "Fair", "Heavy T-Storms", "T-Storms", "Light Snow", "Snow Showers", "Snow"]
                            climalist2 = ["🌨", "🌨", "☀️", "🌧️", "🌤", "⛅", "🌧️", "🌧️", "⛅", "🌫️", "⛅", "☁", "🌫", "☀️", "☀️", "☀️", "🌩", "🌩", "❄", "🌨", "☃"]
                            for (var idx = 0; idx <= climalist.length; idx++) {
                                result = result.replace(climalist[idx], climalist2[idx]);
                            }
                            break
                        case 48:
                            result = response[0].forecast[1].skytextday
                            climalist = ["Light Rain and Snow", "Rain and Snow", "Mostly Sunny", "Rain Showers", "Mostly Clear", "Partly Cloudy", "Light Rain", "Rain", "Mostly Cloudy", "Smoke", "Partly Sunny", "Cloudy", "Haze", "Sunny", "Clear", "Fair", "Heavy T-Storms", "T-Storms", "Light Snow", "Snow Showers", "Snow"]
                            climalist2 = ["🌨", "🌨", "☀️", "🌧️", "🌤", "⛅", "🌧️", "🌧️", "⛅", "🌫️", "⛅", "☁", "🌫", "☀️", "☀️", "☀️", "🌩", "🌩", "❄", "🌨", "☃"]
                            for (var idx = 0; idx <= climalist.length; idx++) {
                                result = result.replace(climalist[idx], climalist2[idx]);
                            }
                            break
                        case 49:
                            result = response[0].forecast[2].skytextday
                            climalist = ["Light Rain and Snow", "Rain and Snow", "Mostly Sunny", "Rain Showers", "Mostly Clear", "Partly Cloudy", "Light Rain", "Rain", "Mostly Cloudy", "Smoke", "Partly Sunny", "Cloudy", "Haze", "Sunny", "Clear", "Fair", "Heavy T-Storms", "T-Storms", "Light Snow", "Snow Showers", "Snow"]
                            climalist2 = ["🌨", "🌨", "☀️", "🌧️", "🌤", "⛅", "🌧️", "🌧️", "⛅", "🌫️", "⛅", "☁", "🌫", "☀️", "☀️", "☀️", "🌩", "🌩", "❄", "🌨", "☃"]
                            for (var idx = 0; idx <= climalist.length; idx++) {
                                result = result.replace(climalist[idx], climalist2[idx]);
                            }
                            break
                        case 50:
                            result = response[0].forecast[3].skytextday
                            climalist = ["Light Rain and Snow", "Rain and Snow", "Mostly Sunny", "Rain Showers", "Mostly Clear", "Partly Cloudy", "Light Rain", "Rain", "Mostly Cloudy", "Smoke", "Partly Sunny", "Cloudy", "Haze", "Sunny", "Clear", "Fair", "Heavy T-Storms", "T-Storms", "Light Snow", "Snow Showers", "Snow"]
                            climalist2 = ["🌨", "🌨", "☀️", "🌧️", "🌤", "⛅", "🌧️", "🌧️", "⛅", "🌫️", "⛅", "☁", "🌫", "☀️", "☀️", "☀️", "🌩", "🌩", "❄", "🌨", "☃"]
                            for (var idx = 0; idx <= climalist.length; idx++) {
                                result = result.replace(climalist[idx], climalist2[idx]);
                            }
                            break
                        case 51:
                            result = response[0].forecast[4].skytextday
                            climalist = ["Light Rain and Snow", "Rain and Snow", "Mostly Sunny", "Rain Showers", "Mostly Clear", "Partly Cloudy", "Light Rain", "Rain", "Mostly Cloudy", "Smoke", "Partly Sunny", "Cloudy", "Haze", "Sunny", "Clear", "Fair", "Heavy T-Storms", "T-Storms", "Light Snow", "Snow Showers", "Snow"]
                            climalist2 = ["🌨", "🌨", "☀️", "🌧️", "🌤", "⛅", "🌧️", "🌧️", "⛅", "🌫️", "⛅", "☁", "🌫", "☀️", "☀️", "☀️", "🌩", "🌩", "❄", "🌨", "☃"]
                            for (var idx = 0; idx <= climalist.length; idx++) {
                                result = result.replace(climalist[idx], climalist2[idx]);
                            }
                            break
                        default:
                            break
                    }

                    if (idioma == 0) {
                        if (info == 3 || info == 11 || info == 15 || info == 18 || info == 20 || info == 24 || info == 30 || info == 36 || info == 42) {

                            list = ["Light Rain and Snow", "Rain and Snow", "Mostly Sunny", "Rain Showers", "Mostly Clear", "Partly Cloudy", "Light Rain", "Rain", "Mostly Cloudy", "Smoke", "Partly Sunny", "Cloudy", "Haze", "South", "North", "West", "East", "Norteeast", "Southwest", "Southwest", "Northeast", "Southeast", "Northwest", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Sunny", "Clear", "Fair", "Heavy T-Storms", "T-Storms", "Suleast", "Sulwest", "Light Snow", "Snow Showers", "Snow", "Nortewest"]
                            list2 = ["Chuva e neve leves", "Chuva e neve", "Céu principalmente ensolarado", "Pancadas de chuva", "Céu parcialmente claro", "Céu parcialmente nublado", "Chuva leve", "Chuva", "Céu predominantemente nublado", "Céu com muita fumaça", "Céu parcialmente ensolarado", "Nublado", "Neblina", "Sul", "Norte", "Oeste", "Leste", "Nordeste", "Sudoeste", "Sudoeste", "Nordeste", "Sudeste", "Noroeste", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo", "Céu ensolarado", "Céu claro", "Céu claro", "Trovoadas pesadas", "Trovoadas", "Sudeste", "Sudoeste", "Pouca Neve", "Chuvas de neve", "Neve", "Noroeste"]
                            for (var id = 0; id <= list.length; id++) {
                                result = result.replace(list[id], list2[id]);
                            }

                        }
                    }

                    if (idioma == 2) {
                        if (info == 3 || info == 11 || info == 15 || info == 18 || info == 20 || info == 24 || info == 30 || info == 36 || info == 42) {

                            list = ["Light Rain and Snow", "Rain and Snow", "Mostly Sunny", "Rain Showers", "Mostly Clear", "Partly Cloudy", "Light Rain", "Rain", "Mostly Cloudy", "Smoke", "Partly Sunny", "Cloudy", "Haze", "South", "North", "West", "East", "Norteeast", "Southwest", "Southwest", "Northeast", "Southeast", "Northwest", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Sunny", "Clear", "Fair", "Heavy T-Storms", "T-Storms", "Suleast", "Sulwest", "Light Snow", "Snow Showers", "Snow", "Nortewest"]
                            list2 = ["Дождь и светлый снег", "Дождь и снег", "В основном солнечное небо", "Дождь", "Частично ясное небо", "Частично облачное небо", "Легкий дождь", "Дождь", "Преимущественно облачное небо", "Небо с большим дымом", "Частично солнечно", "Облачный", "Туман", "Юг", "Север", "Запад", "Восток", "К северо-востоку", "Юго-запад", "Юго-запад", "К северо-востоку", "Юго -восток", "Северо-Запад", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Доминго", "Солнечное небо", "Чистое небо", "Чистое небо", "Сильные грозы", "Гром", "Юго -восток", "Юго-запад", "Снег", "Снежные осадки", "Снег", "Северо-Запад"]
                            for (var id = 0; id <= list.length; id++) {
                                result = result.replace(list[id], list2[id]);
                            }

                        }
                    }

                    if (idioma == 3) {
                        if (info == 3 || info == 11 || info == 15 || info == 18 || info == 20 || info == 24 || info == 30 || info == 36 || info == 42) {

                            list = ["Light Rain and Snow", "Rain and Snow", "Mostly Sunny", "Rain Showers", "Mostly Clear", "Partly Cloudy", "Light Rain", "Rain", "Mostly Cloudy", "Smoke", "Partly Sunny", "Cloudy", "Haze", "South", "North", "West", "East", "Norteeast", "Southwest", "Southwest", "Northeast", "Southeast", "Northwest", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Sunny", "Clear", "Fair", "Heavy T-Storms", "T-Storms", "Suleast", "Sulwest", "Light Snow", "Snow Showers", "Snow", "Nortewest"]
                            list2 = ["Pluie et neige légères", "Pluie et neige", "Principalement ensoleillé", "Averses de pluie", "Partiellement dégagé", "Partiellement nuageux", "Pluie légère", "Pluie", "Principalement nuageux", "Fumée", "Partiellement ensoleillé", "Nuageux", "Brume", "Sud", "Nord", "Ouest", "Est", "Nord-Est", "Sud-Ouest", "Sud-Ouest", "Nord-Est", "Sud-Est", "Nord-Ouest", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche", "Ensoleillé", "Clair", "Beau", "Orages violents", "Orages", "Sud-Est", "Sud-Ouest", "Légère neige", "Chutes de neige", "Neige", "Nord-Ouest"]
                            for (var id = 0; id <= list.length; id++) {
                                result = result.replace(list[id], list2[id]);
                            }

                        }
                    }


                    if (result !== undefined) {
                        const storage = parseInt(branch.storage, 10);
                        const varName2 = this.evalMessage(branch.varName, cache);
                        this.storeValue(result, storage, varName2, cache);
                    }

                }
                this.callNextAction(cache)

            }
        })




    },

    mod() { }
}