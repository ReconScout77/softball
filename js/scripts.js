var teamOne = [];
var teamTwo = [];
var unpickedPlayers = [];
var names = ["Sam", "John", "Amy", "Jaime", "Sarah", "Tom", "Jesse", "Bob", "David", "Tari", "William", "Harrison", "Victor", "Thomas", "Larry", "Robin"];
var lastNames = ["Smith", "Johnson", "Jones", "Brown", "Davis", "Moore", "Williams", "Taylor", "Thompson", "Garcia", "Nelson", "Carter", "Rodriguez", "Lewis", "Lee", "Walker"];
var sex = ["Male", "Female"];

function Players(names, age, sex, height, battingAvg) {
  this.playerName = names;
  this.age = age;
  this.sex = sex;
  this.playerHeight = height;
  this.battingAvg = battingAvg;
}

// function Team(){
//   var players = [];
// }

var createPlayerList = function(amount){
  for (i = 0; i < amount; i++){
    var playerName = names[Math.floor(Math.random() * names.length)] + " " + lastNames[Math.floor(Math.random() * lastNames.length)];
    var age = Math.floor(Math.random() * 27) + 18;
    var sexPlayer = sex[Math.floor(Math.random() * 2)];
    var height = Math.floor(Math.random() * 18) + 60;
    var battingAvg = Math.floor(Math.random() * 320) + 50;
    var newPlayer = new Players(playerName, age, sexPlayer, height, battingAvg);
    unpickedPlayers.push(newPlayer);
  }
}



// User logic
$(function(){
  createPlayerList(30);
  for (i = 0; i < unpickedPlayers.length; i++) {
    $(".sidebar ul").append("<li data-player=" + i + ">" + unpickedPlayers[i].playerName + "</li>")
  }
// var player1 = new Player();
// var player2 = new Player();
// if (team1 clicked) {
//   player1.players.push();
// }else {
//   playe2.players.push();
// }

  $(".player li").click(function(){
    var currentPlayer = $(this).html();

    var unpickedPlayersIndex = ($(this).data("player"));
    $(".details h2").text(unpickedPlayers[unpickedPlayersIndex].playerName);
    
  });
});
