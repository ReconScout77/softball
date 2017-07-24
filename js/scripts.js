var teamOne = [];
var teamTwo = [];
var unpickedPlayers = [];
var names = ["Sam", "John", "Amy", "Jaime", "Sarah", "Tom", "Jesse", "Bob", "David", "Tari", "William", "Harrison", "Victor", "Thomas", "Larry", "Robin"];
var lastNames = ["Smith", "Johnson", "Jones", "Brown", "Davis", "Moore", "Williams", "Taylor", "Thompson", "Garcia", "Nelson", "Carter", "Rodriguez", "Lewis", "Lee", "Walker"];
var sex = ["Male", "Female"];

var images = ["beaverman.jpg", "constructiondude.png", "Dr-Mario.png", "hemanwannabe.jpg", "homer.jpg", "images-0.png", "images-1.jpg", "images-2.jpg", "images-3.jpg", "images-4.jpg", "images-5.jpg", "images-6.jpg", "images-7.jpg", "images-8.jpg","images-9.jpg","images-10.jpg","images-11.jpg","images-12.jpg","images-13.jpg","images-14.jpg","images-15.jpg","images-16.jpg","images-17.jpg","images-18.jpg","images-19.jpg","images-20.jpg","images-21.jpg","images-22.jpg","images-23.jpg","images-24.jpg","images-25.jpg"]

function Players(names, age, sex, height, battingAvg, image) {
  this.playerName = names;
  this.age = age;
  this.sex = sex;
  this.playerHeight = height;
  this.battingAvg = battingAvg;
  this.profilePic = image;
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
    var playerImage = images[Math.floor(Math.random() * images.length)];
    var newPlayer = new Players(playerName, age, sexPlayer, height, battingAvg, playerImage);
    unpickedPlayers.push(newPlayer);
  }
}



// User logic
$(function(){
  createPlayerList(26);
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
    // var currentPlayer = $(this).html();

    var unpickedPlayersIndex = ($(this).data("player"));
    console.log(unpickedPlayers[unpickedPlayersIndex].profilePic)
    $(".details h2").text(unpickedPlayers[unpickedPlayersIndex].playerName);
    $(".details h2").append(unpickedPlayers[unpickedPlayersIndex].sex);
    $(".details h2").append("<img src=img/"+unpickedPlayers[unpickedPlayersIndex].profilePic+">");

  });
});
