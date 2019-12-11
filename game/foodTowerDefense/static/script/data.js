var navLang;

if (navigator.languages && navigator.languages.length) {
	navLang = navigator.languages[0];
} else {
	navLang = navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
}

navLang = navLang.split("-")[0];

const lang = {
	en:{
		tower_egg_name : "Egg Tower",
		tower_gold_name : "Gold Tower",
		tower_hoduck_name : "Pancake Tower",
		tower_burger_name : "Burger Tower",
		tower_orange_name : "Orange Tower",
		tower_pizza_name : "Pizza Tower",
		tower_steak_name : "Steak Tower",
		msg_new_record : "Highscore!",
		ui_price : "Price",
		ui_damage : "Damage",
		ui_rate : "Fire Rate",
		ui_range : "Range",
		ui_build : "Build",
		ui_money : "Money",
		ui_life : "Life",
		ui_setting : "Setting",
		ui_easy : "Easy",
		ui_hard : "Hard",
		ui_realHard : "Really Hard",
		start : "Start",
		ui_upgrade : "Upgrade",
		ui_sell : "Sell",
		ui_speed : "Speed",
		ui_gold : "Gold",
		ui_def : "Def",
		ui_bspeed : "Bullet Speed",
		ui_pause : "Pause",
		ui_leaderboard_easy : "LeaderBoard(easy)",
		ui_leaderboard_hard : "LeaderBoard(hard)",
		ui_leaderboard_realHard : "LeaderBoard(really hard)",
		ui_name : "Name",
		ui_final_life : "Life",
		tower_gold_desc1 : "Attacks give you random gold between 0-2.",
		tower_gold_desc2 : "Attacks give you random gold between 0-4.",
		tower_gold_desc3 : "Attacks give you random gold between 0-6.",
		tower_gold_desc4 : "Attacks give you random gold between 0-7.",
		tower_gold_desc5 : "Attacks give you random gold between 0-8.",
		tower_hoduck_desc1 : "Enemy is slowed slightly for 3 seconds.",
		tower_hoduck_desc2 : "Enemy is slowed slightly for 4 seconds.",
		tower_hoduck_desc3 : "Enemy is slowed for 5 seconds.",
		tower_hoduck_desc4 : "Enemy is slowed for 5 seconds.",
		tower_hoduck_desc5 : "Enemy is slowed for 5 seconds.",
		tower_pizza_desc1 : "Enemy will receive 8 points of extra damage after 10 hits",
		tower_pizza_desc2 : "Enemy will receive 12 points of extra damage after 8 hits",
		tower_pizza_desc3 : "Enemy will receive 16 points of extra damage after 6 hits",
		tower_pizza_desc4 : "Enemy will receive 20 points of extra damage after 5 hits",
		tower_pizza_desc5 : "Enemy will receive 25 points of extra damage after 4 hits",
		msg_submit : "Submit Record",
		msg_not_recorded : "Record does not submitted",
		msg_defeat : "Game Over",
		msg_no_money : "Not enough money",
		msg_cant_build : "Cannot build tower"
	},
	ko:{
		tower_egg_name : "후라이 타워",
		tower_gold_name : "골드 타워",
		tower_hoduck_name : "호떡 타워",
		tower_burger_name : "햄버거 타워",
		tower_orange_name : "감귤 타워",
		tower_pizza_name : "피자 타워",
		tower_steak_name : "스테이크 타워",
		msg_new_record : "최고 기록 갱신!",
		ui_price : "가격",
		ui_damage : "데미지",
		ui_rate : "연사력",
		ui_range : "사거리",
		ui_build : "설치",
		ui_money : "예산",
		ui_life : "Life",
		ui_setting : "설정",
		ui_easy : "쉬움",
		ui_hard : "어려움",
		ui_realHard : "매우 어려움",
		start : "Start",
		ui_upgrade : "업그레이드",
		ui_sell : "판매",
		ui_speed : "속도",
		ui_gold : "골드",
		ui_def : "방어력",
		ui_bspeed : "탄환 속도",
		ui_pause : "일시중지",
		ui_leaderboard_easy : "리더보드(쉬움)",
		ui_leaderboard_hard : "리더보드(어려움)",
		ui_leaderboard_realHard : "리더보드(매우 어려움)",
		ui_name : "이름",
		ui_final_life : "최종 Life",
		tower_gold_desc1 : "공격을 하면 0-2 사이의 랜덤 골드를 지급합니다.",
		tower_gold_desc2 : "공격을 하면 0-4 사이의 랜덤 골드를 지급합니다.",
		tower_gold_desc3 : "공격을 하면 0-6 사이의 랜덤 골드를 지급합니다.",
		tower_gold_desc4 : "공격을 하면 0-7 사이의 랜덤 골드를 지급합니다.",
		tower_gold_desc5 : "공격을 하면 0-8 사이의 랜덤 골드를 지급합니다.",
		tower_hoduck_desc1 : "공격당한 적이 약 3초간 적이 조금 둔화됩니다.",
		tower_hoduck_desc2 : "공격당한 적이 약 4초간 적이 조금 둔화됩니다.",
		tower_hoduck_desc3 : "공격당한 적이 약 5초간 적이 조금 둔화됩니다.",
		tower_hoduck_desc4 : "공격당한 적이 약 5초간 적이 조금 둔화됩니다.",
		tower_hoduck_desc5 : "공격당한 적이 약 5초간 적이 조금 둔화됩니다.",
		tower_pizza_desc1 : "이 공격 이후에 10번의 공격을 추가로 가하면 8의 피해를 줍니다.",
		tower_pizza_desc2 : "이 공격 이후에 8번의 공격을 추가로 가하면 12의 피해를 줍니다.",
		tower_pizza_desc3 : "이 공격 이후에 6번의 공격을 추가로 가하면 16의 피해를 줍니다.",
		tower_pizza_desc4 : "이 공격 이후에 5번의 공격을 추가로 가하면 20의 피해를 줍니다.",
		tower_pizza_desc5 : "이 공격 이후에 4번의 공격을 추가로 가하면 25의 피해를 줍니다.",
		msg_submit : "기록 제출",
		msg_not_recorded : "기록을 제출하지 않았습니다.",
		msg_defeat : "게임오버",
		msg_no_money : "예산이 부족합니다.",
		msg_cant_build : "타워를 건설할 수 없는 곳입니다."
		
	}
}

