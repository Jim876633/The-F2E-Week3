import React, { useEffect, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled, { css } from "styled-components";
import { DragItem } from "./Card.style";

const PointWrap = styled.h2`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background: var(--clr-primary-70);
    display: grid;
    place-content: center;
    margin-right: 2rem;
    flex-shrink: 0;
    ${(props) =>
        props.type === "sprint"
            ? css`
                  background: var(--clr-role-team1);
              `
            : ""}
`;

const TodoDragCard = ({ item, index, dragPosition, dragType, danger }) => {
    return (
        <Draggable draggableId={item.id} index={index}>
            {(provided, snapshot) => {
                let type;
                if (dragType === "todo") {
                    type = "sprint";
                }
                if (dragPosition === "todo" && snapshot.isDragging) {
                    type = "sprint";
                }
                if (dragPosition !== "todo" && snapshot.isDragging) {
                    type = "source";
                }
                return (
                    <DragItem
                        type={type}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        danger={danger}
                    >
                        <>
                            <PointWrap type={type}>{item.point}</PointWrap>
                            {item.content}
                        </>
                    </DragItem>
                );
            }}
        </Draggable>
    );
};

export default TodoDragCard;
