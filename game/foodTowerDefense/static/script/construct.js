var constructingPlane = null;
var rangePlane = null;
var constructing = false;
var canConstruct = false;
var tower_name = null;
const mouse = new THREE.Vector2(1, 1);

document.getElementById('threeArea').addEventListener('mousemove', onMouseMove, false);
document.getElementById('threeArea').addEventListener('mousedown', onMouseDown, {capture:false});
document.oncontextmenu = document.body.oncontextmenu = function() {return false;}

function createConstPlane(scene) {
	if(constructingPlane == null) {
		const geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
		const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
		material.opacity = 0;
		material.transparent = true;
		constructingPlane = new THREE.Mesh(geometry, material);
		scene.add(constructingPlane);
		
		var cgeometry = new THREE.CircleGeometry(1, 32);
		var cmaterial = new THREE.MeshBasicMaterial({color: 0xffff00});
		cmaterial.opacity = 0;
		cmaterial.transparent = true;
		rangePlane = new THREE.Mesh(cgeometry, cmaterial);
		scene.add(rangePlane);
	}
}

function onMouseMove(e) {
	e.preventDefault();
	mouse.x = ((e.clientX - window.innerWidth + document.getElementById("threeArea").offsetWidth) / document.getElementById("threeArea").offsetWidth) * 2 - 1;
	mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
}

function toggleConstruct(_constructing){
	constructing = _constructing;
	if(constructing) {
		constructingPlane.material.opacity = 0.3;
		rangePlane.material.opacity = 0.3;
		
		rangePlane.scale.set(TowerInfo[tower_name].range, TowerInfo[tower_name].range, 1);
	} else {
		constructingPlane.material.opacity = 0;
		rangePlane.material.opacity = 0;
	}
}

function onMouseDown(e) {
	if(e.button == 2) {
		toggleConstruct(false);
		e.preventDefault();
		return;
	}
	
	rangePlane.material.opacity = 0;
	if(e.target.parentElement.id != "upgrade-panel-wrap") {
		const prevPop = document.getElementById("upgrade-panel-wrap");
		
		if(prevPop) {
			prevPop.parentElement.remove();
		}
	} else {
		return;
	}
	
	if(constructing && canConstruct) {
		if(TowerInfo[tower_name].price <= money) {
			money -= TowerInfo[tower_name].price;
			buildTower(tower_name, constructingPlane.position);
			toggleConstruct(false);
		} else {
			giveAlert(lang[navLang]["msg_no_money"]);
			toggleConstruct(false);
		}
	} else if (constructing) {
		// cancel construction
		giveAlert(lang[navLang]["msg_cant_build"]);
		toggleConstruct(false);
	} else {
		// search for built tower
		if(map[-constructingPlane.position.y + 5][constructingPlane.position.x + 5] == 2) {
			const targetTower = findTowerWithPosition(constructingPlane.position);
			createUpgradePop(targetTower, toScreenPosition(constructingPlane, camera));
			
			rangePlane.material.opacity = 0.3;
			rangePlane.scale.set(targetTower.range, targetTower.range, 1);
			
			rangePlane.position.x = constructingPlane.position.x;
			rangePlane.position.y = constructingPlane.position.y;
		}
	}
}

function setConstructPlane(position){
	
	const x = Math.floor(position.x + 0.5);
	const y = Math.floor(position.y + 0.5);
	
	if(map[-y + 5] == undefined || map[-y + 5][x + 5] == undefined) {
		canConstruct = false;return;
	}
	
	if(map[-y + 5][x + 5] == 0) {
		canConstruct = true;
		constructingPlane.material.color.g = 1;
		constructingPlane.material.color.r = 0;
	} else {
		canConstruct = false;
		constructingPlane.material.color.g = 0;
		constructingPlane.material.color.r = 1;
	}
	
	constructingPlane.position.x = x
	constructingPlane.position.y = y
	constructingPlane.position.z = 0;
	
	
	if(constructing) {
		rangePlane.position.x = x
		rangePlane.position.y = y
		rangePlane.position.z = -0.01;
	}
}

function constructTowerUI(string) {
	tower_name = string;
	toggleConstruct(true);
}

function buildTower(name, position) {
	
	window[TowerInfo[name].loadFunction](function(result) {
		const towerModel = result;
		
		towerModel.position.set(towerModel.position.x + position.x, towerModel.position.y + position.y, towerModel.position.z);
		const tower = new Tower(towerModel, name);
		tower.position = {x:position.x, y:position.y};
		
		map[-position.y + 5][position.x + 5] = 2;
	});
}

function destroyTower(tower) {
	checkRemoveTowerUI(tower);
	unitGroup.remove(tower.threeObject);
	towers.splice(towers.indexOf(tower), 1);
	map[-tower.position.y + 5][tower.position.x + 5] = 0;
}