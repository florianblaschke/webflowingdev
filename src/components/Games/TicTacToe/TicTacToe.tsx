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

  function reset() {
    setWin(false);
    setPlayerWon("");
    setField(slots);
  }
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

    if (win) return;
    if (turn === players.y) {
      //find all slots marked by X
      const slotsFromX = field.filter((entry) => entry.slot === "X");
      //determine if X is near win and make move if necessary
      let globalCombo: number[] = [];

      winningCombos.forEach((arr) => {
        console.log("i am checking for winning combos for x");
        let comboBreak: number[] = [];
        arr.map((cell) => {
          let step = slotsFromX.find((slot) => slot.id === cell);
          if (step) comboBreak.push(step.id);
          //break line if x has 2
          if (comboBreak.length === 2) {
            // get cell from Combo which is not taken || cell is e.g 0 || arr is [0,1,2] || comboBreak is [0,1]
            const missingCell = arr.filter(
              (num) => num !== comboBreak[0] && num !== comboBreak[1]
            );
            //ai makes turn
            const aiTurn = field.map((entry) => {
              if (entry.id === missingCell[0]) {
                setTurn(players.x);
                return { ...entry, slot: "O" };
              }
              return entry;
            });
            return setField(aiTurn);
          }
        });
        globalCombo = comboBreak;
        if (comboBreak.length === 2) return;
      });

      //ai move if no combo
      const slotsFromO = field.filter((entry) => entry.slot === "O");
      //check if ai has a chance to win
      if (globalCombo.length < 1) {
        console.log("i am checking if I can win");
        winningCombos.forEach((arr) => {
          arr.map((cell) => {
            let winChance: number[] = [];
            let step = slotsFromO.find((slot) => slot.id === cell);
            console.log("step", step);
            if (step) winChance.push(step.id);
            //go for Win
            if (winChance.length === 2) {
              console.log("i try to win");
              console.log("winchance", winChance);
              const missingCell = arr.filter(
                (num) => num !== winChance[0] && num !== winChance[1]
              );
              const checkForTaken = field.find(
                (entry) => entry.id === missingCell[0]
              );
              if (checkForTaken?.slot === "") {
                const aiWinsTurn = field.map((entry) => {
                  if (entry.id === missingCell[0] && entry.slot === "") {
                    return { ...entry, slot: "O" };
                  }
                  return entry;
                });
                setField(aiWinsTurn);
              }
            }
          });
        });
      }
      //no chance winning or no need to defend
      const checkForEmptySlots = field.filter((entry) => entry.slot === "");
      let rdmNum = Math.floor(Math.random() * checkForEmptySlots.length);
      console.log("rdmNum", rdmNum);
      console.log("emptySlots", checkForEmptySlots);
      const newField = field.map((entry) => {
        if (entry.id === checkForEmptySlots[rdmNum].id) {
          return { ...entry, slot: "O" };
        }
        return entry;
      });
      setField(newField);
      setTurn(players.x);
    }
  }, [field]);

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
