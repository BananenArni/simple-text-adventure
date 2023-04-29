import story from "./story.js";

const containerElement = document.getElementById('main-container');
const textElement = document.getElementById('text');
const optionsElement = document.getElementById('options');
const slowButton = document.getElementById('slow');
const fastButton = document.getElementById('fast');
const choiceButtonsElement = document.getElementById('btn-grid');

slowButton.addEventListener('click', () => toggleSpeedButtons('slow'));
fastButton.addEventListener('click', () => toggleSpeedButtons('fast'));

let textSpeed = 1; 

startGame();


async function startGame() {
    const startButton = document.createElement('button');
    startButton.classList.add('btn');
    startButton.innerText = "Let's start!";
    startButton.addEventListener('click', async () => {
        await fadeOut(containerElement);
        optionsElement.style.visibility = 'visible';
        textElement.style.textAlign = 'left';
        gameManager('start');
    }, { once: true });
    choiceButtonsElement.appendChild(startButton);
    textElement.innerHTML = story['intro'].displayText;
    await fadeIn(containerElement);
}

function toggleSpeedButtons(speed) {
    if (speed === 'fast') {
        slowButton.classList.remove('option-btn-active');
        fastButton.classList.add('option-btn-active');
        textSpeed = 4;
    } else {
        fastButton.classList.remove('option-btn-active');
        slowButton.classList.add('option-btn-active');
        textSpeed = 1;
    }
}

async function gameManager(scene) {
    textElement.innerHTML = "";
    choiceButtonsElement.innerHTML = "";
    const options = story[scene].options;
    const buttons = createButtons(options);
    fadeIn(containerElement); //no await to make it look more dynamic
    await typeWriter(story[scene].displayText);
    await showButtons(buttons, options);
}

async function typeWriter(text) {
    let textArr = text.split('');
    while (textArr.length) {
        let letter = textArr.shift();
        if (letter === "\n") {
            await sleep(300);
            textElement.innerHTML += "<br>";
            await sleep(300);
            textElement.innerHTML += "<br>";
        } else {
            textElement.innerHTML += letter;
        }
        await sleep(40/textSpeed);
    }
    await sleep(500);
}

function sleep(time) {
    return new Promise (r => setTimeout(r, time));
}

function createButtons(options) {
    let buttons = [];
    for (let i = 0; i < options.length; i++) {
        const button = document.createElement('button');
        button.classList.add('btn', 'hidden');
        let newScene = options[i].destination;
        button.addEventListener('click', async () => {
            await fadeOut(containerElement);
            gameManager(newScene);
        }, { once: true });
        choiceButtonsElement.appendChild(button);
        buttons.push(button);
    }
    return buttons;
}

async function showButtons(buttons, options) {
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        await expandButton(button);
        button.innerText = options[i].optionText;
        await fadeIn(button);
    }
}

function expandButton(button) {
    return new Promise(res => {
        button.classList.add('unfold');
        button.addEventListener('animationend', () => {
            button.classList.add('unfolded');
            button.classList.remove('unfold', 'hidden');
            res();
    }, { once: true });
    });
}

function fadeIn(element) {
    return new Promise(res => {
        element.addEventListener('animationend', () => {
            element.classList.remove('fadeIn');
            element.style.opacity = 1;
            res();
        }, { once: true });
        element.classList.add('fadeIn');
    });
}

function fadeOut(element) {
    return new Promise(res => {
        element.addEventListener('animationend', () => {
            element.classList.remove('fadeOut');
            res();
        }, { once: true });
        element.classList.add('fadeOut');
    });
}