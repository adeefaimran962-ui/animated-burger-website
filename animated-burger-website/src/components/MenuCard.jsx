import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";

function MenuCard({ id, image, title, price, rating, description }) {
  const { addToCart } = useCart();
  const { addToast } = useToast();

  const handleAddToCart = () => {
    addToCart({
      id,
      image,
      title,
      price,
      rating,
      description,
    });
    addToast(`${title} added to cart!`);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="star">
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="star half">
          ★
        </span>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="star empty">
          ★
        </span>
      );
    }

    return stars;
  };

  return (
    <motion.div
      className="menu-card"
      whileHover={{
        scale: 1.05,
        y: -10,
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="card-image-wrapper">
        <img src={image} alt={title} />
        <div className="rating-badge">
          <span className="rating-value">{rating}</span>
          <span className="rating-stars">{renderStars(rating)}</span>
        </div>
      </div>

      <div className="card-content">
        <h3>{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-footer">
          <p className="price">${price.toFixed(2)}</p>
          <motion.button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default MenuCard;