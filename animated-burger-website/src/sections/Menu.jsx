import { useState } from "react";
import { motion } from "framer-motion";
import MenuCard from "../components/MenuCard";

import hero from "../assets/hero.png";
import cheeseburger from "../assets/cheeseburger.png";
import fries from "../assets/fries.png";
import loadedFries from "../assets/loaded-fries.png";
import drinks from "../assets/drinks.png";
import orangeJuice from "../assets/orange-Juice.png";

const menuItems = [
  {
    id: 1,
    image: hero,
    title: "Classic Burger",
    price: 8.99,
    category: "burger",
    rating: 4.8,
    description: "Juicy beef patty with fresh vegetables",
  },
  {
    id: 2,
    image: cheeseburger,
    title: "Cheese Burger",
    price: 9.99,
    category: "burger",
    rating: 4.9,
    description: "Double cheese with special sauce",
  },
  {
    id: 3,
    image: fries,
    title: "Crispy Fries",
    price: 3.99,
    category: "fries",
    rating: 4.7,
    description: "Golden crispy fries with seasoning",
  },
  {
    id: 4,
    image: loadedFries,
    title: "Loaded Fries",
    price: 5.99,
    category: "fries",
    rating: 4.8,
    description: "Fries topped with cheese and bacon",
  },
  {
    id: 5,
    image: drinks,
    title: "Cola",
    price: 2.99,
    category: "drinks",
    rating: 4.5,
    description: "Refreshing cold cola",
  },
  {
    id: 6,
    image: orangeJuice,
    title: "Orange Juice",
    price: 3.49,
    category: "drinks",
    rating: 4.6,
    description: "Fresh squeezed orange juice",
  },
];

function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["all", "burger", "fries", "drinks"];

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="menu" id="menu">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Our Menu</h2>
        <p>Delicious food made with love</p>
      </motion.div>

      <div className="menu-controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search menu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="search-icon"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>

        <div className="category-filters">
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`category-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>
      </div>

      <motion.div
        className="menu-container"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <MenuCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
              description={item.description}
            />
          ))
        ) : (
          <motion.p
            className="no-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No items found matching your search.
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}

export default Menu;