const TowerInfo = {
	tower_egg1:{loadFunction:"loadEggTower", forSale:true, image:'/images/tower_1.png', name:lang[navLang]["tower_egg_name"], price:5, upgradeCost:5, bulletSpeed:0.05, bulletDamage:2, range:3, T:2000, animDuration:1, effect: function(obj){
		
	}},
	tower_egg2:{loadFunction:"loadEggTower", forSale:false, image:'', name:lang[navLang]["tower_egg_name"], price:10, upgradeCost:7, bulletSpeed:0.06, bulletDamage:4, range:3, T:1600, animDuration:1, effect: function(obj){
		
	}},
	tower_egg3:{loadFunction:"loadEggTower", forSale:false, image:'', name:lang[navLang]["tower_egg_name"], price:17, upgradeCost:10, bulletSpeed:0.07, bulletDamage:7, range:3.5, T:1400, animDuration:1, effect: function(obj){
		
	}},
	tower_egg4:{loadFunction:"loadEggTower", forSale:false, image:'', name:lang[navLang]["tower_egg_name"], price:27, upgradeCost:13, bulletSpeed:0.08, bulletDamage:10, range:4, T:1200, animDuration:1, effect: function(obj){
		
	}},
	tower_egg5:{loadFunction:"loadEggTower", forSale:false, image:'', name:lang[navLang]["tower_egg_name"], price:40, upgradeCost:0, bulletSpeed:0.09, bulletDamage:14, range:4, T:1100, animDuration:1, effect: function(obj){
		
	}},
	tower_gold1:{loadFunction:"loadGoldTower", forSale:true, image:'/images/tower_2.png', name:lang[navLang]["tower_gold_name"], price:8, upgradeCost:9, bulletSpeed:0.05, bulletDamage:0, range:2, T:7000, animDuration:1, effect: function(obj){
		const gold = Math.floor(Math.random() * 3);
		createText2D("+" + gold + " Gold", toScreenPosition(obj.threeObject, camera));
		money += gold;
	}, desc:lang[navLang]["tower_gold_desc1"]},
	tower_gold2:{loadFunction:"loadGoldTower", forSale:false, image:'/images/tower_2.png', name:lang[navLang]["tower_gold_name"], price:8, upgradeCost:10, bulletSpeed:0.05, bulletDamage:0, range:2, T:6000, animDuration:1, effect: function(obj){
		const gold = Math.floor(Math.random() * 5);
		createText2D("+" + gold + " Gold", toScreenPosition(obj.threeObject, camera));
		money += gold;
	}, desc:lang[navLang]["tower_gold_desc2"]},
	tower_gold3:{loadFunction:"loadGoldTower", forSale:false, image:'/images/tower_2.png', name:lang[navLang]["tower_gold_name"], price:8, upgradeCost:11, bulletSpeed:0.06, bulletDamage:0, range:3, T:5000, animDuration:1, effect: function(obj){
		const gold = Math.floor(Math.random() * 7);
		createText2D("+" + gold + " Gold", toScreenPosition(obj.threeObject, camera));
		money += gold;
	}, desc:lang[navLang]["tower_gold_desc3"]},
	tower_gold4:{loadFunction:"loadGoldTower", forSale:false, image:'/images/tower_2.png', name:lang[navLang]["tower_gold_name"], price:8, upgradeCost:12, bulletSpeed:0.06, bulletDamage:0, range:3.5, T:4000, animDuration:1, effect: function(obj){
		const gold = Math.floor(Math.random() * 8);
		createText2D("+" + gold + " Gold", toScreenPosition(obj.threeObject, camera));
		money += gold;
	}, desc:lang[navLang]["tower_gold_desc4"]},
	tower_gold5:{loadFunction:"loadGoldTower", forSale:false, image:'/images/tower_2.png', name:lang[navLang]["tower_gold_name"], price:8, upgradeCost:0, bulletSpeed:0.07, bulletDamage:0, range:4, T:3000, animDuration:1, effect: function(obj){
		const gold = Math.floor(Math.random() * 9);
		createText2D("+" + gold + " Gold", toScreenPosition(obj.threeObject, camera));
		money += gold;
	}, desc:lang[navLang]["tower_gold_desc5"]},
	tower_hoduck1:{loadFunction:"loadHoduckTower", forSale:true, image:'/images/tower_4.png', name:lang[navLang]["tower_hoduck_name"], price:4, upgradeCost:5, bulletSpeed:0.05, bulletDamage:1, range:2.5, T:1500, animDuration:1, effect: function(obj){
		if(obj.slow < 180)
			obj.slow = 180;
		
		if(obj.slowSize < 2)
			obj.slowSize = 2;
	}, desc:lang[navLang]["tower_hoduck_desc1"]},
	tower_hoduck2:{loadFunction:"loadHoduckTower", forSale:false, image:'/images/tower_4.png', name:lang[navLang]["tower_hoduck_name"], price:9, upgradeCost:6, bulletSpeed:0.075, bulletDamage:2, range:3, T:1300, animDuration:1, effect: function(obj){
		if(obj.slow < 240)
			obj.slow = 240;
		
		if(obj.slowSize < 3)
			obj.slowSize = 3;
	}, desc:lang[navLang]["tower_hoduck_desc2"]},
	tower_hoduck3:{loadFunction:"loadHoduckTower", forSale:false, image:'/images/tower_4.png', name:lang[navLang]["tower_hoduck_name"], price:15, upgradeCost:7, bulletSpeed:0.1, bulletDamage:3, range:3, T:1150, animDuration:1, effect: function(obj){
		if(obj.slow < 300)
			obj.slow = 300;
		
		if(obj.slowSize < 3.5)
			obj.slowSize = 3.5;
	}, desc:lang[navLang]["tower_hoduck_desc3"]},
	tower_hoduck4:{loadFunction:"loadHoduckTower", forSale:false, image:'/images/tower_4.png', name:lang[navLang]["tower_hoduck_name"], price:22, upgradeCost:8, bulletSpeed:0.125, bulletDamage:4, range:3, T:1000, animDuration:1, effect: function(obj){
		if(obj.slow < 300)
			obj.slow = 300;
		
		if(obj.slowSize < 4)
			obj.slowSize = 4;
	}, desc:lang[navLang]["tower_hoduck_desc4"]},
	tower_hoduck5:{loadFunction:"loadHoduckTower", forSale:false, image:'/images/tower_4.png', name:lang[navLang]["tower_hoduck_name"], price:30, upgradeCost:0, bulletSpeed:0.15, bulletDamage:5, range:3, T:900, animDuration:1, effect: function(obj){
		if(obj.slow < 300)
			obj.slow = 300;
		
		if(obj.slowSize < 4.5)
			obj.slowSize = 4.5;
	}, desc:lang[navLang]["tower_hoduck_desc5"]},
	tower_burger1:{loadFunction:"loadBurgerTower", forSale:true, image:'/images/tower_3.png', name:lang[navLang]["tower_burger_name"], price:8, upgradeCost:10, bulletSpeed:0.05, bulletDamage:0.5, range:4, T:350, animDuration:1, effect: function(obj){
		
	}},
	tower_burger2:{loadFunction:"loadBurgerTower", forSale:false, image:'/images/tower_3.png', name:lang[navLang]["tower_burger_name"], price:18, upgradeCost:12, bulletSpeed:0.1, bulletDamage:1, range:4, T:325, animDuration:1, effect: function(obj){
		
	}},
	tower_burger3:{loadFunction:"loadBurgerTower", forSale:false, image:'/images/tower_3.png', name:lang[navLang]["tower_burger_name"], price:30, upgradeCost:15, bulletSpeed:0.125, bulletDamage:1.5, range:4, T:300, animDuration:1, effect: function(obj){
		
	}},
	tower_burger4:{loadFunction:"loadBurgerTower", forSale:false, image:'/images/tower_3.png', name:lang[navLang]["tower_burger_name"], price:45, upgradeCost:15, bulletSpeed:0.15, bulletDamage:2, range:4, T:275, animDuration:1, effect: function(obj){
		
	}},
	tower_burger5:{loadFunction:"loadBurgerTower", forSale:false, image:'/images/tower_3.png', name:lang[navLang]["tower_burger_name"], price:60, upgradeCost:0, bulletSpeed:0.175, bulletDamage:2.5, range:4, T:250, animDuration:1, effect: function(obj){
		
	}},
	tower_orange1:{loadFunction:"loadOrangeTower", forSale:true, image:'/images/tower_5.png', name:lang[navLang]["tower_orange_name"], price:10, upgradeCost:10, bulletSpeed:0.025, bulletDamage:10, range:6, T:2750, animDuration:1, effect: function(obj){
		
	}},
	tower_orange2:{loadFunction:"loadOrangeTower", forSale:false, image:'/images/tower_5.png', name:lang[navLang]["tower_orange_name"], price:20, upgradeCost:10, bulletSpeed:0.03, bulletDamage:20, range:7, T:2350, animDuration:1, effect: function(obj){
		
	}},
	tower_orange3:{loadFunction:"loadOrangeTower", forSale:false, image:'/images/tower_5.png', name:lang[navLang]["tower_orange_name"], price:30, upgradeCost:15, bulletSpeed:0.035, bulletDamage:30, range:8, T:2000, animDuration:1, effect: function(obj){
		
	}},
	tower_orange4:{loadFunction:"loadOrangeTower", forSale:false, image:'/images/tower_5.png', name:lang[navLang]["tower_orange_name"], price:45, upgradeCost:15, bulletSpeed:0.04, bulletDamage:40, range:9, T:1900, animDuration:1, effect: function(obj){
		
	}},
	tower_orange5:{loadFunction:"loadOrangeTower", forSale:false, image:'/images/tower_5.png', name:lang[navLang]["tower_orange_name"], price:60, upgradeCost:0, bulletSpeed:0.05, bulletDamage:50, range:10, T:1600, animDuration:1, effect: function(obj){
		
	}},
	tower_pizza1:{loadFunction:"loadPizzaTower", forSale:true, image:'/images/tower_6.png', name:lang[navLang]["tower_pizza_name"], price:10, upgradeCost:10, bulletSpeed:0.125, bulletDamage:0, range:3, T:1500, animDuration:1, effect: function(obj){
		if(obj.remAttackCount == 0) {
			obj.remAttackCount = 11;
			obj.addDamage = 8;
		}
		
	}, desc:lang[navLang]["tower_pizza_desc1"]},
	tower_pizza2:{loadFunction:"loadPizzaTower", forSale:false, image:'/images/tower_6.png', name:lang[navLang]["tower_pizza_name"], price:20, upgradeCost:10, bulletSpeed:0.15, bulletDamage:0, range:3, T:1250, animDuration:1, effect: function(obj){
		if(obj.remAttackCount >= 9 || obj.remAttackCount == 0) {
			obj.remAttackCount = 9;
		}
		if(obj.addDamage < 12)
			obj.addDamage = 12;
		
	}, desc:lang[navLang]["tower_pizza_desc2"]},
	tower_pizza3:{loadFunction:"loadPizzaTower", forSale:false, image:'/images/tower_6.png', name:lang[navLang]["tower_pizza_name"], price:30, upgradeCost:10, bulletSpeed:0.15, bulletDamage:0, range:4, T:1000, animDuration:1, effect: function(obj){
		if(obj.remAttackCount >= 7 || obj.remAttackCount == 0) {
			obj.remAttackCount = 7;
		}
		if(obj.addDamage < 16)
			obj.addDamage = 16;
		
	}, desc:lang[navLang]["tower_pizza_desc3"]},
	tower_pizza4:{loadFunction:"loadPizzaTower", forSale:false, image:'/images/tower_6.png', name:lang[navLang]["tower_pizza_name"], price:40, upgradeCost:10, bulletSpeed:0.15, bulletDamage:0, range:5, T:900, animDuration:1, effect: function(obj){
		if(obj.remAttackCount >= 6 || obj.remAttackCount == 0) {
			obj.remAttackCount = 6;
		}
		if(obj.addDamage < 20)
			obj.addDamage = 20;
		
	}, desc:lang[navLang]["tower_pizza_desc4"]},
	tower_pizza5:{loadFunction:"loadPizzaTower", forSale:false, image:'/images/tower_6.png', name:lang[navLang]["tower_pizza_name"], price:50, upgradeCost:0, bulletSpeed:0.15, bulletDamage:0, range:5, T:800, animDuration:1, effect: function(obj){
		if(obj.remAttackCount >= 5 || obj.remAttackCount == 0) {
			obj.remAttackCount = 5;
		}
		if(obj.addDamage < 25)
			obj.addDamage = 25;
		
	}, desc:lang[navLang]["tower_pizza_desc5"]},
	tower_steak1:{loadFunction:"loadSteakTower", forSale:true, image:'/images/tower_7.png', name:lang[navLang]["tower_steak_name"], price:15, upgradeCost:15, bulletSpeed:0.1, bulletDamage:2, range:3, T:550, animDuration:1, effect: function(obj){
		
	}},
	tower_steak2:{loadFunction:"loadSteakTower", forSale:false, image:'/images/tower_7.png', name:lang[navLang]["tower_steak_name"], price:30, upgradeCost:15, bulletSpeed:0.125, bulletDamage:3, range:3, T:500, animDuration:1, effect: function(obj){
		
	}},
	tower_steak3:{loadFunction:"loadSteakTower", forSale:false, image:'/images/tower_7.png', name:lang[navLang]["tower_steak_name"], price:45, upgradeCost:15, bulletSpeed:0.15, bulletDamage:4, range:3, T:450, animDuration:1, effect: function(obj){
		
	}},
	tower_steak4:{loadFunction:"loadSteakTower", forSale:false, image:'/images/tower_7.png', name:lang[navLang]["tower_steak_name"], price:60, upgradeCost:15, bulletSpeed:0.175, bulletDamage:5, range:4, T:400, animDuration:1, effect: function(obj){
		
	}},
	tower_steak5:{loadFunction:"loadSteakTower", forSale:false, image:'/images/tower_7.png', name:lang[navLang]["tower_steak_name"], price:75, upgradeCost:0, bulletSpeed:0.2, bulletDamage:6, range:4, T:350, animDuration:1, effect: function(obj){
		
	}}
};

