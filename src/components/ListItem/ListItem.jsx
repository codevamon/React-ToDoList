import "./index.css";

export default function ListItem({ itemIdx, text, onDeleteClick }) {
  return (
    <span>
      <li key={itemIdx}>{text}</li>
      <button className="delete-button" onClick={onDeleteClick}>
        X
      </button>
    </span>
  );
}
