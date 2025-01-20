// Function to fetch antonyms for a word using the Datamuse API
async function fetchAntonym(word) {
    try {
        const response = await fetch(`https://api.datamuse.com/words?rel_ant=${word}`);
        const data = await response.json();
        // Return the first antonym if available, otherwise null
        return data.length > 0 ? data[0].word : null;
    } catch (error) {
        console.error("Error fetching antonym:", error);
        return null;
    }
}

// Transform negative thoughts to positive thoughts dynamically
async function transformNegativeToPositive(inputText) {
    const words = inputText.toLowerCase().split(" "); // Split input into words
    const transformedWords = await Promise.all(
        words.map(async (word) => {
            const antonym = await fetchAntonym(word);
            return antonym || word; // Replace with antonym if available, otherwise keep original word
        })
    );
    return transformedWords.join(" "); // Join transformed words into a sentence
}

// Event listener for the "Submit" button
document.getElementById("submit-thought").addEventListener("click", async () => {
    const userInput = document.getElementById("thought-input").value.trim();

    if (!userInput) {
        document.getElementById("result").innerText = "Please enter a thought!";
        return;
    }

    // Display a loading message while processing
    document.getElementById("result").innerText = "Transforming your thoughts...";

    // Transform the input text
    const positiveThought = await transformNegativeToPositive(userInput);

    // Display the result
    document.getElementById("result").innerText = 
        `Your positive thought: "${positiveThought}"`;
});
