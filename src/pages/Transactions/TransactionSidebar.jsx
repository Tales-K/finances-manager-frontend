import { TransactionCard, AddCardButton } from "../../components";
import "./TransactionSidebar.css";

export default function TransactionSidebar({ 
  cards, 
  onAddCard, 
  position = "left" 
}) {
  return (
    <div className={`sidebar ${position}-sidebar`}>
      {cards.map((card) => (
        <TransactionCard key={card.id} {...card} />
      ))}
      <AddCardButton onClick={onAddCard} />
    </div>
  );
}
