var totalModel = 0;
const loader = new THREE.GLTFLoader();
const backgroundModels = [];

function constructScene(scene) {
	
	//background (picking)
	const geometry = new THREE.PlaneGeometry(100, 100, 100, 100);
	const material = new THREE.MeshBasicMaterial({color: 0xffffff});
	backgroundGeometry = new THREE.Mesh(geometry, material);
	backgroundGeometry.position.set(0, 0, 0);
	material.opacity = 0;
	material.transparent = true;
	scene.add(backgroundGeometry);
	
	//background (displaying)
	//const geometry2 = new THREE.PlaneGeometry(100, 100, 1, 1);
	//const material2 = new THREE.MeshBasicMaterial({color: 0xffffff});
	//const backgroundGeometry2 = new THREE.Mesh(geometry2, material2);
	//backgroundGeometry2.receiveShadow = true;
	//backgroundGeometry2.position.set(0, 0, -2);
	//scene.add(backgroundGeometry2);
	
	//background (panel)
	const geometry2 = new THREE.PlaneGeometry(1, 1, 1, 1);
	const scaleFactor = 1.1009;
	const material2 = new THREE.MeshBasicMaterial({color: 0xffffff});
	const material3 = new THREE.MeshBasicMaterial({color: 0xffaabb});
	const material4 = new THREE.MeshBasicMaterial({color: 0xaaffbb});
	
	for(i = 0; i < 11; i++){
		for(j = 0; j < 11; j++) {
			var targetMat = material2;
			if(map[10-j][i] == 1) {
				targetMat = material3;
			} else if(map[10-j][i] == -1) {
				targetMat = material4;
			}
			
			const backgroundGeometry2 = new THREE.Mesh(geometry2, targetMat);
			
			backgroundGeometry2.scale.set(scaleFactor, scaleFactor, 1);
			backgroundGeometry2.position.set((i-5)*scaleFactor, (j-5)*scaleFactor, -1);
			scene.add(backgroundGeometry2);
		}
	}
			
	// ambient light
	const light = new THREE.AmbientLight(0x606060);
	scene.add(light);
	
	// dir light
	const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
	directionalLight1.position.set(0,100,0);
	directionalLight1.target.position.set(10, 30, -50);
	scene.add(directionalLight1);
	scene.add(directionalLight1.target);
	
	//hemi light
	const hemiLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
	scene.add(hemiLight);	
	
	const renderer = new THREE.WebGLRenderer({antialias:true});
			
	window.addEventListener('resize', function(){
		camera.aspect = document.getElementById("threeArea").offsetWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(document.getElementById("threeArea").offsetWidth, window.innerHeight);
	}, false);
	
	return renderer;
}

function checkAllLoad(){
	console.log(( Object.keys(modelList).length / totalModel * 100) + '% loaded');
	if(Object.keys(modelList).length == totalModel) {
		loadingComplete = true;
		document.getElementById('start').disabled = false;
		
		for(model in backgroundModels){
			backgroundModels[model].position.set(Math.random() * 30 - 15, Math.random() * 20 - 10, -2.5);
			backgroundModels[model].rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
		}
	}
}

function loadAll(list) {
	loadOnion(list);
	loadFrypan(list);
	loadApple(list);
	loadGold(list);
	loadSpatula(list);
	loadKecap(list);
	loadKiwi(list);
	loadPumpkin(list);
	loadBlender(list);
	loadRoller(list);
	loadMushroom(list);
	loadPotato(list);
	loadTomato(list);
	loadLemon(list);
	loadIndicator(list);
	loadGrill(list);
	loadCheese(list);
	loadCarrot(list);
	
	loadEggTower(function(){});
	loadGoldTower(function(){});
	loadHoduckTower(function(){});
	loadBurgerTower(function(){});
	loadPizzaTower(function(){});
	loadOrangeTower(function(){});
	loadSteakTower(function(){});
}

function loadIndicator(list) {
	totalModel++;
	const geometry = new THREE.SphereGeometry();
	const material = new THREE.MeshBasicMaterial({color: 0x7f7bfc});
	const indicator = new THREE.Mesh(geometry, material);
	indicator.scale.set(0.3, 0.3, 0.3);
	
	list.indicator = indicator;
}

function loadCarrot(list) {
	loadCommon("carrot", list, function(glb){
		glb.scene.children[2].scale.set(0.25, 0.25, 0.25);
		glb.scene.children[2].rotation.set(Math.PI / 3, 0, 0);
		
		return glb.scene.children[2];
	});
}

