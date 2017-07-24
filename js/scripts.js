<<<<<<< HEAD
var teamOne = [];
var teamTwo = [];
var unpickedPlayers = [];
var name = ["Sam", "John", "Amy", "Jaime", "Sarah", "Tom", "Jesse", "Bob", "David", "Tari", "William", "Harrison", "Victor", "Thomas", "Larry",  ]
var age = [16, 21, 30, 40, 24, 26, 29,]

function Players(name, age, sex, height, battingAvg) {
  this.playerName = name;
  this.age = age;
  this.sex = sex;
  this.playerHeight = height;
  this.battingAvg = battingAvg;
}





$(function(){
  $(".player li").click(function(){
    var currentPlayer = $(this).html();
    console.log(currentPlayer);
    $("#details ul").append('<li>' + currentPlayer + '</li');

>>>>>>> ff4ac95dfa8b915deb90e8b0987cd30a48e12c84
  });
});
