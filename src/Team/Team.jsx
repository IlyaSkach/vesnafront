import React from "react";
import "./Team.css";
import one from "../Img/mas1.png";
import two from "../Img/mas2.png";
import three from "../Img/mas3.png";
import four from "../Img/mas4.png";
import five from "../Img/mas5.png";
import six from "../Img/mas6.png";

const Team = () => {
  return (
    <>
      <section className="team">
				<h1 className="team__title">Наши мастера</h1>
			<div className="team__card">
				<div className="team__card-item">
					<img className="team__card-img" src={one} alt="1" />
					<h3 className="team__card-name">Анна</h3>
					<p className="team__card-info">Мастер по маникюру</p>
					<button className="team__card-button">Спросить в Telegram</button>
				</div>
				<div className="team__card-item">
					<img className="team__card-img" src={two} alt="2" />
					<h3 className="team__card-name">Анна</h3>
					<p className="team__card-info">Мастер по маникюру</p>
					<button className="team__card-button">Спросить в Telegram</button>
				</div>
				<div className="team__card-item">
					<img className="team__card-img" src={three} alt="3" />
					<h3 className="team__card-name">Анна</h3>
					<p className="team__card-info">Мастер по маникюру</p>
					<button className="team__card-button">Спросить в Telegram</button>
				</div>
				<div className="team__card-item">
					<img className="team__card-img" src={four} alt="4" />
					<h3 className="team__card-name">Анна</h3>
					<p className="team__card-info">Мастер по маникюру</p>
					<button className="team__card-button">Спросить в Telegram</button>
				</div>
				<div className="team__card-item">
					<img className="team__card-img" src={five} alt="5" />
					<h3 className="team__card-name">Анна</h3>
					<p className="team__card-info">Мастер по маникюру</p>
					<button className="team__card-button">Спросить в Telegram</button>
				</div>
				<div className="team__card-item">
					<img className="team__card-img" src={six} alt="6" />
					<h3 className="team__card-name">Анна</h3>
					<p className="team__card-info">Мастер по маникюру</p>
					<button className="team__card-button">Спросить в Telegram</button>
				</div>

			</div>
      </section>
    </>
  );
};

export default Team;