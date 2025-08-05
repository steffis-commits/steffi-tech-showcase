import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PersonalInfo from "@/components/PersonalInfo";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="personal">
          <PersonalInfo />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="research">
          <Research />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="roadmap">
          <Roadmap />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
