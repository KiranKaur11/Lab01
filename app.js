// Create a new speechSynthesis object
var synth = window.speechSynthesis;

// Arrays for each category
var nouns = ["The Rooster", "Mother", "Father", "The dog", "My Proffesor" , "The elephant", "The Kitty"]; // Replace with your own words
var verbs = ["sat ", "ate", "danced with", "saw", "hate", "love"]; // Replace with your own words
var adjectives = ["a funny", "a ghost", "a goofy", "a slimy", "a barking", "a chummy"]; // Replace with your own words
var nouns2 = ["mountain goat", " leaf monkey", "fish", "cow", "frog", "lady bug", "earth worm"]; // Replace with your own words
var places = ["on the half moon", "on the chair", "in my noodles", "in my soup", "on the plant","in my shoes"]; // Replace with your own words

// Initialize sentence parts
var sentenceParts = [null, null, null, null, null];
var textToSpeak = '';

// Function to speak text
function speakNow(string) {
    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

// Function to pick a random element from an array
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function resetStory() {
    document.getElementById("sentence").textContent = "";
    textToSpeak = "";
}

// Event listener for the reset button
document.getElementById("resetButton").addEventListener("click", function() {
    resetStory();
});

// Function to update the sentence
function updateSentence() {
    textToSpeak = sentenceParts.filter(Boolean).join(" ");
    document.getElementById("sentence").textContent = textToSpeak;
}

// Event listeners for each button
document.getElementById("nounButton").addEventListener("click", function() {
    sentenceParts[0] = getRandomElement(nouns);
    updateSentence();
});

document.getElementById("verbButton").addEventListener("click", function() {
    sentenceParts[1] = getRandomElement(verbs);
    updateSentence();
});

document.getElementById("adjectiveButton").addEventListener("click", function() {
    sentenceParts[2] = getRandomElement(adjectives);
    updateSentence();
});

document.getElementById("noun2Button").addEventListener("click", function() {
    sentenceParts[3] = getRandomElement(nouns2);
    updateSentence();
});

document.getElementById("placeButton").addEventListener("click", function() {
    sentenceParts[4] = getRandomElement(places);
    updateSentence();
});

// Use the speakNow function for the speak button
document.getElementById("speakButton").addEventListener("click", function() {
    if (textToSpeak) {
        speakNow(textToSpeak);
    }
});

// Function to generate a random story
function generateRandomStory() {
    var randomStory = [
        getRandomElement(nouns),
        getRandomElement(verbs),
        getRandomElement(adjectives),
        getRandomElement(nouns2),
        getRandomElement(places)
    ].join(" ");
    document.getElementById("sentence").textContent = randomStory;
    textToSpeak = randomStory;
}

// Event listener for the random story button
document.getElementById("randomStoryButton").addEventListener("click", function() {
    generateRandomStory();
});