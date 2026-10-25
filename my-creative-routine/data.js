window.UNIT = {
  slug: "my-creative-routine",
  title: "My Creative Routine",
  level: "A1",
  minutes: 50,
  subject: "Arts students' life",
  focus: ["present simple: I work / she works", "adverbs of frequency: always, usually, sometimes, never", "telling the time", "at / on / in with time"],
  speakers: { "Andrea": "f", "Nico": "m", "Host": "f" },

  presentation: {
    scene: "⏰☕🎨🌙",
    situation: "Andrea and Nico are students at the **School of Fine Arts and Audiovisual Arts**. They're talking about their weekly routines during a break.",
    warmup: {
      prompt: "What do you do every week? Choose everything you do.",
      options: ["draw", "go to class", "edit videos", "paint", "watch films", "go to museums", "play video games", "take photos", "work", "do homework", "read", "sleep late"],
      response: "Nice! In this unit you'll learn to talk about your routine and the routines of other artists."
    },
    dialogueTitle: "Coffee break",
    dialogue: [
      { who: "Nico", line: "You look tired, Andrea. What time do you *get up*?" },
      { who: "Andrea", line: "I *always get up* at six. My first class *starts* at seven." },
      { who: "Nico", line: "Wow! I *never get up* before eight. I *usually work* at night." },
      { who: "Andrea", line: "Really? When *do* you *paint*?" },
      { who: "Nico", line: "I *paint* from ten to two in the morning. It's quiet. *Do* you *work* at night too?" },
      { who: "Andrea", line: "No, I *don't*. I *sometimes draw* on the bus. And on Saturdays I *go* to the museum." },
      { who: "Nico", line: "That's a good idea. My sister *works* at a museum. She *gets* free tickets!" }
    ]
  },

  objectives: [
    "I can talk about my daily and weekly routine.",
    "I can use the present simple with *I, you, he, she, they*.",
    "I can say how often I do things with adverbs of frequency.",
    "I can tell the time and use *at, on, in* with times and days."
  ],

  explanation: {
    vocabTitle: "Daily routine of an art student",
    vocab: [
      { word: "get up", icon: "⏰" }, { word: "have breakfast", icon: "🥐" }, { word: "take the bus", icon: "🚌" },
      { word: "go to class", icon: "🏫" }, { word: "draw", icon: "✏️" }, { word: "paint", icon: "🎨" },
      { word: "edit", icon: "💻" }, { word: "practice", icon: "🔁" }, { word: "watch a film", icon: "🍿" },
      { word: "visit a museum", icon: "🏛️" }, { word: "have lunch", icon: "🥗" }, { word: "do homework", icon: "📚" },
      { word: "work", icon: "💼" }, { word: "go to bed", icon: "🛏️" }, { word: "weekend", icon: "📅" }
    ],
    grammar: [
      {
        title: "Present simple",
        head: ["", "I / you / we / they", "he / she / it"],
        rows: [
          ["Affirmative", "I *paint* at night.", "She *paints* at night."],
          ["Negative", "I *don't paint* at night.", "She *doesn't paint* at night."],
          ["Question", "*Do* you *paint* at night?", "*Does* she *paint* at night?"],
          ["Short answer", "Yes, I do. / No, I don't.", "Yes, she does. / No, she doesn't."]
        ],
        note: "With *he / she / it* add **-s**: *works, draws*. Add **-es** after -sh, -ch, -o: *watches, goes, does*. Consonant + y → **-ies**: *studies*."
      },
      {
        title: "Adverbs of frequency",
        head: ["Adverb", "%", "Example"],
        rows: [
          ["always", "100%", "I *always* get up at six."],
          ["usually", "80%", "He *usually* works at night."],
          ["often", "60%", "We *often* visit museums."],
          ["sometimes", "40%", "She *sometimes* draws on the bus."],
          ["never", "0%", "I *never* sleep late."]
        ],
        note: "The adverb goes **before** the main verb (*I always paint*) but **after** *be* (*I'm always tired*)."
      },
      {
        title: "Time: at / on / in",
        head: ["Preposition", "Use", "Example"],
        rows: [
          ["at", "clock times, night, the weekend", "*at* 7:30, *at* night"],
          ["on", "days and dates", "*on* Monday, *on* Saturdays"],
          ["in", "parts of the day, months", "*in* the morning, *in* May"]
        ],
        note: "Telling the time: 7:15 = *a quarter past seven*, 7:30 = *half past seven*, 7:45 = *a quarter to eight*."
      }
    ],
    watchOut: [
      ["She paint at night.", "She paints at night."],
      ["He don't work on Sundays.", "He doesn't work on Sundays."],
      ["Does she paints?", "Does she paint?"],
      ["I go always to the museum.", "I always go to the museum."],
      ["in Monday / on the morning", "on Monday / in the morning"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the sentences.",
      items: [
        "Nico [[works]] at night. (work)",
        "Andrea [[doesn't]] paint at night.",
        "My first class starts [[at]] seven.",
        "I go to the museum [[on]] Saturdays."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a short podcast interview with a young Mexican illustrator about her routine.",
      title: "Podcast: *A day in the life*",
      script: [
        { who: "Host", line: "Welcome to *A day in the life*. Today our guest is Lucía, an illustrator from Puebla. Lucía, what's your routine like?" },
        { who: "Lucía", line: "Well, I usually get up at half past seven. I have coffee and I check my email." },
        { who: "Lucía", line: "I start work at nine. In the morning I draw by hand, in my sketchbook." },
        { who: "Host", line: "And in the afternoon?" },
        { who: "Lucía", line: "In the afternoon I color my illustrations on the computer. I never work after eight in the evening." },
        { who: "Host", line: "Do you work on weekends?" },
        { who: "Lucía", line: "No, I don't. On Saturdays I often go to markets and take photos for ideas. On Sundays I always visit my family." },
        { who: "Host", line: "Thank you, Lucía!" }
      ],
      activities: [
        {
          type: "match", title: "When does she do it?",
          prompt: "Match the activity with the time.",
          pairs: [
            ["gets up", "at half past seven"],
            ["starts work", "at nine"],
            ["draws by hand", "in the morning"],
            ["colors on the computer", "in the afternoon"],
            ["goes to markets", "on Saturdays"],
            ["visits her family", "on Sundays"]
          ]
        },
        {
          type: "gap", title: "How often?",
          prompt: "Complete with the adverb of frequency you hear.",
          bank: true,
          items: [
            "She [[usually]] gets up at half past seven.",
            "She [[never]] works after eight in the evening.",
            "She [[often]] goes to markets on Saturdays.",
            "She [[always]] visits her family on Sundays."
          ]
        }
      ]
    },

    reading: {
      intro: "Read about the routines of three famous artists.",
      title: "How famous artists work",
      text: [
        { author: "Frida Kahlo · painter", body: "Frida usually paints in her bed or in her studio at the Blue House in Coyoacán. She often paints in the afternoon. She has a mirror above her bed, so she paints self-portraits." },
        { author: "Hayao Miyazaki · animator", body: "Miyazaki gets up early and arrives at Studio Ghibli at about eleven. He draws by hand: he doesn't use a computer for his drawings. He often works until nine at night, but he always rests on Sundays." },
        { author: "Agnès Varda · filmmaker", body: "Varda always carries a small camera. She films people in the street and at markets. She doesn't work in an office: she usually edits at home, in her house in Paris." }
      ],
      activities: [
        {
          type: "sort", title: "Who does it?",
          prompt: "Sort the sentences.",
          bins: ["Frida", "Miyazaki", "Varda"],
          items: [
            { text: "paints in bed", bin: 0 }, { text: "has a mirror above the bed", bin: 0 },
            { text: "draws by hand, not on a computer", bin: 1 }, { text: "rests on Sundays", bin: 1 },
            { text: "always carries a small camera", bin: 2 }, { text: "edits at home", bin: 2 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "Frida often paints in the morning.", a: false },
            { s: "Miyazaki arrives at the studio at about eleven.", a: true },
            { s: "Miyazaki uses a computer for his drawings.", a: false },
            { s: "Varda usually edits in an office.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the structures first, then describe your creative week.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "I always get up at six." },
            { a: "She doesn't work on Sundays." },
            { a: "Do you draw in the morning?" },
            { a: "He often visits museums." },
            { a: "We never edit at night." }
          ]
        },
        {
          type: "rewrite", title: "He or she",
          prompt: "Rewrite each sentence about another person. Change the verb.",
          items: [
            { q: "I paint in the afternoon. → Nico…", a: ["Nico paints in the afternoon."] },
            { q: "I watch films on Fridays. → Andrea…", a: ["Andrea watches films on Fridays."] },
            { q: "I don't use a computer. → Miyazaki…", a: ["Miyazaki doesn't use a computer.", "Miyazaki does not use a computer."] },
            { q: "I study at night. → My brother…", a: ["My brother studies at night."] },
            { q: "Do you go to museums? → … she …?", a: ["Does she go to museums?"] }
          ]
        },
        {
          type: "write", title: "My creative week",
          prompt: "Write about your routine as an art student. When do you get up? When do you go to class? When do you draw, paint, edit or take photos? What do you do on weekends? Use at least three adverbs of frequency.",
          minWords: 50, maxWords: 100,
          model: "I usually get up at half past six on weekdays. I take the bus to school and I sometimes draw people on the bus. My classes start at eight. In the afternoon I often edit my videos in the computer lab. I never go to bed before midnight! On Saturdays I always visit a museum or a gallery with my friends.",
          bank: ["I usually…", "I always…", "I sometimes…", "I never…", "at … o'clock", "in the morning / afternoon", "on Saturdays", "On weekends,"],
          checklist: [
            "I used at least **three** adverbs of frequency.",
            "I used *at, on* and *in* with times and days.",
            "I wrote about **weekdays** and the **weekend**.",
            "I put the adverbs **before** the main verb."
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
            "I always get up at six.",
            "She doesn't work on Sundays.",
            "What time do you get up?",
            "He usually paints at night.",
            "I sometimes draw on the bus.",
            "We go to the museum on Saturdays."
          ]
        },
        {
          type: "speak", title: "A day in my life",
          prompt: "Record yourself for about one minute. Describe a typical day in your life as an art student, from morning to night.",
          language: ["I get up at…", "Then, I…", "In the afternoon,…", "I usually… / I never…", "I go to bed at…"],
          seconds: 75,
          checklist: ["describe the morning, afternoon and evening?", "say at least three times?", "use adverbs of frequency?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name routine activities of an art student.", review: "Explanation: the vocabulary cards" },
    { can: "I can use the present simple with *I, you, we, they*.", review: "Explanation: Present simple" },
    { can: "I can use the present simple with *he / she* (-s, -es, -ies).", review: "Writing activity 2" },
    { can: "I can use adverbs of frequency in the correct position.", review: "Explanation: Adverbs of frequency" },
    { can: "I can tell the time and use *at, on, in*.", review: "Explanation: Time; Listening activity 1" },
    { can: "I can describe my routine and ask about others' routines.", review: "Writing activity 3; Speaking activities" }
  ]
};
