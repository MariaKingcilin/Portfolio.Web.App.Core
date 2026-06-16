import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-50 transition-colors">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
