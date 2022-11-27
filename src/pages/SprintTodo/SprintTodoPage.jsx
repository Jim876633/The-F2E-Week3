import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { opacityVariants, upOpacityVariants } from "../../animations/animate";
import TalkCard from "../../components/Card/TalkCard";
import Role from "../../components/Role/Role";
import {
    BackDropStyle,
    BottomWrap,
    TextWrap,
    TopWrap,
} from "../TodoList/TodoListPage.style";
import { SprintTodoPageStyle } from "./SprintTodoPage.style";

import data from "../../constants/data.json";
import { DragDropContext } from "react-beautiful-dnd";
import TodoCard from "../../components/Card/TodoCard";
import TodoSourceCard from "../../components/Card/TodoSourceCard";
import {
    ButtonPrimaryStyle,
    ButtonStyle,
} from "../../components/Button/Button.style";
import { useNavigate } from "react-router-dom";

const { p1, p2, p3, p4, todoList } = data.sprintTodoPage;

const initialDropsObj = { drop_todoSourceList: todoList, drop_todoList: [] };

const SprintTodoPage = () => {
    const navigate = useNavigate();

    const [dropsObj, setDropsObj] = useState(
        JSON.parse(JSON.stringify(initialDropsObj))
    );

    const [finishAction, setFinishAction] = useState(false);

    const [continueAction, setContinueAction] = useState(false);

    const allowSprintRef = useRef(false);

    const cleanState = () => {
        setDropsObj(initialDropsObj);
    };

    const finishActionHandler = () => {
        setFinishAction(true);
    };

    const continueClickHandler = () => {
        if (finishAction) {
            setContinueAction(true);
        }
    };

    const animationEndHandler = (e) => {
        if (e === "exit") {
            navigate("/sprintIntro");
        }
    };

    const dragEndHandler = (e) => {
        const { source, destination } = e;

        if (!destination) {
            return;
        }
        const newDropsObj = { ...dropsObj };

        const [dragItem] = newDropsObj[source.droppableId].splice(
            source.index,
            1
        );

        newDropsObj[destination.droppableId].splice(
            destination.index,
            0,
            dragItem
        );

        setDropsObj(newDropsObj);

        //判斷是否可以 sprint

        const totalCount = newDropsObj.drop_todoList.reduce(
            (total, item) => item.point + total,
            0
        );
        if (totalCount < 20 && newDropsObj.drop_todoList.length >= 2) {
            allowSprintRef.current = true;
        } else {
            allowSprintRef.current = false;
        }
    };

    return (
        <SprintTodoPageStyle onClick={continueClickHandler}>
            <AnimatePresence>
                {finishAction && !continueAction ? (
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
                        >
                            點擊畫面任意處繼續
                        </ButtonStyle>
                    </BackDropStyle>
                ) : null}
            </AnimatePresence>
            <AnimatePresence>
                {!continueAction ? (
                    <TopWrap style={{ zIndex: 15 }}>
                        <TalkCard
                            key="talkCard"
                            delay={0}
                            isContinue={finishAction}
                            role="gg"
                        >
                            {!finishAction ? (
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
                                    <motion.h2
                                        variants={upOpacityVariants}
                                        custom={"2rem"}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {p1}
                                    </motion.h2>
                                    <motion.p
                                        variants={upOpacityVariants}
                                        custom={"2rem"}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {p2.map((item, i) =>
                                            i === 1 || i === 3 ? (
                                                <span key={i}>{item}</span>
                                            ) : (
                                                item
                                            )
                                        )}
                                    </motion.p>
                                    <motion.p
                                        variants={upOpacityVariants}
                                        custom={"2rem"}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {p3}
                                    </motion.p>
                                </TextWrap>
                            ) : (
                                <TextWrap
                                    as={motion.div}
                                    variants={opacityVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    transition={{
                                        duration: 0,
                                        delay: 0,
                                        when: "beforeChildren",
                                        staggerChildren: 0.2,
                                    }}
                                >
                                    <motion.h2
                                        variants={upOpacityVariants}
                                        custom={"2rem"}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {p4}
                                    </motion.h2>
                                </TextWrap>
                            )}
                        </TalkCard>
                        <Role
                            role="gg"
                            key="gg"
                            complete={animationEndHandler}
                        />
                    </TopWrap>
                ) : null}
            </AnimatePresence>
            <AnimatePresence>
                {!continueAction ? (
                    <DragDropContext onDragEnd={dragEndHandler}>
                        <BottomWrap
                            key="buttonWrap"
                            style={{
                                gap: "5rem",
                                justifyContent: "flex-start",
                                paddingLeft: "10%",
                            }}
                            as={motion.div}
                            variants={opacityVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.5, delay: 1.5 }}
                        >
                            <TodoSourceCard
                                dragList={dropsObj.drop_todoSourceList}
                                title="產品待辦清單"
                                titleEn="Product Backlog"
                            />
                            <TodoCard
                                dragList={dropsObj.drop_todoList}
                                title="開發Ａ組的短衝待辦清單"
                                titleEn="Sprint Backlog"
                            />
                        </BottomWrap>
                        <ButtonPrimaryStyle
                            title="開始sprint"
                            right="5rem"
                            bottom="8rem"
                            as={motion.button}
                            disabled={!allowSprintRef.current}
                            onClick={finishActionHandler}
                        >
                            開始sprint
                        </ButtonPrimaryStyle>
                    </DragDropContext>
                ) : null}
            </AnimatePresence>
        </SprintTodoPageStyle>
    );
};

export default SprintTodoPage;
