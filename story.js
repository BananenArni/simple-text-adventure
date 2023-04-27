const story = {
    intro: {
        displayText: "Welcome to this little text adventure!",
        options: [
            {
                optionText: "Start",
                destination: "start"
            }
        ]
    },
    start: {
        displayText: "Story start text",
        options: [
            {
                optionText: "Restart",
                destination: "explore"
            },
            {
                optionText: "Go on",
                destination: "beach"
            },
        ]
    },
    explore: {
        displayText: "You push your way through the underbrush, trying\nto avoid stepping on any dangerous\ncreatures or tripping over any roots. The humidity is high, and you can feel beads of sweat forming on your forehead.\nAs you wander deeper into the jungle, you come across a small clearing. In the center of the clearing, you see a strange stone statue of a humanoid figure with a mischievous grin. It looks like it's been there for centuries, covered in moss and vines.",
        options: [
            {
                optionText: "Investigate the statue",
                destination: "statue",
                addInventory: "An ornate key"
            },
            {
                optionText: "Leave it and continue through the jungle",
                destination: "jungle"
            },
        ]
    },
    beach: {
        displayText: `This

is a 

test.`,
    },
    statue: {
        displayText: `You approach the ancient statue, fascinated by the ornate key it's holding, but as you reach out to grab it, the ground beneath your feet suddenly crumbles. You fall down a deep hole and land on the ground with a loud thud, twisting your ankle painfully in the process.

        As you struggle to stand up, you take a quick glance around and find yourself in a poorly lit room with a single door marked with a strange symbol.`,
        options: [
            {
                optionText: "Try out the key to open the door",
                destination: "corridor"
            },
        ]
    },
    corridor: {
        displayText: `You approach the ancient statue, fascinated by the ornate key it's holding, but as you reach out to grab it, the ground beneath your feet suddenly crumbles. You fall down a deep hole and land on the ground with a loud thud, twisting your ankle painfully in the process.

        As you struggle to stand up, you take a quick glance around and find yourself in a poorly lit room with a single door marked with a strange symbol.`,
    },
}

export default story;