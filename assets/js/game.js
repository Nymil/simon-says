"use strict";

const _moveSequence = [];

function handleButtonClick(e) {
    e.preventDefault();
    const $button = e.target;
    $button.id === 'start-button' ? handleStartClick($button) : handleColorClick($button);
}

function handleStartClick($button) {
    if (!$button.classList.contains('clickable')) {
        return;
    }
    $button.classList.remove('clickable');
    addMoveToSequence();
    startRound();
}

function startRound() {
    displayMoveSequence();
}

function displayMoveSequence() {
    _moveSequence.forEach(move => {
        const $button = document.querySelector(`#${move}`);
    });
}

function addMoveToSequence() {
    const possibleMoves = ['red-button', 'blue-button', 'yellow-button', 'green-button'];
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    _moveSequence.push(possibleMoves[randomIndex]);
}

function handleColorClick($button) {
    if (!$button.classList.contains('clickable')) {
        return;
    }
    const clickedId = $button.id;
}

function addClickableToColors() {
    document.querySelectorAll("#green-button, #blue-button, #red-button, #yellow-button")
        .forEach($button => $button.classList.add('clickable'));
}

function removeClickableFromColors() {
    document.querySelectorAll("#green-button, #blue-button, #red-button, #yellow-button")
        .forEach($button => $button.classList.remove('clickable'));
}
