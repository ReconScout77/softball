//business interface logic

var Player = function(name,position,sex,height,rbi,era,battingAverage,onBasePercentage) {
  this.name = name;
  this.position = position;
  this.sex = sex;
  this.height = height;
  this.rbi = rbi;
  this.era = era;
  this.battingAverage = battingAverage;
  this.onBasePercentage = onBasePercentage;
}

var teamOne = [];
var teamTwo = [];
var unpickedPlayers = [];



//user interface logic
$(document).ready(function() {
  $("#draft").click(function() {
    $("#team").append("<li>" + "Player" + "</li>");
  });
});
