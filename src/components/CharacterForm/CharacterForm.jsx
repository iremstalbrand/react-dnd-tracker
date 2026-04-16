import "./CharacterForm.css";
import { useState, useEffect } from "react";
import { getRaces, getClasses, getSpells } from "../../api/dndApi";
import { useNavigate } from "react-router";
import StatsBlock from "../StatsBlock/StatsBlock";
import SpellList from "../SpellList/SpellList";

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
  // --------- STATE ---------

  const navigate = useNavigate();
  const [characterForm, setCharacterForm] = useState(formState);
  const [errors, setErrors] = useState({});

  // --------- HANDLERS ---------

  function formUpdate(event) {
    const { name, value } = event.target;
    setCharacterForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
    const statNames = ["str", "dex", "con", "int", "wis", "cha"];
    if (statNames.includes(name) && errors.stats) {
      setErrors((prev) => ({
        ...prev,
        stats: "",
      }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};
    if (!characterForm.characterName) {
      newErrors.characterName = "Character name is required";
    }
    if (!characterForm.characterClass) {
      newErrors.characterClass = "Class is required";
    }
    if (!characterForm.characterRace) {
      newErrors.characterRace = "Race is required";
    }
    const stats = ["str", "dex", "con", "int", "wis", "cha"];
    stats.forEach((stat) => {
      if (!Number.isInteger(Number(characterForm[stat]))) {
        newErrors.stats = "Stats must be whole numbers";
        return;
      }
      if (Number(characterForm[stat]) < 1 || Number(characterForm[stat]) > 20) {
        newErrors.stats = "All stats must be between 1 and 20";
      }
    });
    if (!Number.isInteger(Number(characterForm.level))) {
      newErrors.level = "Level must be a whole number";
    } else if (
      Number(characterForm.level) > 20 ||
      Number(characterForm.level) < 1
    ) {
      newErrors.level = "Level must be between 1 and 20";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTimeout(() => {
        const errorElement = document.querySelector(".error-message");
        if (errorElement) {
          errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
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

  // --------- API ---------

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

  // REVIEW: When the user changes class, new spells are fetched but previously
  // selected spells (from the old class) remain in characterSpells. Those orphaned
  // spells won't show in the new spell list so the user can't deselect them, and
  // they'll be saved with the character. Clear characterSpells when the class changes.
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

  // --------- OPTIONS ---------

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

  return (
    <section className="form-section">
      <h2>{editingCharacter ? "Edit Character" : "Create New Character"}</h2>
      <form
        onSubmit={handleSubmit}
        className="character-form"
        aria-label="Character creation form"
      >
        <div>
          <label htmlFor="name">Character Name</label>
          <input
            onChange={formUpdate}
            value={characterForm.characterName}
            name="characterName"
            id="name"
            type="text"
            placeholder="Enter character name"
            maxLength={20}
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
          <option value="">Select race</option>
          {raceOptions}
        </select>
        {errors.characterRace && (
          <p className="error-message">{errors.characterRace}</p>
        )}

        <label htmlFor="class">Class</label>
        <select
          onChange={formUpdate}
          value={characterForm.characterClass}
          name="characterClass"
          id="class"
        >
          <option value="">Select class</option>
          {classOptions}
        </select>
        {errors.characterClass && (
          <p className="error-message">{errors.characterClass}</p>
        )}
        <SpellList
          spells={spells}
          characterSpells={characterForm.characterSpells}
          toggleSpell={toggleSpell}
          characterClass={characterForm.characterClass}
        />

        <label htmlFor="status">Status</label>
        {/* REVIEW: These <option> elements are missing explicit value attributes.
            They work by coincidence (the text content becomes the value), but
            it's better practice to set value="Active" and value="Deceased" explicitly. */}
        <select
          onChange={formUpdate}
          value={characterForm.characterStatus}
          name="characterStatus"
          id="status"
        >
          <option>Active</option>
          <option>Deceased</option>
        </select>

        {/* REVIEW: The level input has no min/max attributes. Users can type 999
            and only see an error on submit. Add min={1} max={20} for immediate
            browser-level constraint, alongside your existing validation. */}
        <label htmlFor="level">Level</label>
        <input
          onChange={formUpdate}
          value={characterForm.level}
          name="level"
          className="level"
          id="level"
          type="number"
        />
        {errors.level && <p className="error-message">{errors.level}</p>}
        <StatsBlock characterForm={characterForm} formUpdate={formUpdate} />
        {errors.stats && <p className="error-message">{errors.stats}</p>}
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
