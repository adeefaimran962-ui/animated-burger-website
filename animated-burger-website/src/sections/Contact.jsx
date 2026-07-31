import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="contact" id="contact">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Contact Us</h2>

        <p>Have a question or want to place an order?</p>

        <form>
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <textarea
            rows="5"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;