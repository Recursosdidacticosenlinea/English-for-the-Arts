window.UNIT = {
  slug: "game-on",
  title: "Game On!",
  level: "A1",
  minutes: 50,
  subject: "Digital Art",
  focus: ["can / can't for abilities", "adjectives to describe characters", "adjective + noun order", "video game vocabulary"],
  speakers: { "Ximena": "f", "Emilio": "m", "Brenda": "f", "Kevin": "m" },

  presentation: {
    scene: "🎮👾🧙‍♀️⚔️",
    situation: "Ximena and Emilio are **Digital Art** students. For their project, they're designing the main character of a new video game.",
    warmup: {
      prompt: "What can a video game character do? Choose everything you know.",
      options: ["run", "jump", "fly", "swim", "climb", "fight", "shoot", "talk", "hide", "drive", "cast spells", "build"],
      response: "Excellent! In this unit you'll learn to describe characters and talk about their abilities."
    },
    dialogueTitle: "Designing a hero",
    dialogue: [
      { who: "Ximena", line: "OK, our hero is a young girl. Her name is Luna. She's small but very *strong*." },
      { who: "Emilio", line: "Cool! What *can* she do?" },
      { who: "Ximena", line: "She *can* run very fast and she *can* climb walls. But she *can't* swim." },
      { who: "Emilio", line: "*Can* she fly?" },
      { who: "Ximena", line: "No, she *can't*. But she has a *magic* cat. The cat *can* fly!" },
      { who: "Emilio", line: "Ha! I love it. I *can* draw the cat. It's a *small, black* cat with *big yellow* eyes." },
      { who: "Ximena", line: "Perfect. And I *can* design the levels. Let's start!" }
    ]
  },

  objectives: [
    "I can name actions and abilities in a video game.",
    "I can talk about abilities with *can* and *can't*.",
    "I can describe a character's appearance and personality with adjectives.",
    "I can present an original game character."
  ],

  explanation: {
    vocabTitle: "Video game actions and characters",
    vocab: [
      { word: "run", icon: "🏃" }, { word: "jump", icon: "🦘" }, { word: "fly", icon: "🦅" },
      { word: "swim", icon: "🏊" }, { word: "climb", icon: "🧗" }, { word: "fight", icon: "🥊" },
      { word: "hide", icon: "🫥" }, { word: "hero", icon: "🦸" }, { word: "villain", icon: "🦹" },
      { word: "level", icon: "🪜" }, { word: "player", icon: "🕹️" }, { word: "enemy", icon: "👾" },
      { word: "power", icon: "⚡" }, { word: "weapon", icon: "🗡️" }, { word: "map", icon: "🗺️" }
    ],
    grammar: [
      {
        title: "Can / can't",
        head: ["", "Form", "Example"],
        rows: [
          ["Affirmative", "subject + *can* + verb", "She *can run* fast."],
          ["Negative", "subject + *can't* + verb", "She *can't swim*."],
          ["Question", "*Can* + subject + verb?", "*Can* the cat *fly*?"],
          ["Short answer", "Yes, … can. / No, … can't.", "Yes, it *can*. / No, it *can't*."]
        ],
        note: "*Can* is the same for all persons: *I can, he can, they can* (not *he cans*). The verb after *can* has no *to*: *can fly* (not *can to fly*)."
      },
      {
        title: "Describing characters",
        head: ["Appearance", "Personality"],
        rows: [
          ["tall / short / small / big", "brave / shy"],
          ["strong / weak", "funny / serious"],
          ["young / old", "kind / evil"],
          ["long hair / short hair", "smart / clever"]
        ],
        note: "Use *be* for adjectives (*She's brave*) and *have* for parts of the body (*He has long hair*)."
      },
      {
        title: "Adjective order",
        head: ["Rule", "Example"],
        rows: [
          ["Adjective **before** the noun", "a *magic* cat (not *a cat magic*)"],
          ["Adjectives have no plural", "*big* eyes (not *bigs eyes*)"],
          ["Opinion → size → color", "a *cute small black* cat"]
        ],
        note: "In Spanish we say *un gato negro*, but in English it's *a black cat*."
      }
    ],
    watchOut: [
      ["She can to fly.", "She can fly."],
      ["He cans jump.", "He can jump."],
      ["Can she swims?", "Can she swim?"],
      ["a cat black", "a black cat"],
      ["She is long hair.", "She has long hair."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the sentences.",
      items: [
        "Luna [[can]] climb walls, but she [[can't|cannot]] swim.",
        "[[Can]] the cat fly? Yes, it can.",
        "The villain is very tall. He [[has]] red eyes.",
        "A cat: small, black. → It's a [[small black]] cat."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Brenda and Kevin are testing a game prototype. Listen to Kevin explain the characters.",
      title: "Choose your character",
      script: [
        { who: "Kevin", line: "OK, Brenda, there are three characters. Choose one." },
        { who: "Kevin", line: "This is Rocko. He's big and very strong. He can fight and he can break walls, but he can't jump very high." },
        { who: "Brenda", line: "And the girl with the blue hair?" },
        { who: "Kevin", line: "That's Nova. She's small and fast. She can run and jump really high. She can't fight very well." },
        { who: "Brenda", line: "Who's the old man?" },
        { who: "Kevin", line: "That's Master Ko. He's old but very clever. He can cast spells and he can fly for ten seconds." },
        { who: "Brenda", line: "Can he swim?" },
        { who: "Kevin", line: "No, he can't. None of them can swim. Water is dangerous in this game!" },
        { who: "Brenda", line: "Then I choose Nova. I like fast characters." }
      ],
      activities: [
        {
          type: "sort", title: "Who can do it?",
          prompt: "Sort the abilities. Which character can do it?",
          bins: ["Rocko", "Nova", "Master Ko"],
          items: [
            { text: "fight", bin: 0 }, { text: "break walls", bin: 0 },
            { text: "run fast", bin: 1 }, { text: "jump high", bin: 1 },
            { text: "cast spells", bin: 2 }, { text: "fly for ten seconds", bin: 2 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "Rocko can jump very high.", a: false },
            { s: "Nova has blue hair.", a: true },
            { s: "Master Ko is young.", a: false },
            { s: "The characters can't swim.", a: true },
            { s: "Brenda chooses Rocko.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the character cards from a student's game design document.",
      title: "Character design: *Shadow Garden*",
      text: [
        { author: "Name: Pixel · Role: hero", body: "Pixel is a small robot. He's silver and he has big green eyes. He's kind and funny. He can fly with his jetpack and he can talk to animals. He can't fight." },
        { author: "Name: Dr. Moth · Role: villain", body: "Dr. Moth is a tall, thin scientist. She has long purple hair and black glasses. She's very smart but evil. She can control insects and she can become invisible." },
        { author: "Name: Bo · Role: friend", body: "Bo is a big brown bear. He's shy and a little slow, but he's very brave. He can carry heavy things and he can swim. He can't climb trees: he's too heavy!" }
      ],
      activities: [
        {
          type: "match", title: "Match the character",
          prompt: "Match each description with the character.",
          pairs: [
            ["has a jetpack", "Pixel"],
            ["can become invisible", "Dr. Moth"],
            ["can carry heavy things", "Bo"],
            ["talks to animals", "Pixel"],
            ["has purple hair", "Dr. Moth"]
          ]
        },
        {
          type: "rewrite", title: "Answer the questions",
          prompt: "Answer with a short answer: *Yes, he can. / No, she can't.*",
          items: [
            { q: "Can Pixel fight?", a: ["No, he can't.", "No, he cannot."] },
            { q: "Can Dr. Moth control insects?", a: ["Yes, she can."] },
            { q: "Can Bo swim?", a: ["Yes, he can."] },
            { q: "Can Bo climb trees?", a: ["No, he can't.", "No, he cannot."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the structures first, then create your own character card.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "She can run very fast." },
            { a: "Can the robot fly?" },
            { a: "He has big green eyes." },
            { a: "The villain can't swim." },
            { a: "It's a small black cat." }
          ]
        },
        {
          type: "gap", title: "Complete the character card",
          prompt: "Complete with *can, can't, is, has* or an adjective.",
          bank: ["can", "can't", "is", "has", "brave"],
          items: [
            "Zara [[is]] a young warrior.",
            "She [[has]] short red hair.",
            "She [[can]] use a bow and arrows.",
            "She [[can't]] fly, but she can ride a dragon.",
            "She isn't afraid of anything. She's very [[brave]]."
          ]
        },
        {
          type: "write", title: "My character card",
          prompt: "Create an original character for a video game or an animation. Write a character card: name, role (hero, villain, friend), appearance, personality, three things the character can do and one thing they can't do.",
          minWords: 45, maxWords: 90,
          model: "Name: Tula. Role: hero. Tula is a young fox from the mountains. She's orange and white and she has a long tail. She's clever and a little shy. She can run very fast, she can hide in the snow and she can talk to the wind. She can't swim, so rivers are dangerous for her.",
          bank: ["Name:", "Role:", "He / She is a…", "He / She has…", "He / She can…", "He / She can't…", "brave", "clever", "evil", "funny"],
          checklist: [
            "I described the **appearance** with *is* and *has*.",
            "I used at least **two** personality adjectives.",
            "I wrote **three** things the character *can* do.",
            "I wrote **one** thing the character *can't* do."
          ]
        }
      ]
    },

    speaking: {
      intro: "First practice your pronunciation with sentences from the unit. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each sentence from this unit. Then say it and check your pronunciation.",
          items: [
            "She can run very fast.",
            "Can the cat fly?",
            "He can't swim, but he can climb.",
            "It's a small black cat.",
            "The villain has long purple hair.",
            "He's big, strong and very brave."
          ]
        },
        {
          type: "speak", title: "Pitch my character",
          prompt: "Record yourself for about one minute. Present your character from Writing activity 3 as if you're showing it to a game studio. If you can, show a drawing.",
          language: ["This is…", "He / She is a…", "He / She has…", "He / She can…, but he / she can't…", "My favorite thing about this character is…"],
          seconds: 75,
          checklist: ["describe appearance and personality?", "say three abilities with *can*?", "say one thing with *can't*?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name actions and things in a video game.", review: "Explanation: the vocabulary cards" },
    { can: "I can talk about abilities with *can* and *can't*.", review: "Explanation: Can / can't" },
    { can: "I can ask and answer *Can…?* questions.", review: "Reading activity 2; Speaking activity 1 (pronunciation)" },
    { can: "I can describe a character's appearance and personality.", review: "Explanation: Describing characters" },
    { can: "I can put adjectives before nouns: *a small black cat*.", review: "Explanation: Adjective order" },
    { can: "I can present an original character.", review: "Writing activity 3; Speaking activity 2" }
  ]
};
