import React from "react";
import { Link } from "react-router-dom";
const Ylapalkki = (props) => {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{background: "#e3f2fd"}}>
      <div className="container d-flex justify-content-center" >
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                Etusivu
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/lisaa" className="nav-link">
                Lisää urheilija
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tietoa" className="nav-link">
                Tietoa
              </Link>
            </li>
          </ul>
        </div>
      
      </div>
    </nav>
  );
};

export default Ylapalkki;
