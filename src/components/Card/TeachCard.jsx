import { motion } from "framer-motion";
import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import {
    exampleArrowVariants,
    exampleHandVariants,
    exampleItemVariants,
    opacityVariants,
} from "../../animations/animate";
import { arrow, hand } from "../../shared/ImageSource";
import Image from "../Image/Image";
import {
    CardListStyle,
    DragItemWrap,
    DropWrap,
    ExampleText,
    TitleWrap,
} from "./Card.style";
import TeachDragCard from "./TeachDragCard";

const TeachCard = ({
    dragList,
    dragAction,
    title,
    titleEn,
    w,
    h,
    top,
    bottom,
    left,
    right,
}) => {
    return (
        <CardListStyle
            w={w}
            h={h}
            top={top}
            bottom={bottom}
            left={left}
            right={right}
            style={{ alignSelf: "flex-start" }}
        >
            <TitleWrap>
                <h2>{title}</h2>
                <p>{titleEn}</p>
            </TitleWrap>
            {!dragAction ? (
                <>
                    <Image
                        src={arrow}
                        top="30%"
                        right="-20%"
                        as={motion.div}
                        variants={exampleArrowVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1 }}
                        style={{ originY: 0, originX: 0 }}
                    />
                    <Image
                        src={hand}
                        top="30%"
                        right="10%"
                        style={{ zIndex: 2 }}
                        as={motion.div}
                        variants={exampleHandVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1 }}
                    />
                    <ExampleText
                        as={motion.div}
                        variants={exampleItemVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1 }}
                    >
                        {dragList[3].content}
                    </ExampleText>
                </>
            ) : null}
            <Droppable droppableId="drop-teachTodoList">
                {(provided, snapshot) => (
                    <DropWrap
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <DragItemWrap>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </DragItemWrap>
                        {dragList.map((item, i) => (
                            <TeachDragCard
                                item={item}
                                key={item.id}
                                index={i}
                                dropId="drop-teachTodoList"
                            />
                        ))}
                        {provided.placeholder}
                    </DropWrap>
                )}
            </Droppable>
        </CardListStyle>
    );
};

export default TeachCard;
