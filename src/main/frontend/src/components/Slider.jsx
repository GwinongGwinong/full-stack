import React, { Component } from "react";
import "../styles/Slider.css";
import styles from "../styles/Slider.module.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = (props) => {
  const imgArr = Object.values(props.imgUrl);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    appendDots: (dots) => (
        <div
          style={{
            color: 'white',
            marginLeft: '87%',
            marginBottom: '46vh',
            width: '10%',
            position: 'absolute',
            bottom: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ul> {dots} </ul>
        </div>
      ),
      
  };

  return (

    <div>
    <Slider {...settings}>
        {imgArr&&
            imgArr.map((imgURL,index)=> (
            <div>
                <img
                    key={index}
                    src={`${process.env.PUBLIC_URL}/public_assets/mainImg/main_${imgURL}.svg`}
                    alt="main"
                    className={styles.imgSlide}
                />
                <p className={styles.slideText}>{props.SliderTextTop}</p>
                <p className={styles.intro}>{props.SliderTextBottom}</p>
            </div>
        ))}
    </Slider>
    </div>
    
  );
};

export default ImageSlider;


