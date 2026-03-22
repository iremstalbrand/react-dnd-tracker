export default function CharacterCard({character})
{
  return (
    <section>
      <span>Name: {character.characterName} </span>
      <span>Race: {character.characterRace} </span>
      <span>Class: {character.characterClass}</span>
      <span>Spells: {character.characterSpells}</span>
      <span>Status: {character.characterStatus}</span>
      <div>
          <span>STR:{character.str} </span>
          <span>DEX: {character.dex}</span>
          <span>CON:{character.con}</span>
          <span>INT: {character.int} </span>
          <span>WIS: {character.wis}</span>
          <span>CHA: {character.cha} </span>
      </div>
      <span>Level: {character.level}</span>
      <span>Backstory: {character.backstory}</span>

      <div>
        <button>Edit Character</button>
        <button>Delete Character</button>
      </div>
  </section>
  )
}