var PlayerTurn = false;
var TurnNumber = 0;

StartGame();

let winnerRows = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [3, 5, 7],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
  ];

function checkWinner(winningPiece){
  let i;
  let j;

  for (i = 0; i < winnerRows.length; i++) {

    let path = winnerRows[i];
    let win = true;

    for (j = 0; j < 3; j++) {
      let cell = path[j];
      if(!($('#' + cell).html() == winningPiece))
        win = false;
    }

    if(win){

      for (j = 0; j < 3; j++) {
        let cell = path[j];
        $('#' + cell).css("color","red");
      }

      alert("Выйграл: " + winningPiece);
      let wonNumber = parseInt($('#' + winningPiece).text()) + 1;
      $('#' + winningPiece).text(wonNumber);
      StopGame();
    }

  }
  PlayerTurn = !PlayerTurn;
  TurnNumber++;

  if(TurnNumber == 9){
      alert("Ничья!");
      let drawNumber = parseInt($('#draw').text()) + 1;
      $('#draw').text(drawNumber);
      StopGame();
  }
}

function StopGame(){
  $('td').unbind('click');
}

function StartGame(){
  $('td').click(function(element){
    if (element.target.nodeName == "TD") {
      if(element.target.textContent == ""){
        element.target.textContent = PlayerTurn ? "X" : "O";
        $('#TurnChar').text(PlayerTurn ? "O" : "X");
        checkWinner(element.target.textContent);
      }
    }
  });

  for(let i = 1; i < 10; i++){
    $('#' + i).css("color","white");
  }

  $('#TurnChar').text("O");

  TurnNumber = 0;
}

$('#reset').click(function() {
  PlayerTurn = false;
  $("#table tbody tr td").html("");
  StartGame();
});