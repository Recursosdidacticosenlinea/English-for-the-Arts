window.UNIT = {
  slug: "storyboard",
  title: "Storyboard",
  level: "A2",
  minutes: 55,
  subject: "Cinematography",
  focus: ["present continuous for describing scenes", "shot types: close-up, wide shot, over-the-shoulder…", "camera movements: pan, tilt, zoom", "sequencers: first, then, after that, finally"],
  speakers: { "Daniela": "f", "Rodrigo": "m", "Mónica": "f" },

  presentation: {
    scene: "🎞️✏️🎥📐",
    situation: "Daniela and Rodrigo are **Cinematography** students. They're planning the opening scene of their short film with a storyboard.",
    warmup: {
      prompt: "Which film words do you know? Choose everything you know.",
      options: ["shot", "scene", "close-up", "wide shot", "angle", "frame", "zoom", "pan", "cut", "sequence", "storyboard", "location"],
      response: "Great! In this unit you'll learn to describe scenes and plan shots in English."
    },
    dialogueTitle: "Planning the first scene",
    dialogue: [
      { who: "Daniela", line: "OK, panel one. It's a *wide shot* of a market. It's early morning and people *are setting up* their stalls." },
      { who: "Rodrigo", line: "Nice. And where's our main character?" },
      { who: "Daniela", line: "She's in the middle of the frame. She*'s walking* towards the camera. She*'s carrying* a big box." },
      { who: "Rodrigo", line: "*Then* we cut to a *close-up* of her face?" },
      { who: "Daniela", line: "Yes. She*'s looking* at something off-screen. She*'s smiling*." },
      { who: "Rodrigo", line: "*After that*, I think we *pan* to the right to show what she*'s looking* at." },
      { who: "Daniela", line: "Perfect. It's an old man. He*'s playing* the violin. *Finally*, a *wide shot* again with both of them." }
    ]
  },

  objectives: [
    "I can name basic shot types and camera movements.",
    "I can describe what's happening in a scene with the present continuous.",
    "I can order the shots of a scene with sequencers.",
    "I can explain a short storyboard to my crew."
  ],

  explanation: {
    vocabTitle: "Shots and camera movements",
    vocab: [
      { word: "wide shot", icon: "🏞️" }, { word: "medium shot", icon: "🧍" }, { word: "close-up", icon: "👁️" },
      { word: "extreme close-up", icon: "🔍" }, { word: "over-the-shoulder", icon: "👥" }, { word: "point of view (POV)", icon: "👀" },
      { word: "high angle", icon: "⬇️" }, { word: "low angle", icon: "⬆️" }, { word: "pan", icon: "↔️" },
      { word: "tilt", icon: "↕️" }, { word: "zoom in / out", icon: "🔎" }, { word: "tracking shot", icon: "🛤️" },
      { word: "cut", icon: "✂️" }, { word: "frame", icon: "🔲" }, { word: "off-screen", icon: "🚪" }
    ],
    grammar: [
      {
        title: "Present continuous",
        head: ["", "Form", "Example"],
        rows: [
          ["Affirmative", "*am / is / are* + verb*-ing*", "She*'s walking* towards the camera."],
          ["Negative", "*isn't / aren't* + verb*-ing*", "They *aren't talking*."],
          ["Question", "*Is / Are* + subject + verb*-ing*?", "*Is* he *playing* the violin?"]
        ],
        note: "We use the present continuous to describe **what is happening in an image or a scene**: *In this shot, a man is running.* Spelling: *run → running, smile → smiling, sit → sitting*."
      },
      {
        title: "Describing a frame",
        head: ["Position", "Example"],
        rows: [
          ["in the foreground", "*In the foreground*, a cat is sleeping."],
          ["in the background", "*In the background*, people are dancing."],
          ["in the middle / center", "She's *in the center* of the frame."],
          ["on the left / right", "*On the left*, a car is arriving."]
        ],
        note: "*Foreground* = close to the camera; *background* = far from the camera."
      },
      {
        title: "Sequencers",
        head: ["Order", "Sequencer"],
        rows: [
          ["1", "*First,* we see the market."],
          ["2", "*Then,* we cut to a close-up."],
          ["3", "*After that,* the camera pans to the right."],
          ["4", "*Finally,* we see a wide shot."]
        ],
        note: "Put a comma after the sequencer at the start of the sentence: *Then, the camera zooms in.*"
      }
    ],
    watchOut: [
      ["She walking to the camera.", "She's walking to the camera."],
      ["He is siting on a chair.", "He's sitting on a chair."],
      ["Are they talk?", "Are they talking?"],
      ["In the back, there is…", "In the background, there is…"],
      ["The camera do a zoom.", "The camera zooms in."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the present continuous or a film word.",
      items: [
        "In this shot, the girl [[is running|'s running]]. (run)",
        "Two old men [[are playing]] chess in the background. (play)",
        "A [[close-up]] shows only the character's face.",
        "[[Then|After that]], we cut to a wide shot."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Mónica, the director of photography, explains a storyboard to the crew. Listen and identify each shot.",
      title: "The rooftop scene",
      script: [
        { who: "Mónica", line: "OK, team, this is the rooftop scene. There are five shots." },
        { who: "Mónica", line: "First, a wide shot of the city at night. The lights are shining and it's raining a little." },
        { who: "Mónica", line: "Then, a medium shot of Leo. He's standing next to the door. He's holding an umbrella." },
        { who: "Mónica", line: "After that, a point-of-view shot. We're looking through Leo's eyes. A woman is sitting on the edge of the roof." },
        { who: "Rodrigo", line: "Is she crying?" },
        { who: "Mónica", line: "No, she isn't. She's writing in a notebook. In shot four, the camera slowly zooms in on the notebook: it's an extreme close-up." },
        { who: "Mónica", line: "Finally, a low-angle shot of both characters. Leo is giving her the umbrella. Cut to black." }
      ],
      activities: [
        {
          type: "match", title: "Which shot?",
          prompt: "Match each shot number with its shot type.",
          pairs: [
            ["Shot 1: the city at night", "wide shot"],
            ["Shot 2: Leo with an umbrella", "medium shot"],
            ["Shot 3: through Leo's eyes", "point of view"],
            ["Shot 4: the notebook", "extreme close-up"],
            ["Shot 5: both characters", "low angle"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "It's raining a little.", a: true },
            { s: "Leo is sitting next to the door.", a: false },
            { s: "The woman is crying.", a: false },
            { s: "The woman is writing in a notebook.", a: true },
            { s: "Leo is giving her an umbrella.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a short guide from a filmmaking blog about the meaning of shots.",
      title: "What does your shot say?",
      text: [
        { author: "Wide shot", body: "A wide shot shows the location and where the characters are. Use it at the start of a scene to give context: we're seeing a city, a desert, a classroom." },
        { author: "Close-up", body: "A close-up shows emotion. When a character is crying or laughing, a close-up makes the audience feel it too." },
        { author: "High and low angles", body: "In a high-angle shot, the camera is looking down at the character: he or she looks small and weak. In a low-angle shot, the camera is looking up: the character looks strong or dangerous." },
        { author: "Over-the-shoulder", body: "This shot is very common in conversations. We see one character's shoulder in the foreground and the other character's face in the background." }
      ],
      activities: [
        {
          type: "match", title: "Shot and purpose",
          prompt: "Match the shot with what it does.",
          pairs: [
            ["wide shot", "shows the location"],
            ["close-up", "shows emotion"],
            ["high angle", "makes a character look weak"],
            ["low angle", "makes a character look strong"],
            ["over-the-shoulder", "is common in conversations"]
          ]
        },
        {
          type: "gap", title: "Choose the best shot",
          prompt: "Complete with the best shot type from the text.",
          bank: ["wide shot", "close-up", "low-angle", "over-the-shoulder"],
          items: [
            "We want to show a big, empty desert: a [[wide shot]].",
            "The villain is arriving and he's dangerous: a [[low-angle]] shot.",
            "Two friends are talking in a café: an [[over-the-shoulder]] shot.",
            "A tear is falling on her face: a [[close-up]]."
          ]
        }
      ]
    },

    writing: {
      intro: "Practice describing scenes first, then write your own storyboard notes.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "The camera is zooming in slowly." },
            { a: "A woman is sitting in the background." },
            { a: "Then, we cut to a close-up." },
            { a: "Are the actors looking at the camera?" },
            { a: "Finally, the camera pans to the left." }
          ]
        },
        {
          type: "rewrite", title: "Describe the action",
          prompt: "Write a sentence in the present continuous.",
          items: [
            { q: "the dog / run / in the park", a: ["The dog is running in the park.", "The dog's running in the park."] },
            { q: "two girls / sit / on a bench", a: ["Two girls are sitting on a bench."] },
            { q: "the man / not / smile", a: ["The man isn't smiling.", "The man is not smiling.", "The man's not smiling."] },
            { q: "the actors / wait / for the director?", a: ["Are the actors waiting for the director?"] },
            { q: "it / rain / in the background", a: ["It's raining in the background.", "It is raining in the background."] }
          ]
        },
        {
          type: "write", title: "My storyboard notes",
          prompt: "Plan a short scene of 4 or 5 shots (a chase, a meeting, a surprise…). For each shot, write the shot type and describe what is happening. Use sequencers.",
          minWords: 60, maxWords: 120,
          model: "Shot 1: First, a wide shot of a train station. People are running and a train is arriving. Shot 2: Then, a medium shot of a boy. He's holding a red balloon and he's looking for someone. Shot 3: After that, a POV shot: a girl is waving in the crowd. Shot 4: Close-up of the boy. He's smiling. Shot 5: Finally, a high-angle shot. The two kids are hugging and the balloon is flying away.",
          bank: ["Shot 1:", "First,", "Then,", "After that,", "Finally,", "a wide shot of", "a close-up of", "in the background", "the camera pans / zooms in"],
          checklist: [
            "I planned **4 or 5** shots.",
            "I named a **shot type** for each shot.",
            "I used the **present continuous** to describe actions.",
            "I used **sequencers** (*first, then, after that, finally*)."
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
            "It's a wide shot of the market.",
            "She's walking towards the camera.",
            "Then we cut to a close-up.",
            "The camera pans to the right.",
            "In the background, people are dancing.",
            "Is he looking at the camera?"
          ]
        },
        {
          type: "speak", title: "Pitch my scene",
          prompt: "Record yourself for about one minute. Explain your storyboard from Writing activity 3 to your crew, shot by shot.",
          language: ["In the first shot,…", "Then, we cut to…", "The camera pans / tilts / zooms in…", "Finally,…"],
          seconds: 75,
          checklist: ["explain at least four shots?", "use shot types and camera movements?", "use sequencers?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name basic shot types.", review: "Explanation: the vocabulary cards; Reading" },
    { can: "I can name camera movements: pan, tilt, zoom.", review: "Explanation: the vocabulary cards" },
    { can: "I can use the present continuous to describe a scene.", review: "Explanation: Present continuous; Writing activity 2" },
    { can: "I can describe a frame with *foreground, background, on the left…*", review: "Explanation: Describing a frame" },
    { can: "I can order shots with *first, then, after that, finally*.", review: "Explanation: Sequencers" },
    { can: "I can explain a storyboard to my crew.", review: "Writing activity 3; Speaking activity 2" }
  ]
};
