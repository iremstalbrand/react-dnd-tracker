import CharacterCard from "../CharacterCard/CharacterCard";
import "./CharacterList.css";
import image from "../../assets/empty-list.jpg";

export default function CharacterList({
  characters,
  deleteCharacter,
  editCharacter,
}) {
  return (
    <section className="character-list-section">
      {characters.length > 0 ? (
        <div className="character-list">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              deleteCharacter={deleteCharacter}
              editCharacter={editCharacter}
            />
          ))}
        </div>
      ) : (
        <div className="empty-list">
          <img className="empty-image" src={image} alt="empty dnd party" />
          <div className="empty-overlay"></div>
          <div className="empty-content">
            <p>You don't have any characters yet.</p>
          </div>
        </div>
      )}
    </section>
  );
}
