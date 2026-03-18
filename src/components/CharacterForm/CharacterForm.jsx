import './CharacterForm.css'

export default function CharacterForm()  {
  return (
    <section className="form-section">
      <h2> Create New Character</h2>
      <form className="character-form">

        <div>
          <label htmlFor="name">Character Name</label>
          <input id="name" type = "text" placeholder="Enter character name"/>
        </div>
        
        <label htmlFor="race">Race</label>
        <select id="race">
          <option value="">Select race</option>
        </select>

        <label htmlFor="class">Class</label>
        <select id="class">
          <option value="">Select class</option>
        </select>

        <label htmlFor="status">Status</label>
        <select id="status">
          <option>Active</option>
          <option>Deceased</option> 
        </select>

        <label htmlFor="level">Level</label>
        <input className="level" id="level" type="number" min="1" max="20" defaultValue={1}/>
        

        <div className="stats-container">
          <label>STR<input type ="number" min="1" max="20" defaultValue={10}/></label>
          <label>DEX<input type ="number" min="1" max="20" defaultValue={10}/></label>
          <label>CON<input type ="number" min="1" max="20" defaultValue={10}/></label>
          <label>INT<input type ="number" min="1" max="20" defaultValue={10}/></label>
          <label>WIS<input type ="number" min="1" max="20" defaultValue={10}/></label>
          <label>CHA<input type ="number" min="1" max="20" defaultValue={10}/></label>
        </div>

        <label htmlFor="backstory">Backstory</label>
        <textarea id="backstory" placeholder="Backstory of your character"></textarea>

        <div className="form-buttons">
          <button type="submit"> + Create Character</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </section>
  )
}