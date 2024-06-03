import React from "react";
import "./Title.css";
import Header from "../Header/Header";

const Title = () => {
  return (
    <>
      <section className="title">
        <Header />
				<h1 className="title__text">
				Салон красоты «Vesna» в Каусере
				</h1>
      </section>
    </>
  );
};

export default Title;
