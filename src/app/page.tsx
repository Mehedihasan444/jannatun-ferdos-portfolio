import { About } from "@/components/sections/about";
import { Achievements } from "@/components/sections/achievements";
import { Activities } from "@/components/sections/activities";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Hero } from "@/components/sections/hero";
import { Languages } from "@/components/sections/languages";
import { References } from "@/components/sections/references";
import { Research } from "@/components/sections/research";
import { Training } from "@/components/sections/training";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Research />
      <Training />
      <Achievements />
      <Activities />
      <Languages />
      <Contact />
      <References />
    </>
  );
}
