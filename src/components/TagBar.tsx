const tags = [
  "Alle",
  "Gaming",
  "Live",
  "Nachrichten",
  "Sketch-Comedy",
  "Heimwerken",
  "Kochsendungen",
  "Fußball",
  "Basteln",
  "Minecraft",
  "Cartoons",
];

export default function TagBar() {
  return (
    <div className="flex items-center gap-1 overflow-x-scroll p-2 h-fit relative scrollbar-hide md:hidden">
      <span className="text-xs font-medium bg-gray-300 rounded-sm h-7 p-2 flex items-center justify-center min-w-fit pr-2 mr-2">
        Compass
      </span>
      {tags.map((entry) => (
        <span
          key={entry}
          className="text-xs font-medium bg-gray-300 rounded-sm h-7 p-2 flex items-center justify-center min-w-fit"
        >
          {entry}
        </span>
      ))}
    </div>
  );
}
