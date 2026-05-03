import Hero from "../components/Hero";
import Summary from "../components/Summary";
import Expertise from "../components/Expertise";
import Contact from "../components/Contact";
import { useScrollToHash } from "../hooks/useScrollToHash";

export default function HomePage() {
  useScrollToHash();

  return (
    <>
      <Hero />
      <Summary />
      <Expertise />
      <Contact />
    </>
  );
}
