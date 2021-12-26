import "./App.css";
import Home from "./components/Home/index";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginBuyer from "./components/LoginBuyer/index";

const App = () => {
  return (
    <>
      <Router>
        {<Navigation />}
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/loginBuyer" element={<LoginBuyer />}></Route>
          {/* <Route path="/login" element={<Login />}></Route> */}
          {/* <Route path="/signUp" element={<SignUp />}></Route> */}
        </Routes>
      </Router>
      <div className="App">Hello</div>
      {/* <Home /> */}
    </>
  );
};

export default App;
