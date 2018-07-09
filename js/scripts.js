function Dice() {
  this.sides = 6;
  this.scores = [0,0];
  this.roundScore = 0;
  this.activePlayer = 0;
  this.roll = function () {
    var diceNumber = Math.floor(Math.random()*this.sides) + 1;
    return diceNumber;
  }
}

//ui logic
$(document).ready(function () {
  $("#current-0").text('0');
  $("#current-1").text('0');
  $("#score-0").text('0');
  $("#score-1").text('0');
  $("button#roll").on('click', function(event) {
    var player1 = new Dice();
    $("#current-" + player1.activePlayer).text(player1.roll());
    $(".dice").css("display","block");
    $(".dice").attr("src","images/dice-" + player1.roll() + ".png");
  });

//  $("#current-"+ player1.activePlayer).val(" ");

})
