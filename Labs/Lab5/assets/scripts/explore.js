// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  if (typeof speechSynthesis === 'undefined') {
    return;
  }
  let voice_select = document.getElementById('voice-select');
  let text_to_speak = document.getElementById('text-to-speak');
  let btn = document.querySelector('#explore>button');

  let voices = speechSynthesis.getVoices();
  let idx = 0;
  for (let voice of voices) {
    voice_select.innerHTML += `<option value="${idx}" >${voice.name}</option>`;
    idx++;
  }

  let selectedIndex = -1;
  voice_select.addEventListener('change', function (e) {
    selectedIndex = Number(e.target.value);
  });

  btn.addEventListener('click', function () {
    if (selectedIndex != -1) {
      let voice = voices[selectedIndex];
      let text = text_to_speak.value;
      console.log(text);
      const utterThis = new SpeechSynthesisUtterance(text);
      utterThis.voice = voice;
      speechSynthesis.speak(utterThis);
    }
  });


}
