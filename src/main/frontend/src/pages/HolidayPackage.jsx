import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/HolidayPackage.module.css";
import HeartButton from "../components/HeartButton";
import Navbar from "../components/Navbar"

import "../styles/HolidayPackage.css";

export default function HolidayPackage() {
    //임시 데이터 
    const imgIndex = '1';
    const area = '전라북도 임실군';
    const packageName = '임실치즈마을 치즈공업';
    const address = '전라북도 임실군 임실읍 치즈마을 1길 4 임실치즈마을';
    const applyPeriod = '2023.03.06~2023.09.01';
    const packageInfoData = ['2023.03.06~2023.09.01','2023.09.01~2024.03.01','주5일','30명','2023.09.01']
    const cost = [{"가격":"월 770", "기간":"7개월"}]

    // 옵션 목록 배열
    const options = [
        '옵션 1',
        '옵션 2',
        '옵션 3',
        '옵션 4',
    ];

    //실제 사용
    const [like, setLike] = useState(false) //찜(하트) 버튼 클릭 여부

    const [selectedRoom, setSelectedRoom] = useState(''); //객실 선택 목록 관리
    const [showOptions, setShowOptions] = useState(false); // 옵션 목록 표시 여부 상태

    const [packageInfo, setpackageInfo] = useState(['신청기간','근무기간','근무요일','모집인원','입주날짜'])
    //찜 여부 DB 연동
    // useEffect(async () => { 
    //     const fetchData = async () => {
    //       const res = await axios.get(...)
    //       if (res.data.type === 'liked') setLike(true)
    //     }
    //     fetchData()
    //   }, []);
    

      // 옵션을 선택하면 선택된 값을 업데이트하고 옵션 목록을 닫습니다.
  const handleOptionClick = (option) => {
    setSelectedRoom(option);
    setShowOptions(false);
  };

      // 선택된 옵션을 변경하는 핸들러 함수
  const handleOptionChange = (event) => {
    setSelectedRoom(event.target.value);
    setShowOptions(false);

  };


    const toggleLike = async (e) => {
        // const res = await axios.post(...) // 사용자가 좋아요를 누름 -> DB 갱신
        setLike(!like);
    }

    return (
        <>
        <Navbar/>
        <div className={styles.TopWrap}>
            <div className={styles.imageContainer}>
                <img
                src={`/public_assets/packageImg/package_img_${imgIndex}.svg`}              
                alt={`Image ${imgIndex}`}
                className ={styles.mainImg} 
                />
                <button className={styles.villageButton}>마을 전경</button>
            </div>
            
            <span className={styles.profileLayout}>
                <div className={styles.layoutTop}>
                    <p className={styles.area}> 
                        {area}
                    </p>
                    <HeartButton like={like} onClick={toggleLike}/>
                    <h2 className={styles.packageName}>
                        {packageName}
                    </h2>
                    <p className={styles.address}>
                        {address}
                    </p>
                </div>
                <div className={styles.blackLine}></div>
                <div className={styles.layoutBottom}>
                    <div className={styles.innerWrap}>
                        {packageInfo.map((info,index)=>{
                            return(
                                <p key={index} className={styles.innerText}> {info} </p>
                                )
                            })
                        }
                    </div>
                    <div className={styles.innerWrap}>
                        {packageInfoData.map((info,index)=>{
                                return(
                                <p key={index} className={styles.dataText}> {info} </p>
                                )
                            })
                        }
                    </div>
                    <div className={styles.innerPlus}>
                        <button className={styles.chat}> 채팅하기 </button>
                        <p className={styles.cost}> {cost[0].가격}/{cost[0].기간}</p>
                    </div>
                </div>
                
                <div className={styles.roomSelect}>
                    <select id="dropdown" value={setSelectedRoom} onChange={handleOptionChange} className={styles.selectRoom}>
                        <option value="" className={styles.selectRoom}>객실선택</option>
                        {options.map((option, index) => (
                        <option key={index} value={option} className={styles.selectRoom}>
                            {option}
                        </option>
                        ))}
                    </select>
                    <button className={styles.admit}>
                        신청하기
                    </button>
                </div>
            </span>
        </div>
        
        
        </>
    );
}