var bullets = [];
var enemies = [];
var towers = [];
var money = 10;
var level = 0;
var life = 100;
var spawnDone = false;
var paused = false;
var difficulty = 1;
var over = false;

function logicLoop(deltaTime) {
	updateBackground(deltaTime);
	bulletHoming();
	
	if(!over) {
		moveEnemy();
		fireTower();
		reconstructEnemyList();
		towerAnim(deltaTime);
		levelCheck();
	}
}

function updateBackground(deltaTime) {
	
	if(deltaTime > 4000) {
		for(index in backgroundModels){
			const model = backgroundModels[index];
			model.position.x = Math.random() * 30 - 15;
			model.position.y = Math.random() * 20 - 10;
		}
	} else {
		for(index in backgroundModels){
			const model = backgroundModels[index];
			model.position.y += (Math.random() + 1) * deltaTime / 1000 * (Math.floor(level / 5) / 2 + 1) * difficulty;
			model.rotation.y += 0.05 * deltaTime / 100; 
			model.rotation.z += 0.025 * deltaTime / 100; 
			
			if(model.position.y  > 10) {
				model.position.y = -10;
				model.position.x = Math.random() * 30 - 15;
			}
		}
	}
}

function bulletHoming(){
	const remains = [];
	
	for(bullet in bullets) {
		bullets[bullet].homing();
		
		if(bullets[bullet].targetObject != null) {
			remains.push(bullets[bullet]);
		}
	}
	
	bullets = remains
}
function moveEnemy(){
	for(enemy in enemies) {
		enemies[enemy].move();
	}
}

function fireTower() {
	for(tower in towers) {
		towers[tower].fire(enemies);
	}
}

function towerAnim(deltaTime) {
	for(tower in towers) {
		towers[tower].anim(deltaTime);
	}
}

function addEnemy(threeObject, wave) {
	const enemy = new Enemy(threeObject, wave);
	
	return enemy;
}

function reconstructEnemyList() {
	var alives = [];
	
	enemies.forEach(function(enemy){
		if(enemy.isAllive()) {
			alives.push(enemy);
		} else {
			if(enemy.healthBarDom)
				enemy.healthBarDom.remove();
			unitGroup.remove(enemy.threeObject);
			checkRemoveEnemyUI(enemy);
		}
	});
	
	enemies = alives;
}

function levelCheck(){
	if(spawnDone && enemies.length == 0) {
		spawnDone = false;
		startLevel();
	}
}

function startGame() {
	if(loadingComplete) {
		document.getElementById('start').remove();
		document.getElementById('diff0').remove();
		document.getElementById('diff1').remove();
		document.getElementById('diff2').remove();
		document.getElementById('startDim').remove();
		startLevel();
	}
}

function clear(){
	const name = prompt(lang[navLang]["msg_submit"], "Someone");
	
	const diffString = (difficulty == 0.8) ? "easy" : ((difficulty == 1) ? "hard" : "realHard");
	
	if(name)
		writeLeaderboardData(diffString, life, name);
	else
		alert(lang[navLang]["msg_not_recorded"]);
}

function gameOver() {
	over = true;
	alert(lang[navLang]["msg_defeat"]);
}

function startLevel(){
	level++;
	const waves = waveInfo[level - 1];
	
	if(level == 5)
		scene.background = new THREE.Color(0xffac7c);
	if(level == 10)
		scene.background = new THREE.Color(0xff8c4c);
	if(level == 15)
		scene.background = new THREE.Color(0xff6c2c);
	
	if(waves == undefined){
		// clear;
		clear();
		return;
	}
	
	displaySystemMessage("Wave " + level, "#00ff00");
	
	var levelCounter = 0;

	setTimeout(function() {
		const intervalId = setInterval(function(){
			if(paused)
				return;
			
			if(levelCounter == waves.maxCount) {
				spawnDone = true;
				clearInterval(intervalId);
				return;
			}
			
			for(idx in waves.wave) {
				const wave = waves.wave[idx];
				if(wave.timing <= levelCounter && (wave.timing + wave.count > levelCounter)) {
					addEnemy(modelList[wave.name].clone(), wave);
				}
			}
			
			levelCounter++;
		}, 1000);
	}, 5000);
}

