// REVIEW: None of the API functions check response.ok before parsing JSON.
// A 404 or 500 response won't throw — it will silently return bad data.
// Add: if (!response.ok) throw new Error(`API error: ${response.status}`);

// REVIEW: Errors are silently swallowed (returning []). The user gets no feedback
// when the API is down. Consider surfacing errors to the UI (e.g. returning
// { data: [], error: "Failed to load" } or throwing and catching in the component).
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
