// locale
document.getElementById("ui-money-text").innerHTML = lang[navLang]["ui_money"];
document.getElementById("ui-build-text").innerHTML = lang[navLang]["ui_build"];
document.getElementById("ui-setting-text").innerHTML = lang[navLang]["ui_setting"];
document.getElementById("ui-life-text").innerHTML = lang[navLang]["ui_life"];
document.getElementById("diff0").innerHTML = lang[navLang]["ui_easy"];
document.getElementById("diff1").innerHTML = lang[navLang]["ui_hard"];
document.getElementById("diff2").innerHTML = lang[navLang]["ui_realHard"];
document.getElementById("start").innerHTML = lang[navLang]["start"];

function getTowerPanelHTML(name, image, price, bulletDamage, T, range, tower_name, desc) {
	return 	'<div class="tower-panel">' +
				'<p class="tower-name">' + name + (desc == undefined ? '' : '<span class="float-right" onmouseover="showTowerTooltip(this, \'' +desc + '\');" onmouseout="hideTowerTooltip();"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16" width="16" height="16"><defs><path d="M14.29 8.05C14.29 11.52 11.47 14.34 8 14.34C4.53 14.34 1.71 11.52 1.71 8.05C1.71 4.57 4.53 1.75 8 1.75C11.47 1.75 14.29 4.57 14.29 8.05Z" id="d1NwHIVQkK"></path><path d="M9.21 5.4C9.21 6.07 8.67 6.62 8 6.62C7.33 6.62 6.79 6.07 6.79 5.4C6.79 4.73 7.33 4.19 8 4.19C8.67 4.19 9.21 4.73 9.21 5.4Z" id="a4jluukTzc"></path><path d="M8.85 7.36C8.97 7.36 9.07 7.45 9.07 7.57C9.07 8.41 9.07 10.73 9.07 11.57C9.07 11.69 8.97 11.79 8.85 11.79C8.47 11.79 7.53 11.79 7.15 11.79C7.03 11.79 6.93 11.69 6.93 11.57C6.93 10.73 6.93 8.41 6.93 7.57C6.93 7.45 7.03 7.36 7.15 7.36C7.53 7.36 8.47 7.36 8.85 7.36Z" id="epTZvqBhv"></path></defs><g><g><g><use xlink:href="#d1NwHIVQkK" opacity="1" fill="#000000" fill-opacity="0"></use><g><use xlink:href="#d1NwHIVQkK" opacity="1" fill-opacity="0" stroke="#6c99ff" stroke-width="1.5" stroke-opacity="1"></use></g></g><g><use xlink:href="#a4jluukTzc" opacity="1" fill="#6c99ff" fill-opacity="1"></use><g><use xlink:href="#a4jluukTzc" opacity="1" fill-opacity="0" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0"></use></g></g><g><use xlink:href="#epTZvqBhv" opacity="1" fill="#6c99ff" fill-opacity="1"></use><g><use xlink:href="#epTZvqBhv" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="0" stroke-opacity="1"></use></g></g></g></g></svg></span>') + '</p>' +
				'<div class="d-inline-flex">' +
					'<img class="tower-img" src="/game/foodTowerDefense/static' + image + '">' +
					'<div class="tower-text">' +
						'<div class="d-block">' +
							'<ul class="tower-info">' +
								'<li>' + lang[navLang]["ui_price"] + ': <span class="color-gold info-text">' + price + '</span></li>' +
								'<li>' + lang[navLang]["ui_damage"] + ': <span class="info-text">' + bulletDamage + '</span></li>' +
								'<li>' + lang[navLang]["ui_rate"] + ': <span class="info-text">' + Math.floor(100000 / T) / 100 + '</span></li>' +
								'<li>' + lang[navLang]["ui_range"] + ': <span class="info-text">' + range + '</span></li>' +
							'</ul>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="d-block">' +
					'<div class="btn btn-outline-primary btn-block" onclick="constructTowerUI(\'' + tower_name + '\')">' + lang[navLang]["ui_build"] + '</div>' +
				'</div>' +
			'</div>';
}

function getTowerUpgradePopHTML(tower, position) {
	
	const towerLevel = parseInt(tower.name[tower.name.length - 1]);
	
	return	'<div id="upgrade-panel-wrap" class="upgrade-panel-wrap" style="left: ' + (position.x + 30) + 'px;top: ' + (position.y - 25) + 'px;">' +
				'<h6 class="upgrade-panel-text">' + TowerInfo[tower.name].name + '<span class="float-right">Lv.' + towerLevel + '</span></h6>' +
				(TowerInfo[tower.name].upgradeCost != 0 ? '<h6 class="upgrade-panel-text" onclick="upgradeTower(' + tower.position.x + ', ' + tower.position.y + ')">' + lang[navLang]["ui_upgrade"] + ' <span class="float-right text-warning">' + TowerInfo[tower.name].upgradeCost + ' G</span></h6>' : '') +
				'<h6 class="upgrade-panel-text" onclick="sellTower(' + tower.position.x + ', ' + tower.position.y + ')">' + lang[navLang]["ui_sell"] + ' <span class="float-right text-warning">' + Math.floor(TowerInfo[tower.name].price * 0.6) + ' G</span></h6>' +
			'</div>';
}

