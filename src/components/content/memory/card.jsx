import jsBadge from "./assets/js-badge.svg";

function Card({ card, onClick }) {

  return (
    <div
      className={`memory-card${card.isFlipped ? " flip" : ""}`}
      onClick={onClick}
      style={{ order: card.order }}
      data-testid={card.id}
    >
      <img className="front-face" {...card.image} alt="Card" />
      <img className="back-face" {...jsBadge} alt="JS Badge" />
    </div>
  );
}

export default Card;
