import React, { useState } from 'react';
import Card from "../components/Card";
import styles from "../styles/Home.module.css";
import ImageSlider from "../components/Slider";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DetailBuilding() {
    const [imgUrl,setImgUrl] = useState(['1']);
    const [SliderTextTop,setSliderTextTop]=useState("인기있는 이색 농촌 전원주택");
    const [SliderTextBottom,setSliderTextBottom]=useState("함께 가꾸어나가는 귀농생활을 귀농귀농에서 함께해보세요! 행복한 전원생활의 순간들!");
    return (
        <>
            <Navbar />
            <ImageSlider imgUrl={imgUrl} SliderTextTop={SliderTextTop} SliderTextBottom={SliderTextBottom}/> 
            <h2>살아보고 싶은 이색 농촌 전원 주택</h2>
            <div className={styles.card}>
                <Card
                    image={`${process.env.PUBLIC_URL}/public_assets/homeImg/building-1.png`}
                    imageTop={`${process.env.PUBLIC_URL}/public_assets/homeImg/heart.svg`}
                    imageUnder={`인기`}
                    textTop={`청원 사과마을 전원주택`}
                    textTopRight={`4.91`}
                    textMiddle1={`전라북도 임실군*김옥춘 할머니와 함께`}
                    textMiddle2={`2023년 8월 31일 ~ 2024년 1월 31일`}
                    textUnderLeft={`${process.env.PUBLIC_URL}/public_assets/homeImg/building-host.svg`}
                    textUnderRight={`월10/6개월`}/>
                <Card
                    image={`${process.env.PUBLIC_URL}/public_assets/homeImg/building-1.png`}
                    imageTop={`${process.env.PUBLIC_URL}/public_assets/homeImg/heart.svg`}
                    imageUnder={`인기`}
                    textTop={`청원 사과마을 전원주택`}
                    textTopRight={`4.91`}
                    textMiddle1={`전라북도 임실군*김옥춘 할머니와 함께`}
                    textMiddle2={`2023년 8월 31일 ~ 2024년 1월 31일`}
                    textUnderLeft={`${process.env.PUBLIC_URL}/public_assets/homeImg/building-host.svg`}
                    textUnderRight={`월10/6개월`}/>
                <Card
                    image={`${process.env.PUBLIC_URL}/public_assets/homeImg/building-1.png`}
                    imageTop={`${process.env.PUBLIC_URL}/public_assets/homeImg/heart.svg`}
                    imageUnder={`인기`}
                    textTop={`청원 사과마을 전원주택`}
                    textTopRight={`4.91`}
                    textMiddle1={`전라북도 임실군*김옥춘 할머니와 함께`}
                    textMiddle2={`2023년 8월 31일 ~ 2024년 1월 31일`}
                    textUnderLeft={`${process.env.PUBLIC_URL}/public_assets/homeImg/building-host.svg`}
                    textUnderRight={`월10/6개월`}/>
            </div>
            <Footer />
        </>
    );
}

