import story from "./story.js";

const containerElement = document.getElementById('container');
const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('btn-grid');

let inventory = [];

restartGame();


async function gameManager(scene) {
    await fadeOut(containerElement);
    textElement.innerHTML = "";
    optionButtonsElement.innerHTML = "";
    await fadeIn(containerElement);
    const options = story[scene].options || 'restart';
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
        await sleep(10);
    }
    await sleep(250);
    textElement.innerHTML += "</p>";
}

function createButtons(options) {
    let buttons = [];
    if (options !== 'restart') {
        for (let i = 0; i < options.length; i++) {
            const button = document.createElement('button');
            buttons.push(button);
            button.innerText = options[i].optionText;
            button.classList.add('btn');
            let newScene = options[i].destination;
            button.addEventListener('click', () => gameManager(newScene));
            button.style.opacity = 0;
            optionButtonsElement.appendChild(button);
        }
    } else {
        const button = document.createElement('button');
        buttons.push(button);
        button.innerText = "Restart";
        button.classList.add('btn');
        button.addEventListener('click', () => restartGame());
        button.style.opacity = 0;
        optionButtonsElement.appendChild(button);
    }
    return buttons;
}

async function showButtons(options) {
    let buttons = createButtons(options);
    for (let i = 0; i < buttons.length; i++) {
        await sleep(500);
        await fadeIn(buttons[i]);
    }
}

async function fadeIn(element) {
    if (!element) return
    let opc = 0;
    while (opc < 1) {
        opc += 0.01;
        element.style.opacity = opc;
    }
    await sleep(250);
}

async function fadeOut(element) {
    if (!element) return
    let opc = 100;
    while (opc > 0) {
        opc -= 0.01;
        element.style.opacity = opc;
    }
    await sleep(750);
}

async function sleep(time) {
    await new Promise (t => setTimeout(t, time));
}

function restartGame() {
    inventory = [];
    gameManager('start');
}