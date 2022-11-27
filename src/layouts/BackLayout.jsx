import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { bg_village } from "../shared/ImageSource";

const BackgroundStyle = styled.main`
    position: relative;
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
