import './CharacterForm.css'
import {useState,useEffect} from 'react'
import { getRaces, getClasses, getSpells } from '../../api/dndApi'


//useState

export default function CharacterForm({onSubmit})  {

    const [characterForm , setCharacterForm] = useState({
      characterName: '',
      characterRace: '',
      characterClass: '',
      characterSpells: [],
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

  //formUpdate function

    function formUpdate (event) {
      const {name,value} = event.target
      setCharacterForm(prev => ({
        ...prev,
        [name]: value

      }))
         //console.log(name,value);
    }

    function handleSubmit(event) {
    event.preventDefault()
    onSubmit(characterForm)
  }

//toggle function for spells

function toggleSpell(spellName) {
  setCharacterForm(prev => {
    const isSelected = prev.characterSpells.includes(spellName)

    if(isSelected) {
      const updatedSpells = prev.characterSpells.filter(
        spell => spell !== spellName
      )
      return {...prev,characterSpells:updatedSpells}
    } else {
      const updatedSpells = [...prev.characterSpells, spellName]
      return {...prev, characterSpells: updatedSpells}
    }
  })
}


//useState for races, classes and spells

  const [races, setRaces] = useState([])
  const [classes, setClasses] = useState([])
  const[spells, setSpells] = useState([])

  //useEffect races and classes

  useEffect(() => {
    async function fetchData() 
    {
      const racesData = await getRaces()
       //console.log("Races:", racesData)
      setRaces(racesData)

      const classesData = await getClasses()
       //console.log("Classes:", classesData)
      setClasses(classesData)
    }
    fetchData()
  }, [])
 
 //useEffect spells

  useEffect(() => {
  if (characterForm.characterClass === ""){
    setSpells([])
    return
  }
   async function fetchData()
   {
      const spellsData = await getSpells(characterForm.characterClass)
       console.log("Spells:" , spellsData)
      setSpells(spellsData)
   } 
    fetchData()
  }, [characterForm.characterClass])

// ------- Map functions ----------

  //race
  const raceOptions = races.map(element =>
    <option key={element.index} value={element.index}>{element.name}</option>
   )

   //class
   const classOptions = classes.map(element =>
    <option key={element.index} value= {element.index}>{element.name}</option>
   )

   //spells
   const spellOptions = spells.slice(0, 20).map(element =>
    <span key={element.index} onClick={() => toggleSpell(element.name)} >{element.name}</span>
   )
console.log("Selected spells:", characterForm.characterSpells)
// ------- Map functions ----------

  return (    

    <section className="form-section">
      <h2> Create New Character</h2>
      <form onSubmit = {handleSubmit} className="character-form">

        <div>
          <label htmlFor="name">Character Name</label>
          <input onChange={formUpdate} name = "characterName" id="name" type = "text" placeholder="Enter character name"/>
        </div>
        
        <label htmlFor="race">Race</label>
        <select onChange={formUpdate} value={characterForm.characterRace} name = "characterRace" id="race">
          <option>Select race</option>
          {raceOptions}
        </select>
        
        <label htmlFor="class">Class</label>
        <select onChange={formUpdate} value={characterForm.characterClass} name = "characterClass" id="class">
          <option>Select class</option>
           {classOptions}
        </select>

       <div className="spells-container">
        <label>Spells</label>
        <div className="spells-list">
        {spells.length > 0 ? spellOptions : characterForm.characterClass ? <p>No spells for this class</p> : <p>Select a class first</p>}
        </div>
       </div>


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