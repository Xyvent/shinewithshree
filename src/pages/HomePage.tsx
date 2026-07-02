import Hero from "../components/Hero";
import Summary from "../components/Summary";
import Expertise from "../components/Expertise";
import WritingTeaser from "../components/WritingTeaser";
import Contact from "../components/Contact";
import PageMeta from "../components/PageMeta";
import { useScrollToHash } from "../hooks/useScrollToHash";

export default function HomePage() {
  useScrollToHash();

  return (
    <>
      <PageMeta />
      <Hero />
      <Summary />
      <Expertise />
      <WritingTeaser />
      <Contact />
    </>
  );
}
