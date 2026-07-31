import { motion } from "framer-motion";
import BurgerAnimation from "../components/BurgerAnimation";

function Hero() {
  const scrollToMenu = () => {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-subtitle"
        >
          THE BEST BURGER EXPERIENCE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Taste the <span>Happiness</span>
        </motion.h1>

        <motion.p
          className="description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Fresh ingredients, juicy patties and unforgettable flavors.
          Your perfect burger is just one click away.
        </motion.p>

        <motion.button
          className="hero-btn"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToMenu}
        >
          Explore Menu 🍔
        </motion.button>
      </div>

      <div className="burger-container">
        <BurgerAnimation />
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={scrollToMenu}
        style={{ cursor: "pointer" }}
      >
        <motion.div
          className="scroll-mouse"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="scroll-wheel"></div>
        </motion.div>
        <p>Scroll Down</p>
      </motion.div>
    </section>
  );
}

export default Hero;