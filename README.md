# Dice Divination

**[→ See it live](https://dice-divination.angelscrydata.workers.dev/)**

A single-page web app that rolls two dice, one black and one white, and reads the pairing as a divination. It's built on a small system I made: the **black die is your inner world**, the **white die is the world around you**, and each of the 36 combinations carries its own message. Wrapped in a late-night CRT aesthetic: a flickering grey camcorder feed, glitchy scanlines, and dice that tumble out of the noise in 3D before settling face-on.

Everything runs **client-side**. There's no server, no database, and no build step. Just a few static files.

## How it works

1. **Roll.** Two dice are rolled (1 to 6 each), tumble in 3D, and land face-on at a random angle. The black die reads the **inner** axis; the white die reads the **outer** axis.
2. **Map to a reading.** Each die's value picks one of six shared archetypes (Seed, Learning, Spark, Structure, Disruption, Wisdom). The black/white pair indexes into one of **36 readings**.
3. **Read.** The result prints to a terminal-style overlay in the top-left corner: the roll, both axis themes, a title, and the body text.
4. **Learn the system.** The `?` in the bottom-right opens a sidebar explaining the two axes and the six archetypes.

Each combination always maps to the same reading; the roll itself is random.

## Getting started

No build step and no dependencies. It's plain static files. To run it locally, serve the folder with anything:

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

Or just open `index.html` directly in a browser.


## Project structure

```
index.html      The whole page: the 3D dice, the CRT canvas background,
                the reading overlay, and the about sidebar (markup, styles, logic)
divination.js   The 36 readings, plus the axis and archetype definitions (editable)
about.js        Text for the "?" explanation sidebar
wrangler.jsonc  Cloudflare Workers static-assets config
```

The readings and the sidebar copy live in their own files so the words can be edited without touching the app code.

## Tech

- **Vanilla JavaScript** (no framework, no build step)
- **CSS 3D transforms** for the tumbling dice
- **Canvas 2D** for the glitchy CRT "camcorder feed" background
- **Cloudflare Workers** (static assets) for hosting, via Wrangler

---
Vibecoded with ❤️
