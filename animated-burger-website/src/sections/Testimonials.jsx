import { motion } from "framer-motion";

function Testimonials() {
  const reviews = [
    {
      name: "Ali Khan",
      text: "The best burger I've ever had. Fresh, juicy and full of flavor!",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Sara Ahmed",
      text: "Fast delivery and amazing taste. Highly recommended!",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      name: "John Smith",
      text: "Perfect burger with crispy fries. I'll definitely order again.",
      stars: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <section className="testimonials" id="reviews">
      <h2>Customer Reviews</h2>

      <div className="testimonial-container">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{review.name}</h3>
            <p>{review.text}</p>
            <span>{review.stars}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;