module.exports = {
  name: 'Create Server Template MOD',
  section: 'Server Control',
    meta: {
      version: '2.1.7',
      preciseCheck: true,
      author: '[XinXyla - 172782058396057602]',
      authorUrl: 'https://github.com/DBM-Mods/Russia',
      downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
    },

  subtitle (data) {
    return `${data.templatename}`
  },
  variableStorage (data, varType) {
    const type = parseInt(data.storage)
    if (type !== varType) return
    return ([data.varName2, 'URL'])
  },

  fields: ['server',"varName",'templatename', 'templatedescricao', 'storage', 'varName2'],

  html(isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.2</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>
<div>
<server-input dropdownLabel="Сервер" selectId="server" variableContainerId="varNameContainer" variableInputId="varName"></server-input>
<br><br><br>
<div style="float: left; width: 100%;">
<span class="dbminputlabel">Имя шаблона</span><br>
<input id="templatename" class="round" type="text">
</div>
<br><br><br>
<div style="padding-top: 3px;">
<span class="dbminputlabel">Описание</span><br>
		  <textarea id="templatedescricao" name="templatedescricao" rows="3" placeholder="Не обязательное поле" style="width: 99%; font-family: monospace; white-space: nowrap;"></textarea>
      Максимум 120 символов
	  </div>
    <br>
<div style="padding-top: 8px;">
  <div style="float: left; width: 35%;">
  <span class="dbminputlabel">Сохранить в</span><br>
    <select id="storage" class="round">
      ${data.variables[1]}
    </select>
  </div>
  <div id="varNameContainer" style="float: right; width: 60%;">
  <span class="dbminputlabel">Имя переменной</span><br>
    <input id="varName2" class="round" type="text">
  </div>
</div>`
  },

    init () {},

  async action(cache) {
    const data = cache.actions[cache.index]
    const targetServer = await this.getServerFromData(data.server, data.varName, cache);
    if (!targetServer) {
      return this.callNextAction(cache);
    }
    const templatename = this.evalMessage(data.templatename, cache)
    const templatedescricao = this.evalMessage(data.templatedescricao, cache)
    result = targetServer.createTemplate(templatename, templatedescricao).catch((err) => {
      console.log('Для этого сервера уже создан шаблон!')
      console.error(err)
    })

    if (result = `https://discord.new/${(await targetServer.fetchTemplates()).map(v => v.code)}`) {
      const storage = parseInt(data.storage)
      const varName2 = this.evalMessage(data.varName2, cache)
      this.storeValue(result, storage, varName2, cache)
      this.callNextAction(cache)
    }
  },


  mod () {}
}
