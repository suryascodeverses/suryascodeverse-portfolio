import Hero from '@/components/site/Hero';
import Projects from "@/components/site/Projects";
import Skills from "@/components/site/Skills";
import Navigation from "@/components/site/Navigation";
import Footer from "@/components/site/Footer";

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <Projects />
        <Skills />
      </main>
    </>
  );
}