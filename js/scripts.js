function Dice() {
  this.sides = 6;
  this.scores = [0,0];
  this.roundScore = 0;
  this.activePlayer = 1;
  this.roll = function () {
    var diceNumber = Math.floor(Math.random()*this.sides) + 1;
    return diceNumber;
  }
}

//ui logic
$(document).ready(function () {
  $("button#roll").on('click', function(event) {
    var player1 = new Dice();
  //  var activePlayer = 0;
    $("#current-" + player1.activePlayer).text(player1.roll());
  });

//  $("#current-"+ player1.activePlayer).val(" ");

})
