const gameData =[
    [0,0,0],
    [0,0,0],
    [0,0,0],
];


let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver=false;
const player = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    },
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backDropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorOutputElement = document.getElementById('config-error');
const activePlayerNameElement= document.getElementById('active-player-name');
const gameOverElement=document.getElementById('game-over');

const editPlayer1btnElement = document.getElementById('edit-player-1-btn');
const editPlayer2btnElement = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');

let activegameElement = document.getElementById('active-game');

const startNewGameBtnElement=document.getElementById('start-game-btn');

// const gameFieldElements=document.querySelectorAll('#game-board li');
//                      OR
const gameBoardElement = document.getElementById('game-board');


editPlayer1btnElement.addEventListener('click', openPlayerConfig);
editPlayer2btnElement.addEventListener('click', openPlayerConfig);
cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backDropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);


startNewGameBtnElement.addEventListener('click',startNewGame);


// for ( const gameFieldElement of gameFieldElements){
//     gameFieldElement.addEventListener('click',selectGameField);
// }
//                      OR
gameBoardElement.addEventListener('click',selectGameField);
