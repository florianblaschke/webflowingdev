import Contact from "@/components/Contact";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import GameSection from "@/components/GameSection";
import Greeting from "@/components/Greeting";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Greeting />
      <Projects />
      <Courses />
      <TechStack />
      <GameSection />
      <Contact />
      <Footer />
    </>
  );
}
