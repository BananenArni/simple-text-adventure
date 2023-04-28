import story from "./story.js";

const containerElement = document.getElementById('container');
const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('btn-grid');

let inventory = [];

gameManager('intro');


async function gameManager(scene) {
    if (scene !== 'intro') {
        await fadeOut(containerElement);
        textElement.innerHTML = "";
        optionButtonsElement.innerHTML = "";
    }
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
            textElement.innerHTML += "<br><br>";
        } else {
            textElement.innerHTML += letter;
        }
        await sleep(40);
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
        button.addEventListener('click', () => {
            gameManager(newScene);
        }, { once: true });
        optionButtonsElement.appendChild(button);
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