function getEnemyPanelHTML() {
	return	'<center><h6 id="enemyName"></h6></center>' +
			'<h6>' + lang[navLang]["ui_speed"] + ' : <span class="float-right" id="enemySpeed"></span></h6>' +
			'<h6>' + lang[navLang]["ui_gold"] + ' : <span class="float-right text-warning" id="enemyGold"></span></h6>' +
			'<h6>' + lang[navLang]["ui_def"] + ' : <span class="float-right text-info" id="enemyDef"></span></h6>' +
			'<h6 class="mb-4">' + lang[navLang]["ui_damage"] + ' : <span class="float-right text-danger" id="enemyDamage"></span></h6>' +
			'<div class="progress mb-2 progress-custom">' +
				'<div class="progress-bar progress-bar-striped bg-danger" style="width:100%" id="enemyHealth">100</div>' +
			'</div>';

}

function displayEnemyUI(enemy) {
	document.getElementById("enemyName").innerHTML = enemy.name;
	document.getElementById("enemyHealth").innerHTML = enemy.health;
	document.getElementById("enemyHealth").style.width = 100 * enemy.health / enemy.maxHealth + "%";
	document.getElementById("enemySpeed").innerHTML = Math.floor(enemy.getSpeed() * 100) / 100;
	document.getElementById("enemyDef").innerHTML = enemy.def;
	
	if(enemy.slow > 0) {
		document.getElementById("enemySpeed").style.color = "#6060ff";
	} else {
		document.getElementById("enemySpeed").style.color = "#ffffff";
	}
	
	document.getElementById("enemyGold").innerHTML = enemy.gold;
	document.getElementById("enemyDamage").innerHTML = enemy.damage;
}

function getTowerPanelInfoHTML() {
	return	'<center><h6 id="towerName"></h6></center>' +
			'<br />' +
			'<h6>' + lang[navLang]["ui_rate"] + ' : <span class="float-right" id="towerSpeed"></span></h6>' +
			'<h6>' + lang[navLang]["ui_damage"] + ' : <span class="float-right text-danger" id="towerDamage"></span></h6>' +
			'<h6>' + lang[navLang]["ui_range"] + ' : <span class="float-right" id="towerRange"></span></h6>' +
			'<h6>' + lang[navLang]["ui_bspeed"] + ' : <span class="float-right" id="towerBulletSpeed"></span></h6>' +
			'<h6>' + lang[navLang]["ui_price"] + ' : <span class="float-right text-warning" id="towerPrice"></span></h6>';
}

function displayTowerUI(tower) {
	const towerLevel = parseInt(tower.name[tower.name.length - 1]);
	
	document.getElementById("towerName").innerHTML = TowerInfo[tower.name].name + " Lv." + towerLevel;
	document.getElementById("towerSpeed").innerHTML = Math.floor(100000 / TowerInfo[tower.name].T) / 100
	document.getElementById("towerDamage").innerHTML = TowerInfo[tower.name].bulletDamage;
	document.getElementById("towerRange").innerHTML = TowerInfo[tower.name].range;
	document.getElementById("towerBulletSpeed").innerHTML = TowerInfo[tower.name].bulletSpeed;
	document.getElementById("towerPrice").innerHTML = TowerInfo[tower.name].price;
}

function checkRemoveTowerUI(tower) {
	if(panelTargetTower == tower) {
		panelDom.style.display = "none";
	}
}

function checkRemoveEnemyUI(enemy) {
	if(panelTargetEnemy == enemy) {
		panelDom.style.display = "none";
	}
}
// Menu slider

