import "./CharacterForm.css";
import { useState, useEffect } from "react";
import { getRaces, getClasses, getSpells } from "../../api/dndApi";
import { useNavigate } from "react-router";

const formState = {
  characterName: "",
  characterRace: "",
  characterClass: "",
  characterSpells: [],
  characterStatus: "Active",
  level: 1,
  str: 10,
  dex: 10,
  con: 10,
  int: 10,
  wis: 10,
  cha: 10,
  backstory: "",
};

export default function CharacterForm({
  onSubmit,
  editingCharacter,
  onUpdate,
}) {
  const navigate = useNavigate();
  const [characterForm, setCharacterForm] = useState(formState);

  function formUpdate(event) {
    const { name, value } = event.target;
    setCharacterForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};
    if (!characterForm.characterName) {
      newErrors.characterName = "Character name is required";
    }
    if (!characterForm.characterClass) {
      newErrors.characterClass = "Class is required";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    if (editingCharacter) {
      onUpdate(characterForm);
    } else {
      onSubmit(characterForm);
    }
    setErrors({});
    setCharacterForm(formState);
    navigate("/characters");
  }

  function handleCancel() {
    setCharacterForm(formState);
    navigate("/characters");
  }

  function toggleSpell(spellName) {
    setCharacterForm((prev) => {
      const isSelected = prev.characterSpells.includes(spellName);

      if (isSelected) {
        const updatedSpells = prev.characterSpells.filter(
          (spell) => spell !== spellName,
        );
        return { ...prev, characterSpells: updatedSpells };
      } else {
        const updatedSpells = [...prev.characterSpells, spellName];
        return { ...prev, characterSpells: updatedSpells };
      }
    });
  }

  const [races, setRaces] = useState([]);
  const [classes, setClasses] = useState([]);
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const racesData = await getRaces();
      setRaces(racesData);

      const classesData = await getClasses();
      setClasses(classesData);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (characterForm.characterClass === "") {
      setSpells([]);
      return;
    }
    async function fetchData() {
      const spellsData = await getSpells(characterForm.characterClass);
      setSpells(spellsData);
    }
    fetchData();
  }, [characterForm.characterClass]);

  useEffect(() => {
    if (editingCharacter) {
      setCharacterForm(editingCharacter);
    }
  }, [editingCharacter]);

  const raceOptions = races.map((race) => (
    <option key={race.index} value={race.index}>
      {race.name}
    </option>
  ));

  const classOptions = classes.map((cls) => (
    <option key={cls.index} value={cls.index}>
      {cls.name}
    </option>
  ));

  const spellOptions = spells.slice(0, 20).map((spell) => (
    <span
      key={spell.index}
      onClick={() => toggleSpell(spell.name)}
      className={
        characterForm.characterSpells.includes(spell.name) ? "selected" : ""
      }
    >
      {spell.name}
    </span>
  ));

  return (
    <section className="form-section">
      <h2>{editingCharacter ? "Edit Character" : "Create New Character"}</h2>
      <form onSubmit={handleSubmit} className="character-form">
        <div>
          <label htmlFor="name">Character Name</label>
          <input
            onChange={formUpdate}
            value={characterForm.characterName}
            name="characterName"
            id="name"
            type="text"
            placeholder="Enter character name"
          />
          {errors.characterName && (
            <p className="error-message">{errors.characterName}</p>
          )}
        </div>

        <label htmlFor="race">Race</label>
        <select
          onChange={formUpdate}
          value={characterForm.characterRace}
          name="characterRace"
          id="race"
        >
          <option>Select race</option>
          {raceOptions}
        </select>

        <label htmlFor="class">Class</label>
        <select
          onChange={formUpdate}
          value={characterForm.characterClass}
          name="characterClass"
          id="class"
        >
          <option>Select class</option>
          {classOptions}
        </select>

        <div className="spells-container">
          <label>Spells</label>
          <div className="spells-list">
            {spells.length > 0 ? (
              spellOptions
            ) : characterForm.characterClass ? (
              <p>No spells for this class</p>
            ) : (
              <p>Select a class first</p>
            )}
          </div>
        </div>

        <label htmlFor="status">Status</label>
        <select
          onChange={formUpdate}
          value={characterForm.characterStatus}
          name="characterStatus"
          id="status"
        >
          <option>Active</option>
          <option>Deceased</option>
        </select>

        <label htmlFor="level">Level</label>
        <input
          onChange={formUpdate}
          value={characterForm.level}
          name="level"
          className="level"
          id="level"
          type="number"
          min="1"
          max="20"
        />

        <div className="stats-container">
          <label>
            STR(Strength)
            <input
              onChange={formUpdate}
              name="str"
              type="number"
              min="1"
              max="20"
              value={characterForm.str}
            />
          </label>
          <label>
            DEX(Dexterity)
            <input
              onChange={formUpdate}
              name="dex"
              type="number"
              min="1"
              max="20"
              value={characterForm.dex}
            />
          </label>
          <label>
            CON(Constitution)
            <input
              onChange={formUpdate}
              name="con"
              type="number"
              min="1"
              max="20"
              value={characterForm.con}
            />
          </label>
          <label>
            INT(Intelligence)
            <input
              onChange={formUpdate}
              name="int"
              type="number"
              min="1"
              max="20"
              value={characterForm.int}
            />
          </label>
          <label>
            WIS(Wisdom)
            <input
              onChange={formUpdate}
              name="wis"
              type="number"
              min="1"
              max="20"
              value={characterForm.wis}
            />
          </label>
          <label>
            CHA(Charisma)
            <input
              onChange={formUpdate}
              name="cha"
              type="number"
              min="1"
              max="20"
              value={characterForm.cha}
            />
          </label>
        </div>

        <label htmlFor="backstory">Backstory</label>
        <textarea
          onChange={formUpdate}
          value={characterForm.backstory}
          name="backstory"
          id="backstory"
          placeholder="Backstory of your character"
        ></textarea>

        <div className="form-buttons">
          <button type="submit">
            {" "}
            {editingCharacter ? "Save Changes" : "+ Create Character"}
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}
