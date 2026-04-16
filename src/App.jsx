import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/HeroSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CharacterForm from "./components/CharacterForm/CharacterForm.jsx";
import CharacterList from "./components/CharacterList/CharacterList.jsx";
import About from "./components/About/About.jsx";
import { useState } from "react";
import { Routes, Route } from "react-router";

// REVIEW: Character data lives only in React state — it's lost on page refresh.
// Consider persisting to localStorage so users don't lose their party.
function App() {
  const [characters, setCharacters] = useState([]);
  const [editingCharacter, setEditingCharacter] = useState(null);
  const [notification, setNotification] = useState("");

  // REVIEW: Date.now() can produce duplicate IDs if two characters are created
  // in the same millisecond. Use crypto.randomUUID() for safer unique IDs.
  function addCharacter(newCharacter) {
    setCharacters((prev) => [...prev, { ...newCharacter, id: Date.now() }]);
    setNotification("Character created!");
    setTimeout(() => setNotification(""), 3000);
  }

  // REVIEW: Each action sets a new setTimeout without clearing the previous one.
  // If the user deletes two characters quickly, the first timer clears the second
  // notification early. Store the timer ID and clearTimeout before setting a new one.
  function deleteCharacter(id) {
    setCharacters((prev) => prev.filter((character) => character.id !== id));
    setNotification("Character deleted!");
    setTimeout(() => setNotification(""), 3000);
  }

  function editCharacter(selectedCharacter) {
    setEditingCharacter(selectedCharacter);
  }

  function updateCharacter(updatedCharacter) {
    setCharacters((prev) =>
      prev.map((character) =>
        character.id === updatedCharacter.id ? updatedCharacter : character,
      ),
    );
    setEditingCharacter(null);
    setNotification("Character updated!");
    setTimeout(() => setNotification(""), 3000);
  }

  return (
    <div className="app-container">
      <Header />
      {notification && <div className="notification">{notification}</div>}
      <Routes>
        <Route path="/" element={<Hero />} />

        <Route
          path="/create"
          element={
            <CharacterForm
              onSubmit={addCharacter}
              onUpdate={updateCharacter}
              editingCharacter={editingCharacter}
            />
          }
        />

        <Route
          path="/characters"
          element={
            <CharacterList
              characters={characters}
              deleteCharacter={deleteCharacter}
              editCharacter={editCharacter}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