function displaySystemMessage(msg, color) {
	const ingameText = document.createElement("div");
	const newId = "tid" + getUid();
	ingameText.setAttribute("id", newId);
	
	ingameText.classList.add("text-td");
	ingameText.classList.add("text-success");
	ingameText.style["font-size"] = "64px";
	ingameText.style.top = "calc(50% - 48px)";
	ingameText.style.left = "calc(50% - 109px)";
	ingameText.style.color = color + " !important";
	ingameText.style["animation-duration"] = "2s";
	
	ingameText.innerHTML = msg;
	document.getElementById("threeArea").appendChild(ingameText);
	
	setTimeout(function(){
		document.getElementById(newId).remove();
	}, 2000);
}

function toScreenPosition(obj, camera)
{
    var vector = new THREE.Vector3();

	const context = renderer.getContext();
	var widthHalf = 0.5 * context.canvas.width;
	var heightHalf = 0.5 * context.canvas.height;

	obj.updateMatrixWorld();
	vector.setFromMatrixPosition(obj.matrixWorld);
	vector.project(camera);
	
    vector.x = (vector.x * widthHalf) + widthHalf;
    vector.y = -(vector.y * heightHalf) + heightHalf;

    return { 
        x: vector.x,
        y: vector.y
    };

};

function getUid() {
	return Math.random() * 0xffffffffffffff;
}

function createText2D(msg, position) {
	const ingameText = document.createElement("div");
	const newId = "tid" + getUid();
	ingameText.setAttribute("id", newId);
	
	ingameText.classList.add("text-td");
	ingameText.classList.add("text-success");
	ingameText.style.top = position.y + "px";
	ingameText.style.left = position.x + "px";
	
	ingameText.innerHTML = msg;
	document.getElementById("threeArea").appendChild(ingameText);
	
	setTimeout(function(){
		document.getElementById(newId).remove();
	}, 1000);
}

function createUpgradePop(tower, position) {
	const prevPop = document.getElementById("upgrade-panel-wrap");
	
	if(prevPop) {
		prevPop.parentElement.remove();
	}
	
	const pop = document.createElement("div");
	
	pop.innerHTML = getTowerUpgradePopHTML(tower, position);
	
	document.getElementById("threeArea").appendChild(pop);
}

function findTowerWithPosition(position) {
	for(tower in towers) {
		if(towers[tower].position.x == position.x && towers[tower].position.y == position.y) {
			return towers[tower];
		}
	}
}

function upgradeTower(x, y) {
	const tower = findTowerWithPosition({x:x,y:y});
	const upgradeCost = TowerInfo[tower.name].upgradeCost;
	
	if(money < upgradeCost) {
		document.getElementById("upgrade-panel-wrap").parentElement.remove();
		createText2D("Not enough gold", toScreenPosition(tower.threeObject, camera));
		return;
	}
	
	money -= upgradeCost;
	destroyTower(tower);
	
	const towerLevel = parseInt(tower.name[tower.name.length - 1]) + 1;
	buildTower(tower.name.slice(0, tower.name.length - 1) + towerLevel, tower.position);
	
	document.getElementById("upgrade-panel-wrap").parentElement.remove();
}
function sellTower(x, y) {
	const tower = findTowerWithPosition({x:x,y:y});
	const returnGold = Math.floor(TowerInfo[tower.name].price * 0.6);
	createText2D("+" + returnGold + " Gold", toScreenPosition(tower.threeObject, camera));
	
	money += returnGold;
	destroyTower(tower);
	
	document.getElementById("upgrade-panel-wrap").parentElement.remove();
}
function pauseGame() {
	paused = !paused;
}