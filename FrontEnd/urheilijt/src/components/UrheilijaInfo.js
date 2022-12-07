import React from "react";
import { Link } from "react-router-dom";

import { useState, useContext } from "react";
import urheilijatContext from "../context/UrheilijatContext";
import { useNavigate } from "react-router-dom";
const UrheilijaInfo = (props) => {
  const UrheilijatContext = useContext(urheilijatContext); //hooks
  let history = useNavigate();
  const [NaytaUrheilija, setNaytaUrheilija] = useState(false);
  const onDeleteClick = (id) => {
    UrheilijatContext.poistaUrheilija(id);
    window.location.reload(); // ei suositella kayttamaan
    history("/");
  };
  const onShowClick = (e) => {
    let lippu = !NaytaUrheilija;
    setNaytaUrheilija(lippu);
  };
  const { id, etunimi, sukunimi, kutsumanimi, syntymavuosi, paino, saavutukset, laji, www } = props.urheilija;
  return (
    <div className="card card-body mb-2 display:flex, justifyContent: flex-end">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <h4>{etunimi} "{kutsumanimi}" {sukunimi}</h4>
        <div style={{ display: "flex", justifyContent: "flex-left" }}>
        <button className="btn btn-info" onClick={onShowClick.bind(this)}>
        {NaytaUrheilija ? (
       "Piilota"
      ) : "Katso tiedot"}
          
        </button>
        </div>
      </div>
     
      <div>
        <div
          role="group"
          aria-label="Second group"
        >
          
          <Link to={`urheilija/${id}`}>
            <button className="btn btn-secondary">Muokkaa</button>
          </Link>
          <button
            className="btn btn-danger"
            onClick={onDeleteClick.bind(this, { id })}
          >
            Poista
          </button>
          
        </div>
        </div>
      </div>
      {NaytaUrheilija ? (
        <ul className="list-group">
          <li className="list-group-item">Laji: {laji}</li>
          <li className="list-group-item">Paino: {paino}</li>
          <li className="list-group-item">Saavutukset: {saavutukset}</li>
          <li className="list-group-item">Syntymävuosi: {syntymavuosi}</li>
          <li className="list-group-item"><a href = {www}>Kuva</a></li>
        </ul>
      ) : null}
    </div>
  );
};
/*Puhelintieto.propTypes = {
yhteystieto: PropTypes.object.isRequired,
//deleteClickHandler: PropTypes.func.isRequired,//ei tarvita enää
};*/
export default UrheilijaInfo;
