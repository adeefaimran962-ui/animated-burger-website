import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { cartItemCount, setIsCartOpen } = useCart();

  const handleOrderNow = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section highlighting
      const sections = ["home", "menu", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="logo">BURGER<span>LAB</span></div>

      <div className="nav-links">
        {navLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            className={`nav-link ${activeSection === link.name.toLowerCase() ? "active" : ""}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.name}
            <motion.div
              className="underline"
              initial={{ width: activeSection === link.name.toLowerCase() ? "100%" : 0 }}
              animate={{ width: activeSection === link.name.toLowerCase() ? "100%" : 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
      </div>

      <div className="nav-actions">
        <motion.button
          className="cart-btn"
          onClick={() => setIsCartOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
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
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {cartItemCount > 0 && (
            <motion.span
              className="cart-count"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              key={cartItemCount}
            >
              {cartItemCount}
            </motion.span>
          )}
        </motion.button>

        <motion.button
          className="order-btn"
          onClick={handleOrderNow}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Order Now
        </motion.button>

        <motion.button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={isMobileMenuOpen ? "open" : "closed"}
            variants={{
              open: { rotate: 45, y: 8 },
              closed: { rotate: 0, y: 0 },
            }}
          />
          <motion.div
            animate={isMobileMenuOpen ? "open" : "closed"}
            variants={{
              open: { opacity: 0 },
              closed: { opacity: 1 },
            }}
          />
          <motion.div
            animate={isMobileMenuOpen ? "open" : "closed"}
            variants={{
              open: { rotate: -45, y: -8 },
              closed: { rotate: 0, y: 0 },
            }}
          />
        </motion.button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;