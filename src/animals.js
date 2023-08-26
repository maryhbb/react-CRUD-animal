const initialAnimals = [
  {
    id: "mTBErig",
    name: "Octopus",
    emoji: "🐙",
  },
  {
    id: "iMsbXQ1",
    name: "Crocodile",
    emoji: "🐊",
  },
  {
    id: "Qjf_K7V",
    name: "Beaver",
    emoji: "🦫",
  },
];

const key = "animals";

export function initializeAnimals() {
  localStorage.getItem(key) === null &&
    setAnimalsToLocalStorage(initialAnimals);
}

export function getAnimalsFromLocalStorage() {
  return JSON.parse(localStorage.getItem(key)) ?? [];
}

export function setAnimalsToLocalStorage(animals) {
  localStorage.setItem(key, JSON.stringify(animals));
  return animals;
}
