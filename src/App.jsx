import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/HeroSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CharacterForm from "./components/CharacterForm/CharacterForm.jsx";
import CharacterList from "./components/CharacterList/CharacterList.jsx";
import About from "./components/About/About.jsx";
import { useState } from "react";
import { Routes, Route } from "react-router";

function App() {
  const [characters, setCharacters] = useState([]);
  function addCharacter(newCharacter) {
    setCharacters((prev) => [...prev, { ...newCharacter, id: Date.now() }]);
  }

  function deleteCharacter(id) {
    setCharacters((prev) => prev.filter((character) => character.id !== id));
  }

  const [editingCharacter, setEditingCharacter] = useState(null);
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
  }

  return (
    <div className="app-container">
      <Header />
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
