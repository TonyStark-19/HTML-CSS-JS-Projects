// js logic

// getting speech using js
let speech = new SpeechSynthesisUtterance();

// voices array
let voices = [];

let voiceSelect = document.querySelector("select");

// changing voices
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    // default voice index 0
    speech.voice = voices[0];

    // creating all options
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

// changing voices
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
})

// Button for playing the speech
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});