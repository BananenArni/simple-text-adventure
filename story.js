const story = {
    intro: {
        displayText: "",
        options: [
            {
                optionText: "Start",
                destination: "start"
            }
        ]
    },
    start: {
        displayText: "You find yourself standing on the shore of a deserted island, surrounded by dense jungle and turquoise waters. You have no idea how you got here, but the last thing you remember is signing up for a luxurious Caribbean vacation.\nAs you take in your surroundings, you notice a small, tattered note pinned to a nearby tree.\nIt reads 'Welcome to paradise! Enjoy your stay and don't forget to watch out for the wild boars.'",
        options: [
            {
                optionText: "Explore the jungle",
                destination: "explore"
            },
            {
                optionText: "Continue along the beach",
                destination: "beach"
            },
        ]
    },
    explore: {
        displayText: "You push your way through the underbrush, trying to avoid stepping on any dangerous creatures or tripping over any roots. The humidity is high, and you can feel beads of sweat forming on your forehead.\nAs you wander deeper into the jungle, you come across a small clearing. In the center of the clearing, you see a strange stone statue of a humanoid figure with a mischievous grin. It looks like it's been there for centuries, covered in moss and vines.",
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