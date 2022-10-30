module.exports = {
  name: 'Call Command/Event MOD',
  section: 'Other Stuff',
  meta: {
    version: '2.1.6',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data) {
    let source;
    if (parseInt(data.sourcetype, 10) === 3) {
      source = 'Та же команда/событие';
    }
    if (parseInt(data.sourcetype, 10) === 2) {
      source = 'Имя команды: ' + data.source3.toString();
    }
    if (parseInt(data.sourcetype, 10) === 1) {
      source = 'Идентификатор (ID) команды: ' +data.source2.toString();
    } 
    if (parseInt(data.sourcetype, 10) === 0 || data.sourcetype == undefined) {
      source = 'Список > команда: ' +data.source.toString();
    }
    return `${source}`;
  },

  fields: ['sourcetype', 'source', 'source2', 'source3', 'type'],

  html() {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.4</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>
<div style="float: left; width: 100%; padding-top: 20px;">
<span class="dbminputlabel">Тип выбора</span><br>
  <select id="sourcetype" class="round" onchange="glob.onChange1(this)">
    <option value="0" selected>Выбрать из списка</option>
    <option value="1">Введите команду/идентификатор (ID) события</option>
    <option value="2">Введите имя команды/событие</option>
    <option value="3">Та же команда/событие</option>
  </select>
</div>
<div id="info1"; style="float: left; width: 100%; padding-top: 20px; display: none;">
<span class="dbminputlabel">Команда/событие</span><br>
  <select id="source" class="round">
    <optgroup id="commands" label="Команды"></optgroup>
    <optgroup id="events" label="События"></optgroup>
  </select>
</div>
<div id="info2" style="float: left; width: 100%; padding-top: 20px;">
<span class="dbminputlabel">Идентификатор (ID) команды/события</span><br>
  <input id="source2" class="round" type="text" placeholder="">
</div>
<div id="info3" style="float: left; width: 100%; padding-top: 20px;">
<span class="dbminputlabel">Имя команды / события</span><br>
  <input id="source3" class="round" type="text" placeholder="">
</div>
<div style="float: left; width: 100%; padding-top: 20px;">
<span class="dbminputlabel">Тип вызова</span><br>
  <select id="type" class="round">
  <option value="true" selected>Дождаться завершения</option>
  <option value="false">Одновременно выполнить</option>
  </select>
</div>`;
  },

  init() {
    const { glob, document } = this;

    const { $cmds } = glob;
    const coms = document.getElementById('commands');
    coms.innerHTML = '';
    for (let i = 0; i < $cmds.length; i++) {
      if ($cmds[i]) {
        coms.innerHTML += `<option value="${$cmds[i]._id}">${$cmds[i].name}</option>\n`;
      }
    }

    const { $evts } = glob;
    const evet = document.getElementById('events');
    evet.innerHTML = '';
    for (let i = 0; i < $evts.length; i++) {
      if ($evts[i]) {
        evet.innerHTML += `<option value="${$evts[i]._id}">${$evts[i].name}</option>\n`;
      }
    }

    glob.onChange1 = function onChange1(event) {
      const sourceType = parseInt(document.getElementById('sourcetype').value, 10);
      const info1 = document.getElementById('info1');
      const info2 = document.getElementById('info2');
      const info3 = document.getElementById('info3');

      switch (sourceType) {
        case 0:
          info1.style.display = null;
          info2.style.display = 'none';
          info3.style.display = 'none';
          break;
        case 1:
          info1.style.display = 'none';
          info2.style.display = null;
          info3.style.display = 'none';
          break;
        case 2:
          info1.style.display = 'none';
          info2.style.display = 'none';
          info3.style.display = null;
          break;
        case 3:
          info1.style.display = 'none';
          info2.style.display = 'none';
          info3.style.display = 'none';
          break;
        default:
          break;
      }
    };

    glob.onChange1(document.getElementById('sourcetype'));
  },

  action(cache) {
    const data = cache.actions[cache.index];
    const { Files } = this.getDBM();
    source = this.evalMessage(data.source, cache)
    source2 = this.evalMessage(data.source2, cache)
    source3 = this.evalMessage(data.source3, cache)

    let id;

    if (data.sourcetype == "0" || data.sourcetype == undefined) {
      id = source
    }

    if (data.sourcetype == "1") {
      id = source2
      if (!id) return console.log('Введите идентификатор (ID) команды/событие!')
    }

    let name;

    if (data.sourcetype == "2") {
      name = source3
      if (!name) return console.log('Введите имя команды / события!')
    }

    if (data.sourcetype == "3") {
    const jp = this.getMods().require('jsonpath');
    var interaction = cache.interaction;

    if(interaction){
      command = jp.query(
        this.getDBM().Files.data.commands,
        `$..[?(@.name=="${interaction.commandName}")]`,
      );
      } else {
        command = jp.query(
          this.getDBM().Files.data.commands,
          `$..[?(@.name=="${cache.msg.content
            .slice(this.getDBM().Files.data.settings.tag.length || cache.server.tag.length)
            .split(/ +/)
            .shift()}")]`,
        )
        }
        
        idsave = jp.query(command, '$.._id')
        id = idsave.toString()
      }
    

    let actions;

    const allData = Files.data.commands.concat(Files.data.events);
    for (let i = 0; i < allData.length; i++) {

      if (data.sourcetype == "0" || data.sourcetype == "1" || data.sourcetype == "3" || data.sourcetype == undefined) {
        if (allData[i] && allData[i]._id === id) {
          actions = allData[i].actions;
          break;
        }
      }
      if (data.sourcetype == "2") {
        if (allData[i] && allData[i].name === name) {
          actions = allData[i].actions;
          break;
        }
      }
    }
    if (!actions) {
      this.callNextAction(cache);
      return;
    }

    const waitForCompletion = data.type === "true";
    let callback = null;
    if (waitForCompletion) {
      callback = () => this.callNextAction(cache);
    }
    this.executeSubActions(actions, cache, callback);
    if (!waitForCompletion) {
      this.callNextAction(cache);
    }
  },


  mod() {},
};
