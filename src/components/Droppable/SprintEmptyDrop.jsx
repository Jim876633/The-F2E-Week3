import { transform } from "framer-motion";
import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import styled, { css } from "styled-components";
import useDraggableInPortal from "../../hooks/useDraggableInPortal";
import { SprintTitleWrap } from "../SprintIntroItem/SprintIntroItem.style";

const DropWrap = styled.div`
    position: absolute;
    top: 23rem;
    left: 43rem;
    width: 80rem;
    height: 30rem;
    div {
        position: absolute;
        width: 30rem;
        height: 10.5rem;
    }
    div:nth-child(1) {
        top: 4.5rem;
        left: 17rem;
    }
    div:nth-child(2) {
        top: 18.5rem;
        left: 12rem;
    }
    div:nth-child(3) {
        top: 18.5rem;
        left: 47rem;
    }
`;

const SprintEmptyDrop = ({ emptyDragList }) => {
    // const renderDraggable = useDraggableInPortal();

    // fix react beautiful drag bug
    const [enabled, setEnabled] = React.useState(false);
    React.useEffect(() => {
        const animation = requestAnimationFrame(() => setEnabled(true));

        return () => {
            cancelAnimationFrame(animation);
            setEnabled(false);
        };
    }, []);

    if (!enabled) {
        return null;
    }
    return (
        <Droppable droppableId="drop_empty">
            {(provided, snapshot) => {
                return (
                    <DropWrap
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {emptyDragList.map((item, i) => {
                            return (
                                <Draggable
                                    draggableId={"empty" + item.id}
                                    key={"keyEmpty" + item.id}
                                    index={i}
                                >
                                    {(provided, snapshot) => {
                                        let transformObj = {};
                                        if (!snapshot.isDragging) {
                                            transformObj = {
                                                transform: "none",
                                            };
                                        }
                                        // if (snapshot.isDropAnimating) {
                                        //     transformObj = {
                                        //         ...transformObj,
                                        //         transitionDuration: `0.1s`,
                                        //     };
                                        // }

                                        return (
                                            <SprintTitleWrap
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                match={item.match}
                                                style={{
                                                    ...provided.draggableProps
                                                        .style,
                                                    ...transformObj,
                                                }}
                                            >
                                                <>
                                                    <h2>{item.title}</h2>
                                                    <span>{item.titleEn}</span>
                                                </>
                                            </SprintTitleWrap>
                                        );
                                    }}
                                </Draggable>
                            );
                        })}
                        {provided.placeholder}
                    </DropWrap>
                );
            }}
        </Droppable>
    );
};

export default SprintEmptyDrop;
