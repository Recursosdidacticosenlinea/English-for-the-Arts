window.UNIT = {
  slug: "my-studio",
  title: "My Studio",
  level: "A1",
  minutes: 50,
  subject: "Visual Arts",
  focus: ["there is / there are", "art materials and tools", "prepositions of place: on, in, under, next to, between", "some / any"],
  speakers: { "Mariana": "f", "Joel": "m", "Ms. Vega": "f" },

  presentation: {
    scene: "🎨🖌️🪣🖼️",
    situation: "Joel is a new **Visual Arts** student. Mariana, a classmate, shows him the painting studio at the School of Fine Arts.",
    warmup: {
      prompt: "What's in an art studio? Choose everything you know.",
      options: ["an easel", "a canvas", "brushes", "paint", "a palette", "pencils", "an eraser", "clay", "a sink", "a shelf", "an apron", "a sketchbook"],
      response: "Very good! In this unit you'll learn to describe an art studio and say where things are."
    },
    dialogueTitle: "In the painting studio",
    dialogue: [
      { who: "Mariana", line: "Welcome to the studio, Joel! *There are* ten easels here, one for each student." },
      { who: "Joel", line: "Wow, it's big! *Is there* a place for my things?" },
      { who: "Mariana", line: "Yes, *there is*. *There's* a shelf *next to* the window. Your box goes *on* the shelf." },
      { who: "Joel", line: "Great. And where are the brushes?" },
      { who: "Mariana", line: "They're *in* the green jars, *on* the big table." },
      { who: "Joel", line: "*Are there* any aprons?" },
      { who: "Mariana", line: "Yes, *there are* some aprons *behind* the door. Oh, and *there's* a sink *under* the window for the brushes." }
    ]
  },

  objectives: [
    "I can name common art materials and studio furniture.",
    "I can say what there is in a place with *there is / there are*.",
    "I can say where things are with prepositions of place.",
    "I can ask and answer questions about a studio: *Is there…? Are there any…?*"
  ],

  explanation: {
    vocabTitle: "Art materials and the studio",
    vocab: [
      { word: "easel", icon: "🖼️" }, { word: "canvas", icon: "⬜" }, { word: "brush", icon: "🖌️" },
      { word: "paint", icon: "🎨" }, { word: "palette", icon: "🎨" }, { word: "pencil", icon: "✏️" },
      { word: "eraser", icon: "🧽" }, { word: "sketchbook", icon: "📓" }, { word: "clay", icon: "🏺" },
      { word: "scissors", icon: "✂️" }, { word: "glue", icon: "🧴" }, { word: "jar", icon: "🫙" },
      { word: "shelf", icon: "🗄️" }, { word: "sink", icon: "🚰" }, { word: "apron", icon: "🥼" }
    ],
    grammar: [
      {
        title: "There is / there are",
        head: ["", "Singular", "Plural"],
        rows: [
          ["Affirmative", "*There's* a sink.", "*There are* ten easels."],
          ["Negative", "*There isn't* a computer.", "*There aren't* any scissors."],
          ["Question", "*Is there* a shelf?", "*Are there* any aprons?"],
          ["Short answer", "Yes, there is. / No, there isn't.", "Yes, there are. / No, there aren't."]
        ],
        note: "Use *some* in affirmative sentences and *any* in negatives and questions: *There are some brushes. Are there any brushes?*"
      },
      {
        title: "Prepositions of place",
        head: ["Preposition", "Example"],
        rows: [
          ["on", "The paint is *on* the table."], ["in", "The brushes are *in* the jar."],
          ["under", "The sink is *under* the window."], ["next to", "The shelf is *next to* the door."],
          ["between", "The easel is *between* the table and the window."], ["behind / in front of", "The aprons are *behind* the door."]
        ],
        note: "Use *where* to ask about position: *Where's the glue? — It's on the shelf.*"
      },
      {
        title: "Countable and uncountable",
        head: ["Countable (a / an / -s)", "Uncountable (no -s)"],
        rows: [
          ["a brush → two brushes", "paint → some paint"],
          ["a canvas → three canvases", "clay → some clay"],
          ["an eraser → erasers", "glue → some glue"]
        ],
        note: "*There's some paint* (not *There are some paints* for the material)."
      }
    ],
    watchOut: [
      ["There is ten easels.", "There are ten easels."],
      ["Have a sink in the studio.", "There's a sink in the studio."],
      ["Are there some aprons?", "Are there any aprons?"],
      ["The brushes are on the jar.", "The brushes are in the jar."],
      ["There are some clays.", "There's some clay."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the sentences.",
      items: [
        "There [[are]] five canvases on the shelf.",
        "[[Is]] there a sink in the studio?",
        "There aren't [[any]] scissors on the table.",
        "The brushes are [[in]] the green jar."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Ms. Vega, the studio teacher, tells the students where the materials are for today's class. Listen and find the places.",
      title: "Today's materials",
      script: [
        { who: "Ms. Vega", line: "Good morning, everyone. Today we're painting with acrylics. Please listen." },
        { who: "Ms. Vega", line: "There are clean canvases on the shelf next to the window. Take one each." },
        { who: "Ms. Vega", line: "The acrylic paint is in the big box under the table." },
        { who: "Joel", line: "Excuse me, are there any palettes?" },
        { who: "Ms. Vega", line: "Yes, there are. They're in the cupboard behind my desk." },
        { who: "Ms. Vega", line: "There are some brushes in the jars, but there aren't any big brushes today, sorry." },
        { who: "Mariana", line: "Is there any water for the brushes?" },
        { who: "Ms. Vega", line: "Yes. There's a sink between the door and the cupboard. And please, put on your aprons!" }
      ],
      activities: [
        {
          type: "match", title: "Where is it?",
          prompt: "Match each material with its place.",
          pairs: [
            ["the canvases", "on the shelf next to the window"],
            ["the acrylic paint", "in the box under the table"],
            ["the palettes", "in the cupboard behind the desk"],
            ["the brushes", "in the jars"],
            ["the sink", "between the door and the cupboard"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "The students are painting with watercolors today.", a: false },
            { s: "There are some palettes in the cupboard.", a: true },
            { s: "There are big brushes today.", a: false },
            { s: "There's a sink in the studio.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the descriptions of three artists' studios from an art magazine.",
      title: "Where artists work",
      text: [
        { author: "Studio 1 · The painter", body: "My studio is small, but there's a big window. There are three easels and there's a long table with my paint and brushes. There isn't a sink, so I wash my brushes in the kitchen." },
        { author: "Studio 2 · The sculptor", body: "My studio is a garage. There's a lot of clay and there are some sculptures on the floor. There's a big sink next to the door. There aren't any chairs: I work standing up!" },
        { author: "Studio 3 · The illustrator", body: "My studio is in my bedroom. There's a desk next to my bed. On the desk, there's a computer, a tablet and some pencils. There are sketchbooks under the bed!" }
      ],
      activities: [
        {
          type: "sort", title: "Which studio?",
          prompt: "Sort the sentences: which studio is it?",
          bins: ["Painter", "Sculptor", "Illustrator"],
          items: [
            { text: "There are three easels.", bin: 0 }, { text: "There isn't a sink.", bin: 0 },
            { text: "It's a garage.", bin: 1 }, { text: "There aren't any chairs.", bin: 1 },
            { text: "There's a tablet.", bin: 2 }, { text: "The sketchbooks are under the bed.", bin: 2 }
          ]
        },
        {
          type: "gap", title: "Complete the sentences",
          prompt: "Complete with one word from the texts.",
          bank: true,
          items: [
            "The painter washes the brushes in the [[kitchen]].",
            "The sculptor's sink is next to the [[door]].",
            "The sculptor works standing [[up]].",
            "The illustrator's desk is next to the [[bed]]."
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the structures first, then describe your workspace.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "There are some brushes in the jar." },
            { a: "Is there a sink in the studio?" },
            { a: "The easel is next to the window." },
            { a: "There isn't any clay today." },
            { a: "My sketchbook is under the table." }
          ]
        },
        {
          type: "rewrite", title: "Change the sentences",
          prompt: "Follow the instructions in brackets.",
          items: [
            { q: "There's a canvas on the easel. → (plural: three canvases)", a: ["There are three canvases on the easel."] },
            { q: "There are some aprons. → (negative)", a: ["There aren't any aprons.", "There are not any aprons."] },
            { q: "There's a computer in the studio. → (question)", a: ["Is there a computer in the studio?"] },
            { q: "There are some pencils on the desk. → (question)", a: ["Are there any pencils on the desk?"] },
            { q: "There's some paint. → (negative)", a: ["There isn't any paint.", "There is not any paint."] }
          ]
        },
        {
          type: "write", title: "My creative space",
          prompt: "Describe the place where you make art or study: your bedroom, a studio, a classroom or your dream studio. Say what there is, what there isn't and where things are.",
          minWords: 40, maxWords: 90,
          model: "My creative space is my bedroom. There's a desk next to the window. On the desk, there's a lamp and there are some pencils in a jar. There isn't an easel, but there's a big board on the wall. My sketchbooks are on a shelf above the bed. There aren't any plants, but there's a lot of light.",
          bank: ["My creative space is…", "There's a…", "There are some…", "There isn't a…", "There aren't any…", "next to", "between", "under", "on the wall"],
          checklist: [
            "I used *there is* and *there are*.",
            "I used at least **one** negative (*there isn't / there aren't*).",
            "I used at least **three** prepositions of place.",
            "I used *some* or *any* correctly."
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
            "There are ten easels in the studio.",
            "Is there a sink in the studio?",
            "The brushes are in the green jars.",
            "There aren't any scissors on the table.",
            "My sketchbook is under the bed.",
            "There's some paint on the shelf."
          ]
        },
        {
          type: "speak", title: "A tour of my space",
          prompt: "Record yourself for about one minute. Give a short tour of your creative space (you can show it with your camera). Say what there is and where things are.",
          language: ["This is my…", "Here there's…", "On the left / right, there are…", "My favorite thing is…", "There isn't a…, but…"],
          seconds: 75,
          checklist: ["name at least five objects?", "use *there is / there are*?", "use at least three prepositions?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name art materials and things in a studio.", review: "Explanation: the vocabulary cards" },
    { can: "I can use *there is / there are* in affirmative and negative sentences.", review: "Explanation: There is / there are" },
    { can: "I can ask *Is there…? Are there any…?*", review: "Writing activity 2; Speaking activity 1 (pronunciation)" },
    { can: "I can say where things are with *on, in, under, next to, between*.", review: "Explanation: Prepositions of place" },
    { can: "I can understand a simple description of a place.", review: "Listening and Reading activities" },
    { can: "I can describe my creative space.", review: "Writing activity 3; Speaking activity 2" }
  ]
};
