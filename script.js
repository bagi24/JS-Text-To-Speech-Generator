const button = document.querySelector("button");
const textArea = document.querySelector("textarea");
const voiceSelect = document.querySelector("select");

let speech = new SpeechSynthesisUtterance();
let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

const handleSelectSpeak = () => {
  speech.voice = voices[voiceSelect.value];
};

voiceSelect.addEventListener("change", handleSelectSpeak);

const handleclickBtn = () => {
  speech.text = textArea.value;
  window.speechSynthesis.speak(speech);
};

button.addEventListener("click", handleclickBtn);
