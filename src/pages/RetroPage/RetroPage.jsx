import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { opacityVariants, upOpacityVariants } from "../../animations/animate";
import TalkCard from "../../components/Card/TalkCard";
import Role from "../../components/Role/Role";
import {
    BackDropStyle,
    BottomWrap,
    TextWrap,
    TopWrap,
} from "../TodoList/TodoListPage.style";
import { RetroPageStyle } from "./RetroPage.style";
import data from "../../constants/data.json";
import QuestionItem from "../../components/QuestionItem/QuestionItem";
import {
    ButtonPrimaryStyle,
    ButtonStyle,
} from "../../components/Button/Button.style";

const { p1, p2, p3, question, answer } = data.retroPage;

const getRoleText = (state, animationEndHandler) => {
    switch (state) {
        case "start":
            return (
                <motion.p
                    key="p1"
                    variants={upOpacityVariants}
                    custom={"2rem"}
                    transition={{ duration: 0.2 }}
                >
                    {p1}
                </motion.p>
            );
        case "question":
            return (
                <motion.p
                    key="p2"
                    variants={upOpacityVariants}
                    custom={"2rem"}
                    transition={{ duration: 0.2 }}
                >
                    {p2}
                </motion.p>
            );
        case "finish":
            return (
                <motion.h2
                    key="h2"
                    variants={upOpacityVariants}
                    custom={"2rem"}
                    transition={{ duration: 0.2 }}
                >
                    {p3}
                </motion.h2>
            );
        default:
            return;
    }
};

const RetroPage = () => {
    const navigate = useNavigate();

    const allowViewClickRef = useRef(false);

    const [stepState, setStepState] = useState("start");

    const [answerState, setAnswerState] = useState({});

    const [correctState, setCorrectState] = useState([]);

    const allowClickHandler = () => {
        allowViewClickRef.current = true;
    };
    const viewClickHandler = () => {
        if (!allowViewClickRef.current) return;
        if (stepState === "start") {
            setStepState("question");
        }
        if (stepState === "finish") {
            setStepState("nextPage");
        }
    };

    const navigateHandler = (e) => {
        if (e === "visible") {
            allowClickHandler();
        }
        if (e === "exit") {
            navigate("/finish");
        }
    };

    const radioHandler = (e) => {
        const answerItem = { [e.target.name]: e.target.id };

        setAnswerState({ ...answerState, ...answerItem });

        setCorrectState([true, true]);
    };

    const finishHandler = () => {
        const isCorrectList = answer.map(
            (item, i) => answerState[`question${i}`] === item
        );
        setCorrectState(isCorrectList);

        if (isCorrectList.every((item) => item)) {
            setStepState("finish");
        }
    };

    return (
        <RetroPageStyle onClick={viewClickHandler}>
            <AnimatePresence>
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
                                delay: 0.5,
                            }}
                            onAnimationComplete={allowClickHandler}
                        >
                            點擊畫面任意處繼續
                        </ButtonStyle>
                    </BackDropStyle>
                ) : null}
                {stepState !== "nextPage" ? (
                    <TopWrap style={{ zIndex: 15 }}>
                        <TalkCard
                            key="talkCard"
                            delay={0}
                            isContinue={
                                stepState === "start" || stepState === "finish"
                            }
                            role="gg"
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
                        <Role role="gg" key="gg" complete={navigateHandler} />
                    </TopWrap>
                ) : null}
            </AnimatePresence>
            <BottomWrap
                style={{
                    alignItems: "flex-start",
                    gap: "10rem",
                    paddingTop: "5rem",
                    paddingRight: "10rem",
                }}
            >
                {stepState === "question"
                    ? question.map((item, i) => (
                          <QuestionItem
                              key={i}
                              item={item}
                              index={i}
                              radioHandler={radioHandler}
                              correct={correctState[i]}
                          />
                      ))
                    : null}
                {stepState === "question" ? (
                    <ButtonPrimaryStyle
                        title="我選好了"
                        right="5rem"
                        bottom="8rem"
                        as={motion.button}
                        variants={opacityVariants}
                        initial="hidden"
                        animate="visible"
                        disabled={Object.keys(answerState).length !== 2}
                        onClick={finishHandler}
                    >
                        我選好了
                    </ButtonPrimaryStyle>
                ) : null}
            </BottomWrap>
        </RetroPageStyle>
    );
};

export default RetroPage;
