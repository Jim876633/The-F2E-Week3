import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { opacityVariants, upOpacityVariants } from "../../animations/animate";
import TalkCard from "../../components/Card/TalkCard";
import Role from "../../components/Role/Role";
import {
    BackDropStyle,
    BottomWrap,
    TextWrap,
    TopWrap,
} from "../TodoList/TodoListPage.style";
import { SprintIntroPageStyle, EmptyWrap } from "./SprintIntroPage.style";

import data from "../../constants/data.json";
import SprintIntroItem from "../../components/SprintIntroItem/SprintIntroItem";
import {
    ButtonPrimaryStyle,
    ButtonStyle,
} from "../../components/Button/Button.style";
import Image from "../../components/Image/Image";
import { confluence, img_sprint_process } from "../../shared/ImageSource";
import { SprintTitleWrap } from "../../components/SprintIntroItem/SprintIntroItem.style";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import TodoSourceCard from "../../components/Card/TodoSourceCard";
import SprintTodoDrop from "../../components/Droppable/SprintTodoDrop";
import SprintEmptyDrop from "../../components/Droppable/SprintEmptyDrop";
import { useNavigate } from "react-router-dom";

const {
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    introduce,
    sprintExitList,
    sprintDragList,
} = data.sprintIntroPage;

const emptyDragList = [];

// step: start => introduction => toolRecommand => practice => finish => nextPage

const getRoleText = (state, animationEndHandler) => {
    switch (state) {
        case "start":
            return (
                <motion.p
                    key="p1"
                    variants={upOpacityVariants}
                    custom={"2rem"}
                    transition={{ duration: 0.2 }}
                    onAnimationComplete={animationEndHandler}
                >
                    {p1}
                </motion.p>
            );
        case "introduction":
            return (
                <motion.p
                    key="p2"
                    variants={upOpacityVariants}
                    custom={"2rem"}
                    transition={{ duration: 0.2 }}
                >
                    {p2.map((item, i) =>
                        i === 1 || i === 3 || i === 5 ? (
                            <span key={i}>{item}</span>
                        ) : (
                            item
                        )
                    )}
                </motion.p>
            );
        case "toolRecommand":
            return (
                <>
                    <motion.p
                        key="p3"
                        variants={upOpacityVariants}
                        custom={"2rem"}
                        transition={{ duration: 0.2 }}
                    >
                        {p3}
                    </motion.p>
                    <motion.p
                        key="p4"
                        variants={upOpacityVariants}
                        custom={"2rem"}
                        transition={{ duration: 0.2 }}
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                        }}
                    >
                        {p4.map((item, i) =>
                            i === 1 ? (
                                <small key={i}>
                                    <img src={confluence} alt={item} />
                                </small>
                            ) : (
                                item
                            )
                        )}
                    </motion.p>
                </>
            );
        case "practice":
            return (
                <>
                    <motion.h2
                        key="h2"
                        variants={upOpacityVariants}
                        custom={"2rem"}
                        transition={{ duration: 0.2 }}
                    >
                        {p5}
                    </motion.h2>
                    <motion.p
                        key="p6"
                        variants={upOpacityVariants}
                        custom={"2rem"}
                        transition={{ duration: 0.2 }}
                    >
                        {p6}
                        {p7}
                    </motion.p>
                </>
            );
        case "finish":
            return (
                <motion.h2
                    key="p8"
                    variants={upOpacityVariants}
                    custom={"2rem"}
                    transition={{ duration: 0.2 }}
                >
                    {p8}
                </motion.h2>
            );
    }
};

