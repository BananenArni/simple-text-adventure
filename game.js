import story from "./story.js";

const containerElement = document.getElementById('container');
const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('btn-grid');

let multi = 1; //multiplicator for faster text

let inventory = [];

gameManager('intro');


async function gameManager(scene) {
    if (scene !== 'intro') await fadeOut(containerElement);
    textElement.innerHTML = "";
    optionButtonsElement.innerHTML = "";
    const options = story[scene].options;
    fadeIn(containerElement);
    await typeWriter(story[scene].displayText);
    await showButtons(options);
}

async function typeWriter(text) {
    let textArr = text.split('');
    textElement.innerHTML = "<p>";
    while (textArr.length) {
        let letter = textArr.shift();
        if (letter === "\n") {
            await sleep(300);
            textElement.innerHTML += "<br><br>";
        } else {
            textElement.innerHTML += letter;
        }
        await sleep(40);
    }
    await sleep(500);
    textElement.innerHTML += "</p>";
}

function createButtons(options) {
    let buttons = [];
    for (let i = 0; i < options.length; i++) {
        const button = document.createElement('button');
        button.classList.add('btn');
        let newScene = options[i].destination;
        button.addEventListener('click', () => {
            gameManager(newScene);
        }, { once: true });
        buttons.push(button);
    }
    return buttons;
}

async function showButtons(options) {
    const buttons = createButtons(options);
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.classList.add('unfold');
        optionButtonsElement.appendChild(button);
        await fadeIn(button);
        button.innerText = options[i].optionText;
    }
}

function expandButton(button) {
    
}

function fadeIn(element) {
    if (element.classList.contains('fadeOut')) {
        element.classList.remove('fadeOut');
    }
    return new Promise(res => {
        element.addEventListener('animationend', () => {
            res();
        }, { once: true });
        element.classList.add('fadeIn');
    });
}

function fadeOut(element) {
    if (element.classList.contains('fadeIn')) {
        element.classList.remove('fadeIn');
    }
    return new Promise(res => {
        element.addEventListener('animationend', () => {
            res();
        }, { once: true });
        element.classList.add('fadeOut');
    });
}

function sleep(time) {
    return new Promise (r => setTimeout(r, time));
}