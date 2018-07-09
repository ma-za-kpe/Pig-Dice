function Dice() {
  this.sides = 6;
  this.scores = [0, 0];
  //this.roundScore = 0;
  this.activePlayer = [0, 1];
  this.roll = function() {
    var diceNumber = Math.floor(Math.random() * this.sides) + 1;
    //console.log(diceNumber)
    return diceNumber;

  }
}

//ui logic
$(document).ready(function() {
  var roundScore = 0;
  $("#current-0").text('0');
  $("#current-1").text('0');
  $("#score-0").text('0');
  $("#score-1").text('0');

  var player = new Dice();
  //console.log(player.activePlayer[1])

//  var player2 = new Dice();

  $("button#roll").on('click', function(event) {
    var diceNumber = player.roll();
    $("#current-" + player.activePlayer[0]).text(diceNumber);
    $(".dice").css("display", "block");
    $(".dice").attr("src", "images/dice-" + diceNumber + ".png");
    if (diceNumber !== 1) {
      roundScore += diceNumber;
      $("#current-" + player.activePlayer[0]).text(roundScore);
    } else {
      //ternary operation
    //  player.activePlayer[0] ? player.activePlayer[1] : player.activePlayer[0];
     $("#current-" + player.activePlayer[1]).text(roundScore);
      roundScore;
      //$("#current-" + player1.activePlayer[0]).text(roundScore);
    }
  });


})
