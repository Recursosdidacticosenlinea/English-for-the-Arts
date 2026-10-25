window.UNIT = {
  slug: "opening-night",
  title: "Opening Night",
  level: "A2",
  minutes: 55,
  subject: "Visual Arts",
  focus: ["be going to for plans", "will for quick decisions, offers and predictions", "exhibition vocabulary", "invitations: Would you like to…?"],
  speakers: { "Renata": "f", "Mateo": "m", "Claire": "f", "Mr. Díaz": "m" },

  presentation: {
    scene: "🖼️🥂🎟️✨",
    situation: "Renata and Mateo are **Visual Arts** students. Their group is organizing its first exhibition in a gallery in the city center.",
    warmup: {
      prompt: "What do you need for an art exhibition? Choose everything you know.",
      options: ["artworks", "a gallery", "lights", "labels", "a poster", "invitations", "a curator", "frames", "a catalog", "drinks", "music", "a guest book"],
      response: "Good! In this unit you'll learn to talk about plans and predictions for an exhibition."
    },
    dialogueTitle: "Two weeks before the opening",
    dialogue: [
      { who: "Renata", line: "OK, the opening is on Friday the 15th. We*'re going to show* twenty works." },
      { who: "Mateo", line: "Where *are* we *going to put* the big sculpture?" },
      { who: "Renata", line: "In the center of the main room. The paintings *are going to be* on the white walls." },
      { who: "Mateo", line: "And the labels? Nobody has printed them." },
      { who: "Renata", line: "Oh no! You're right." },
      { who: "Mateo", line: "Don't worry, I*'ll print* them tomorrow. I have a printer at home." },
      { who: "Renata", line: "Thanks! I think a lot of people *will come*. It*'ll be* a great night!" }
    ]
  },

  objectives: [
    "I can name the people, places and things in an art exhibition.",
    "I can talk about plans with *be going to*.",
    "I can make quick decisions, offers and predictions with *will*.",
    "I can invite people to an event and answer invitations."
  ],

  explanation: {
    vocabTitle: "Exhibitions and events",
    vocab: [
      { word: "gallery", icon: "🏛️" }, { word: "exhibition", icon: "🖼️" }, { word: "opening", icon: "🎉" },
      { word: "curator", icon: "🧑‍💼" }, { word: "artwork", icon: "🎨" }, { word: "sculpture", icon: "🗿" },
      { word: "installation", icon: "🌀" }, { word: "label", icon: "🏷️" }, { word: "frame", icon: "🔲" },
      { word: "catalog", icon: "📘" }, { word: "invitation", icon: "💌" }, { word: "guest", icon: "🧑‍🤝‍🧑" },
      { word: "hang", icon: "🪝" }, { word: "set up", icon: "🛠️" }, { word: "sell", icon: "💵" }
    ],
    grammar: [
      {
        title: "Be going to: plans",
        head: ["", "Form", "Example"],
        rows: [
          ["Affirmative", "*am / is / are going to* + verb", "We*'re going to show* twenty works."],
          ["Negative", "*'m not / isn't / aren't going to* + verb", "We *aren't going to sell* the sculpture."],
          ["Question", "*Am / Is / Are* + subject + *going to* + verb?", "*Are* you *going to invite* your teachers?"]
        ],
        note: "Use *be going to* for **plans** (decided before now) and for predictions with evidence: *Look at those clouds! It's going to rain.*"
      },
      {
        title: "Will: decisions, offers, predictions",
        head: ["Use", "Example"],
        rows: [
          ["Decision now", "The labels aren't ready? I*'ll print* them."],
          ["Offer", "*I'll help* you with the lights."],
          ["Prediction (opinion)", "I think a lot of people *will come*."],
          ["Negative", "Don't worry, it *won't take* long."]
        ],
        note: "*Will* is the same for all persons: *I'll, she'll, they'll*. Negative: *won't* = *will not*."
      },
      {
        title: "Invitations",
        head: ["Invite", "Accept", "Refuse"],
        rows: [
          ["*Would you like to come* to our opening?", "I'd love to!", "I'm sorry, I can't. I'm going to…"],
          ["*Are you free* on Friday?", "Sure, what time?", "Thanks, but I'm busy."]
        ],
        note: "After *would like* use *to* + verb: *Would you like to come?*"
      }
    ],
    watchOut: [
      ["We going to show twenty works.", "We're going to show twenty works."],
      ["I will to print the labels.", "I'll print the labels."],
      ["(Decision now) I'm going to help you!", "I'll help you!"],
      ["Would you like come?", "Would you like to come?"],
      ["She wills come.", "She'll come."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *going to* or *will*.",
      items: [
        "Our plan is ready: we're [[going]] to open at seven.",
        "That box looks heavy. I [[will|'ll]] help you!",
        "I think the exhibition [[will]] be a success.",
        "Are you [[going]] to invite your family?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Claire, the curator of the gallery, calls Renata to talk about the plan for the exhibition. Listen and complete the plan.",
      title: "A call from the curator",
      script: [
        { who: "Claire", line: "Hi, Renata. It's Claire from the gallery. Can we check the plan for the opening?" },
        { who: "Renata", line: "Sure. We're going to set up on Thursday, from nine to six." },
        { who: "Claire", line: "Perfect. Who's going to hang the paintings?" },
        { who: "Renata", line: "Mateo and two classmates. And Mr. Díaz, our teacher, is going to help with the lights." },
        { who: "Claire", line: "Great. Are you going to have music?" },
        { who: "Renata", line: "Yes, a friend is going to play the guitar. But we aren't going to have food, only drinks." },
        { who: "Claire", line: "OK. Oh, and we don't have a guest book." },
        { who: "Renata", line: "No problem. I'll buy one this afternoon. I think it'll be a great night!" },
        { who: "Claire", line: "I'm sure it will. See you on Thursday!" }
      ],
      activities: [
        {
          type: "match", title: "Who's going to do it?",
          prompt: "Match each person with the task.",
          pairs: [
            ["Mateo and two classmates", "hang the paintings"],
            ["Mr. Díaz", "help with the lights"],
            ["a friend", "play the guitar"],
            ["Renata", "buy a guest book"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "They're going to set up on Friday.", a: false },
            { s: "They're going to have food and drinks.", a: false },
            { s: "Renata decides to buy a guest book during the call.", a: true },
            { s: "Claire thinks it will be a great night.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the invitation and two replies.",
      title: "You're invited!",
      text: [
        { author: "Invitation", body: "The students of Visual Arts are going to present *Paper Cities*, an exhibition of 20 works: paintings, sculptures and an installation made with recycled paper. The opening is on Friday the 15th at 7 p.m. at Galería Centro, 5 Oriente 210. There will be live music and drinks. Would you like to come? Please reply by Wednesday." },
        { author: "Reply from Ms. Ortega", body: "Dear students, thank you for the invitation! I'd love to come. I'm going to bring two colleagues from the Faculty of Architecture. I'm sure it will be wonderful." },
        { author: "Reply from Pablo", body: "Hi guys! I'm sorry, I can't come on Friday. I'm going to travel to Oaxaca with my family. But I'll visit the exhibition next week. Good luck!" }
      ],
      activities: [
        {
          type: "gap", title: "Exhibition details",
          prompt: "Complete with information from the invitation.",
          bank: true,
          items: [
            "The exhibition is called *Paper [[Cities]]*.",
            "There are going to be [[20|twenty]] works.",
            "The installation is made with recycled [[paper]].",
            "The opening is at [[7]] p.m.",
            "Guests need to reply by [[Wednesday]]."
          ]
        },
        {
          type: "sort", title: "Ms. Ortega or Pablo?",
          prompt: "Sort the sentences.",
          bins: ["Ms. Ortega", "Pablo"],
          items: [
            { text: "accepts the invitation", bin: 0 }, { text: "is going to bring colleagues", bin: 0 },
            { text: "can't come on Friday", bin: 1 }, { text: "is going to travel", bin: 1 },
            { text: "will visit next week", bin: 1 }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice *going to* and *will* first, then write an invitation.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "We're going to hang the paintings tomorrow." },
            { a: "I'll help you with the frames." },
            { a: "Would you like to come to the opening?" },
            { a: "I think it will be a success." },
            { a: "She isn't going to sell her sculpture." }
          ]
        },
        {
          type: "rewrite", title: "Plan, decision or prediction?",
          prompt: "Complete the answer with *going to* or *will* and the verb in brackets.",
          items: [
            { q: "A: What are your plans for the summer? B: I… (paint) a mural in my town.", a: ["I'm going to paint a mural in my town.", "I am going to paint a mural in my town."] },
            { q: "A: Oh no, I forgot my camera! B: Don't worry, I… (lend) you mine.", a: ["I'll lend you mine.", "I will lend you mine."] },
            { q: "A: Do you think people will like it? B: Yes, I think they… (love) it.", a: ["I think they'll love it.", "I think they will love it.", "Yes, I think they'll love it.", "Yes, I think they will love it."] },
            { q: "A: Is Mateo free on Thursday? B: No, he… (set up) the exhibition.", a: ["He's going to set up the exhibition.", "He is going to set up the exhibition.", "No, he's going to set up the exhibition."] }
          ]
        },
        {
          type: "write", title: "Invitation to my exhibition",
          prompt: "Imagine your first exhibition, film screening or game launch. Write an invitation for your teachers and classmates: what you're going to show, when and where, what's going to happen at the event, and a prediction.",
          minWords: 60, maxWords: 110,
          model: "Dear friends, I'm going to present my first photography exhibition, *Faces of Puebla*. I'm going to show 15 black-and-white portraits of people from the markets of the city. The opening is on Saturday, May 10th, at 6 p.m. at the Casa de la Cultura. My cousin is going to play the piano and there will be coffee and pan dulce. Would you like to come? I think you'll love it! Please reply by Thursday.",
          bank: ["Dear…", "I'm going to present…", "We're going to show…", "The opening is on… at…", "There will be…", "Would you like to come?", "I think you'll…", "Please reply by…"],
          checklist: [
            "I used *be going to* for plans at least **three** times.",
            "I used *will* for a prediction.",
            "I included the **date, time and place**.",
            "I invited people with *Would you like to…?*"
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
            "We're going to show twenty works.",
            "Don't worry, I'll print the labels.",
            "Would you like to come to the opening?",
            "I think a lot of people will come.",
            "She isn't going to sell her sculpture.",
            "It'll be a great night!"
          ]
        },
        {
          type: "speak", title: "Video invitation",
          prompt: "Record a one-minute video invitation for your event from Writing activity 3. Make it attractive!",
          language: ["Hi everyone!", "I'm going to present…", "It's going to be on… at…", "There will be…", "Would you like to come?", "See you there!"],
          seconds: 75,
          checklist: ["say what, when and where?", "use *going to*?", "use *will*?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name people and things in an exhibition.", review: "Explanation: the vocabulary cards" },
    { can: "I can talk about plans with *be going to*.", review: "Explanation: Be going to" },
    { can: "I can make decisions and offers with *will*.", review: "Explanation: Will; Writing activity 2" },
    { can: "I can make predictions with *I think… will…*", review: "Explanation: Will" },
    { can: "I can understand an invitation and the replies.", review: "Reading activities" },
    { can: "I can invite people to an event and answer invitations.", review: "Writing activity 3; Speaking activity 2" }
  ]
};
