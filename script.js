// ------------------------ Daily Affirmation ------------------------

async function fetchDailyAffirmation() {
    try {
        const response = await fetch('https://www.affirmations.dev/');
        const data = await response.json();
        document.getElementById("affirmation-text").innerText = data.affirmation;
    } catch (error) {
        console.error("Error fetching affirmation:", error);
        document.getElementById("affirmation-text").innerText = "Sorry, something went wrong!";
    }
}

// ------------------------ Positive-Negative Game ------------------------

const positiveWords = ["happy", "joyful", "strong", "beautiful", "hopeful"];
const negativeWords = ["sad", "weak", "ugly", "hopeless", "unhappy"];
let score = 0;
let currentWord = "";
let gameStarted = false;

function updateScore() {
    document.getElementById("score").innerText = `Score: ${score}`;
}

function generateRandomWord() {
    const allWords = [...positiveWords, ...negativeWords];
    const randomIndex = Math.floor(Math.random() * allWords.length);
    return allWords[randomIndex];
}

function startGame() {
    score = 0;
    gameStarted = true;
    updateScore();
    generateNewWord();
}

function generateNewWord() {
    currentWord = generateRandomWord();
    document.getElementById("game-word").innerText = `Word: ${currentWord}`;
}

function handleUserChoice(isPositive) {
    if (!gameStarted) {
        alert("Please start the game first!");
        return;
    }

    const correct =
        (isPositive && positiveWords.includes(currentWord)) ||
        (!isPositive && negativeWords.includes(currentWord));

    if (correct) {
        score++;
        document.getElementById("game-word").classList.add("correct");
        setTimeout(() => document.getElementById("game-word").classList.remove("correct"), 300);
    } else {
        document.getElementById("game-word").classList.add("wrong");
        setTimeout(() => document.getElementById("game-word").classList.remove("wrong"), 300);
    }

    updateScore();
    generateNewWord();
}

// ------------------------ Switching Sections ------------------------

document.getElementById("daily-affirmation-btn").addEventListener("click", () => {
    document.getElementById("affirmation-section").classList.add("active");
    document.getElementById("game-section").classList.remove("active");
    fetchDailyAffirmation();
});

document.getElementById("positive-negative-game-btn").addEventListener("click", () => {
    document.getElementById("game-section").classList.add("active");
    document.getElementById("affirmation-section").classList.remove("active");
});

document.getElementById("start-game").addEventListener("click", startGame);
document.getElementById("positive-btn").addEventListener("click", () => handleUserChoice(true));
document.getElementById("negative-btn").addEventListener("click", () => handleUserChoice(false));
