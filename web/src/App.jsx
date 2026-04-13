import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Profile } from "./components/Profile";
import { Timeline } from "./components/Timeline";
import { Realisations } from "./components/Realisations";
import { Skills } from "./components/Skills";
import { Veille } from "./components/Veille";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Timeline />
        <Realisations />
        <Skills />
        <Veille />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
