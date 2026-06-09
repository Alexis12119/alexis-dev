import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { HowIBuild } from "@/components/sections/HowIBuild";
import { Technologies } from "@/components/sections/Technologies";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <SelectedWork />
      <HowIBuild />
      <Technologies />
      <Contact />
    </>
  );
}
