import './Card.css';

const Card = (props) => {
  const { card, handleCardClick, flipped, disabled } = props;

  const handleButtonClick = () => {
    if (!disabled) {
      handleCardClick(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img src={card.src} className="front" alt="card front" />
        <img
          src="/img/cover.png"
          alt="card back"
          className="back"
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default Card;
