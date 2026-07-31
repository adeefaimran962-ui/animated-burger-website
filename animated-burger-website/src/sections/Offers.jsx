import { motion } from "framer-motion";

function Offers() {
  const offers = [
    {
      title: "Happy Hour Special",
      discount: "20% OFF",
      description: "All burgers between 2 PM - 5 PM",
      valid: "Valid: Mon - Fri",
      color: "#ff8c00",
      icon: "⏰",
    },
    {
      title: "Family Deal",
      discount: "BUY 2 GET 1 FREE",
      description: "Perfect for family gatherings",
      valid: "Valid: All Week",
      color: "#ff4500",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: "Student Discount",
      discount: "15% OFF",
      description: "Show your valid student ID",
      valid: "Valid: All Week",
      color: "#ff6b00",
      icon: "🎓",
    },
  ];

  return (
    <section className="offers" id="offers">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Special Offers</h2>
        <p>Grab the best deals before they're gone!</p>
      </motion.div>

      <div className="offers-container">
        {offers.map((offer, index) => (
          <motion.div
            key={index}
            className="offer-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10 }}
            style={{
              borderLeft: `4px solid ${offer.color}`,
            }}
          >
            <div className="offer-icon">{offer.icon}</div>
            <div className="offer-discount">{offer.discount}</div>
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <span className="offer-valid">{offer.valid}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Offers;