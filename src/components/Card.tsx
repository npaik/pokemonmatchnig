import coverImg from "../assets/pokemoncardback.jpg";

// @ts-ignore
function Card({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!flipped && !disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card relative cursor-pointer" onClick={handleClick}>
      <div className={`${flipped ? "flipped" : ""}`}>
        <img
          src={card.img}
          alt={card.name}
          className="front absolute block w-full rounded-xl border-2 border-white"
        />
        <img
          src={coverImg}
          alt="card back"
          className="back block w-full rounded-xl border-2 border-white"
        />
      </div>
    </div>
  );
}

export default Card;
