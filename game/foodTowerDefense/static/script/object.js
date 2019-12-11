class Bullet {
	constructor(threeObject, at, targetObject, speed, damage, effect) {
		this.threeObject = threeObject;
		this.targetObject = targetObject;
		
		this.threeObject.position.set(at.x, at.y, at.z);
		
		this.speed = speed;
		this.damage = damage;
		this.effect = effect;
		
		this.accelFactor = 0;
		
		bullets.push(this);
		scene.add(this.threeObject);
	}
	
	homing() {
		if(this.targetObject == null) {
			scene.remove(threeObject);
			return;
		}
		try {
			var targetVector = this.targetObject.threeObject.position.clone().sub(this.threeObject.position);
			
			if(targetVector.length() < 0.5){
				this.effect(this.targetObject);
				
				this.targetObject.health -= Math.max(0, this.damage - this.targetObject.def);
				
				if(this.targetObject.remAttackCount > 0) {
					this.targetObject.remAttackCount -= 1;
					
					if(this.targetObject.remAttackCount == 0)
						this.targetObject.health -= Math.max(0, this.targetObject.addDamage - this.targetObject.def);
				}
				
				this.targetObject.health = Math.floor(this.targetObject.health * 100) / 100;
				
				if(this.targetObject.health <= 0)
					this.targetObject.killed = true;
				
				this.targetObject = null;
				scene.remove(this.threeObject);
				return;
			}
			
			const lenght = targetVector.length();
			this.accelFactor++;
			targetVector = targetVector.normalize();
			
			const speedFactor = this.speed + (this.accelFactor/ 1000);
			this.threeObject.position.add(targetVector.multiplyScalar(speedFactor));
			this.threeObject.rotation.x += 0.3 * speedFactor * 10;
			this.threeObject.rotation.y += 0.4 * speedFactor * 10;
			this.threeObject.rotation.z += 0.5 * speedFactor * 10;
		} catch (e) {
			console.log(e);
		}
	}
}

class Enemy {
	constructor(threeObject, wave) {
		this.maxHealth = Math.floor(wave.health * difficulty * 100) / 100;
		this.health = Math.floor(wave.health * difficulty * 100) / 100;
		this.threeObject = threeObject;
		this.threeObject.etObject = this;
		this.threeObject.position.set(wave.path[0].x, wave.path[0].y, wave.path[0].z);
		this.path = wave.path.slice(1);
		this.name = wave.name;
		this.speed = Math.floor((wave.speed * Math.max(0.8, difficulty/2 + 0.5)) * 100) / 100;
		this.damage = Math.floor(wave.damage * difficulty * 100) / 100;
		this.gold = wave.gold;
		this.invincible = wave.invincible;
		this.def = wave.def;
	
		this.timer = 0;
		this.spin = {x:0, y:0.05, z:0.025};
		this.killed = false;
		this.slow = 0;
		this.slowSize = 1;
		
		if(!this.invincible) {
			const healthBar = document.createElement("div");
			healthBar.classList.add("health-bar");
			this.healthBarDom = healthBar;
			const healthBarBar = document.createElement("div");
			this.healthBarBar = healthBarBar;
			healthBarBar.classList.add("health-bar-bar");
			healthBar.appendChild(healthBarBar);
			healthBarDom.appendChild(healthBar);
		}
		this.remAttackCount = 0;
		this.addDamage = 0;
		
		if(wave.big)
			this.threeObject.scale.multiplyScalar(1.3);
		
		enemies.push(this);
		unitGroup.add(this.threeObject);
	}
	
	getSpeed() {
		const slowFactor = Math.pow(Math.E, - this.slow / 1000 * this.slowSize);
		
		return this.speed * slowFactor;
	}
	
