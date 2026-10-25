window.UNIT = {
  slug: "art-through-time",
  title: "Art Through Time",
  level: "A2",
  minutes: 55,
  subject: "Art History",
  focus: ["past simple: regular and irregular verbs", "was / were", "Wh- questions in the past", "time expressions: in 1925, ago, later, when"],
  speakers: { "Ms. Lara": "f", "Omar": "m", "Fernanda": "f", "Guide": "m" },

  presentation: {
    scene: "🏛️🖼️📜⏳",
    situation: "In **Art History** class, the students are preparing short biographies of Mexican artists. Omar and Fernanda are talking about their artist.",
    warmup: {
      prompt: "Which artists do you know? Choose the ones you know something about.",
      options: ["Frida Kahlo", "Diego Rivera", "Leonora Carrington", "Remedios Varo", "José Clemente Orozco", "Rufino Tamayo", "Posada", "Francisco Toledo", "Lola Álvarez Bravo", "Gabriel Orozco", "Pablo Picasso", "Vincent van Gogh"],
      response: "Very good! In this unit you'll learn to tell the story of an artist's life with the past simple."
    },
    dialogueTitle: "Our artist: Leonora Carrington",
    dialogue: [
      { who: "Omar", line: "So, Leonora Carrington *was* British, right?" },
      { who: "Fernanda", line: "Yes. She *was born* in England in 1917. Her family *didn't want* her to be an artist." },
      { who: "Omar", line: "When *did* she *come* to Mexico?" },
      { who: "Fernanda", line: "She *arrived* in 1942, during the Second World War. She *lived* in Mexico City for the rest of her life." },
      { who: "Omar", line: "And what *did* she *paint*?" },
      { who: "Fernanda", line: "She *painted* strange, magical worlds. She *was* a surrealist. She also *made* sculptures and *wrote* stories." },
      { who: "Omar", line: "Wow. Her sculptures are on Paseo de la Reforma, right? I *saw* them two years *ago*!" }
    ]
  },

  objectives: [
    "I can talk about the life of an artist with the past simple.",
    "I can use regular and irregular verbs in affirmative, negative and questions.",
    "I can ask Wh- questions in the past: *When did…? Where did…?*",
    "I can order events with time expressions."
  ],

  explanation: {
    vocabTitle: "Life events and art history",
    vocab: [
      { word: "be born", icon: "👶" }, { word: "grow up", icon: "🌱" }, { word: "study", icon: "📚" },
      { word: "move to", icon: "🧳" }, { word: "get married", icon: "💍" }, { word: "die", icon: "🕯️" },
      { word: "paint", icon: "🎨" }, { word: "exhibit", icon: "🖼️" }, { word: "become famous", icon: "⭐" },
      { word: "mural", icon: "🧱" }, { word: "self-portrait", icon: "🪞" }, { word: "engraving", icon: "🖋️" },
      { word: "movement", icon: "🌀" }, { word: "masterpiece", icon: "🏆" }, { word: "century", icon: "💯" }
    ],
    grammar: [
      {
        title: "Past simple",
        head: ["", "Form", "Example"],
        rows: [
          ["Affirmative (regular)", "verb + *-ed*", "She *painted* surreal worlds."],
          ["Affirmative (irregular)", "special form", "She *made* sculptures. She *wrote* stories."],
          ["Negative", "*didn't* + verb", "Her family *didn't want* her to be an artist."],
          ["Question", "*Did* + subject + verb?", "*Did* she *study* in Italy?"]
        ],
        note: "After *didn't* and *did*, use the base verb: *didn't go* (not *didn't went*). Common irregular verbs: *be → was/were, go → went, make → made, have → had, see → saw, write → wrote, become → became, meet → met, sell → sold*."
      },
      {
        title: "Was / were",
        head: ["", "I / he / she / it", "you / we / they"],
        rows: [
          ["Affirmative", "She *was* a surrealist.", "They *were* friends."],
          ["Negative", "He *wasn't* rich.", "They *weren't* famous then."],
          ["Question", "*Was* she British?", "*Were* they married?"]
        ],
        note: "*Be born* uses *was / were*: *She was born in 1917* (not *She born in 1917*)."
      },
      {
        title: "Wh- questions and time expressions",
        head: ["Question", "Answer"],
        rows: [
          ["*When did* she *arrive*?", "*In* 1942."],
          ["*Where did* she *live*?", "*In* Mexico City."],
          ["*What did* she *paint*?", "Magical worlds."],
          ["*Who did* she *meet*?", "Remedios Varo."]
        ],
        note: "Time expressions: *in 1925, in the 1930s, two years ago, later, then, after that, when she was 18*."
      }
    ],
    watchOut: [
      ["She born in 1917.", "She was born in 1917."],
      ["She didn't went to school.", "She didn't go to school."],
      ["When she arrived to Mexico?", "When did she arrive in Mexico?"],
      ["Did she painted murals?", "Did she paint murals?"],
      ["before two years", "two years ago"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the past simple.",
      items: [
        "Frida Kahlo [[was]] born in Coyoacán. (be)",
        "She [[met]] Diego Rivera in the 1920s. (meet)",
        "She [[didn't]] study art at a university.",
        "Where [[did]] she live? In the Blue House."
      ]
    }
  },

  skills: {
    listening: {
      intro: "A museum guide talks about the life of José Guadalupe Posada. Listen and put the events in order.",
      title: "Museum tour: the father of *La Catrina*",
      script: [
        { who: "Guide", line: "Good morning, everyone. This room is about José Guadalupe Posada." },
        { who: "Guide", line: "Posada was born in Aguascalientes in 1852. When he was young, he learned lithography in a local workshop." },
        { who: "Guide", line: "In 1888 he moved to Mexico City. There, he worked for many newspapers and magazines." },
        { who: "Guide", line: "He made thousands of engravings. Many of them showed skeletons, called *calaveras*, dressed like rich or poor people." },
        { who: "Student", line: "Did he create La Catrina?" },
        { who: "Guide", line: "Good question. Yes, he created the original image, but it had a different name. Later, Diego Rivera painted her in a famous mural and called her *La Catrina*." },
        { who: "Guide", line: "Posada died in 1913. He was poor and he wasn't famous. Today, he's one of the most important Mexican artists." }
      ],
      activities: [
        {
          type: "tiles", title: "Put the events in order",
          prompt: "Make sentences about Posada's life.",
          items: [
            { a: "He was born in Aguascalientes." },
            { a: "He learned lithography when he was young." },
            { a: "He moved to Mexico City in 1888." },
            { a: "He made thousands of engravings." },
            { a: "He died in 1913." }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "Posada worked for newspapers.", a: true },
            { s: "His calaveras were dressed like different people.", a: true },
            { s: "Diego Rivera created the original Catrina image.", a: false },
            { s: "Posada was rich and famous when he died.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a short biography from an online art encyclopedia for students.",
      title: "Frida Kahlo (1907–1954)",
      text: [
        { author: "Early life", body: "Frida Kahlo was born in Coyoacán, Mexico City, in 1907. Her father was a photographer. When she was six, she had polio, and her right leg was weak for the rest of her life." },
        { author: "The accident", body: "In 1925, when she was 18, Frida had a terrible bus accident. She spent months in bed. Her mother put a mirror above her bed, and Frida started to paint self-portraits." },
        { author: "Life with Diego", body: "She met the muralist Diego Rivera and they got married in 1929. They traveled to the United States, where Frida painted and exhibited her work. Their relationship was difficult." },
        { author: "Later years", body: "Frida had her first solo exhibition in Mexico in 1953. She was very sick, so she arrived at the gallery in her bed! She died one year later, in the Blue House, where she was born." }
      ],
      activities: [
        {
          type: "match", title: "When did it happen?",
          prompt: "Match the year with the event.",
          pairs: [
            ["1907", "She was born in Coyoacán."],
            ["1925", "She had a bus accident."],
            ["1929", "She married Diego Rivera."],
            ["1953", "She had her first solo exhibition in Mexico."],
            ["1954", "She died in the Blue House."]
          ]
        },
        {
          type: "rewrite", title: "Answer the questions",
          prompt: "Answer in a full sentence.",
          items: [
            { q: "What was her father's job?", a: ["He was a photographer.", "Her father was a photographer."] },
            { q: "How old was she when she had the accident?", a: ["She was 18.", "She was eighteen.", "She was 18 years old."] },
            { q: "Why did she start to paint self-portraits?", hint: "Use *because*.", a: ["Because there was a mirror above her bed.", "Because her mother put a mirror above her bed."] },
            { q: "How did she arrive at her exhibition in 1953?", a: ["She arrived in her bed.", "In her bed."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the past simple first, then write a short biography.",
      activities: [
        {
          type: "gap", title: "Regular or irregular?",
          prompt: "Complete with the past simple of the verb in brackets.",
          items: [
            "Diego Rivera [[studied]] in Europe. (study)",
            "He [[painted]] murals in public buildings. (paint)",
            "Remedios Varo [[came]] to Mexico in 1941. (come)",
            "Rufino Tamayo [[became]] famous in New York. (become)",
            "Francisco Toledo [[gave]] a lot of money to Oaxaca. (give)",
            "Lola Álvarez Bravo [[took]] photos of Frida. (take)"
          ]
        },
        {
          type: "rewrite", title: "Make questions",
          prompt: "Write the question for the underlined answer.",
          items: [
            { q: "Leonora was born **in England**. → Where…?", a: ["Where was Leonora born?", "Where was she born?"] },
            { q: "She arrived in Mexico **in 1942**. → When…?", a: ["When did she arrive in Mexico?", "When did Leonora arrive in Mexico?"] },
            { q: "She painted **magical worlds**. → What…?", a: ["What did she paint?", "What did Leonora paint?"] },
            { q: "She met **Remedios Varo**. → Who…?", a: ["Who did she meet?", "Who did Leonora meet?"] }
          ]
        },
        {
          type: "write", title: "An artist's life",
          prompt: "Write a short biography (60–110 words) of an artist, filmmaker or game designer you admire. Include where and when they were born, where they studied or worked, important works and one interesting fact. Use time expressions to order the events.",
          minWords: 60, maxWords: 110,
          model: "Remedios Varo was a surrealist painter. She was born in Spain in 1908 and studied art in Madrid. In 1941, during the war, she moved to Mexico. At first she didn't sell her paintings; she worked in advertising. Later, she became famous for her mysterious paintings of women, machines and magic. She was a close friend of Leonora Carrington. She died in Mexico City in 1963.",
          bank: ["was born in", "When he / she was…", "In 19…,", "Then,", "After that,", "Later,", "became famous for", "One interesting fact is…"],
          checklist: [
            "I used at least **five** verbs in the past simple.",
            "I used at least **two** irregular verbs.",
            "I used *was born*.",
            "I used time expressions (*in 1941, later, then…*)."
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
            "She was born in a small town.",
            "He moved to the city in his twenties.",
            "They didn't sell many paintings.",
            "When did she start to paint?",
            "He made thousands of engravings.",
            "Her work became famous after she died."
          ]
        },
        {
          type: "speak", title: "My favorite artwork",
          prompt: "Record yourself for about one minute. Talk about an artwork (painting, film, game, photo) from the past: who made it, when, where, and why you like it.",
          language: ["… made / painted / directed it in…", "It shows…", "The first time I saw it was…", "I like it because…"],
          seconds: 75,
          checklist: ["say who made it and when?", "use at least four past simple verbs?", "give your opinion?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use regular past simple verbs (*painted, moved, studied*).", review: "Explanation: Past simple; Writing activity 1" },
    { can: "I can use common irregular verbs (*was, made, became, met*).", review: "Explanation: Past simple (note)" },
    { can: "I can make negatives and questions with *didn't* and *did*.", review: "Writing activity 2" },
    { can: "I can use *was born* and *was / were*.", review: "Explanation: Was / were" },
    { can: "I can understand a biography or a talk about an artist.", review: "Listening and Reading activities" },
    { can: "I can tell the life story of an artist in order.", review: "Writing activity 3; Speaking activity 2" }
  ]
};
