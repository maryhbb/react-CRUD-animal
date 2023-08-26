import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";
import { uid } from "uid";

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

export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);

  function handleAddAnimal(newAnimal) {
    console.log(newAnimal);

    setAnimals([...animals, { id: uid(), ...newAnimal }]);
  }

  const handelDeleteAnimal = (animalToDelete) => {
    setAnimals(animals.filter((animal) => animal !== animalToDelete));
  };

  return (
    <main className="app">
      <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} onDeleteTag={handelDeleteAnimal} />
    </main>
  );
}
