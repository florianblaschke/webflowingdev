"use client";

import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { useEffect, useState } from "react";
import Slot from "./Slot";

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
  const { toast } = useToast();

  function rdmMove() {
    //Check for open slots
    const openSlots = field.filter((entry) => entry.slot === "");
    if (openSlots.length === 0) return;
    //Make move on open rdm slot
    const rdm = Math.floor(Math.random() * openSlots.length);
    const move = field.map((entry) => {
      if (entry.id === openSlots[rdm].id) {
        return { ...entry, slot: "O" };
      }
      return entry;
    });
    setField(move);
    setTurn(players.x);
  }

  function reset() {
    setTurn(players.x);
    setField(slots);
    setPlayerWon("");
    setWin(false);
  }
  useEffect(() => {
    winningCombos.forEach((array) => {
      const xWins = array.every((cell) => field[cell].slot === "X");
      const oWins = array.every((cell) => field[cell].slot === "O");
      let openSlots = field.filter((entry) => entry.slot === "");
      if (openSlots.length === 0 && !xWins && !oWins) {
        return toast({
          variant: "hulk",
          title: "That's a draw!",
          description: "You are on par with AI!",
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

      if (xWins) {
        setWinCount({ ...winCount, xCount: winCount.xCount + 1 });
        setWin(true);
        setPlayerWon("X");
        const x = toast({
          variant: "hulk",
          title: "You won!",
          description: "You are dominating!",
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
          title: "AI beat you!",
          description: "World domination is next!",
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

    if (turn === players.y) {
      //find all slots marked by X and O
      const slotsFromX = field.filter((entry) => entry.slot === "X");
      const slotsFromO = field.filter((entry) => entry.slot === "O");

      const win = winningCombos.some((array) => {
        const xWins = array.every((cell) => field[cell].slot === "X");
        const oWins = array.every((cell) => field[cell].slot === "O");
        if (xWins || oWins) return true;
      });
      if (win) return;
      //determine if X is near win
      let winningChancesX = winningCombos.map((arr) => {
        let comboBreak: number[] = [];
        arr.map((cell) => {
          let step = slotsFromX.find((slot) => slot.id === cell);
          if (step) comboBreak.push(step.id);
        });
        return comboBreak;
      });
      let winX = winningChancesX.some((entry) => entry.length === 2);
      //determine if O is near win
      let winningChancesO = winningCombos.map((arr) => {
        let winChance: number[] = [];
        arr.map((cell) => {
          let step = slotsFromO.find((slot) => slot.id === cell);
          if (step) winChance.push(step.id);
        });
        return winChance;
      });
      let winO = winningChancesO.some((entry) => entry.length === 2);

      //The Moves
      //Countermove
      if (winX) {
        const possibleCombos = winningChancesX.filter(
          (entry) => entry.length === 2
        );
        //Get missing Cell from all possible Combos
        const winCombs = winningCombos.map((arr) => {
          const stepsFromWin = possibleCombos.map((poss) => {
            return arr.filter((num) => num !== poss[0] && num !== poss[1]);
          });
          return stepsFromWin;
        });
        //Filter winCombs for length 1 to get field for Countermove
        const needToCounter = winCombs
          .map((entry) => entry.filter((cell) => cell.length === 1))
          .flat(2);
        //Check if needToCounter fields are open and set new Field
        const fieldsOpen = field
          .map((entry) => {
            return needToCounter.filter(
              (cell) => entry.id === cell && entry.slot === ""
            );
          })
          .flat();
        if (fieldsOpen.length === 0) {
          rdmMove();
        }
        if (fieldsOpen.length > 0) {
          const counterMove = field.map((entry) => {
            if (entry.id === fieldsOpen[0]) {
              return { ...entry, slot: "O" };
            }
            return entry;
          });
          setField(counterMove);
          setTurn(players.x);
        }
      }

      let slotTaken = true;
      //Move for win
      if (winO) {
        const possibleCombos = winningChancesO.filter(
          (entry) => entry.length === 2
        );
        //Get missing Cell from all possible Combos
        const winCombs = winningCombos.map((arr) => {
          const stepsFromWin = possibleCombos.map((poss) => {
            return arr.filter((num) => num !== poss[0] && num !== poss[1]);
          });
          return stepsFromWin;
        });
        //Filter winCombs for length 1 to get field for winning Move
        const possibleWin = winCombs
          .map((entry) => entry.filter((cell) => cell.length === 1))
          .flat(2);
        //Check if possibleWin fields are open and set new Field
        const slotsOpen = field.filter((entry) => entry.slot === "");
        slotTaken = slotsOpen.some((entry) => entry.id !== possibleWin[0]);
        if (slotTaken) {
          const fieldsOpen = field
            .map((entry) => {
              return possibleWin.filter(
                (cell) => entry.id === cell && entry.slot === ""
              );
            })
            .flat();
          if (fieldsOpen.length === 0) {
            rdmMove();
          }
          if (fieldsOpen.length > 0) {
            const goForWin = field.map((entry) => {
              if (entry.id === fieldsOpen[0]) {
                return { ...entry, slot: "O" };
              }
              return entry;
            });
            setField(goForWin);
            setTurn(players.x);
          }
        }
      }

      //Rdm move
      if (!winX && !winO && slotTaken) {
        rdmMove();
      }
    }
  }, [turn]);

  return (
    <>
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
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex flex-wrap gap-1 w-80 md:w-[24.5rem] p-0">
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
