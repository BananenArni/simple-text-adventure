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
        displayText: `You slowly open your eyes and realize that you're lying on a dusty floor in an old abandoned house. The last thing you remember was going to bed in your cozy apartment, but now you're here, surrounded by decay and silence. You try to recall how you ended up in this eerie place, but your mind is foggy and confused.\nAs you sit up and take in your surroundings, you notice a table in the corner of the room. On it lies a stick, sleek and black, with intricate patterns etched into its surface. You can't help but feel drawn to it, like it's calling out to you.`,
        options: [
            {
                optionText: "Take the stick",
                destination: "take_stick"
            },
            {
                optionText: "Better leave it be",
                destination: "leave_stick"
            },
        ]
    },
    take_stick: {
        displayText: `You can't resist the stick's charm, so you pick it up and give it a good once-over. Suddenly, the stick starts to glow, and the door behind you bursts open with a loud crash.\nTo your surprise, a group of chickens comes marching in, each one of them carrying a small backpack and a pair of aviator goggles. Once they come to a halt in front of you, one of them clears its throat.\n”Greetings, traveler,” it says in a deep voice. “We are the keepers of the magic wand. Let's go, it's dangerous here.”`,
        options: [
            {
                optionText: "Follow the chickens",
                destination: "follow_chickens"
            },
            {
                optionText: "Get rid of the wand",
                destination: "leave_stick"
            },
        ]
    },
    leave_stick: {
        displayText: `Leaving the stick behind, you decide to exit the house through the back door. Right before your eyes, a small and fluffy dragon wearing plate armor is locked in a battle with a monstrous creature. The dragon wields two swords and moves with agility and precision, its eyes fixed on its opponent.\nAs you watch, the creature turns its attention towards you and leaps forward. Just as you're about to run for cover, the small dragon swoops in and rescues you. With a swift movement, it slices the monster's head off.\nThe small dragon looks at you with its bright, friendly eyes and invites you to mount its back.`,
        options: [
            {
                optionText: "Mount the dragon's back",
                destination: "mount_dragon"
            },
        ]
    },
    mount_dragon: {
        displayText: `With a grin of excitement, you hop onto the back of the small dragon, feeling its warmth beneath you. As it takes off into the sky, you hold on tightly, your heart pounding with anticipation. Soon, you spot a majestic castle in the distance, its walls towering high above the treetops. The small dragon circles the castle, gliding down towards the entrance.\nSuddenly, you hear a commotion behind you. Turning around, you see a flock of chickens charging at you, each one of them wearing a backpack and aviator goggles.`,
        options: [
            {
                optionText: "Flee to the castle's entrance",
                destination: "flee_castle"
            },
        ]
    },
    flee_castle: {
        displayText: `The chickens come at you with surprising speed, but the small dragon is even faster. It deftly dodges their attacks, its swords flashing through the air as it slices through their ranks. One by one, they fall to the ground, defeated.\nYou follow the dragon inside the castle, making your way up a rounded staircase, eventually coming into a big hall that looks like an ancient library. In the middle, a hooded figure notices you and immediately starts to attack you.`,
        options: [
            {
                optionText: "Fight the wizard",
                destination: "fight_with_dragon"
            },
        ]
    },
    fight_with_dragon: {
        displayText: `The dragon takes flight and you hold on tight as it evades the wizard's attacks, maneuvering with grace and agility. With a deft move, the dragon strikes the wizard with its swords, causing the hooded figure to stumble back in surprise.\nThe wizard continues to shoot magic at you, but the small dragon is too quick for him. It charges forward, swords raised, and with a mighty swing, it defeats the wizard.\nYou and the dragon make your way outside, walking into the sunset as the sky turns a vibrant shade of orange and pink. The small dragon turns its head to you and lets out a satisfied growl, as if to say that the adventure was worth it.`,
        options: [
            {
                optionText: "Restart",
                destination: "start"
            },
        ]
    },
    follow_chickens: {
        displayText: `As soon as you step out of the house, a ghostly figure materializes in front of you, causing you to jump in surprise. Immediately, it starts attacking you with all its fury. Just as it's about to strike, one of the chickens opens its beak wide and spits a stream of fire at the ghost, causing it to dissipate into thin air. You stare at the chicken in awe, wondering what the hell just happened.\n”Keep going, it's dangerous out here,” it says, nodding towards a distant castle.`,
        options: [
            {
                optionText: "Go to the castle",
                destination: "go_to_castle"
            },
        ]
    },
    go_to_castle: {
        displayText: `“You don't say!” You exclaim, still trying to process what just happened.\n Soon enough, the castle looms large in front of you, its dark towers stretching towards the sky like skeletal fingers. Suddenly, you hear a soft rustling noise behind you.\nYou turn around just in time to see a small, white dragon flying towards you! It's wielding two swords and wears a shiny plate armor on its fluffy body.\nThe chickens surround you and start spitting fire at the dragon, but it blocks the flames with its large wings. Just as the dragon is about to attack you, you remember the magic wand in your hands.`,
        options: [
            {
                optionText: "Point it at the dragon",
                destination: "defeat_dragon"
            },
            {
                optionText: "Run towards the castle",
                destination: "run_castle"
            },
        ]
    },
    run_castle: {
        displayText: `Horrified, you flee towards the castle, the chickens following you. Just in time, you manage to close the door before the dragon.\nTogether, you walk into the castle, climbing up a narrow spiral staircase that seems to go on forever.\nFinally, you reach the top floor and find yourself in a large room filled with shelves full of ancient-looking books and strange objects. In the center of the room stands a tall, hooded figure, his face obscured in shadow. “At last, my wand! Hand it over, infidel!”`,
        options: [
            {
                optionText: "Comply",
                destination: "comply_wizard"
            },
            {
                optionText: "Refuse",
                destination: "refuse_wizard_2"
            },
        ]
    },
    defeat_dragon: {
        displayText: `You hold up the wand, closing your eyes in fear. You hear a loud boom, and when you open your eyes, the dragon is lying defeated on the ground. The chickens cheer and flap their wings, celebrating your victory.\nTogether, you walk into the castle, climbing up a narrow spiral staircase that seems to go on forever.\nFinally, you reach the top floor and find yourself in a large room filled with shelves full of ancient-looking books and strange objects. In the center of the room stands a tall, hooded figure, his face obscured in shadow. “At last, my wand! Hand it over, infidel!”`,
        options: [
            {
                optionText: "Comply",
                destination: "comply_wizard"
            },
            {
                optionText: "Refuse",
                destination: "refuse_wizard"
            },
        ]
    },
    refuse_wizard_2: {
        displayText: `"You are making a grave mistake," he warns. In that moment, one of the chickens attempts to snatch the wand from your hand, but you quickly fend them off, using your wand to blast them away.\nThe hooded figure chuckles. "You have quite the feisty companions, it seems. But do not be mistaken, they are not my chickens. I am but a humble wizard who has been studying ancient magic in this castle for years. This wand rightfully belongs to me.”`,
        options: [
            {
                optionText: "Believe him",
                destination: "comply_wizard"
            },
            {
                optionText: "Fight him",
                destination: "fight_wizard_2"
            },
        ]
    },
    refuse_wizard: {
        displayText: `"You are making a grave mistake," he warns. In that moment, one of the chickens attempts to snatch the wand from your hand, but you quickly fend them off, using your wand to blast them away.\nThe hooded figure chuckles. "You have quite the feisty companions, it seems. But do not be mistaken, they are not my chickens. I am but a humble wizard who has been studying ancient magic in this castle for years. This wand rightfully belongs to me.”`,
        options: [
            {
                optionText: "Believe him",
                destination: "comply_wizard"
            },
            {
                optionText: "Fight him",
                destination: "fight_wizard"
            },
        ]
    },
    comply_wizard: {
        displayText: `As the hooded figure demands the wand, you hesitate. He seems sincere enough, but something in his eyes sends a shiver down your spine. Reluctantly, you hand over the wand.\n"Thank you," the wizard says with a smirk. "You've made the right choice."\n Suddenly, the chickens surrounding you squawk loudly and start pecking at your feet. You try to shoo them away, but they seem to be guiding you towards a wooden door. It suddenly swings open and you fall into a dark dungeon.`,
        options: [
            {
                optionText: "Restart",
                destination: "start"
            }
        ]
    },
    fight_wizard: {
        displayText: `You firmly grip the wand and refuse to hand it over. The wizard's eyes narrow, and suddenly he raises his hand, shooting a bolt of lightning in your direction. You quickly dodge, narrowly avoiding the deadly attack, and retaliate with a blast of fire from your wand.\nAs the battle rages on, the wounded dragon suddenly appears in the room, limping and breathing heavily. It sees you in danger and lets out a roar, catching the wizard off guard. In that moment of distraction, you seize the opportunity and cast a powerful spell, sending the wizard flying backwards into a shelf full of ancient artifacts. The impact causes the shelf to collapse, burying the wizard under a pile of debris.`,
        options: [
            {
                optionText: "Help the dragon",
                destination: "end_1"
            }
        ]
    },
    fight_wizard_2: {
        displayText: `You firmly grip the wand and refuse to hand it over. The wizard's eyes narrow, and suddenly he raises his hand, shooting a bolt of lightning in your direction. You quickly dodge, narrowly avoiding the deadly attack, and retaliate with a blast of fire from your wand.\nAs the battle rages on, the dragon suddenly appears in the room with a raging roar. The wizard seems shocked at its sight. In that moment of distraction, you seize the opportunity and cast a powerful spell, sending the wizard flying backwards into a shelf full of ancient artifacts. The impact causes the shelf to collapse, burying the wizard under a pile of debris.`,
        options: [
            {
                optionText: "Approach the dragon",
                destination: "end_2"
            }
        ]
    },
    end_1: {
        displayText: `As you watch the dragon slowly lift its head, you can see the gratitude in its eyes. It lets out a soft growl and nudges your hand with its snout, as if thanking you for saving its life.\n You smile at the dragon and pat its snout gently, feeling a sense of accomplishment and relief. Together, you make your way out of the castle, the warmth of the sun on your face as you step out into the open air.`,
        options: [
            {
                optionText: "Restart",
                destination: "start"
            }
        ]
    },
    end_2: {
        displayText: `As you watch the dragon soar high above you, you can't help but feel a sense of awe and wonder. Suddenly, the dragon begins to descend towards you, its wings beating gracefully through the air. As it lands softly on the ground beside you, the dragon looks at you with its bright, friendly eyes, and nudges your hand with its snout. You smile at the dragon and pat its snout gently, feeling a sense of connection and trust.\nTogether, you make your way out of the castle, the warmth of the sun on your face as you step out into the open air.`,
        options: [
            {
                optionText: "Restart",
                destination: "start"
            }
        ]
    },
}

export default story;