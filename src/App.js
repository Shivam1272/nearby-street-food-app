import "./App.css";
import Home from "./Home";
import Footer from "./component/Footer";
import VendorHome from "./component/VendorHome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<VendorHome />} />
        </Routes>
      </Router>
      <footer className="">
        <Footer />
      </footer>
    </>
  );
}

export default App;
