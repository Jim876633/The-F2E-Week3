import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

import { SprintTitleWrap } from "../SprintIntroItem/SprintIntroItem.style";

const DroppableWrap = styled.div`
    position: absolute;
    top: 8rem;
    right: 10rem;
    width: 30rem;
    height: 40rem;
    z-index: 15;
`;

const SprintTodoDrop = ({ sprintDragList }) => {
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
        <Droppable droppableId="drop_todo">
            {(provided, snapshot) => (
                <DroppableWrap
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    {sprintDragList.map((item, i) => (
                        <Draggable
                            draggableId={item.id}
                            key={"key" + item.id}
                            index={i}
                        >
                            {(provided, snapshot) => {
                                let transformObj = {};
                                // if (snapshot.isDropAnimating) {
                                //     transformObj = {
                                //         transitionDuration: `0.001s`,
                                //     };
                                // }
                                return (
                                    <SprintTitleWrap
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                            ...provided.draggableProps.style,
                                            ...transformObj,
                                            width: "30rem",
                                            height: "10rem",
                                            marginBottom: "2rem",
                                        }}
                                    >
                                        <h2>{item.title}</h2>
                                        <span>{item.titleEn}</span>
                                    </SprintTitleWrap>
                                );
                            }}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </DroppableWrap>
            )}
        </Droppable>
    );
};

export default SprintTodoDrop;
