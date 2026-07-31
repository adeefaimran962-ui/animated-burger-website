import { motion } from "framer-motion";
import hero from "../assets/hero.png";

function About() {
  return (
    <section className="about" id="about">

      <motion.div
        className="about-img"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src={hero} alt="Burger" />
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>About Us</h2>

        <p>
          We serve delicious handcrafted burgers made with fresh ingredients,
          premium beef, crispy vegetables and our special homemade sauces.
        </p>

        <p>
          Every burger is prepared with love to deliver an unforgettable taste
          experience.
        </p>

        <button>Read More</button>

      </motion.div>

    </section>
  );
}

export default About;