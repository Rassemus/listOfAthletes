import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import urheilijatContext from "../context/UrheilijatContext";

export default function LisaaUrheilija() {
  let history = useNavigate();
  const [etunimi, setEtunimi] = useState("");
  const [sukunimi, setSukunimi] = useState("");
  const [kutsumanimi, setKutsumanimi] = useState("");
  const [laji, setLaji] = useState("");
  const [paino, setPaino] = useState("");
  const [saavutukset, setSaavutukset] = useState("");
  const [syntymavuosi, setSyntymavuosi] = useState("");
  const [www, setWww] = useState("");
  const UrheilijatContext = useContext(urheilijatContext);

  const handleSubmit = async (e) => {
    const uusiUrheilija = {
        etunimi: etunimi,
        sukunimi: sukunimi,
        syntymavuosi: syntymavuosi,
        kutsumanimi: kutsumanimi,
        paino: paino,
        www: www,
        laji: laji,
        saavutukset: saavutukset
    };
    console.log("Tarkistetaan uusiUrheilija -objekti:");
    console.log(uusiUrheilija);

    UrheilijatContext.setUrheilijat(uusiUrheilija);
    history("/");
  };
  return (
    <div className="card mb-3">
      <div className="card-header">Lisää urheilija</div>
      <div className="card-body">
        <form onSubmit={handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="etunimi">Etunimi</label>
            <input
              id="etunimitieto"
              type="text"
              name="etunimi"
              className="form-control form-control-lg"
              placeholder="Syötä etunimi..."
              value={etunimi}
              onChange={(event) => setEtunimi(event.target.value)}
            />
            <div className="invalid-feedback">Täytä etunimi</div>
          </div>
          <div className="form-group">
            <label htmlFor="sukunimi">Sukunimi</label>
            <input
              id="sukunimitieto"
              type="text"
              name="sukunimi"
              className="form-control form-control-lg"
              placeholder="Syötä sukunimi..."
              value={sukunimi}
              onChange={(event) => setSukunimi(event.target.value)}
            />
            <div className="invalid-feedback">Täytä sukunimi</div>
          </div>
          <div className="form-group">
            <label htmlFor="kutsumanimi">Kutsumanimi</label>
            <input
              id="kutsumanimitieto"
              type="text"
              name="kutsumanimi"
              className="form-control form-control-lg"
              placeholder="Syötä kutsumanimi..."
              value={kutsumanimi}
              onChange={(event) => setKutsumanimi(event.target.value)}
            />
            <div className="invalid-feedback">Täytä kutsumanimi</div>
          </div>
          <div className="form-group">
            <label htmlFor="syntymavuosi">Syntymävuosi</label>
            <input
              id="syntymavuositieto"
              type="number"
              min="1900"
              max="3100"
              name="syntymavuosi"
              className="form-control form-control-lg"
              placeholder="Syötä syntymävuosi..."
              value={syntymavuosi}
              onChange={(event) => setSyntymavuosi(event.target.value)}
            />
            <div className="invalid-feedback">Täytä syntymavuosi</div>
          </div>
          <div className="form-group">
            <label htmlFor="paino">Paino</label>
            <input
              id="painotieto"
              type="number"
              name="paino"
              className="form-control form-control-lg"
              placeholder="Syötä paino..."
              value={paino}
              onChange={(event) => setPaino(event.target.value)}
            />
            <div className="invalid-feedback">Täytä paino</div>
          </div>
          <div className="form-group">
            <label htmlFor="kuva">Kuvan osoite</label>
            <input
              id="kuvatieto"
              type="text"
              name="www"
              className="form-control form-control-lg"
              placeholder="Syötä kuvan www osoite..."
              value={www}
              onChange={(event) => setWww(event.target.value)}
            />
            <div className="invalid-feedback">Täytä kuvan www osoite</div>
          </div>
          <div className="form-group">
            <label htmlFor="laji">Laji</label>
            <input
              id="lajitieto"
              type="text"
              name="laji"
              className="form-control form-control-lg"
              placeholder="Syötä laji..."
              value={laji}
              onChange={(event) => setLaji(event.target.value)}
            />
            <div className="invalid-feedback">Täytä laji</div>
          </div>
          <div className="form-group">
            <label htmlFor="saavutukset">Saavutukset</label>
            <input
              id="saavutuksettieto"
              type="text"
              name="saavutukset"
              className="form-control form-control-lg"
              placeholder="Syötä saavutukset..."
              value={saavutukset}
              onChange={(event) => setSaavutukset(event.target.value)}
            />
            <div className="invalid-feedback">Täytä saavutukset</div>
          </div>
          <input
            type="submit"
            value="Lisää urheilija"
            className="btn btn-outline-primary"
          />
        </form>
      </div>
    </div>
  );
}
