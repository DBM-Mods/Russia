module.exports = {
    name: 'Store Game Server Info MOD',
    section: 'Other Stuff',

    subtitle(data, presets) {
      if (data.descriptionx) {
          desccor = data.descriptioncolor;
      } else {
          desccor = "none";
      }

      return data.description
      ? `<font style="color:${desccor}">${data.description}</font>`
      : `<font style="color:${desccor}">${data.game}</font>`
  },

  variableStorage(data, varType) {
    let vars = [];

    for(var i = 0; i < data.branches.length; i++) {
        const type = parseInt(data.branches[i].storage, 10);
        const varName = data.branches[i].varName;

        if(type == varType && varName) {
            let tipo;

            switch(parseInt(data.branches[i].info)) {
                case 0:
                    tipo = "Текст";
                    break;
                case 1:
                    tipo = "Текст";
                    break;
                case 2:
                    tipo = "Число";
                    break;
                case 3:
                    tipo = "Число";
                    break;
                case 4:
                    tipo = "Число";
                    break;
                case 5:
                     tipo = "true / false";
                     break;
                case 6:
                     tipo = "true / false";
                     break;
                case 7:
                     tipo = "Список";
                     break;
                case 8:
                     tipo = "Текст";
                     break;
                case 9:
                     tipo = "Число";
                     break;
                case 10:
                     tipo = "IP:PORT";
                     break;
            }

            vars.push(varName);
            vars.push(tipo);
        }
    }

    const type = parseInt(data.storageError);

    if (type == varType) {
      vars.push(data.varNameError);
      vars.push("Текст ~ Ошибка");
    }

    if (vars.length > 0) {
        return vars;
    }
},
  
      meta: {
        version: '2.1.7',
        preciseCheck: true,
        author: '[lik_rus - 866884416151355392]',
        authorUrl: 'https://github.com/DBM-Mods/Russia',
        downloadURL: 'https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zip',
    },

      fields: ["serverip", "branches", "serverport", "game", "info", "storage", "varName", "description", "descriptionx", "descriptioncolor", "errcmd", "iffalse", "iffalseVal", "storageError", "varNameError", "actionsError"],

      html(isEvent, data) {
        return `
        <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Russia/archive/refs/heads/main.zipм">Обновление</div>
        <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Russia">Версия 0.2</div>


        <tab-system>
        <tab label="Сервер" icon="edit">
        <div style="width: 100%; padding:8px;height: calc(100vh - 210px);overflow:auto">

      <table style="width: 100%;">
      <td>
        <span class="dbminputlabel">IP Сервера</span>
        <input id="serverip" placeholder="mc.example.com" class="round" type="text">
      </td>
      <td style="padding-left: 18px;">
        <span class="dbminputlabel">Порт сервера</span>
        <input id="serverport" placeholder="Оставьте пустым для порта по умолчанию" class="round" type="text">
      </td>
     </table>

     <div style="padding-top: 15px;">
     <span class="dbminputlabel">Игра<span class="xinelaslink dbminputlabel" style="float:right;cursor:pointer" data-url="https://www.npmjs.com/package/gamedig#games-with-additional-notes">Список игр</span></span><br>
     <select id="game" class="round">
     <option value="7d2d">7 Days to Die (2013)</option>
     <option value="ageofchivalry">Age of Chivalry (2007)</option>
     <option value="aoe2">Age of Empires 2 (1999)</option>
     <option value="alienarena">Alien Arena (2004)</option>
     <option value="alienswarm">Alien Swarm (2010)</option>
     <option value="avp2">Aliens versus Predator 2 (2001)</option>
     <option value="avp2010">Aliens vs. Predator (2010)</option>
     <option value="americasarmy">America's Army (2002)</option>
     <option value="americasarmy2">America's Army 2 (2003)</option>
     <option value="americasarmy3">America's Army 3 (2009)</option>
     <option value="americasarmypg">America's Army: Proving Grounds (2015)</option>
     <option value="arcasimracing">Arca Sim Racing (2008)</option>
     <option value="arkse">Ark: Survival Evolved (2017)</option>
     <option value="arma2">ARMA 2 (2009)</option>
     <option value="arma2oa">ARMA 2: Operation Arrowhead (2010)</option>
     <option value="arma3">ARMA 3 (2013)</option>
     <option value="arma">ARMA: Armed Assault (2007)</option>
     <option value="armacwa">ARMA: Cold War Assault (2011)</option>
     <option value="armar">ARMA: Resistance (2011)</option>
     <option value="armagetron">Armagetron Advanced (2001)</option>
     <option value="atlas">Atlas (2018)</option>
     <option value="baldursgate">Baldur's Gate (1998)</option>
     <option value="bat1944">Battalion 1944 (2018)</option>
     <option value="bf1942">Battlefield 1942 (2002)</option>
     <option value="bf2">Battlefield 2 (2005)</option>
     <option value="bf2142">Battlefield 2142 (2006)</option>
     <option value="bf3">Battlefield 3 (2011)</option>
     <option value="bf4">Battlefield 4 (2013)</option>
     <option value="bfh">Battlefield Hardline (2015)</option>
     <option value="bfv">Battlefield Vietnam (2004)</option>
     <option value="bfbc2">Battlefield: Bad Company 2 (2010)</option>
     <option value="breach">Breach (2011)</option>
     <option value="breed">Breed (2004)</option>
     <option value="brink">Brink (2011)</option>
     <option value="buildandshoot">Build and Shoot / Ace of Spades Classic (2012)</option>
     <option value="cod">Call of Duty (2003)</option>
     <option value="cod2">Call of Duty 2 (2005)</option>
     <option value="cod3">Call of Duty 3 (2006)</option>
     <option value="cod4">Call of Duty 4: Modern Warfare (2007)</option>
     <option value="codmw2">Call of Duty: Modern Warfare 2 (2009)</option>
     <option value="codmw3">Call of Duty: Modern Warfare 3 (2011)</option>
     <option value="coduo">Call of Duty: United Offensive (2004)</option>
     <option value="codwaw">Call of Duty: World at War (2008)</option>
     <option value="callofjuarez">Call of Juarez (2006)</option>
     <option value="chaser">Chaser (2003)</option>
     <option value="chrome">Chrome (2003)</option>
     <option value="codenameeagle">Codename Eagle (2000)</option>
     <option value="codenameeagle">Codename Eagle (2000)</option>
     <option value="cacrenegade">Command and Conquer: Renegade (2002)</option>
     <option value="commandos3">Commandos 3: Destination Berlin (2003)</option>
     <option value="conanexiles">Conan Exiles (2018)</option>
     <option value="contactjack">Contract J.A.C.K. (2003)</option>
     <option value="cs15">Counter-Strike 1.5 (2002)</option>
     <option value="cs16">Counter-Strike 1.6 (2003)</option>
     <option value="cs2d">Counter-Strike: 2D (2004)</option>
     <option value="cscz">Counter-Strike: Condition Zero (2004)</option>
     <option value="csgo">Counter-Strike: Global Offensive (2012)</option>
     <option value="css">Counter-Strike: Source (2004)</option>
     <option value="crossracing">Cross Racing Championship Extreme 2005 (2005)</option>
     <option value="crysis">Crysis (2007)</option>
     <option value="crysis2">Crysis 2 (2011)</option>
     <option value="crysiswars">Crysis Wars (2008)</option>
     <option value="daikatana">Daikatana (2000)</option>
     <option value="dnl">Dark and Light (2017)</option>
     <option value="dmomam">Dark Messiah of Might and Magic (2006)</option>
     <option value="darkesthour">Darkest Hour: Europe '44-'45 (2008)</option>
     <option value="dod">Day of Defeat (2003)</option>
     <option value="dods">Day of Defeat: Source (2005)</option>
     <option value="doi">Day of Infamy (2017)</option>
     <option value="dayz">DayZ (2018)</option>
     <option value="dayzmod">DayZ Mod (2013)</option>
     <option value="deadlydozenpt">Deadly Dozen: Pacific Theater (2002)</option>
     <option value="dh2005">Deer Hunter 2005 (2004)</option>
     <option value="descent3">Descent 3 (1999)</option>
     <option value="deusex">Deus Ex (2000)</option>
     <option value="devastation">Devastation (2003)</option>
     <option value="dinodday">Dino D-Day (2011)</option>
     <option value="dirttrackracing2">Dirt Track Racing 2 (2002)</option>
     <option value="doom3">Doom 3 (2004)</option>
     <option value="dota2">Dota 2 (2013)</option>
     <option value="drakan">Drakan: Order of the Flame (1999)</option>
     <option value="etqw">Enemy Territory: Quake Wars (2007)</option>
     <option value="fear">F.E.A.R. (2005)</option>
     <option value="f1c9902">F1 Challenge '99-'02 (2002)</option>
     <option value="farcry">Far Cry (2004)</option>
     <option value="farcry2">Far Cry 2 (2008)</option>
     <option value="f12002">Formula One 2002 (2002)</option>
     <option value="fortressforever">Fortress Forever (2007)</option>
     <option value="ffow">Frontlines: Fuel of War (2008)</option>
     <option value="garrysmod">Garry's Mod (2004)</option>
     <option value="geneshift">Geneshift (2017)</option>
     <option value="giantscitizenkabuto">Giants: Citizen Kabuto (2000)</option>
     <option value="globaloperations">Global Operations (2002)</option>
     <option value="ges">GoldenEye: Source (2010)</option>
     <option value="gore">Gore: Ultimate Soldier (2002)</option>
     <option value="fivem">Grand Theft Auto V - FiveM (2013)</option>
     <option value="mtasa">Grand Theft Auto: San Andreas - Multi Theft Auto (2004)</option>
     <option value="mtavc">Grand Theft Auto: Vice City - Multi Theft Auto (2002)</option>
     <option value="gunmanchronicles">Gunman Chronicles (2000)</option>
     <option value="hl2dm">Half-Life 2: Deathmatch (2004)</option>
     <option value="hldm">Half-Life Deathmatch (1998)</option>
     <option value="hldms">Half-Life Deathmatch: Source (2005)</option>
     <option value="halo">Halo (2003)</option>
     <option value="halo2">Halo 2 (2007)</option>
     <option value="heretic2">Heretic II (1998)</option>
     <option value="hexen2">Hexen II (1997)</option>
     <option value="had2">Hidden & Dangerous 2 (2003)</option>
     <option value="homefront">Homefront (2011)</option>
     <option value="homeworld2">Homeworld 2 (2003)</option>
     <option value="hurtworld">Hurtworld (2015)</option>
     <option value="igi2">I.G.I.-2: Covert Strike (2003)</option>
     <option value="il2">IL-2 Sturmovik (2001)</option>
     <option value="insurgency">Insurgency (2014)</option>
     <option value="insurgencysandstorm">Insurgency: Sandstorm (2018)</option>
     <option value="ironstorm">Iron Storm (2002)</option>
     <option value="jamesbondnightfire">James Bond 007: Nightfire (2002)</option>
     <option value="jc2mp">Just Cause 2 - Multiplayer (2010)</option>
     <option value="kspdmp">Kerbal Space Program - DMP Multiplayer (2015)</option>
     <option value="killingfloor">Killing Floor (2009)</option>
     <option value="killingfloor2">Killing Floor 2 (2016)</option>
     <option value="kingpin">Kingpin: Life of Crime (1999)</option>
     <option value="kisspc">Kiss: Psycho Circus: The Nightmare Child (2000)</option>
     <option value="kzmod">Kreedz Climbing (2017)</option>
     <option value="left4dead">Left 4 Dead (2008)</option>
     <option value="left4dead2">Left 4 Dead 2 (2009)</option>
     <option value="m2mp">Mafia II - Multiplayer (2010)</option>
     <option value="m2o">Mafia II - Online (2010)</option>
     <option value="moh2010">Medal of Honor (2010)</option>
     <option value="mohab">Medal of Honor: Airborne (2007)</option>
     <option value="mohaa">Medal of Honor: Allied Assault (2002)</option>
     <option value="mohbt">Medal of Honor: Allied Assault Breakthrough (2003)</option>
     <option value="mohsh">Medal of Honor: Allied Assault Spearhead (2002)</option>
     <option value="mohpa">Medal of Honor: Pacific Assault (2004)</option>
     <option value="mohpa">Medal of Honor: Pacific Assault (2004)</option>
     <option value="mohwf">Medal of Honor: Warfighter (2012)</option>
     <option value="medievalengineers">Medieval Engineers (2015)</option>
     <option value="minecraft" selected>Minecraft (2009)</option>
     <option value="minecraftpe">Minecraft: Pocket Edition (2011)</option>
     <option value="mnc">Monday Night Combat (2011)</option>
     <option value="mumble">Mumble - GTmurmur Plugin (2005)</option>
     <option value="mumbleping">Mumble - Lightweight (2005)</option>
     <option value="nascarthunder2004">NASCAR Thunder 2004 (2003)</option>
     <option value="ns">Natural Selection (2002)</option>
     <option value="ns2">Natural Selection 2 (2012)</option>
     <option value="nfshp2">Need for Speed: Hot Pursuit 2 (2002)</option>
     <option value="nab">Nerf Arena Blast (1999)</option>
     <option value="netpanzer">netPanzer (2002)</option>
     <option value="nwn">Neverwinter Nights (2002)</option>
     <option value="nwn2">Neverwinter Nights 2 (2006)</option>
     <option value="nexuiz">Nexuiz (2005)</option>
     <option value="nitrofamily">Nitro Family (2004)</option>
     <option value="nmrih">No More Room in Hell (2011)</option>
     <option value="nolf2">No One Lives Forever 2: A Spy in H.A.R.M.'s Way (2002)</option>
     <option value="nucleardawn">Nuclear Dawn (2011)</option>
     <option value="openarena">OpenArena (2005)</option>
     <option value="openttd">OpenTTD (2004)</option>
     <option value="operationflashpoint">Operation Flashpoint: Cold War Crisis (2001)</option>
     <option value="flashpointresistance">Operation Flashpoint: Resistance (2002)</option>
     <option value="painkiller">Painkiller</option>
     <option value="postal2">Postal 2</option>
     <option value="prey">Prey</option>
     <option value="primalcarnage">Primal Carnage: Extinction</option>
     <option value="quake1">Quake 1: QuakeWorld</option>
     <option value="quake2">Quake 2</option>
     <option value="quake3">Quake 3: Arena</option>
     <option value="quake4">Quake 4</option>
     <option value="r6">Rainbow Six</option>
     <option value="r6">Rainbow Six</option>
     <option value="r6roguespear">Rainbow Six 2: Rogue Spear</option>
     <option value="r6ravenshield">Rainbow Six 3: Raven Shield</option>
     <option value="rallisportchallenge">Rainbow Six 3: Raven Shield</option>
     <option value="RalliSport Challenge">Rainbow Six 3: Raven Shield</option>
     <option value="rallymasters">Rally Masters</option>
     <option value="redorchestra">Red Orchestra</option>
     <option value="redorchestra2">Red Orchestra 2</option>
     <option value="redorchestraost">Red Orchestra: Ostfront 41-45</option>
     <option value="redline">Redline</option>
     <option value="rtcw">Return to Castle Wolfenstein</option>
     <option value="rfactor">rFactor</option>
     <option value="ricochet">Ricochet</option>
     <option value="riseofnations">Rise of Nations</option>
     <option value="rune">Rune</option>
     <option value="rust">Rust</option>
     <option value="stalker">S.T.A.L.K.E.R.</option>
     <option value="samp">San Andreas Multiplayer</option>
     <option value="ss">Serious Sam</option>
     <option value="ss2">Serious Sam 2</option>
     <option value="shatteredhorizon">Shattered Horizon</option>
     <option value="shogo">Shogo</option>
     <option value="shootmania">Shootmania</option>
     <option value="sin">SiN</option>
     <option value="sinep">SiN Episodes</option>
     <option value="soldat">Soldat</option>
     <option value="sof">Soldier of Fortune</option>
     <option value="sof2">Soldier of Fortune 2</option>
     <option value="spaceengineers">Space Engineers</option>
     <option value="stbc">Star Trek: Bridge Commander</option>
     <option value="stvef">Star Trek: Voyager - Elite Force</option>
     <option value="stvef2">Star Trek: Voyager - Elite Force 2</option>
     <option value="swbf">Star Wars: Battlefront</option>
     <option value="swbf2">Star Wars: Battlefront 2</option>
     <option value="swjk">Star Wars: Jedi Knight</option>
     <option value="swjk2">Star Wars: Jedi Knight 2</option>
     <option value="swrc">Star Wars: Republic Commando</option>
     <option value="starbound">Starbound</option>
     <option value="starmade">StarMade</option>
     <option value="starsiege">Starsiege (2009)</option>
     <option value="suicidesurvival">Suicide Survival</option>
     <option value="svencoop">Sven Coop</option>
     <option value="swat4">SWAT 4</option>
     <option value="synergy">Synergy</option>
     <option value="tacticalops">Tactical Ops</option>
     <option value="takeonhelicopters">Take On Helicopters (2011)</option>
     <option value="teamfactor">Team Factor</option>
     <option value="tf2">Team Fortress 2</option>
     <option value="tfc">Team Fortress Classic</option>
     <option value="teamspeak3">Teamspeak 3</option>
     <option value="terminus">Terminus</option>
     <option value="terraria">Terraria - TShock (2011)</option>
     <option value="hidden">The Hidden (2005)</option>
     <option value="nolf">The Operative: No One Lives Forever (2000)</option>
     <option value="ship">The Ship</option>
     <option value="graw">Tom Clancy's Ghost Recon Advanced Warfighter (2006)</option>
     <option value="graw2">Tom Clancy's Ghost Recon Advanced Warfighter 2 (2007)</option>
     <option value="thps3">Tony Hawk's Pro Skater 3</option>
     <option value="thps4">Tony Hawk's Pro Skater 4</option>
     <option value="thu2">Tony Hawk's Underground 2</option>
     <option value="towerunite">Tower Unite</option>
     <option value="trackmania2">Trackmania 2</option>
     <option value="trackmaniaforever">Trackmania Forever</option>
     <option value="tremulous">Tremulous</option>
     <option value="tribes1">Tribes 1: Starsiege</option>
     <option value="tribesvengeance">Tribes: Vengeance</option>
     <option value="tron20">Tron 2.0</option>
     <option value="turok2">Turok 2</option>
     <option value="universalcombat">Universal Combat</option>
     <option value="unreal">Unreal</option>
     <option value="ut">Unreal Tournament</option>
     <option value="ut2003">Unreal Tournament 2003</option>
     <option value="ut2004">Unreal Tournament 2004</option>
     <option value="ut3">Unreal Tournament 3</option>
     <option value="unturned">Unturned</option>
     <option value="urbanterror">Urban Terror</option>
     <option value="v8supercar">V8 Supercar Challenge</option>
     <option value="ventrilo">Ventrilo</option>
     <option value="vcmp">Vice City Multiplayer</option>
     <option value="vietcong">Vietcong</option>
     <option value="vietcong2">Vietcong 2</option>
     <option value="warsow">Warsow</option>
     <option value="wheeloftime">Wheel of Time</option>
     <option value="wolfenstein2009">Wolfenstein 2009</option>
     <option value="wolfensteinet">Wolfenstein: Enemy Territory</option>
     <option value="xpandrally">Xpand Rally</option>
     <option value="zombiemaster">Zombie Master</option>
     <option value="zps">Zombie Panic: Source</option>
   </select>
   <input type="text" id="filtrodoxinxyla" class="round" placeholder="Параметры фильтра...">
   </div>

   </table>

   </div>

   </dialog-list>

   </tab>

   <tab label="Вывод" icon="question circle">
   <div style="width: 100%; padding:8px;height: calc(100vh - 210px);overflow:auto">

   <dialog-list id="branches" fields='["info", "storage", "varName"]' dialogResizable dialogTitle="Сервер инфо" dialogWidth="600" dialogHeight="200" listLabel="Список" listStyle="height: calc(100vh - 280px);" itemName="Item" itemHeight="28px;" itemTextFunction="glob.formatItem(data)" itemStyle="line-height: 28px;">
        
   <div style="margin: 10px;">

       <span class="dbminputlabel">Информация</span>
       <select id="info" class="round">
       <option value="0" selected>Название сервера</option>
       <option value="1">Карта</option>
       <option value="2">Количество игроков</option>
       <option value="3">Количество ботов</option>
       <option value="4">Макс. количество игроков</option>
       <option value="5">Тэги сервера</option>
       <option value="6">Запаролен?</option>
       <option value="7">Список игроков</option>
       <option value="8">Режим игры (Проверено на Garry's Mod)</option>
       <option value="9">Пинг (Проверено на Garry's Mod)</option>
       <option value="10">Подключение (ip:port)</option>
       </select>
 
       <br>
 
       <div style="float: left; width: 35%;">
           <span class="dbminputlabel">Хранить в</span>
           <select id="storage" class="round">
               ${data.variables[1]}
           </select>
       </div>
 
       <div style="float: right; width: 60%;">
           <span class="dbminputlabel">Имя переменной</span>
           <input id="varName" class="round" type="text">
       </div>

       </div>
       </dialog-list>
     
       </div>
 </tab>

 <tab label="Конфиг" icon="settings">
 <div style="width: 100%; padding:8px;height: calc(100vh - 210px);overflow:auto">

 <div style="padding:8px">
 <table style="width:100%;"><tr>
<td><span class="dbminputlabel">Описание действия</span><br><input type="text" class="round" id="description" placeholder="Оставьте пустым, чтобы не использовалось!"></td>
<td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Цвет (вкл)"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
</tr></table>

<br>

<span class="dbminputlabel">Опции</span><br><div style="padding:10px;background:rgba(0,0,0,0.2)">
<dbm-checkbox id="errcmd" label="Вывести ошибку на консоль" checked></dbm-checkbox>
</div>
</table>

<div id="divValueError">
<div style="float: left; width: 35%;">
 <span class="dbminputlabel">Хранить ошибку в</span>
 <select id="storageError" class="round" onchange="glob.variableChangeError(this, 'varNameContainer')">
   ${data.variables[0]}
 </select>
</div>

<div id="varNameContainerError" style="float: right; display: none; width: 60%;">
 <span class="dbminputlabel">Название переменной</span>
 <input id="varNameError" class="round" type="text">
</div>


   </div>

   <br><br><br>

   <div style="overflow:hidden;padding:4px 0px 0px 0px">
<div style="float: left; width: 38%" id="xinext">
<span class="dbminputlabel">Если возникает ошибка</span><br>
<select id="iffalse" class="round" onchange="glob.onComparisonChanged(this)">
<option value="0" selected>Продолжить действия</option>
<option value="1">Остановить последовательность действий</option>
<option value="2">Перейти к действию</option>
<option value="3">Пропустить следующий действия</option>
<option value="4">Перейти к якорю действия</option>
<option value="5">Выполнить действия ниже и остановиться</option>
<option value="6">Выполнить действия ниже и продолжить</option>
</select>
</div>

<div id="iffalseContainer" style="display: none; float: right; width: 60%;">
<div id="xincontrol"><span id="xinelas" class="dbminputlabel">Para</span><br>
<input id="iffalseVal" class="round" name="actionxinxyla" type="text">
</div>
</div>

<div id="containerxin" style="width:100%;overflow:hidden">
<br>
<action-list-input id="actionsError" min-height="100" height="calc(100vh - 350px)"></action-list-input>
</div>

</div>
</div>
</tab>
</tab-system>

 <style>

 table{width:100%}
 .dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
 .dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}

 .round2{width:100%;height:30px;outline:0}
.round2 option{padding:3px 8px;text-align:left}
.round2 optgroup{text-align:center;padding:4px 0px;}


.abrir {
  height: 30px;
  animation: abrir .5s forwards;
}

@keyframes abrir {
  from {
    height: 30px;
  }
  to {
    height: 130px;
  }
}

.fechar {
  height: 130px;
  animation: fechar .5s forwards;
}

@keyframes fechar {
  from {
    height: 130px;
  }
  to {
    height: 30px;
  }
}
 
</style>
`;
      },
    
      init() {
        const xinelaslinks = document.getElementsByClassName("xinelaslink");

        for (let x = 0; x < xinelaslinks.length; x++) {
          const xinelaslink = xinelaslinks[x];
          const url = xinelaslink.getAttribute('data-url');
          if (url) {
            xinelaslink.setAttribute('title', url);
            xinelaslink.addEventListener('click', (e) => {
              e.stopImmediatePropagation();
              console.log(`Запуск URL: [${url}] в браузере по умолчанию.`);
              require('child_process').execSync(`start ${url}`);
            });
          }
        }

        glob.onComparisonChanged = function (event) {
          if (event.value > "1") {
              document.getElementById("iffalseContainer").style.display = null;
          } else {
              document.getElementById("iffalseContainer").style.display = "none";
          }
          if (event.value == "5" || event.value == "6") {
              document.getElementById("containerxin").style.display = null;
              document.getElementById("xincontrol").style.display = "none";
              document.getElementById("xinext").style.width = "100%";
          } else {
              document.getElementById("containerxin").style.display = "none";
              document.getElementById("xincontrol").style.display = null;
              document.getElementById("xinext").style.width = "38%";
          }
          if (event.value == "2") {
              document.querySelector("[id='xinelas']").innerText = (`Номер действия`);
          }
          if (event.value == "3") {
              document.querySelector("[id='xinelas']").innerText = (`Количество действий`);
          }
          if (event.value == "4") {
              document.querySelector("[id='xinelas']").innerText = (`Имя якоря`);
          }
      }
  
      glob.onComparisonChanged(document.getElementById("iffalse"));
  
      glob.variableChangeError = function (event) {
          if (event.value == "0") {
              document.getElementById("varNameContainerError").style.display = "none";
          } else {
              document.getElementById("varNameContainerError").style.display = null;
          }
      }
  
      glob.variableChangeError(document.getElementById("storageError"));

    glob.formatItem = function (data) {
        let result = '<div style="display: inline-block; width: 200px; padding-left: 8px;">Хранить "';
        const info = parseInt(data.info);
      
        switch (info) {
          case 0:
            result += "Название сервера";
            break;
          case 1:
            result += "Карта";
            break;
          case 2:
            result += "Количество игроков";
            break;
          case 3:
            result += "Количество ботов";
            break;
          case 4:
            result += "Макс. количество игроков";
            break;
          case 5:
            result += "Тэги сервера";
            break;
          case 6:
            result += "Запаролен?";
            break;
          case 7:
            result += "Cписок игроков";
            break;
          case 8:
            result += "Режим игры";
            break;
          case 9:
            result += "Пинг";
            break;
          case 10:
            result += "Подключение (ip:port)";
            break;
        }
      
        result += `" в "${data.varName}" </div>`;
        return result;
      };
    
        document.getElementById("game").addEventListener("click", function () {
          this.size = this.options.length;
          document.getElementById("game").classList.add("abrir");
          document.getElementById("game").classList.remove("fechar");
          document.getElementById("game").style.display = "block";
        });
    
        document.getElementById("game").addEventListener("blur", function () {
          this.size = 1;
          document.getElementById("game").classList.remove("abrir");
          document.getElementById("game").classList.add("fechar");
          document.getElementById("game").style.height = "30px";
        });
        document.getElementById("filtrodoxinxyla").addEventListener("keyup", function () {
          var filter = this.value.toLowerCase();
          var options = document.getElementById("game").options;
          for (var i = 0; i < options.length; i++) {
            var option = options[i];
            if (option.text.toLowerCase().indexOf(filter) === -1) {
              option.style.display = "none";
            } else {
              option.style.display = "";
            }
          }
          document.getElementById("game").dispatchEvent(new Event('click'));

        });
    
      },
    
      async action(cache) {
        const data = cache.actions[cache.index];
        const gametype = this.evalMessage(data.game, cache);
        const ip = this.evalMessage(data.serverip, cache);
        const port = this.evalMessage(data.serverport, cache);
    
        const Gamedig = require('gamedig');
         
          try {
            const fields = {
              type: gametype,
              host: ip
            };
            
            if (port) {
              fields.port = port;
            }
        
          const state = await Gamedig.query(fields);

          const branches = data.branches;
      
          for (var i = 0; i < branches.length; i++) {
            const branch = branches[i];
            const info = parseInt(branch.info);
      
            try {
              let result;
      
              switch (info) {
                case 0:
                 result = state.name;
                 break;
                case 1:
                 result = state.map;
                 break;
                case 2:
                 result = state.raw.numplayers || state.players.length;
                  break;
                case 3:
                  result = state.raw.numbots;
                 break;
                case 4:
                  result = state.maxplayers;
                 break;
                 case 5:
                   result = state.raw.tags;
                   break;
                 case 6:
                  result = state.password;
                  break;
                 case 7:
                   result = state.players.map((a) => a.name);
                   break;
              }
      
              const varName = this.evalMessage(branch.varName, cache);
              const storage = parseInt(branch.storage, 10);
              this.storeValue(result, storage, varName, cache);
              
            } catch (error) {
  
              this.storeValue(error, parseInt(data.storageError), this.evalMessage(data.varNameError, cache), cache)
    
              if (data.errcmd === true) {
                console.log('ERROR: ' + cache.toString() + ' - Action ' + (cache.index + 1) + '# ' + data.name);
                console.log(error);
              }
        
              if (data.iffalse == "5" || data.iffalse == "6") {
        
                if (data.iffalse == "5") {
                  this.executeSubActions(data.actionsError, cache)
                } else {
                  this.executeSubActionsThenNextAction(data.actionsError, cache)
                }
        
              } else {
                this.executeResults(false, data, cache);
              }
    
            }
          }
  
          this.callNextAction(cache);
    
        } catch (error) {
    
          this.storeValue(error, parseInt(data.storageError), this.evalMessage(data.varNameError, cache), cache)
    
          if (data.errcmd === true) {
            console.log('ERROR: ' + cache.toString() + ' - Action ' + (cache.index + 1) + '# ' + data.name);
            console.log(error);
          }
    
          if (data.iffalse == "5" || data.iffalse == "6") {
    
            if (data.iffalse == "5") {
              this.executeSubActions(data.actionsError, cache)
            } else {
              this.executeSubActionsThenNextAction(data.actionsError, cache)
            }
    
          } else {
            this.executeResults(false, data, cache);
          }
    
    
        }
      },

      modInit(data) {
        this.prepareActions(data.actionsError);
      },


mod() { },
}; 