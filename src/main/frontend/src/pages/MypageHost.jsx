import React from 'react';
import SearchGuest from '../components/SearchGuest';
import SearchApplicant from '../components/SearchApplicant';
import styles from "../styles/MypageHost.module.css";

export default function MypageHost() {
    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.wrapLR}>
                    <div className={styles.wrapTD}>
                        <div>이미지</div>
                        <div>김민정</div>
                        <div>게스트</div>
                    </div>
                    <div className={styles.wrapTD}>
                        <div>평점</div>
                        <div>근무</div>
                        <div>수익창출</div>
                    </div>
                </div>
                <div>홀리데이 게스트 조회</div>
                <div>홀리데이 신청자 조회</div>
            </div>
            <SearchGuest />
            <SearchApplicant />
        </>
    );
}

