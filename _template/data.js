window.UNIT = {
  slug: "_template",
  title: "Personal Possessions",
  level: "A1–A2",
  minutes: 50,
  focus: ["this / that / these / those", "my, your, his, her…", "possessive 's", "Whose…?", "mine, yours…"],

  presentation: {
    scene: "🎒📱🔑👓",
    situation: "It's the end of the school day at BUAP. The **Lost and Found** office is full of things students left in the classrooms. Whose things are they?",
    warmup: {
      prompt: "What's in your backpack today? Choose everything you have.",
      options: ["a phone", "a charger", "headphones", "keys", "a wallet", "an ID card", "a notebook", "a pencil case", "a water bottle", "glasses", "an umbrella", "a laptop"],
      response: "Great! In this unit you'll learn to talk about your things and other people's things."
    },
    dialogueTitle: "At the Lost and Found",
    dialogue: [
      { who: "Mr. Ruiz", line: "Hi! Can I help you?" },
      { who: "Sofía", line: "Yes, please. I can't find my phone." },
      { who: "Mr. Ruiz", line: "Is *this* your phone?" },
      { who: "Sofía", line: "No, it isn't. *My* phone is black. That one is white." },
      { who: "Mr. Ruiz", line: "What about *that* phone over there?" },
      { who: "Sofía", line: "Yes! That's *mine*. Thank you! Oh, and *those* keys are *Laura's*." },
      { who: "Mr. Ruiz", line: "*Whose* keys? Laura's? OK, I can give them to *her*." }
    ]
  },

  objectives: [
    "I can name common personal possessions.",
    "I can point to objects with *this, that, these* and *those*.",
    "I can say who things belong to with *my, your, his, her…* and *'s*.",
    "I can ask and answer *Whose…?* questions with *mine, yours, his, hers…*"
  ],

  explanation: {
    vocabTitle: "Personal possessions",
    vocab: [
      { word: "backpack", icon: "🎒" }, { word: "phone", icon: "📱" }, { word: "charger", icon: "🔌" },
      { word: "headphones", icon: "🎧" }, { word: "keys", icon: "🔑" }, { word: "wallet", icon: "👛" },
      { word: "ID card", icon: "🪪", say: "I D card" }, { word: "notebook", icon: "📓" }, { word: "pencil case", icon: "✏️" },
      { word: "water bottle", icon: "🧴" }, { word: "glasses", icon: "👓" }, { word: "watch", icon: "⌚" },
      { word: "umbrella", icon: "☂️" }, { word: "laptop", icon: "💻" }, { word: "jacket", icon: "🧥" }
    ],
    grammar: [
      {
        title: "This, that, these, those",
        head: ["", "Near me (here)", "Far from me (there)"],
        rows: [
          ["One thing", "*this* phone<br>This is my phone.", "*that* phone<br>That is your phone."],
          ["Two or more", "*these* keys<br>These are my keys.", "*those* keys<br>Those are his keys."]
        ],
        note: "Use *is* with this/that and *are* with these/those."
      },
      {
        title: "Possessive adjectives and pronouns",
        head: ["Subject", "Possessive adjective + noun", "Possessive pronoun (no noun)"],
        rows: [
          ["I", "It's *my* bag.", "It's *mine*."], ["you", "It's *your* bag.", "It's *yours*."],
          ["he", "It's *his* bag.", "It's *his*."], ["she", "It's *her* bag.", "It's *hers*."],
          ["we", "It's *our* bag.", "It's *ours*."], ["they", "It's *their* bag.", "It's *theirs*."]
        ],
        note: "A possessive pronoun replaces the noun: *Is this your pen? – Yes, it's mine.*"
      },
      {
        title: "Possessive 's and Whose…?",
        head: ["Form", "Example"],
        rows: [
          ["name + *'s*", "It's *Diego's* jacket."],
          ["plural noun + *'*", "The *students'* lockers are blue."],
          ["*Whose* + noun + is/are…?", "*Whose* phone is this? – It's *Ana's*."],
          ["*Whose* is/are…?", "*Whose* are these? – They're *mine*."]
        ],
        note: "*Whose* (possession) sounds like *who's* (who is), but it is a different word."
      }
    ],
    watchOut: [
      ["the phone of Ana", "Ana's phone"],
      ["This is mine phone.", "This is my phone. / This is mine."],
      ["Who's keys are these?", "Whose keys are these?"],
      ["This keys are yours.", "These keys are yours."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the sentences.",
      items: [
        "[[These]] are my headphones. (near me, plural)",
        "Is this Carlos's wallet? – Yes, it's [[his]].",
        "[[Whose]] umbrella is this? – It's Mariana[['s]]."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Three students go to the Lost and Found. Listen and help Mr. Ruiz return their things.",
      title: "Three students, lots of things",
      script: [
        { who: "Mr. Ruiz", line: "Good afternoon. Are you looking for something?" },
        { who: "Daniel", line: "Yes. I'm looking for my headphones and my charger." },
        { who: "Mr. Ruiz", line: "Are these your headphones? The red ones?" },
        { who: "Daniel", line: "No, mine are white. Oh, there they are! Those are my headphones. And that's my charger, the black one." },
        { who: "Mr. Ruiz", line: "Here you are. Next, please." },
        { who: "Valeria", line: "Hi. I can't find my water bottle. It's green, with a yellow lid." },
        { who: "Mr. Ruiz", line: "Is this yours?" },
        { who: "Valeria", line: "Yes, it is! And this notebook is my brother's. His name is Emilio." },
        { who: "Mr. Ruiz", line: "OK. And the glasses? Whose glasses are these?" },
        { who: "Valeria", line: "They aren't mine. I think they're Ms. Torres's. She's our teacher." },
        { who: "Iván", line: "Excuse me, is there a blue umbrella here? It's mine." },
        { who: "Mr. Ruiz", line: "Yes, here it is. And is this ID card yours too?" },
        { who: "Iván", line: "Yes! My ID card! Thank you very much." }
      ],
      activities: [
        {
          type: "match", title: "Who does it belong to?",
          prompt: "Match each thing with its owner.",
          pairs: [
            ["the white headphones and the black charger", "Daniel"],
            ["the green water bottle", "Valeria"], ["the notebook", "Emilio, Valeria's brother"],
            ["the glasses", "Ms. Torres, the teacher"], ["the blue umbrella and the ID card", "Iván"]
          ]
        },
        {
          type: "gap", title: "Listen for details",
          prompt: "Listen again and complete the sentences with one or two words.",
          bank: true,
          items: [
            "Daniel's headphones are [[white]], not red.",
            "Valeria's water bottle has a [[yellow]] lid.",
            "The notebook is her [[brother's]].",
            "The glasses aren't [[mine|Valeria's]], says Valeria.",
            "Ms. Torres is [[their|our]] teacher.",
            "Iván's umbrella is [[blue]]."
          ]
        }
      ]
    },

    reading: {
      intro: "Three students posted on the school blog: *What's in my backpack?*",
      title: "What's in my backpack?",
      text: [
        { author: "Renata, 16", body: "My backpack is small and purple. These are my favorite things: my phone, my headphones and my sketchbook. I love drawing! My sister's charger is in my backpack too, because hers is broken." },
        { author: "Tomás, 17", body: "I always carry my laptop, my water bottle and my keys. My keys have a small soccer ball on them. That's my brother's gift. Oh, and my glasses! I can't read without them." },
        { author: "Ximena, 15", body: "My backpack is big and heavy. In it there are my notebooks, my pencil case and an umbrella. The umbrella isn't mine, it's my mom's. Her umbrella is better than mine!" }
      ],
      activities: [
        {
          type: "sort", title: "Whose things are they?",
          prompt: "Put each thing in the right backpack.",
          bins: ["Renata's backpack", "Tomás's backpack", "Ximena's backpack"],
          items: [
            { text: "a sketchbook", bin: 0 }, { text: "her sister's charger", bin: 0 }, { text: "headphones", bin: 0 },
            { text: "a laptop", bin: 1 }, { text: "keys with a soccer ball", bin: 1 }, { text: "glasses", bin: 1 },
            { text: "notebooks", bin: 2 }, { text: "a pencil case", bin: 2 }, { text: "her mom's umbrella", bin: 2 }
          ]
        },
        {
          type: "rewrite", title: "Fix the comments",
          prompt: "Students left comments on the blog. Each comment has one mistake. Write the correct sentence.",
          items: [
            { q: "Renata, this sketchbook is very nice! Is it your?", a: ["Renata, this sketchbook is very nice! Is it yours?", "Is it yours?"] },
            { q: "Tomás, those keys is cool.", a: ["Tomás, those keys are cool.", "Those keys are cool."] },
            { q: "The glasses of Tomás are like mine.", a: ["Tomás's glasses are like mine.", "Tomás' glasses are like mine."] },
            { q: "Ximena, who's umbrella is it?", a: ["Ximena, whose umbrella is it?", "Whose umbrella is it?"] },
            { q: "My mom umbrella is red too.", a: ["My mom's umbrella is red too."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the sentences first, then write about your own things.",
      activities: [
        {
          type: "tiles", title: "Make questions and answers",
          items: [
            { a: "Whose keys are these?" },
            { a: "They are my brother's keys.", alt: ["They're my brother's keys."] },
            { a: "Is that jacket yours?" },
            { a: "No, it isn't mine." },
            { a: "Those are our notebooks." },
            { a: "Her laptop is on the table." }
          ]
        },
        {
          type: "rewrite", title: "Say it another way",
          prompt: "Rewrite the sentences with *'s* or a possessive pronoun.",
          items: [
            { q: "The bag of my brother is new.", a: ["My brother's bag is new."] },
            { q: "The phone of Ana is old.", a: ["Ana's phone is old."] },
            { q: "This is my umbrella. → This umbrella is…", a: ["This umbrella is mine.", "This umbrella is mine"] },
            { q: "Those are their books. → Those books are…", a: ["Those books are theirs."] },
            { q: "Is this your watch? → Is this watch…?", a: ["Is this watch yours?"] },
            { q: "The lockers of the students are blue.", a: ["The students' lockers are blue."] }
          ]
        },
        {
          type: "write", title: "My three favorite possessions",
          prompt: "Write about three things that are important to you. Say what they are, what they look like, and why you like them. You can also mention something that belongs to someone in your family.",
          minWords: 50, maxWords: 80,
          model: "My three favorite possessions are my headphones, my watch and my skateboard. My headphones are black and very comfortable. I use them every day on the bus. My watch was my grandfather's. It's old, but I love it. My skateboard isn't new, but it's mine and it's fast!",
          bank: ["My favorite possessions are", "It's / They're", "It was my…'s", "I use it every day", "I love it because", "It isn't new, but"],
          checklist: [
            "I wrote about **three** things.",
            "I used *my, his, her…* correctly.",
            "I used *'s* at least once.",
            "I used *is* with one thing and *are* with two or more."
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
            "Is this your jacket?",
            "Yes, that's mine!",
            "No, these aren't my keys.",
            "Whose phone is this?",
            "I think it's her backpack.",
            "Those glasses are mine."
          ]
        },
        {
          type: "speak", title: "Show and tell",
          prompt: "Record yourself for about one minute. Show or describe three of your things: what they are, what they look like, and why they are special. Mention one thing that belongs to someone in your family.",
          language: ["This is my…", "These are my…", "It was my mom's / dad's…", "It's special because…", "I use it when…"],
          seconds: 75,
          checklist: ["talk about three things?", "use *this* or *these*?", "use *'s* for a family member?", "speak for about one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can name at least 10 personal possessions.", review: "Explanation: the vocabulary cards" },
    { can: "I can use *this, that, these* and *those* correctly.", review: "Explanation: this, that, these, those" },
    { can: "I can use *my, your, his, her, our, their* to talk about things.", review: "Explanation: possessive adjectives" },
    { can: "I can use *'s* to say who something belongs to.", review: "Explanation: possessive 's; Writing activity 2" },
    { can: "I can ask and answer *Whose…?* questions with *mine, yours…*", review: "Speaking activity 2" },
    { can: "I can describe my favorite possessions in a short text or recording.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
