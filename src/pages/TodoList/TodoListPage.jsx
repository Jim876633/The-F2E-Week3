import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {
    exampleOpacityVariants,
    opacityVariants,
    roleVariants,
    scaleVariants,
    upOpacityVariants,
    yMoveVariants,
} from "../../animations/animate";
import Image from "../../components/Image/Image";
import {
    hole,
    img_jira_w,
    role_po,
    role_po_bg,
} from "../../shared/ImageSource";
import {
    BackDropStyle,
    BottomWrap,
    DropSourceWrap,
    RoleWrap,
    TextWrap,
    TodoListPageStyle,
    TopWrap,
} from "./TodoListPage.style";
import data from "../../constants/data.json";

import {
    ButtonPrimaryStyle,
    ButtonStyle,
} from "../../components/Button/Button.style";
import TalkCard from "../../components/Card/TalkCard";
import TeachCard from "../../components/Card/TeachCard";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TeachDragCard from "../../components/Card/TeachDragCard";
import { useNavigate } from "react-router-dom";

const { p1, p2, p3, p4, p5, p6, todoList } = data.todoListPage;

const initialDragList = todoList.map((item) => {
    return { ...item, dragId: item.id, isDrag: false };
});

const initialTodoList = [...todoList];

const TodoListPage = () => {
    const [isContinue, setIsContinue] = useState(false);

    const [continueAction, setContinueAction] = useState(false);

    const [prepareAction, setPrepareAction] = useState(false);

    const [dragAction, setDragAction] = useState(false);

    const [dragFinishAction, setDragFinishAction] = useState(false);

    const [dragList, setDragList] = useState(initialDragList);

    const allowClickViewRef = useRef(false);

    const backdropRef = useRef("top");

    const countinueIconRef = useRef(true);

    const exampleAnimateEndRef = useRef(false);

    const isDragFinishRef = useRef(false);

    const navigate = useNavigate();

    //FIXME:
    const cleanState = () => {
        setDragList(initialDragList);
    };

    const allViewClickHandler = () => {
        if (!allowClickViewRef.current) return;
        if (dragFinishAction) {
            navigate("/sprintPlan");
            allowClickViewRef.current = false;
            return;
        }
        if (exampleAnimateEndRef.current) {
            backdropRef.current = null;
            countinueIconRef.current = null;
            setDragAction(true);
            allowClickViewRef.current = false;
            return;
        }
        if (isContinue) {
            backdropRef.current = null;
            countinueIconRef.current = null;
            setContinueAction(true);
            allowClickViewRef.current = false;
            return;
        }
    };

    const isContinueHandler = () => {
        allowClickViewRef.current = true;
        setIsContinue(true);
    };

    const prepareActionHandler = (e) => {
        e.stopPropagation();
        backdropRef.current = "top";
        countinueIconRef.current = true;
        allowClickViewRef.current = true;
        setPrepareAction(true);
    };

    const dragFinishHandler = (e) => {
        e.stopPropagation();
        backdropRef.current = "top";
        countinueIconRef.current = true;
        setDragFinishAction(true);
    };

    //dragdropContext
    const dragEndHandler = (e) => {
        const { source, destination } = e;

        if (!destination || destination.droppableId !== "drop-teachTodoList")
            return;

        const newDragList = [...dragList];

        const newInitialDragList = [...initialDragList];

        if (source.droppableId === "drop-todoList") {
            // dragList 內部拖拉
            const [dragItem] = newDragList.splice(source.index, 1);

            newDragList.splice(destination.index, 0, dragItem);

            setDragList(newDragList);
        } else {
            // 從外面拖拉到 dragList

            //移除外面 dragItem
            initialTodoList[source.index].isDrag = false;

            //裡面的 dragItem 顯示
            const [dragItem] = newInitialDragList.splice(source.index, 1);

            dragItem.isDrag = true;

            const filterDragList = newDragList.filter(
                (item) => item.id !== dragItem.id
            );

            filterDragList.splice(destination.index, 0, dragItem);

            setDragList(filterDragList);

            //判斷是否全部的 dragItem 都拖拉進去

            const isDragCount = dragList.every((item) => item.isDrag);

            if (isDragCount) {
                isDragFinishRef.current = true;
            }
        }
    };
    //FIXME:
    useEffect(() => {
        return () => {
            console.log("hi");
            cleanState();
        };
    }, []);

    return (
        <TodoListPageStyle onClick={allViewClickHandler}>
            <BackDropStyle
                as={motion.div}
                variants={opacityVariants}
                initial="visible"
                animate={dragFinishAction ? "visible" : "hidden"}
                transition={{ duration: 0.5 }}
                zindex={backdropRef.current}
                bg={dragFinishAction ? "gradient" : ""}
            ></BackDropStyle>
            <TopWrap style={{ zIndex: dragFinishAction ? 15 : 0 }}>
                <RoleWrap>
                    <Image
                        src={hole}
                        variants={scaleVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5 }}
                    />
                    <div>
                        <Image
                            src={role_po_bg}
                            top="-1rem"
                            w="120%"
                            left="-10%"
                            variants={yMoveVariants}
                            initial="move"
                            animate="initial"
                            custom={"-100%"}
                            transition={{ duration: 0.3, delay: 1 }}
                        />
                        <Image
                            src={role_po}
                            bottom="7rem"
                            style={{ originY: 0 }}
                            variants={roleVariants}
                            initial="hidden"
                            animate="visible"
                            custom={"-100%"}
                            transition={{
                                duration: 0.3,
                                delay: 1,
                                times: [0, 0.5, 1],
                                scaleY: {
                                    delay: 1,
                                },
                            }}
                        />
                    </div>
                </RoleWrap>
                <TalkCard
                    delay={1.5}
                    isContinue={countinueIconRef.current}
                    role="po"
                >
                    <AnimatePresence mode="wait">
                        {!continueAction ? (
                            <TextWrap
                                key="text1"
                                as={motion.div}
                                variants={opacityVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                transition={{
                                    duration: 0.2,
                                    delay: !isContinue ? 1.5 : 0,
                                    when: "beforeChildren",
                                    staggerChildren: !isContinue ? 0.5 : 0,
                                }}
                            >
                                <motion.p
                                    variants={upOpacityVariants}
                                    custom={"2rem"}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span>{p1[0]}</span>
                                    {p1[1]}
                                </motion.p>
                                <motion.p
                                    variants={upOpacityVariants}
                                    custom={"2rem"}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span>{p2[0]}</span>
                                    {p2[1]}
                                </motion.p>
                            </TextWrap>
                        ) : null}
                        {continueAction && !prepareAction ? (
                            <TextWrap
                                key="text2"
                                as={motion.div}
                                variants={opacityVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                transition={{
                                    duration: 0.2,
                                    when: "beforeChildren",
                                    staggerChildren: 0.5,
                                }}
                            >
                                <motion.p
                                    variants={upOpacityVariants}
                                    custom={"2rem"}
                                    transition={{ duration: 0.2 }}
                                >
                                    {p3.map((item, i) =>
                                        i === 1 ? (
                                            <span key={i}>{item}</span>
                                        ) : (
                                            item
                                        )
                                    )}
                                </motion.p>
                            </TextWrap>
                        ) : null}
                        {prepareAction && !dragAction ? (
                            <TextWrap
                                key="text3"
                                as={motion.div}
                                variants={opacityVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                transition={{
                                    duration: 0.2,
                                    when: "beforeChildren",
                                    staggerChildren: 0.5,
                                }}
                            >
                                <motion.p
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                    }}
                                    variants={upOpacityVariants}
                                    custom={"2rem"}
                                    transition={{ duration: 0.2 }}
                                >
                                    {p4.map((item, i) =>
                                        i === 2 ? (
                                            <small
                                                key={i}
                                                style={{
                                                    height: "3rem",
                                                    width: "10rem",
                                                }}
                                            >
                                                <img
                                                    src={img_jira_w}
                                                    alt={item}
                                                />
                                            </small>
                                        ) : (
                                            <small key={i}>{item}</small>
                                        )
                                    )}
                                </motion.p>
                            </TextWrap>
                        ) : null}
                        {dragAction && !dragFinishAction ? (
                            <TextWrap
                                key="text4"
                                as={motion.div}
                                variants={opacityVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                transition={{
                                    duration: 0.2,
                                    when: "beforeChildren",
                                    staggerChildren: 0.5,
                                }}
                            >
                                <motion.h2
                                    variants={upOpacityVariants}
                                    custom={"2rem"}
                                    transition={{ duration: 0.2 }}
                                >
                                    {p5[0]}
                                </motion.h2>
                                <motion.p
                                    variants={upOpacityVariants}
                                    custom={"2rem"}
                                    transition={{ duration: 0.2 }}
                                >
                                    {p5[1]}
                                </motion.p>
                            </TextWrap>
                        ) : null}
                        {dragFinishAction ? (
                            <TextWrap
                                key="text5"
                                as={motion.div}
                                variants={opacityVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                transition={{
                                    duration: 0.2,
                                    when: "beforeChildren",
                                    staggerChildren: 0.5,
                                }}
                            >
                                <motion.h2
                                    variants={upOpacityVariants}
                                    custom={"2rem"}
                                    transition={{ duration: 0.2 }}
                                >
                                    {p6}
                                </motion.h2>
                            </TextWrap>
                        ) : null}
                    </AnimatePresence>
                </TalkCard>
            </TopWrap>
            <DragDropContext onDragEnd={dragEndHandler}>
                <BottomWrap>
                    <AnimatePresence mode="wait">
                        {prepareAction ? (
                            <>
                                <Droppable droppableId="drop-left">
                                    {(provided, snapshot) => {
                                        return (
                                            <DropSourceWrap
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                            >
                                                {initialTodoList
                                                    .slice(0, 2)
                                                    .map((item, i) => (
                                                        <motion.div
                                                            key={item.id}
                                                            variants={
                                                                exampleOpacityVariants
                                                            }
                                                            initial="visible"
                                                            animate={
                                                                !dragAction
                                                                    ? "hidden"
                                                                    : "visible"
                                                            }
                                                            transition={{
                                                                duration: 0.5,
                                                            }}
                                                        >
                                                            <TeachDragCard
                                                                item={item}
                                                                index={i}
                                                                dropId="drop-left"
                                                            />
                                                        </motion.div>
                                                    ))}
                                                {provided.placeholder}
                                            </DropSourceWrap>
                                        );
                                    }}
                                </Droppable>
                                <TeachCard
                                    title="產品待辦清單"
                                    titleEn="Product Backlog"
                                    w="30%"
                                    h="85%"
                                    dragList={dragList}
                                    dragAction={dragAction}
                                />
                                <Droppable droppableId="drop-right">
                                    {(provided, snapshot) => (
                                        <DropSourceWrap
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            style={{ width: "35%" }}
                                        >
                                            {initialTodoList
                                                .slice(2, 4)
                                                .map((item, i) => (
                                                    <motion.div
                                                        key={item.id}
                                                        variants={
                                                            exampleOpacityVariants
                                                        }
                                                        initial="visible"
                                                        animate={
                                                            i === 0 &&
                                                            !dragAction
                                                                ? "hidden"
                                                                : "visible"
                                                        }
                                                        transition={{
                                                            duration: 1,
                                                        }}
                                                        onAnimationComplete={() => {
                                                            exampleAnimateEndRef.current = true;
                                                        }}
                                                    >
                                                        <TeachDragCard
                                                            item={item}
                                                            index={i + 2}
                                                            dropId="drop-right"
                                                        />
                                                    </motion.div>
                                                ))}
                                            {provided.placeholder}
                                        </DropSourceWrap>
                                    )}
                                </Droppable>
                            </>
                        ) : null}
                    </AnimatePresence>
                </BottomWrap>
            </DragDropContext>
            {!continueAction || dragFinishAction ? (
                <ButtonStyle
                    key="continueButton"
                    top="50%"
                    left="50%"
                    title="點擊畫面任意處繼續"
                    style={{ cursor: "auto", zIndex: 15 }}
                    as={motion.button}
                    variants={opacityVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{
                        duration: 0.2,
                        delay: !isContinue ? 2.8 : 0,
                    }}
                    onAnimationComplete={isContinueHandler}
                >
                    點擊畫面任意處繼續
                </ButtonStyle>
            ) : null}
            {continueAction && !prepareAction ? (
                <ButtonPrimaryStyle
                    title="準備好了"
                    right="-5rem"
                    bottom="8rem"
                    as={motion.button}
                    variants={opacityVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.2, delay: 0 }}
                    onClick={prepareActionHandler}
                >
                    準備好了
                </ButtonPrimaryStyle>
            ) : null}
            {dragAction && !dragFinishAction ? (
                <ButtonPrimaryStyle
                    title="我完成了"
                    right="-5rem"
                    bottom="8rem"
                    as={motion.button}
                    variants={opacityVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.2, delay: 0 }}
                    onClick={dragFinishHandler}
                    disabled={!isDragFinishRef.current}
                >
                    我完成了
                </ButtonPrimaryStyle>
            ) : null}
        </TodoListPageStyle>
    );
};

export default TodoListPage;
