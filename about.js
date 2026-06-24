/*
  Text for the "?" explanation sidebar — edit this freely.

  Keep the voice casual and a little cheeky, same as the readings.
  Structure mirrors how it's rendered: title, blurb, the two dice,
  the six archetypes, and how to read it.
*/

const ABOUT = {

  // the two dice / two axes
  dice: {
    head: "the two dice",
    lines: [
      { key: "black", text: "your inner world. your potential, your readiness, what you're bringing to the moment. where you are." },
      { key: "white", text: "the outer world. the situation itself, its timing, whether the ground is ready for you. where everything else is." },
    ],
    note: "Both dice speak the same six languages. The black one points them inward; the white one points them outward.",
  },

  // the six shared archetypes (1–6)
  archetypes: {
    head: "the six",
    items: [
      { n: 1, name: "Seed", text: "pure potential. nothing's happened yet, but it could. the very start of a thing." },
      { n: 2, name: "Learning", text: "openness and receptivity. soaking it in, finding your feet, being a student of the moment." },
      { n: 3, name: "Spark", text: "the creative itch. experimenting, improvising, chasing the new idea to see where it goes." },
      { n: 4, name: "Structure", text: "footing and form. plans, discipline, the scaffolding that holds a thing up." },
      { n: 5, name: "Disruption", text: "the tangle. things coming apart, getting messy, no solid ground to stand on." },
      { n: 6, name: "Wisdom", text: "integration. the long view, flow, knowing when to act and when to let it be." },
    ],
  },

  howto: {
    head: "how to read it",
    lines: [
      "Hold your question loosely in mind and roll. The black die lands on your inner number; the white die lands on the world's. Read them together, and the pairing is the message.",
      "It's guidance, not gospel. Take what's useful and leave the rest.",
    ],
  },
};
