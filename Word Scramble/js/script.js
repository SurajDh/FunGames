const wordText = document.querySelector(".word"),
    hintText = document.querySelector(".hint span"),
    timeText = document.querySelector(".time b"),
    inputField = document.querySelector("input"),
    refreshBtn = document.querySelector(".refresh-word"),
    checkBtn = document.querySelector(".check-word"),
    scoreText = document.querySelector(".score b"),
    lastScoreText = document.querySelector(".last-score b2");

const overlayElement = document.getElementById('config-overlay');

let correctWord, timer, score = 0, isGameOver = false;
let lastScore = 0;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--;
            timeText.innerText = maxTime;
        } else {
            overlayElement.children[1].textContent = 'Time off! ' + `${correctWord.toUpperCase()}` + ' was the correct word';
            overlayElement.style.display = 'block';
            clearInterval(timer);
            isGameOver = true;
            lastScore = score > lastScore ? score : lastScore;
            score = 0; // Reset score
            scoreText.innerText = score;
            lastScoreText.innerText = lastScore;
        }
    }, 1000);
}

const initGame = () => {
    isGameOver = false;


    scoreText.innerText = score;
    lastScoreText.innerText = lastScore;

    initTimer(30); // Start the timer for the new game

    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");

    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }

    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);

    console.log(`last score is: ${lastScore}`);
}

initGame();

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();

    if (!userWord) {
        overlayElement.children[1].textContent = 'Please enter the word to check!';
        overlayElement.style.display = 'block';
        clearInterval(timer);
        lastScore = score > lastScore ? score : lastScore;
 // Save current score as last score
        score = 0; // Reset the score on invalid input
        scoreText.innerText = score;
        lastScoreText.innerText = lastScore;
        return;
    }

    if (userWord !== correctWord) {
        lastScore = score > lastScore ? score : lastScore;
 // Save current score as last score before resetting it
        score = 0; // Reset the score on wrong guess
        overlayElement.children[1].textContent = 'Oops! ' + inputField.value.toUpperCase() + ' is not the correct word';
        overlayElement.style.display = 'block';
        clearInterval(timer);
        isGameOver = true;

        scoreText.innerText = score;
        lastScoreText.innerText = lastScore;
    } else {
        score += 10; // Increase score for correct answer
        scoreText.innerText = score;
        overlayElement.children[1].textContent = 'Congrats! ' + `${correctWord.toUpperCase()}` + ' is the correct word';
        overlayElement.style.display = 'block';
        clearInterval(timer);
        isGameOver = true;
    }
}

checkBtn.addEventListener("click", checkWord);

document.getElementById('cross').addEventListener("click", () => {
    overlayElement.style.display = 'none';
    if (!isGameOver) {
        return;
    }
    initGame(); // Reset the game when clicking the "X"
});
