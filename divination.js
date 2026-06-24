/*
  Divination readings — edit this file freely.

  Keep the voice casual and a little cheeky; that's the whole point.

  How it's organized:
    - The BLACK die is the inner axis (you, your potential, your footing).
    - The WHITE die is the outer axis (the world, the situation, timing).
    - readings[black][white] = { title, body }  for all 36 combinations.

  To tweak a reading, just edit its `title` or `body` string below.
  Apostrophes are fine. Keep each string wrapped in its quotes.
*/

const DIVINATION = {
  // Black-die themes (the inner axis)
  black: {
    1: { name: "Seed", note: "inner potential" },
    2: { name: "Learning", note: "inner receptivity" },
    3: { name: "Spark", note: "inner experimentation" },
    4: { name: "Structure", note: "inner footing" },
    5: { name: "Disruption", note: "inner entanglement" },
    6: { name: "Wisdom", note: "inner integration" },
  },

  // White-die themes (the outer axis) — same archetypes, turned outward
  white: {
    1: { name: "Seed", note: "outer potential" },
    2: { name: "Learning", note: "outer receptivity" },
    3: { name: "Spark", note: "outer experimentation" },
    4: { name: "Structure", note: "outer footing" },
    5: { name: "Disruption", note: "outer entanglement" },
    6: { name: "Wisdom", note: "outer integration" },
  },

  readings: {
    // ---- Black 1 — Seed (inner potential) ----
    1: {
      1: {
        title: "Too early to know",
        body: "You ain't seen nothing yet. The developments that actually matter haven't even happened. Wait. You're ahead of your time, or focused on the wrong thing.",
      },
      2: {
        title: "Learn more before deciding",
        body: "Your part in this hasn't really started, but the world is beginning to open to you. The situation is just starting to flower, but everything is still so new.",
      },
      3: {
        title: "Possibility forming; move slowly",
        body: "There is bold movement happening right now that concerns you. It'll affect you eventually, but right now it's none of your concern.",
      },
      4: {
        title: "The world has structure; you're not ready yet",
        body: "The world has structure and the situation is maturing, but you don't have what it takes to break the surface yet. Wait, and maybe sharpen your skills while you're at it.",
      },
      5: {
        title: "Confusing situation; wait for clarity",
        body: "This isn't the time for the seed to germinate; the soil won't support you. Not for now.",
      },
      6: {
        title: "Wisdom surrounds you; listen first",
        body: "You're a seed in a rich field of interconnection. The world will tell you when it's time to act, and when it is, you'll simply do it. Don't worry about it, you're one with all of it.",
      },
    },

    // ---- Black 2 — Learning (inner receptivity) ----
    2: {
      1: {
        title: "A new path is opening",
        body: "This is something you haven't seen before in some important way, and it could lead somewhere good. It's going to fill in a new part of the map of your life. Watch and learn as it develops.",
      },
      2: {
        title: "Gentle yes; proceed carefully",
        body: "Be soft. Approach this like a kid learning to hold an egg without dropping it. The practice will be good for you, but maybe hand it back to an adult when you've had your fill.",
      },
      3: {
        title: "Try it and learn",
        body: "This is a little above your skill level right now, but you could learn something. You might fall off the bike and skin your knee, or you might ride for the first time. Either way, it'll change you.",
      },
      4: {
        title: "Yes; guidance and structure support you",
        body: "There will be guidance and structure to support you, but watch out for the overly rigid types who'll try to define you before you're ready. Don't be a doormat.",
      },
      5: {
        title: "Complications likely; patience needed",
        body: "The roll of harsh awakening, loss of innocence, a first heartbreak, and a notable failure. If you proceed, grief's going to hit you hard, and the road won't be easy. But, holy shit, will you learn.",
      },
      6: {
        title: "Seek deeper understanding",
        body: "Pause and take comfort in the simple things. This isn't the time for action, it's the time for reconnection. Call your mom, or go give a friend a hug.",
      },
    },

    // ---- Black 3 — Spark (inner experimentation) ----
    3: {
      1: {
        title: "Opportunity beginning",
        body: "Keep an eye out for new creative opportunities, an important one is just around the corner. Inspiration is coming for you.",
      },
      2: {
        title: "Slow down and listen",
        body: "The situation is delicate and still forming, and you have a chance to shape it. You've got the capacity to take advantage of this, just don't lose the plot.",
      },
      3: {
        title: "Yes; explore boldly",
        body: "High risk, high reward. Follow that new idea and see where it leads. Impulse and audacity could really pay off here.",
      },
      4: {
        title: "Strong yes; action meets structure",
        body: "You have the capacity to do something lasting here. The structures already in place will play a part in whether you succeed. You're the vine ready to climb the right trellis.",
      },
      5: {
        title: "Your energy may tangle things",
        body: "This is risky business. Act impulsively and you could make a complicated situation worse. It's easy to add to the tangle here, or create one.",
      },
      6: {
        title: "Yes; act with awareness",
        body: "The world will see your potential, meet your energy, and nourish you. Go for it, but do it with open eyes.",
      },
    },

    // ---- Black 4 — Structure (inner footing) ----
    4: {
      1: {
        title: "New territory; build carefully",
        body: "Your decisions here matter, and you'll have to choose something. One of those choices will support a new beginning.",
      },
      2: {
        title: "Adjust your approach",
        body: "You risk being too rigid for something that isn't mature yet, and you might choke it. Approach with subtlety, gentleness, and curiosity.",
      },
      3: {
        title: "Move forward, stay flexible",
        body: "You're actually a step ahead, so stay the course; just expect to make some allowances for the unexpected.",
      },
      4: {
        title: "Yes; solid footing exists",
        body: "Stay consistent, follow the plan, stay disciplined, push forward.",
      },
      5: {
        title: "Structure will be tested",
        body: "Your beautiful structures are going to get stress-tested. You may have to readjust fast. There might be a storm a-comin'.",
      },
      6: {
        title: "Respect the wisdom of the situation",
        body: "If your actions, decisions, and structures are out of alignment, they won't stick. Try to cut water with a sword and it just flows around the blade. Don't think you're special, or somehow above nature.",
      },
    },

    // ---- Black 5 — Disruption (inner entanglement) ----
    5: {
      1: {
        title: "Something new may emerge from a mess",
        body: "Being compromised might let you see things differently in a way that actually helps. Take the chance to reassess; look at it from a new angle and figure out what it could offer you.",
      },
      2: {
        title: "Let things unfold slowly",
        body: "Your winds can have a strong effect on everything around you. If you're going to proceed, do it carefully, and make sure nobody gets hurt.",
      },
      3: {
        title: "Acting now may worsen confusion",
        body: "Everything feels pokey; little grating problems can seem huge. Avoid making big decisions right now and potentially overreacting.",
      },
      4: {
        title: "No; structures are under strain",
        body: "Your scaffolding is under strain, but it's holding you for now. Don't push your luck.",
      },
      5: {
        title: "Total uncertainty; surrender control",
        body: "I'm sorry, this probably really sucks. The roll of confusing situations, no solid footing, and barely any mutual understanding. The only move is to surrender control, and maybe just go to bed. If you can, find some appreciation for the absurdity of it all.",
      },
      6: {
        title: "Confusion leading to insight",
        body: "You're close to something, darlin'. It's darkest before the dawn. Everything's okay and you're safe, and soon you'll integrate this experience as a part of you. Hope for calmer waters.",
      },
    },

    // ---- Black 6 — Wisdom (inner integration) ----
    6: {
      1: {
        title: "A new beginning guided by wisdom",
        body: "Step back for a moment. One journey is ending and another is beginning. You'll find yourself anew. Revisit things later; you'll know when the time is right.",
      },
      2: {
        title: "Move gently; intuition guides you",
        body: "Instead of acting decisively, nurture the situation and its context. Guide it gently with what you know, and watch it grow. Tap into your inner mentor if the moment calls for it.",
      },
      3: {
        title: "Act thoughtfully",
        body: "Yes, but don't take it too seriously. The world around you is a sandbox. Dance with the chaos.",
      },
      4: {
        title: "Very favorable; wisdom meets structure",
        body: "You have wisdom, so you can actually use the structure around you. A very favourable pairing. Tap into the flow state.",
      },
      5: {
        title: "Stay centered during turbulence",
        body: "You have what it takes to stay afloat even when the seas get stormy. Proceed, and stay centred.",
      },
      6: {
        title: "Deep yes, through patience",
        body: "The truest of all the yeses. It may take a long time, and it may not give you what you want, but it will give you what you need.",
      },
    },
  },
};
