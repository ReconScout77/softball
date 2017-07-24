var teamOne = [];
var teamTwo = [];
var unpickedPlayers = [];
var names = ["Sam", "John", "Amy", "Jaime", "Sarah", "Tom", "Jesse", "Bob", "David", "Tari", "William", "Harrison", "Victor", "Thomas", "Larry", "Robin"];
var sex = ["Male", "Female"];

function Players(names, age, sex, height, battingAvg) {
  this.playerName = names;
  this.age = age;
  this.sex = sex;
  this.playerHeight = height;
  this.battingAvg = battingAvg;
}

var createPlayerList = function(amount){
  for (i = 0; i < amount; i++){
    var playerName = names[Math.floor(Math.random() * names.length)];
    var age = Math.floor(Math.random() * 27) + 18;
    var sex = Math.floor(Math.random() * 2);
    var height = Math.floor(Math.random() * 18) + 60;
    var battingAvg = Math.floor(Math.random() * 320) + 50;
    var newPlayer = new Player(playerName, age, sex, height, battingAvg);
    unpickedPlayers.push(newPlayer);
  }
}

$(function(){
  $(".player li").click(function(){
    var currentPlayer = $(this).html();
    console.log(currentPlayer);
    $("#details ul").append('<li>' + currentPlayer + '</li');
  });
});
