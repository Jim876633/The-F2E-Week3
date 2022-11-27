import React, { useEffect, useRef, useState } from "react";
import { Bar, ProgressBarStyle } from "./ProgressBar.style";

const ProgressBar = ({ location }) => {
    const progressRef = useRef();

    const [barWidth, setBarWidth] = useState();

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

    useEffect(() => {
        const viewWidth = progressRef.current.offsetWidth;
        const width = (viewWidth / 6) * index;
        setBarWidth(width);
    }, [index]);

    return (
        <ProgressBarStyle ref={progressRef}>
            <Bar width={barWidth} />
        </ProgressBarStyle>
    );
};

export default ProgressBar;
