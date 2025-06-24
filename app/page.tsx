import { HeroEnhanced } from "@/components/hero-enhanced"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { ResumeRPG } from "@/components/resume-rpg"
import { OpenSource } from "@/components/open-source"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <>
      <HeroEnhanced />
      <About />
      <Skills />
      <Projects />
      <ResumeRPG />
      <OpenSource />
      <Services />
      <Contact />
    </>
  )
}
