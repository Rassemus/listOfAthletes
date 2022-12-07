import React, { useContext, useEffect } from "react";
import UrheilijaInfo from "./UrheilijaInfo";
import urheilijatContext from "../context/UrheilijatContext";
const UrheilijatInfo = () => {
  const UrheilijatContext = useContext(urheilijatContext);
  useEffect(() => {
    UrheilijatContext.getUrheilijat(); //haetaan urheilijat
  }, []);
  return (
    <>
      <h1 className="display-4 mb-2">
        <span className="text-primary">Urheilijoiden tiedot</span>
      </h1>
      <React.Fragment>
           { UrheilijatContext.urheilijat.count
           ? UrheilijatContext.urheilijat.athletics.map((urheilija) => (
              <UrheilijaInfo key={urheilija.id} urheilija={urheilija} />
            ))
            : null
          }
      </React.Fragment>
    </>
  );
};
export default UrheilijatInfo;
