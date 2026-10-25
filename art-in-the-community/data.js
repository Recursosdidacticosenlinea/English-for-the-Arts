window.UNIT = {
  slug: "art-in-the-community",
  title: "Art in the Community",
  level: "B1",
  minutes: 60,
  subject: "Cultural Management",
  focus: ["passive voice: present and past (is made / was painted)", "by + agent", "cultural management vocabulary", "describing a community art project"],
  speakers: { "Carla": "f", "Andrés": "m", "Brisa": "f", "Interviewer": "f" },

  presentation: {
    scene: "🧱🎨🏘️🤝",
    situation: "Carla and Andrés are presenting a **cultural management** project: a community mural in a neighborhood of Puebla. They're showing photos to their class.",
    warmup: {
      prompt: "What is part of a community art project? Choose everything you know.",
      options: ["a mural", "a workshop", "neighbors", "volunteers", "funding", "a permit", "a festival", "a sponsor", "a cultural center", "a public space", "social media", "an inauguration"],
      response: "Very good! In this unit you'll learn to describe how art projects are organized and created."
    },
    dialogueTitle: "Our mural project",
    dialogue: [
      { who: "Carla", line: "This is the wall before the project. It *was covered* with graffiti and old posters." },
      { who: "Andrés", line: "First, the neighbors *were invited* to three workshops. The design *was created* with their ideas." },
      { who: "Carla", line: "The paint *was donated* by a local hardware store, and the permit *was given* by the city council." },
      { who: "Andrés", line: "The mural *was painted* in two weekends *by* twenty volunteers: students, children and grandparents." },
      { who: "Carla", line: "Now the wall *is cleaned* every month by the neighbors themselves." },
      { who: "Andrés", line: "And it *is visited* by tourists, too! It's in a lot of photos on social media." }
    ]
  },

  objectives: [
    "I can name the people, steps and resources in a community art project.",
    "I can use the passive voice in the present and the past.",
    "I can decide when to use *by* + agent.",
    "I can describe the process of a cultural project in a report or presentation."
  ],

  explanation: {
    vocabTitle: "Cultural management",
    vocab: [
      { word: "cultural manager", icon: "🧑‍💼" }, { word: "community", icon: "🏘️" }, { word: "neighbor", icon: "👵" },
      { word: "volunteer", icon: "🙋" }, { word: "workshop", icon: "🛠️" }, { word: "funding", icon: "💰" },
      { word: "sponsor", icon: "🤝" }, { word: "permit", icon: "📄" }, { word: "city council", icon: "🏛️" },
      { word: "public space", icon: "🌳" }, { word: "cultural center", icon: "🎭" }, { word: "audience", icon: "👥" },
      { word: "donate", icon: "🎁" }, { word: "promote", icon: "📣" }, { word: "inauguration", icon: "🎀" }
    ],
    grammar: [
      {
        title: "Passive voice",
        head: ["Tense", "Form", "Example"],
        rows: [
          ["Present simple", "*is / are* + past participle", "The wall *is cleaned* every month."],
          ["Past simple", "*was / were* + past participle", "The mural *was painted* in 2024."],
          ["Negative", "*isn't / wasn't* + past participle", "The project *wasn't funded* by the government."],
          ["Question", "*Is / Was* + subject + past participle?", "*When was* the mural *painted*?"]
        ],
        note: "Use the passive when the **action or the result** is more important than who does it, or when we don't know who does it: *The sculpture was stolen.*"
      },
      {
        title: "Active → passive",
        head: ["Active", "Passive"],
        rows: [
          ["Twenty volunteers *painted* the mural.", "The mural *was painted* by twenty volunteers."],
          ["A local store *donated* the paint.", "The paint *was donated* by a local store."],
          ["The neighbors *clean* the wall.", "The wall *is cleaned* by the neighbors."]
        ],
        note: "The **object** of the active sentence becomes the **subject** of the passive sentence."
      },
      {
        title: "By + agent",
        head: ["Use *by*", "Don't use *by*"],
        rows: [
          ["When the agent is important: *painted by Diego Rivera*", "When it's obvious: *The thief was arrested (by the police).*"],
          ["When it's new information: *donated by a hardware store*", "When it's unknown: *The mural was damaged last night.*"]
        ],
        note: "Common irregular participles: *made, built, given, written, taken, seen, chosen, drawn, held* (*The festival is held every year*)."
      }
    ],
    watchOut: [
      ["The mural painted in 2024.", "The mural was painted in 2024."],
      ["The paint was donate by a store.", "The paint was donated by a store."],
      ["The festival is hold every year.", "The festival is held every year."],
      ["Was painted the mural by children?", "Was the mural painted by children?"],
      ["It was painted for twenty volunteers.", "It was painted by twenty volunteers."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the passive form.",
      items: [
        "The mural [[was painted]] in two weekends. (paint, past)",
        "Workshops [[are given]] every Saturday. (give, present)",
        "The permit was [[given]] by the city council.",
        "The festival [[is held]] every November. (hold, present)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a radio interview with Brisa, the director of an independent cultural center.",
      title: "Interview: *La Casa Abierta*",
      script: [
        { who: "Interviewer", line: "Brisa, tell us about La Casa Abierta. How did it start?" },
        { who: "Brisa", line: "The building was built in 1890. For many years it was abandoned. In 2019, it was rented by a group of artists, and the cultural center was founded." },
        { who: "Interviewer", line: "How is it funded?" },
        { who: "Brisa", line: "We aren't funded by the government. Most of the money is raised through workshops and small concerts. Some equipment was donated by a university." },
        { who: "Interviewer", line: "What activities are offered?" },
        { who: "Brisa", line: "Painting, printmaking and film workshops are offered every week. A film festival is held every November, and the films are chosen by young people from the neighborhood." },
        { who: "Interviewer", line: "That's wonderful. What's next?" },
        { who: "Brisa", line: "A new recording studio is being built on the roof. It will be used by local musicians." }
      ],
      activities: [
        {
          type: "match", title: "Match the facts",
          prompt: "Match the beginning and the end.",
          pairs: [
            ["The building was built", "in 1890."],
            ["The cultural center was founded", "in 2019."],
            ["Most of the money is raised", "through workshops and concerts."],
            ["Some equipment was donated", "by a university."],
            ["The festival films are chosen", "by young people."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "The center is funded by the government.", a: false },
            { s: "Workshops are offered every week.", a: true },
            { s: "The film festival is held in May.", a: false },
            { s: "The new studio will be used by local musicians.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a short report about a famous community art project in Mexico.",
      title: "Palmitas: a neighborhood painted as one",
      text: [
        { author: "The project", body: "In 2015, around 200 houses in Las Palmitas, a hillside neighborhood in Pachuca, Hidalgo, were painted to form one giant, colorful mural. The project was organized by a youth art collective together with the neighbors." },
        { author: "The process", body: "The design was planned with the families who live there. About 20,000 square meters of façades were painted, and the paint was provided with the support of the local and federal government." },
        { author: "The impact", body: "The project was presented as a way to improve life in the neighborhood: people said they felt safer and more connected. Today the mural is photographed by visitors from all over Mexico." },
        { author: "The debate", body: "Not everyone agrees. Some critics ask if this kind of project is used to hide social problems with color. For cultural managers, the question is important: is the community really part of the decisions?" }
      ],
      activities: [
        {
          type: "gap", title: "Complete the facts",
          prompt: "Complete with information from the report.",
          bank: true,
          items: [
            "Around [[200]] houses were painted.",
            "The neighborhood is in [[Pachuca]], Hidalgo.",
            "The project was organized by a youth art [[collective]].",
            "The design was planned with the [[families]].",
            "Today the mural is photographed by [[visitors]]."
          ]
        },
        {
          type: "rewrite", title: "Active or passive?",
          prompt: "Rewrite the active sentences in the passive. Use *by* only if it's important.",
          items: [
            { q: "A youth collective organized the project.", a: ["The project was organized by a youth collective."] },
            { q: "Visitors photograph the mural every day.", a: ["The mural is photographed by visitors every day.", "The mural is photographed every day by visitors.", "The mural is photographed every day."] },
            { q: "They painted 20,000 square meters.", a: ["20,000 square meters were painted.", "Twenty thousand square meters were painted."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the passive first, then write a project report.",
      activities: [
        {
          type: "gap", title: "Present or past passive?",
          prompt: "Complete with the passive of the verb in brackets.",
          items: [
            "*Las Meninas* [[was painted]] by Velázquez in 1656. (paint)",
            "Today, it [[is kept|is exhibited]] in the Prado Museum in Madrid. (keep)",
            "Thousands of comics [[are sold]] every year at the Guadalajara Book Fair. (sell)",
            "The first Cervantino festival [[was held]] in 1972. (hold)",
            "The Palacio de Bellas Artes [[was built]] between 1904 and 1934. (build)"
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "The mural was painted by local children." },
            { a: "Workshops are given every Saturday." },
            { a: "When was the cultural center founded?" },
            { a: "The project wasn't funded by the government." }
          ]
        },
        {
          type: "write", title: "Project report",
          prompt: "Write a short report (110–160 words) about a cultural or community art project — real, from your city, or one you'd like to organize. Explain what was done, who it was organized by, how it was funded, how the community was involved and what the results are. Use at least five passive sentences.",
          minWords: 110, maxWords: 160,
          model: "*Cine en tu Calle* is a free outdoor cinema project in the Xanenetla neighborhood of Puebla. It was organized in 2025 by a group of Cinematography students. The project was funded through a small crowdfunding campaign, and the projector was lent by the School of Arts. Before the screenings, the neighbors were asked which films they wanted to watch, and the programs were chosen by them. Six films were shown on the walls of the houses, and the screenings were attended by more than 300 people. After each film, a short discussion was led by a student. The project was not planned as a one-time event: now a screening is organized every month, and the children of the neighborhood are trained to use the equipment. In my opinion, it's a great example of how art can bring a community together.",
          bank: ["… was organized by…", "It was funded through…", "The neighbors were invited to…", "… were chosen by…", "Now, … is held every…", "In my opinion,…"],
          checklist: [
            "I used at least **five** passive sentences.",
            "I used the **present** and the **past** passive.",
            "I used *by* + agent only when it was important.",
            "I explained how the **community** was involved."
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
            "The mural was painted by twenty volunteers.",
            "The paint was donated by a local store.",
            "Workshops are given every Saturday.",
            "The festival is held every November.",
            "When was the cultural center founded?",
            "The project wasn't funded by the government."
          ]
        },
        {
          type: "speak", title: "Presenting a local landmark",
          prompt: "Record a 90-second video about a mural, monument, building or artwork in your city. Explain when it was made, who it was made by, what it represents and how it's used today.",
          language: ["This is…", "It was built / painted in…", "It was designed by…", "It's visited by…", "Today, it's used as / for…"],
          seconds: 90,
          checklist: ["use at least four passive sentences?", "give dates and facts?", "say how it's used today?", "speak for about 90 seconds?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name the people and steps of a cultural project.", review: "Explanation: the vocabulary cards" },
    { can: "I can form the present passive: *is held, are given*.", review: "Explanation: Passive voice" },
    { can: "I can form the past passive: *was painted, were invited*.", review: "Explanation: Passive voice; Writing activity 1" },
    { can: "I can change active sentences into passive sentences.", review: "Explanation: Active → passive; Reading activity 2" },
    { can: "I can understand an interview or report about a cultural project.", review: "Listening and Reading activities" },
    { can: "I can describe a community art project in a report or interview.", review: "Writing activity 3; Speaking activity 2" }
  ]
};
