import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Heart = styled.img`
    width: 34px;
    height: 34px;
    grid-area: 1/2/3/3;
    margin-top: 20px;
`;

const HeartButton = ({ like, onClick }) => {
    return (
        <Heart src={like?"/public_assets/homeImg/full_heart.png":"/public_assets/homeImg/heart.svg"} onClick={onClick} />
    );
};

export default HeartButton;