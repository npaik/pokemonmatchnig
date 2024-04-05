import { useState, useEffect } from "react";
import Card from "./components/Card";

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
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [pairs, setPairs] = useState(4);
  const [score, setScore] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = (selectedPairs = pairs) => {
    const shuffledCards = [...cardImages]
      .sort(() => Math.random() - 0.5)
      .slice(0, selectedPairs)
      .map((card) => ({ ...card, id: Math.random() }))
      .flatMap((card) => [card, { ...card, id: Math.random() }])
      .sort(() => Math.random() - 0.5);

    setChoiceOne(null);
    setChoiceTwo(null);
    // @ts-ignore
    setCards(shuffledCards);
    setScore(0);
  };

  useEffect(() => {
    shuffleCards();
  }, [pairs]);

  // @ts-ignore
  const handleSetPairs = (numPairs) => {
    setPairs(numPairs);
    shuffleCards(numPairs);
  };

  const checkMatch = () => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      // @ts-ignore
      if (choiceOne.img === choiceTwo.img) {
        setScore((prevScore) => prevScore + 10);
        // @ts-ignore
        setCards((prevCards) => {
          return prevCards.map((card) => {
            // @ts-ignore
            if (card.img === choiceOne.img) {
              // @ts-ignore
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurns();
      } else {
        setTimeout(() => resetTurns(), 1000);
      }
    }
  };

  const resetTurns = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };

  // @ts-ignore
  const cardClicked = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      checkMatch();
    }
  }, [choiceOne, choiceTwo]);

  const gridSize = pairs === 4 ? "large" : pairs === 6 ? "medium" : "small";

  const cardStyle = {
    large: { width: "calc(100% - 10px)", fontSize: "1rem" },
    medium: { width: "calc(75% - 10px)", fontSize: "0.9rem" },
    small: { width: "calc(60% - 10px)", fontSize: "0.8rem" },
  }[gridSize];

  return (
    <div className="p-10 text-center">
      <div className="grid-buttons">
        <button onClick={() => handleSetPairs(4)} className="game-size-btn">
          Easy
        </button>
        <button onClick={() => handleSetPairs(6)} className="game-size-btn">
          Medium
        </button>
        <button onClick={() => handleSetPairs(8)} className="game-size-btn">
          Hard
        </button>
      </div>
      <button onClick={() => shuffleCards()} className="new-game-btn">
        New Game
      </button>
      <div className="mt-10">
        <p className="text-2xl">Score: {score}</p>{" "}
      </div>
      <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
        {cards.map((card) => (
          // @ts-ignore
          <div style={cardStyle} className="card-container" key={card.id}>
            <Card
              // @ts-ignore
              key={card.id}
              card={card}
              handleChoice={cardClicked}
              // @ts-ignore
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
