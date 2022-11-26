import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { CardListStyle, DragItemWrap, DropWrap, TitleWrap } from "./Card.style";
import TodoDragCard from "./TodoDragCard";

const CountBar = styled.div`
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    right: 2rem;
    display: grid;
    place-content: center;
    height: 2.4rem;
    border-radius: 10rem;
    background: var(--clr-role-team-dark);
    & > span {
        top: 0.4rem;
        left: 0.4rem;
        width: ${(props) => {
            if (props.danger) {
                return "calc(100% - 0.8rem)";
            }
            if (props.percent) {
                return `calc(${props.percent}% - 0.8rem)`;
            } else {
                return " 1.6rem";
            }
        }};
        height: 1.6rem;
        position: absolute;
        border-radius: 10rem;
        background: ${(props) =>
            props.danger ? "var(--clr-danger)" : "var(--clr-role-team1)"};
    }
    p {
        z-index: 1;
        font-size: 1.6rem;
    }
`;

const TodoCard = ({ title, titleEn, dragList }) => {
    const [enabled, setEnabled] = React.useState(false);

    const totalCount = dragList.reduce((total, item) => item.point + total, 0);

    const countPercent = Math.floor((totalCount / 20) * 100);

    const danger = totalCount > 20;

    // fix react beautiful drag bug
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
        <CardListStyle
            w="50rem"
            h="80%"
            type="sprint"
            style={{ marginBottom: "3%" }}
        >
            <span></span>
            <TitleWrap type="sprint">
                <h2>{title}</h2>
                <p>{titleEn}</p>
            </TitleWrap>
            <Droppable droppableId="drop_todoList">
                {(provided, snapshot) => {
                    let dragPosition = "todo";
                    if (
                        snapshot.draggingFromThisWith &&
                        !snapshot.draggingOverWith
                    ) {
                        dragPosition = "source";
                    }
                    return (
                        <DropWrap
                            type="sprint"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            <DragItemWrap type="sprint">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </DragItemWrap>
                            {dragList.map((item, i) => (
                                <TodoDragCard
                                    item={item}
                                    key={item.id}
                                    index={i}
                                    dragPosition={dragPosition}
                                    dragType="todo"
                                    danger={danger}
                                />
                            ))}
                            {provided.placeholder}
                            <CountBar percent={countPercent} danger={danger}>
                                <p> {totalCount} / 20(5人)</p>
                                <span></span>
                            </CountBar>
                        </DropWrap>
                    );
                }}
            </Droppable>
        </CardListStyle>
    );
};

export default TodoCard;
