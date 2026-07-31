import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartItemCount,
    isCartOpen,
    setIsCartOpen,
  } = useCart();
  const { addToast } = useToast();

  const handleCheckout = () => {
    if (cart.length === 0) {
      addToast("Your cart is empty!", "error");
      return;
    }
    // Calculate tax (8%)
    const tax = cartTotal * 0.08;
    const grandTotal = cartTotal + tax;
    
    addToast(`Order placed successfully! Total: $${grandTotal.toFixed(2)} 🎉`, "success");
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            className="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
          />

          <motion.div
            className="cart-sidebar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="cart-header">
              <h2>Your Cart ({cartItemCount})</h2>
              <motion.button
                className="close-btn"
                onClick={() => setIsCartOpen(false)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
            </div>

            <div className="cart-items">
              {cart.length === 0 ? (
                <motion.div
                  className="empty-cart"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="empty-cart-icon">🛒</div>
                  <p>Your cart is empty</p>
                  <p>Add some delicious items!</p>
                </motion.div>
              ) : (
                cart.map((item) => (
                  <motion.div
                    key={item.id}
                    className="cart-item"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    layout
                  >
                    <img src={item.image} alt={item.title} />

                    <div className="item-details">
                      <h4>{item.title}</h4>
                      <p className="item-price">${item.price.toFixed(2)}</p>
                    </div>

                    <div className="item-quantity">
                      <motion.button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        -
                      </motion.button>
                      <span>{item.quantity}</span>
                      <motion.button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        +
                      </motion.button>
                    </div>

                    <motion.button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      🗑️
                    </motion.button>
                  </motion.div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <motion.div
                className="cart-footer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="cart-summary">
                  <div className="summary-row">
                    <span>Subtotal:</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="summary-row">
                    <span>Tax (8%):</span>
                    <span>${(cartTotal * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="summary-row total">
                    <span>Total:</span>
                    <span className="total-price">${(cartTotal * 1.08).toFixed(2)}</span>
                  </div>
                </div>

                <motion.button
                  className="checkout-btn"
                  onClick={handleCheckout}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Checkout 🎉
                </motion.button>

                <motion.button
                  className="clear-cart-btn"
                  onClick={clearCart}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Clear Cart
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Cart;