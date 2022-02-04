//import './App.css';
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Home from "./Home";
import Hide from "./Hide";

function App() {
  //const [show,setSHow]=React.useState(false)
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li className="main">
              <NavLink to="/"> Main </NavLink>
            </li>
            <li className="home">
              <NavLink to="/home"> Home </NavLink>
            </li>
            <li className="manage">
              <NavLink to="/add"> Manage </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/add" element={<Hide />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
