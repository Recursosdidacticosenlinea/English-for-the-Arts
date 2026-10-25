window.UNIT = {
  slug: "the-pitch",
  title: "The Pitch",
  level: "B1",
  minutes: 60,
  subject: "Cinematography · Film Production",
  focus: ["first conditional: If we get the funding, we'll…", "unless, as soon as, when", "persuasive language for a pitch", "film genres and production vocabulary"],
  speakers: { "Camila": "f", "Gabriel": "m", "Ms. Herrera": "f", "Mr. Lin": "m" },

  presentation: {
    scene: "🎬💡💰🤝",
    situation: "Camila and Gabriel are **Cinematography** students. They're presenting their short film project to a panel of producers to get funding.",
    warmup: {
      prompt: "What do producers want to know about a film project? Choose everything you think is important.",
      options: ["the story", "the genre", "the budget", "the cast", "the locations", "the audience", "the schedule", "the director's experience", "festivals", "the message", "the music", "the risks"],
      response: "Good thinking! In this unit you'll learn to present and defend a film project in English."
    },
    dialogueTitle: "In front of the panel",
    dialogue: [
      { who: "Camila", line: "Our film, *The Last Projectionist*, is a 15-minute drama about an old man who runs the last cinema in his town." },
      { who: "Ms. Herrera", line: "Interesting. What *will* you *do if* you *don't get* permission to film in a real cinema?" },
      { who: "Gabriel", line: "*If* that *happens*, we*'ll use* the theater at our school. But we've already talked to the owner of Cine Variedades." },
      { who: "Ms. Herrera", line: "And the budget?" },
      { who: "Camila", line: "We need forty thousand pesos. *If* you *support* us, we*'ll be able to* rent professional lights and pay the actors." },
      { who: "Gabriel", line: "*As soon as* we *finish* the editing, we*'ll send* it to festivals in Morelia and Guadalajara." },
      { who: "Camila", line: "We truly believe this story *will connect* with audiences. *Unless* we *show* these places, they'll disappear forever." }
    ]
  },

  objectives: [
    "I can describe a film project: genre, story, budget and audience.",
    "I can talk about possible future situations with the first conditional.",
    "I can use *unless, as soon as* and *when* to connect future ideas.",
    "I can use persuasive language to pitch a project and answer questions."
  ],

  explanation: {
    vocabTitle: "Film production and pitching",
    vocab: [
      { word: "pitch", icon: "🎤" }, { word: "logline", icon: "✏️" }, { word: "budget", icon: "💰" },
      { word: "funding", icon: "🏦" }, { word: "cast", icon: "🎭" }, { word: "location", icon: "📍" },
      { word: "shooting schedule", icon: "🗓️" }, { word: "pre-production", icon: "📋" }, { word: "post-production", icon: "🎛️" },
      { word: "target audience", icon: "🎯" }, { word: "film festival", icon: "🏆" }, { word: "drama", icon: "😢" },
      { word: "documentary", icon: "📹" }, { word: "thriller", icon: "🔪" }, { word: "short film", icon: "⏱️" }
    ],
    grammar: [
      {
        title: "First conditional",
        head: ["Condition", "Result"],
        rows: [
          ["*If* we *get* the funding,", "we*'ll rent* professional lights."],
          ["*If* it *rains*,", "we*'ll shoot* the scene inside."],
          ["*If* the actors *aren't* available,", "we *won't start* in May."],
          ["*What will* you *do if*…?", "*If* that happens, we'll…"]
        ],
        note: "Use the **present simple** after *if* and *will* in the result (not *If we will get…*). The two parts can change order: *We'll rent lights if we get the funding* (no comma)."
      },
      {
        title: "Unless, as soon as, when",
        head: ["Word", "Meaning", "Example"],
        rows: [
          ["*unless*", "if … not", "We won't finish on time *unless* we get help."],
          ["*as soon as*", "immediately when", "*As soon as* we finish, we'll send it to festivals."],
          ["*when*", "at the time (it's sure)", "*When* the film is ready, we'll organize a screening."]
        ],
        note: "Like *if*, these words take the **present simple**: *as soon as we finish* (not *will finish*)."
      },
      {
        title: "Persuasive language",
        head: ["Function", "Expressions"],
        rows: [
          ["Hook", "*Imagine a town where…* / *What if…?*"],
          ["Strength", "*What makes this project unique is…* / *This story is relevant because…*"],
          ["Confidence", "*We truly believe… / We're confident that…*"],
          ["Ask", "*With your support, we'll be able to…*"]
        ],
        note: "A **logline** is one sentence that sums up the film: character + goal + obstacle."
      }
    ],
    watchOut: [
      ["If we will get the money, we'll start.", "If we get the money, we'll start."],
      ["As soon as we will finish…", "As soon as we finish…"],
      ["Unless we don't get help…", "Unless we get help…"],
      ["If it rains, we shoot inside. (future plan)", "If it rains, we'll shoot inside."],
      ["We will can rent lights.", "We'll be able to rent lights."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the sentences.",
      items: [
        "If we [[get]] the funding, we'll start in June. (get)",
        "We [[will|'ll]] use the school theater if the cinema says no.",
        "We won't finish [[unless]] we work on weekends.",
        "As soon as the editing is ready, we [[will|'ll]] send it to festivals."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Mr. Lin, a producer, gives feedback to a group of students after their pitch. Listen and complete the notes.",
      title: "Producer's feedback",
      script: [
        { who: "Mr. Lin", line: "Thank you for your pitch. I like the story a lot, but I have some concerns." },
        { who: "Mr. Lin", line: "First, the schedule. You want to shoot in July. If you shoot in July, it'll rain almost every afternoon. Have you thought about that?" },
        { who: "Gabriel", line: "Yes. If it rains, we'll shoot the interior scenes first." },
        { who: "Mr. Lin", line: "Good. Second, the budget. Forty thousand is realistic, but you won't be able to pay for music unless you find a composer who works for free." },
        { who: "Camila", line: "A student from the music school wants to work with us." },
        { who: "Mr. Lin", line: "Excellent. Finally, the festivals. As soon as you have a rough cut, send it to me. If it's good, I'll recommend it to the Morelia festival." },
        { who: "Camila", line: "Thank you so much! We'll send it as soon as it's ready." }
      ],
      activities: [
        {
          type: "match", title: "Problem and solution",
          prompt: "Match the producer's concern with the students' solution or his advice.",
          pairs: [
            ["rain in July", "shoot the interior scenes first"],
            ["no money for music", "work with a student from the music school"],
            ["festivals", "send a rough cut to Mr. Lin"]
          ]
        },
        {
          type: "gap", title: "Complete the conditionals",
          prompt: "Listen again and complete.",
          bank: true,
          items: [
            "If you shoot in July, it'll [[rain]] almost every afternoon.",
            "You won't be able to pay for music [[unless]] you find a composer who works for free.",
            "As [[soon]] as you have a rough cut, send it to me.",
            "If it's good, I'll [[recommend]] it to the Morelia festival."
          ]
        }
      ]
    },

    reading: {
      intro: "Read a guide for students who are going to pitch a film for the first time.",
      title: "How to pitch your short film in five minutes",
      text: [
        { author: "1 · Start with a hook", body: "Don't start with your name and your school. Start with an image or a question: *Imagine the last cinema in a town of 2,000 people.* If the panel is curious in the first ten seconds, they'll listen to the rest." },
        { author: "2 · Give a clear logline", body: "In one sentence, say who your character is, what they want and what's stopping them. If you can't say it in one sentence, your story probably isn't clear yet." },
        { author: "3 · Show why it matters", body: "Producers receive hundreds of projects. Explain why your film is relevant now and who the audience is. Unless they see the value, they won't invest." },
        { author: "4 · Be realistic", body: "Present a budget and a schedule that make sense. Producers trust teams that know their limits. Mention possible risks and your plan B." },
        { author: "5 · Prepare for questions", body: "The questions are the most important part. Practice the difficult ones: *What will you do if…?* Answer calmly and honestly." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read the guide. True or false?",
          items: [
            { s: "You should start your pitch with your name and your school.", a: false },
            { s: "A logline includes the character, their goal and the obstacle.", a: true },
            { s: "Producers prefer teams that don't mention risks.", a: false },
            { s: "The questions are the most important part of a pitch.", a: true }
          ]
        },
        {
          type: "match", title: "Match the advice",
          prompt: "Match each piece of advice with its section.",
          pairs: [
            ["Imagine the last cinema in a town…", "hook"],
            ["one sentence: who, what they want, the obstacle", "logline"],
            ["explain who the audience is", "why it matters"],
            ["mention your plan B", "be realistic"],
            ["practice the difficult questions", "prepare for questions"]
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the conditionals first, then write your pitch.",
      activities: [
        {
          type: "rewrite", title: "Join the ideas",
          prompt: "Join the two ideas with the word in brackets.",
          items: [
            { q: "We get the funding. We'll hire a professional sound engineer. (If)", a: ["If we get the funding, we'll hire a professional sound engineer.", "If we get the funding, we will hire a professional sound engineer."] },
            { q: "We won't finish on time. We get more help. (unless)", a: ["We won't finish on time unless we get more help.", "We will not finish on time unless we get more help."] },
            { q: "We finish the editing. We'll organize a screening. (As soon as)", a: ["As soon as we finish the editing, we'll organize a screening.", "As soon as we finish the editing, we will organize a screening."] },
            { q: "The actors aren't available. We'll change the dates. (If)", a: ["If the actors aren't available, we'll change the dates.", "If the actors are not available, we will change the dates.", "If the actors aren't available, we will change the dates."] }
          ]
        },
        {
          type: "tiles", title: "Build the logline",
          prompt: "Put the words in order to make strong pitch sentences.",
          items: [
            { a: "We truly believe this story will connect with young audiences." },
            { a: "What makes this project unique is its location." },
            { a: "With your support, we'll be able to finish in May." }
          ]
        },
        {
          type: "write", title: "My pitch",
          prompt: "Write the text of a pitch (120–170 words) for a short film, documentary, animation or video game. Include a hook, a logline, why it matters, the budget or main needs, and at least three first conditional or *unless / as soon as* sentences about the future of the project.",
          minWords: 120, maxWords: 170,
          model: "Imagine a market where the oldest vendors are the last people who speak Nahuatl. *Voices of the Market* is a 20-minute documentary about three women who sell flowers in Cholula and keep their language alive. What makes this project unique is that the women tell their own stories, in their own language, with Spanish and English subtitles. This film is relevant because indigenous languages are disappearing, and young people rarely hear them. We need thirty-five thousand pesos for equipment, subtitles and transport. If we get your support, we'll start shooting in March. If the market is too noisy, we'll record the interviews in the women's homes. As soon as the film is ready, we'll organize a free screening in the market itself. Unless we document these voices now, they may be lost forever. We truly believe this film will move audiences.",
          bank: ["Imagine…", "… is a … about…", "What makes this project unique is…", "This film is relevant because…", "We need…", "If we get…, we'll…", "As soon as…,", "Unless…,", "We truly believe…"],
          checklist: [
            "I started with a **hook**.",
            "I included a clear **logline**.",
            "I used at least **three** sentences with *if, unless* or *as soon as*.",
            "I used the **present simple** after *if / unless / as soon as*."
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
            "If we get the funding, we'll start in June.",
            "What will you do if it rains?",
            "We won't finish unless we get help.",
            "As soon as we finish, we'll send it to festivals.",
            "What makes this project unique is the location.",
            "We truly believe this story will connect with audiences."
          ]
        },
        {
          type: "speak", title: "Elevator pitch",
          prompt: "Record a 90-second elevator pitch of your project. Imagine you meet a famous producer in an elevator at a film festival.",
          language: ["Imagine…", "My film is about…", "If you give me five minutes / your support,…", "We truly believe…"],
          seconds: 90,
          checklist: ["start with a hook?", "say a clear logline?", "use the first conditional?", "sound confident and persuasive?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can describe a film project: genre, story, budget, audience.", review: "Explanation: the vocabulary cards; Presentation" },
    { can: "I can use the first conditional with the present simple after *if*.", review: "Explanation: First conditional" },
    { can: "I can use *unless* and *as soon as* correctly.", review: "Explanation: Unless, as soon as, when; Writing activity 1" },
    { can: "I can write a clear logline and a hook.", review: "Reading: the guide; Writing activity 3" },
    { can: "I can understand feedback and advice about a project.", review: "Listening and Reading activities" },
    { can: "I can pitch a project and answer difficult questions.", review: "Speaking activities" }
  ]
};
