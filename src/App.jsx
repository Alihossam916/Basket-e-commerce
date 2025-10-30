// import components here
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Contact from "./components/contact";
import LoginForm from "./components/login";
import SignupForm from "./components/signUp";

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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
