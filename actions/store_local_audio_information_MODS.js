module.exports = {
  name: "Store Local Audio Information MOD",
  section: "Audio Control",
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {

    if (data.descriptionx == true) {
      desccor = data.descriptioncolor
    } else {
      desccor = 'none'
    }

    const storage = presets.variables;

    const info = [
      'Состояние аудио',
      'Текущее время аудио',
      'Громкость аудио',
      'Битрейт аудио',
      'Очередь аудио',
      'Объект',
      'Всего аудио в очереди',
      'URL текущего аудио',
      'Всего аудиозаписей в предыдущей очереди',
      'Очередь предыдущих аудиозаписей',
      'Предыдущий аудио',
      'Следующий аудио',
    ];

    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">${info[parseInt(data.info, 10)]} - ${storage[parseInt(data.storage, 10)]} (${data.varName})</font>`
  },

  fields: ['info', 'storage', 'varName', 'descriptioncolor', 'description', 'descriptionx', 'iffalse', 'iffalseVal'],

  variableStorage(data, varType) {
    if (parseInt(data.storage, 10) !== varType) return;
    let dataType = 'Unknown type';
    switch (data.info) {
      case 0:
        dataType = 'Текст';
        break;
      case 1:
        dataType = 'Число';
        break;
      case 2:
        dataType = 'Число';
        break;
      case 3:
        dataType = 'Число';
        break;
      case 4:
        dataType = 'Список';
        break;
      case 5:
        dataType = 'Объект';
        break;
      case 6:
        dataType = 'Число';
        break;
      case 7:
        dataType = 'Текст';
        break;
      case 8:
        dataType = 'Список';
        break;
      case 9:
        dataType = 'Число';
        break;
      case 10:
        dataType = 'Текст';
        break;
      case 11:
        dataType = 'Текст';
        break;
    }
    return [data.varName, dataType];
  },

  html(isEvent, data) {
    return `

    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.2</div>

    <div style="width: 100%; padding:5px 5px;height: calc(100vh - 160px);overflow:auto">

    <div id="flutuador" style="padding:0px 0px 15px 0px">
<table style="width:100%;"><tr>
<td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Оставьте пустым, чтобы не использовалось!"></td>
<td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
</tr></table>
</div>
  
<div>
	<span class="dbminputlabel">Информация</span><br>
	<select id="info" class="round">
  <option value="5">Объект</option>
		<option value="0" selected>Статус аудио</option>
		<option value="1">Текущее время аудио</option>
		<option value="2">Громкость аудио</option>
    <option value="3">Битрейт аудио</option>
    <option value="4">Очередь аудио</option>
    <option value="6">Всего аудио в очереди</option>
    <option value="7">URL текущего аудио</option>
    <option value="8">Всего аудиозаписей в предыдущей очереди</option>
    <option value="9">Очередь предыдущих аудиозаписей</option>
    <option value="10">Предыдущий аудио</option>
    <option value="11">Следующий аудио</option>
	</select>
</div><br>

<div>
        <div style="float: left; width: 38%">
        <span class="dbminputlabel">Если аудио выключено</span><br>
        <select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
        <option value="0">Продолжить действия</option>
        <option value="1" selected>Остановить последовательность действий</option>
        <option value="2">Перейти к действию</option>
        <option value="3">Пропустить следующие действия</option>
        <option value="4">Перейти к якорю действий</option>
        </select>
        </div>
        
        <div id="iffalseContainer" style="display: none; float: right; width: 60%;"><span id="xinelas" class="dbminputlabel">Для</span><br><input id="iffalseVal" class="round" name="actionxinxyla" type="text"></div>
        </div>
        

        <br><br><br><br>


<table>
<tr>
<td class="sep1"><span class="dbminputlabel">Хранить в</span><br>
<select id="storage" class="round">
  ${data.variables[1]}
</select></td>
<td class="sep2"><span class="dbminputlabel">Имя переменной</span><br>
<input id="varName" class="round" type="text"></td>
</tr>

</table>
<br><br>
Это действие требует модифицированного Bot.js!<br>


</div>
<style>

.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}

table{width:100%}
.sep1{padding:0px 8px 0px 0px}
.sep2{padding:0px 0px 0px 0px}
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
        document.querySelector("[id='xinelas']").innerText = (`Пропустить действия`);
      }
      if (event.value == "4") {
        document.querySelector("[id='xinelas']").innerText = (`Якоря название`);
      }
    }

    glob.onComparisonChanged(document.getElementById("iffalse"));

  },


  action(cache) {

    const data = cache.actions[cache.index];
    const { Audio } = this.getDBM();
    const server = cache.server;
    const subscription = server && Audio.subscriptions.get(server.id);
    if (!subscription) return this.executeResults(false, data, cache);
    const info = parseInt(data.info, 10);
    let result;

    switch (info) {
      case 0:
        result = subscription.audioPlayer._state.status
        break;
      case 1:
        result = parseFloat(subscription.audioPlayer._state.playbackDuration)
        break;
      case 2:
        result = subscription.volume
        break;
      case 3:
        result = subscription.bitrate
        break;
      case 4:
        result = subscription.queue.map((m) => m.url)
        break;
      case 5:
        result = subscription
        break;
      case 6:
        result = subscription.queue.length
        break;
      case 7:
        result = subscription.currentsong
        break;
      case 8:
        result = subscription.previouslist.length
        break;
      case 9:
        result = subscription.previouslist.map((s) => s.url)
        break;
      case 10:
        var resultx = subscription.previouslist.map((s) => s.url)
        result = resultx[1]
        break;
      case 11:
        var resultx = subscription.queue.map((m) => m.url)
        result = resultx[0]
        break;
    }
    if (result !== undefined) {

      const storage = parseInt(data.storage, 10);
      const varName = this.evalMessage(data.varName, cache);

      this.storeValue(result, storage, varName, cache);
      this.callNextAction(cache);
    } else {
      this.executeResults(false, data, cache)
    }

  },



  mod() { },
};

