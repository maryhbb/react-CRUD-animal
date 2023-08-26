import "./List.css";

export default function List({ animals, onDeleteTag }) {
  return (
    <>
      <h2>Your animals:</h2>
      <ul className="animal-list">
        {animals.map((animal) => (
          <li key={animal.id} className="animal-list__item">
            <h3>{animal.name}</h3>
            <span aria-label="emoji" className="animal-list__emoji">
              {animal.emoji}
            </span>
            <button
              className="animal-list__item-button"
              type="button"
              aria-label="delete list item"
              onClick={() => onDeleteTag?.(animal)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
