var firebaseConfig = {
	apiKey: "AIzaSyAyai-fbxnUgU2YN-z5l2wOrUqbQoppCXw",
	authDomain: "foodtowerdefense.firebaseapp.com",
	databaseURL: "https://foodtowerdefense.firebaseio.com",
	projectId: "foodtowerdefense",
	storageBucket: "foodtowerdefense.appspot.com",
	messagingSenderId: "426262918823",
	appId: "1:426262918823:web:52d3c7471228f2234d4d82"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

function writeLeaderboardData(diff, health, name) {
  firebase.database().ref('leaderboard/' + diff).once("value").then(function(data){
	if(data.val() == null || data.val()[name] == undefined || data.val()[name].health < health) {
	  firebase.database().ref('leaderboard/' + diff + "/" + name).set({
		health: health
	  });
	  alert(lang[navLang]["msg_new_record"]);
	}
  });
}

function readLeaderboardData(diff, callback) {
  firebase.database().ref('leaderboard/' + diff).once("value").then(function(data){
	callback(data);
  });
}