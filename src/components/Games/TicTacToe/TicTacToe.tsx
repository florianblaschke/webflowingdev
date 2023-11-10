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
    if (win) return;
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

    if (turn === players.y && !win) {
      //find all slots marked by X and O
      const slotsFromX = field.filter((entry) => entry.slot === "X");
      const slotsFromO = field.filter((entry) => entry.slot === "O");

      //determine if X is near win
      let winningChancesX = winningCombos.map((arr) => {
        let comboBreak: number[] = [];
        arr.map((cell, i) => {
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
        //Get missing Cell from all possible Combos - does not work
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

        console.log("need", needToCounter);
        //Check if needToCounter fields are open and set new Field
        const counterMove = field.map((entry) => {});

        /*   setField(counterMove);
        setTurn(players.x); */
        console.log(counterMove);
      }
      //break line if x has 2
      /*   if (comboBreak.length === 2) {
            console.log("I found a winnig combo");
            combo = true;
            // get cell from Combo which is not taken || cell is e.g 0 || arr is [0,1,2] || comboBreak is [0,1]
            const missingCell = arr.filter(
              (num) => num !== comboBreak[0] && num !== comboBreak[1]
            );
            console.log("missing", missingCell);
            //ai makes turn
            const aiTurn = field.map((entry) => {
              if (entry.id === missingCell[0]) {
                setTurn(players.x);
                console.log("i set new Field");
                return { ...entry, slot: "O" };
              }
              return entry;
            });
            return setField(aiTurn);
          }
        });
        console.log("I set globalCombo", globalCombo);
        globalCombo = comboBreak; */

      //ai move if no combo
      /*  const slotsFromO = field.filter((entry) => entry.slot === "O");
      //check if ai has a chance to win
      if (globalCombo.length < 1) {
        winningCombos.forEach((arr) => {
          arr.map((cell) => {
            let winChance: number[] = [];
            let step = slotsFromO.find((slot) => slot.id === cell);
            if (step) winChance.push(step.id);
            //go for Win
            if (winChance.length === 2) {
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
      if (globalCombo.length !== 2) {
        console.log("i am in rdmfield");
        const checkForEmptySlots = field.filter((entry) => entry.slot === "");
        let rdmNum = Math.floor(Math.random() * checkForEmptySlots.length);
        const newField = field.map((entry) => {
          if (entry.id === checkForEmptySlots[rdmNum].id) {
            return { ...entry, slot: "O" };
          }
          return entry;
        });
        setField(newField);
        setTurn(players.x);
      } */
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

/* const cell = arr.map((num) => {
  let solution: any = [];
  possibleCombos.map((poss) => {
    if (num !== poss[0] && num !== poss[1]) {
      return solution.push(num);
    }
    return solution;
  });
  return solution; */
