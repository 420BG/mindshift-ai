// Function to fetch synonyms for a word using the Datamuse API
async function fetchSynonyms(word) {
    try {
        const response = await fetch(`https://api.datamuse.com/words?rel_ant=<word>`);
        const data = await response.json();
        // Return the first synonym, or null if no synonyms are found
        return data.length > 0 ? data[0].word : null;
    } catch (error) {
        console.error("Error fetching synonyms:", error);
        return null;
    }
}

// Transform negative thoughts to positive affirmations dynamically
async function transformToPositive(inputText) {
    const words = inputText.toLowerCase().split(" ");
    const transformedWords = await Promise.all(
        words.map(async (word) => {
            const synonym = await fetchSynonyms(word);
            return synonym || word; // Use the synonym if available, otherwise keep the original word
        })
    );
    return transformedWords.join(" ");
}

// Event listener for the submit button
document.getElementById("submit-thought").addEventListener("click", async () => {
    const userInput = document.getElementById("thought-input").value;
    if (userInput.trim() === "") {
        document.getElementById("result").innerText = "Please enter a thought!";
        return;
    }

    // Transform the user's input
    document.getElementById("result").innerText = "Transforming...";
    const positiveThought = await transformToPositive(userInput);
    document.getElementById("result").innerText = 
        `Your positive affirmation: "${positiveThought}"`;
    document.getElementById("thought-input").value = ""; // Clear input field
});
