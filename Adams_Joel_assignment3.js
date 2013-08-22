/*
Author: Joel E. Adams
Date: 22 August 2013
SDI Project 3 
*/

var footballTeam = function (name) {
  // Private
  var roster = [];
  var coach, player;
  // Accessors
  var getName = function () { return name; };
  var getCoach = function () { return coach; };
  var getPlayer = function (player) {
		for (var i =0, j = roster.length; i < j; i++){
			if (roster[i] === player) {
				console.log(player + " " + player.age(player) + " " + player.born(player));
			} else {
				console.log("Player not found.");
			}
		};
		return player;
	};
	var getRoster = function () { return roster; };

	// Mutators
	var cutPlayer = function (player) {   // player takes an array of player or players
		for (var i = 0, j = player.length; i < j; i++) {
			if (player[i] === "") {
				break;
			} else {
				var playerRemove = roster.indexOf(player[i]);
				if (playerRemove === -1) {
					console.log("Player not found.");
				} else {
					console.log(playerRemove);
					roster.splice(playerRemove,1);
				};
			};
		};
	};
	var addPlayer = function (player) {  // player takes an array of player or players
		for (var i =0, j = player.length; i<j; i++) {
			roster.push(player[i]);
		};
	};


	// Public methods
	return {
		"teamName": getName,
		"teamCoach": getCoach,
		"teamPlayer": getPlayer,
		"roster": getRoster,
		"cutPlayer": cutPlayer,
		"addPlayer": addPlayer

	};
};

var player = function (name, age, born) {
	// Private
	// Accessors
	var getName = function () { return name; };
	var getAge = function (name) { return age; };
	var bornInfo = function (name) {
		var bornOutput = "Born in " + born[1] + ", " + born[2] + " on " + born[0] + ".";
		return bornOutput;
	};
	var playerNumber = function () {};
	var teamPlaysFor = function () {};
	// Public methods
	return {
		"name": getName,
		"age": getAge,
		"born": bornInfo,
		"playerNumber": playerNumber,
		"teamPlaysFor": teamPlaysFor
	};
};


var blane = player("Blane lane", 32, ["3-24-81","Buffalo","New York"]);
console.log(blane.age());
console.log(blane.born());
var team1 = footballTeam("Team 1");
team1.addPlayer(["Blane lane", "Peter Tale", "Brian Simmons", "Carl Hunley", "James Water", "Tini Dome"]);
console.log(team1.roster());