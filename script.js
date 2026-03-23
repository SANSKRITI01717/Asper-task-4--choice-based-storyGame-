let village = [
    {
        text: `Seven friends arrive in Mizukage Village under heavy rain, dragging backpacks and bad decisions. The traditional inn they "booked" does not exist on any map. Phones show one bar, then none.
A miserable, abandoned house sits on the hill like it is waiting for them to step inside. They find a ring of master keys on a shrine tray near the entrance, as if offered.
Clue: The key ring is tied with a white thread and has seven tags, even though nobody left it there.`,
        optionA: "Take the master keys and assign one to each friend",
        optionB: "Refuse the keys and search the village for help in the rain",
        nextA: 1,
        nextB: 2
    },
    {
        text: `They light lanterns. Shadows crawl up paper walls like living ink. Each friend laughs too loudly, forcing normality.
Names: You (Aoi) the observant one, Haru the leader, Mina the sweet one, Riku the joker, Sora the quiet one, Kei the jealous one, Yuto the nervous one.
They decide to check rooms on different floors, then regroup in the center hall.
Clue: One tag on the key ring reads "STOREHOUSE — DO NOT OPEN."`,
        optionA: "Follow the plan and let everyone check rooms alone",
        optionB: "Keep everyone together and inspect the ground floor first",
        nextA: 3,
        nextB: 4
    },
    {
        text: `Rain hits like nails. The village road loops strangely, leading back to the abandoned house no matter which turn they take.
A stone fox statue watches them from the mist, mouth stained dark. They find a torn paper sign: "Guests must be counted."
Clue: You see seven wet footprints in the mud… but one set is barefoot.`,
        optionA: "Track the barefoot prints toward the trees",
        optionB: "Return to the house and barricade the doors",
        nextA: 5,
        nextB: 6
    },
    {
        text: `Everyone splits. Floorboards complain under each step. You take the second floor, key cold in your palm.
Through thin walls you hear whispers that could be wind — or people pretending to be wind. The lantern light seems weaker, as if the house is drinking it.
Clue: In one room, you find a guest book open to a page with your name written neatly: AOI — ARRIVED.`,
        optionA: "Secretly check the forbidden STOREHOUSE key tag",
        optionB: "Go to the center hall early and count who returns",
        nextA: 7,
        nextB: 8
    },
    {
        text: `You keep everyone together. They explore the ground floor, but fear makes them step out of formation.
Riku jokes about ghosts. Kei snaps at him, too sharp for a joke. Yuto keeps checking pockets as if something is missing.
In the kitchen, a pot sits on the stove with dried black residue, like it once boiled something that fought back.
Clue: The house has no dust on the center hall floor, only along the edges — like people walk there often.`,
        optionA: "Search for hidden passages near the center hall wall panels",
        optionB: "Go upstairs anyway, but move in pairs instead of alone",
        nextA: 9,
        nextB: 10
    },
    {
        text: `You follow the barefoot prints into the trees. The forest is quiet in a way that feels staged.
A tiny roadside shrine appears. Inside, a charm made of white thread and bell metal swings without wind.
Sora is suddenly behind you, silent, eyes empty like a paused screen. "Don't count wrong," Sora says.
Clue: The shrine charm has seven bells, but one bell is cracked.`,
        optionA: "Ask Sora why they were following you",
        optionB: "Take the charm back to the house as evidence",
        nextA: 11,
        nextB: 12
    },
    {
        text: `They barricade the doors with furniture. The house creaks like it disapproves of boundaries.
Haru assigns sleeping spots. Kei insists that Haru "owes them" the safest room.
At midnight, the lanterns flicker and a soft click echoes from upstairs — like a lock being tested.
Clue: The master key ring is missing from where you placed it.`,
        optionA: "Wake everyone and search the house immediately",
        optionB: "Pretend to sleep and watch who moves in the dark",
        nextA: 13,
        nextB: 14
    },
    {
        text: `You unlock the storehouse. The air inside is colder than rain. Shelves hold old futons, broken masks, and jars labeled with dates.
A folded map lies on a crate showing a hidden passage behind the center hall.
Then you see a jar with a paper tag: "NAME RETURNED." It has a lock of hair inside.
Clue: The lock of hair matches Mina's hair color.`,
        optionA: "Confront Mina quietly before panic spreads",
        optionB: "Hide the discovery and set a trap using the passage map",
        nextA: 15,
        nextB: 16
    },
    {
        text: `You reach the center hall early. One by one they return. Haru. Riku. Mina. Kei. Yuto.
Sora does not return. The silence becomes a character in the room. Everyone talks at once, building fake certainty.
You count heads again. Six. The number hangs like a curse.
Clue: One master key tag is now stained with something dark, like diluted blood.`,
        optionA: "Lead a search for Sora upstairs right now",
        optionB: "Lock the center hall doors and interrogate the six of you first",
        nextA: 17,
        nextB: 18
    },
    {
        text: `You press the wall panels. One gives slightly, like a tooth that wants to come out. Behind it is a narrow space that smells of rust.
Riku laughs, but his laugh is thinner now. Kei watches you with hunger, like they want you to find something and regret it.
A small metal box is hidden inside, wrapped with white thread.
Clue: The box contains a spare set of master keys — meaning someone planned duplicates.`,
        optionA: "Accuse Haru of planning ahead and hiding keys",
        optionB: "Accuse Yuto, who keeps checking pockets, of stealing keys",
        nextA: 19,
        nextB: 20
    },
    {
        text: `You go upstairs in pairs. You choose Mina as your partner. The hallway seems longer than before.
In a room with torn wallpaper, Mina finds a cracked mirror. For a second, your reflection is delayed, smiling when you are not.
Mina whispers: "Do you think one of us invited us here?"
Clue: Under the mirror is a note scratched into wood: "BETRAYAL SAVES ONE."`,
        optionA: "Tell Haru about the message and watch reactions",
        optionB: "Keep it secret and test someone with a lie",
        nextA: 21,
        nextB: 22
    },
    {
        text: `You ask Sora why they followed you. Sora's eyes twitch like they are fighting a thought.
"I heard my name," Sora says. "In the house. It said I shouldn't exist."
Then Sora smiles softly. "If I disappear, promise you won't search too hard."
Clue: Sora's wrist has a faint red mark — like a key tag string was tied too tight.`,
        optionA: "Drag Sora back to the group, no matter what they want",
        optionB: "Let Sora go, and follow from a distance to see what happens",
        nextA: 23,
        nextB: 24
    },
    {
        text: `You bring the charm back. The bells jingle softly, making everyone's skin tighten.
Haru says it's superstition. Kei says it's a warning. Riku says it's "cool." Mina says nothing — too quiet.
Yuto suddenly speaks: "Seven bells… but we are seven. Why is one cracked?"
Clue: The cracked bell has a carved initial: "S."`,
        optionA: "Decide the cracked bell means Sora is marked and protect them",
        optionB: "Decide the cracked bell is a frame, and watch who suggests Sora is guilty",
        nextA: 25,
        nextB: 26
    },
    {
        text: `You wake everyone and search. The house becomes a maze when you are afraid. Doors lead to rooms you swear were not there.
In the third-floor corner, you find Sora lying still, neck bent at a wrong angle, eyes open like they are still watching you think.
Someone screams. Someone else sighs in relief — too fast.
Clue: Sora's hand clutches a key tag labeled "STOREHOUSE."`,
        optionA: "Assume Sora discovered something and go straight to the storehouse",
        optionB: "Assume the murderer planted the tag and inspect the body for staging",
        nextA: 27,
        nextB: 28
    },
    {
        text: `You pretend to sleep. In the dark, you hear soft steps — two sets, not one.
A faint click: a key tested. A whisper: "Do it now." Another voice answers, trembling: "I can't."
Your heart pounds. Betrayal isn't loud. It's careful.
Clue: You glimpse a silhouette wearing Haru's jacket, but the walk looks like Kei's.`,
        optionA: "Follow the silhouettes quietly to catch them in the act",
        optionB: "Stay hidden and instead set an ambush at the center hall",
        nextA: 29,
        nextB: 30
    },
    {
        text: `ENDING — False Accusation (Mina Breaks)\n\nYou confront Mina about the hair jar. Mina bursts into tears and admits they lied about the booking — they never confirmed the inn.\nBut Mina swears they did not kill Sora. The group hears only confession and turns it into a verdict. Mina is tied up. That night, another person vanishes.\n\nMina's guilt is real, but it is guilt of mistake, not murder.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — Trap Works, Truth Is Ugly\n\nYou hide in the wall passage. Someone comes at 3 a.m., humming softly. It is Haru — holding the duplicate keys — and Kei behind them, smiling like a blade.\nThey argue in whispers: Haru planned the trip to confront Sora about an old betrayal. Kei came to "finish it."\n\nHaru lured the group here. Kei used the plan to commit the murder.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — You Die\n\nYou lead the search upstairs with only a lantern. A door shuts behind you. Tape seals it. You laugh once, because you finally understand the lock trick too late.\nA shadow steps close, and a cold object touches your neck with gentle precision.\n\nThe killer knows staging, patience, and how to isolate without panic.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — Wrong Verdict (Group Panic)\n\nYou lock everyone in and interrogate. Every answer sounds guilty because fear makes innocent people stutter. Kei uses that and points at Yuto. The group agrees because agreement is easier than thinking.\nLater, you find Sora's body.\n\nThe murderer used the group's need for certainty to steer them away from the truth.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — Haru Confession (Half Truth)\n\nYou accuse Haru about the spare keys. Haru goes quiet, then admits they found the house online weeks ago — they wanted a "reset trip" after a betrayal among friends. They refuse to name who betrayed who.\n\nHaru is guilty of planning and secrecy, not the killing itself.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — Yuto Frame (Dark Twist)\n\nYou accuse Yuto. Yuto panics and runs. In the chaos, someone "finds" blood on Yuto's hands — too perfect, too fast. Yuto screams that it's not theirs. Nobody listens.\nYou later find tape residue on Kei's fingers, but it's too late.\n\nYuto was framed; the evidence appeared in a suspiciously convenient order.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — The Message Was the Trigger\n\nYou tell Haru about "BETRAYAL SAVES ONE." Haru's face tightens like an old wound reopened. Kei smiles. Mina looks sick. Riku suddenly stops joking.\nThat night, Riku is found unconscious near the passage wall, alive but broken.\n\nThe message wasn't prophecy — it was a button that pushed someone into action.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — Your Lie Creates a Killer\n\nYou tell a lie: "I saw someone with blood." You watch who flinches. Everyone flinches.\nYour mind spirals. You begin hearing Sora's voice in the rain, accusing you of counting wrong.\n\nYour own manipulation fractures your trust, and the case collapses inside your head.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — Sora Saved (But You Lose)\n\nYou drag Sora back to the group. Sora looks angry, like you stole their choice. Sora survives the night.\nBut in the morning, the storehouse is burned from inside. The map is gone. The duplicate keys are gone. The truth is erased.\n\nSaving Sora prevents the murder, but triggers evidence destruction by the real culprit.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — Sora Dies, You Witness the Betrayal\n\nYou follow Sora at a distance. Sora meets Haru in the rain corridor, like a planned appointment. Then Kei appears from the side passage with tape and keys, moving with calm hatred.\nYou see the shove. You hear the crack. You freeze.\n\nHaru arranged the meeting. Kei executed the murder. You saw it, but you didn't stop it.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — Protection Path (Sora Lives, Mina Confesses)\n\nYou protect Sora all night, refusing to let them walk alone. At dawn, Mina confesses: Mina forged the booking confirmation to impress everyone.\nThe confession releases pressure… and the murderer loses the perfect moment.\n\nThe murder attempt fails, revealing motive layers but not a clean culprit.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — The First Person to Say "Sora Did It"\n\nYou watch who tries to blame Sora first. Kei speaks immediately, confidently, like they rehearsed the sentence.\nYou notice tape residue on Kei's fingers, and a spare key tag tucked in Kei's sleeve. Kei laughs softly: "So you were watching words, not knives."\n\nKei's early blame attempt is a slip. Physical signs support staging and guilt.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — Storehouse Truth (Dark Motive)\n\nInside the storehouse, you find jars, hair, and a photo of all seven friends from years ago — one face scratched out: Sora's.\nA note: "Some friendships are cages." Another: "One betrayal deserves one death."\n\nThe house was selected to punish someone. The murder is tied to an old betrayal.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — Staged Body\n\nYou inspect Sora's body. Tape fibers on the sleeve. A faint line on the wrist from a key tag tie. The neck break happened elsewhere — then the body was moved and "found."\nWhen you say this aloud, Haru flinches… and Kei smiles.\n\nThe murder involved staging and transport, requiring keys, time, and cooperation.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — You Catch Them\n\nIn the passage gap, you see Haru holding the keys, hands shaking, whispering "I only wanted to scare Sora." Kei takes the keys like taking a crown. "Scaring is pointless. A betrayal needs a price."\nKei steps toward Sora's door. You stop them — too late to save the friendship, just in time to stop the next death.\n\nKei is the killer. Haru is the betrayer who built the stage.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — Ambush Backfires (You Become the Villain)\n\nYou set an ambush in the center hall. In the dark, someone screams and falls. When the lantern lights, the person is Mina — alive, but injured. Kei cries and points at you.\nThe group's fear chooses the easiest story: you planned it.\n\nThe real culprit uses your tactic to frame you, turning the group against you.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    }
];
let mirror = [
    {
        text: `Neon bleeds into rain. You wake on a school rooftop at 2:13 a.m., uniform soaked, a single black camellia pinned to your collar. Below, an ambulance siren dies mid-note — like it was cut.`,
        optionA: "Go down to the alley where the siren stopped",
        optionB: "Check your phone first, hands trembling",
        nextA: 1,
        nextB: 2
    },
    {
        text: `A body lies facedown in rainwater. The puddle is too dark. Not blood — printer ink. A torn page nearby reads: "You chose this."`,
        optionA: "Touch the victim's wrist (feel for warmth)",
        optionB: "Read the torn page fully, even if it feels wrong",
        nextA: 3,
        nextB: 4
    },
    {
        text: `Your lock screen shows a photo of you smiling beside someone whose face is scribbled out. A single notification:\n"MEET ME. OR REMEMBER ME."`,
        optionA: "Follow the GPS pin to the old subway station",
        optionB: "Call your only contact: Detective Kuroda",
        nextA: 5,
        nextB: 6
    },
    {
        text: `No pulse. But the corpse's hand is warm, as if it was holding yours moments ago. Under the nails: black petals crushed into paste.`,
        optionA: "Search the victim's pockets",
        optionB: "Look up at the rooftop edge, as if someone is watching",
        nextA: 7,
        nextB: 8
    },
    {
        text: `The torn page continues: "If you read this, you will start lying."\nYour mouth tastes like metal. You realize you've already memorized the handwriting.`,
        optionA: "Keep reading until the end",
        optionB: "Tear it up and pretend you never saw it",
        nextA: 9,
        nextB: 10
    },
    {
        text: `The abandoned platform is lit by vending machines that shouldn't have power. A girl in a black coat stands still, eyes like winter glass: Mika.`,
        optionA: "Approach Mika and ask who she is",
        optionB: "Hide and watch her hands (they're too clean)",
        nextA: 11,
        nextB: 12
    },
    {
        text: `Kuroda answers like they expected your call. "Don't go outside. Don't look in mirrors. And whatever you do — don't say the victim's name."`,
        optionA: "Ask for the victim's name anyway",
        optionB: "Agree, then lie and go outside immediately",
        nextA: 13,
        nextB: 14
    },
    {
        text: `Inside the victim's coat: a keycard to St. Orpheus Academy… with your signature on the back. The victim's phone wallpaper is your face.`,
        optionA: "Take the keycard and run to the academy",
        optionB: "Turn the phone on and check messages",
        nextA: 15,
        nextB: 16
    },
    {
        text: `A silhouette at the rooftop door — then gone. A faint sound: someone humming a lullaby you shouldn't know.`,
        optionA: "Chase the silhouette toward the stairwell",
        optionB: "Stay with the body and call emergency services",
        nextA: 17,
        nextB: 18
    },
    {
        text: `The final line: "The first murder is always the easiest to forget."\nYour hand is shaking because… you remember the feeling of pushing.`,
        optionA: "Confess (to yourself) that you might be the killer",
        optionB: "Reject it and decide someone is framing you",
        nextA: 19,
        nextB: 20
    },
    {
        text: `You tear the page. The ink stains your fingers like permanent guilt. In the reflection of a puddle, your smile is delayed by half a second.`,
        optionA: "Avoid all reflections and head home",
        optionB: "Stare into the puddle until it catches up",
        nextA: 21,
        nextB: 22
    },
    {
        text: `Mika doesn't answer your questions. She asks one instead:\n"Which version of you is speaking right now?"`,
        optionA: "Tell Mika your name with certainty",
        optionB: "Admit you don't know if your memories are real",
        nextA: 23,
        nextB: 24
    },
    {
        text: `Mika's hands have no tremor lines. No calluses. Like a character that never touched the world. She drops a black camellia — exactly like yours.`,
        optionA: "Pick up the camellia",
        optionB: "Step back and demand she prove she's real",
        nextA: 25,
        nextB: 26
    },
    {
        text: `Kuroda goes silent, then whispers: "The victim is… you."\nThe call ends. Your phone screen cracks from the inside.`,
        optionA: "Sprint to a mirror to confirm your face",
        optionB: "Destroy your phone and trust nothing digital",
        nextA: 27,
        nextB: 28
    },
    {
        text: `You leave anyway. On the street, you spot Kuroda — watching you from across the road — then Kuroda steps into the light and there are two of them.`,
        optionA: "Approach the nearer Kuroda",
        optionB: "Approach the farther Kuroda",
        nextA: 29,
        nextB: 30
    },
    {
        text: `ENDING — St. Orpheus Academy: The Locked Music Room\n\nYou swipe the keycard. Inside: a grand piano, and a crime board filled with photos of victims — every victim has your handwriting underneath.\n\nYou were building the investigation… before you erased yourself. The next photo slot is empty, labeled: "Mika."`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — The Victim's Messages\n\nThe victim's last sent message: to you.\n"I did everything you asked. I became you. Now let me stop."\n\nThe body isn't a stranger. It's someone who wore your identity like a mask — until it fused.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — The Stairwell Loop\n\nYou chase the silhouette down five flights. The number on the stairwell sign never changes: 4F.\n\nThe building is editing reality. Every time you run, you rewrite the same moment — like a murderer rehearsing an alibi.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — Emergency Call\n\nThe dispatcher says, "We already have your report. You called twelve minutes ago." Your call log shows nothing.\n\nTime is broken around you. Or you're not the first "you" to find the body.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — The Memory of the Push\n\nYou remember hands on a shoulder. A gasp. A fall. The victim's face was blurred — like a censored frame.\n\nYou didn't kill out of anger. You killed to protect a secret you still can't access.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — The Frame Job\n\nYou look at your ink-stained fingers and realize the ink is forming letters by itself: "SAY MY NAME."\n\nSomeone is using your guilt like a pen. The story is writing you back.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — Home: The Apartment With No Dust\n\nYour apartment is too clean. Like nobody lived here — except the neatly stacked files titled "PERSONALITY DRAFTS."\n\nYou were manufactured. A life assembled from notes, trauma, and careful lies.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — The Puddle Reflection\n\nIn the puddle, you blink. The reflection does not. It smiles wider. A voice from the water: "I'm the one who remembers."\n\nThere are two consciousnesses sharing one body — only one can hold the truth without breaking.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — Your Name, Spoken\n\nYou say your name. Mika flinches like you slapped them. "Don't use that name. It belongs to the dead."\n\nYour identity is a stolen label. The "real" owner is the ink corpse in the alley.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — The Honest Answer\n\nYou confess you don't know what's real. Mika nods, almost tender. "Good. That means you can still be saved."\n\nMika is not your enemy. Mika is the fail-safe you built to stop yourself.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — The Camellia's Weight\n\nThe camellia is heavier than a flower should be. Inside it: a tiny blade, folded like a petal. It has fingerprints — yours.\n\nThe weapon was always with you, disguised as beauty. Someone trained you to carry murder as decoration.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — "Prove You're Real"\n\nMika steps into the vending machine light and their shadow splits wrong — like frames out of sync. "Real is a contract," Mika says. "You signed it."\n\nMika is a character you wrote… and then forgot how to control.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — The Mirror Confirmation\n\nYou find a mirror in a convenience store. Your reflection is not you. It's you — two days older, bruised, smiling like it won.\n\nThe killer is future-you, coming back through edited memories to ensure the murders happen.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — Phone Destroyed\n\nYou smash the phone. Black ink leaks out like blood. The screen still lights up, showing: "THANK YOU FOR FREEING ME."\n\nThe "digital" was never a tool. It was a prison. You just released what was inside.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — The Near Kuroda\n\nThe nearer Kuroda grabs your wrist. Their pulse is wrong — too slow. "Don't listen to the other one," they hiss. "They're the murderer."\n\nKuroda is an echo. A detective persona you created to investigate yourself, now fighting for control.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — The Far Kuroda\n\nThe farther Kuroda smiles gently. "I'm sorry," they say. "I tried to end it cleanly." They hold up a black camellia… and your keycard.\n\nKuroda is the original. You are the substitute. The murders were not to hide the truth — they were to keep you alive long enough to believe you deserved a life.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    }
];
let school = [
    {
        text: `Kisaragi High glows gold in late sunlight. Haru Shinohara feels nothing. Even sunsets look like wallpaper. His friends slip out one by one, leaving him with the last broom stroke and the last sigh.`,
        optionA: "Finish cleaning properly, alone",
        optionB: "Cut corners and rummage through the teacher's desk out of boredom",
        nextA: 1,
        nextB: 2
    },
    {
        text: `The drawer resists, then opens with a soft thunk. Inside is a folded paper marked with a tiny emblem: a camellia inside a circle. It looks like a treasure map.`,
        optionA: "Unfold it right there",
        optionB: "Pocket it and act normal until friends return",
        nextA: 3,
        nextB: 4
    },
    {
        text: `Haru's fingers find a false bottom. A brittle envelope slides out like a secret tooth. The paper inside is hand-drawn, old, and smudged with soot.`,
        optionA: "Read it immediately",
        optionB: "Photograph it first just in case",
        nextA: 3,
        nextB: 5
    },
    {
        text: `The paper isn't routes. It's instructions. "Follow the bell. Avoid the third mirror. Do not trust the principal's smile."`,
        optionA: "Laugh it off and show friends as a treasure hunt",
        optionB: "Keep it private; something feels aimed at you",
        nextA: 6,
        nextB: 7
    },
    {
        text: `Your friends burst in: Riku (the loud one), Mei (the calm one), and Sora (the one who notices too much). The paper burns like a secret in your pocket.`,
        optionA: "Tell all of them",
        optionB: "Tell only Sora",
        nextA: 6,
        nextB: 8
    },
    {
        text: `The photo saves… but the center of the page blurs into a black smudge like censorship. A second later, the blur is shaped like a person standing behind you.`,
        optionA: "Spin around and check the room",
        optionB: "Ignore it and call the others back",
        nextA: 9,
        nextB: 6
    },
    {
        text: `They crowd around the paper, arguing locations like it's a game. Haru watches their faces and feels — finally — curiosity.`,
        optionA: "Start with the old clock tower courtyard",
        optionB: "Start with the library's restricted shelf rumor",
        nextA: 10,
        nextB: 11
    },
    {
        text: `Haru slips out. The school hallway feels longer than it should. The map's emblem matches a faded seal on the basement door: ARCHIVES — STAFF ONLY.`,
        optionA: "Try the basement door",
        optionB: "Go to the rooftop to think",
        nextA: 12,
        nextB: 13
    },
    {
        text: `Sora studies the emblem and goes pale. "My grandmother… said never follow bells in this school."`,
        optionA: "Ask Sora for the full story",
        optionB: "Decide to investigate first, talk later",
        nextA: 14,
        nextB: 10
    },
    {
        text: `No one is there. Yet the chalkboard now has writing: "YOU FOUND IT AGAIN."`,
        optionA: "Erase it and pretend it didn't happen",
        optionB: "Copy it into your notebook",
        nextA: 15,
        nextB: 16
    },
    {
        text: `The bell tower casts a shadow like a blade. Under the third stepping stone, something clicks when you press it.`,
        optionA: "Lift the stepping stone",
        optionB: "Listen at the stone first (like a safecracker)",
        nextA: 17,
        nextB: 18
    },
    {
        text: `Mei sweet-talks the librarian. A hidden ledger is discovered: 1956 Student Registry — "Closed Due To Incident."`,
        optionA: "Check names for patterns",
        optionB: "Look for the incident report pages",
        nextA: 19,
        nextB: 20
    },
    {
        text: `The handle is cold. The lock is new — too new for an "old archive." Something modern is guarding something ancient.`,
        optionA: "Use a hairpin / improvised pick",
        optionB: "Find the janitor and ask for access",
        nextA: 21,
        nextB: 22
    },
    {
        text: `The city looks expensive from here. Haru's boredom returns until he notices: a line carved into the rooftop railing — dozens of times: "HOMEWORK IS A PROMISE."`,
        optionA: "Trace the carvings with your finger",
        optionB: "Photograph the carvings and leave fast",
        nextA: 23,
        nextB: 5
    },
    {
        text: `"She said the school was built on ash. A teacher burned a classroom. Forty-five students. They called it an accident." Sora swallows. "But she said the teacher kept killing."`,
        optionA: "Ask who the teacher was",
        optionB: "Ask why the school still exists",
        nextA: 24,
        nextB: 25
    },
    {
        text: `You erase the words. Chalk dust floats like snow. For one second, you smell smoke — old smoke.`,
        optionA: "Rejoin friends, keep it normal",
        optionB: "Follow the smell of smoke",
        nextA: 6,
        nextB: 26
    },
    {
        text: `When you write "YOU FOUND IT AGAIN," your handwriting changes mid-stroke into an older style — looped, precise, dated.`,
        optionA: "Flip pages to see if something else appeared",
        optionB: "Tear out the page and burn it in the sink",
        nextA: 27,
        nextB: 28
    },
    {
        text: `You find a rusted tin box. Inside: a charred diary, half-readable, and a tiny brass key labeled MUSIC RM.`,
        optionA: "Open the diary first",
        optionB: "Take the key and go to the music room",
        nextA: 29,
        nextB: 30
    },
    {
        text: `It's hollow. There's a cavity beneath. But there's also a second sound: footsteps behind you — measured, patient.`,
        optionA: "Turn around quickly",
        optionB: "Pretend you didn't notice and keep working",
        nextA: 31,
        nextB: 32
    },
    {
        text: `The registry shows student names crossed out with red ink. One name appears again and again across years like a ghost signature: "A. Kurose."`,
        optionA: "Search for Kurose in modern records",
        optionB: "Tell the librarian and ask what they know",
        nextA: 33,
        nextB: 34
    },
    {
        text: `The pages are missing. Only a stapled corner remains, stamped: "REPUTATION PRESERVATION COMMITTEE."`,
        optionA: "Investigate the committee (student council?)",
        optionB: "Investigate why the pages were removed recently",
        nextA: 35,
        nextB: 36
    },
    {
        text: `The door opens too easily — like it wanted you inside. The basement is lined with boxes labeled by year… except 1956, which is in a locked metal cabinet.`,
        optionA: "Open the cabinet",
        optionB: "Look through other years first",
        nextA: 37,
        nextB: 38
    },
    {
        text: `The janitor freezes when seeing the emblem on your paper. "Kids… stop digging." Their voice is kind, but their hands shake.`,
        optionA: "Beg them to tell you the truth",
        optionB: "Follow them when they walk away too fast",
        nextA: 39,
        nextB: 40
    },
    {
        text: `Your finger catches on a deep groove. Blood beads. The wind carries a whisper: "Incomplete."`,
        optionA: "Bandage it and ignore the whisper",
        optionB: `Whisper back, "What is incomplete?"`,
        nextA: 41,
        nextB: 42
    },
    {
        text: `Sora answers like saying it invites him: "Kurose." The bell tower rings once though no one pulled it.`,
        optionA: "Continue the hunt immediately",
        optionB: "Decide to go to the principal's office now",
        nextA: 10,
        nextB: 43
    },
    {
        text: `"Because people pay for prestige," Mei says. "And prestige eats truth." A laugh from the hallway, too old to be a student's.`,
        optionA: "Chase the laugh",
        optionB: "Stick together and go to the library",
        nextA: 31,
        nextB: 11
    },
    {
        text: `The smell leads to a sealed corridor behind the gym. A plaque reads: "Renovated After 1956." The paint is newer than the lie.`,
        optionA: "Pry open the sealed door",
        optionB: "Search for another entrance (vents, crawlspace)",
        nextA: 44,
        nextB: 45
    },
    {
        text: `A new entry appears on blank paper:\n"If you are reading this, I failed to escape. Do not trust the administration. They prefer ash to scandal."`,
        optionA: "Show friends; this is proof",
        optionB: "Keep reading alone until you reach the end",
        nextA: 6,
        nextB: 29
    },
    {
        text: `The paper curls. The flame turns green for a moment. In the smoke, a face appears — teacher-like — smiling gently.`,
        optionA: "Put the fire out and run",
        optionB: "Stare into the smoke until it speaks",
        nextA: 41,
        nextB: 42
    },
    {
        text: `The diary is from 1956, written by a student named Hideo. It starts sweet: tests, friends, a teacher praised for patience: Mr. Kurose.`,
        optionA: "Skip ahead to the day of the fire",
        optionB: "Read slowly for hidden clues (names, routines)",
        nextA: 46,
        nextB: 47
    },
    {
        text: `The brass key fits. Inside, the piano is covered. The air tastes like old varnish and smoke. On the wall: a framed class photo — faces scratched out.`,
        optionA: "Lift the piano cover",
        optionB: "Inspect the scratched photo closely",
        nextA: 48,
        nextB: 49
    },
    {
        text: `A person in a staff coat walks away. Too tall. Too still. Their shoes leave faint ash prints.`,
        optionA: "Follow them",
        optionB: "Hide and watch where they go",
        nextA: 40,
        nextB: 36
    },
    {
        text: `You keep working. The stone lifts. The tin box is there — like it rewards obedience. But footsteps stop right behind you.`,
        optionA: "Grab the box and sprint",
        optionB: "Freeze and act innocent",
        nextA: 17,
        nextB: 50
    },
    {
        text: `In the current student database, there is no Kurose. But there is a Vice Principal Kuroda… and a "donor" named Kurose Foundation.`,
        optionA: "Investigate Kuroda (office, schedule)",
        optionB: "Investigate the Kurose Foundation plaque",
        nextA: 43,
        nextB: 51
    },
    {
        text: `The librarian's smile is polite and terrified. "Those years are… sensitive. Please don't make trouble."`,
        optionA: "Push harder; demand the truth",
        optionB: "Back off and investigate quietly",
        nextA: 52,
        nextB: 20
    },
    {
        text: `Student council headquarters is immaculate. Too polished. On the wall: "Protect the school's image." In a drawer: a list of "problem students."`,
        optionA: "Look for your name",
        optionB: "Steal the list",
        nextA: 53,
        nextB: 54
    },
    {
        text: `The missing pages were cut out with a fresh blade. Someone removed them this month.`,
        optionA: "Check security camera access",
        optionB: "Check who signed the archive log",
        nextA: 55,
        nextB: 56
    },
    {
        text: `Inside: charred attendance sheets. Fire inspection reports marked FALSIFIED. A sealed envelope: "To be opened when Kurose returns."`,
        optionA: "Open the envelope now",
        optionB: "Take it to your friends first",
        nextA: 57,
        nextB: 6
    },
    {
        text: `You find patterns: students transferred after "disciplinary incidents." Same note every time: "Homework incomplete."`,
        optionA: "Cross-check with deaths/missing persons",
        optionB: "Search for the first year this pattern appears",
        nextA: 58,
        nextB: 59
    },
    {
        text: `"They told us it was an accident," the janitor whispers. "But I cleaned… things that weren't ash." Their eyes fill. "He never left. He just changed titles."`,
        optionA: `Ask who "he" is now`,
        optionB: "Ask where the bodies were hidden",
        nextA: 43,
        nextB: 45
    },
    {
        text: `The staff coat enters the old wing and unlocks a door without looking. The hallway lights flicker like a heartbeat.`,
        optionA: "Rush in before the door closes",
        optionB: "Wait, then slip in quietly after",
        nextA: 44,
        nextB: 45
    },
    {
        text: `You run back to sunlight, laughter, normal students. Your boredom returns, sharp like withdrawal.`,
        optionA: "Decide to stop investigating and live normally",
        optionB: "Decide boredom is safer than ignorance, continue anyway",
        nextA: 60,
        nextB: 11
    },
    {
        text: `A voice answers from nowhere, calm and teacher-soft: "Incomplete homework… incomplete lives."`,
        optionA: `Demand, "Who are you?"`,
        optionB: `Lie and say, "I will obey"`,
        nextA: 61,
        nextB: 62
    },
    {
        text: `Kuroda welcomes you with a warm smile that doesn't reach the eyes. On the desk: a black camellia emblem paperweight.`,
        optionA: "Show the map and ask directly about 1956",
        optionB: `Pretend it's about "a school project," snoop while talking`,
        nextA: 63,
        nextB: 64
    },
    {
        text: `You push into a classroom preserved behind renovation boards. Desks are arranged as if class never ended. On the chalkboard: "TODAY'S LESSON: FORGIVENESS."`,
        optionA: "Sit in a desk (test what happens)",
        optionB: "Search the teacher's podium drawers",
        nextA: 65,
        nextB: 66
    },
    {
        text: `You crawl through a maintenance tunnel. You find scratches on the walls — count marks — like someone waited here for years.`,
        optionA: "Follow the scratches deeper",
        optionB: "Turn back and bring friends with flashlights",
        nextA: 67,
        nextB: 6
    },
    {
        text: `ENDING — Diary: The Fire Day\n\nHideo writes: "Kurose smiled. He shut the doors. He apologized softly… and struck a match."\n\nThe fire was not rage. It was ritual. A classroom offered like a sacrifice to keep the school "golden."`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — Diary: The Pattern\n\nHideo records names of students punished for missing homework. One by one they "transfer." Hideo notes seeing muddy shoes near the river behind the gym.\n\nThe school's prestige was built on disappearances, and the diary is a breadcrumb trail to a burial place.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — Under the Piano Cover\n\nInside the piano: a hidden compartment filled with homework notebooks, all graded "Forgiven" in red ink. At the bottom: a blade wrapped in exam paper.\n\n"Forgiveness" was his mask. The weapon was always stored where students practiced obedience.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — The Scratched Photo\n\nYou rub pencil graphite over the scratches. Faces reappear — 45 students. In the back row: Mr. Kurose. Next to him: a young staff member with the same eyes as Vice Principal Kuroda.\n\nThe administration didn't just hide it. They inherited it.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — The Person Behind You\n\nA gentle voice: "Still cleaning? Good student." A hand rests on your shoulder. It is warm, paternal, wrong.\n\nThe teacher never left. The hunt was allowed to happen because it led you to him.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — The Foundation Plaque\n\nThe "Kurose Foundation" funded the new wing after 1956. Donor message: "To preserve what matters."\n\nMoney sealed the lie. The school's "high life" is literally sponsored by the past.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — Librarian Breaks\n\nThe librarian whispers: "They keep the diary fragments to predict which students will ask questions. The map is bait."\n\nYou are not the first treasure hunter. You are the next name on a list.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — Your Name on the List\n\nYour name is there under "Risk: curiosity, boredom." Next to it: "Corrective counseling recommended."\n\nThe school monitors minds, not grades. Your emptiness was noticed — and targeted.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — Stealing the List\n\nYou take it. That night, your phone receives a message from an unknown sender: "Return what you stole, or I will grade you."\n\nSomeone is still enforcing Kurose's rules.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — Security Camera Access\n\nThe camera feed for the library corridor is "under maintenance" every night at 2:13 a.m. The log is signed: Kuroda.\n\nThe vice principal isn't hiding the past. They are scheduling it.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — Archive Log Signature\n\nOnly one person checked out "1956 materials" recently: Vice Principal Kuroda. Reason: "Historical cleanup."\n\nThe cover-up is active, current, and personal.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — The Envelope: "When Kurose Returns"\n\nInside is a letter written in the same hand as the map:\n"If you are reading this, you have become the school's new face. Continue the tradition."\n\nThe administration planned succession. The "psycho teacher" is not a person. It is a role.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — Missing Persons Cross-Check\n\nStudents who "transferred" match local missing persons cases. The disappearances cluster around the old gym and the river path.\n\nThe treasure's "X" is a grave.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — The First Year\n\nThe first "homework incomplete" death-note appears before 1956 in a staff memo draft. Kurose wasn't the beginning.\n\nKurose learned it from someone else. The school's darkness is older than the fire.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — The Normal Ending\n\nYou stop searching. Months pass. Your boredom returns like a fog. Then one day your friend Riku vanishes after forgetting homework.\n\nIgnorance keeps you alive — until it takes someone you love instead.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — "Who Are You?"\n\nA voice behind your ear: "I am the standard." The hallway lights flicker into a classroom pattern. You smell smoke again.\n\nThe school itself answers — like a living institution protecting its myth.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — "I Will Obey"\n\nSilence. Then relief. The next day, your grades improve mysteriously. Teachers smile at you.\n\nObedience buys comfort. But comfort is the leash.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — Showing Kuroda the Map\n\nKuroda's smile stays. "Ah," they say softly. "So you found the extracurricular curriculum." They lock the office door.\n\nThe "treasure hunt" is an initiation. Now you learn what the school truly rewards.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — Snoop While Talking\n\nYou find a drawer with a stamped seal: REPUTATION PRESERVATION COMMITTEE. Inside are 1956 photos — recently printed.\n\nThe past is being recreated, not remembered. Someone is preparing to repeat it.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — Sitting at a Desk\n\nThe chalkboard erases itself and writes: "NAME." Your hand moves without permission, writing your name. Then: "PROMISE."\n\nThe classroom is a contract trap. The school doesn't just teach. It binds.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — The Teacher's Podium\n\nYou find a lighter, a ring of keys, and a grading stamp: FORGIVEN. A shadow falls across the podium. "Late homework," a voice says kindly.\n\nYou reached the evidence. The evidence reached back.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    },
    {
        text: `ENDING — Following the Scratches\n\nThe tunnel opens under the old wing. You find a sealed room with stacked desks and a soot-blackened teacher's coat hanging neatly.\n\nKurose didn't disappear. He was stored — like a tradition waiting to be worn.`,
        optionA: null,
        optionB: null,
        nextA: null,
        nextB: null
    }
];

let story = {

    "village": village,
    "mirror": mirror,
    "school": school
}


let currState = 0;
let storyline = document.createElement("div");
let heading = document.createElement("h2");
heading.innerText = "";
storyline.classList.add("question");

let text = document.createElement('div');
text.classList.add("text");
let option1 = document.createElement("button");
option1.classList.add("option");
let option2 = document.createElement("button");
option2.classList.add("option");
let box = document.createElement("div");
box.classList.add("box");
box.appendChild(option1);
box.appendChild(option2);
storyline.appendChild(text);
storyline.appendChild(box);
let restartbtn = document.createElement("button");
restartbtn.classList.add("restartbtn");
restartbtn.classList.add('hide');
document.body.appendChild(restartbtn);
restartbtn.innerText = "Restart!";
document.body.appendChild(heading);
const StartBtn = document.querySelector(".button");
let select = document.querySelector(".storySelect");
StartBtn.addEventListener('click', () => {
    let choice = select.value;
    scenes = story[choice];
    if (choice === "village") {
        heading.innerText = "Mizukage Village";
    } else if (choice === "mirror") {
        heading.innerText = "Black Petal Mirror";
    } else {
        heading.innerText = "Gilded Map, Ashen Roots";
    }
    document.body.appendChild(storyline);
    select.classList.add('hide');

    show();
})
function show() {
    StartBtn.classList.add('hide');

    let scene = scenes[currState];
    text.innerText = scene.text;
    if (scene.optionA != null) {
        option1.innerText = scene.optionA;
    } else {
        option1.classList.add('hide');
        option2.classList.add('hide');
        restart();
    }
    if (scene.optionB != null) {
        option2.innerText = scene.optionB;
    } else {
        option1.classList.add('hide');
        option2.classList.add('hide');
        restart();
    }



}

option1.addEventListener('click', () => {
    currState = scenes[currState].nextA;
    show();
})
option2.addEventListener('click', () => {
    currState = scenes[currState].nextB;
    show();
})


function restart() {
    restartbtn.classList.remove('hide');

    restartbtn.onclick = () => {
        currState = 0;
        scenes = null;

        heading.innerText = "";

        StartBtn.classList.remove('hide');
        option1.classList.remove("hide");
        option2.classList.remove("hide");
        select.classList.remove("hide");

        storyline.remove();

        restartbtn.classList.add('hide');
    }
}
