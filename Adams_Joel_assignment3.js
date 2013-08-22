/*
Author: Joel E. Adams
Date: 22 August 2013
SDI Project 3 
*/

var footballTeam = function (name, coach) {
  // Private
  var roster = [];
  var coach;
  // Accessors
  var getName = function () { return name; };
  var getCoach = function () { return coach; };
  var getPlayer = function (player) {
		for (var i =0, j = roster.length; i < j; i++){
			if (roster[i] === player.name(player)) {
				 var playerInfo = roster[i] + " " + "age: " + player.age() + "\n" + player.born();
				 
				 			}
		};
	 if (playerInfo === undefined) {
	 return playerInfo = "Player not on the roster.";
	 } else {
	  return playerInfo;
	  };
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

var player = function (name, age, born, number, position) {
	// Private
	// Accessors
	var getName = function () { return name; };
	var getAge = function () { return age; };
	var bornInfo = function () {
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


// Create players
var player1 = player("Blane lane", 32, ["3-24-81","Buffalo","NY"], 7, "QB");
var player2 = player("Peter Tale", 29, ["7-2-84","Dallas","TX"], 5, "OT");
var player3 = player("Brian Simmons", 32, ["5-25-81","Richmond","VA"], 12, "RB");
var player4 = player("Carl Hunley", 32, ["1-17-81","Grand Island","NY"], 2, "WR");
var player5 = player("James Water", 29, ["2-23-84","Fort Erie","CA"], 15, "FB");
var player6 = player("Tini Dome", 25, ["7-20-88","Cleveland","Ohio"], 23, "DB");
// Create Team
var bills = footballTeam("bills", "buffalo");
// Add players to team
bills.addPlayer(["Blane lane", "Peter Tale", "Brian Simmons", "Carl Hunley", "James Water", "Tini Dome"]);

console.log(player1.age());
console.log(player1.born());
var bills = footballTeam("Team 1");
bills.addPlayer(["Blane lane", "Peter Tale", "Brian Simmons", "Carl Hunley", "James Water", "Tini Dome"]);
console.log(bills.roster());
bills.cutPlayer(["Brian Simmons"]);
console.log(bills.roster());
console.log(player1.name());
console.log(" ");
console.log(bills.teamPlayer(player1));
console.log(bills.teamPlayer(player2));
console.log(bills.teamPlayer(player3)); // Cut from team should not show up on roster
console.log(bills.teamPlayer(player4));
console.log(bills.teamPlayer(player5));
console.log(bills.teamPlayer(player6));