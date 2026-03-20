//fetch races
export async function getRaces() {
  try {
    const response = await fetch("https://www.dnd5eapi.co/api/races");
    const data = await response.json();
    return data.results;
  } catch (error) {
    return [];
  }
}

//fetch classes
export async function getClasses() {
  try {
    const response = await fetch("https://www.dnd5eapi.co/api/classes");
    const data = await response.json();
    return data.results;
  } catch (error) {
    return [];
  }
}

//fetch spells
export async function getSpells(characterClass) {
  if (!characterClass) return [];
  try {
    const response = await fetch(
      `https://www.dnd5eapi.co/api/classes/${characterClass}/spells`,
    );
    const data = await response.json();
    return data.results || []; //if result is undefined it gives empty array
  } catch (error) {
    return [];
  }
}
