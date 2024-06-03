
import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <h1 className="contact__title">Контакты</h1>
			<div className="contact__map">
        <iframe  title="Unique Title" className="contact__map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.8620487479243!2d33.82519877556584!3d27.1920722480293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1452876fd301828b%3A0x45fa67ca9f92028b!2sVesna%20beauty%20salon!5e0!3m2!1sru!2sru!4v1717432032994!5m2!1sru!2sru"
          width="600"
          height="450"
          style={{border:0}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
				</div>
				<h2 className="contact__info">Для записи или дополнительной информации напишите нам в Telegram</h2>
        <Link to="https://t.me/IlyaSkaAl">
				<button className="contact__button">Написать в Telegram</button>
        </Link>
        
      </section>
    </>
  );
};

export default Contact;