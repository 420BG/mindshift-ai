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
    "not good enough": [
        "You are more than enough!",
        "You are worthy of success and happiness.",
        "You bring value to the world in ways you can’t even imagine.",
        "You are enough, just as you are."
    ],
    "alone": [
        "You are not alone, you are loved and appreciated!",
        "Being alone is sometimes the best way to find yourself.",
        "You are never truly alone. Love surrounds you.",
        "There is always light in the dark. Keep going."
    ],
    "unworthy": [
        "You are worthy of all the love and success life has to offer!",
        "You deserve the best, and you can achieve the best.",
        "You have the power to create a life you love.",
        "You are deserving of happiness and peace."
    ],
    "afraid": [
        "Fear is a natural part of growth. Embrace it!",
        "Courage is not the absence of fear, but the triumph over it.",
        "You are braver than you believe.",
        "Don’t let fear hold you back from greatness."
    ],
    "overwhelmed": [
        "One step at a time. You’ve got this!",
        "Break it down. Take a deep breath. You can handle it.",
        "You are capable of handling whatever comes your way.",
        "The storm will pass, and you will come out stronger."
    ],
    "hopeless": [
        "There is always hope, even in the darkest times.",
        "You have the strength to turn things around.",
        "The only way out is through. Keep pushing forward.",
        "Your best days are ahead of you."
    ],
    "stressed": [
        "Take a deep breath. You are in control of your emotions.",
        "Stress is temporary. Peace is permanent.",
        "You are capable of handling whatever comes your way.",
        "Let go of stress and embrace calmness."
    ],
    "tired": [
        "Rest when you need to, but don’t give up.",
        "You are stronger than your tiredness.",
        "One step at a time, you’re getting closer to your goals.",
        "Take a break, recharge, and keep moving forward."
    ],
    "rejected": [
        "Rejection is not a reflection of your worth.",
        "You are valuable, and the right opportunities will find you.",
        "Every no brings you closer to a yes.",
        "Rejection is simply redirection to something better."
    ],
    "unmotivated": [
        "You have the power to inspire yourself.",
        "Small steps lead to big achievements.",
        "Your future self will thank you for taking action today.",
        "You are capable of so much more than you realize."
    ],
    "unsure": [
        "It’s okay to not have all the answers right now.",
        "Trust the process, everything will make sense soon.",
        "The path will become clear as you keep moving forward.",
        "You are exactly where you need to be."
    ],
    "worried": [
        "Worrying won’t change the outcome. Take action instead.",
        "Focus on what you can control and let go of what you can’t.",
        "You have the strength to face anything that comes your way.",
        "Don’t let worry steal your peace of mind."
    ],
    "anxious": [
        "Anxiety is just your mind trying to prepare you for success.",
        "Breathe in calmness, breathe out stress.",
        "You are in control of your thoughts, don’t let them control you.",
        "Your mind can be your greatest ally. Calm it with positivity."
    ],
    "lonely": [
        "You are never truly alone. Love surrounds you.",
        "Your worth is not defined by how many people are around you.",
        "Sometimes, solitude helps you find your inner strength.",
        "You are a beautiful person, deserving of all the love in the world."
    ],
    "hopeless": [
        "Hope is not lost. It’s just a matter of perspective.",
        "You are capable of finding your way out of this.",
        "Every challenge is an opportunity for growth.",
        "Hope is the one thing that keeps you going."
    ],
    "angry": [
        "Take a deep breath. You are stronger than your anger.",
        "Anger only hurts you. Let it go and find peace.",
        "In moments of anger, remember your inner calm.",
        "You have the power to choose peace over anger."
    ]
};

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

function resetInput() {
    document.getElementById("thoughtInput").value = "";
    document.getElementById("result").textContent = "";
}
