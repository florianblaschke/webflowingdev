import React from "react";
import TagBar from "./TagBar";

export default function FakeTubeNav({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="flex sticky top-0 flex-col justify-evenly h-20 md:h-16 md:shadow-none md:border-none border-b shadow-sm bg-white z-10 overflow-x-scroll w-screen scrollbar-hide">
        <div className="flex items-center justify-between border-b md:border-none shadow-sm md:shadow-none h-10 p-2">
          <div className="text-sm font-semibold p-2 flex">
            <div className="hidden md:flex justify-center items-center rotate-90 w-12 ">
              |||
            </div>
            FakeTube
          </div>
          <form className="p-2 hidden md:inline">
            <input
              type="text"
              placeholder="Suchen"
              className="w-96 border rounded-l-full pl-2 py-2 shadow-inner"
            />
            <button
              type="submit"
              className="rounded-r-full border-y border-r w-14 py-2 bg-slate-50"
            >
              Go
            </button>
          </form>
          <div>
            <span className="text-sm font-light p-2 md:hidden">Suchen</span>
            <span className="text-sm font-light p-2 hidden md:inline">
              Erstellen
            </span>
            <span className="text-sm font-light p-2 hidden md:inline">
              Benachrichtigungen
            </span>
            <span className="text-sm font-light p-2">Profile</span>
          </div>
        </div>
        <TagBar />
      </nav>
      <div className="hidden md:flex w-16 justify-center bg-white absolute top-0 left-0 bottom-0 min-h-screen p-1">
        <div className="pt-16 min-h-screen p-1 flex flex-col items-center">
          <button className="h-16 w-16 hover:bg-slate-50 rounded-sm">
            <span className="font-thin text-xs">Startseite</span>
          </button>
          <button className="h-16 w-16 hover:bg-slate-50 rounded-sm">
            <span className="font-thin text-xs">Shorts</span>
          </button>
          <button className="h-16 w-16 hover:bg-slate-50 rounded-sm">
            <span className="font-thin text-xs">Abos</span>
          </button>
          <button className="h-16 w-16 hover:bg-slate-50 rounded-sm">
            <span className="font-thin text-xs">Mein YouTube</span>
          </button>
        </div>
      </div>
      {children}
      <nav className="sticky bottom-0 right-0 min-h-max h-12 flex items-center justify-evenly bg-white md:hidden w-full">
        <span className="text-sm font-thin">Startseite</span>
        <span className="text-sm font-thin">Shorts</span>
        <span className="text-sm font-thin">Mediathek</span>
      </nav>
    </>
  );
}
