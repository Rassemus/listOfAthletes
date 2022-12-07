import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UrheilijatInfo from "./components/UrheilijatInfo";

import Tietoa from "./components/pages/Tietoa";
import GlobalState from "./context/GlobalState";
import Ylapalkki from "./components/Ylapalkki";
import LisaaUrheilija from "./components/LisaaUrheilija";
import MuokkaaUrheilija from "./components/MuokkaaUrheilija";

import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <GlobalState>
      <Router>
        <div className="App">
         <Ylapalkki/>
          <div className="container">
            <Routes>
              <Route path="/" element={<UrheilijatInfo />} />
              <Route
                path="/lisaa"
                element={<LisaaUrheilija />}
              />
              <Route
                path="/urheilija/:id"
                element={<MuokkaaUrheilija />}
              />
              <Route path="/tietoa" element={<Tietoa />} />
            </Routes>
          </div>
        </div>
      </Router>
    </GlobalState>
  );
}

export default App;
