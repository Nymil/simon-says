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
}

function handleColorClick($button) {
    if (!$button.classList.contains('clickable')) {
        return;
    }
    const clickedColor = colorFromId($button.id);
}

function colorFromId(id) {
    return id.split('-')[0];
}

function addClickableToColors() {
    document.querySelectorAll("#green-button, #blue-button, #red-button, #yellow-button")
        .forEach($button => $button.classList.add('clickable'));
}

function removeClickableFromColors() {
    document.querySelectorAll("#green-button, #blue-button, #red-button, #yellow-button")
        .forEach($button => $button.classList.remove('clickable'));
}
