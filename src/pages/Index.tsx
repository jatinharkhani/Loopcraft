import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import LinkedInPosts from "@/components/LinkedInPosts";
import OnlinePresence from "@/components/OnlinePresence";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Services />
      <Blog />
      <LinkedInPosts />
      <OnlinePresence />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
