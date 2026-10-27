import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Educations from "@/components/Educations";
import Experience from "@/components/Experiences";
import Contact from "@/components/Contacts";
import Projects from "./projects/page";

export default function Home() {
  return (
   <div>
<Hero></Hero>
<Skills></Skills>
<Educations></Educations>
<Projects></Projects>
<Experience></Experience>
<Contact></Contact>
   </div>
  );
}
