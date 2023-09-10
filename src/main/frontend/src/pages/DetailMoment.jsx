import React, { useState } from 'react';
import Card from "../components/Card";
import styles from "../styles/Home.module.css";
import ImageSlider from "../components/Slider";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DetailMoment() {
    const [imgUrl,setImgUrl] = useState(['1']);
    const [SliderTextTop,setSliderTextTop]=useState("파밍 홀리데이 순간들");
    const [SliderTextBottom,setSliderTextBottom]=useState("함께 가꾸어나가는 귀농생활을 귀농귀농에서 함께해보세요! 행복한 전원생활의 순간들!");
    return (
        <>
            <Navbar />
            <ImageSlider imgUrl={imgUrl} SliderTextTop={SliderTextTop} SliderTextBottom={SliderTextBottom}/> 
            <h2>파밍 홀리데이 순간들</h2>
            <div className={styles.card}>
                <Card
                    image={`${process.env.PUBLIC_URL}/public_assets/homeImg/package-3.png`}
                    imageTop={`${process.env.PUBLIC_URL}/public_assets/homeImg/heart.svg`}
                    textTop={`6개월 체험 프로그램`}
                    textMiddle1={`#토마토 재배 스마트팜`}/>
                <Card
                    image={`${process.env.PUBLIC_URL}/public_assets/homeImg/package-3.png`}
                    imageTop={`${process.env.PUBLIC_URL}/public_assets/homeImg/heart.svg`}
                    textTop={`6개월 체험 프로그램`}
                    textMiddle1={`#토마토 재배 스마트팜`}/>
                <Card
                    image={`${process.env.PUBLIC_URL}/public_assets/homeImg/package-3.png`}
                    imageTop={`${process.env.PUBLIC_URL}/public_assets/homeImg/heart.svg`}
                    textTop={`6개월 체험 프로그램`}
                    textMiddle1={`#토마토 재배 스마트팜`}/>
            </div>
            <Footer />
        </>
    );
}

