import styled, { css } from "styled-components";

export const QuestionItemStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-basis: 55rem;
`;

export const TitleWrap = styled.span`
    background: var(--clr-primary);
    padding: 0.4rem 3.2rem;
    h2 {
        color: var(--clr-bg-dark);
        font-weight: 700;
    }
`;
export const QuestionWrap = styled.div`
    display: flex;
    gap: 2rem;
    input {
        position: absolute;
        /* display: none; */
    }
    input:checked + label > div > div > span {
        width: 1.4rem;
        height: 1.4rem;
        border-radius: 50%;
        background: var(--clr-primary);
    }
    label {
        flex: 1 1;
    }
    ${(props) =>
        props.correct === "wrong"
            ? css`
                  input:checked + label > div > div > span {
                      background: var(--clr-danger);
                  }
                  input:checked + label > div > div:nth-child(2) {
                      border: 4px solid var(--clr-danger);
                  }
              `
            : ""}
`;

export const ItemWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    height: 100%;
`;

export const TextWrap = styled.div`
    border: 4px solid var(--clr-primary);
    border-radius: 2rem;
    padding: 2rem;
    height: 100%;
    width: 100%;
`;

export const RadioWrap = styled.div`
    display: grid;
    place-content: center;
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    border: 3px solid var(--clr-primary);
    flex-shrink: 0;
`;
