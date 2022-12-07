import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import urheilijatContext from "../context/UrheilijatContext";
const MuokkaaUrheilija = () => {

  const [etunimi, setEtunimi] = useState("");
    const [sukunimi, setSukunimi] = useState("");
    const [kutsumanimi, setKutsumanimi] = useState("");
    const [laji, setLaji] = useState("");
    const [paino, setPaino] = useState("");
    const [saavutukset, setSaavutukset] = useState("");
    const [syntymavuosi, setSyntymavuosi] = useState("");
    const [www, setWww] = useState("");

  const UrheilijatContext = useContext(urheilijatContext);
  const { id } = useParams();

  let history = useNavigate();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
       UrheilijatContext.getUrheilija(id).then((res) => {
        
        setEtunimi(res.athletic.etunimi);
        setSukunimi(res.athletic.sukunimi);
        setKutsumanimi(res.athletic.kutsumanimi);
        setLaji(res.athletic.laji);
        setPaino(res.athletic.paino);
        setSaavutukset(res.athletic.saavutukset);
        setSyntymavuosi(res.athletic.syntymavuosi);
        setWww(res.athletic.www);
      });
     
    } else mounted = false;
  }, []);

  const handleSubmit = async (e) => {
    const paivitettyUrheilija = {
        etunimi: etunimi,
        sukunimi: sukunimi,
        syntymavuosi: syntymavuosi,
        kutsumanimi: kutsumanimi,
        paino: paino,
        www: www,
        laji: laji,
        saavutukset: saavutukset
    };

    UrheilijatContext.setUrheilija(id, paivitettyUrheilija);
    history("/");
  };
  const onChangeEtunimi = (e) => {
    setEtunimi(e.target.value);
  };
  const onChangeSukunimi = (e) => {
    setSukunimi(e.target.value);
  };
  const onChangeKutsumanimi = (e) => {
    setKutsumanimi(e.target.value);
  };
  const onChangeSyntymavuosi = (e) => {
    setSyntymavuosi(e.target.value);
  }
  const onChangeWww = (e) => {
    setWww(e.target.value);
  };
  const onChangePaino = (e) => {
    setPaino(e.target.value);
  };
  const onChangeLaji = (e) => {
    setLaji(e.target.value);
  };
  const onChangeSaavutukset = (e) => {
    setSaavutukset(e.target.value);
  };
  return (
    <div className="card mb-3">
      <div className="card-header">Muokkaa urheilijan tiedot</div>

      <div className="card-body">
        <form onSubmit={handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="nimi">Etunimi</label>
            <input
              type="text"
              name="nimi"
              className="form-control form-control-lg"
              placeholder=""
              value={etunimi}
              onChange={onChangeEtunimi}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nimi">Sukunimi</label>
            <input
              type="text"
              name="sukunimi"
              className="form-control form-control-lg"
              placeholder="Syötä sukunimi..."
              value={sukunimi}
              onChange={onChangeSukunimi}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nimi">Kutsumanimi</label>
            <input
              type="text"
              name="kutsumanimi"
              className="form-control form-control-lg"
              placeholder="Syötä kutsumanimi..."
              value={kutsumanimi}
              onChange={onChangeKutsumanimi}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nimi">Syntymävuosi</label>
            <input
              type="number"
              min="1900"
              max="2100"
              name="syntymavuosi"
              className="form-control form-control-lg"
              placeholder="Syötä syntymavuosi..."
              value={syntymavuosi}
              onChange={onChangeSyntymavuosi}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nimi">Paino</label>
            <input
              type="number"
              name="paino"
              className="form-control form-control-lg"
              placeholder="Syötä paino..."
              value={paino}
              onChange={onChangePaino}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nimi">Kuva</label>
            <input
              type="text"
              name="kuva"
              className="form-control form-control-lg"
              placeholder="Syötä kuvan www osoite..."
              value={www}
              onChange={onChangeWww}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nimi">Laji</label>
            <input
              type="text"
              name="laji"
              className="form-control form-control-lg"
              placeholder="Syötä laji..."
              value={laji}
              onChange={onChangeLaji}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nimi">Saavutukset</label>
            <input
              type="text"
              name="saavutukset"
              className="form-control form-control-lg"
              placeholder="Syötä saavutukset..."
              value={saavutukset}
              onChange={onChangeSaavutukset}
            />
          </div>
          <input
            type="submit"
            value="Valmis"
            className="btn btn-outline-primary"
          />
        </form>
      </div>
    </div>
  );
};
export default MuokkaaUrheilija;
