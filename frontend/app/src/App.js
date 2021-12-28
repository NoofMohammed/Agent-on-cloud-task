import "./App.css";
import Home from "./components/Home/index";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login/index";
import Register from "./components/Register/index";
import ShowSellers from "./components/Seller";
import SellerRequests from "./components/SellerRequests";
import Booking from "./components/Booking";
import RequestsBuyer from "./components/Requests";

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login/:userType" element={<Login />} />
          <Route exact path="/register/:userType" element={<Register />} />

          <Route
            exact
            path="/allSeller"
            element={!token ? <Navigate to="/" /> : <ShowSellers />}
          />
          <Route
            exact
            path="/myRequest/:sellerId"
            element={token ? <SellerRequests /> : <Navigate to="/" />}
          />
          <Route
            exact
            path="/booking/:sellerId"
            element={!token ? <Navigate to="/" /> : <Booking />}
          />

          <Route
            exact
            path="/appointment/:buyerId"
            element={!token ? <Navigate to="/" /> : <RequestsBuyer />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
