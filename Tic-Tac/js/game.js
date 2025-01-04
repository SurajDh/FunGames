function resetGameStatus() {
    activePlayer = 0;
    currentRound = 1;
    gameIsOver = false;
    gameOverElement.firstElementChild.innerHTML = 'You Won! <span id="winner-name">PLAYER NAME</span>';
    gameOverElement.style.display = 'none';
    let gameBoardIndex = 0;

    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            gameData[i][j] = 0;
            const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
            gameBoardItemElement.textContent = '';
            gameBoardItemElement.classList.remove('disabled');
            gameBoardIndex++;
        }
    }

}

function startNewGame() {

    if (player[0].name === '' || player[1].name === '') {
        alert('Please set custom name for both players!')
        return;
    }

    resetGameStatus();
   
    activePlayerNameElement.textContent = player[activePlayer].name;
    document.getElementById('active-game').style.display = 'block';
}





function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerNameElement.textContent = player[activePlayer].name;
}



function selectGameField(event) {

    if (event.target.tagName !== 'LI' || gameIsOver) {
        return;
    }

    const selectedField = event.target;

    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    if (gameData[selectedColumn][selectedRow] > 0) {
        alert("Please select an empty field!");
        return;
    }

    selectedField.textContent = player[activePlayer].symbol;
    selectedField.classList.add('disabled');

    gameData[selectedColumn][selectedRow] = activePlayer + 1;

    const winnerId = checkForGameOver();
    if (winnerId !== 0) {
        endGame(winnerId);
    }
    currentRound++;
    switchPlayer();
}

function checkForGameOver() {
    //for rows
    for (let i = 0; i <= 2; i++) {
        if (gameData[i][0] > 0 && gameData[i][0] === gameData[i][1] && gameData[i][1] === gameData[i][2]) {
            return gameData[i][0];
        }
    }
    //for columns
    for (let i = 0; i <= 2; i++) {
        if (gameData[0][i] > 0 && gameData[0][i] === gameData[1][i] && gameData[1][i] === gameData[2][i]) {
            return gameData[0][i];
        }
    }
    //for dia topleft to bottomright

    if (gameData[0][0] > 0 && gameData[0][0] === gameData[1][1] && gameData[1][1] === gameData[2][2]) {
        return gameData[0][0];
    }

    //for dia topright to bottomleft
    if (gameData[2][0] > 0 && gameData[2][0] === gameData[1][1] && gameData[1][1] === gameData[0][2]) {
        return gameData[2][0];
    }

    if (currentRound === 9) {
        return -1;
    }

    return 0;
}

function endGame(winnerId) {
    gameIsOver = true;
    gameOverElement.style.display = 'block';
    if (winnerId > 0) {
        gameOverElement.firstElementChild.firstElementChild.textContent = player[winnerId - 1].name;
    }
    else {
        gameOverElement.firstElementChild.textContent = 'it\'s a DRAW!';
    }

    // activegameElement.children[1].textContent = '';
}
