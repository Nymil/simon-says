"use strict";

const _moveSequence = [];
let _isActionPhase = false;
let _currentMoveIndex = 0;

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
    displayMove(0);
}

function startActionPhase() {
    _isActionPhase = true;
    addClickableToColors();
}

function displayMove(currentIndex) {
    if (currentIndex >= _moveSequence.length) {
        startActionPhase();
        return;
    }
    setTimeout(() => { // timeout for small delay between showing different moves
        const currentMove = _moveSequence[currentIndex];
        const $button = document.querySelector(`#${currentMove}`);
        $button.classList.add('highlighted');
        setTimeout(() => {
            $button.classList.remove('highlighted');
            displayMove(++currentIndex);
        }, 1000);
    }, 500);
}

function addMoveToSequence() {
    const possibleMoves = ['red-button', 'blue-button', 'yellow-button', 'green-button'];
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    _moveSequence.push(possibleMoves[randomIndex]);
}

function handleColorClick($button) {
    if (!$button.classList.contains('clickable') || !_isActionPhase) {
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
