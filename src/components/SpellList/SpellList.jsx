import "./SpellList.css";
export default function SpellList({
  spells,
  characterSpells,
  toggleSpell,
  characterClass,
}) {
  const spellOptions = spells.slice(0, 20).map((spell) => (
    <span
      key={spell.index}
      onClick={() => toggleSpell(spell.name)}
      className={characterSpells.includes(spell.name) ? "selected" : ""}
    >
      {spell.name}
    </span>
  ));

  return (
    <div className="spells-container">
      <label>Spells</label>
      <div className="spells-list">
        {spells.length > 0 ? (
          spellOptions
        ) : characterClass ? (
          <p>No spells for this class</p>
        ) : (
          <p>Select a class first</p>
        )}
      </div>
    </div>
  );
}
