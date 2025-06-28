import { FaPlus } from "react-icons/fa";
import "./AddCardButton.css";

export default function AddCardButton({ onClick }) {
  return (
    <button className="add-card-btn" onClick={onClick} title="Add Card">
      <FaPlus />
    </button>
  );
}