function loadOnion(list) {
	loadCommon("onion", list, function(glb){
		glb.scene.children[2].scale.set(0.5, 0.5, 0.5);
		glb.scene.children[2].rotation.set(Math.PI / 3, 0, 0);
		
		return glb.scene.children[2];
	});
}

function loadCheese(list) {
	loadCommon("cheese", list, function(glb){
		glb.scene.children[2].scale.set(0.4, 0.4, 0.4);
		glb.scene.children[2].rotation.set(Math.PI / 3, 0, 0);
		
		return glb.scene.children[2];
	});
}

function loadGrill(list) {
	loadCommon("grill", list, function(glb){
		glb.scene.children[2].scale.set(0.3, 0.3, 0.3);
		glb.scene.children[2].rotation.set(Math.PI / 2, 0, 0);

		return glb.scene.children[2];
	});
}

function loadLemon(list) {
	loadCommon("lemon", list, function(glb){
		glb.scene.children[2].scale.set(0.45, 0.45, 0.45);
		glb.scene.children[2].rotation.set(Math.PI / 3, 0, 0);
		
		return glb.scene.children[2];
	});
}

function loadTomato(list) {
	loadCommon("tomato", list, function(glb){
		glb.scene.children[2].scale.set(0.5, 0.5, 0.5);
		glb.scene.children[2].rotation.set(Math.PI / 3, 0, 0);
		
		return glb.scene.children[2];
	});
}

function loadPotato(list) {
	loadCommon("potato", list, function(glb){
		glb.scene.children[2].scale.set(0.5, 0.5, 0.5);
		glb.scene.children[2].rotation.set(Math.PI / 3, 0, 0);
		
		return glb.scene.children[2];
	});
}

function loadFrypan(list) {
	loadCommon("frypan", list, function(glb){
		glb.scene.children[2].scale.set(0.3, 0.3, 0.3);
		glb.scene.children[2].rotation.set(Math.PI/2, 0, 0);
		
		return glb.scene.children[2];
	});
}

function loadApple(list) {
	loadCommon("apple", list, function(glb){
		glb.scene.children[2].scale.set(0.5, 0.5, 0.5);
		glb.scene.children[2].rotation.set(Math.PI/2, 0, 0);
		
		return glb.scene.children[2];
	});
}

function loadGold(list) {
	loadCommon("gold", list, function(glb){
		glb.scene.children[1].scale.set(0.4, 0.4, 0.4);
		glb.scene.children[1].rotation.set(Math.PI/2, 0, 0);
		
		return glb.scene.children[1];
	});
}

function loadSpatula(list) {
	loadCommon("spatula", list, function(glb){
		glb.scene.children[2].scale.set(0.15, 0.3, 0.3);
		glb.scene.children[2].rotation.set(Math.PI/2, 0, 0);
		
		return glb.scene.children[2];
	});
}

function loadKecap(list) {
	loadCommon("kecap", list, function(glb){
		glb.scene.children[2].scale.set(0.1, 0.1, 0.1);
		glb.scene.children[2].rotation.set(Math.PI/2, 0, 0);
		
		return glb.scene.children[2];
	});
}

function loadRoller(list) {
	loadCommon("roller", list, function(glb){
		glb.scene.children[2].scale.set(0.1, 0.1, 0.1);
		glb.scene.children[2].rotation.set(Math.PI/2, 0, 0);
		
		return glb.scene.children[2];
	});
}

function loadBlender(list) {
	loadCommon("blender", list, function(glb){
		glb.scene.children[2].scale.set(0.1, 0.1, 0.1);
		glb.scene.children[2].rotation.set(Math.PI/2, 0, 0);
		
		return glb.scene.children[2];
	});
}

function loadKiwi(list) {
	loadCommon("kiwi", list, function(glb){
		glb.scene.children[2].scale.set(0.4, 0.4, 0.4);
		glb.scene.children[2].rotation.set(Math.PI/2, 0, 0);
		
		return glb.scene.children[2];
	});
}

function loadPumpkin(list) {
	loadCommon("pumpkin", list, function(glb){
		glb.scene.children[2].scale.set(0.35, 0.35, 0.35);
		glb.scene.children[2].rotation.set(Math.PI/2, 0, 0);
		
		return glb.scene.children[2];
	});
}

