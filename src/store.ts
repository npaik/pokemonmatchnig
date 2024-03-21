import { create } from "zustand";

export interface Card {
  id: `${string}-${string}-${string}-${string}-${string}`;
  name: string;
  img: string;
  matched: boolean;
}
interface GameState {
  cards: Card[];
  setCards: (cards: GameState["cards"]) => void;
  turns: number;
  setTurns: (turns: GameState["turns"]) => void;
  choiceOne: Card | null;
  setChoiceOne: (choiceOne: GameState["choiceOne"]) => void;
  choiceTwo: Card | null;
  setChoiceTwo: (choiceTwo: GameState["choiceTwo"]) => void;
  disabled: boolean;
  setDisabled: (disabled: GameState["disabled"]) => void;
}

const useStore = create<GameState>((set) => ({
  cards: [],
  setCards: (cards) => set({ cards }),
  turns: 0,
  setTurns: (turns) => set({ turns }),
  choiceOne: null,
  setChoiceOne: (choiceOne) => set({ choiceOne }),
  choiceTwo: null,
  setChoiceTwo: (choiceTwo) => set({ choiceTwo }),
  disabled: false,
  setDisabled: (disabled) => set({ disabled }),
}));

export default useStore;
