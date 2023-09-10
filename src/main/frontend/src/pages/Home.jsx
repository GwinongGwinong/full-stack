import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom'; 
import styles from "../styles/Home.module.css";
import ImageSlider from "../components/Slider";
import Card from "../components/Card";
import CardLong from "../components/CardLong";
import { useRecoilState } from "recoil";
import { userInfo } from "../recoil";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import SearchGuest from "../components/SearchGuest";
import SearchApplicant from "../components/SearchApplicant";
import MypageHost from "./MypageHost";

export default function Home() {
    /*
    Card Component
    : imageTop,imageUnder,
    textTop,textTopRight,
    textMiddle1,textMiddle2,
    textUnderLeft,textUnderRight
    */
    const [user, setUser] = useRecoilState(userInfo);

    const mainList=['홀리데이 패키지','이색 전원주택','홀리데이 커뮤니티','호스트 이야기'];
    const showMore='더보러가기 >';
    const [imgUrl,setImgUrl] = useState(['1','2','2']);
    const [SliderTextTop,setSliderTextTop]=useState("함께 가꾸어나가는 귀농생활");
    const [SliderTextBottom,setSliderTextBottom]=useState("함께 가꾸어나가는 귀농생활을 귀농귀농에서 함께해보세요! 행복한 전원생활을 함께해보세요!");
    return (
        <>
        <Navbar/>
        <ImageSlider imgUrl={imgUrl} SliderTextTop={SliderTextTop} SliderTextBottom={SliderTextBottom}/>   
        <div className={styles.titles}>
            <a href='#one'>{mainList[0]}</a>
            <a href='#two'>{mainList[1]}</a>
            <a href='#three'>{mainList[2]}</a>
            <a href='#four'>{mainList[3]}</a>
        </div>
        <div id="one">
            <h2>인기있는 파밍 홀리데이 패키지</h2>
            <div className={styles.showMore}>
                <Link to="/detailpackage">
                    {showMore}
                </Link>
            </div>
            <div className={styles.card}>
                <Link to="/holidaypackage"> 
                    <Card
                        image={`${process.env.PUBLIC_URL}/public_assets/homeImg/package-1.png`}
                        imageUnder={`모집중`}
                        textTop={`벼농사 재배 경운기`}
                        textTopRight={`4.91`}
                        textMiddle1={`전라북도 부안군`}
                        textMiddle2={`2023년 8월 10일 ~ 2024년 1월 10일`}
                        textUnderRight={`월230/6개월`}/>             
                </Link>
                <Link to="/holidaypackage">
                    <Card
                        image={`${process.env.PUBLIC_URL}/public_assets/homeImg/package-2.png`}
                        imageUnder={`모집중`}
                        textTop={`치즈 유가공`}
                        textMiddle1={`전라북도 임실군`}
                        textMiddle2={`2023년 8월 20일 ~ 2024년 1월 20일`}
                        textUnderRight={`월220/7개월`}/>
                </Link>
                <Link to="/holidaypackage">
                    <Card
                        image={`${process.env.PUBLIC_URL}/public_assets/homeImg/package-2.png`}
                        imageUnder={`모집중`}
                        textTop={`치즈 유가공`}
                        textMiddle1={`전라북도 임실군`}
                        textMiddle2={`2023년 8월 20일 ~ 2024년 1월 20일`}
                        textUnderRight={`월220/7개월`}/>
                </Link>
            </div>
        </div>
        <div id="two">
            <h2>살아보고 싶은 이색 농촌 전원 주택</h2>
            <div className={styles.showMore}>
                <Link to="/detailbuilding">
                    {showMore}
                </Link>
            </div>
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
                <Card />
                <Card />
            </div>
        </div>
        <div id="three">
            <h2>파밍 홀리데이 순간들</h2>
            <div className={styles.showMore}>
                <Link to="/detailmoment">
                    {showMore}
                </Link>
            </div>
            <div className={styles.card}>
                <Card
                    image={`${process.env.PUBLIC_URL}/public_assets/homeImg/package-3.png`}
                    imageTop={`${process.env.PUBLIC_URL}/public_assets/homeImg/heart.svg`}
                    textTop={`6개월 체험 프로그램`}
                    textMiddle1={`#토마토 재배 스마트팜`}/>
                <Card />
                <Card />
            </div>
        </div>
        <div id="four">
            <h2>파밍 홀리데이 슈퍼 호스트</h2>
            <div className={styles.showMore}>
                <Link to="/detailhost">
                    {showMore}
                </Link>
            </div>
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
        </div>
        <Footer />
        <MypageHost />
        </>
    );
        
}