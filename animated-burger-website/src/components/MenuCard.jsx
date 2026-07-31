import { motion } from "framer-motion";

function MenuCard({ image, title, price }) {
  return (
    <motion.div
      className="menu-card"
      whileHover={{
        scale: 1.05,
        y: -10,
      }}
    >
      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p>${price}</p>

      <button>Order Now</button>
    </motion.div>
  );
}

export default MenuCard;