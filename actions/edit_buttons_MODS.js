module.exports = {

  name: "Edit Buttons MOD",
  section: "Messaging",
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
  },

  subtitle: function(data, presets) {

type = `${data.type}`;
switch (type) {
      case "all": {
        selects = 'Все кнопки';
        break;
        }
        case "sourceButton": {
        selects = 'Текущая кнопка';
        break;
        }
          case "findButton": {
        selects = 'Конкретная кнопка';
        break;
        }
      }
    const info = ['Все кнопки', 'Текущая кнопка', 'Конкретная кнопка'];
     return `Редактировать "${selects}" в "${presets.getMessageText(data.storage, data.varName)}"`;
},

  fields: ["storage", "varName", "type", "alterartype", "alterarnome", "alteraremoji", "searchValue"],


  html: function(isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.3</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>
    <div id="wrexdiv" style="height: 370px; overflow-y: scroll;padding:5px 10px">
<message-input dropdownLabel="Сообщение источника" selectId="storage" variableContainerId="varNameContainer" variableInputId="varName"></message-input>

<br><br><br><br>

<div style="float: left; width: calc(50% - 12px);">
  <span class="dbminputlabel">Выбор кнопок</span><br>
  <select id="type" class="round" onchange="glob.onButtonSelectTypeChange(this)">
  <option value="all" selected>Все кнопки</option>
  <option value="sourceButton">Текущая кнопка</option>
  <option value="findButton">Конкретная кнопка</option>
  </select>
</div>

<div style="float: right; width: calc(50% - 12px);">
<div id="nameContainer" style="width: 100%">
  <span class="dbminputlabel">Идентификатор кнопки</span><br>
  <input id="searchValue" class="round" type="text">
</div>
</div>

<br><br><br><br>


  <span class="dbminputlabel">Изменить имя на</span><br>
  <input id="alterarnome" class="round" type="text">

  <br>

  <span class="dbminputlabel">Изменить эмодзи на</span><br>
  <input id="alteraremoji" class="round" type="text">

  <br>


<span class="dbminputlabel">Изменить цвет на</span><br>
<input id="alterartype" value="PRIMARY" class="round" type="text"><br>
PRIMARY (Синий)<br>
SECONDARY (Серый)<br>
SUCCESS (Зелёный)<br>
DANGER (Красный)<br>
Или использовать переменную, пример \${tempVars("цвет")}</div>
`;
  },

  preInit(data, formatters) {
    return formatters.compatibility_2_0_0_iftruefalse_to_branch(data);
  },


  init() {
    const { glob, document } = this;
    

    glob.onButtonSelectTypeChange = function (event) {
      const input = document.getElementById("nameContainer");
      input.style.display = event.value === "findButton" || event.value === "findSelect" ? null : "none";
    };

    glob.onButtonSelectTypeChange(document.getElementById("type"));
},


  async action(cache) {

    const data = cache.actions[cache.index],
    alterartype = this.evalMessage(data.alterartype, cache),
    alteraremoji = this.evalMessage(data.alteraremoji, cache),
    alterarnome = this.evalMessage(data.alterarnome, cache);
    const message = await this.getMessageFromData(data.storage, data.varName, cache);

    const type = data.type;

    let sourceButton = null;
    if (cache.interaction.isButton()) {
      sourceButton = cache.interaction.customId;
    }

    let sourceSelect = null;
    if (cache.interaction.isSelectMenu()) {
      sourceSelect = cache.interaction.customId;
    }

    let components = null;
    let searchValue = null;

    if (message?.components) {

      const { MessageActionRow } = this.getDBM().DiscordJS;
      const oldComponents = message.components;
      const newComponents = [];

      for (let i = 0; i < oldComponents.length; i++) {

        const compData = oldComponents[i];
        const comps = (compData instanceof MessageActionRow) ? compData.toJSON() : compData;

        for (let j = 0; j < comps.components.length; j++) {

          const comp = comps.components[j];
          const id = comp.custom_id ?? comp.customId;

          switch (type) {
            case "all": {
              comp.style = alterartype;
              comp.label = alterarnome;
              comp.emoji = alteraremoji;
              break;
            }
            case "sourceButton": {
              if (id === sourceButton) comp.style = alterartype;
              if (id === sourceButton) comp.label = alterarnome;
              if (id === sourceButton) comp.emoji = alteraremoji;
              break;
            }
            case "findButton": {
              if (searchValue === null) searchValue = this.evalMessage(data.searchValue, cache);
              if (id === searchValue || comp.style === searchValue) comp.style = alterartype;
              if (id === searchValue || comp.label === searchValue) comp.label = alterarnome;
              if (id === searchValue || comp.emoji === searchValue) comp.emoji = alteraremoji;
              break;
            }
          }
        }

        newComponents.push(comps);

      }

      components = newComponents;

    }

    if (components) {
      if (Array.isArray(message)) {
        this.callListFunc(message, "edit", [{ components }]).then(() => this.callNextAction(cache));
      } else if (cache.interaction?.message?.id === message?.id && cache.interaction?.update && !cache.interaction?.replied) {
        cache.interaction
          .update({ components })
          .then(() => this.callNextAction(cache))
          .catch((err) => this.displayError(data, cache, err));
      } else if (message?.edit) {
        message
          .edit({ components })
          .then(() => this.callNextAction(cache))
          .catch((err) => this.displayError(data, cache, err));
      } else {
        if (message.components) {
          message.components = components;
        }
        this.callNextAction(cache);
      }
    } else {
      this.callNextAction(cache);
    }
  },



  mod() {},
};
