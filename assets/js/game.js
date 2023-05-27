
let _moveSequence = [];
let _gameStarted = false;

function handleButtonClick(e) {
    e.preventDefault();
    const $button = e.target;
    $button.id === 'start-button' ? handleStartClick() : handleColorClick($button);
}

function handleStartClick() {
    return -1;
}

function handleColorClick($button) {
    const clickedColor = $button.id.split('-')[0];
}
