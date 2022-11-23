import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { bg_village } from "../shared/ImageSource";

const BackgroundStyle = styled.main`
    width: 100%;
    height: 100%;
    background: url(${bg_village});
    background-repeat: no-repeat;
    background-size: cover;
`;

const BackLayout = () => {
    return (
        <BackgroundStyle>
            <Outlet />
        </BackgroundStyle>
    );
};

export default BackLayout;
