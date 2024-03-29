module.exports = {
  name: "Edit Post MOD",
  section: "Channel Control",
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[xinxyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {

    if (data.descriptionx == true) {
      desccor = data.descriptioncolor
    } else {
      desccor = 'none'
    }


    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">${data.channelName} > ${presets.getChannelText(data.channel, data.channelVarName)}</font>`
  },


  fields: ["channel", "channelVarName", "channelName", "reason", "autoArchiveDuration", "tags", "slowmode", "locked", "descriptioncolor", "description", "descriptionx"],


  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.1</div>

    <div style="width: 100%; padding:5px 5px;height: calc(100vh - 160px);overflow:auto">

    <div id="flutuador" style="padding:0px 0px 15px 0px">
    <table style="width:100%;"><tr>
    <td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Не обязательное действие"></td>
    <td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
    </tr></table>
    </div>

<channel-input dropdownLabel="Источник сообщения" selectId="channel" variableContainerId="varNameContainer" variableInputId="channelVarName"></channel-input>


<br><br><br>

<div style="padding-top: 8px;">
  <div style="float: left; width: calc(50% - 12px);">
    <span class="dbminputlabel">Имя</span><br>
    <input id="channelName" class="round" type="text" placeholder="Не обязательное поле">
  </div>
  <div style="float: right; width: calc(50% - 12px);">
    <span class="dbminputlabel">Причина</span>
    <input id="reason" placeholder="Не обязательное поле" class="round" type="text">
  </div>
</div>

<br><br><br>


        <span class="dbminputlabel">Закрывать автоматически через</span><br>
        <select id="autoArchiveDuration" class="round">
          <option value="none" selected>Не изменять</option>
          <option value="60">1 час</option>
          <option value="1440">24 часа</option>
          <option value="4320">3 дня (Требуется бустер LVL 1)</option>
          <option value="10080">1 неделя (Требуется бустер LVL 2)</option>
          <option value="max">Максимально</option>
        </select>

        <br>

        <span class="dbminputlabel">Режим медленного режима (в секундах)</span><br>
        <input id="slowmode" class="round" type="text" placeholder="Не обязательное поле">

        <br>

        <span class="dbminputlabel">Блокировка сообщений [true/false]</span><br>
        <input id="locked" class="round" type="text" placeholder="Не обязательное поле">

        <br>
  
        <span class="dbminputlabel">Список тегов [режим EVAL]</span><br>
        <input id="tags" name="is-eval" class="round" type="text" placeholder="Не обязательное поле">
        <br>
        [] = Удалить все теги<br>
        ['1118344873095987211' , '1118344873095988452'] = Добавить 2 тега

        <br>



      </div>

      <style>
      table{width:100%}
      .dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
      .dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}
      xinspace{padding:6px 0px 0px 0px;display:block}
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
          console.log(`Запуск URL: [${url}] в браузере.`);
          require('child_process').execSync(`start ${url}`);
        });
      }
    }
  },


  async action(cache) {
    const data = cache.actions[cache.index];
    const reason = this.evalMessage(data.reason, cache);

    const channelData = {};
    if (data.channelName) {
      channelData.name = this.evalMessage(data.channelName, cache);
    }

    if (data.autoArchiveDuration !== "none") {
      channelData.autoArchiveDuration = data.autoArchiveDuration === "max" ? "max" : parseInt(data.autoArchiveDuration, 10);
    }
    if (data.slowmode) {
      channelData.rateLimitPerUser = parseInt(this.evalMessage(data.slowmode, cache), 10);
    }
    if (this.evalMessage(data.locked, cache) !== "") {
      if (this.evalMessage(data.locked, cache) == true || this.evalMessage(data.locked, cache) == "true") {
        channelData.locked = true;
      }
      if (this.evalMessage(data.locked, cache) == false || this.evalMessage(data.locked, cache) == "false") {
        channelData.locked = false;
      }
    }

    if (data.tags == "") { } else {
      channelData.appliedTags = this.evalIfPossible(this.evalMessage(data.tags, cache), cache);
    }

    const channelStorage = parseInt(data.channel, 10);
    const channelVarName = this.evalMessage(data.channelVarName, cache);
    const channel = await this.getAnyChannel(channelStorage, channelVarName, cache);

    if (Array.isArray(channel)) {
      this.callListFunc(channel, "edit", [channelData, reason]).then(() => this.callNextAction(cache));
    } else if (channel?.edit) {
      channel
        .edit(channelData, reason)
        .then(() => this.callNextAction(cache))
        .catch((err) => this.displayError(data, cache, err));
    } else {
      this.callNextAction(cache);
    }
  },


  mod() { },
};
