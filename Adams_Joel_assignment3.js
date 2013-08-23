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
  var getPlayer = function (player,json) {
    var playerInfo;
    for (var i =0, j = roster.length; i < j; i++){ // loop to see if player is on roster if found break and move on
      //console.log("got here"); // Debug check on loop
      //console.log(roster[i]);  // Debug check on loop
      if (roster[i] === player){
        break;
      };
		};
	  if (roster[i] === undefined){
      playerInfo = "Player not on roster.";
	  return playerInfo;
	  };
	  for (var ii = 0, jj = json.players.length; ii < jj; ii++){
      //console.log("got here also");  // Debug check on loop
      var play = json.players[ii];
      //console.log(play.name + " " + roster[i]);  // Debug check on loop
      if (roster[i] === play.name) {
        playerInfo = play.name + " " + "age: " + play.age + "\n" + play.born[0] + " " + play.born[1] + "," + play.born[2];
        return playerInfo;
      };
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


// Create Team
var bills = footballTeam("bills", "buffalo");
// Add players to team
bills.addPlayer(["Blane lane", "Peter Tale", "Brian Simmons", "Carl Hunley", "James Water", "Tini Dome"]);

console.log(bills.roster());
bills.cutPlayer(["Brian Simmons"]);
console.log(bills.roster());
//console.log(player1.name());
console.log(" ");
console.log(bills.teamPlayer("Carl Hunley",json));