import { motion } from "framer-motion";

function Features() {
  const features = [
    {
      title: "Fresh Ingredients",
      desc: "We use only fresh vegetables and premium quality meat.",
      icon: "🥬",
    },
    {
      title: "Fast Delivery",
      desc: "Hot and delicious burgers delivered to your doorstep.",
      icon: "🚚",
    },
    {
      title: "Best Taste",
      desc: "A unique recipe that keeps customers coming back.",
      icon: "🍔",
    },
  ];

  return (
    <section className="features" id="features">
      <h2>Why Choose Us?</h2>

      <div className="features-container">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="feature-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features;