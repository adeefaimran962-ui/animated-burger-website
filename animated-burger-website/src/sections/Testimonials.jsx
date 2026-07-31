import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Ali Khan",
      text: "The best burger I've ever had. Fresh, juicy and full of flavor!",
      stars: 5,
      avatar: "👨",
    },
    {
      name: "Sara Ahmed",
      text: "Fast delivery and amazing taste. Highly recommended!",
      stars: 5,
      avatar: "👩",
    },
    {
      name: "John Smith",
      text: "Perfect burger with crispy fries. I'll definitely order again.",
      stars: 5,
      avatar: "🧑",
    },
    {
      name: "Emily Johnson",
      text: "The quality is outstanding. Best burger place in town!",
      stars: 5,
      avatar: "👩‍🦰",
    },
    {
      name: "Michael Brown",
      text: "Amazing flavors and great service. Will come back for sure!",
      stars: 5,
      avatar: "👨‍🦱",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating) => {
    return "⭐".repeat(rating);
  };

  return (
    <section className="testimonials" id="reviews">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Customer Reviews</h2>
        <p>What our customers say about us</p>
      </motion.div>

      <div className="testimonial-slider">
        <motion.button
          className="slider-arrow prev"
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </motion.button>

        <div className="testimonial-track">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="testimonial-card"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial-avatar">{reviews[currentIndex].avatar}</div>
              <h3>{reviews[currentIndex].name}</h3>
              <div className="testimonial-stars">
                {renderStars(reviews[currentIndex].stars)}
              </div>
              <p>{reviews[currentIndex].text}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.button
          className="slider-arrow next"
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </motion.button>
      </div>

      <div className="slider-dots">
        {reviews.map((_, index) => (
          <motion.button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;