var scroll = 0;
var panelCount = 0;
var panelSize = 0;
function buildTowerPanelMenu(){
	panelSize = 218;
	panelCount = 0;
	scroll = 0;
	menuSliderDom.style["transform"] = "translateY(0px)";
	// build tower panel
	buildHTML = '';
	
	for(i in Object.keys(TowerInfo)) {
		const tower_name = Object.keys(TowerInfo)[i];
		const tower = TowerInfo[tower_name];
		
		if(!tower.forSale) {
			continue;
		}
	
		panelCount++;
	
		buildHTML += getTowerPanelHTML(tower.name, tower.image, tower.price, tower.bulletDamage, tower.T, tower.range, tower_name, tower.desc);
	}
	
	document.getElementById('tower-panel-area').innerHTML = buildHTML;
}
function buildSystemPanelMenu(){
	panelSize = 60;
	panelCount = 10;
	scroll = 0;
	menuSliderDom.style["transform"] = "translateY(0px)";
	// build system panel
	buildHTML =	'<div class="btn d-block btn-sys btn-danger btn-hover" onclick="pauseGame()">' + lang[navLang]["ui_pause"] + '</div>' +
				'<div class="btn d-block btn-sys btn-success btn-hover" onclick="buildLeaderboard(\'easy\')">' + lang[navLang]["ui_leaderboard_easy"] + '</div>' +
				'<div class="btn d-block btn-sys btn-primary btn-hover" onclick="buildLeaderboard(\'hard\')">' + lang[navLang]["ui_leaderboard_hard"] + '</div>' +
				'<div class="btn d-block btn-sys btn-danger btn-hover" onclick="buildLeaderboard(\'realHard\')">' + lang[navLang]["ui_leaderboard_realHard"] + '</div>';
	
	document.getElementById('tower-panel-area').innerHTML = buildHTML;
}
function buildLeaderboard(diff) {
	panelSize = 124;
	panelCount = 10;
	scroll = 0;
	menuSliderDom.style["transform"] = "translateY(0px)";
	buildHTML = '';
	
	readLeaderboardData(diff, function(data){
		if(data.val() == null) {
			document.getElementById('tower-panel-area').innerHTML = '';
			return;
		}
		
		const keys = Object.keys(data.val());
		if(keys.length >= 10) {
			panelCount = keys.length;
			console.log(panelCount);
		}
		
		const scoreList = [];
		for(i in keys) {
			const name = keys[i];
			const life = data.val()[name].health;
			scoreList.push({name: name, life:life});
		}
		scoreList.sort(function(l,r){return l.life < r.life ? 1 : ((l.life == r.life) ? 0 : -1)});
		for(i in scoreList) {
			// build system panel
			buildHTML +=	'<div class="highscore-panel">' +
							'<p> ' + lang[navLang]["ui_name"] + ' <span class="float-right">' + scoreList[i].name +'</span></p>' +
							'<p> ' + lang[navLang]["ui_final_life"] + ' <span class="float-right">' + scoreList[i].life +'</span></p>' +
						'</div>';
			
			document.getElementById('tower-panel-area').innerHTML = buildHTML;
		}
	});
}
function giveAlert(msg) {
	document.getElementById("announce").innerHTML = msg;
	document.getElementById("announce").classList.remove("d-none");
	alertRemTime = 3000;
}

const menuSliderWrapDom = document.getElementById("tower-panel-area-wrap");
const menuSliderDom = document.getElementById("tower-panel-area");
var isDown = false;
var startY;

menuSliderWrapDom.addEventListener('mousedown', function(e){
	isDown = true;
	startY = e.pageY
});
menuSliderWrapDom.addEventListener('mouseleave', function(e){
	scroll = Math.max(Math.min(0, scroll), -panelSize * panelCount + document.body.offsetHeight - 400);
	menuSliderDom.style["transform"] = "translateY(" + scroll + "px)";
	isDown = false;
});
menuSliderWrapDom.addEventListener('mouseup', function(e){
	scroll = Math.max(Math.min(0, scroll), -panelSize * panelCount + document.body.offsetHeight - 400);
	menuSliderDom.style["transform"] = "translateY(" + scroll + "px)";
	isDown = false;
});
menuSliderWrapDom.addEventListener('mousemove', function(e){
	if(!isDown) return;
	e.preventDefault();
	scroll += (e.pageY - startY) * 2;
	scroll = Math.max(Math.min(20, scroll), -panelSize * panelCount + document.body.offsetHeight - 420);
	menuSliderDom.style["transform"] = "translateY(" + scroll + "px)";
	startY = e.pageY;
});
menuSliderWrapDom.addEventListener('wheel', function(e){
	e.preventDefault();
	scroll += e.wheelDeltaY;
	scroll = Math.max(Math.min(20, scroll), -panelSize * panelCount + document.body.offsetHeight - 420);
	menuSliderDom.style["transform"] = "translateY(" + scroll + "px)";
});

function showTowerTooltip(that, desc){
	const tooltip = document.createElement("div");
	const position = that.getBoundingClientRect();
	tooltip.classList.add("tooltip-custom");
	tooltip.classList.add("py-1");
	tooltip.classList.add("px-2");
	tooltip.style.top = position.top - 4 + "px";
	tooltip.style.left = position.left + 24 + "px";
	tooltip.innerHTML = desc;
	document.getElementById("tooltip-area").appendChild(tooltip);
}

function hideTowerTooltip() {
	document.getElementById("tooltip-area").innerHTML = "";
}

function setDiffEasy() {
	difficulty = 0.8
	document.getElementById("start").classList.remove("btn-primary");
	document.getElementById("start").classList.remove("btn-success");
	document.getElementById("start").classList.remove("btn-danger");
	document.getElementById("start").classList.add("btn-success");
}

function setDiffNoraml() {
	difficulty = 1
	document.getElementById("start").classList.remove("btn-primary");
	document.getElementById("start").classList.remove("btn-success");
	document.getElementById("start").classList.remove("btn-danger");
	document.getElementById("start").classList.add("btn-primary");
}

function setDiffHard() {
	difficulty = 1.2
	document.getElementById("start").classList.remove("btn-primary");
	document.getElementById("start").classList.remove("btn-success");
	document.getElementById("start").classList.remove("btn-danger");
	document.getElementById("start").classList.add("btn-danger");
}