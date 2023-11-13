import Game from "./Games/TicTacToe/TicTacToe";

export default function GameSection() {
  return (
    <section className="min-h-fit pb-10 flex flex-col justify-center items-center">
      <h3 className="p-10 text-5xl font-medium tracking-tighter bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent">
        While you are here
      </h3>
      <Game />
    </section>
  );
}
