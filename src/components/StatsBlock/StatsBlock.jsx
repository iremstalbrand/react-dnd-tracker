import "./StatsBlock.css";
// REVIEW: The stat inputs have no min/max attributes. Users can type any number
// and only see a validation error on form submit. Add min={1} max={20} to each
// input for immediate browser-level feedback.
// REVIEW: Label text like "STR(Strength)" is missing a space before the
// parenthesis — should be "STR (Strength)" for better readability.
export default function StatsBlock({ characterForm, formUpdate }) {
  return (
    <div className="stats-container">
      <label>
        STR(Strength)
        <input
          onChange={formUpdate}
          name="str"
          type="number"
          value={characterForm.str}
        />
      </label>
      <label>
        DEX(Dexterity)
        <input
          onChange={formUpdate}
          name="dex"
          type="number"
          value={characterForm.dex}
        />
      </label>
      <label>
        CON(Constitution)
        <input
          onChange={formUpdate}
          name="con"
          type="number"
          value={characterForm.con}
        />
      </label>
      <label>
        INT(Intelligence)
        <input
          onChange={formUpdate}
          name="int"
          type="number"
          value={characterForm.int}
        />
      </label>
      <label>
        WIS(Wisdom)
        <input
          onChange={formUpdate}
          name="wis"
          type="number"
          value={characterForm.wis}
        />
      </label>
      <label>
        CHA(Charisma)
        <input
          onChange={formUpdate}
          name="cha"
          type="number"
          value={characterForm.cha}
        />
      </label>
    </div>
  );
}
