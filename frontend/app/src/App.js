import "./App.css";
import Home from "./components/Home/index";
import Navigation from "./components/Navigation";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login/index";
import Register from "./components/Register/index";
import ShowSellers from "./components/Seller";
import AppointmentRequest from "./components/AppointmentRequest";
import Appointment from "./components/appointment";

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <Router>
        {<Navigation />}
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
            path="/allRequest/:seller_id"
            element={!token ? <Navigate to="/" /> : <AppointmentRequest />}
          />
          <Route
            exact
            path="booking"
            element={!token ? <Navigate to="/" /> : <Appointment />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
