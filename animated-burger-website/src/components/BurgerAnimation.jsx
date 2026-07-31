import { motion } from "framer-motion";
import hero from "../assets/hero.png";

/**
 * BurgerAnimation Component
 * Since the provided burger image is a single PNG (hero.png),
 * individual ingredients cannot be animated separately.
 * This component adds premium floating and glow effects to the burger image.
 */
function BurgerAnimation() {
  return (
    <motion.div
      className="burger-animation-container"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -15, 0],
      }}
      transition={{
        duration: 1,
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      {/* Glowing effect behind burger */}
      <motion.div
        className="burger-glow"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.img
        src={hero}
        alt="Burger"
        className="burger-image"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default BurgerAnimation;
