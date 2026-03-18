import './CharacterForm.css'
import {useState} from 'react'

export default function CharacterForm()  {

    const [characterForm , setCharacterForm] = useState({
      characterName: '',
      characterRace: '',
      characterClass: '',
      characterStatus: 'Active',
      level: 1,
      str: 10,
      dex:10,
      con:10,
      int:10,
      wis:10,
      cha:10,
      backstory: '',
    })

    function formUpdate (event) {
      const {name,value} = event.target
      setCharacterForm(prev => ({
        ...prev,
        [name]: value

      }))
         console.log(name,value);
    }

  return (    

    <section className="form-section">
      <h2> Create New Character</h2>
      <form className="character-form">

        <div>
          <label htmlFor="name">Character Name</label>
          <input onChange={formUpdate} name = "characterName" id="name" type = "text" placeholder="Enter character name"/>
        </div>
        
        <label htmlFor="race">Race</label>
        <select onChange={formUpdate} value={characterForm.characterRace} name = "characterRace" id="race">
          <option>Select race</option>
        </select>

        <label htmlFor="class">Class</label>
        <select onChange={formUpdate} value={characterForm.characterClass} name = "characterClass" id="class">
          <option>Select class</option>
        </select>

        <label htmlFor="status">Status</label>
        <select onChange={formUpdate} value={characterForm.characterStatus} name = "characterStatus" id="status">
          <option>Active</option>
          <option>Deceased</option> 
        </select>

        <label htmlFor="level">Level</label>
        <input onChange={formUpdate} name = "level" className="level" id="level" type="number" min="1" max="20" value={characterForm.level}/>
        

        <div className="stats-container">
          <label>STR(Strength)<input onChange={formUpdate} name = "str" type ="number" min="1" max="20" value={characterForm.str}/></label>
          <label>DEX(Dexterity)<input onChange={formUpdate} name = "dex" type ="number" min="1" max="20" value={characterForm.dex}/></label>
          <label>CON(Constitution)<input onChange={formUpdate} name = "con" type ="number" min="1" max="20" value={characterForm.con}/></label>
          <label>INT(Intelligence)<input onChange={formUpdate} name = "int" type ="number" min="1" max="20" value={characterForm.int}/></label>
          <label>WIS(Wisdom)<input onChange={formUpdate} name = "wis" type ="number" min="1" max="20" value={characterForm.wis}/></label>
          <label>CHA(Charisma)<input onChange={formUpdate} name = "cha" type ="number" min="1" max="20" value={characterForm.cha}/></label>
        </div>

        <label htmlFor="backstory">Backstory</label>
        <textarea onChange={formUpdate} name = "backstory" id="backstory" placeholder="Backstory of your character"></textarea>

        <div className="form-buttons">
          <button type="submit"> + Create Character</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </section>
  )
}