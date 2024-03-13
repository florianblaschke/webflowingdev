"use client";

import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { useEffect, useState } from "react";
import Slot from "./Slot";
import { sendGTMEvent } from "@next/third-parties/google";

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
  const [play, setPlay] = useState(false);
  const { toast } = useToast();

  function reset() {
    setTurn(players.x);
    setField(slots);
    setWin(false);
  }

  function rdmMove() {
    const openSlots = field.filter((entry) => entry.slot === "");
    if (openSlots.length === 0) return;
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

  function checkForWin() {
    const combo = winningCombos.filter(
      (array) =>
        array.every((cell) => field[cell].slot === "X") ||
        array.every((cell) => field[cell].slot === "O")
    );
    if (combo.length === 1) {
      const flatCombo = combo.flat();
      return field[combo.flat()[0]].slot === "X"
        ? { winner: "X", combo: flatCombo }
        : { winner: "O", combo: flatCombo };
    }
    return false;
  }

  function winningChance(
    slotsFrom: {
      id: number;
      slot: string;
    }[]
  ) {
    return winningCombos.map((arr) => {
      let comboBreak: number[] = [];
      arr.map((cell) => {
        let step = slotsFrom.find((slot) => slot.id === cell);
        if (step) comboBreak.push(step.id);
      });
      return comboBreak;
    });
  }

  function getMissingSlots(winChances: number[][]) {
    return winChances
      .map((entry) => {
        const combo = winningCombos.find(
          (combo) => combo.includes(entry[0]) && combo.includes(entry[1])
        );
        return combo?.filter((num) => num !== entry[0] && num !== entry[1]);
      })
      .flat();
  }

  function checkSlotsOpen(
    openSlots: typeof field,
    slotForWin: (number | undefined)[]
  ) {
    return openSlots
      .filter(
        (entry) =>
          entry.id === slotForWin[0] ||
          entry.id === slotForWin[1] ||
          entry.id === slotForWin[2]
      )
      .map((entry) => entry.id);
  }

  function move(slot: number) {
    return field.map((entry) => {
      if (entry.id === slot && entry.slot === "") {
        setTurn(players.x);
        return { ...entry, slot: turn.mark };
      }
      return entry;
    });
  }

  function animate(array: number[]) {
    const boxOne = document.getElementById(array[0].toString());
    const boxTwo = document.getElementById(array[1].toString());
    const boxThree = document.getElementById(array[2].toString());
    boxOne!.classList.add("animate-pulse");
    boxTwo!.classList.add("animate-pulse");
    boxThree!.classList.add("animate-pulse");
    setTimeout(() => {
      boxOne!.classList.remove("animate-pulse");
      boxTwo!.classList.remove("animate-pulse");
      boxThree!.classList.remove("animate-pulse");
    }, 3400);
  }

  useEffect(() => {
    const openSlots = field.filter((entry) => entry.slot === "");
    const isWin = checkForWin();

    if (isWin) {
      setWin(true);
      if (isWin.winner === "X") {
        animate(isWin.combo);
        toast({
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
      if (isWin.winner === "O") {
        animate(isWin.combo);
        toast({
          variant: "hulk",
          title: "AI won!",
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
    }
    if (openSlots.length === 0 && !isWin) {
      toast({
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

    if (turn === players.y && !isWin) {
      const slotsFromX = field.filter((entry) => entry.slot === "X");
      const slotsFromO = field.filter((entry) => entry.slot === "O");

      const winChanceX = winningChance(slotsFromX).filter(
        (entry) => entry.length === 2
      );
      const winChanceO = winningChance(slotsFromO).filter(
        (entry) => entry.length === 2
      );
      setTimeout(() => {
        if (winChanceX.length >= 1 || winChanceO.length >= 1) {
          const slotsForXWin = getMissingSlots(winChanceX);
          const slotsForOWin = getMissingSlots(winChanceO);
          const slotsNeedToCounter = checkSlotsOpen(openSlots, slotsForXWin);
          const slotsToWin = checkSlotsOpen(openSlots, slotsForOWin);
          if (slotsToWin.length >= 1) {
            const winningMove = move(slotsToWin[0]);
            return setField(winningMove);
          }
          if (slotsNeedToCounter.length >= 1) {
            const counterMove = move(slotsNeedToCounter[0]);
            return setField(counterMove);
          }
        }
        rdmMove();
      }, 400);
    }
  }, [turn]);

  return (
    <>
      {!play && (
        <div className="pt-10 ">
          <Button
            onClick={() => {
              sendGTMEvent({
                event: "game",
                value: "start",
              });
              setPlay(!play);
            }}
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
              sendGTMEvent({
                event: "game",
                value: "end",
              });
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
