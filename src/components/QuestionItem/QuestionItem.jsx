import React, { Fragment } from "react";
import Role from "../Role/Role";
import {
    ItemWrap,
    QuestionItemStyle,
    QuestionWrap,
    RadioWrap,
    TextWrap,
    TitleWrap,
} from "./QuestionItem.style";

const QuestionItem = ({ item, index, radioHandler, correct }) => {
    return (
        <QuestionItemStyle>
            <TitleWrap>
                <h2>{item.title}</h2>
            </TitleWrap>
            <QuestionWrap correct={correct ? "correct" : "wrong"}>
                {item.content.map((item, i) => {
                    return (
                        <Fragment key={i}>
                            <input
                                type="radio"
                                id={item.role}
                                name={"question" + index}
                                onChange={radioHandler}
                            />
                            <label htmlFor={item.role}>
                                <ItemWrap>
                                    <div
                                        style={{
                                            transform:
                                                item.role !== "mm"
                                                    ? "rotate(180deg)"
                                                    : "none",
                                        }}
                                    >
                                        <Role role={item.role} size="sm" />
                                    </div>

                                    <RadioWrap>
                                        <span></span>
                                    </RadioWrap>
                                    <TextWrap>{item.text}</TextWrap>
                                </ItemWrap>
                            </label>
                        </Fragment>
                    );
                })}
            </QuestionWrap>
        </QuestionItemStyle>
    );
};

export default QuestionItem;
