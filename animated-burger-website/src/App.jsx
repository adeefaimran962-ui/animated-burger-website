import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./context/ToastContext";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Menu from "./sections/Menu";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Cart from "./components/Cart";
import Toast from "./components/Toast";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <ToastProvider>
        <Navbar />
        <Hero />
        <Menu />
        <About />
        <Contact />
        <Footer />
        <Cart />
        <Toast />
      </ToastProvider>
    </CartProvider>
  );
}

export default App;