const SprintIntroPage = () => {
    const navigate = useNavigate();

    const [dragObj, setDragObj] = useState({
        drop_empty: emptyDragList,
        drop_todo: sprintDragList,
    });

    const [stepState, setStepState] = useState("start");

    const finishRef = useRef(false);

    const allowClickViewRef = useRef(false);

    const cleanState = () => {
        setDragObj({ drop_empty: emptyDragList, drop_todo: sprintDragList });
    };

    const allowClickHandler = () => {
        allowClickViewRef.current = true;
    };

    const practiceActionHandler = () => {
        setStepState("practice");
    };

    const viewClickHandler = () => {
        if (!allowClickViewRef.current) return;
        allowClickViewRef.current = false;
        if (stepState === "start") {
            setStepState("introduction");
        }
        if (stepState === "introduction") {
            setStepState("toolRecommand");
        }
        if (stepState === "finish") {
            setStepState("nextPage");
        }
    };

    const finishActionHandler = () => {
        setStepState("finish");
    };

    const navigateHandler = (e) => {
        if (e === "exit") {
            navigate("/retro");
        }
    };

    const dragEndHandler = (e) => {
        const { source, destination } = e;

        if (!destination) {
            return;
        }

        const newDragObj = { ...dragObj };

        if (
            source.droppableId === "drop_empty" &&
            destination.droppableId === "drop_empty"
        ) {
            const emptyList = newDragObj[destination.droppableId];

            let sourceObj = emptyList[source.index];

            let destinationObj = emptyList[destination.index];

            emptyList[source.index] = destinationObj;

            emptyList[destination.index] = sourceObj;

            newDragObj.drop_empty = emptyList;
        } else {
            const [dragItem] = newDragObj[source.droppableId].splice(
                source.index,
                1
            );
            newDragObj[destination.droppableId].splice(
                destination.index,
                0,
                dragItem
            );
        }
        //detect match answer

        const newEmptyList = newDragObj.drop_empty.map((item, i) =>
            item.answerId === i
                ? { ...item, match: "correct" }
                : { ...item, match: "wrong" }
        );

        newDragObj.drop_empty = newEmptyList;

        setDragObj(newDragObj);

        //finish action
        const correctCount = newDragObj.drop_empty.filter(
            (item) => item.match === "correct"
        );

        if (correctCount.length === newDragObj.drop_empty.length) {
            finishRef.current = true;
        }
    };

    useEffect(() => {
        return cleanState();
    }, []);

    return (
        <SprintIntroPageStyle onClick={viewClickHandler}>
            {stepState === "finish" ? (
                <BackDropStyle
                    key="backdrop"
                    as={motion.div}
                    variants={opacityVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                    zindex="top"
                    bg="gradient"
                >
                    <ButtonStyle
                        top="50%"
                        left="50%"
                        title="點擊畫面任意處繼續"
                        style={{
                            cursor: "auto",
                            transform: "translateX(-50%)",
                        }}
                        as={motion.button}
                        variants={opacityVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{
                            duration: 0.2,
                            delay: 0.3,
                        }}
                        onAnimationComplete={allowClickHandler}
                    >
                        點擊畫面任意處繼續
                    </ButtonStyle>
                </BackDropStyle>
            ) : null}
            <AnimatePresence>
                {stepState !== "nextPage" ? (
                    <TopWrap style={{ zIndex: 15 }}>
                        <TalkCard
                            key="talkCard"
                            delay={0}
                            isContinue={true}
                            role="ee"
                        >
                            <TextWrap
                                as={motion.div}
                                variants={opacityVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                transition={{
                                    duration: 0.2,
                                    delay: 0,
                                    when: "beforeChildren",
                                    staggerChildren: 0.2,
                                }}
                            >
                                <AnimatePresence mode="wait">
                                    {getRoleText(stepState, allowClickHandler)}
                                </AnimatePresence>
                            </TextWrap>
                        </TalkCard>
                        <Role role="ee" key="ee" complete={navigateHandler} />
                    </TopWrap>
                ) : null}
            </AnimatePresence>
            <BottomWrap
                style={{
                    paddingInline: "15rem",
                    gap: "8rem",
                }}
            >
                {stepState === "introduction" || stepState === "toolRecommand"
                    ? introduce.map((item, i) => (
                          <SprintIntroItem
                              key={i}
                              item={item}
                              index={i}
                              animateEnd={allowClickHandler}
                          />
                      ))
                    : null}
                {stepState === "toolRecommand" ? (
                    <ButtonPrimaryStyle
                        title="練習去囉"
                        right="5rem"
                        bottom="8rem"
                        as={motion.button}
                        variants={opacityVariants}
                        initial="hidden"
                        animate="visible"
                        onClick={practiceActionHandler}
                    >
                        練習去囉
                    </ButtonPrimaryStyle>
                ) : null}
                {stepState === "practice" ? (
                    <>
                        <Image
                            src={img_sprint_process}
                            h="56rem"
                            w="100rem"
                            top="0rem"
                            left="12rem"
                        />
                        {sprintExitList.map((item, i) => (
                            <SprintTitleWrap
                                key={"sprint" + i}
                                as={motion.div}
                                variants={opacityVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    duration: 0.2,
                                    delay: i / 2 + 0.5,
                                }}
                                type="example"
                                style={{
                                    position: "absolute",
                                    left: "25rem",
                                    top: `${2 + i * 10}rem`,
                                }}
                            >
                                <h2>{item.title}</h2>
                                <span>{item.titleEn}</span>
                            </SprintTitleWrap>
                        ))}
                        {Array(3)
                            .fill(null)
                            .map((item, i) => (
                                <EmptyWrap
                                    key={"empty" + i}
                                    as={motion.div}
                                    variants={opacityVariants}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{
                                        duration: 0.2,
                                        delay: 2.2,
                                    }}
                                ></EmptyWrap>
                            ))}
                        <DragDropContext onDragEnd={dragEndHandler}>
                            <div
                                style={{
                                    width: " 100%",
                                    height: " 100%",
                                    position: "absolute",
                                }}
                            >
                                <SprintTodoDrop
                                    sprintDragList={dragObj.drop_todo}
                                />
                                <SprintEmptyDrop
                                    emptyDragList={dragObj.drop_empty}
                                />
                            </div>
                        </DragDropContext>
                        <ButtonPrimaryStyle
                            title="我完成了"
                            right="5rem"
                            bottom="8rem"
                            as={motion.button}
                            variants={opacityVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 2.5 }}
                            disabled={!finishRef.current}
                            onClick={finishActionHandler}
                        >
                            我完成了
                        </ButtonPrimaryStyle>
                    </>
                ) : null}
            </BottomWrap>
        </SprintIntroPageStyle>
    );
};

export default SprintIntroPage;
