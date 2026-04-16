import "./SpellList.css";
export default function SpellList({
  spells,
  characterSpells,
  toggleSpell,
  characterClass,
}) {
  // REVIEW: This early return checks spells.length === 0, which means the
  // "No spells for this class" message on line 26 can never be reached — the
  // component returns null before getting there. Remove the spells.length check
  // from the guard so the fallback text can render.
  if (!characterClass || spells.length === 0) return null;
  // REVIEW: The <span> elements act as buttons but are not keyboard accessible.
  // They have no tabIndex, role="button", or onKeyDown handler. Keyboard-only
  // users can't select spells. Use <button> elements instead, or add
  // tabIndex={0}, role="button", and an onKeyDown handler for Enter/Space.
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
