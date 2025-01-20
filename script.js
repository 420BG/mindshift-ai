function shiftThought() {
    const input = document.getElementById("thoughtInput").value.toLowerCase();
    let resultText = "";
    let emoji = "😊";

    if (input.includes("fail") || input.includes("failure")) {
        resultText = "Failures are stepping stones to success!";
        emoji = "💪";
    } else if (input.includes("can't") || input.includes("impossible")) {
        resultText = "You can do anything you set your mind to!";
        emoji = "🌟";
    } else if (input.includes("not good enough")) {
        resultText = "You are more than enough!";
        emoji = "❤️";
    } else if (input.includes("alone") || input.includes("isolated")) {
        resultText = "You are loved and appreciated!";
        emoji = "🤗";
    } else {
        resultText = "You're amazing, keep going!";
        emoji = "🔥";
    }

    // Show motivational quote after the result
    const motivationalQuotes = [
        "Believe in yourself and all that you are.",
        "You are braver than you believe, stronger than you seem, and smarter than you think.",
        "The only way to do great work is to love what you do.",
        "Your only limit is your mind."
    ];

    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

    document.getElementById("result").textContent = `${resultText} ${emoji} \n\nMotivational Quote: ${randomQuote}`;
}

function resetInput() {
    document.getElementById("thoughtInput").value = "";
    document.getElementById("result").textContent = "";
}
