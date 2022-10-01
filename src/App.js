import Home from "./Home";
import Footer from "./component/Footer";
import VendorHome from "./component/VendorHome";
import ShopDetail from "./component/ShopDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<VendorHome />} />
          <Route path="/shopdetail" element={<ShopDetail />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
