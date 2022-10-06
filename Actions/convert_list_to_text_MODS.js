module.exports = {
  name: "Convert List to Text MOD",
  section: "Lists and Loops",
  meta: {
    version: '2.1.6',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Russia',
    downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
    },
 

  subtitle(data, presets) {
    const list = presets.lists;
    return `Конвертировать ${list[parseInt(data.list, 10)]} в текст`;
  },

  variableStorage(data, varType) {
    const type = parseInt(data.storage, 10);
    if (type !== varType) return;
    return [data.varName2, "Text"];
  },


  fields: ["list", "varName","numero", "start", "start2", "start3", "multi", "end", "end2", "end3", "posicao", "storage", "varName2" , "itens"],

  html(isEvent, data) {
    return `
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Версия 0.2</div>
    <div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>

    <tab-system style="margin-top: 0;">
		<tab label="Список и результат" icon="align left">
    <div style="width: 100%; padding:10px 5px;height: calc(100vh - 210px);overflow:auto">

    <table><tr><td>
     <span class="dbminputlabel">Список</span><br>
      <select id="list" class="round" onchange="glob.listChange(this, 'varNameContainer')">
        ${data.lists[isEvent ? 1 : 0]}
      </select><br>
    </td>
    <td>
    <span class="dbminputlabel">Имя переменой</span><br>
      <input id="varName" class="round" type="text" list="variableList"><br>
    </td></tr></table>
 

  <table><tr><td>
<span class="dbminputlabel">Результат в</span><br>
		<select id="storage" class="round">
		${data.variables[1]}
		</select><br>
	</td>
	<td>
  <span class="dbminputlabel">Имя переменой</span><br>
		<input id="varName2" class="round" type="text"><br>
    </td></tr></table>

  </div>
    </tab>
    <tab label="Все элементы" icon="align left">

<div style="width: 100%; padding: 10px;height: calc(100vh - 210px);overflow:auto">

<dbm-checkbox id="numero" label="Показать номер позиции в каждом элементе"></dbm-checkbox>
<br>
	
		<span class="dbminputlabel">Начало каждого предмета</span><br>
    <textarea id="start" rows="3" style="width: 100%; white-space: nowrap; resize: yes;"></textarea>
	
<br>
	
		<span class="dbminputlabel">Конец каждого предмета</span><br>
    <textarea id="end" rows="3" style="width: 100%; white-space: nowrap; resize: yes;" value="\\n"></textarea><br>

</div>
</tab>
    <tab label="Предметы" icon="align left">
    <div style="width: 100%; padding: 10px;height: calc(100vh - 210px);overflow:auto">


  <span class="dbminputlabel">С каждым * предметами</span><br>
<input id="multi" class="round" type="text" value="0">
		
<br>

		<span class="dbminputlabel">Добавить не начинать</span><br>
    <textarea id="start2" rows="3" style="width: 100%; white-space: nowrap; resize: yes;"></textarea>
	
<br>
	
		<span class="dbminputlabel">Добавить в конце</span><br>
    <textarea id="end2" rows="3" style="width: 100%; white-space: nowrap; resize: yes;" value="\\n"></textarea><br>

</div>


</tab>

<tab label="Редактировать элементы" icon="align left">
<dialog-list id="itens" fields='["posicao","start3","end3", "val1", "val2", "comparar", "formula"]' dialogTitle="Редактировать элементы" dialogWidth="500" dialogHeight="510" listLabel="Предметы" listStyle="height: calc(100vh - 250px);" itemName="Editar item" itemCols="1" itemHeight="40px;" itemTextFunction="data.formula + ' / Позиция: ' + data.posicao" itemStyle="text-align: left; line-height: 40px;">
<div style="padding: 16px;background:rgba(0,0,0,0.3)">
                 <span class="dbminputlabel">Редактировать элементы</span><br>
                 <select id="formula" class="round">
                 <option value="Редактировать" selected>Всегда редактируйте элемент</option>
                 <option value="ЛОЖЬ">Редактировать только в том случае, если компаратор подделка</option>
                 <option value="Настоящий">Редактировать только в том случае, если компаратор верен</option>
               </select>
               <br>
                  <table style="width:100%"><tr><td>
                    <span class="dbminputlabel">Значение A</span><br>
                    <input id="val1" class="round" type="text">
                    </td>
                    <td>
                    <span class="dbminputlabel">Компаратор</span><br>
                    <select id="comparar" class="round">
                    <option value="0">Значение A - есть</option>
                    <option value="1" selected>Равно</option>
                    <option value="2">Точно так же</option>
                    <option value="3">Меньше чем</option>
                    <option value="13">Меньше или равно</option>
                    <option value="4">Больше тогда</option>
                    <option value="12">Больше или равно</option>
                    <option value="5">Включают</option>
                    <option value="6">Сопостает на корпусе</option>
                    <option value="14">Соответствует полной режиме</option>
                    <option value="7">Длина длиннее, чем</option>
                    <option value="8">Длина ниже, чем</option>
                    <option value="9">Длина равен</option>
                    <option value="10">Начинается с</option>
                    <option value="11">Заканчивается</option>
                    <option value="16">Значение А имеет акценты?</option>
                    <option value="17">Включает слова  ["a" , "b" , "c"]</option>
                    <option value="18">Равны словам  ["a" , "b" , "c"]</option>
                    <option value="19">Значение A - это номер пары?</option>
                    <option value="20">Значение A - это нечетное число?</option>
                    <option value="21">Значение A является числом?</option>
                    <option value="24">Значение A - это текст?</option>
                    <option value="23">Значение A - это URL -адрес изображения?</option>
                    <option value="25">Значение A - это URL?</option>
                  </select>
                   </td>
                    <td>
                    <span class="dbminputlabel">Значение B</span><br>
                    <input id="val2" class="round" type="text">
                    </td>
                    </tr></table>

        </div>
<div style="width: 100%; padding: 10px">

<span class="dbminputlabel">Позиция</span><br>
<input id="posicao" class="round" type="text" value="0">
  
<br>

  <span class="dbminputlabel">Добавить не начинать</span><br>
  <textarea id="start3" rows="3" style="width: 100%; white-space: nowrap; resize: yes;"></textarea>

<br>

  <span class="dbminputlabel">Добавить в конце</span><br>
  <textarea id="end3" rows="3" style="width: 100%; white-space: nowrap; resize: yes;" value="\\n"></textarea><br>

</div>
</dialog-list>
</tab>
</tab-system>

<style>
table{width:100%}
td{padding:0px 5px;width:50%}
</style>
`;
  },


  init() {
    const { glob, document } = this;

    glob.listChange(document.getElementById("list"), "varNameContainer");

  },

  async action(cache) {
    const data = cache.actions[cache.index];
    const list = await this.getListFromData(data.list, data.varName, cache);

    const start = this.evalMessage(data.start, cache).replace("\\n", "\n");
    const end = this.evalMessage(data.end, cache).replace("\\n", "\n");

    const multi = parseFloat(this.evalMessage(data.multi, cache))

    const start2 = this.evalMessage(data.start2, cache).replace("\\n", "\n");
    const end2 = this.evalMessage(data.end2, cache).replace("\\n", "\n");

    let result = "";
    acont = -1
    acont = acont + multi

    
    for (let i = 0; i <= (list.length - 1); i++) {

      resultitem = ""

      if(data.numero == true){
        resultitem = parseFloat(parseFloat([i]) + 1) + resultitem
      }
      
        if(acont == [i] && multi > 0){
          acont = acont + multi
          resultitem = resultitem + start + start2 + String(list[i]) + end2
        } else {
          resultitem = resultitem + start + String(list[i]);
        }

        
           for (let ix = 0; ix < data.itens.length; ix++) {

            const posicao = parseFloat(this.evalMessage(data.itens[ix].posicao, cache))

          if(posicao == [i]){
            val1 = this.evalMessage(data.itens[ix].val1, cache);
            val2 = this.evalMessage(data.itens[ix].val2, cache);
            resulty = true;

            if(data.itens[i].formula == "Falso" || data.itens[i].formula == "Verdadeiro") {
              const compare = parseInt(data.itens[ix].comparar, 10);
              switch (compare) {
                  case 0:
                    resulty = val1.toString() !== "undefined";
                    break;
                  case 1:
                    resulty = val1 == val2;
                    break;
                  case 2:
                    resulty = val1 === val2;
                    break;
                  case 3:
                    resulty = parseFloat(val1) < parseFloat(val2);
                    break;
                  case 4:
                    resulty = parseFloat(val1) > parseFloat(val2);
                    break;
                  case 5:
                    if (typeof val1?.toString().includes === "function") {
                      resulty = val1.toString().includes(val2);
                    }
                    break;
                  case 6:
                    resulty = Boolean(val1.toString().match(new RegExp('^' + val2 + '$', 'i')));
                    break;
                  case 7:
                    resulty = Boolean(val1.toString().length > val2);
                    break;
                  case 8:
                    resulty = Boolean(val1.toString().length < val2);
                    break;
                  case 9:
                    resulty = Boolean(val1.toString().length == val2);
                    break;
                  case 10:
                    resulty = val1.toString().startsWith(val2);
                    break;
                  case 11:
                    resulty = val1.toString().endsWith(val2);
                    break;
                  case 12:
                    resulty = Boolean(val1 >= val2);
                    break;
                  case 13:
                    resulty = Boolean(val1 <= val2);
                    break;
                  case 14:
                    resulty = Boolean(val1.toString().match(new RegExp(val2)))
                    break;
                  case 16:
                    const conditions = ["Ä","Å","Á","Â","À","Ã","Ā","Ă","Ą","ā","ă","ą","ä","á","â","à","ã","É","Ê","Ë","È","Ė","Ę","Ě","Ĕ","Ē","ė","ę","ě","ĕ","ē","é","ê","ë","è","Í","Î","Ï","Ì","İ","Į","Ī","ı","į","ī","í","î","ï","ì","Ö","Ó","Ô","Ò","Õ","Ő","Ō","ő","ō","ö","ó","ô","ò","õ","Ü","Ú","Û","Ų","Ű","Ů","Ū","ų","ű","ů","ū","ü","ú","û","ù","Ç","Ć","Č","ç","ć","č","Ñ","Ň","Ņ","Ń","ñ","ň","ņ","ń","Ÿ","Ý","ý","Ź","Ż","Ž","ź","ż","ž","Ł","Ľ","Ļ","Ĺ","ł","ľ","ĺ","Ķ","ķ","Ģ","Ğ","ģ","ğ","Ď","ď","Ś","Š","Ş","ś","š","ş","Ť","Ț","Ţ","ť","ț","ţ","Ŕ","Ř","ŕ","ř"]
                    resulty = conditions.some(el => val1.includes(el));
                    break;
                  case 17:
                    const conditionsX = val2
                    resulty = conditionsX.some(els => val1.includes(els));
                    break;
                  case 18:
                    const conditionsZ = val2
                    resulty = conditionsZ.some(elz => val1 == (elz));
                    break;
                  case 19:
                    resulty = val1 % 2 == 0
                    break;
                  case 20:
                    resulty = val1 % 2 == 1
                    break;
                  case 21:
                    resulty = Boolean(!isNaN(parseFloat(val1.toString().replace(",", "."))));
                    break;
                  case 23:
                    const isImageUrl = require('is-image-url');
                    resulty = isImageUrl(val1);
                    break;
                  case 24:
                    resulty = typeof val1 === "string";
                    break;
                  case 25:
                    const isUrl = require("is-url");
                    resulty = isUrl(val1);
              }
            }
            
            if(data.itens[ix].formula == "Falso") {
              if(resulty == false) {
                resulty = true
              } else {resulty = false}
            }
    
       
          if(resulty == true){
        const start3 = this.evalMessage(data.itens[ix].start3, cache).replace("\\n", "\n");
        const end3 = this.evalMessage(data.itens[ix].end3, cache).replace("\\n", "\n");
        resultitem = start3 + resultitem + end3;
          }

        }

        }

     
      
        result += resultitem + end

    }

    if (result) {
      const varName2 = this.evalMessage(data.varName2, cache);
      const storage2 = parseInt(data.storage, 10);
      this.storeValue(result, storage2, varName2, cache);
    }

    this.callNextAction(cache);
  },


  mod() {},
};
