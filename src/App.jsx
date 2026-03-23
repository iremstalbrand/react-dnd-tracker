import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/HeroSection.jsx';
import CharacterForm from './components/CharacterForm/CharacterForm.jsx';
import CharacterList from './components/CharacterList/CharacterList.jsx';
import {useState} from 'react';

function App() {

    const [characters, setCharacters] = useState([]) 
      function addCharacter(newCharacter) {
        setCharacters(prev => [...prev, { ...newCharacter, id: Date.now() }])
      }

    //console.log(characters);

    function deleteCharacter (id) {
      setCharacters(prev => prev.filter(character => character.id !== id))
    }

  const [editingCharacter, setEditingCharacter] = useState(null)
    function editCharacter (selectedCharacter) {
      setEditingCharacter(selectedCharacter)
    }

    console.log("Editing:", editingCharacter)

    function updateCharacter (updatedCharacter) {
      setCharacters(prev => prev.map(character => 
        character.id === updatedCharacter.id ? updatedCharacter : character ))
          setEditingCharacter(null) 
    }
        
        
  return (
    <div>
      <Header/>
      <Hero/>
      <CharacterForm onSubmit= {addCharacter} onUpdate= {updateCharacter} editingCharacter= {editingCharacter}  />
      <CharacterList characters = {characters} deleteCharacter = {deleteCharacter} editCharacter= {editCharacter}/>
    </div>
  )
}

export default App