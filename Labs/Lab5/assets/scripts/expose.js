// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let volume_slider = document.getElementById("volume");
  let horn_select = document.getElementById("horn-select");
  let volume_img = document.querySelector('#volume-controls img');
  let horn_img = document.querySelector('#expose>img');
  let audio = document.querySelector('audio');
  let button = document.querySelector('#expose>button');
  let selected = null;

  volume_slider.addEventListener('mousemove', function (e) {
    let v = e.target.value;
    if (v == 0) {
      volume_img.src = 'assets/icons/volume-level-0.svg';
    } else if (v < 33) {
      volume_img.src = 'assets/icons/volume-level-1.svg';
    } else if (v < 67) {
      volume_img.src = 'assets/icons/volume-level-2.svg';
    } else {
      volume_img.src = 'assets/icons/volume-level-3.svg';
    }
  });

  horn_select.addEventListener('change', function (e) {
    let v = e.target.value;
    horn_img.src = "assets/images/" + v + ".svg";
    selected = 'assets/audio/' + v + '.mp3';
  });

  button.addEventListener('click', function (e) {
    if (selected) {
      if (horn_select.value === 'party-horn') {
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti()
      }
      audio.volume = Number(volume_slider.value) / 100;
      audio.src = selected;
      audio.autoplay = false;
      audio.play();
    }
  });


}
