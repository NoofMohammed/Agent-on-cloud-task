import "./App.css";
import Home from "./components/Home/index";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/index";
import Register from "./components/Register/index";
import ShowSellers from "./components/Seller";
import AppointmentRequest from "./components/AppointmentRequest";

const App = () => {
  return (
    <>
      <Router>
        {<Navigation />}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login/:userType" element={<Login />}></Route>
          <Route
            exact
            path="/register/:userType"
            element={<Register />}
          ></Route>

          <Route exact path="/allSeller" element={<ShowSellers />}></Route>
          <Route
            exact
            path="/allRequest/:seller_id"
            element={<AppointmentRequest />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
