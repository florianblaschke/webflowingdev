const shorts = Array.from({ length: 15 }).map((x, i) => ({
  id: i,
  short: i + 1,
}));

const ShortCard = ({ short }: { short: number }) => {
  return (
    <div className="flex justify-center items-center rounded-sm p-2 relative h-60 w-20 border min-w-max">
      <span className="absolute rotate-90 font-light top-1 right-1">...</span>
      <div className="flex flex-col  items-start w-20 min-w-max">
        <span>This is Short {short}</span>
        <span>{short} Aufrufe</span>
      </div>
    </div>
  );
};

export default function Shorts() {
  return (
    <>
      <section className="flex flex-col items-start min-h-fit w-full p-2">
        <h2 className="font-semibold">Shorts</h2>
        <div className="flex items-center overflow-x-scroll min-h-fit w-screen gap-2 scrollbar-hide scroll-smooth">
          {shorts.map((entry) => (
            <ShortCard short={entry.short} key={entry.id} />
          ))}
        </div>
      </section>
    </>
  );
}
