import { Dispatch, JSXElementConstructor, SetStateAction } from "react";
import { players } from "./TicTacToe";
import { Circle, X } from "lucide-react";

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Icons: Record<string, JSX.Element | null> = {
  X: <X />,
  O: <Circle />,
  null: null,
};

export default function Slot({
  id,
  slot,
  setField,
  field,
  turn,
  setTurn,
  win,
}: {
  win: boolean;
  id: number;
  slot: string;
  setField: Dispatch<SetStateAction<typeof field>>;
  field: { id: number; slot: string }[];
  turn: {
    mark: string;
  };
  setTurn: Dispatch<SetStateAction<typeof turn>>;
}) {
  function handleClick() {
    const newField = field.map((entry) => {
      if (entry.id === id && entry.slot === "") {
        setTurn(turn === players.x ? players.y : players.x);
        return { ...entry, slot: turn.mark };
      }
      return entry;
    });
    setField(newField);
  }

  return (
    <div
      /* @ts-ignore */
      onClick={!win ? handleClick : null}
      className="w-[6.5rem] h-[6.5rem] md:w-32 md:h-32 bg-green-100 rounded flex justify-center items-center"
    >
      {Icons[slot]}
    </div>
  );
}
