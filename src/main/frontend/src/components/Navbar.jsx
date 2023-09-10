import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useRecoilState } from "recoil";
import { userInfo } from "../recoil";
import Login from "./SignIn"

export default function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [user, setUser] = useRecoilState(userInfo);

    console.log(user);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const logOut = () => {
        setUser(null);
    };

    return (
        <>
        <div className={styles.navBar}>
            <div className={styles.logoBox}>
                <img
                    src={`${process.env.PUBLIC_URL}/public_assets/logo.svg`}
                    className={styles.logo}
                    alt="Logo"
                />
            </div>
            <div className={styles.onOff}>
                {user?(
                    <>
                    <div className={styles.icon}>
                        <button className={styles.mypageButton}>마이페이지</button>
                    </div>
                    <div className={styles.icon}>
                        <button className={styles.mypageButton} onClick={logOut}>로그아웃</button>
                    </div>
                    </>  
                ):(
                    <>
                    <Link to="/signin" className={styles.linkTo}>
                        <div className={styles.icon}>
                            <button className={styles.mypageButton}>로그인</button>
                        </div>
                    </Link>
                    <Link to="/signup" className={styles.linkTo}>
                        <div>
                            <button className={styles.mypageButton}>회원가입</button>
                        </div>
                    </Link>
                    </>
                )}
                {/* <LoginModal isOpen={isModalOpen} onClose={closeModal} /> */}
            </div>
        </div>
        </>
    );
}