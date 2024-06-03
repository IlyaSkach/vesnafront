import React from "react";
import "./Services.css";
import par from "../Img/parehmaher.png";
import man from "../Img/manikur.png";
import ped from "../Img/pedikur.png";
import cos from "../Img/kosmetolog.png";
import est from "../Img/estet_po_telu.png";
import ves from "../Img/vesag.png";


const Services = () => {
  return (
    <>
      <section className="services">
        <div className="services__card">
          <img className="services__img" src={par} alt="Парикмахерские услуги" />
          <p className="services__text">Парикмахерские услуги</p>
        </div>
        <div className="services__card">
          <img className="services__img" src={man} alt="Маникюр" />
          <p className="services__text">Маникюр</p>
        </div>
        <div className="services__card">
          <img className="services__img" src={ped} alt="Педикюр" />
          <p className="services__text">Педикюр</p>
        </div>
        <div className="services__card">
          <img className="services__img" src={cos} alt="Косметология" />
          <p className="services__text">Косметология</p>
        </div>
        <div className="services__card">
          <img className="services__img" src={est} alt="Эстетист по телу" />
          <p className="services__text">Эстетист по телу</p>
        </div>
        <div className="services__card">
          <img className="services__img" src={ves} alt="Визаж" />
          <p className="services__text">Визаж</p>
        </div>
      </section>
    </>
  );
};

export default Services;
