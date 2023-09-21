module.exports = {
	name: "Convert Seconds MOD",
	section: "Other Stuff",
	meta: {
		version: '2.1.7',
		preciseCheck: true,
		author: '[XinXyla - 172782058396057602]',
		short_description: "Преобразование секунд в годы, месяцы, дни, часы, минуты и секунды.",
		authorUrl: 'https://github.com/DBM-Mods/Russia',
		downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
	  },
	
	subtitle: function(data) {
	return `Конвертировать "${data.time} секунд"`;
	},
	
	variableStorage: function(data, varType) {
			const type = parseInt(data.storage);
			if(type !== varType) return;
			return ([data.varName, 'Дата']);
		},
	
	
	fields: ["time", "ano", "meses", "dia", "hora", "min", "seg", "ano2", "meses2", "dia2", "hora2", "min2", "seg2", "tipo", "storage", "varName"],
	
	html: function(isEvent, data) {
		return `
		<div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;right:0px;z-index:999999">Versão 0.7</div>
		<div style="position:absolute;bottom:0px;border: 1px solid #222;background:#000;color:#999;padding:3px;left:0px;z-index:999999">dbmmods.com</div>
		<div style="float: left; width: 100%;">
		<span class="dbminputlabel">Преобразовать секунды</span>
			<input id="time" class="round" type="text">
		</div><br><br><br>
		
		<div style="width: 100%;">
			<span class="dbminputlabel">Тип даты</span><br>
			<select id="tipo" class="round" onchange="glob.onComparisonChanged(this)">
	
				<option value="0" selected>Игнорировать группы, равные 0</option>
				<option value="10">Игнорировать группы, равные 0, и годы/месяцы</option>
				<option value="11">Игнорировать группы, равные 0, и годы/месяцы/дни</option>
	
				<option value="5">[Минимум 2 цифры] Игнорировать группы, равные 0</option>
				<option value="6">[Минимум 2 цифры] Игнорировать группы, равные 0, и годы/месяцы</option>
				<option value="7">[Минимум 2 цифры] Игнорировать группы, равные 0, и годы/месяцы/дни</option>
	
				<option value="1">Показать все группы</option>
				<option value="8">Показать только группы дни/часы/минуты/секунды</option>
				<option value="9">Показать только группы часы/минуты/секунды</option>
	
				<option value="2">[Минимум 2 цифры] Показать все группы</option>
				<option value="3">[Минимум 2 цифры] Показать только группы дни/часы/минуты/секунды</option>
				<option value="4">[Минимум 2 цифры] Показать только группы часы/минуты/секунды</option>
			</select>
		</div>
		<br>
	
		<center><span class="dbminputlabel">Тексты Даты</span></center>
		<div style="width:100%;border:1px solid #333;background: rgba(50,50,50,0.5)"><br>
	<table style="width:100%"><tr>
	<td><span class="dbminputlabel">Годы</span><input id="ano" value=" лет " class="round" type="text"></td>
	<td><span class="dbminputlabel">Месяцы</span><input id="meses" value=" месяцев " class="round" type="text"></td>
	<td><span class="dbminputlabel">Дни</span><input id="dia" value=" дней " class="round" type="text"></td>
	<td><span class="dbminputlabel">Часы</span><input id="hora" value=" часов " class="round" type="text"></td>
	<td><span class="dbminputlabel">Минуты</span><input id="min" value=" минут " class="round" type="text"></td>
	<td><span class="dbminputlabel">Секунды</span><input id="seg" value=" секунд " class="round" type="text"></td></tr>
	</table>
	<br>
	<table style="width:100%"><tr>
	<td><span class="dbminputlabel">Год</span><input id="ano2" value=" год " class="round" type="text"></td>
	<td><span class="dbminputlabel">Месяц</span><input id="meses2" value=" месяц " class="round" type="text"></td>
	<td><span class="dbminputlabel">День</span><input id="dia2" value=" день " class="round" type="text"></td>
	<td><span class="dbminputlabel">Час</span><input id="hora2" value=" час " class="round" type="text"></td>
	<td><span class="dbminputlabel">Минута</span><input id="min2" value=" минута " class="round" type="text"></td>
	<td><span class="dbminputlabel">Секунда</span><input id="seg2" value=" секунда " class="round" type="text"></td>
	</tr></table>
	
	</div>
		<br>
		<div style="float: left; width: 35%; padding-top: 8px;">
		<span class="dbminputlabel">Сохранить в</span><br>
			<select id="storage" class="round" onchange="glob.variableChange(this, 'varNameContainer')">
			${data.variables[0]}
			</select>
		</div>
		<div id="varNameContainer" style="float: right; display: none; width: 60%; padding-top: 8px;">
		<span class="dbminputlabel">Имя переменной</span><br>
			<input id="varName" class="round" type="text">
		</div><br><br>
		<div style=" float: left; width: 88%; padding-top: 8px;">
			<br>
		</div>
		
		<style>td{padding:2px}<style>`;
	},
	
	init: function() {
		const {glob, document} = this;
	
		glob.variableChange(document.getElementById('storage'), 'varNameContainer');
	},
	
	action: function(cache) {
	
		const data = cache.actions[cache.index];
		const time = this.evalMessage(data.time, cache);
		const ano = this.evalMessage(data.ano, cache);
		const meses = this.evalMessage(data.meses, cache);
		const dia = this.evalMessage(data.dia, cache);
		const hora = this.evalMessage(data.hora, cache);
		const min = this.evalMessage(data.min, cache);
		const seg = this.evalMessage(data.seg, cache);
		const ano2 = this.evalMessage(data.ano2, cache);
		const meses2 = this.evalMessage(data.meses2, cache);
		const dia2 = this.evalMessage(data.dia2, cache);
		const hora2 = this.evalMessage(data.hora2, cache);
		const min2 = this.evalMessage(data.min2, cache);
		const seg2 = this.evalMessage(data.seg2, cache);
		const tipo = parseInt(data.tipo, 10);
		var   _this = this;
		
		let d, h, m, s;
		let result;
	
		if (isNaN(time)) {
			result.toString() = "Дата недействительна";
			console.log('Введите номер');
		}
		else {
	
		   s = time;
	
			m = Math.floor(s / 60);
			s = s % 60;
			h = Math.floor(m / 60);
			m = m % 60;
			a = Math.floor(time / 60 / 60 / 24 / 365.242214);
			mes = Math.floor(time / 60 / 60 / 24 / 30.43685116666667 - (a * 12));
			d = Math.floor(h / 24 - (a * 365.242214) - (30.43685116666667 * mes));
			h = h % 24;
	
			decimal_a = a < 10 ? "0" + a : a;
			decimal_mes = mes < 10 ? "0" + mes : mes;
			decimal_d = d < 10 ? "0" + d : d;
			decimal_h = h < 10 ? "0" + h : h;
			decimal_m = m < 10 ? "0" + m : m;
			decimal_s = s < 10 ? "0" + s : s;
	
			s2 = time;
			m2 = Math.floor(s2 / 60);
			s2 %= 60;
			h2 = Math.floor(m2 / 60);
			m2 %= 60;
			d2 = Math.floor(h2 / 24);
			h2 %= 24;
			decimal_d2 = d2 < 10 ? "0" + d2 : d2;
			decimal_h2 = h2 < 10 ? "0" + h2 : h2;
			decimal_m2 = m2 < 10 ? "0" + m2 : m2;
			decimal_s2 = s2 < 10 ? "0" + s2 : s2;
	
			s3 = time;
			m3 = Math.floor(s3 / 60);
			s3 %= 60;
			h3 = Math.floor(m3 / 60);
			m3 %= 60;
			decimal_h3 = h3 < 10 ? "0" + h3 : h3;
			decimal_m3 = m3 < 10 ? "0" + m3 : m3;
			decimal_s3 = s3 < 10 ? "0" + s3 : s3;
	
			if (tipo >= 0) {
			switch (tipo) {
				case 0:
					result = (a > 1 ? ''+ a + ano : '') + (a == 1 ? ''+ a + ano2 : '') + (mes > 1 ? ''+ mes + meses : '') + (mes == 1 ? ''+ mes + meses2 : '') + (d > 1 ? d + dia : '') + (d == 1 ? ''+ d + dia2 : '') + (h > 1 ? h + hora : '') + (h == 1 ? ''+ h + hora2 : '') + (m > 1 ? m + min : '') + (m == 1 ? ''+ m + min2 : '') + (s > 1 ? s + seg : '') + (s == 1 ? ''+ s + seg2 : '');
				  break;
				case 1:
					result = (a > 1 ? ''+ a + ano : '') + (a == 1 ? ''+ a + ano2 : '') + (a == 0 ? ''+ a + ano : '') + (mes > 1 ? ''+ mes + meses : '') + (mes == 1 ? ''+ mes + meses2 : '') + (mes == 0 ? ''+ mes + meses : '') + (d > 1 ? d + dia : '') + (d == 1 ? ''+ d + dia2 : '') + (d == 0 ? ''+ d + dia : '') + (h > 1 ? h + hora : '') + (h == 1 ? ''+ h + hora2 : '') + (h == 0 ? ''+ h + hora : '') + (m > 1 ? m + min : '') + (m == 1 ? ''+ m + min2 : '') + (m == 0 ? ''+ m + min : '') + (s > 1 ? s + seg : '') + (s == 1 ? ''+ s + seg2 : '') + (s == 0 ? ''+ s + seg : '');
				  break;
				  case 2:
					result = (a > 1 ? ''+ decimal_a + ano : '') + (a == 1 ? ''+ decimal_a + ano2 : '') + (a == 0 ? ''+ decimal_a + ano : '') + (mes > 1 ? ''+ decimal_mes + meses : '') + (mes == 1 ? ''+ decimal_mes + meses2 : '') + (mes == 0 ? ''+ decimal_mes + meses : '') + (d > 1 ? decimal_d + dia : '') + (d == 1 ? ''+ decimal_d + dia2 : '') + (d == 0 ? ''+ decimal_d + dia : '') + (h > 1 ? decimal_h + hora : '') + (h == 1 ? ''+ decimal_h + hora2 : '') + (h == 0 ? ''+ decimal_h + hora : '') + (m > 1 ? decimal_m + min : '') + (m == 1 ? ''+ decimal_m + min2 : '') + (m == 0 ? ''+ decimal_m + min : '') + (s > 1 ? decimal_s + seg : '') + (s == 1 ? ''+ decimal_s + seg2 : '') + (s == 0 ? ''+ decimal_s + seg : '');
				  break;
				  case 3:
					result = (d > 1 ? decimal_d2 + dia : '') + (d == 1 ? ''+ decimal_d2 + dia2 : '') + (d == 0 ? ''+ decimal_d2 + dia : '') + (h > 1 ? decimal_h2 + hora : '') + (h == 1 ? ''+ decimal_h2 + hora2 : '') + (h == 0 ? ''+ decimal_h2 + hora : '') + (m > 1 ? decimal_m2 + min : '') + (m == 1 ? ''+ decimal_m2 + min2 : '') + (m == 0 ? ''+ decimal_m2 + min : '') + (s > 1 ? decimal_s2 + seg : '') + (s == 1 ? ''+ decimal_s2 + seg2 : '') + (s == 0 ? ''+ decimal_s2 + seg : '');
				  break;
				  case 4:
					result = (h > 1 ? decimal_h3 + hora : '') + (h == 1 ? ''+ decimal_h3 + hora2 : '') + (h == 0 ? ''+ decimal_h3 + hora : '') + (m > 1 ? decimal_m3 + min : '') + (m == 1 ? ''+ decimal_m3 + min2 : '') + (m == 0 ? ''+ decimal_m3 + min : '') + (s > 1 ? decimal_s3 + seg : '') + (s == 1 ? ''+ decimal_s3 + seg2 : '') + (s == 0 ? ''+ decimal_s3 + seg : '');
				  break;
				  case 5:
					result = (a > 1 ? ''+ decimal_a + ano : '') + (a == 1 ? ''+ decimal_a + ano2 : '') + (mes > 1 ? ''+ decimal_mes + meses : '') + (mes == 1 ? ''+ decimal_mes + meses2 : '') + (d > 1 ? decimal_d + dia : '') + (d == 1 ? ''+ decimal_d + dia2 : '') + (h > 1 ? decimal_h + hora : '') + (h == 1 ? ''+ decimal_h + hora2 : '') + (m > 1 ? decimal_m + min : '') + (m == 1 ? ''+ decimal_m + min2 : '') + (s > 1 ? decimal_s + seg : '') + (s == 1 ? ''+ decimal_s + seg2 : '');
				  break;
				  case 6:
					result =  (d > 1 ? decimal_d2 + dia : '') + (d == 1 ? ''+ decimal_d2 + dia2 : '') + (h > 1 ? decimal_h2 + hora : '') + (h == 1 ? ''+ decimal_h2 + hora2 : '') + (m > 1 ? decimal_m2 + min : '') + (m == 1 ? ''+ decimal_m2 + min2 : '') + (s > 1 ? decimal_s2 + seg : '') + (s == 1 ? ''+ decimal_s2 + seg2 : '');
				  break;
				  case 7:
					result =  (h > 1 ? decimal_h3 + hora : '') + (h == 1 ? ''+ decimal_h3 + hora2 : '') + (m > 1 ? decimal_m3 + min : '') + (m == 1 ? ''+ decimal_m3 + min2 : '') + (s > 1 ? decimal_s3 + seg : '') + (s == 1 ? ''+ decimal_s3 + seg2 : '');
				  break;
				  case 8:
					result = (d > 1 ? d2 + dia : '') + (d == 1 ? ''+ d2 + dia2 : '') + (d == 0 ? ''+ d2 + dia : '') + (h > 1 ? h2 + hora : '') + (h == 1 ? ''+ h2 + hora2 : '') + (h == 0 ? ''+ h2 + hora : '') + (m > 1 ? m2 + min : '') + (m == 1 ? ''+ m2 + min2 : '') + (m == 0 ? ''+ m2 + min : '') + (s > 1 ? s2 + seg : '') + (s == 1 ? ''+ s2 + seg2 : '') + (s == 0 ? ''+ s2 + seg : '');
				  break;
				  case 9:
					result = (h > 1 ? h3 + hora : '') + (h == 1 ? ''+ h3 + hora2 : '') + (h == 0 ? ''+ h3 + hora : '') + (m > 1 ? m3 + min : '') + (m == 1 ? ''+ m3 + min2 : '') + (m == 0 ? ''+ m3 + min : '') + (s > 1 ? s3 + seg : '') + (s == 1 ? ''+ s3 + seg2 : '') + (s == 0 ? ''+ s3 + seg : '');
				  break;
				  case 10:
					result =  (d > 1 ? d2 + dia : '') + (d == 1 ? ''+ d2 + dia2 : '') + (h > 1 ? h2 + hora : '') + (h == 1 ? ''+ h2 + hora2 : '') + (m > 1 ? m2 + min : '') + (m == 1 ? ''+ m2 + min2 : '') + (s > 1 ? s2 + seg : '') + (s == 1 ? ''+ s2 + seg2 : '');
				  break;
				  case 11:
					result =  (h > 1 ? h3 + hora : '') + (h == 1 ? ''+ h3 + hora2 : '') + (m > 1 ? m3 + min : '') + (m == 1 ? ''+ m3 + min2 : '') + (s > 1 ? s3 + seg : '') + (s == 1 ? ''+ s3 + seg2 : '');
				  break;
			}} else
		{
				result = (a > 1 ? ''+ a + ano : '') + (a == 1 ? ''+ a + ano2 : '') + (mes > 1 ? ''+ mes + meses : '') + (mes == 1 ? ''+ mes + meses2 : '') + (d > 1 ? d + dia : '') + (d == 1 ? ''+ d + dia2 : '') + (h > 1 ? h + hora : '') + (h == 1 ? ''+ h + hora2 : '') + (m > 1 ? m + min : '') + (m == 1 ? ''+ m + min2 : '') + (s > 1 ? s + seg : '') + (s == 1 ? ''+ s + seg2 : '');
		}
		}
		if (result.toString() === "Дата недействительна"){ result = undefined};
		// Storage.
		result = result.toString().trim()
		if(result !== undefined) {
			const storage = parseInt(data.storage);
			const varName = this.evalMessage(data.varName, cache);
			this.storeValue(result, storage, varName, cache);
		}
		this.callNextAction(cache);
	},
	
	mod: function(DBM) {
	}
	
	};
	