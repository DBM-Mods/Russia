module.exports = {
  //---------------------------------------------------------------------
  // Action Name
  //
  // This is the name of the action displayed in the editor.
  //---------------------------------------------------------------------

  name: "Delete Bulk Messages MOD",

  //---------------------------------------------------------------------
  // Action Section
  //
  // This is the section the action will fall into.
  //---------------------------------------------------------------------

  section: "Messaging",

  //---------------------------------------------------------------------
  // Action Subtitle
  //
  // This function generates the subtitle displayed next to the name.
  //---------------------------------------------------------------------

  subtitle(data, presets) {
    return `Удалить ${data.count} сообщения от ${presets.getChannelText(data.channel, data.varName)}`;
  },

  //---------------------------------------------------------------------
  // Action Meta Data
  //
  // Helps check for updates and provides info if a custom mod.
  // If this is a third-party mod, please set "author" and "authorUrl".
  //
  // It's highly recommended "preciseCheck" is set to false for third-party mods.
  // This will make it so the patch version (0.0.X) is not checked.
  //---------------------------------------------------------------------

  meta: {
    version: '2.1.6',
    preciseCheck: true,
    author: '[Tempest - 321400509326032897]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  //---------------------------------------------------------------------
  // Action Fields
  //
  // These are the fields for the action. These fields are customized
  // by creating elements with corresponding IDs in the HTML. These
  // are also the names of the fields stored in the action's JSON data.
  //---------------------------------------------------------------------




  variableStorage: function(data, varType) {
    const type = parseInt(data.storage);
    if(type !== varType) return;
    return ([data.varName3, 'Número']);
  },



  fields: [
    "channel",
    "count",
    "varName",
    "fixed",
    "bots",
    "hum",
    "user",
    "member",
    "varName2",
    "storage",
    "varName3",
    "iffalse",
    "iffalseVal",
  ],

  //---------------------------------------------------------------------
  // Command HTML
  //
  // This function returns a string containing the HTML used for
  // editing actions.
  //
  // The "isEvent" parameter will be true if this action is being used
  // for an event. Due to their nature, events lack certain information,
  // so edit the HTML to reflect this.
  //---------------------------------------------------------------------

  html(isEvent, data) {
    return `
<div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.1</div>
<div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>
    

<channel-input dropdownLabel="Канал" selectId="channel" variableContainerId="varNameContainer" variableInputId="varName"></channel-input>

<br><br><br>


<tab-system style="margin-top: 20px;">
  <tab label="Конфигурация" icon="cogs">

    <span class="dbminputlabel">Удалить количество</span>
    <input id="count" class="round" type="text">

    <br>

    <div class="options">
      <dbm-checkbox id="fixed" label="Игнорировать закрепленные сообщения"></dbm-checkbox>
      <dbm-checkbox id="bots" label="Игнорировать сообщения ботов"></dbm-checkbox>
      <dbm-checkbox id="hum" label="Игнорировать сообщения от людей"></dbm-checkbox>
      <dbm-checkbox id="user" label="Игнорировать сообщения участника..." onchange="glob.change(this)"></dbm-checkbox>
    </div>

    <div id="divValue">
      <member-input dropdownLabel="Пользователь" selectId="member" variableContainerId="varNameContainer2" variableInputId="varName2"></member-input>
      <br><br><br>
    </div>
  </tab>

  <tab label="Хранить" icon="file image">
    <div style="float: left; width: 35%; padding-top: 8px;">
      <span class="dbminputlabel">Удаленные сообщения</span><br>
      <select id="storage" class="round" onchange="glob.variableChange(this, 'varNameContainer3')">
        ${data.variables[0]}
      </select>
    </div>

    <div id="varNameContainer3" style="float: right; display: none; width: 60%; padding-top: 8px;">
      <span class="dbminputlabel">Имя переменной</span><br>
      <input id="varName3" class="round" type="text">
    </div>

    <br><br><br><br>


      <div style="float: left; width: 40%">
        <span class="dbminputlabel">Если не удалились</span><br>
          <select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
            <option value="0" selecionado>Продолжать</option>
            <option value="1">Остановить последовательность действий</option>
            <option value="2">Перейти к действию</option>
            <option value="3">Пропустить следующие действия</option>
            <option value="4">Перейти к якову действия</option>
          </select>
      </div>

      <div id="iffalseContainer" style="display: none; float: right; width: 55%;">
        <span id="xinelas" class="dbminputlabel">Для</span>
        <br>
        <input id="iffalseVal" class="round" name="actionxinxyla" type="text"></div>
  </tab>
</tab-system>

<style>
.options {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.options dbm-checkbox {
  margin: 5px;
}
</style>
`;
  },

  //---------------------------------------------------------------------
  // Action Editor Init Code
  //
  // When the HTML is first applied to the action editor, this code
  // is also run. This helps add modifications or setup reactionary
  // functions for the DOM elements.
  //---------------------------------------------------------------------

  init() {
    glob.change = function(event) {
      if(event.value == true) {
        document.getElementById("divValue").style.display = "block";
      } else {
        document.getElementById("divValue").style.display = "none";
      }
    };

    glob.change(document.getElementById("user"));

    glob.variableChange(document.getElementById('storage'), 'varNameContainer3');

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
        document.querySelector("[id='xinelas']").innerText = (`Номер пропусков`);
      }

      if (event.value == "4") {
        document.querySelector("[id='xinelas']").innerText = (`Якоря название`);
      }
  }

  glob.onComparisonChanged(document.getElementById("iffalse"));
  },

  //---------------------------------------------------------------------
  // Action Bot Function
  //
  // This is the function for the action within the Bot's Action class.
  // Keep in mind event calls won't have access to the "msg" parameter,
  // so be sure to provide checks for variable existence.
  //---------------------------------------------------------------------

  async action(cache) {
    const data = cache.actions[cache.index];
    const channel = await this.getChannelFromData(data.channel, data.varName, cache);
    var member = await this.getMemberFromData(data.member, data.varName, cache);
    const memberfind = this.evalMessage(data.member, cache);

    if(memberfind == "100" && data.user == true || memberfind == "101" && data.user == true) {
      const find = this.evalMessage(data.varName, cache);

      const server = cache.server;
      if (!server?.members) {
        this.callNextAction(cache);
        return;
      }

      if (server.memberCount !== server.members.cache.size) server.members.fetch();
      const members = server.members.cache;

      if(memberfind == "100") {
        member = members.find((m) => m.user?.username === find);
      }

      if(memberfind == "101") {
        member = members.get(find);
      }
      
    }

    if (!channel?.messages) return this.callNextAction(cache);

    const count = Math.min(parseInt(this.evalMessage(data.count, cache), 10), 100);
    const options = {
      limit: count
    };

    if (cache.msg) {
      options.before = cache.msg.id;
    }

    channel.messages
      .fetch(options)
      .then((messages) => {

        if(data.fixed == true) {
          messages = messages.filter((el) => el.pinned === false);
        }
      
        if(data.bots == true) {
          messages = messages.filter((el) => el.author.bot === false);
        }
      
        if(data.hum == true) {
          messages = messages.filter((el) => el.author.bot === true);
        }
      
        if(data.user == true) {
          messages = messages.filter((el) => el.author.id.toString() !== member.id.toString());
        }

        const storage = parseInt(data.storage);
        const varName3 = this.evalMessage(data.varName3, cache);
        this.storeValue(messages.size, storage, varName3, cache);

        channel
          .bulkDelete(messages, true)
          .then(() => this.callNextAction(cache))
          .catch((err) => this.displayError(data, cache, err) || this.executeResults(false, data, cache));
      })
      .catch((err) => this.displayError(data, cache, err) || this.executeResults(false, data, cache));
  },

  //---------------------------------------------------------------------
  // Action Bot Mod
  //
  // Upon initialization of the bot, this code is run. Using the bot's
  // DBM namespace, one can add/modify existing functions if necessary.
  // In order to reduce conflicts between mods, be sure to alias
  // functions you wish to overwrite.
  //---------------------------------------------------------------------

  mod(DBM) {},
};