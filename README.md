# D&D Character Tracker

> ⚠️ **Work in Progress** — Core functionality is complete. Polish and additional features are in development.

A React app for managing Dungeons & Dragons characters. Create, edit, and organize your party with real-time data from the D&D 5e API.

🔗 **[Live Demo](https://react-dnd-tracker.vercel.app)**

---

## The Problem

Managing D&D characters across sessions often means paper sheets, scattered notes, and forgotten spell lists. I wanted to build a single place to track stats, spells, and backstories while keeping the dark fantasy feel of the game.

## The Solution

A character tracker with full CRUD functionality, pulling race, class, and spell data directly from the D&D 5e API. Characters are managed through React state with a component-based architecture that keeps things modular and easy to extend.

## Features

- Full CRUD — create, view, edit, and delete characters
- D&D 5e API integration for races, classes, and spells
- Dynamic spell fetching based on selected class
- Toggle spell selection with visual feedback
- Dark fantasy UI with custom fonts and CSS variable theming
- Client-side routing with React Router

## Tech Stack

| Technology   | Purpose                   |
| ------------ | ------------------------- |
| React        | UI and state management   |
| Vite         | Build tool and dev server |
| React Router | Client-side routing       |
| D&D 5e API   | Reference data            |
| Vercel       | Deployment                |

## Project Structure

```
src/
├── api/
│   └── dndApi.js
├── components/
│   ├── About/
│   ├── CharacterCard/
│   ├── CharacterForm/
│   ├── CharacterList/
│   ├── Footer/
│   ├── Header/
│   ├── Hero/
│   ├── SpellList/
│   └── StatsBlock/
├── assets/
├── App.jsx
├── index.css
└── main.jsx
```

Component-based architecture with separated concerns. Each component has its own folder with dedicated `.jsx` and `.css` files. API logic is isolated in a dedicated `api/` directory.

## Getting Started

```bash
git clone https://github.com/iremstalbrand/react-dnd-tracker.git
cd react-dnd-tracker
npm install
npm run dev
```

Opens at `http://localhost:5173`

## Roadmap

- Custom delete confirmation modal to replace browser default dialog
- Equipment tracking — assign weapons and armor from the API
- Ability selection based on character class
- Bestiary page — browse and filter monsters from the D&D 5e API
- NPC creation and listing
- Data persistence — save characters across sessions
- Responsive design — optimized for tablet
- Class-based card theming — dynamic colors per character class
- Custom image upload (map, character avatar, etc.)
- Session builder for each game
- Fullstack conversion — Node.js/Express backend with MongoDB for persistent character storage and user authentication

## Acknowledgements

- [D&D 5e API](https://www.dnd5eapi.co/) for race, class, and spell data
- [Google Fonts](https://fonts.google.com/) — Cinzel Decorative, Cinzel, Crimson Text
