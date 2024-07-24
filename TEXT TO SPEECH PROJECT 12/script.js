// Create a new SpeechSynthesisUtterance object
let speech = new SpeechSynthesisUtterance();

// Initialize an empty array to store the available voices
let voices = [];

// Get a reference to the select element
let voiceSelect = document.querySelector("select");

// Define an event handler for when the voices change
window.speechSynthesis.onvoiceschanged = () => {
    // Get the list of available voices
    voices = window.speechSynthesis.getVoices();

    // Set the default voice to the first one in the list
    speech.voice = voices[0];

    // Populate the select element with the available voices
    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

// Define an event handler for when the user selects a new voice
voiceSelect.addEventListener("change", () => {
    // Update the speech object with the newly selected voice
    speech.voice = voices[voiceSelect.value];
});

// Define an event handler for when the user clicks the button
document.querySelector("button").addEventListener("click", () => {
    // Get the text from the textarea
    speech.text = document.querySelector("textarea").value;

    // Speak the text using the selected voice
    window.speechSynthesis.speak(speech);
});