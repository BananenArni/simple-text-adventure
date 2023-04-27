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
    const buttons = await createButtons(options);
    await fadeIn(containerElement);
    await typeWriter(story[scene].displayText);
    await showButtons(buttons, options);
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

async function createButtons(options) {
    let buttons = [];
    for (let i = 0; i < options.length; i++) {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.style.opacity = 0;
        button.style.height, button.style.padding = "0px";
        optionButtonsElement.appendChild(button);
        let newScene = options[i].destination;
        button.addEventListener('click', () => gameManager(newScene));
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
    return new Promise (resolve => {
        let h, p = 0;
        while (h < 38) {
            h += 1;
            button.style.height = `${h}px`;
        }
        button.style.height = "auto";
        while (p < 6) {
            p+= 1;
            button.style.padding = `${p}px 10px`;
        }
        resolve();
    });
}

function fadeIn(element) {
    if (!element) return
    return new Promise (resolve => {
        let opc = 0;
        while (opc < 1) {
            opc += 0.01;
            element.style.opacity = opc;
        }
        resolve();
    });
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

function sleep(time) {
    return new Promise (r => setTimeout(r, time));
}