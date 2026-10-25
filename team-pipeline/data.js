window.UNIT = {
  slug: "team-pipeline",
  title: "Team Pipeline",
  level: "B1",
  minutes: 60,
  subject: "Digital Art · Animation and Game Production",
  focus: ["must, have to, don't have to, mustn't", "should / shouldn't for advice", "the animation and game production pipeline", "professional messages to a team"],
  speakers: { "Lupita": "f", "Diego": "m", "Majo": "f", "Kenji": "m" },

  presentation: {
    scene: "🧩🗂️⏱️👩‍💻",
    situation: "Lupita is a **Digital Art** student and the coordinator of a team that is making a 2-minute animated short for a festival. Today is the first production meeting.",
    warmup: {
      prompt: "What are the stages of an animation project? Choose everything you know.",
      options: ["script", "concept art", "storyboard", "animatic", "modeling", "rigging", "animation", "lighting", "rendering", "compositing", "sound design", "deadline"],
      response: "Great! In this unit you'll learn to coordinate a team and explain rules and responsibilities."
    },
    dialogueTitle: "The first production meeting",
    dialogue: [
      { who: "Lupita", line: "OK, team. The festival deadline is March 30th, so we *have to* finish the animation by March 15th." },
      { who: "Diego", line: "Do we *have to* use Blender, or can I use Maya for the rigging?" },
      { who: "Lupita", line: "You *don't have to* use Blender for the rigging, but the final files *must* be in Blender format." },
      { who: "Majo", line: "Where do we save our files?" },
      { who: "Lupita", line: "In the shared drive. And please, you *mustn't* delete other people's files. Name them like this: shot number, your name, version." },
      { who: "Diego", line: "We *should* have a weekly meeting, too, to check our progress." },
      { who: "Lupita", line: "Good idea. And you *should* upload your work every Friday, even if it isn't finished." }
    ]
  },

  objectives: [
    "I can name the stages of an animation or game production pipeline.",
    "I can explain obligations and rules with *must* and *have to*.",
    "I can explain what is not necessary and what is prohibited: *don't have to / mustn't*.",
    "I can give advice and write clear messages to a production team."
  ],

  explanation: {
    vocabTitle: "The production pipeline",
    vocab: [
      { word: "concept art", icon: "🖌️" }, { word: "storyboard", icon: "🗒️" }, { word: "animatic", icon: "🎞️" },
      { word: "modeling", icon: "🧊" }, { word: "rigging", icon: "🦴" }, { word: "animation", icon: "🏃" },
      { word: "lighting", icon: "💡" }, { word: "rendering", icon: "🖥️" }, { word: "compositing", icon: "🧩" },
      { word: "sound design", icon: "🔊" }, { word: "deadline", icon: "⏰" }, { word: "feedback", icon: "💬" },
      { word: "shared drive", icon: "🗂️" }, { word: "version", icon: "🔢" }, { word: "milestone", icon: "🚩" }
    ],
    grammar: [
      {
        title: "Obligation: must / have to",
        head: ["", "Use", "Example"],
        rows: [
          ["*must*", "rules, strong personal obligation", "Files *must* be in Blender format."],
          ["*have to*", "external obligation, deadlines", "We *have to* finish by March 15th."],
          ["Question", "use *have to*", "*Do* we *have to* use Blender?"],
          ["Past", "*had to*", "Last year we *had to* work every weekend."]
        ],
        note: "*Must* has no past or question form in normal use: say *Did you have to…?* and *had to*."
      },
      {
        title: "Don't have to vs. mustn't",
        head: ["Form", "Meaning", "Example"],
        rows: [
          ["*don't / doesn't have to*", "it isn't necessary (you can choose)", "You *don't have to* use Blender for rigging."],
          ["*mustn't*", "it's prohibited (don't do it!)", "You *mustn't* delete other people's files."]
        ],
        note: "Be careful! In Spanish *no tienes que* can mean both. In English they're very different."
      },
      {
        title: "Advice: should / shouldn't",
        head: ["Form", "Example"],
        rows: [
          ["*should* + verb", "You *should* upload your work every Friday."],
          ["*shouldn't* + verb", "You *shouldn't* wait until the last week."],
          ["*Should* I…?", "*Should* I render in 4K or HD?"]
        ],
        note: "*Should* is softer than *must*: it's a recommendation, not a rule."
      }
    ],
    watchOut: [
      ["You don't have to delete files. (= prohibited)", "You mustn't delete files."],
      ["We must to finish today.", "We must finish today."],
      ["Must we use Blender?", "Do we have to use Blender?"],
      ["Yesterday I must work late.", "Yesterday I had to work late."],
      ["She have to render tonight.", "She has to render tonight."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *must, mustn't, have to, don't have to* or *should*.",
      items: [
        "The deadline is tomorrow. We [[have to|must]] finish tonight.",
        "It's optional. You [[don't have to]] come to the extra meeting.",
        "Those are the final files. You [[mustn't|must not]] delete them!",
        "I think you [[should]] ask Kenji for feedback. He's very good."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Kenji, a professional animator, visits the class and talks about working in an animation studio. Listen and complete the information.",
      title: "A day in a real studio",
      script: [
        { who: "Kenji", line: "In a studio, everyone is part of a pipeline. If one person is late, the next department has to wait. So deadlines are very serious." },
        { who: "Kenji", line: "Every morning we have a short meeting called *dailies*. You have to show your work, even if it isn't finished. You mustn't hide problems." },
        { who: "Majo", line: "Do animators have to know how to draw?" },
        { who: "Kenji", line: "For 3D animation, you don't have to be an amazing illustrator, but you should study acting and observe how people move." },
        { who: "Kenji", line: "Another important rule: you must follow the naming conventions for files. In my first job, I had to rename three hundred files because I didn't follow them!" },
        { who: "Diego", line: "What advice do you have for students?" },
        { who: "Kenji", line: "You should finish small projects. A short, finished film is better than a long, unfinished one. And you shouldn't be afraid of feedback." }
      ],
      activities: [
        {
          type: "sort", title: "Rule, not necessary or advice?",
          prompt: "Sort the ideas from Kenji's talk.",
          bins: ["Must / have to", "Don't have to", "Should"],
          items: [
            { text: "show your work in the dailies", bin: 0 }, { text: "follow the naming conventions", bin: 0 },
            { text: "be an amazing illustrator", bin: 1 },
            { text: "study acting", bin: 2 }, { text: "finish small projects", bin: 2 }, { text: "accept feedback", bin: 2 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "If one person is late, the next department has to wait.", a: true },
            { s: "In the dailies, you only show finished work.", a: false },
            { s: "Kenji had to rename 300 files in his first job.", a: true },
            { s: "Kenji thinks a long unfinished film is better than a short finished one.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the production guidelines of a student game jam.",
      title: "Game Jam 48h · Team rules",
      text: [
        { author: "Teams", body: "Teams must have between three and five members. At least one member has to be a programmer and one has to be an artist. You don't have to be students from the same program." },
        { author: "Content", body: "All art and music must be created during the 48 hours. You mustn't use assets you made before the jam. You can use free fonts, but you have to credit them." },
        { author: "Tools", body: "You don't have to use a specific engine: Unity, Godot, Unreal or any other tool is fine. The final game must run on Windows or in a web browser." },
        { author: "Advice from the organizers", body: "You should keep your idea simple. You shouldn't spend more than three hours on concept art. And you should sleep at least a few hours — tired teams make more mistakes!" }
      ],
      activities: [
        {
          type: "sort", title: "Allowed or not allowed?",
          prompt: "According to the rules, is it allowed?",
          bins: ["Allowed ✅", "Not allowed ❌"],
          items: [
            { text: "a team of four people", bin: 0 }, { text: "members from different programs", bin: 0 },
            { text: "using Godot", bin: 0 }, { text: "using free fonts with credits", bin: 0 },
            { text: "a team with no programmer", bin: 1 }, { text: "using music you made last year", bin: 1 },
            { text: "a game that only runs on a PlayStation", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Rewrite the rules",
          prompt: "Rewrite each sentence with the modal in brackets. Keep the meaning.",
          items: [
            { q: "It isn't necessary to use Unity. (don't have to)", a: ["You don't have to use Unity.", "You do not have to use Unity."] },
            { q: "It's prohibited to use old assets. (mustn't)", a: ["You mustn't use old assets.", "You must not use old assets."] },
            { q: "It's a good idea to keep your idea simple. (should)", a: ["You should keep your idea simple."] },
            { q: "It's necessary to credit the fonts. (have to)", a: ["You have to credit the fonts."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the modals first, then write a message to your team.",
      activities: [
        {
          type: "gap", title: "Choose the right modal",
          prompt: "Complete with *must, mustn't, has to, don't have to, should* or *had to*.",
          bank: ["mustn't", "don't have to", "has to", "should", "had to", "must"],
          items: [
            "Majo is the only rigger, so she [[has to]] finish before the animators start.",
            "The render farm is free on weekends, so you [[don't have to]] pay.",
            "You [[mustn't]] share the project online before the festival. It's confidential.",
            "Last semester we [[had to]] repeat all the lighting.",
            "Your animation looks stiff. You [[should]] watch some reference videos.",
            "All files [[must]] follow the naming convention."
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Do we have to work on Saturday?" },
            { a: "You shouldn't wait until the last week." },
            { a: "Everyone must upload their files by Friday." },
            { a: "She doesn't have to come to the meeting." }
          ]
        },
        {
          type: "write", title: "Message to the team",
          prompt: "You're the coordinator of an animation or game project. Write a message (100–150 words) to your team for the shared chat or email. Explain the next deadline, three rules (*must / have to / mustn't*), one thing that is optional (*don't have to*) and two pieces of advice (*should*).",
          minWords: 100, maxWords: 150,
          model: "Hi team! Quick update about our short film. The animatic is ready, so now we have to start the animation. Our next deadline is Friday, April 4th: by then, every animator must upload at least two finished shots to the shared drive. Remember that files must follow the naming convention (shot_name_version), and you mustn't edit other people's files without asking. You don't have to come to the lab every day; you can work from home if your computer is OK. Some advice: you should record yourself acting the scene before you animate it, and you shouldn't leave the lip-sync for the end. If you have problems, you should tell me as soon as possible. Thanks, and keep up the great work! Lupita",
          bank: ["Hi team!", "Our next deadline is…", "We have to…", "Everyone must…", "You mustn't…", "You don't have to…", "You should…", "If you have problems,…", "Thanks!"],
          checklist: [
            "I included a **deadline**.",
            "I used *must / have to* for rules and *mustn't* for something prohibited.",
            "I used *don't have to* for something optional.",
            "I gave **two** pieces of advice with *should*."
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
            "We have to finish the animation by Friday.",
            "You don't have to come to the lab every day.",
            "You mustn't delete other people's files.",
            "You should upload your work every week.",
            "Do we have to use the same software?",
            "Last year we had to work every weekend."
          ]
        },
        {
          type: "speak", title: "Tips for new animators",
          prompt: "Record a 90-second video for first-semester students: explain the pipeline of an animation or game in a few steps and give your best advice.",
          language: ["First, you have to…", "Then, the team has to…", "You don't have to…", "You should… / You shouldn't…", "My best advice is…"],
          seconds: 90,
          checklist: ["explain at least four stages of the pipeline?", "use different modals?", "give clear advice?", "speak for about 90 seconds?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name the stages of a production pipeline.", review: "Explanation: the vocabulary cards" },
    { can: "I can use *must* and *have to* for rules and obligations.", review: "Explanation: Obligation" },
    { can: "I can explain the difference between *mustn't* and *don't have to*.", review: "Explanation: Don't have to vs. mustn't" },
    { can: "I can give advice with *should / shouldn't*.", review: "Explanation: Advice; Listening activity 1" },
    { can: "I can understand rules and guidelines for a project.", review: "Reading activities" },
    { can: "I can write a clear message to my production team.", review: "Writing activity 3" }
  ]
};
