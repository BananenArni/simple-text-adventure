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
        button.classList.add('btn', 'unfold');
        let newScene = options[i].destination;
        button.addEventListener('click', () => gameManager(newScene));
        buttons.push(button);
    }
    return buttons;
}

async function showButtons(options) {
    const buttons = createButtons(options);
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.innerText = options[i].optionText;
        optionButtonsElement.appendChild(button);
        await fadeIn(button);
    }
}

function expandButton(button) {
    
}

async function fadeIn(element) {
    //if (element.classList.contains('fadeOut')) {
        element.classList.remove('fadeOut');
    //}
    element.classList.add('fadeIn');
    await sleep(950);
}

async function fadeOut(element) {
    //if (element.classList.contains('fadeIn')) {
        element.classList.remove('fadeOut');
    //}
    element.classList.add('fadeOut');
    await sleep(950);
}

function sleep(time) {
    return new Promise (r => setTimeout(r, time));
}