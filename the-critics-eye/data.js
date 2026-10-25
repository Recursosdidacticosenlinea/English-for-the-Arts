window.UNIT = {
  slug: "the-critics-eye",
  title: "The Critic's Eye",
  level: "B1",
  minutes: 60,
  subject: "Visual Arts · Art Criticism",
  focus: ["present perfect: ever, never, already, yet, for, since", "present perfect vs. past simple", "language for opinions: In my view, It seems to…", "adjectives to describe art: striking, subtle, unsettling"],
  speakers: { "Iris": "f", "Javier": "m", "Sofía": "f", "Host": "m" },

  presentation: {
    scene: "🧐🖼️📝⭐",
    situation: "Iris and Javier are **Visual Arts** students. They're visiting a contemporary art exhibition at a museum for their **art criticism** class.",
    warmup: {
      prompt: "How do you describe an artwork? Choose the adjectives you know.",
      options: ["striking", "colorful", "dark", "subtle", "powerful", "unsettling", "boring", "original", "delicate", "chaotic", "calm", "provocative"],
      response: "Excellent. In this unit you'll learn to talk about your experiences with art and to give a critical opinion."
    },
    dialogueTitle: "In front of the installation",
    dialogue: [
      { who: "Iris", line: "*Have* you *ever seen* an installation like this?" },
      { who: "Javier", line: "No, *never*. I *saw* something similar in Mexico City last year, but it was smaller." },
      { who: "Iris", line: "The artist *has worked* with plastic waste *for* more than ten years. It seems to be about the ocean." },
      { who: "Javier", line: "In my view, it's quite *unsettling*. The colors are beautiful, but the message is dark." },
      { who: "Iris", line: "I agree. *Have* you *written* your review *yet*?" },
      { who: "Javier", line: "Not *yet*. I*'ve* only *taken* notes. What about you?" },
      { who: "Iris", line: "I*'ve already started* it. I *wrote* the introduction on the bus this morning." }
    ]
  },

  objectives: [
    "I can talk about my experiences with art using the present perfect.",
    "I can choose between the present perfect and the past simple.",
    "I can describe an artwork with precise adjectives.",
    "I can give and support a critical opinion about an artwork."
  ],

  explanation: {
    vocabTitle: "Language for art criticism",
    vocab: [
      { word: "artwork / piece", icon: "🖼️" }, { word: "medium", icon: "🧪" }, { word: "composition", icon: "📐" },
      { word: "texture", icon: "🧶" }, { word: "contrast", icon: "◐" }, { word: "scale", icon: "📏" },
      { word: "theme", icon: "💭" }, { word: "viewer", icon: "👀" }, { word: "striking", icon: "⚡" },
      { word: "subtle", icon: "🌫️" }, { word: "unsettling", icon: "😬" }, { word: "thought-provoking", icon: "🧠" },
      { word: "evoke", icon: "💫" }, { word: "convey", icon: "📨" }, { word: "review", icon: "📝" }
    ],
    grammar: [
      {
        title: "Present perfect",
        head: ["Use", "Example"],
        rows: [
          ["Experiences (no specific time)", "*Have* you *ever seen* a Rothko? — No, I*'ve never seen* one."],
          ["Recent actions with *already / just / yet*", "I*'ve already started*. / *Have* you *finished yet*?"],
          ["From the past until now: *for / since*", "She*'s worked* with plastic *for* ten years / *since* 2015."]
        ],
        note: "Form: *have / has* + past participle (*seen, written, been, made, taken*). *For* + period (*for three years*); *since* + starting point (*since 2015, since I was a child*)."
      },
      {
        title: "Present perfect vs. past simple",
        head: ["Present perfect", "Past simple"],
        rows: [
          ["No specific time: *I've visited* the Louvre.", "Specific time: *I visited* it *in 2022*."],
          ["Connected to now: *She's had* three exhibitions.", "Finished period: *She had* an exhibition *last year*."],
          ["Question: *Have you ever…?*", "Details: *When did you go? What did you see?*"]
        ],
        note: "Often we start with the present perfect and continue with the past simple: *I've seen her work. I saw it at MUSA last month.*"
      },
      {
        title: "Giving a critical opinion",
        head: ["Function", "Expressions"],
        rows: [
          ["Opinion", "*In my view,… / To me,… / I'd say that…*"],
          ["Interpretation", "*It seems to be about… / It evokes… / The artist is trying to…*"],
          ["Evidence", "*The use of… creates… / The contrast between… and…*"],
          ["Balance", "*Although…, … / On the one hand… on the other hand…*"]
        ],
        note: "A good critique **describes**, **interprets** and **evaluates**: what you see → what it means → why it works (or doesn't)."
      }
    ],
    watchOut: [
      ["I have seen it last year.", "I saw it last year."],
      ["Did you ever see a Rothko?", "Have you ever seen a Rothko?"],
      ["She works here since 2015.", "She's worked here since 2015."],
      ["for 2015 / since three years", "since 2015 / for three years"],
      ["I haven't finished already.", "I haven't finished yet."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the sentences.",
      items: [
        "Have you [[ever]] been to a biennial?",
        "The artist has lived in Oaxaca [[since]] 2010.",
        "I [[saw]] her exhibition last week. (see)",
        "I haven't written my review [[yet]]."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a segment of an arts radio program. Two critics discuss a new exhibition.",
      title: "Radio: *Art Talk*",
      script: [
        { who: "Host", line: "Welcome back to Art Talk. Today we're discussing *Salt and Memory*, the new exhibition by Ana Torres. Sofía, have you seen it yet?" },
        { who: "Sofía", line: "Yes, I have. I went on the opening night. I've followed Torres's work since her first show, and I think this is her most mature exhibition." },
        { who: "Host", line: "What did you like about it?" },
        { who: "Sofía", line: "The scale is striking. She's made huge sculptures with sea salt. They evoke the coast, but also loss and time, because the salt slowly changes during the exhibition." },
        { who: "Javier", line: "I agree that it's beautiful, but in my view it's a little repetitive. There are twelve pieces and they all convey the same idea." },
        { who: "Sofía", line: "Hmm, I'd say the repetition is part of the message." },
        { who: "Javier", line: "Maybe. Although I wasn't totally convinced, I'd still recommend it. It's very thought-provoking." }
      ],
      activities: [
        {
          type: "sort", title: "Who says it?",
          prompt: "Sort the opinions.",
          bins: ["Sofía", "Javier"],
          items: [
            { text: "It's her most mature exhibition.", bin: 0 }, { text: "The scale is striking.", bin: 0 },
            { text: "The repetition is part of the message.", bin: 0 },
            { text: "It's a little repetitive.", bin: 1 }, { text: "All the pieces convey the same idea.", bin: 1 },
            { text: "It's very thought-provoking.", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "Sofía went to the exhibition on the opening night.", a: true },
            { s: "Sofía has followed the artist's work for a short time.", a: false },
            { s: "The sculptures are made of sea salt.", a: true },
            { s: "There are twenty pieces in the exhibition.", a: false },
            { s: "Javier doesn't recommend the exhibition.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a short review from a student art blog.",
      title: "Review: *Threads of Home* by Lucía Méndez",
      text: [
        { author: "Description", body: "Lucía Méndez has spent the last five years working with textiles from her grandmother's village in the Sierra Norte. In *Threads of Home*, now at a small gallery in Puebla, she presents eight large tapestries hanging from the ceiling. Visitors can walk between them." },
        { author: "Interpretation", body: "The pieces seem to be about migration. Many threads are cut or loose, which evokes families that have been separated. The bright colors of traditional embroidery contrast with empty, gray spaces in the middle of each tapestry." },
        { author: "Evaluation", body: "Although the gallery is too small for this kind of work, the installation is powerful. I've seen many exhibitions about migration, but few have been as subtle and personal as this one. In my view, it's one of the best shows of the year. Highly recommended." }
      ],
      activities: [
        {
          type: "match", title: "Find the meaning",
          prompt: "Match the element of the artwork with what it suggests, according to the critic.",
          pairs: [
            ["cut or loose threads", "separated families"],
            ["bright embroidery colors", "tradition"],
            ["empty gray spaces", "absence"],
            ["walking between the tapestries", "the viewer is inside the work"]
          ]
        },
        {
          type: "rewrite", title: "Answer the questions",
          prompt: "Answer in a complete sentence.",
          items: [
            { q: "How long has Lucía Méndez worked with these textiles?", a: ["She has worked with them for five years.", "She's worked with them for five years.", "For five years.", "She has worked with these textiles for five years.", "She's worked with these textiles for five years."] },
            { q: "What is the one negative point in the review?", a: ["The gallery is too small.", "The gallery is too small for this kind of work."] },
            { q: "What is the theme of the exhibition?", a: ["Migration.", "It's about migration.", "The theme is migration."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the tenses first, then write your own short review.",
      activities: [
        {
          type: "gap", title: "Present perfect or past simple?",
          prompt: "Complete with the correct form of the verb in brackets.",
          items: [
            "I [[have never been|'ve never been]] to the Venice Biennale. (never / be)",
            "We [[went]] to MUSA last Saturday. (go)",
            "Gabriel Orozco [[has exhibited|'s exhibited]] his work all over the world. (exhibit)",
            "When [[did]] you [[see]] the installation? (see)",
            "She [[has painted|'s painted]] murals since 2018. (paint)"
          ]
        },
        {
          type: "rewrite", title: "Make it critical",
          prompt: "Rewrite the simple opinion with the expression in brackets.",
          items: [
            { q: "I think it is about the ocean. (It seems…)", a: ["It seems to be about the ocean."] },
            { q: "It's beautiful. But the gallery is small. (Although…)", a: ["Although it's beautiful, the gallery is small.", "Although it is beautiful, the gallery is small.", "Although the gallery is small, it's beautiful.", "Although the gallery is small, it is beautiful."] },
            { q: "I think it's powerful. (In my view…)", a: ["In my view, it's powerful.", "In my view, it is powerful.", "In my view it's powerful."] }
          ]
        },
        {
          type: "write", title: "My exhibition review",
          prompt: "Write a review (100–160 words) of an exhibition, artwork, film or video game you have seen recently. Follow the structure: description, interpretation, evaluation. Use the present perfect and the past simple.",
          minWords: 100, maxWords: 160,
          model: "Last month I visited *Underground*, an exhibition of photographs by Iván Rojas at the Casa de Cultura. Rojas has photographed the Mexico City metro for more than a decade, and this show presents thirty black-and-white images of passengers. The photos seem to be about loneliness in the crowd: people are very close to each other, but nobody is looking at anyone. The strong contrast between light and shadow creates an unsettling atmosphere. Although some images are a little repetitive, the series is subtle and thought-provoking. I've seen many photos of the metro, but these made me look at my own daily journey differently. In my view, it's an exhibition worth visiting.",
          bank: ["Last month I visited…", "… has worked with… for / since…", "It seems to be about…", "The use of … creates…", "The contrast between…", "Although…,", "In my view,…", "I'd recommend it because…"],
          checklist: [
            "I wrote three parts: **description, interpretation, evaluation**.",
            "I used the **present perfect** at least twice (*has worked, I've seen…*).",
            "I used the **past simple** for a specific time.",
            "I used at least **three** expressions for opinion or interpretation."
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
            "Have you ever seen an installation like this?",
            "I've already started my review.",
            "She's worked with plastic for ten years.",
            "I saw her exhibition last week.",
            "In my view, it's quite unsettling.",
            "It seems to be about the ocean."
          ]
        },
        {
          type: "speak", title: "Video review",
          prompt: "Record a 90-second video review of the artwork from Writing activity 3, as if for a cultural YouTube channel. Show an image if you can.",
          language: ["Today I'm reviewing…", "I've been a fan of… since…", "What I noticed first was…", "It evokes…", "My verdict:…"],
          seconds: 90,
          checklist: ["describe, interpret and evaluate?", "use the present perfect and the past simple?", "use art vocabulary (*contrast, composition, texture*)?", "give a clear final verdict?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about my experiences with art using *Have you ever…?*", review: "Explanation: Present perfect" },
    { can: "I can use *already, yet, for, since* correctly.", review: "Explanation: Present perfect; Quick check" },
    { can: "I can choose between the present perfect and the past simple.", review: "Explanation: Present perfect vs. past simple; Writing activity 1" },
    { can: "I can describe an artwork with precise adjectives.", review: "Explanation: the vocabulary cards" },
    { can: "I can understand opinions in a review or a radio discussion.", review: "Listening and Reading activities" },
    { can: "I can write and present a short critical review.", review: "Writing activity 3; Speaking activity 2" }
  ]
};
