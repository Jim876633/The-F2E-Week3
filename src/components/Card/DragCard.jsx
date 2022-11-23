import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { DragItem, EmptyItem } from "./Card.style";

const DragCard = ({ item, index, dropId }) => {
    return (
        <Draggable draggableId={item.dragId} index={index}>
            {(provided, snapshot) => {
                let transform = {};
                if (!snapshot.isDragging && dropId !== "drop-todoList") {
                    transform = { transform: "none" };
                }
                return item.isDrag ? (
                    <DragItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                            ...provided.draggableProps.style,
                            ...transform,
                        }}
                    >
                        {item.content}
                    </DragItem>
                ) : (
                    <EmptyItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    ></EmptyItem>
                );
            }}
        </Draggable>
    );
};

export default DragCard;
