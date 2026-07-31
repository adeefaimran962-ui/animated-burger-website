import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Menu from "./sections/Menu";
import "./App.css";
import About from "./sections/About";
import Features from "./sections/Features";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Menu />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;