const waveInfo = [
	{maxCount:15, wave:[
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:0, count:1, path:[{x:-3,y:5},{x:-3,y:-3},{x:0,y:-3},{x:0,y:-1},{x:-1,y:-1},{x:-1,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:2,y:-3},{x:3,y:-3},{x:3,y:-5}]},
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:4, count:1, path:[{x:3,y:-5},{x:3,y:-3},{x:2,y:-3},{x:2,y:-1},{x:4,y:-1},{x:4,y:3},{x:-1,y:3},{x:-1,y:-1},{x:0,y:-1},{x:0,y:-3},{x:-3,y:-3},{x:-3,y:5}]},
			
			{name:"onion", invincible:false, big:false, gold: 1, damage:1, health:3, def:0, speed:1.5, timing:0, count:10, path:[{x:-3,y:5},{x:-3,y:-3},{x:0,y:-3},{x:0,y:-1},{x:-1,y:-1},{x:-1,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:2,y:-3},{x:3,y:-3},{x:3,y:-5}]},
			{name:"apple", invincible:false, big:false, gold: 2, damage:1, health:5, def:0, speed:1, timing:4, count:10, path:[{x:3,y:-5},{x:3,y:-3},{x:2,y:-3},{x:2,y:-1},{x:4,y:-1},{x:4,y:3},{x:-1,y:3},{x:-1,y:-1},{x:0,y:-1},{x:0,y:-3},{x:-3,y:-3},{x:-3,y:5}]}
		]
	},
	{maxCount:20, wave:[
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:0, count:1, path:[{x:-3,y:5},{x:-3,y:-3},{x:0,y:-3},{x:0,y:-1},{x:-1,y:-1},{x:-1,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:2,y:-3},{x:3,y:-3},{x:3,y:-5}]},
			{name:"indicator", invincible:true,  big:false, gold: 0, damage:0, health:1, speed:10, timing:4, count:1, path:[{x:3,y:-5},{x:3,y:-3},{x:2,y:-3},{x:2,y:-1},{x:4,y:-1},{x:4,y:3},{x:-1,y:3},{x:-1,y:-1},{x:0,y:-1},{x:0,y:-3},{x:-3,y:-3},{x:-3,y:5}]},
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:9, count:1, path:[{x:-5,y:-3},{x:3,y:-3},{x:3,y:-5}]},
		
			{name:"onion", invincible:false, big:false, gold: 1, damage:1, health:3, def:0, speed:3, timing:0, count:10, path:[{x:-3,y:5},{x:-3,y:-3},{x:0,y:-3},{x:0,y:-1},{x:-1,y:-1},{x:-1,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:2,y:-3},{x:3,y:-3},{x:3,y:-5}]},
			{name:"kiwi", invincible:false, big:false, gold: 2, damage:2, health:10, def:0, speed:1.5, timing:4, count:5, path:[{x:3,y:-5},{x:3,y:-3},{x:2,y:-3},{x:2,y:-1},{x:4,y:-1},{x:4,y:3},{x:-1,y:3},{x:-1,y:-1},{x:0,y:-1},{x:0,y:-3},{x:-3,y:-3},{x:-3,y:5}]},
			{name:"apple", invincible:false, big:false, gold: 2, damage:1, health:5, def:0, speed:1, timing:9, count:10, path:[{x:-5,y:-3},{x:3,y:-3},{x:3,y:-5}]}
		]
	},
	{maxCount:20, wave:[
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:0, count:1, path:[{x:-3,y:5},{x:-3,y:-3},{x:2,y:-3},{x:2,y:-1},{x:4,y:-1},{x:4,y:3},{x:5,y:3}]},
			
			{name:"pumpkin", invincible:false, big:false, gold: 3, damage:3, health:20, def:0, speed:2, timing:0, count:20, path:[{x:-3,y:5},{x:-3,y:-3},{x:2,y:-3},{x:2,y:-1},{x:4,y:-1},{x:4,y:3},{x:5,y:3}]}
		]
	},
	{maxCount:30, wave:[
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:0, count:1, path:[{x:-3,y:5},{x:-3,y:-3},{x:2,y:-3},{x:2,y:-1},{x:4,y:-1},{x:4,y:3},{x:5,y:3}]},
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:9, count:1, path:[{x:-5,y:-3},{x:0,y:-3},{x:0,y:-1},{x:-1,y:-1},{x:-1,y:3},{x:5,y:3}]},
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:19, count:1, path:[{x:-3,y:5},{x:-3,y:-3},{x:-5,y:-3}]},
			
			{name:"onion", invincible:false, big:false, gold: 1, damage:1, health:15, def:0, speed:3, timing:0, count:20, path:[{x:-3,y:5},{x:-3,y:-3},{x:2,y:-3},{x:2,y:-1},{x:4,y:-1},{x:4,y:3},{x:5,y:3}]},
			{name:"apple", invincible:false, big:false, gold: 2, damage:2, health:20, def:0, speed:1, timing:9, count:10, path:[{x:-5,y:-3},{x:0,y:-3},{x:0,y:-1},{x:-1,y:-1},{x:-1,y:3},{x:5,y:3}]},
			{name:"pumpkin", invincible:false, big:false, gold: 3, damage:3, health:30, def:0, speed:2, timing:19, count:10, path:[{x:-3,y:5},{x:-3,y:-3},{x:-5,y:-3}]}
		]
	},
	{maxCount:1, wave:[
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:0, count:1, path:[{x:-3,y:5},{x:-3,y:-3},{x:2,y:-3},{x:2,y:-1},{x:-1,y:-1},{x:-1,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:2,y:-3},{x:-5,y:-3}]},
			
			{name:"onion", invincible:false, big:true, gold: 30, damage:20, health:850, def:1, speed:1, timing:0, count:1, path:[{x:-3,y:5},{x:-3,y:-3},{x:2,y:-3},{x:2,y:-1},{x:-1,y:-1},{x:-1,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:2,y:-3},{x:-5,y:-3}]}
		]
	},
	{maxCount:20, wave:[
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:0, count:1, path:[{x:3,y:-5},{x:3,y:-3},{x:2,y:-3},{x:2,y:-1},{x:-1,y:-1},{x:-1,y:-1},{x:-1,y:3},{x:5,y:3}]},
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:10, count:1, path:[{x:5,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:2,y:-3},{x:3,y:-3},{x:3,y:-5}]},
			
			{name:"pumpkin", invincible:false, big:false, gold: 3, damage:4, health:40, def:0, speed:3, timing:0, count:10, path:[{x:3,y:-5},{x:3,y:-3},{x:2,y:-3},{x:2,y:-1},{x:-1,y:-1},{x:-1,y:-1},{x:-1,y:3},{x:5,y:3}]},
			{name:"mushroom", invincible:false, big:false, gold: 2, damage:5, health:10, def:0, speed:4, timing:10, count:10, path:[{x:5,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:2,y:-3},{x:3,y:-3},{x:3,y:-5}]}
		]
	},
	{maxCount:15, wave:[
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:0, count:1, path:[{x:-3,y:5},{x:-3,y:-3},{x:0,y:-3},{x:0,y:-1},{x:-1,y:-1},{x:-1,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:2,y:-3},{x:3,y:-3},{x:3,y:-5}]},
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:10, count:1, path:[{x:5,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:2,y:-3},{x:3,y:-3},{x:3,y:-5}]},
			
			{name:"potato", invincible:false, big:false, gold: 3, damage:3, health:110, def:0, speed:1, timing:0, count:10, path:[{x:-3,y:5},{x:-3,y:-3},{x:0,y:-3},{x:0,y:-1},{x:-1,y:-1},{x:-1,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:2,y:-3},{x:3,y:-3},{x:3,y:-5}]},
			{name:"mushroom", invincible:false, big:false, gold: 2, damage:5, health:15, def:0, speed:4, timing:10, count:5, path:[{x:5,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:2,y:-3},{x:3,y:-3},{x:3,y:-5}]}
		]
	},
	{maxCount:20, wave:[
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:0, count:1, path:[{x:-3,y:5},{x:-3,y:-3},{x:0,y:-3},{x:0,y:-1},{x:-1,y:-1},{x:-1,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:2,y:-3},{x:3,y:-3},{x:3,y:-5}]},
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:10, count:1, path:[{x:3,y:-5},{x:3,y:-3},{x:-3,y:-3},{x:-3,y:5}]},
			
			{name:"potato", invincible:false, big:false, gold: 2, damage:3, health:130, def:0, speed:1, timing:0, count:10, path:[{x:-3,y:5},{x:-3,y:-3},{x:0,y:-3},{x:0,y:-1},{x:-1,y:-1},{x:-1,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:2,y:-3},{x:3,y:-3},{x:3,y:-5}]},
			{name:"mushroom", invincible:false, big:false, gold: 2, damage:4, health:25, def:0, speed:4.5, timing:10, count:10, path:[{x:3,y:-5},{x:3,y:-3},{x:-3,y:-3},{x:-3,y:5}]}
		]
	},
	{maxCount:30, wave:[
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:0, count:1, path:[{x:-3,y:5},{x:-3,y:-3},{x:-5,y:-3}]},
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:10, count:1, path:[{x:-5,y:-3},{x:0,y:-3},{x:0,y:-1},{x:-1,y:-1},{x:-1,y:3},{x:5,y:3}]},
			
			{name:"potato", invincible:false, big:false, gold: 2, damage:3, health:60, def:0, speed:1, timing:0, count:15, path:[{x:-3,y:5},{x:-3,y:-3},{x:-5,y:-3}]},
			{name:"tomato", invincible:false, big:false, gold: 3, damage:3, health:55, def:0, speed:2, timing:10, count:20, path:[{x:-5,y:-3},{x:0,y:-3},{x:0,y:-1},{x:-1,y:-1},{x:-1,y:3},{x:5,y:3}]}
		]
	},
	{maxCount:1, wave:[
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:0, count:1, path:[{x:-3,y:5},{x:-3,y:-3},{x:2,y:-3},{x:2,y:-1},{x:-1,y:-1},{x:-1,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:-1,y:-1},{x:-1,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:2,y:-3},{x:-5,y:-3}]},
			
			{name:"potato", invincible:false, big:true, gold: 50, damage:30, health:6500, def:1, speed:1, timing:0, count:1, path:[{x:-3,y:5},{x:-3,y:-3},{x:2,y:-3},{x:2,y:-1},{x:-1,y:-1},{x:-1,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:-1,y:-1},{x:-1,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:2,y:-3},{x:-5,y:-3}]}
		]
	},
	{maxCount:20, wave:[
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:0, count:1, path:[{x:-3,y:5},{x:-3,y:-3},{x:3,y:-3},{x:3,y:-5}]},
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:10, count:1, path:[{x:5,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:2,y:-3},{x:-5,y:-3}]},
			
			{name:"lemon", invincible:false, big:false, gold: 3, damage:5, health:80, def:1, speed:2, timing:0, count:15, path:[{x:-3,y:5},{x:-3,y:-3},{x:3,y:-3},{x:3,y:-5}]},
			{name:"tomato", invincible:false, big:false, gold: 2, damage:3, health:120, def:0, speed:3, timing:10, count:20, path:[{x:5,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:2,y:-3},{x:-5,y:-3}]}
		]
	},
	{maxCount:20, wave:[
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:0, count:1, path:[{x:-3,y:5},{x:-3,y:-3},{x:-5,y:-3}]},
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:10, count:1, path:[{x:3,y:-5},{x:3,y:-3},{x:2,y:-3},{x:2,y:-1},{x:4,y:-1},{x:4,y:3},{x:5,y:3}]},
			
			{name:"apple", invincible:false, big:false, gold: 3, damage:5, health:70, def:1, speed:2, timing:0, count:15, path:[{x:-3,y:5},{x:-3,y:-3},{x:-5,y:-3}]},
			{name:"cheese", invincible:false, big:false, gold: 2, damage:3, health:100, def:0, speed:3, timing:10, count:20, path:[{x:3,y:-5},{x:3,y:-3},{x:2,y:-3},{x:2,y:-1},{x:4,y:-1},{x:4,y:3},{x:5,y:3}]}
		]
	},
	{maxCount:30, wave:[
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:0, count:1, path:[{x:-3,y:5},{x:-3,y:-3},{x:0,y:-3},{x:0,y:-1},{x:-1,y:-1},{x:-1,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:2,y:-3},{x:3,y:-3},{x:3,y:-5}]},
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:20, count:1, path:[{x:5,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:2,y:-3},{x:3,y:-3},{x:3,y:-5}]},
			
			{name:"carrot", invincible:false, big:false, gold: 2, damage:6, health:150, def:1, speed:3, timing:0, count:30, path:[{x:-3,y:5},{x:-3,y:-3},{x:0,y:-3},{x:0,y:-1},{x:-1,y:-1},{x:-1,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:2,y:-3},{x:3,y:-3},{x:3,y:-5}]},
			{name:"kiwi", invincible:false, big:false, gold: 2, damage:3, health:50, def:1, speed:1, timing:20, count:10, path:[{x:5,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:2,y:-3},{x:3,y:-3},{x:3,y:-5}]}
		]
	},
	{maxCount:45, wave:[
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:0, count:1, path:[{x:3,y:-5},{x:3,y:-3},{x:2,y:-3},{x:2,y:-1},{x:4,y:-1},{x:4,y:3},{x:-1,y:3},{x:-1,y:-1},{x:0,y:-1},{x:0,y:-3},{x:-3,y:-3},{x:-3,y:5}]},
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:10, count:1, path:[{x:-5,y:-3},{x:0,y:-3},{x:0,y:-1},{x:-1,y:-1},{x:-1,y:3},{x:5,y:3}]},
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:20, count:1, path:[{x:5,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:2,y:-3},{x:3,y:-3},{x:3,y:-5}]},
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:30, count:1, path:[{x:-5,y:-3},{x:-3,y:-3},{x:-3,y:5}]},
			
			{name:"carrot", invincible:false, big:false, gold: 2, damage:6, health:160, def:1, speed:3, timing:0, count:15, path:[{x:3,y:-5},{x:3,y:-3},{x:2,y:-3},{x:2,y:-1},{x:4,y:-1},{x:4,y:3},{x:-1,y:3},{x:-1,y:-1},{x:0,y:-1},{x:0,y:-3},{x:-3,y:-3},{x:-3,y:5}]},
			{name:"pumpkin", invincible:false, big:false, gold: 2, damage:3, health:100, def:2, speed:2, timing:10, count:15, path:[{x:-5,y:-3},{x:0,y:-3},{x:0,y:-1},{x:-1,y:-1},{x:-1,y:3},{x:5,y:3}]},
			{name:"mushroom", invincible:false, big:false, gold: 2, damage:3, health:50, def:1, speed:4, timing:20, count:15, path:[{x:5,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:2,y:-3},{x:3,y:-3},{x:3,y:-5}]},
			{name:"tomato", invincible:false, big:false, gold: 2, damage:3, health:90, def:1, speed:3, timing:30, count:15, path:[{x:-5,y:-3},{x:-3,y:-3},{x:-3,y:5}]}
		]
	},
	{maxCount:1, wave:[
			{name:"indicator", invincible:true, big:false, gold: 0, damage:0, health:1, speed:10, timing:0, count:1, path:[{x:-3,y:5},{x:-3,y:-3},{x:2,y:-3},{x:2,y:-1},{x:-1,y:-1},{x:-1,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:-1,y:-1},{x:-1,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:2,y:-3},{x:-5,y:-3}]},
			
			{name:"lemon", invincible:false, big:true, gold: 50, damage:50, health:10000, def:2, speed:1.5, timing:0, count:1, path:[{x:-3,y:5},{x:-3,y:-3},{x:2,y:-3},{x:2,y:-1},{x:-1,y:-1},{x:-1,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:-1,y:-1},{x:-1,y:3},{x:4,y:3},{x:4,y:-1},{x:2,y:-1},{x:2,y:-3},{x:-5,y:-3}]}
		]
	}
]
// 10x10 map
const map = [
	[0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 1, 0, 1, 1, 1, 1, 1, 1, -1],
	[0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
	[0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
	[0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
	[0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0],
	[0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
	[-1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0]
];