module.exports = {
  name: 'Canvas Generate Graph MOD',
  section: 'Image Editing',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
		downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
	},

  subtitle (data) {
    const storeTypes = ['', 'Временная переменная', 'Серверная переменная', 'Глобальная переменная']
    return `${storeTypes[parseInt(data.storage)]} (${data.varName})`
  },

  variableStorage (data, varType) {
    const type = parseInt(data.storage)
    if (type !== varType) return
    return ([data.varName, 'Image'])
  },

  fields: ['type', 'sort', 'width', 'height', 'title', 'borderWidth', 'borderColor', 'borderColorAlpha', 'bgColor', 'bgColorAlpha', 'posicao', 'espacamento', 'alinhamento', 'labels', 'datasets', 'tamanhotitulo', 'cortitulo', 'storage', 'varName'],

  html (isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.2</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>


    <tab-system style="margin-top: -6px;">

		<tab label="Данные" icon="align left">
    <div style="padding:10px 5px 5px 5px" id="xinelas">

    <span class="dbminputlabel">Заголовок</span><br>
    <input id="title" class="round" type="text">
    <xinspace>
    <span class="dbminputlabel">Метки (через запятую)</span><br>
    <textarea id="labels" rows="5" placeholder="Пример 1, Пример 2, Пример 3..." style="width: 100%; white-space: nowrap; resize: yes;"></textarea>
    <xinspace>
    <span class="dbminputlabel">Значения (разделенные запятой)</span><br>
    <textarea id="datasets" rows="5" placeholder="10,20,30..." style="width: 100%; white-space: nowrap; resize: yes;"></textarea>
    </div>
    </tab>

    <tab label="Цвета" icon="flask">
    <div style="padding:10px 5px 5px 5px">
     <span class="dbminputlabel">Цвет заголовка</span><br>
    <table style="width:100%"><tr><th><input id="cortitulo" name="actionxinxyla" class="round" type="text" placeholder="Оставьте поле пустым для стандартного"><th>
    <th style="width:40px;text-align:center;padding:4px"><a id="2btr1" style="cursor:pointer" onclick="(function(){
      document.getElementById('cortitulo').type = 'color'
      document.getElementById('2btr1').style.display = 'none';
      document.getElementById('2btr2').style.display = 'block';
      })()"><button class="tiny compact ui icon button">Цвет</button></a><a id="2btr2" style="cursor:pointer;display:none" onclick="(function(){
        document.getElementById('cortitulo').type = 'text';
        document.getElementById('2btr1').style.display = 'block';
        document.getElementById('2btr2').style.display = 'none';
        })()"><button class="tiny compact ui icon button">Текст</button></a><th></tr></table>
        <xinspace>
<table style="width:100%">
    <tr>
    <td><span class="dbminputlabel">Непрозрачность фона</span><br>
    <input id="bgColorAlpha" class="round" type="text" value="0.9">
    </td>
    <td><span class="dbminputlabel">Непрозрачность края</span><br>
    <input id="borderColorAlpha" class="round" type="text" value="1"></td>
    </tr>
    </table>
    <xinspace>
    <span class="dbminputlabel">Цвет фона HEX (через запятую)</span><br>
    <textarea id="bgColor" rows="3" placeholder="#000000,#333333,#555555..." style="width: 100%; white-space: nowrap; resize: yes;"></textarea>
    <xinspace>
    <span class="dbminputlabel">Цвета края HEX (через запятую)</span><br>
    <textarea id="borderColor" rows="3" placeholder="#000000,#333333,#555555..." style="width: 100%; white-space: nowrap; resize: yes;"></textarea>
    
</div>
    </tab>

    <tab label="Размер" icon="move">
    <div style="padding:10px 5px 5px 5px">

    <table style="width:100%">
    <tr>
