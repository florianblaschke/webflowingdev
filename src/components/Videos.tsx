const videoPreview = Array.from({ length: 10 }).map((x, i) => ({ id: i }));

const Screen = () => {
  return (
    <div className="w-full flex flex-col relative pt-2">
      <div className="bg-slate-700 w-full h-40 text-center"></div>
      <div className="flex p-2 gap-1">
        <span className="w-10 h-10 bg-slate-500 rounded-full flex items-center justify-center">
          FT
        </span>
        <div className="flex flex-col flex-1 justify-evenly pl-2">
          <h3 className="font-semibold text-xs">Videotitel</h3>
          <span className="flex items-center gap-1">
            <p className="font-thin text-[10px]">Autor –</p>
            <p className="font-thin text-[10px]"> Aufrufe –</p>
            <p className="font-thin text-[10px]">vor 2 Tagen</p>
          </span>
        </div>
      </div>
      <span className="absolute bottom-6 right-1 rotate-90 font-semibold text-sm  flex items-center justify-center">
        . . .
      </span>
    </div>
  );
};

export default function Videos() {
  return (
    <section className="w-full flex flex-col pt-2">
      {videoPreview.map((entry) => (
        <Screen key={entry.id} />
      ))}
    </section>
  );
}
