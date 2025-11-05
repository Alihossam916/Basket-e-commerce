// import components here
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Contact from "./components/contact";
import LoginForm from "./components/login";
import SignupForm from "./components/signUp";
import About from "./components/about";
import Cart from "./components/cart";
import Checkout from "./components/checkout";

// import react-router components here
import { Routes, Route } from "react-router";

//import MUI libraries
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#35AFA0" }, // teal
    secondary: { main: "#D51243" }, // red
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
