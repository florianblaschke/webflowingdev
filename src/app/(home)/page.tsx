import AboutSection from "@/components/AboutSection";
import TechStack from "@/components/TechStack";
import Game from "@/components/Games/TicTacToe/TicTacToe";
import { Card, CardContent, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const apps = ["Beanerd", "Repairdoc", "Matt-Eats"];

export default function Home() {
  return (
    <>
      <h1 className="px-10 pb-10 tracking-tighter text-5xl md:text-9xl bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent">
        Frontend and Fullstack Webdevelopment
      </h1>
      <section className="bg-green-100 h-96 flex flex-col items-center justify-center">
        <h2 className="text-xl font-normal text-center">
          Hi! I am Florian and I love coding and challenges ...and coffee!
        </h2>
        <p>
          So feel free to challenge me to build your dream Website or even a
          FullStack WebApp!
        </p>
      </section>
      <section className="min-h-fit pb-10 flex flex-col items-center">
        <h3 className="p-10 text-5xl font-medium tracking-tighter bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent">
          What I have built so far
        </h3>

        <div className="flex gap-2">
          {apps.map((entry) => (
            <Card className="h-72 bg-green-100" key={entry}>
              <CardTitle>{entry}</CardTitle>
              <CardContent>Picture of my App </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="min-h-fit pb-10 flex flex-col justify-center items-center">
        <h3 className="p-10 text-5xl font-medium tracking-tighter bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent">
          What I am working with
        </h3>
        <TechStack />
      </section>
      <section className="min-h-fit pb-10 flex flex-col justify-center items-center">
        <h3 className="p-10 text-5xl font-medium tracking-tighter bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent">
          While you are here
        </h3>
        <Game />
      </section>
      <section className="min-h-fit pb-10 flex flex-col justify-center items-center">
        <h3 className="p-10 text-5xl font-medium tracking-tighter bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent">
          Want to work with me?
        </h3>
        <form className="flex gap-1">
          <Input className="bg-white w-48" placeholder="Your email" />
          <Button className="bg-black border-green-100 border">
            <span className="from-green-300 to-green-200 bg-clip-text bg-gradient-to-br text-transparent">
              Contact me
            </span>
          </Button>
        </form>
      </section>
    </>
  );
}
