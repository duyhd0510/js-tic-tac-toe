
/**
 * Global variables
 */
const TURN = {
  CROSS: 'cross',
  CIRCLE: 'circle',
};
let currentTurn = 'cross';
let isGameEnded = false;
let cellValues = new Array(9).fill('');

/**
 * TODOs
 *
 * 1. Bind click event for all cells
 * 2. On cell click, do the following:
 *    - Toggle current turn
 *    - Mark current turn to the selected cell
 *    - Check game state: win, ended or playing
 *    - If game is win, highlight win cells
 *    - Not allow to re-click the cell having value.
 *
 * 3. If game is win or ended --> show replay button.
 * 4. On replay button click --> reset game to play again.
 *
 */




/**
 * Global variables
 */
const TURN = {
  CROSS: 'cross',
  CIRCLE: 'circle',
};
let currentTurn = 'cross';
let isGameEnded = false;
let cellValues = Array.from(new Array(9).keys()).map(() => '');







// Write a function to check status of tic-tac-toe game
// Ref: what is tic-tac-toe game: https://en.wikipedia.org/wiki/Tic-tac-toe
// In summary, tic-tac-toe game has 9 cells divided into 3 rows of 3 cells.
// Each cell can have 3 values: either X, O or empty.
// We say X is win if there are 3 'X' in either horizontal, vertical or diagonal row.
// The same to O.
// If 9 cells is full of values but no one win, then the game is ended.

// Given an array of 9 items: [a0, a1, ..., a7, a8] represent for the tic-tac-toe game cells value:
// |  a0  | a1  | a2  |
// |  a3  | a4  | a5  |
// |  a6  | a7  | a8  |
// Each item will receive either of 3 values: empty, X or O.
// Return an object includes two keys:
// - `status`: a string indicate status of the game. It can be one of the following values:
//    - 'X': if X is win
//    - `O`: if O is win
//    - 'END': if game is ended and no one win
//    - 'PLAYING': if no one is win and game is not ended yet.
// 
// - `winPositions`: 
//    - If X or O is win, return indexes of the 3 winning marks(X/O).
//    - Return empty array.

// Example:
// Input array: cellValues = ['X', 'O', 'O', '', 'X', '', '', 'O', 'X']; represent for
// |  X  | O  | O  |
// |     | X  |    |
// |     | O  | X  |
// -----
// ANSWER:
// {
//    status: 'X',
//    winPositions: [0, 4, 8],
// }
// 

const CELL_VALUE = {
  CROSS: 'X',
  CIRCLE: 'O',
  WIN: 'win',
};

const GAME_STATUS = {
  PLAYING: 'PLAYING',
  ENDED: 'END',
  X_WIN: 'X',
  O_WIN: 'O',
};
// Input: an array of 9 items
// Output: an object as mentioned above
const checkGameStatus = (cellValues) => {
  // Write your code here ...
  // Please feel free to add more helper function if you want.
  // It's not required to write everything just in this function.

  return {
    status: GAME_STATUS.PLAYING,
    winPositions: [],
  };
};