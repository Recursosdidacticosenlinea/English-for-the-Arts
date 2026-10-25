window.UNIT = {
  slug: "meet-the-crew",
  title: "Meet the Crew",
  level: "A1",
  minutes: 50,
  subject: "Cinematography",
  focus: ["verb to be: I'm, he's, they're", "film crew roles", "possessive adjectives: my, his, her, their", "introducing yourself and others"],
  speakers: { "Valeria": "f", "Iker": "m", "Paulina": "f", "Mr. Ruiz": "m" },

  presentation: {
    scene: "🎬🎥🎙️🧑‍🤝‍🧑",
    situation: "It's the first meeting of a short film project in the **Cinematography** program. The students are a new crew and they don't know each other yet.",
    warmup: {
      prompt: "Which jobs in a film crew do you know? Choose everything you know.",
      options: ["director", "producer", "actor", "actress", "camera operator", "editor", "sound engineer", "screenwriter", "make-up artist", "art director", "light technician", "composer"],
      response: "Great! In this unit you'll learn to introduce yourself and the people in your film crew."
    },
    dialogueTitle: "The first crew meeting",
    dialogue: [
      { who: "Valeria", line: "Hi, everyone! *I'm* Valeria. *I'm* the director of the film." },
      { who: "Iker", line: "Hello! *My* name *is* Iker. *I'm* the camera operator." },
      { who: "Valeria", line: "Nice to meet you, Iker. *Are* you from Puebla?" },
      { who: "Iker", line: "No, *I'm not*. *I'm* from Tlaxcala. And this *is* Paulina. *She's* our editor." },
      { who: "Paulina", line: "Hi! *I'm* also the sound engineer. *My* laptop *is* full of music!" },
      { who: "Valeria", line: "Perfect. And Mr. Ruiz *is* our teacher. *He's* the producer. *His* office *is* in building B." },
      { who: "Iker", line: "Great. *We're* a small crew, but *we're* a good team!" }
    ]
  },

  objectives: [
    "I can introduce myself and say my role in a film crew.",
    "I can use the verb *to be* in affirmative, negative and questions.",
    "I can use possessive adjectives: *my, your, his, her, our, their*.",
    "I can introduce other people and ask basic personal questions."
  ],

  explanation: {
    vocabTitle: "Film crew roles and things on set",
    vocab: [
      { word: "director", icon: "🎬" }, { word: "producer", icon: "💼" }, { word: "screenwriter", icon: "✍️" },
      { word: "camera operator", icon: "🎥" }, { word: "editor", icon: "💻" }, { word: "sound engineer", icon: "🎧" },
      { word: "actor / actress", icon: "🎭" }, { word: "make-up artist", icon: "💄" }, { word: "light technician", icon: "💡" },
      { word: "art director", icon: "🎨" }, { word: "composer", icon: "🎼" }, { word: "script", icon: "📄" },
      { word: "set", icon: "🏗️" }, { word: "clapperboard", icon: "🎬" }, { word: "microphone", icon: "🎙️" }
    ],
    grammar: [
      {
        title: "Verb to be",
        head: ["", "Affirmative", "Negative", "Question"],
        rows: [
          ["I", "*I'm* the director.", "*I'm not* the editor.", "*Am I* late?"],
          ["you / we / they", "*They're* actors.", "*We aren't* producers.", "*Are you* the editor?"],
          ["he / she / it", "*She's* from Puebla.", "*He isn't* here.", "*Is it* your camera?"]
        ],
        note: "Short answers: *Yes, I am. / No, I'm not. Yes, she is. / No, she isn't.* Don't contract in short affirmative answers: *Yes, I am* (not *Yes, I'm*)."
      },
      {
        title: "Possessive adjectives",
        head: ["Subject", "Possessive", "Example"],
        rows: [
          ["I", "my", "*My* name is Iker."], ["you", "your", "Is this *your* script?"],
          ["he", "his", "*His* camera is new."], ["she", "her", "*Her* laptop is on the table."],
          ["it", "its", "The film is great. *Its* music is beautiful."], ["we", "our", "*Our* crew is small."], ["they", "their", "*Their* film is a comedy."]
        ],
        note: "A possessive adjective goes **before** a noun: *her editor* (not *the editor of she*)."
      },
      {
        title: "Introductions",
        head: ["Say…", "Answer…"],
        rows: [
          ["Hi, I'm Valeria.", "Nice to meet you."],
          ["This is Paulina. She's our editor.", "Hi, Paulina!"],
          ["What's your role?", "I'm the camera operator."],
          ["Where are you from?", "I'm from Tlaxcala."]
        ],
        note: "Use *a / an* with jobs: *She's an editor. He's a producer.*"
      }
    ],
    watchOut: [
      ["I am director.", "I'm the director. / I'm a director."],
      ["She is editor of the film.", "She's the editor of the film."],
      ["He name is Iker.", "His name is Iker."],
      ["Are you from Puebla? Yes, I'm.", "Yes, I am."],
      ["They is actors.", "They're actors."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the verb *to be* or a possessive adjective.",
      items: [
        "Iker [[is]] the camera operator.",
        "Paulina is an editor. [[Her]] laptop is new.",
        "We [[are]] a small crew.",
        "Mr. Ruiz is a producer. [[His]] office is in building B."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Valeria calls the crew list for the first day of shooting. Listen and find each person's role.",
      title: "Call sheet",
      script: [
        { who: "Valeria", line: "OK, everyone, this is the call sheet for Saturday. Please listen." },
        { who: "Valeria", line: "Iker, you're the camera operator. Your call time is seven o'clock." },
        { who: "Valeria", line: "Paulina is the sound engineer. Her microphones are in the blue box." },
        { who: "Valeria", line: "Diego and Camila are our actors. They're students from the theater program." },
        { who: "Iker", line: "Who is the make-up artist?" },
        { who: "Valeria", line: "Renata. She isn't in this meeting, but she's on the list." },
        { who: "Valeria", line: "Tomás is the light technician. His lights are in the classroom." },
        { who: "Iker", line: "And you? Are you only the director?" },
        { who: "Valeria", line: "No, I'm not. I'm also the screenwriter. The script is my story!" }
      ],
      activities: [
        {
          type: "match", title: "Who does what?",
          prompt: "Match each person with their role.",
          pairs: [
            ["Iker", "camera operator"],
            ["Paulina", "sound engineer"],
            ["Diego and Camila", "actors"],
            ["Renata", "make-up artist"],
            ["Tomás", "light technician"],
            ["Valeria", "director and screenwriter"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "Iker's call time is seven o'clock.", a: true },
            { s: "The microphones are in the red box.", a: false },
            { s: "The actors are students from the theater program.", a: true },
            { s: "Renata is in the meeting.", a: false },
            { s: "Valeria is the screenwriter too.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the crew profiles from the website of a student film festival.",
      title: "Meet the team of *Rain in Cholula*",
      text: [
        { author: "Valeria Gómez · Director", body: "Hi! I'm 21 and I'm from Puebla. I'm a Cinematography student. My favorite director is Alfonso Cuarón. This is my first short film." },
        { author: "Iker Sánchez · Camera operator", body: "I'm from Tlaxcala. I'm 23. My camera is old, but it's my best friend! My favorite films are black-and-white films." },
        { author: "Paulina Ortiz · Editor and sound", body: "Hello! I'm 20. I'm not a cinema student: I'm a Digital Art student. My passion is music and sound design." },
        { author: "Diego and Camila · Actors", body: "We're theater students. Diego is 22 and Camila is 19. Their characters in the film are a brother and sister." }
      ],
      activities: [
        {
          type: "sort", title: "Who is it?",
          prompt: "Sort the information: is it about Valeria, Iker or Paulina?",
          bins: ["Valeria", "Iker", "Paulina"],
          items: [
            { text: "21 years old", bin: 0 }, { text: "first short film", bin: 0 },
            { text: "from Tlaxcala", bin: 1 }, { text: "an old camera", bin: 1 },
            { text: "a Digital Art student", bin: 2 }, { text: "loves sound design", bin: 2 }
          ]
        },
        {
          type: "gap", title: "Complete the summary",
          prompt: "Complete with information from the profiles.",
          bank: true,
          items: [
            "Valeria's favorite director is [[Cuarón|Alfonso Cuarón]].",
            "Iker's favorite films are [[black-and-white]] films.",
            "Paulina isn't a [[cinema]] student.",
            "Diego and Camila are [[theater]] students.",
            "Their characters are a brother and [[sister]]."
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the sentences first, then write your crew profile.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "I'm the director of the film." },
            { a: "Her laptop is on the table." },
            { a: "Are you from Puebla?" },
            { a: "They aren't cinema students." },
            { a: "This is our camera operator." }
          ]
        },
        {
          type: "rewrite", title: "Change the sentences",
          prompt: "Follow the instructions in brackets.",
          items: [
            { q: "She is the editor. → (negative)", a: ["She isn't the editor.", "She's not the editor.", "She is not the editor."] },
            { q: "You are the producer. → (question)", a: ["Are you the producer?"] },
            { q: "The camera of Iker is old. → Use *his*.", a: ["His camera is old."] },
            { q: "The film of Diego and Camila is a drama. → Use *their*.", a: ["Their film is a drama."] },
            { q: "We are from Tlaxcala. → (negative)", a: ["We aren't from Tlaxcala.", "We're not from Tlaxcala.", "We are not from Tlaxcala."] }
          ]
        },
        {
          type: "write", title: "My crew profile",
          prompt: "Write your profile for a student film festival website. Say your name, age, where you're from, your role in the crew and your favorite film or director. Then introduce one more person in your crew.",
          minWords: 40, maxWords: 90,
          model: "Hi! I'm Sara. I'm 20 and I'm from Atlixco. I'm a Cinematography student and I'm the art director of our short film. My favorite director is Guillermo del Toro. This is my friend Leo. He's our sound engineer. His headphones are always on!",
          bank: ["Hi! I'm…", "I'm … years old.", "I'm from…", "I'm the … of our film.", "My favorite director is…", "This is…", "He's / She's our…"],
          checklist: [
            "I used *I'm* at least **three** times.",
            "I said my **role** in the crew.",
            "I introduced **one more person** with *This is…*",
            "I used a possessive adjective (*my, his, her…*)."
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
            "Hi, I'm the director of the film.",
            "Nice to meet you.",
            "She's our editor.",
            "Where are you from?",
            "His camera is very old.",
            "We're a small crew, but a good team."
          ]
        },
        {
          type: "speak", title: "My dream crew",
          prompt: "Record yourself for about one minute. Present your dream film crew: famous people or friends. Say their names, roles and one fact about each person.",
          language: ["My dream crew is…", "The director is…", "He's / She's from…", "His / Her films are…", "Our composer is…"],
          seconds: 75,
          checklist: ["present at least four people?", "use *he's, she's, they're*?", "use *his, her, their*?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name the main roles in a film crew.", review: "Explanation: the vocabulary cards" },
    { can: "I can introduce myself and say my role.", review: "Presentation: the dialogue; Writing activity 3" },
    { can: "I can use *to be* in affirmative, negative and questions.", review: "Explanation: Verb to be" },
    { can: "I can use *my, your, his, her, our, their*.", review: "Explanation: Possessive adjectives" },
    { can: "I can understand simple information about people in a crew.", review: "Listening and Reading activities" },
    { can: "I can introduce other people in a short conversation.", review: "Speaking activity 2" }
  ]
};
