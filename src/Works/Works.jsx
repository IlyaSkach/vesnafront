import React from "react";
import "./Works.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import work1 from "../Img/work-1.png";
import work2 from "../Img/work-2.png";
import work3 from "../Img/work-3.png";
import work4 from "../Img/work-4.png";
import work5 from "../Img/work-5.png";
import work6 from "../Img/work-6.png";
import work7 from "../Img/work-7.png";
import work8 from "../Img/work-8.png";
import work9 from "../Img/work-9.png";

// const Works = () => {
//   return (
//     <>
//       <section className="works">
//       <div className="hhh">oihiuh</div>
//       </section>
//     </>
//   );
// };

// export default Works;

function NextArrow(props) {
	const { className, style, onClick } = props;
	return (
			<div
			className={className}
			style={{ ...style, display: "block", zIndex: "1"}} 
			onClick={onClick}
			>
			</div>
	)
}

function PrevArrow(props) {
	const { className, style, onClick } = props;
	return (
			<div
			className={className}
			style={{ ...style, display: "block", zIndex: "1"}} 
			onClick={onClick}
			>
			</div>
	)
}

export default function Works() {
  var settings = {
		adaptiveHeight: true,
		className: "center",
		centerMode: true,
		infinite: true,
		slidesToShow: 3,
		slideToScroll: 1,
		speed: 500,
		nextArrow: <NextArrow/>,
		prevArrow: <PrevArrow/>,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slideToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slideToScroll: 2,
					initialSlide: 2,
				},
			},
			{            
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slideToScroll: 1,
				},
			},
		]
		
		
  };
  return (
		<section className="works">
			<h2 className="works__title">Наши работы</h2>
    <Slider  {...settings}>
      <div>
        <img src={work1} alt="работа 1" />
      </div>
      <div>
        <img src={work2}  alt="работа 2" />
      </div>
      <div>
        <img src={work3}  alt="работа 3" />
      </div>
      <div>
        <img src={work4}  alt="работа 4" />
      </div>
      <div>
        <img src={work5}  alt="работа 5" />
      </div>
      <div>
        <img src={work6}  alt="работа 6" />
      </div>
      <div>
        <img src={work7}  alt="работа 7" />
      </div>
      <div>
        <img src={work8}  alt="работа 8" />
      </div>
      <div>
        <img src={work9}  alt="работа 9" />
      </div>
    </Slider>
		</section>
  );
}
