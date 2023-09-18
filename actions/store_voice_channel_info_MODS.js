module.exports = {

  name: "Store Voice Channel Info MOD",
  section: "Channel Control",
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
    },


  subtitle(data, presets) {
    if(data.descriptionx == true){
      desccor = data.descriptioncolor
      } else {
        desccor = 'none'
      }

      const info = [
        "Объект голосового канала",
        "(ID) Идентификатор голосового канала",
        "Название голосового канала",
        "Положение голосового канала",
        "Лимит пользователей голосового канала",
        "Битрейт голосового канала",
        "Участники подключены к голосовому каналу",
        "Количество участников в голосовом канале",
        "Можете поговорить?",
        "Можете войти?",
        "Удалить?",
        "Дата создания голосового канала",
        "(Timestamp) Временная метка создания голосового канала",
        "Название категории голосового канала",
        "Список приглашений голосового канала",
        "Регион определяется в голосовом канале",
      ];

    return data.description
    ? `<font style="color:${desccor}">${data.description}</font>`
    : `<font style="color:${desccor}">${presets.getVoiceChannelText(data.channel, data.varName)} - ${info[parseInt(data.info, 10)]}</font>`
  },


  variableStorage(data, varType) {
    const type = parseInt(data.storage, 10);
    if (type !== varType) return;
    const info = parseInt(data.info, 10);
    let dataType = "Неизвестный";
    switch (info) {
      case 0:
        dataType = "Объект";
        break;
      case 1:
        dataType = "(ID) Идентификатор";
        break;
      case 2:
        dataType = "Текст";
        break;
      case 3:
      case 4:
      case 5:
        dataType = "Число";
        break;
      case 6:
        dataType = "Список";
          break;
      case 7:
          dataType = "Число";
            break;
      case 8:
          dataType = "Правда или ложь";
              break;
      case 9:
          dataType = "Правда или ложь";
                break;
      case 10:
          dataType = "Правда или ложь";
                  break;
      case 11:
          dataType = "Данные";
                    break;
      case 12:
          dataType = "(Timestamp) Временная метка";
                      break;
      case 13:
          dataType = "Текст";
                        break;
      case 14:
          dataType = "Список";
                          break;
                          case 15:
                            dataType = "Число";
                            break;
    }
    return [data.varName2, dataType];
  },


  fields: ["channel", "varName", "info", "storage", "varName2","descriptioncolor","description","descriptionx"],


  html(isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновить</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.6</div>

    <div style="width: 100%; padding:5px 5px;height: calc(100vh - 160px);overflow:auto">

    <div id="flutuador" style="padding:0px 0px 15px 0px">
<table style="width:100%;"><tr>
<td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Оставьте пустым, чтобы не использовалось!"></td>
<td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
</tr></table>
</div>

<voice-channel-input dropdownLabel="Канал" selectId="channel" variableContainerId="varNameContainer" variableInputId="varName" selectWidth="45%" variableInputWidth="50%"></voice-channel-input>

<br><br><br>

<div style="padding-top: 8px;">
	<span class="dbminputlabel">Информация об канале</span><br>
	<select id="info" class="round">
		<option value="0" selected>Объект голосового канала</option>
		<option value="1">(ID) Идентификатор голосового канала</option>
		<option value="2">Название голосового канала</option>
		<option value="3">Положение голосового канала</option>
		<option value="4">Лимит пользователей голосового канала</option>
		<option value="5">Битрейт голосового канала</option>
    <option value="6">Подключенные участники в голосовом канале</option>
    <option value="7">Количество участников в голосовом канале</option>
    <option value="8">Можете поговорить?</option>
    <option value="9">Можете войти?</option>
    <option value="10">Удалить?</option>
    <option value="11">Дата создания голосового канала</option>
    <option value="12">(Timestamp) Временная метка создания голосового канала</option>
    <option value="13">Название категории голосового канала</option>
    <option value="14">Список приглашений голосового канала</option>
    <option value="15">Определенный регион голосового канала</option>
	</select>
</div>

<br>

<store-in-variable dropdownLabel="Хранить в" selectId="storage" variableContainerId="varNameContainer2" variableInputId="varName2"></store-in-variable>

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
        console.log(`Запуск URL: [${url}] В вашем браузере по умолчанию.`);
        require('child_process').execSync(`start ${url}`);
      });
    }
  }

},



  async action(cache) {
    const data = cache.actions[cache.index];
    const targetChannel = await this.getVoiceChannelFromData(data.channel, data.varName, cache);
    
    if (!targetChannel) {
      this.callNextAction(cache);
      return;
    }

    const info = parseInt(data.info, 10);

    let result;
    switch (info) {
      case 0:
        result = targetChannel;
        break;
      case 1:
        result = targetChannel.id;
        break;
      case 2:
        result = targetChannel.name;
        break;
      case 3:
        result = targetChannel.position;
        break;
      case 4:
        result = targetChannel.userLimit;
        break;
      case 5:
        result = targetChannel.bitrate;
        break;
      case 6:
          result = targetChannel.members.filter(member => member).map(member => member);
          break;
      case 7:
        result = targetChannel.members.size;
            break;
      case 8:
            result = targetChannel.speakable;
            break;
      case 9:
            result = targetChannel.joinable;
            break;
      case 10:
            result = targetChannel.deletable;
            break;
      			case 11:
				result = targetChannel.createdAt;
				break;
			case 12:
				result = targetChannel.createdTimestamp;
				break;
			case 13:
				result = targetChannel.parent;
				break;
			case 14:
				const invites = await targetChannel.fetchInvites();
				if(invites.size == 0) {
					result = "Нет приглашений"
				} else {
					result = invites.filter(code => code).map(code => code).join(", ");
				}
				break;
        case 15:
          result = targetChannel.rtcRegion;
          break;
      default:
        break;
    }
    if (result !== undefined) {
      const storage = parseInt(data.storage, 10);
      const varName2 = this.evalMessage(data.varName2, cache);
      this.storeValue(result, storage, varName2, cache);
    }
    this.callNextAction(cache);
  },



  mod() {},
};
