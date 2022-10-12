import Home from "./Home";
import Footer from "./component/Footer";
import VendorHome from "./component/VendorHome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserHome from "./component/userComponents/UserHome";
import TakeAway from "./component/userComponents/TakeAway";
import MyOrders1 from "./component/userComponents/MyOrders";
import MyOrders from "./component/VendorComponents/MyOrders";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<VendorHome />} />
          <Route path="/takeaway" element={<TakeAway />} />
          <Route path="/userhome" element={<UserHome />} />
          <Route path="/user/myorder" element={<MyOrders1 />} />
          <Route path="/vendor/order" element={<MyOrders />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
