import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/HeroSection.jsx';
import CharacterForm from './components/CharacterForm/CharacterForm.jsx';
import CharacterCard from './components/CharacterCard/CharacterCard.jsx';
import {useState} from 'react';

function App() {

  const [characters, setCharacters] = useState([]) 

    function addCharacter(newCharacter) {

      setCharacters(prev => [...prev, newCharacter])

    }

    //console.log(characters);

  return (
    <div>
      <Header/>
      <Hero/>
      <CharacterForm onSubmit= {addCharacter} />
      <CharacterCard/>
    </div>
  )
}

export default App