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
        displayText: "Story start text\nblablabla\nnn",
        options: [
            {
                optionText: "Restart",
                destination: "explore"
            },
            {
                optionText: "Go on",
                destination: "corridor"
            },
        ]
    },
    explore: {
        displayText: "You push your way throu\nto avoid stepp\ncreatures or tripp",
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
    statue: {
        displayText: `You approach the
        
fascinated by the

As you struggle e .`,
        options: [
            {
                optionText: "Try out the key to open the door",
                destination: "start"
            },
            {
                optionText: "Try out the key to open the door",
                destination: "start"
            },
            {
                optionText: "Try out the key to open the door and then get the hell out",
                destination: "start"
            },
        ]
    },
    corridor: {
        displayText: `You approach the ancient statue, fascinated by the ornate key it's holding, but as you reach out to grab it, the ground beneath your feet suddenly crumbles. You fall down a deep hole and land on the ground with a loud thud, twisting your ankle painfully in the process.

        As you struggle to stand up, you take a quick glance around and find yourself in a poorly lit room with a single door marked with a strange symbol.`,
    },
}

export default story;