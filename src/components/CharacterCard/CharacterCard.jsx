import "./CharacterCard.css";
import { useNavigate } from "react-router";
import { useState } from "react";
export default function CharacterCard({
  character,
  deleteCharacter,
  editCharacter,
}) {
  const navigate = useNavigate();

  function handleEdit() {
    editCharacter(character);
    navigate("/create");
  }

  const [confirmDelete, setConfirmDelete] = useState(false);

  function handleDelete() {
    if (confirmDelete) {
      deleteCharacter(character.id);
    } else {
      setConfirmDelete(true);
    }
  }
  return (
    <section className="character-card">
      <div className="card-header">
        <div>
          <h3>{character.characterName} </h3>
          <p>
            {character.characterRace} · {character.characterClass} ·{" "}
            {character.characterStatus}
          </p>
        </div>
        <span className="level-badge">{character.level}</span>
      </div>
      <div className="card-content">
        <div className="card-stats">
          <h4> ABILITIES</h4>
          <div className="stats-grid">
            <div className="stat-item">
              <span>STR </span> <span>{character.str} </span>
            </div>
            <div className="stat-item">
              <span>DEX </span> <span>{character.dex}</span>
            </div>
            <div className="stat-item">
              <span>CON </span> <span>{character.con}</span>
            </div>
            <div className="stat-item">
              <span>INT </span> <span> {character.int} </span>
            </div>
            <div className="stat-item">
              <span>WIS </span> <span>{character.wis}</span>
            </div>
            <div className="stat-item">
              <span>CHA </span> <span>{character.cha} </span>
            </div>
          </div>
        </div>

        {character.characterSpells.length > 0 && (
          <div className="card-spells">
            <h4> SPELLS</h4>
            <div className="spells-list">
              {character.characterSpells.map((spell) => (
                <span key={spell} className="spell-badge">
                  {spell}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="card-backstory">
          <h4>BACKSTORY</h4>
          <p>{character.backstory}</p>
        </div>
      </div>

      <div className="card-buttons">
        <button
          onClick={handleEdit}
          aria-label={`Edit ${character.characterName}`}
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          aria-label={`Delete ${character.characterName}`}
        >
          {confirmDelete ? "Are you sure?" : "Delete"}
        </button>
      </div>
    </section>
  );
}
