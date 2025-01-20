// Positive-Negative Dictionary for the Game
const wordDictionary = {
    positive: [
        "happy", "joyful", "beautiful", "rich", "love", "strong", "intelligent", "connected", "brave", "exciting", "motivated", "confident"
    ],
    negative: [
        "unhappy", "sad", "ugly", "poor", "hate", "weak", "stupid", "lonely", "scared", "boring", "lazy", "nervous"
    ]
};

let score = 0; // Game score
let currentWord = ""; // Current word in the game
let isPositive = true; // Is the current word positive?

// Start the Game
document.getElementById("start-game-button").addEventListener("click", () => {
    nextWord();
    document.getElementById("score").innerText = `Score: ${score}`;
});

// Generate Next Word
function nextWord() {
    const category = Math.random() < 0.5 ? "positive" : "negative";
    isPositive = category === "positive";
    currentWord = wordDictionary[category][Math.floor(Math.random() * wordDictionary[category].length)];
    document.getElementById("word-display").innerText = `Word: "${currentWord}"`;
}

// Handle Positive Button Click
document.getElementById("positive-button").addEventListener("click", () => {
    checkAnswer(true);
});

// Handle Negative Button Click
document.getElementById("negative-button").addEventListener("click", () => {
    checkAnswer(false);
});

// Check User's Answer
function checkAnswer(userThinksPositive) {
    if (userThinksPositive === isPositive) {
        score++;
        document.getElementById("word-display").innerText = "Correct! 🎉";
    } else {
        document.getElementById("word-display").innerText = "Incorrect! 😢";
    }
    document.getElementById("score").innerText = `Score: ${score}`;
    setTimeout(nextWord, 1000); // Move to the next word after 1 second
}

// Transform Negative Thoughts
document.getElementById("submit-thought").addEventListener("click", () => {
    const userInput = document.getElementById("thought-input").value;
    if (userInput.trim() === "") {
        document.getElementById("result").innerText = "Please enter a thought!";
        return;
    }
    const positiveThought = transformThought(userInput);
    document.getElementById("result").innerText = `Your positive affirmation: "${positiveThought}"`;
    document.getElementById("thought-input").value = ""; // Clear input field
});

// Transform Thoughts Function
function transformThought(inputText) {
    const negativeToPositive = {
        unhappy: "happy",
        sad: "joyful",
        ugly: "beautiful",
        poor: "rich",
        hate: "love",
        weak: "strong",
        stupid: "intelligent",
        lonely: "connected",
        scared: "brave",
        boring: "exciting",
        lazy: "motivated",
        nervous: "confident"
    };

    const words = inputText.toLowerCase().split(" ");
    const transformedWords = words.map(word => negativeToPositive[word] || word);
    return transformedWords.join(" ");
}
