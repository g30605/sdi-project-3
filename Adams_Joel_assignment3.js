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
  var getPlayer = function () { return player; };
  var getRoster = function () {
    for (var i = 0; j = roster.length; i < j; i++) {
     console.log(roster[i] + "players on the team.");
    };
  };  
  // Mutators




  // Public methods
  return {
    "name": getName,
    "coach": getCoach,
    "player": getPlayer,
    "roster": getRoster,
    "cutPlayer": cutPlayer,
    "addPlayer": addPlayer

  };
};
