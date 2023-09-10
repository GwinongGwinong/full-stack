import React, { useState } from 'react';
import CardLong from "../components/CardLong";
import styles from "../styles/Home.module.css";
import ImageSlider from "../components/Slider";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DetailHost() {
    const [imgUrl,setImgUrl] = useState(['1']);
    const [SliderTextTop,setSliderTextTop]=useState("인기있는 슈퍼 호스트");
    const [SliderTextBottom,setSliderTextBottom]=useState("함께 가꾸어나가는 귀농생활을 귀농귀농에서 함께해보세요! 행복한 전원생활의 순간들!");
    return (
        <>  
            <Navbar />
            <ImageSlider imgUrl={imgUrl} SliderTextTop={SliderTextTop} SliderTextBottom={SliderTextBottom}/> 
            <h2>파밍 홀리데이 슈퍼 호스트</h2>
            <div className={styles.card}>
                <CardLong
                    image={`${process.env.PUBLIC_URL}/public_assets/homeImg/host-1.png`}
                    imageTop={`${process.env.PUBLIC_URL}/public_assets/homeImg/heart.svg`}
                    textTop={`양봉 양춘식 호스트`}
                    textMiddle1={`#양봉 30년차`}
                    textMiddle2={`#벌꿀로 강남 건물주`}
                    textUnderRight={`4.91`}/>
                <CardLong
                    image={`${process.env.PUBLIC_URL}/public_assets/homeImg/host-1.png`}
                    imageTop={`${process.env.PUBLIC_URL}/public_assets/homeImg/heart.svg`}
                    textTop={`양봉 양춘식 호스트`}
                    textMiddle1={`#양봉 30년차`}
                    textMiddle2={`#벌꿀로 강남 건물주`}
                    textUnderRight={`4.91`}/>
                <CardLong
                    image={`${process.env.PUBLIC_URL}/public_assets/homeImg/host-1.png`}
                    imageTop={`${process.env.PUBLIC_URL}/public_assets/homeImg/heart.svg`}
                    textTop={`양봉 양춘식 호스트`}
                    textMiddle1={`#양봉 30년차`}
                    textMiddle2={`#벌꿀로 강남 건물주`}
                    textUnderRight={`4.91`}/>
                <CardLong
                    image={`${process.env.PUBLIC_URL}/public_assets/homeImg/host-1.png`}
                    imageTop={`${process.env.PUBLIC_URL}/public_assets/homeImg/heart.svg`}
                    textTop={`양봉 양춘식 호스트`}
                    textMiddle1={`#양봉 30년차`}
                    textMiddle2={`#벌꿀로 강남 건물주`}
                    textUnderRight={`4.91`}/>
            </div>
            <Footer />
        </>
    );
}