function loadMushroom(list) {
	loadCommon("mushroom", list, function(glb){
		glb.scene.children[2].scale.set(0.35, 0.35, 0.35);
		glb.scene.children[2].rotation.set(Math.PI/2, 0, 0);
		
		return glb.scene.children[2];
	});
}

function loadEggTower(callback) {
	loadInstancingCommon("tower_egg", function(glb){
		glb.scene.children[2].animations = null; //glb.animations;
		glb.scene.children[2].bullet = "frypan";
		glb.scene.children[2].scale.set(0.45, 0.45, 0.45);
		glb.scene.children[2].position.set(0, 0, 0);
		glb.scene.children[2].rotation.set(Math.PI/2, 0, 0);
		
		return glb.scene.children[2];
	}, callback);
}

function loadGoldTower(callback) {
	loadInstancingCommon("tower_gold", function(glb){
		glb.scene.children[2].animations = null;
		glb.scene.children[2].bullet = "gold";
		glb.scene.children[2].scale.set(0.15, 0.15, 0.15);
		glb.scene.children[2].position.set(0, 0, 0);
		glb.scene.children[2].rotation.set(Math.PI/2, 0, 0);
		
		return glb.scene.children[2];
	}, callback);
}

function loadHoduckTower(callback) {
	loadInstancingCommon("tower_hoduck", function(glb){
		glb.scene.children[2].animations = null;
		glb.scene.children[2].bullet = "spatula";
		glb.scene.children[2].scale.set(0.4, 0.4, 0.4);
		glb.scene.children[2].position.set(0, 0, 0);
		glb.scene.children[2].rotation.set(Math.PI/2, 0, 0);
		
		return glb.scene.children[2];
	}, callback);
}

function loadBurgerTower(callback) {
	loadInstancingCommon("tower_burger", function(glb){
		glb.scene.children[0].animations = glb.animations;
		glb.scene.children[0].bullet = "kecap";
		glb.scene.children[0].scale.set(0.4, 0.4, 0.4);
		glb.scene.children[0].position.set(0, 0, 0);
		glb.scene.children[0].rotation.set(Math.PI/2, 0, 0);
		
		return glb.scene.children[0];
	}, callback);
}

function loadOrangeTower(callback) {
	loadInstancingCommon("tower_orange", function(glb){
		glb.scene.children[2].animations = null;
		glb.scene.children[2].bullet = "blender";
		glb.scene.children[2].scale.set(0.4, 0.4, 0.4);
		glb.scene.children[2].position.set(0, 0, 0);
		glb.scene.children[2].rotation.set(Math.PI/2, 0, 0);
		
		return glb.scene.children[2];
	}, callback);
}

function loadPizzaTower(callback) {
	loadInstancingCommon("tower_pizza", function(glb){
		glb.scene.children[2].animations = null; //glb.animations;
		glb.scene.children[2].bullet = "roller";
		glb.scene.children[2].scale.set(0.45, 0.45, 0.45);
		glb.scene.children[2].position.set(0, 0, 0);
		glb.scene.children[2].rotation.set(Math.PI/2, 0, 0);
		
		return glb.scene.children[2];
	}, callback);
}

function loadSteakTower(callback) {
	loadInstancingCommon("tower_steak", function(glb){
		glb.scene.children[2].animations = glb.animations;
		glb.scene.children[2].bullet = "grill";
		glb.scene.children[2].scale.set(0.25, 0.25, 0.25);
		glb.scene.children[2].position.set(0, 0, 0);
		glb.scene.children[2].rotation.set(Math.PI/2, 0, 0);
		
		return glb.scene.children[2];
	}, callback);
}

function loadCommon(name, list, settingFunction){
	totalModel++;
	
	loader.load(
		'/game/foodTowerDefense/static/models/' + name + '.glb',
		function (glb) {
			list[name] = settingFunction(glb);
			
			// Add to background
			for(i = 0; i < 8; i++) {
				const back = list[name].clone();
				scene.add(back);
				backgroundModels.push(back);
			}
			
			checkAllLoad();
		},
		function (success) {
		},
		function (error) {
			console.log(error);
		}
	);
}

function loadInstancingCommon(name, settingFunction, callback){
	loader.load(
		'/game/foodTowerDefense/static/models/' + name + '.glb',
		function (glb) {
			callback(settingFunction(glb));
		},
		function (success) {
		},
		function (error) {
			console.log(error);
		}
	);
}