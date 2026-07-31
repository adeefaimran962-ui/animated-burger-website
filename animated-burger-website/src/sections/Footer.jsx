import { motion } from "framer-motion";

function Footer() {
  const socialLinks = [
    { name: "Facebook", icon: "📘", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "YouTube", icon: "📺", url: "#" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Offers", href: "#offers" },
    { name: "Contact", href: "#contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>BURGER<span>LAB</span></h2>
          <p>
            Serving the best burgers since 2020. Fresh ingredients, amazing
            taste, unforgettable experience.
          </p>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                className="social-link"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link, index) => (
              <li key={index}>
                <motion.a
                  href={link.href}
                  whileHover={{ x: 5, color: "#ff8c00" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {link.name}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-links">
          <h3>Legal</h3>
          <ul>
            {legalLinks.map((link, index) => (
              <li key={index}>
                <motion.a
                  href={link.href}
                  whileHover={{ x: 5, color: "#ff8c00" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {link.name}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe for exclusive offers and updates!</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 BurgerLab. All Rights Reserved.</p>
        <p>Made with ❤️ for burger lovers</p>
      </div>
    </footer>
  );
}

export default Footer;