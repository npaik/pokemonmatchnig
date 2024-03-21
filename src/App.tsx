import Alakazam from "./assets/Alakazam.jpg";
import Articuno from "./assets/Articuno.jpg";
import Burbasaur from "./assets/Burbasaur.jpg";
import Chansey from "./assets/Chansey.jpg";
import Charmander from "./assets/Charmander.jpg";
import Dragonite from "./assets/Dragonite.jpg";
import Dratini from "./assets/Dratini.jpg";
import Eevee from "./assets/Eevee.jpg";
import Flareon from "./assets/Flareon.jpg";
import Gengar from "./assets/Gengar.jpg";
import Gyarados from "./assets/Gyarados.jpg";
import Jolteon from "./assets/Jolteon.jpg";
import Machamp from "./assets/Machamp.jpg";
import Meowth from "./assets/Meowth.jpg";
import Mew from "./assets/Mew.jpg";
import Mewtwo from "./assets/Mewtwo.jpg";
import Moltres from "./assets/Moltres.jpg";
import Nidoking from "./assets/Nidoking.jpg";
import Nidoqueen from "./assets/Nidoqueen.jpg";
import Pikachu from "./assets/Pikachu.jpg";
import Raichu from "./assets/Raichu.jpg";
import Snorlax from "./assets/Snorlax.jpg";
import Squirtle from "./assets/Squirtle.jpg";
import Vaporeon from "./assets/Vaporeon.jpg";
import Zapdos from "./assets/Zapdos.jpg";

import useStore from "./store";
import Card from "./components/Card";
import { useEffect } from "react";

const cardImages = [
  {
    name: "Alakazam",
    img: Alakazam,
    matched: false,
  },
  {
    name: "Articuno",
    img: Articuno,
    matched: false,
  },
  {
    name: "Burbasaur",
    img: Burbasaur,
    matched: false,
  },
  {
    name: "Chansey",
    img: Chansey,
    matched: false,
  },
  {
    name: "Charmander",
    img: Charmander,
    matched: false,
  },
  {
    name: "Dragonite",
    img: Dragonite,
    matched: false,
  },
  {
    name: "Dratini",
    img: Dratini,
    matched: false,
  },
  {
    name: "Eevee",
    img: Eevee,
    matched: false,
  },
  {
    name: "Flareon",
    img: Flareon,
    matched: false,
  },
  {
    name: "Gengar",
    img: Gengar,
    matched: false,
  },
  {
    name: "Gyarados",
    img: Gyarados,
    matched: false,
  },
  {
    name: "Jolteon",
    img: Jolteon,
    matched: false,
  },
  {
    name: "Machamp",
    img: Machamp,
    matched: false,
  },
  {
    name: "Meowth",
    img: Meowth,
    matched: false,
  },
  {
    name: "Mew",
    img: Mew,
    matched: false,
  },
  {
    name: "Mewtwo",
    img: Mewtwo,
    matched: false,
  },
  {
    name: "Moltres",
    img: Moltres,
    matched: false,
  },
  {
    name: "Nidoking",
    img: Nidoking,
    matched: false,
  },
  {
    name: "Nidoqueen",
    img: Nidoqueen,
    matched: false,
  },
  {
    name: "Pikachu",
    img: Pikachu,
    matched: false,
  },
  {
    name: "Raichu",
    img: Raichu,
    matched: false,
  },
  {
    name: "Snorlax",
    img: Snorlax,
    matched: false,
  },
  {
    name: "Squirtle",
    img: Squirtle,
    matched: false,
  },
  {
    name: "Vaporeon",
    img: Vaporeon,
    matched: false,
  },
  {
    name: "Zapdos",
    img: Zapdos,
    matched: false,
  },
];

function App() {
  const [
    cards,
    setCards,
    turns,
    setTurns,
    choiceOne,
    setChoiceOne,
    choiceTwo,
    setChoiceTwo,
    setDisabled,
  ] = useStore((state) => [
    state.cards,
    state.setCards,
    state.turns,
    state.setTurns,
    state.choiceOne,
    state.setChoiceOne,
    state.choiceTwo,
    state.setChoiceTwo,
    state.setDisabled,
  ]);

  const shuffleCards = () => {
    const selectedCards = cardImages
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);

    const shuffledCards = [...selectedCards, ...selectedCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: crypto.randomUUID() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log({
    cards,
    turns,
  });
  const checkMatch = () => {
    if (!(choiceOne && choiceTwo)) {
      return;
    }
    setDisabled(true);
    const isMatch = choiceOne?.img === choiceTwo?.img;
    if (isMatch) {
      setCards(
        cards.map((card) => {
          return card.img === choiceOne?.img
            ? { ...card, matched: true }
            : card;
        })
      );
    }

    setTimeout(() => {
      resetTurn();
    }, 1000);
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(turns + 1);
    setTimeout(() => setDisabled(false), 40);
  };

  useEffect(() => {
    checkMatch();
    console.log(cards);
  }, [choiceTwo]);

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="p-10 text-center">
      <button
        className="rounded-lg border-2 border-white p-2 transition-colors hover:bg-pink-500"
        onClick={shuffleCards}
      >
        New Game
      </button>
      <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
        {cards.map((card) => {
          const props = {
            card,
            flipped: card === choiceOne || card === choiceTwo || card.matched,
          };
          return <Card key={card.id} {...props} />;
        })}
      </div>
      <div className="mt-10">
        <p className="text-2xl">Turns: {turns}</p>
      </div>
    </div>
  );
}

export default App;