<td><span class="dbminputlabel">Ширина (px)</span><br>
<input id="width" class="round" type="text"></td>
<td><span class="dbminputlabel">Высота (px)</span><br>
<input id="height" class="round" type="text"></td>
</tr>

<tr>
<td><span class="dbminputlabel">Ширина края (px)</span><br>
<input id="borderWidth" class="round" type="text"></td>
<td><span class="dbminputlabel">Размер заголовка (px)</span><br>
<input id="tamanhotitulo" class="round" placeholder="Оставьте поле пустым для стандартного" type="text"></td>
</tr>

<tr>
<td><span class="dbminputlabel">Пространство по бокам (px)</span><br>
<input id="espacamento" class="round" value="0" type="text"></td>
<td></td>
</tr>

</table>
</div>
    </tab>

    <tab label="Определение" icon="cogs">
    <div style="padding:10px 5px 5px 5px">

    <span class="dbminputlabel">Тип графики</span><br>
<select id="type" class="round">
<option value="0" selecionado>Линия</option>
   <option value="1">Вертикальный</option>
   <option value="2">Горизонтальная</option>
   <option value="3">Радар</option>
   <option value="4">Пирог</option>
   <option value="5">Резьба</option>
   <option value="6">Полярная область</option>
</select>
<br>
<span class="dbminputlabel">Сортировать по</span><br>
<select id="sort" class="round">
<option value="0" selecionado>Никакой</option>
<option value="1">Подняться</option>
<option value="2">Спуститьсяr</option>
</select>
<br>

<table style="width:100%">
    <tr>
<td><span class="dbminputlabel">Позиция заголовка</span><br>
<select id="posicao" class="round">
<option value="top" selected>Верхний</option>
<option value="left">Левый</option>
<option value="right">Правый</option>
<option value="bottom">Нижний</option>
</select></td>
<td><span class="dbminputlabel">Выравнивание заголовка</span><br>
<select id="alinhamento" class="round">
<option value="center" selected>Централизованный</option>
<option value="start">Левый</option>
<option value="end">Правый</option>
</select></td>
</tr>
<tr>
<td><span class="dbminputlabel">Хранить в</span><br>
<select id="storage" class="round">
  ${data.variables[1]}
</select></td>
<td><span class="dbminputlabel">Имя переменной</span><br>
<input id="varName" class="round" type="text"></td>
</tr>

</table>

