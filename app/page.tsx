import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Experience } from "@/components/sections/Experience";
import { HowIBuild } from "@/components/sections/HowIBuild";
import { Technologies } from "@/components/sections/Technologies";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Experience />
      <HowIBuild />
      <Technologies />
      <Contact />
    </>
  );
}
