import React from 'react';
import { useState } from 'react';
import styles from '../styles/SearchApplicant.module.css';

export default function SearchApplicant() {
    const [total,setTotal]=useState(0);
    return (
        <div>
            <h2>파밍 홀리데이 신청자 조회</h2>
            <hr />
            <div>{total}개의 신청서</div>
            <div className={styles.top}>
                <div>신청자 성명</div>
                <div>숙소</div>
                <div>숙박 일정</div>
                <div>월급</div>
            </div>
            <hr />
            <div className={styles.bottom}>
                <div>김나영</div>
                <div>전북 임실 치즈 전원주택 1인실</div>
                <div>2023.7.30~2023.7.30</div>
                <div>310</div>
                <button className={styles.buttonYes} type='button'>수락</button>
                <button className={styles.buttonNo} type='button'>거절</button>
            </div>
            <hr />
        </div>
    );
}

