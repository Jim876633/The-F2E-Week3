import React from "react";
import { Bar, ProgressBarStyle } from "./ProgressBar.style";

const ProgressBar = ({ location }) => {
    const pathName = [
        "/",
        "/todoList",
        "/sprintPlan",
        "/sprintTodo",
        "/sprintIntro",
        "/retro",
        "/finish",
    ];

    const index = pathName.findIndex(
        (el) => el.toLowerCase() === location.pathname.toLowerCase()
    );

    const width = (window.innerWidth / 6) * index;

    return (
        <ProgressBarStyle>
            <Bar width={width} />
        </ProgressBarStyle>
    );
};

export default ProgressBar;
