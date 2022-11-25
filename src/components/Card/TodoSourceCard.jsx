import React, { useRef, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { CardListStyle, DropWrap, TitleWrap } from "./Card.style";
import TodoDragCard from "./TodoDragCard";

const TodoSourceCard = ({ title, titleEn, dragList }) => {
    const [isDragActive, setIsDragActive] = useState(false);

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
        <CardListStyle w="50rem" h="80%" style={{ marginBottom: "3%" }}>
            <span></span>
            <TitleWrap>
                <h2>{title}</h2>
                <p>{titleEn}</p>
            </TitleWrap>
            <Droppable droppableId="drop_todoSourceList">
                {(provided, snapshot) => {
                    let dragPosition = "source";
                    if (
                        snapshot.draggingFromThisWith &&
                        !snapshot.draggingOverWith
                    ) {
                        dragPosition = "todo";
                    }
                    return (
                        <DropWrap
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {dragList.map((item, i) => (
                                <TodoDragCard
                                    item={item}
                                    key={item.id}
                                    index={i}
                                    dragPosition={dragPosition}
                                />
                            ))}
                            {provided.placeholder}
                        </DropWrap>
                    );
                }}
            </Droppable>
        </CardListStyle>
    );
};

export default TodoSourceCard;
