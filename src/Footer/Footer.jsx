import React from "react";
import "./Footer.css";
import logo from ".././Img/logo_vesna.png";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <svg
          className="footer__line"
          width="1296"
          height="1"
          viewBox="0 0 1296 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line opacity="0.5" y1="0.5" x2="1296" y2="0.5" stroke="white" />
        </svg>

        <div className="footer__menu">
          <img className="footer__logo" src={logo} alt="logo" />
          <div>
            <h4 className="footer__title">Контакты</h4>
            <p className="footer__info">+201070157397</p>
            <p className="footer__info">+201070157397</p>
          </div>
          <div>
            <h4 className="footer__title">Режим работы</h4>
            <p className="footer__info">C 10:00 до 21:00 (Пн-Пт)</p>
            <p className="footer__info">С 11:00 до 20:00 (Сб-Вс)</p>
          </div>
          <div>
            <h4 className="footer__title">Мы в Instagram</h4>
            <a href="https://www.instagram.com/vesna.beautysalon.hurghada?igsh=bXNjbndzOGJ1anQ4">
              <svg
                className="footer__inst"
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8">
                  <path
                    d="M27.3011 1H10.6989C5.34183 1 1 5.3426 1 10.6989V27.3011C1 32.6582 5.3426 37 10.6996 37H27.3003C32.6574 37 37 32.6574 37 27.3003V10.6989C37 5.34183 32.6574 1 27.3003 1H27.3011Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M19 27.6902C23.7992 27.6902 27.6898 23.7996 27.6898 19.0004C27.6898 14.2011 23.7992 10.3105 19 10.3105C14.2007 10.3105 10.3102 14.2011 10.3102 19.0004C10.3102 23.7996 14.2007 27.6902 19 27.6902Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M29.5517 10.3097C30.58 10.3097 31.4136 9.47611 31.4136 8.44782C31.4136 7.41953 30.58 6.58594 29.5517 6.58594C28.5234 6.58594 27.6898 7.41953 27.6898 8.44782C27.6898 9.47611 28.5234 10.3097 29.5517 10.3097Z"
                    fill="white"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
        <svg
          className="footer__line"
          width="1296"
          height="1"
          viewBox="0 0 1296 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line opacity="0.5" y1="0.5" x2="1296" y2="0.5" stroke="white" />
        </svg>
      </section>
    </>
  );
};

export default Footer;
