import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "../context/ToastContext";

function Toast() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="toast-container">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            className={`toast toast-${toast.type}`}
            initial={{ opacity: 0, x: 100, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            onClick={() => removeToast(toast.id)}
          >
            <div className="toast-icon">
              {toast.type === "success" ? "✓" : toast.type === "error" ? "✕" : "ℹ"}
            </div>
            <div className="toast-message">{toast.message}</div>
            <motion.button
              className="toast-close"
              onClick={(e) => {
                e.stopPropagation();
                removeToast(toast.id);
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              ✕
            </motion.button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default Toast;