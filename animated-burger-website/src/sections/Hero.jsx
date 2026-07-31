import { motion } from "framer-motion";
import hero from "../assets/hero.png";


function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
        >
          Explore Menu 🍔
        </motion.button>
      </div>

     <motion.div
  className="burger-container"
  initial={{ opacity: 0, scale: 0.7 }}
  animate={{
    opacity: 1,
    scale: 1,
    y: [0, -15, 0],
  }}
  transition={{
    duration: 1,
    y:{
      duration:3,
      repeat:Infinity,
      ease:"easeInOut"
    }
  }}
>
  <img src={hero} alt="Burger" />
</motion.div>
    </section>
  );
}

export default Hero;