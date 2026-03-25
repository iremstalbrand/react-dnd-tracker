import CharacterCard from "../CharacterCard/CharacterCard";
import "./CharacterList.css";
export default function CharacterList({
  characters,
  deleteCharacter,
  editCharacter,
}) {
  return (
    <section className="character-list">
      {characters.length > 0 ? (
        characters.map((character) => (
          <section key={character.id}>
            {" "}
            <CharacterCard
              character={character}
              deleteCharacter={deleteCharacter}
              editCharacter={editCharacter}
            />{" "}
          </section>
        ))
      ) : (
        <p>You don't have any characters yet.</p>
      )}
    </section>
  );
}
