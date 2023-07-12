import React from "react";
import Slider from "react-slick";
import './style.css'
import time from "../../assets/images/first_slider_icon.svg"
import search from "../../assets/images/second_slider_icon.svg";
import security from "../../assets/images/third_slider_icon.svg";

export default function HomeSlider() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }
      ]
    };
    return (
      <Slider className="second-section_slider_group"{...settings}>
        <div className="second-section_block">
              <div className="slider_icon-card"><img className="slider_icon-one" src={time} alt="clock" /></div>
              <p className="slider-text-one">Высокая и оперативная скорость обработки заявки</p>
        </div>

        <div className="second-section_block slider-block-second">
              <div className="slider_icon-card"><img className="slider_icon-two" src={search} alt="search" /></div>
              <p className="slider-text-two">Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</p>
        </div>

        <div className="second-section_block slider-block-third">
              <div className="slider_icon-card"><img className="slider_icon-three" src={security} alt="lock" /></div>
              <p className="slider-text-three">Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</p>
        </div>
      
        <div className="second-section_block slider-block-third">
              <div className="slider_icon-card"><img className="slider_icon-three" src={security} alt="lock" /></div>
              <p className="slider-text-three">Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</p>
        </div>

        <div className="second-section_block slider-block-second">
              <div className="slider_icon-card"><img className="slider_icon-two" src={search} alt="search" /></div>
              <p className="slider-text-two">Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</p>
        </div>
      </Slider>
    );
}