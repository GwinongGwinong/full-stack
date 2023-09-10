import React, { useState } from 'react';
import styles from '../styles/CardLong.module.css'

export default function CardLong({image,imageTop,textTop,textMiddle1,textMiddle2,textUnderRight}) {
    return (
        <div className={styles.div}>
            <div className={styles.wrapImg}>
                <div className={styles.wrapImgDirect}><img className={styles.image} src={image} /></div>
                <div className={styles.heart}><img className={styles.img} src={imageTop} /></div>
            </div>
            <div className={styles.wrapText}>
                <div className={styles.textTop}>{textTop}</div>
                <div className={styles.textMiddle}>{textMiddle1}</div>
                <div className={styles.textMiddle}>{textMiddle2}</div>
                <div className={styles.bottomRight}>
                    <img src={`${process.env.PUBLIC_URL}/public_assets/homeImg/star.svg`} />
                    {textUnderRight}
                </div>
            </div>
        </div>
    );
}

/*
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