</div>
    </tab>
    
    </tab-system>

  <style>
  xinspace{margin:10px 0px 0px 0px;display:block}
  td{width:50%;padding:7px 5px;}
  </style>`
  },

  init () {
  },

 async action (cache) {
    const data = cache.actions[cache.index]
    const ChartJS = require('chart.js')
    const storage = parseInt(data.storage)
    const varName = this.evalMessage(data.varName, cache)
    const tamanhotitulo = this.evalMessage(data.tamanhotitulo, cache)
    const cortitulo = this.evalMessage(data.cortitulo, cache)
    const espacamento = this.evalMessage(data.espacamento, cache)
    var alinhamento = this.evalMessage(data.alinhamento, cache)
    if(alinhamento == ""){alinhamento = 'center'}
    var posicao = this.evalMessage(data.posicao, cache)
    if(posicao == ""){posicao = 'top'}
    let options = {}
    options.plugins = {legend: {position: posicao,align:alinhamento}}
    if(tamanhotitulo !== ""){options.plugins = {legend: {position: posicao,align:alinhamento,labels: {font: {size: tamanhotitulo}}}}}
    if(espacamento !== ""){options.layout = {padding: espacamento}}
    if(cortitulo !== ""){options.color = cortitulo}
    let type = parseInt(data.type, cache)
    switch (type) {
      case 0:
        type = 'line'
        break
      case 1:
        type = 'bar'
        break
      case 2:
        type = 'bar'
        options.indexAxis = 'y'
        break
      case 3:
        type = 'radar'
        break
      case 4:
        type = 'pie'
        break
      case 5:
        type = 'doughnut'
        break
      case 6:
        type = 'polarArea'
        break
        default:
        break
    }
    const sort = parseInt(data.sort, cache)
    const width = parseInt(this.evalMessage(data.width, cache))
    const height = parseInt(this.evalMessage(data.height, cache))
    const titlexinxyla = this.evalMessage(data.title, cache)
    let labels = this.evalMessage(data.labels, cache)
    if (typeof labels === 'string') labels = labels.split(',')
    let datasets = this.evalMessage(data.datasets, cache)
    if (typeof datasets === 'string') datasets = datasets.split(',')
    const bgColor = this.evalMessage(data.bgColor, cache).replaceAll('#', '')
    const bgColorAlpha = parseFloat(this.evalMessage(data.bgColorAlpha, cache))
    const borderWidth = parseFloat(this.evalMessage(data.borderWidth, cache))
    const borderColor = this.evalMessage(data.borderColor, cache).replaceAll('#', '')
    const borderColorAlpha = parseFloat(this.evalMessage(data.borderColorAlpha, cache))
    try {
      const result = await ChartJS.Chart(type, width, height, titlexinxyla, labels, datasets, sort, bgColor, bgColorAlpha, borderWidth, borderColor, borderColorAlpha, options)
      this.storeValue(result, storage, varName, cache)
      this.callNextAction(cache)
    } catch (err) {
      console.log(err)
    }
  },

  mod (DBM) {
    const ChartJS = require('chart.js')
    const Canvas = require('canvas')
    ChartJS.Chart = function (type, width, height, titlexinxyla, labels, data, sort, bgColor, bgColorAlpha, borderWidth, borderColor, borderColorAlpha, options = {}) {
      const config = { type, data: {}, options }
      config.options.responsive = false
      config.options.animation = false
      if (sort !== 0) {
        const sortList = {}
        for (let i = 0; i < data.length; i++) {
          sortList[labels[i]] = data[i]
        }
        let sortedLabels
        const sortedData = []
        if (sort === 1) {
          sortedLabels = Object.keys(sortList).sort((a, b) => sortList[a] - sortList[b])
        } else {
          sortedLabels = Object.keys(sortList).sort((a, b) => sortList[b] - sortList[a])
        }
        sortedLabels.forEach((key) => {
          sortedData.push(sortList[key])
        })
        data = sortedData
        labels = sortedLabels
      }
      bgColorAlpha = (isNaN(bgColorAlpha) || bgColorAlpha > 1) ? 1 : ((bgColorAlpha <= 0) ? 0.1 : bgColorAlpha)
      borderColorAlpha = (isNaN(borderColorAlpha) || borderColorAlpha > 1) ? 1 : ((borderColorAlpha <= 0) ? 0 : borderColorAlpha)
      let mainColor
      mainColor = bgColor.split(',')
      bgColor = getColors(mainColor, bgColorAlpha)
      config.data = { labels, datasets: [{ label: titlexinxyla, data }] }
      function getColors (colors, alpha) {
        return colors.map(hex => `rgba(${parseInt(hex.slice(0, 2), 16)},${parseInt(hex.slice(2, 4), 16)},${parseInt(hex.slice(4, 6), 16)},${alpha})`)
      }
      config.data.datasets[0].backgroundColor = bgColor
      if (borderWidth > 0) {
        if (!borderColor) {
          borderColor = getColors(mainColor, borderColorAlpha)
        } else {
          borderColor = getColors(borderColor.split(','), borderColorAlpha)
        }
        config.data.datasets[0].borderColor = borderColor
        config.data.datasets[0].borderWidth = borderWidth
      }
      const canvas = Canvas.createCanvas(width, height)
      canvas.style = {}
      const ctx = canvas.getContext('2d')
      const chart = new ChartJS(ctx, config)
      try {
        return chart.canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
      } catch (error) {
        throw Error(error)
      }
    }
  }

}