	move() {
		this.timer++;
		
		if(this.path.length > 0) {
			var targetVector = new THREE.Vector3(this.path[0].x - this.threeObject.position.x, this.path[0].y - this.threeObject.position.y, 0);
			
			if(targetVector.length() < 0.15) {
				this.path = this.path.slice(1);
			}
			
			targetVector = targetVector.normalize();
			this.threeObject.position.add(targetVector.multiplyScalar(this.getSpeed() / 50));
			
			if(this.healthBarDom) {
				const position = toScreenPosition(this.threeObject, camera);
				this.healthBarDom.style.top = position.y - 55 + "px";
				this.healthBarDom.style.left = position.x + 280 - 18 + "px";
				
				this.healthBarBar.style.width = (this.health * 100 / this.maxHealth) + "%";
			}
			if (this.slow > 0)
				this.slow--;
		
			this.threeObject.position.z = 0.5 * (Math.sin(Math.PI / 20 * this.timer) + 0.5);
			this.threeObject.rotation.x += this.spin.x;
			this.threeObject.rotation.y += this.spin.y;
			this.threeObject.rotation.z += this.spin.z;
		} else {
			this.health = 0;
			life = Math.floor((life - this.damage) * 100) / 100;
			
			if(life < 0) {
				gameOver();
			}
		}
	}
	
	isAllive() {
		if(this.health > 0) {
			return true;
		} else {
			if(this.killed) {
				const position = toScreenPosition(this.threeObject, camera);
				position.x -= 30;
				createText2D("+" + this.gold + " Gold", position);
				money += this.gold;
			}
			
			return false;
		}
	}
}

class Tower {
	constructor(threeObject, name) {
		this.threeObject = threeObject;
		this.threeObject.etObject = this;
		this.lastFire = 0;
		this.targetQuat = null;		
		this.bulletSpeed = TowerInfo[name].bulletSpeed
		this.bulletDamage = TowerInfo[name].bulletDamage;
		this.range = TowerInfo[name].range;
		this.firePeriod = TowerInfo[name].T;
		this.effect = TowerInfo[name].effect;
		this.mixer = null;
		this.clips = null;
		this.action = null;
		
		towers.push(this);
		unitGroup.add(this.threeObject);
		
		if(this.threeObject.animations != null) {
			this.mixer = new THREE.AnimationMixer(this.threeObject);
			this.clips = this.threeObject.animations;
			this.action = this.mixer.clipAction(this.clips[0]);
			this.action.play();
		}
		
		this.name = name;
	}
	anim(deltaTime) {
		if(this.threeObject.animations != null) {
			this.mixer.update(deltaTime / this.firePeriod / this.action._clip.duration * 1.6);
		}
	}
	
	fire(enemis) {
		if(this.targetQuat != null)
			this.threeObject.quaternion.slerp(this.targetQuat, 0.1);
		
		const now = Date.now();
		if(this.lastFire + this.firePeriod > now){
			return;
		}
		
		var minDist = 255;
		var minEnemy = null;
		
		for(enemy in enemis){
			if(enemis[enemy].invincible)
				continue;
			
			const dist = enemis[enemy].threeObject.position.distanceTo(this.threeObject.position);
			if(dist < this.range && minDist > dist) {
				minDist = dist;
				minEnemy = enemis[enemy];
			}
		}
		
		if(minEnemy != null) {
			const bullet = new Bullet(modelList[this.threeObject.bullet].clone(), this.threeObject.position, minEnemy, this.bulletSpeed, this.bulletDamage, this.effect);
			
			const targetVector = minEnemy.threeObject.position.clone().sub(this.threeObject.position).normalize();
			
			this.targetQuat = new THREE.Quaternion();
			this.targetQuat.setFromEuler(new THREE.Euler(this.threeObject.rotation.x , Math.atan2(targetVector.y, targetVector.x), this.threeObject.rotation.z, 'XYZ'));
			
			if(this.threeObject.animations != null) {
				this.action.play();
			}
			
			this.lastFire = now;
		} else {
			if(this.threeObject.animations != null) {
				this.action.stop();
			}
		}
	}
}