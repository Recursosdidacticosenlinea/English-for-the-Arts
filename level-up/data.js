window.UNIT = {
  slug: "level-up",
  title: "Level Up",
  level: "A2",
  minutes: 55,
  subject: "Digital Art",
  focus: ["comparatives: faster, more powerful, better", "superlatives: the fastest, the most popular, the best", "(not) as … as", "software, engines and digital tools"],
  speakers: { "Tania": "f", "Alan": "m", "Hugo": "m" },

  presentation: {
    scene: "💻🕹️📊🏆",
    situation: "Tania and Alan are **Digital Art** students. They need to choose software for their first 3D animation and game project.",
    warmup: {
      prompt: "Which digital tools do you know or use? Choose everything you know.",
      options: ["Blender", "Unity", "Unreal Engine", "Godot", "Photoshop", "Krita", "Procreate", "Maya", "After Effects", "Premiere", "Figma", "a graphics tablet"],
      response: "Cool! In this unit you'll learn to compare tools, games and styles in English."
    },
    dialogueTitle: "Which one is better?",
    dialogue: [
      { who: "Tania", line: "For the 3D models, I prefer Blender. It's free and it's *easier than* Maya for me." },
      { who: "Alan", line: "True, but Maya is *more common* in big studios." },
      { who: "Tania", line: "Maybe, but it's *more expensive*. We're students!" },
      { who: "Alan", line: "OK, Blender. Now the game engine: Unity or Unreal?" },
      { who: "Tania", line: "Unreal has *the best* graphics. The lights look *more realistic*." },
      { who: "Alan", line: "Yes, but our computers are old. Unity is *lighter* and *faster* on old computers." },
      { who: "Tania", line: "Hmm, and Godot? It's *the smallest* and it's open source. But it isn't *as popular as* the others." }
    ]
  },

  objectives: [
    "I can name common digital art tools and their features.",
    "I can compare two things with comparative adjectives.",
    "I can say which is the best, the fastest or the most popular with superlatives.",
    "I can give reasons for choosing a tool or style."
  ],

  explanation: {
    vocabTitle: "Digital tools and their features",
    vocab: [
      { word: "software", icon: "💿" }, { word: "game engine", icon: "⚙️" }, { word: "3D model", icon: "🧊" },
      { word: "render", icon: "🖥️" }, { word: "texture", icon: "🧱" }, { word: "frame rate", icon: "🎞️" },
      { word: "graphics tablet", icon: "✍️" }, { word: "pixel art", icon: "👾" }, { word: "realistic", icon: "📷" },
      { word: "free / open source", icon: "🆓" }, { word: "expensive", icon: "💰" }, { word: "powerful", icon: "💪" },
      { word: "user-friendly", icon: "😊" }, { word: "heavy / light", icon: "🏋️" }, { word: "update", icon: "🔄" }
    ],
    grammar: [
      {
        title: "Comparatives",
        head: ["Adjective", "Rule", "Example"],
        rows: [
          ["short: fast, light", "+ *-er than*", "Unity is *faster than* Unreal on old computers."],
          ["ending in -y: easy", "-y → *-ier than*", "Blender is *easier than* Maya for me."],
          ["long: expensive, realistic", "*more* + adjective + *than*", "Maya is *more expensive than* Blender."],
          ["irregular: good, bad", "*better / worse than*", "This tablet is *better than* my old one."]
        ],
        note: "Short adjectives with consonant-vowel-consonant double the last letter: *big → bigger, hot → hotter*."
      },
      {
        title: "Superlatives",
        head: ["Adjective", "Rule", "Example"],
        rows: [
          ["short: fast, small", "*the* + *-est*", "Godot is *the smallest* engine."],
          ["ending in -y: easy", "*the* + *-iest*", "This is *the easiest* program."],
          ["long: popular", "*the most* + adjective", "Unity is one of *the most popular* engines."],
          ["irregular: good, bad", "*the best / the worst*", "Unreal has *the best* lighting."]
        ],
        note: "Use *in* or *of* after superlatives: *the best software in the lab, the fastest of the three*."
      },
      {
        title: "(Not) as … as",
        head: ["Meaning", "Example"],
        rows: [
          ["the same", "Krita is *as good as* Photoshop for painting."],
          ["less", "Godot is*n't as popular as* Unity."]
        ],
        note: "Don't use *-er* or *more* with *as … as*: *as fast as* (not *as faster as*)."
      }
    ],
    watchOut: [
      ["Blender is more easy than Maya.", "Blender is easier than Maya."],
      ["Unreal is more better.", "Unreal is better."],
      ["It's the more popular engine.", "It's the most popular engine."],
      ["faster that Unity", "faster than Unity"],
      ["It isn't as popular than Unity.", "It isn't as popular as Unity."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the correct form of the adjective.",
      items: [
        "My new tablet is [[lighter]] than the old one. (light)",
        "Maya is [[more expensive]] than Blender. (expensive)",
        "This is [[the best]] game of the year! (good)",
        "Godot isn't as [[popular]] as Unity. (popular)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Hugo, a student, reviews three graphics tablets on his video channel. Listen and compare them.",
      title: "Tablet review",
      script: [
        { who: "Hugo", line: "Hi, everyone! Today I'm comparing three graphics tablets for students: the Ink S, the Ink Pro and the Ink Max." },
        { who: "Hugo", line: "The Ink S is the cheapest. It's only fifty dollars. But it's the smallest, and it doesn't have a screen." },
        { who: "Hugo", line: "The Ink Pro has a screen. It's bigger than the Ink S and the pen is more sensitive. It costs three hundred dollars." },
        { who: "Hugo", line: "The Ink Max is the biggest and the most powerful. The colors on the screen are amazing. But it's also the heaviest and the most expensive: nine hundred dollars!" },
        { who: "Hugo", line: "So, which is the best? For beginners, the Ink S is as good as the others for practice. For professional work, the Ink Max is better." },
        { who: "Hugo", line: "My favorite? The Ink Pro. It isn't as expensive as the Max, and it's better than the S. Leave a comment!" }
      ],
      activities: [
        {
          type: "sort", title: "Which tablet?",
          prompt: "Sort the features.",
          bins: ["Ink S", "Ink Pro", "Ink Max"],
          items: [
            { text: "the cheapest", bin: 0 }, { text: "the smallest", bin: 0 },
            { text: "Hugo's favorite", bin: 1 }, { text: "costs $300", bin: 1 },
            { text: "the most powerful", bin: 2 }, { text: "the heaviest", bin: 2 }
          ]
        },
        {
          type: "gap", title: "Complete Hugo's ideas",
          prompt: "Complete with the words you hear.",
          bank: true,
          items: [
            "The Ink Pro is [[bigger]] than the Ink S.",
            "The Ink Max is the most [[expensive]].",
            "For practice, the Ink S is as [[good]] as the others.",
            "The Ink Pro isn't as expensive [[as]] the Max."
          ]
        }
      ]
    },

    reading: {
      intro: "Read three short reviews of indie games from a student gaming magazine.",
      title: "Three indie games you need to play",
      text: [
        { author: "Hollow Knight", body: "This game has the most beautiful hand-drawn art of the three. The world is darker and more mysterious than in other platform games. Warning: it's very difficult!" },
        { author: "Stardew Valley", body: "One person made this farming game in about four years. The pixel art is simpler than in Hollow Knight, but it's colorful and cute. It's the most relaxing game on this list." },
        { author: "Cuphead", body: "Its style looks like a cartoon from the 1930s. The artists drew every frame by hand, so it's the slowest game to make of the three. It's as difficult as Hollow Knight, maybe more!" }
      ],
      activities: [
        {
          type: "match", title: "Match the game",
          prompt: "Match the description with the game.",
          pairs: [
            ["the most relaxing", "Stardew Valley"],
            ["looks like an old cartoon", "Cuphead"],
            ["the most beautiful hand-drawn art", "Hollow Knight"],
            ["made by one person", "Stardew Valley"],
            ["every frame drawn by hand", "Cuphead"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "Stardew Valley's art is simpler than Hollow Knight's.", a: true },
            { s: "Hollow Knight is easier than Cuphead.", a: false },
            { s: "Cuphead was the fastest game to make.", a: false },
            { s: "Hollow Knight's world is darker than other platform games.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice comparing first, then write a short review.",
      activities: [
        {
          type: "rewrite", title: "Compare them",
          prompt: "Write one sentence with a comparative or superlative.",
          items: [
            { q: "Krita / Photoshop / cheap (comparative)", a: ["Krita is cheaper than Photoshop."] },
            { q: "Unreal / Unity / realistic (comparative)", a: ["Unreal is more realistic than Unity."] },
            { q: "Minecraft / popular game / in the world (superlative)", a: ["Minecraft is the most popular game in the world.", "Minecraft is one of the most popular games in the world."] },
            { q: "my laptop / bad / computer in the class (superlative)", a: ["My laptop is the worst computer in the class."] },
            { q: "Godot / not / popular / Unity (as … as)", a: ["Godot isn't as popular as Unity.", "Godot is not as popular as Unity."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Blender is easier than Maya." },
            { a: "This is the best tablet for students." },
            { a: "Pixel art is simpler than 3D." },
            { a: "My computer isn't as fast as yours." }
          ]
        },
        {
          type: "write", title: "Tool review",
          prompt: "Compare two or three digital tools, apps, games or devices you know (for example drawing apps, editing programs, game engines, phones for photos). Say which is the best for you and why.",
          minWords: 60, maxWords: 110,
          model: "I use two drawing apps: Krita and Procreate. Krita is free and it works on my laptop, so it's cheaper than Procreate. But Procreate is more user-friendly and the brushes are better. It's also faster on my tablet. Krita isn't as easy as Procreate, but it has more tools for comics. For me, Procreate is the best app for sketches, and Krita is the best for final illustrations.",
          bank: ["… is cheaper / faster / easier than…", "… is more … than…", "… is the best…", "… isn't as … as…", "For me,", "because"],
          checklist: [
            "I used at least **three** comparatives.",
            "I used at least **one** superlative.",
            "I used *(not) as … as*.",
            "I gave **reasons** for my opinion."
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
            "This program is easier than the other one.",
            "It's the most popular game engine.",
            "My computer is slower than yours.",
            "This is the best tablet for students.",
            "It isn't as expensive as the new one.",
            "The graphics look more realistic."
          ]
        },
        {
          type: "speak", title: "My top three",
          prompt: "Record yourself for about one minute. Present your top three games, animated films or digital artworks and compare them.",
          language: ["Number three is…", "It's more … than…", "Number one is the best because…", "It isn't as … as…"],
          seconds: 75,
          checklist: ["present three items?", "use comparatives and superlatives?", "give reasons?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name digital art tools and their features.", review: "Explanation: the vocabulary cards" },
    { can: "I can form comparatives with *-er* and *more*.", review: "Explanation: Comparatives" },
    { can: "I can form superlatives with *the -est* and *the most*.", review: "Explanation: Superlatives" },
    { can: "I can use *better, the best, worse, the worst*.", review: "Writing activity 1" },
    { can: "I can use *(not) as … as*.", review: "Explanation: (Not) as … as" },
    { can: "I can compare tools and give reasons for my choice.", review: "Writing activity 3; Speaking activity 2" }
  ]
};
