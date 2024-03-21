import useStore, { Card } from "../store";
import coverImg from "../assets/pokemoncardback.jpg";

function Card({ card, flipped }: { card: Card; flipped: boolean }) {
  const [choiceOne, setChoiceOne, setChoiceTwo, disabled] = useStore(
    (state) => [
      state.choiceOne,
      state.setChoiceOne,
      state.setChoiceTwo,
      state.disabled,
    ]
  );
  const handleClick = () => {
    if (disabled) return;
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };
  return (
    <div className="card relative cursor-pointer">
      <div className={flipped ? "flipped" : ""}>
        <img
          src={card.img}
          alt={card.name}
          className="front absolute block w-full rounded-xl border-2 border-white"
        />
        <img
          src={coverImg}
          alt="card back"
          className="back block w-full rounded-xl border-2 border-white"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
export default Card;
