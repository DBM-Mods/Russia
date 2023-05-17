module.exports = {

    //---------------------------------------------------------------------
    // Action Name
    //
    // This is the name of the action displayed in the editor.
    //---------------------------------------------------------------------

    name: "Send Mail MOD",
    //---------------------------------------------------------------------
    // Action Section
    //
    // This is the section the action will fall into.
    //---------------------------------------------------------------------

    section: "Other Stuff",

    //---------------------------------------------------------------------
    // Action Subtitle
    //
    // This function generates the subtitle displayed next to the name.
    //---------------------------------------------------------------------

    subtitle(data) {
        if (data.descriptioncolor == undefined) {
            data.descriptioncolor = "#ffffff";
        }

        if (data.descriptionx == true) {
            desccor = data.descriptioncolor;
        } else {
            desccor = "none";
        }

        return data.description
            ? `<font style="color:${desccor}">${data.description}</font>`
            : `<font style="color:${desccor}">С сайта:"${data.username}" На: "${data.mailto}" Копировать: "${data.mailcc}" Для копирования
    Oculta: "${data.mailbcc}"</font>`
    },

    //---------------------------------------------------------------------
    // Action Storage Function
    //
    // Stores the relevant variable info for the editor.
    //---------------------------------------------------------------------

    variableStorage(data, varType) {
        let vars = [];

        const typeError = parseInt(data.storageError, 10);

        if (typeError == varType) {
            vars.push(data.varNameError);
            vars.push("Текст ~ Ошибка");
        }

        if (vars.length > 0) return vars;
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
        version: "2.1.7",
        preciseCheck: true,
        author: "[Peter H - 442783328580665374]<br>[Tempest - 321400509326032897]",
        authorUrl: "https://github.com/DBM-Mods/Russia",
        downloadURL: "https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip",
    },

    //--------------------------------------------------------------------
    // Action Fields
    //
    // These are the fields for the action. These fields are customized
    // by creating elements with corresponding IDs in the HTML. These
    // are also the names of the fields stored in the action's JSON data.
    //---------------------------------------------------------------------


    fields: [
        "username",
        "password",
        "mailto",
        "mailcc",
        "mailbcc",
		"replyto",
        "subject",
        "type",
        "text",
        "iffalse",
        "iffalseVal",
        "hostname",
        "portname",
        "sec",
        "descriptioncolor",
        "description",
        "descriptionx",
        "actionsError",
        "storageError",
        "varNameError",
        "errcmd",
        "branches"
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

    html() {
        return `
<style>
    .table {
        width: 100%;
    }

    .dbmmodsbr1 {
        position: absolute;
        bottom: 0px;
        border: 0px solid rgba(50, 50, 50, 0.7);
        background: rgba(0, 0, 0, 0.7);
        color: #999;
        padding: 5px;
        left: 0px;
        z-index: 999999;
        cursor: pointer;
    }

    .dbmmodsbr2 {
        position: absolute;
        bottom: 0px;
        border: 0px solid rgba(50, 50, 50, 0.7);
        background: rgba(0, 0, 0, 0.7);
        color: #999;
        padding: 5px;
        right: 0px;
        z-index: 999999;
        cursor: pointer;
    }

    tl {
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(50, 50, 50, 0.1);
        padding: 5px;
        width: 100%;
        display: block;
    }

    tlt {
        background: rgba(0, 0, 0, 0.7);
        border: 1px solid rgba(50, 50, 50, 0.2);
        padding: 2px;
        width: 100%;
        display: block;
    }

    .cols {
        padding: 0px 4px;
        border: 1px solid rgba(0, 0, 0, 0.5);
    }
</style>

<div class="dbmmodsbr1 linkdbmmods" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip">Обновление</div>
<div class="dbmmodsbr2 linkdbmmods" data-url="https://github.com/DBM-Mods/Russia">Версия 0.1</div>

<div style="width:100%">
    <tab-system style="margin-top: 0px;">
        <tab label="Текст" icon="align left">
            <div style="width: 100%; padding: 8px; height: calc(100vh - 200px); overflow: auto;">

                <div style="float: left; width: 35%; margin-bottom: 10px;">
                    <span class="dbminputlabel">Тип текста</span>
                    <select id="type" class="round">
                        <option value="0" selected>Индивидуальный текст</option>
                        <option value="1">Код HTML</option>
						<option value="2">Код AMP</option>
                    </select>
                </div>

                <br><br><br>

                <span class="dbminputlabel">На</span>
                <input type="text" class="round" id="mailto" placeholder="Введите адрес электронной почты для отправки или переменную.">

                <br>
				
				<span class="dbminputlabel">Ответить</span>
                <input type="text" class="round" id="replyto" placeholder="Введите адрес электронной почты для отправки, переменную или пустую для удаления.">

                <br>

                <span class="dbminputlabel">Отправить с копией</span>
                <input type="text" class="round" id="mailcc" placeholder="Введите адрес электронной почты для отправки, переменную или пустую для удаления.">

                <br>

                <span class="dbminputlabel">Отправить со слепым копированием</span>
                <input type="text" class="round" id="mailbcc" placeholder="Введите адрес электронной почты для отправки, переменную или пустую для удаления.">
   
                <br>

                <span class="dbminputlabel">Тема</span>
                <input type="text" class="round" id="subject"placeholder="Введите переменную или пустую тему письма что бы не использовать.">

                <br>

                <span class="dbminputlabel">Сообщение письма</span>
                <textarea id="text" class="dbm_monospace" rows="6" placeholder="Вставьте сообщение сюда..." style="height: calc(100vh - 349px); white-space: nowrap;"></textarea>
                
                <br>
                
                <div id="counter" style="text-align: right; position: relative; width: 100%;">0 символов</div>
            </div>
        </tab>

        <tab label="Вложения" icon="attach">
            <dialog-list id="branches" fields='["type", "fileName", "fileFormat", "filePath", "varName", "storage", "base64"]' dialogResizable dialogTitle="Вложение" dialogWidth="600" dialogHeight="300" listLabel="Вложения" listStyle="height: calc(100vh - 240px);" itemName="Item" itemHeight="28px;" itemTextFunction="glob.formatItem(data)" itemStyle="line-height: 28px;">

            <div style="margin: 10px;" onmouseover="(function(){
                const aselect = document.getElementById('type');
                const value = aselect.options[aselect.selectedIndex].value;

                if(value == '0') {
                    document.getElementById('label').textContent = 'Расположение файла';
                    document.getElementById('filePath').placeholder = 'Пример: ./resources';
                    document.getElementById('divValue2').style.display = 'none';
                    document.getElementById('divValue').style.display = 'block';
                    document.getElementById('divValue3').style.width = '71%';
                    document.getElementById('divValue4').style.display = 'block';
                } else if (value == '1') {
                    document.getElementById('label').textContent = 'URL';
                    document.getElementById('filePath').placeholder = '';
                    document.getElementById('divValue2').style.display = 'none';
                    document.getElementById('divValue').style.display = 'block';
                    document.getElementById('divValue3').style.width = '71%';
                    document.getElementById('divValue4').style.display = 'block';
                } else if (value == '2') {
                    document.getElementById('divValue').style.display = 'none';
                    document.getElementById('divValue2').style.display = 'block';
                    document.getElementById('divValue3').style.width = '100%';
                    document.getElementById('divValue4').style.display = 'none';
                } else {
                    document.getElementById('divValue').style.display = 'none';
                    document.getElementById('divValue2').style.display = 'block';
                    document.getElementById('divValue3').style.width = '71%';
                    document.getElementById('divValue4').style.display = 'block';
                }
            })()">

                <span class="dbminputlabel">Тип вложения</span>
                <select id="type" class="round" onchange="(function(){
                    const aselect = document.getElementById('type');
                    const value = aselect.options[aselect.selectedIndex].value;
    
                    if(value == '0') {
                        document.getElementById('label').textContent = 'Расположение файла';
                        document.getElementById('filePath').placeholder = 'Пример: ./resources';
                        document.getElementById('divValue2').style.display = 'none';
                        document.getElementById('divValue').style.display = 'block';
                        document.getElementById('divValue3').style.width = '71%';
                        document.getElementById('divValue4').style.display = 'block';
                    } else if (value == '1') {
                        document.getElementById('label').textContent = 'URL';
                        document.getElementById('filePath').placeholder = '';
                        document.getElementById('divValue2').style.display = 'none';
                        document.getElementById('divValue').style.display = 'block';
                        document.getElementById('divValue3').style.width = '71%';
                        document.getElementById('divValue4').style.display = 'block';
                    } else if (value == '2') {
                        document.getElementById('divValue').style.display = 'none';
                        document.getElementById('divValue2').style.display = 'block';
                        document.getElementById('divValue3').style.width = '100%';
                        document.getElementById('divValue4').style.display = 'none';
                    } else {
                        document.getElementById('divValue').style.display = 'none';
                        document.getElementById('divValue2').style.display = 'block';
                        document.getElementById('divValue3').style.width = '71%';
                        document.getElementById('divValue4').style.display = 'block';
                    }
                })()">
                    <option value="0">Вложение файл</option>
                    <option value="1">URL вложения</option>
                    <option value="2">Canvas</option>
                    <option value="3">Отправить переменную</option>
                </select>

                <br>

                <div style="float: left; width: 71%;" id="divValue3">
                    <span class="dbminputlabel">Имя файла</span>
                    <input type="text" class="round" id="fileName" placeholder="Пример: dbmmods">
                </div>

                <div style="float: left; width: 25%; margin-left: 18px;" id="divValue4">
                    <span class="dbminputlabel">Формат файла</span>
                    <input type="text" class="round" id="fileFormat" placeholder="Пример: js">
                 </div>

                <br><br><br>

                <div id="divValue">
                    <span class="dbminputlabel" id="label">Расположение файла</span>
                    <input type="text" style="width: 99%;"class="round" id="filePath" placeholder="Пример: ./resources">
                </div>

                <div id="divValue2">
                    <retrieve-from-variable dropdownLabel="Переменная" selectId="storage" variableContainerId="varNameContainer" variableInputId="varName"></retrieve-from-variable>
                </div>
            </div>

            </dialog-list>
        </tab>

        <tab label="Конфиг" icon="cogs">
            <div style="padding: 8px; height: calc(100vh - 200px); overflow-y: scroll; overflow-x: hidden; width: 100%;">
                <div style="padding-bottom: 12px; padding-top: 12px;">
                    <table style="width: 100%;">
                        <tr>
                            <td><span class="dbminputlabel">Описание действия</span><br><input type="text"
                                    class="round" id="description" placeholder="Оставьте пустым, чтобы не использовалось!"></td>
                            <td style="padding:0px 0px 0px 10px;width:55px">
                                <div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox
                                        id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color"
                                    value="#ffffff" class="round" id="descriptioncolor">
                            </td>
                        </tr>
                    </table>
                </div><br>
                <div>
                    <span class="dbminputlabel">Опции</span><br>
                    <div style="padding:10px;background:rgba(0,0,0,0.2)">

                        <table style="width:100%; margin-bottom: 10px;">
                            <tr>
                                <td><span class="dbminputlabel">Сервер SMTP</span><br><input type="text" class="round"
                                        id="hostname" placeholder="Введите сервер SMTP."></td>
                                <td style="padding:0px 0px 0px 10px;"><span class="dbminputlabel">Порт
                                        SMTP</span><br><input type="text" class="round" id="portname"
                                        placeholder="Введите порт сервера SMTP."></td>
                            </tr>
                        </table>

                        <table style="width:100%; margin-bottom: 10px;">
                            <tr>
                                <td><span class="dbminputlabel">Пользователь (E-mail)</span><br><input type="text"
                                        class="round" id="username" placeholder="Введите свой e-mail."></td>
                                <td style="padding:0px 0px 0px 10px;"><span class="dbminputlabel">Пароль</span><br><input
                                        type="password" class="round" id="password"
                                        placeholder="Введите пароль для вашего e-mail."></td>
                            </tr>
                        </table>

                        <table style="width:100%; margin-bottom: 10px; padding:0px 0px 0px 10px;">
                            <div style="float: left; width: 50%; margin-bottom: 10px;">
                                <span class="dbminputlabel">Шифрование (SSL/TLS | STARTTLS)</span><br>
                                <select id="sec" class="round">
                                    <option value="true" selected>Да</option>
                                    <option value="false">Нет</option>
                                </select>
                            </div>
                        </table>
                        <dbm-checkbox id="errcmd" label="Вывести ошибку в консоль" checked></dbm-checkbox>
                    </div><br>

                    <br>

                    <hr class="subtlebar" style="margin-top: 4px; margin-bottom: 4px">
                    <br>
                    <div id="divValueError2" style="float: left; width: 45%; padding:0px 10px 0px 0px;">
                        <span class="dbminputlabel">При возникновении ошибки</span>
                        <select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
                            <option value="0" selected>Продолжить действия</option>
                            <option value="1">Остановить последовательность действий</option>
                            <option value="2">Перейти к действию</option>
                            <option value="3">Пропустить следующие действия</option>
                            <option value="4">Перейти к якорю действия</option>
                            <option value="5">Выполнение действий и остановка</option>
                            <option value="6">Выполнить действия и продолжить</option>
                        </select>
                    </div>
                    <div id="iffalseContainer" style="display: none; float: right; width: 55%;">
                        <span id="iffalseName" class="dbminputlabel">Для</span>
                        <input id="iffalseVal" class="round" type="text">
                    </div>
                    <action-list-input id="actionsError" style="margin-top: 50px;"
                        height="calc(100vh - 430px)"></action-list-input>
                </div>
            </div>
        </tab>

        <tab label="Помощь и информация" icon="help circle">
            <div style="width: 100%; padding:10px 5px;height: calc(100vh - 200px);overflow:auto">

                <center>
                    <tlt><b>Информация</b></tlt>
                </center>
                <tl>
                Это действие используется для запуска электронных писем, будь то простое сообщение или HTML-код.
                </tl>
                <br>
                <center>
                    <tlt><b>Шаги конфигурации (Gmail)</b></tlt>
                </center>
                <tl>
                    1. На вкладке Конфиг, в разделе Опции, в поле <button class="tiny compact ui icon button"><b>Сервер SMTP</b></button> вы поставите
                    <u><b>smtp.gmail.com</b></u>;<br>
                    2. В поле <button class="tiny compact ui icon button"><b>Порт SMTP</b></button> вы поставите
                    <u><b>465</b></u>;<br>
                    3. В поле <button class="tiny compact ui icon button"><b>Пользователь (E-mail)</b></button> вы будете указывать электронную почту для отправки писем;<br>
                    4. В поле <button class="tiny compact ui icon button"><b>Пароль</b></button> вы введете пароль своей электронной почты;<br>
                    5. В поле <button class="tiny compact ui icon button"><b>Шифрование (SSL/TLS |
                            STARTTLS)</b></button> вы поставите опцию <u><b>Да</b></u>.<br><br>

                    <b>Причаение 1:</b> Если в вашем аккаунте Gmail есть функция двухэтапной унтефекации обнаружения (2FA),
                     вам нужно будет создать <button class="tiny compact ui icon button"><span class="linkdbmmods"
                            data-url="https://security.google.com/settings/security/apppasswords">Пароль приложения</span></button>, в рамках вашей учетной записи Google.
                    <br><br>
                    <hr class="subtlebar" style="margin-top: 4px; margin-bottom: 4px">
                    <br>
                    <b>Причаение 2:</b> Чтобы использовать Gmail, вам необходимо включить протокол IMAP в своем аккаунте, следуйте приведенным ниже шагам.:<br><br>
                    1. <button class="tiny compact ui icon button"><span class="linkdbmmods"
                            data-url="https://mail.google.com/">Открыть Gmail</span></button> без компьютера.<br>
                    2. В правом верхнем углу нажмите на <b>Настройки</b> > <b>Все настройки</b>.<br>
                    3. Нажмите кнопку <b>Пересылка и POP/IMAP</b>.<br>
                    4. В разделе "Состаяние IMAP", выберите <b>Включить IMAP</b>.<br>
                    5. Нажмите кнопку <b>Сохрнаить изменения</b>.<br>
                </tl>

                <center>
                    <tlt><b>Полезная информация</b></tlt>
                </center>
                <tl>
                      В электронной почте gmail существуют некоторые ограничения на отправку, см. таблицу ниже:
                    <br><br>
                    <table>
                        <tr>
                            <td class="cols"><b>Типы лимитов 
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</b>
                            </td>
                            <td class="cols"><b>Ограничение&emsp;&emsp;</b></td>
                        <tr>
                        <tr>
                            <td class="cols"><b>Максимальное количество сообщений в день</b><br>- Ежедневный лимит отправлений на одну учетную запись пользователя*</td>
                            <td class="cols">· 2.000<br>· 1.500 для многократной отправки<br>· 500 для тестовых счетов</td>
                        <tr>
                        <tr>
                            <td class="cols"><b>Автоматически пересылаемые сообщения</b><br>- Сообщения, автоматически пересылаемые на другой аккаунт, не входят в ежедневный лимит отправки</td>
                            <td class="cols">· 10.000</td>
                        <tr>
                        <tr>
                            <td class="cols"><b>Получатели на одно сообщение, отправленное через SMTP (пользователями POP и
                                    IMAP)</b><br>- Адреса в полях To, Cc и Cco одного сообщения электронной почты. Это включает в себя e-mails отправленный smtp-relay.gmail.com или smtp.gmail.com*</td>
                            <td class="cols">· 100</td>
                        <tr>
                        <tr>
                            <td class="cols"><b>Общее количество получателей в день</b><br>- Адреса e-mail
                            (получатели) подсчитываются при каждой отправке сообщения. Пять электронных писем, отправленных на 10 адресов, считаются в общей сложности 50 получателями.*<b></td>
                            <td class="cols">· 10.000<br>· 1.500 для многократной отправки</td>
                        <tr>
                        <tr>
                            <td class="cols"><b>Внешние получатели в день</b><br>- Адреса электронной почты за пределами основного домена, включая псевдонимы домена и альтернативные домены</td>
                            <td class="cols">· 3.000</td>
                        <tr>
                        <tr>
                            <td class="cols"><b>Уникальные получатели в день</b><br>- Каждый адрес e-mail (каждый уникальный получатель) считает только один раз в день:<br><br>· Пять электронных писем, отправленных на 10 разных адресов, считаются 10 уникальными получателями*<br>· Пять писем, отправленных на один адрес, считаются за одного получателя*</td>
                            <td class="cols">· 3.000<br>· 2.000 внешний<br>· 500 внешний для тестовых счетов</td>
                        <tr>
                    </table>
                </tl><br>

                <center>
                    <tlt><b>Полезная информация (E-mail Профессионал)</b></tlt>
                </center>
                <tl>
                Если у вас есть профессиональная электронная почта, и вы хотите использовать свой @доменный e-mail, просто следуйте инструкции
                настройки, которые передаются вашим профессиональным поставщиком услуг электронной почты.
                </tl><br>

                <hr class="subtlebar" style="margin-top: 4px; margin-bottom: 4px">
                <br>
				
				<center>
                        <tlt><b>Форматирование</b></tlt>
                    </center>
                    <tl>
                    Если вы хотите отправить одному или нескольким получателям, либо в полях <button
                            class="tiny compact ui icon button"><b>На</b></button>, <button
                            class="tiny compact ui icon button"><b>Отправить с копией</b></button> ou <button
                            class="tiny compact ui icon button"><b>Отправить со слепой копией</b></button>,
                        utilize a formatação a seguir:<br><br>
    
                        <b>· Если только один получатель:</b><br>
                        "Имя человека" &lt;email@exemple.com&gt<br><br>
    
                        <b>· Если большее количество получателей:</b><br>
                        "Имя первого лица" &lt;email@exemple.com&gt;, "Имя второго лица"
                        &lt;email@exemple.com&gt;, ...<br>
    
                    </tl>
                    <center>
                        <tlt><b>Информация (На, CC, CCO)</b></tlt>
                    </center>
                    <tl>
                        <table>
                            <tr>
                                <td class="cols"><b>Назначение</b></td>
                                <td class="cols"><b>На</b></td>
                                <td class="cols"><b>Cc (С копией)</b></td>
                                <td class="cols"><b>Cco (Со скрытой копией)</b></td>
                            </tr>
                            <tr>
                                <td class="cols">Когда используется</td>
                                <td class="cols">Для отправки первоначальному получателю.</td>
                                <td class="cols">Отправляется заинтересованному лицу, но не являющемуся основным получателем.
                                </td>
                                <td class="cols">Для отправки заинтересованному лицу, но когда вы не хотите, чтобы люди видели, кто еще его получил.</td>
                            </tr>
                            </tr>
                            <tr>
                                <td class="cols">Кто видит получателей</td>
                                <td class="cols">Каждый, кто получает это письмо, может видеть, кто еще его получил.</td>
                                <td class="cols">Все видят.</td>
                                <td class="cols">Получатели не могут видеть адрес того, кто еще получил скрытую копию.</td>
                            </tr>
                            <tr>
                                <td class="cols">На английском языке</td>
                                <td class="cols">Чтобы.</td>
                                <td class="cols">Оно происходит от английского термина <i>копия</i> или <i>служебная копия</i>.</td>
                                <td class="cols">В английском языке используется термин bcc: <i>слепая копия</i>.</td>
                            </tr>
                        </table>
                    </tl><br>
					
					<hr class="subtlebar" style="margin-top: 4px; margin-bottom: 4px">
                    <br>

                <center>
                    <tl>Изменено: Peter H#3619 (442783328580665374)</tl>
                    <tl>Изменено: Tempest#9970 (321400509326032897)</tl>
                </center>

            </div>
        </tab>
    </tab-system>
</div>
`;
    },

    init() {
        const { glob, document } = this;

        const xinelaslinks = document.getElementsByClassName("linkdbmmods");
        for (let x = 0; x < xinelaslinks.length; x++) {
            const xinelaslink = xinelaslinks[x];
            const url = xinelaslink.getAttribute('data-url');
            if (url) {
                xinelaslink.setAttribute('title', url);
                xinelaslink.addEventListener('click', (e) => {
                    e.stopImmediatePropagation();
                    console.log(`Запуск URL: [${url}] в вашем браузере по умолчанию.`);
                    require('child_process').execSync(`start ${url}`);
                });
            }
        }

        const textarea = document.getElementById("text");
        const counter = document.getElementById("counter");
        const comprimentoTexto = textarea.value.length;
        counter.textContent = `${comprimentoTexto} символов`;
        textarea.addEventListener("input", () => {
            const comprimentoTexto = textarea.value.length;
            counter.textContent = `${comprimentoTexto} символов`;
        });

        glob.onComparisonChanged = function (event) {
            switch (parseInt(event.value)) {
                case 0:
                    document.getElementById("iffalseContainer").style.display = "none";
                    document.getElementById("actionsError").style.display = "none";
                    document.getElementById("divValueError2").style.width = "45%";
                case 1:
                    document.getElementById("iffalseContainer").style.display = "none";
                    document.getElementById("actionsError").style.display = "none";
                    document.getElementById("divValueError2").style.width = "45%";
                    break;
                case 2:
                    document.getElementById("iffalseName").innerHTML = "Номер действия";
                    document.getElementById("iffalseContainer").style.display = null;
                    document.getElementById("actionsError").style.display = "none";
                    document.getElementById("divValueError2").style.width = "45%";
                    break;
                case 3:
                    document.getElementById("iffalseName").innerHTML = "Пропустить действия";
                    document.getElementById("iffalseContainer").style.display = null;
                    document.getElementById("actionsError").style.display = "none";
                    document.getElementById("divValueError2").style.width = "45%";
                    break;
                case 4:
                    document.getElementById("iffalseName").innerHTML = "Название якоря";
                    document.getElementById("iffalseContainer").style.display = null;
                    document.getElementById("actionsError").style.display = "none";
                    document.getElementById("divValueError2").style.width = "45%";
                    break;
                case 5:
                    document.getElementById("iffalseContainer").style.display = "none";
                    document.getElementById("actionsError").style.display = null;
                    document.getElementById("divValueError2").style.width = "100%";
                    document.getElementById("divValueError2").style.marginBottom = "10px";
                    break;
                case 6:
                    document.getElementById("iffalseContainer").style.display = "none";
                    document.getElementById("actionsError").style.display = null;
                    document.getElementById("divValueError2").style.width = "100%";
                    document.getElementById("divValueError2").style.marginBottom = "10px";
                    break;
            }
        };

        glob.onComparisonChanged(document.getElementById("iffalse"));

        glob.formatItem = function (data) {
            let result = '<div style="display: inline-block; width: 200px; padding-left: 8px;">';
            const type = parseInt(data.type);
            const storage = ["Easter Egg", "Временная переменная", "Переменный сервер", "Глобальная переменная"];

            switch(type) {
                case 0:
                    result += `Вложение файл: ${data.fileName}.${data.fileFormat} > ${data.filePath}`;
                    break;
                case 1:
                    result += `Вложение URL: ${data.filePath}`;
                    break;
                case 2:
                    result += `Canvas: ${storage[parseInt(data.storage, 10)]} (${data.varName})`;
                    break;
                case 3:
                    result += `Отправить переменную: ${storage[parseInt(data.storage, 10)]} (${data.varName})`;
                    break;
            }

            result += `</div>`;
            return result;
        };
    },

    action(cache) {
        const data = cache.actions[cache.index];
        const _this = this;

        const user = this.evalMessage(data.username, cache);
        const pass = this.evalMessage(data.password, cache);
		const replyto = this.evalMessage(data.replyto, cache);
        const mailto = this.evalMessage(data.mailto, cache);
        const mailcc = this.evalMessage(data.mailcc, cache);
        const mailbcc = this.evalMessage(data.mailbcc, cache);
        const subjectvalue = this.evalMessage(data.subject, cache);
        const textvalue = this.evalMessage(data.text, cache);
        const typevalue = parseInt(data.type, 10);
        const host = this.evalMessage(data.hostname, cache);
        const port = this.evalMessage(data.portname, cache);
        const secure = Boolean(data.sec);

        const nodemailer = require("nodemailer");

        const transporter = nodemailer.createTransport({
            host,
            port,
            secure,
            auth: { user, pass },
        });

        const branches = data.branches;
        const attachments = [];

        for (var i = 0; i < branches.length; i++) {
            const branch = branches[i];
            const type = parseInt(branch.type);
            let obj;

            const fileName = this.evalMessage(branch.fileName, cache);
            const fileFormat = this.evalMessage(branch.fileFormat, cache);
            const filePath = this.evalMessage(branch.filePath, cache);

            switch (type) {
                case 0:
                    obj = {
                        filename: `${fileName}.${fileFormat}`,
                        path: `${filePath}/${fileName}.${fileFormat}`
                    }
                    break;
                case 1:
                    obj = {
                        filename: `${fileName}.${fileFormat}`,
                        path: filePath
                    }
                    break;
                case 2:
                    const Canvas = require("canvas");
                    const img = this.getVariable(branch.storage, branch.varName, cache);

                    const image = new Canvas.Image();
                    image.src = img;
                    image.onload = enviar();

                    function enviar() {
                        const canvas = Canvas.createCanvas(image.width, image.height)
                        const ctx = canvas.getContext("2d");
                        ctx.drawImage(image, 0, 0, image.width, image.height);

                        const buffer = canvas.toBuffer("image/png");

                        obj = {
                            filename: `${fileName}.png`,
                            content: buffer
                        }
                    };
                    break;
                case 3:
                    obj = {
                        filename: `${fileName}.${fileFormat}`,
                        content: this.getVariable(branch.storage, branch.varName, cache)
                    }
                    break;
            }

            attachments.push(obj);
        }

        let mailOptions;
        switch (typevalue) {
            case 0:
                mailOptions = {
                    from: user,
                    to: mailto,
                    cc: mailcc,
                    bcc: mailbcc,
					replyTo: replyto,
                    subject: subjectvalue,
                    text: textvalue,
                    attachments: attachments
                };
                break;
            case 1:
                mailOptions = {
                    from: user,
                    to: mailto,
                    cc: mailcc,
                    bcc: mailbcc,
					replyTo: replyto,
                    subject: subjectvalue,
                    html: textvalue,
                    attachments: attachments
                };
                break;
			case 2:
                mailOptions = {
                    from: user,
                    to: mailto,
                    cc: mailcc,
                    bcc: mailbcc,
					replyTo: replyto,
                    subject: subjectvalue,
                    amp: textvalue,
                    attachments: attachments
                };
                break;
        }

        transporter.sendMail(mailOptions, (error) => {
            if (error) {
                return erro(error);
            } else {
                _this.callNextAction(cache);
            }
        });

        function erro(err) {
            if (data.errcmd) _this.displayError(data, cache, err);

            if (data.iffalse == "5") return _this.executeSubActions(data.actionsError, cache);
            if (data.iffalse == "6") return _this.executeSubActionsThenNextAction(data.actionsError, cache);

            return _this.executeResults(false, data, cache);
        }

    },

    mod() { },
};