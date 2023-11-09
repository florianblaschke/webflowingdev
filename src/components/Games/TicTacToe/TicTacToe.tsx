"use client";

import { useEffect, useState } from "react";
import Slot from "./Slot";
import { Button } from "@/components/ui/Button";
import { toast, useToast } from "@/components/ui/Use-toast";
import { ToastAction } from "@radix-ui/react-toast";

const slots = Array.from({ length: 9 }).map((x, i) => ({ id: i, slot: "" }));

export const players = {
  x: { mark: "X" },
  y: { mark: "O" },
};

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

export default function Game() {
  const [turn, setTurn] = useState(players.x);
  const [field, setField] = useState(slots);
  const [win, setWin] = useState(false);
  const [winCount, setWinCount] = useState({ xCount: 0, oCount: 0 });
  const [playerWon, setPlayerWon] = useState("");
  const [play, setPlay] = useState(false);
  const { toast, toasts } = useToast();

  useEffect(() => {
    winningCombos.forEach((array) => {
      let xWins = array.every((cell) => field[cell].slot === "X");
      let oWins = array.every((cell) => field[cell].slot === "O");
      if (xWins) {
        setWinCount({ ...winCount, xCount: winCount.xCount + 1 });
        setWin(true);
        setPlayerWon("X");
        const x = toast({
          variant: "hulk",
          title: "X won!",
          description: "X is dominating!",
          action: (
            <ToastAction
              altText="New Round"
              onClick={() => {
                setPlay(true);
                reset();
              }}
            >
              New Round?
            </ToastAction>
          ),
        });
      }
      if (oWins) {
        setWinCount({ ...winCount, oCount: winCount.oCount + 1 });
        setWin(true);
        setPlayerWon("O");
        const x = toast({
          variant: "hulk",
          title: "O won!",
          description: "O gives X a shellacking!",
          action: (
            <ToastAction
              altText="New Round"
              onClick={() => {
                setPlay(true);
                reset();
              }}
            >
              New Round?
            </ToastAction>
          ),
        });
      }
    });
  }, [field]);

  function reset() {
    setWin(false);
    setPlayerWon("");
    setField(slots);
  }

  return (
    <>
      {/*   <Button
        className="bg-black border-green-100 border"
        onClick={() => console.log(toasts)}
      >
        <span className="from-green-300 to-green-200 bg-clip-text bg-gradient-to-br text-transparent">
          Show me Toast
        </span>
      </Button> */}
      {!play && (
        <div>
          <Button
            onClick={() => setPlay(!play)}
            className="bg-black border-green-100 border"
          >
            <span className="from-green-300 to-green-200 bg-clip-text bg-gradient-to-br text-transparent">
              Play a game?
            </span>
          </Button>
        </div>
      )}
      {play && (
        <div className="flex  flex-col items-center justify-center gap-2">
          <div className="flex flex-wrap gap-1 w-[24.5rem] p-0">
            {field.map((entry) => (
              <Slot
                key={entry.id}
                id={entry.id}
                slot={entry.slot}
                setField={setField}
                field={field}
                turn={turn}
                setTurn={setTurn}
                win={win}
              />
            ))}
          </div>
          <Button onClick={reset} className="bg-black border-green-100 border">
            <span className="from-green-300 to-green-200 bg-clip-text bg-gradient-to-br text-transparent">
              Reset
            </span>
          </Button>
          <Button
            onClick={() => {
              reset(), setPlay(false);
            }}
            className="bg-black border-green-100 border"
          >
            <span className="from-green-300 to-green-200 bg-clip-text bg-gradient-to-br text-transparent">
              Stop playing
            </span>
          </Button>
        </div>
      )}
    </>
  );
}
