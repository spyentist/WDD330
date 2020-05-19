// Core Requirements
const reset = document.getElementById('reset');
const cells = document.querySelectorAll('.cell');
const divBoard = document.forms.ticTac;
const player1 = {name: "player1", sign: "X"};
const player2 = {name: "player2", sign: "0"};
let player = player1;

document.getElementById("currentPlayer").innerHTML = player.name;

const getId = (e) => {
  let cellName = e.target;
  document.getElementById("currentPlayer").innerHTML = player.name;
  cellName.innerHTML = player.sign;
  if (player == player1) player = player2;
  else player = player1;
}
  // console.log(e.target);

divBoard.addEventListener('click', getId);


// 03
// Add a reset button.
// When touched the reset button should remove all of the marks from the board.


const resetBoard = (e) =>  {
  e.preventDefault();
  document.getElementById("currentPlayer").innerHTML = player1.name;
  cells.forEach((c) => {
    c.innerHTML = '';
  });
}

reset.addEventListener('click', resetBoard, false);
