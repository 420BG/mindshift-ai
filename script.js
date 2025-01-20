// Positive and negative words for the game
const gameWords = [
    { word: "happy", type: "positive" },
    { word: "sad", type: "negative" },
    { word: "excited", type: "positive" },
    { word: "angry", type: "negative" },
    { word: "joyful", type: "positive" },
    { word: "depressed", type: "negative" },
    { word: "hopeful", type: "positive" },
    { word: "scared", type: "negative" },
    { word: "confident", type: "positive" },
    { word: "worried", type: "negative" }
];

// Positive affirmations dictionary
const positiveAffirmations = {
    "fail": [
        "Failures are stepping stones to success!",
        "Every failure is a lesson. Learn from it!",
        "The best way to predict your future is to create it.",
        "Failure is not the opposite of success, it’s part of success!"
    ],
    "can't": [
        "You are capable of achieving anything you set your mind to!",
        "The only way to do great work is to love what you do.",
        "You can do hard things.",
        "Your potential is limitless."
    ],
    "impossible": [
        "Impossible is just an opinion, not a fact.",
        "The word itself says ‘I’m possible!’",
        "The only limits that exist are the ones you place on yourself.",
        "You are stronger than you think!"
    ],
    "worried": [
        "Worrying doesn't change the outcome. Let it go!",
        "Focus on what you can control, and let the rest go.",
        "You are capable of handling anything that comes your way.",
        "Release your worries and embrace peace."
    ],
    "stress": [
        "You are in control of your stress, not the other way around.",
        "Breathe in calm, breathe out stress.",
        "Take it one step at a time. You've got this!",
        "Stress is temporary, but your strength is forever."
    ]
    // Add more categories and affirmations as required...
};

let score = 0;
let currentWord = "";
let totalRounds = 5;
let currentRound = 0;

// Function to start the game
function startGame() {
    if (currentRound < totalRounds) {
        currentWord = gameWords[Math.floor(Math.random() * gameWords.length)];
        document.getElementById("game-word").textContent = currentWord.word;
        document.getElementById("game-result").textContent = "";
    } else {
        document.getElementById("game-result").textContent = `Game Over! Final Score: ${score}`;
        document.getElementById("positive-btn").disabled = true;
        document.getElementById("negative-btn").disabled = true;
    }
}

// Function to handle user answers
function handleAnswer(userChoice) {
    if (userChoice === currentWord.type) {
        score += 1;
        document.getElementById("score").textContent = `Score: ${score}`;
    }
    currentRound += 1;
    startGame();
}

// Event listeners for the game buttons
document.getElementById("positive-btn").addEventListener("click", function() {
    handleAnswer("positive");
});

document.getElementById("negative-btn").addEventListener("click", function() {
    handleAnswer("negative");
});

// Function to reset the thought input
function resetInput() {
    document.getElementById("thoughtInput").value = "";
    document.getElementById("result").textContent = "";
}

// Function to shift thought and give affirmation
function shiftThought() {
    const resultElement = document.getElementById("result");
    resultElement.classList.add("changed");

    setTimeout(() => {
        const input = document.getElementById("thoughtInput").value.toLowerCase();
        let resultText = "";
        let emoji = "😊";

        for (const keyword in positiveAffirmations) {
            if (input.includes(keyword)) {
                resultText = positiveAffirmations[keyword][Math.floor(Math.random() * positiveAffirmations[keyword].length)];
                emoji = "💪";
                break;
            }
        }

        if (!resultText) {
            resultText = "You're amazing, keep going! 🌟";
            emoji = "🔥";
        }

        const motivationalQuotes = [
            "Believe in yourself and all that you are.",
            "You are braver than you believe, stronger than you seem, and smarter than you think.",
            "The only way to do great work is to love what you do.",
            "Your only limit is your mind."
        ];

        const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

        setTimeout(() => {
            resultElement.classList.remove("changed");
            resultElement.textContent = `${resultText} ${emoji} \n\nMotivational Quote: ${randomQuote}`;
        }, 500);
    }, 200);
}

// Start the game when the page loads
startGame();
