// ------------------------ Negative to Positive Converter ------------------------

async function fetchAntonym(word) {
    try {
        const response = await fetch(`https://api.datamuse.com/words?rel_ant=${word}`);
        const data = await response.json();
        return data.length > 0 ? data[0].word : null;
    } catch (error) {
        console.error("Error fetching antonym:", error);
        return null;
    }
}

async function transformNegativeToPositive(inputText) {
    const words = inputText.toLowerCase().split(" ");
    const transformedWords = await Promise.all(
        words.map(async (word) => {
            const antonym = await fetchAntonym(word);
            return antonym || word;
        })
    );
    return transformedWords.join(" ");
}

document.getElementById("submit-thought").addEventListener("click", async () => {
    const userInput = document.getElementById("thought-input").value.trim();

    if (!userInput) {
        document.getElementById("result").innerText = "Please enter a thought!";
        return;
    }

    document.getElementById("result").innerText = "Transforming your thoughts...";
    const positiveThought = await transformNegativeToPositive(userInput);
    document.getElementById("result").innerText = `Your positive thought: "${positiveThought}"`;
});

// ------------------------ Positive-Negative Game ------------------------

const positiveWords = ["happy", "joyful", "strong", "beautiful", "hopeful"];
const negativeWords = ["sad", "weak", "ugly", "hopeless", "unhappy"];
let score = 0;
let currentWord = "";

function generateRandomWord() {
    const allWords = [...positiveWords, ...negativeWords];
    const randomIndex = Math.floor(Math.random() * allWords.length);
    return allWords[randomIndex];
}

function startGame() {
    currentWord = generateRandomWord();
    document.getElementById("game-word").innerText = `Word: ${currentWord}`;
}

document.getElementById("positive-btn").addEventListener("click", () => {
    if (positiveWords.includes(currentWord)) {
        score++;
        alert("Correct! It is positive!");
    } else {
        alert("Incorrect. It is negative.");
    }
    updateScore();
    startGame();
});

document.getElementById("negative-btn").addEventListener("click", () => {
    if (negativeWords.includes(currentWord)) {
        score++;
        alert("Correct! It is negative!");
    } else {
        alert("Incorrect. It is positive.");
    }
    updateScore();
    startGame();
});

function updateScore() {
    document.getElementById("score").innerText = `Score: ${score}`;
}

// Initialize game on page load
startGame();
