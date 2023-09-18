module.exports = {
  name: "Action Container MOD",
  section: "Other Stuff",
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

    let text = ""
    if (data.actions.length == 1) {
      text = "действие"
    } else {
      text = "действий"
    }

    return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">Выполнить ${data.actions.length} ${text}</font>`

  },



  fields: ["descriptioncolor", "description", "descriptionx", "acao", "actions"],


  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.2</div>

    <div style="width: 100%; padding:5px 5px;height: calc(100vh - 150px);overflow:auto">


    <div id="flutuador" style="padding:0px 0px 15px 0px">
    <table style="width:100%;"><tr>
    <td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Не обязательное поле"></td>
    <td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
    </tr></table>
    </div>

<span class="dbminputlabel">Действие</span><br>
    <select id="acao" class="round">
    <option value="0" selected>Дождаться выполнения всех действий и продолжить</option>
    <option value="1">Дождаться выполнения всех действий и остановиться</option>
    <option value="2">Продолжить действия и выполните контейнер вместе</option>
</select>

<br>

<action-list-input id="actions" height="calc(100vh - 340px)"></action-list-input>

</div>


<style>

.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}

</style>`;
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
            console.log(`Запуск URL: [${url}] браузере по умолчанию.`);
            require('child_process').execSync(`start ${url}`);
          });
        }
      }

  },

  action(cache) {
    const data = cache.actions[cache.index];
    const actions = data.actions;

    if (data.acao == "0") {
      this.executeSubActionsThenNextAction(actions, cache)
    }
    if (data.acao == "1") {
      this.executeSubActions(actions, cache)
    }
    if (data.acao == "2") {
      this.executeSubActions(actions, cache)
      this.callNextAction(cache)
    }

  },


  modInit(data) {
    this.prepareActions(data.actions);
  },



  mod() {},
};
