import React, { useState } from 'react';
import styles from '../styles/Card.module.css'

export default function Card({image,imageTop,imageUnder,textTop,textTopRight,textMiddle1,textMiddle2,textUnderLeft,textUnderRight}) {
    return (
        <div className={styles.div}>
            <div className={styles.wrapImg}>
                <div className={styles.wrapImgDirect}><img className={styles.image} src={image} /></div>
                <div className={styles.heart}><img className={styles.img} src={imageTop} /></div>
                <ShowStatus text={imageUnder}/>
            </div>
            <div className={styles.wrapText}>
                <div className={styles.textTop}>
                    <div className={styles.textTop1}>{textTop}</div>
                    <ShwoStar text={textTopRight}/>
                </div>
                <div className={styles.textMiddle1}>{textMiddle1}</div>
                <div className={styles.textMiddle2}>{textMiddle2}</div>
                <div className={styles.textUnder}>
                    <div><img src={textUnderLeft} /></div>
                    <ShowTextUnderRight status={imageUnder} text={textUnderRight}/>
                </div>
            </div>
        </div>
    );
}

function ShwoStar({text}){
    if(text){
        return <div className={styles.textTop2}><img src={`${process.env.PUBLIC_URL}/public_assets/homeImg/star.svg`} />{text}</div>;
    }
    return null;
}
function ShowStatus({text}){
    if(text==='모집중'){
        return <div className={styles.textBlue}>{text}</div>
    }
    else if(text==='인기'){
        return <div className={styles.textYellow}>{text}</div>
    }
    return null;
}
function ShowTextUnderRight({status,text}){
    if(status==='모집중'){
        return <div className={styles.bottomRightRed}>{text}</div>;
    }
    else if(status==='인기'){
        return <div className={styles.bottomRightBlue}>{text}</div>;
    }
    return null;
}

/*
[코드 구현]
--
No 1.Card.jsx
--
image(배경사진)
imageTop(하트)
imageUnder(모집중/인기-blue/yellow)
textTop[굵게+크게]
textTopRight(별점)
textMiddle1[작게-black]
textMiddle2[작게-grey]
textUnderLeft(호스트 사진)
textUnderRight(월세/개월수-red/blue)

--
No 2.CardLong.jsx
--
image(배경사진)
imageTop(하트)
textTop[굵게+크게]
textMiddle1[작게-grey]
textMiddle2[작게-grey]
textUnderRight(별점)
*/

/*
[실제 데이터 구성]
--
Title. 파밍 홀리데이
--
이미지-하단 '모집중' | blue
텍스트-상단 '전문분야'
텍스트-중간 '지역'
텍스트 중간 '날짜'
텍스트 하단 우측 '월 200/6개월' | red

--
Title. 살아보고 싶은 이색 농촌 전원 주택
--
이미지-상단 '하트 이미지'
이미지-하단 '인기' | yellow
텍스트-상단 '청원 사과마을 전원주택(2/5층)'
텍스트-상단 우측 '별 이미지+평점' => 한꺼번에! 상단 우측은 전원주택에만 있으니까, 별 이미지는 자동으로 추가되도록. DB에선 평점만 받도록!
텍스트-중간 '지역+호스트'
텍스트-중간 '날짜'
텍스트-하단 좌측 '호스트 이미지'
텍스트-하단 우측 '월세10/6개월'

--
Title. 파밍 홀리데이 순간들
--
이미지-상단 '하트 이미지'
텍스트-상단 '6개월 체험 프로그램'
텍스트-중간 '#토마토 재배 스마트팜'

--
Title. 파밍 홀리데이 슈퍼 호스트
--
이미지-상단 '하트 이미지'
텍스트-상단 '전문분야+호스트 이름+호스트'
텍스트-중간 '#'
텍스트-중간 '#'
텍스트-하단 우측 '별 이미지+리뷰 개수' => 분리하는 방향으로!
*/