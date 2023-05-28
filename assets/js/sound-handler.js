"use strict";

function loadSounds() {
    let loc = "..";
    if (window.location.pathname.includes('index.html')) {
        loc = "assets";
    }
    // makes div with sounds
    const soundsDiv = document.createElement('div');
    soundsDiv.id = 'sounds';
    soundsDiv.innerHTML = `
    <audio id="lose-sound" src="${loc}/sounds/lose-sound.mp3"></audio>
  `;
    // adds the div to html
    document.body.appendChild(soundsDiv);
}

function playSound(id) {
    const $sound = document.querySelector(`#${id}`);
    $sound.currentTime = 0;
    $sound.play();
}
