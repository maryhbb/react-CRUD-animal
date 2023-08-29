import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index";
import List from "./components/List/index";
import { uid } from "uid";
import {
  getAnimalsFromLocalStorage,
  setAnimalsToLocalStorage,
  initialAnimals,
} from "./animals";

export default function App() {
  const [animals, setAnimals] = useState(
    getAnimalsFromLocalStorage() ?? initialAnimals,
  );

  function handleAddAnimal(newAnimal) {
    setAnimals(prev =>
      setAnimalsToLocalStorage([...prev, { id: uid(), ...newAnimal }]),
    );
  }

  const handelDeleteAnimal = animalToDelete => {
    setAnimals(prev =>
      setAnimalsToLocalStorage(
        prev.filter(animal => animal !== animalToDelete),
      ),
    );
  };

  return (
    <main className="app">
      <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} onDeleteTag={handelDeleteAnimal} />
    </main>
  );
}
