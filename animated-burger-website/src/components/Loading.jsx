import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="loading-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="burger-loader"
              animate={{
                rotate: [0, 10, -10, 10, -10, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            >
              🍔
            </motion.div>
            <motion.h1
              className="loading-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              BURGER<span>LAB</span>
            </motion.h1>
            <motion.div
              className="loading-bar"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loading;