export async function getRaces() {
  const response = await fetch("https://www.dnd5eapi.co/api/races");
  const data = await response.json();
  return data.results;
}

export async function getClasses() {
  const response = await fetch("https://www.dnd5eapi.co/api/classes");
  const data = await response.json();
  return data.results;
}

export async function getSpells(characterClass) {
  const response = await fetch(
    `https://www.dnd5eapi.co/api/classes/${characterClass}/spells`,
  );
  const data = await response.json();
  return data.results;
}
