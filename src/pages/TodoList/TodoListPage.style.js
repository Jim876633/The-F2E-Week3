import styled, { css } from "styled-components";

export const TodoListPageStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
        transform: translateX(-50%);
    }
`;

export const BackDropStyle = styled.div`
    position: absolute;
    background: var(--clr-bg-dark);
    width: 100%;
    height: 100%;
    z-index: ${(props) => (props.zindex === "top" ? 10 : 0)};
    ${(props) =>
        props.bg === "gradient"
            ? css`
                  background: linear-gradient(
                          180deg,
                          rgba(0, 255, 224, 0) 0%,
                          rgba(0, 255, 224, 0.25) 60.42%,
                          rgba(0, 255, 224, 0.45) 79.69%,
                          rgba(0, 255, 224, 0.7) 91.67%,
                          rgba(0, 255, 224, 0.9) 100%
                      )
                      rgba(28, 50, 69, 0.6);
                  backdrop-filter: blur(5px);
              `
            : ""}
`;

export const TopWrap = styled.div`
    width: 100%;
    height: 22rem;
    padding: 4rem 3rem;
    display: flex;
    align-items: flex-start;
    gap: 3rem;
`;

export const BottomWrap = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
`;

export const RoleWrap = styled.div`
    position: relative;
    width: 25rem;
    height: 30rem;
    flex-shrink: 0;
    & > div:nth-child(2) {
        position: absolute;
        top: 2rem;
        width: 100%;
        height: 100%;
        overflow-y: clip;
    }
`;

export const TextWrap = styled.div`
    width: max(80%, 65rem);
    margin-block: 2rem;
    margin-inline: 10rem auto;
    span {
        color: var(--clr-primary);
    }
    img {
        object-fit: contain;
        vertical-align: text-bottom;
    }
`;

export const DropSourceWrap = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 35%;
    justify-content: center;
    & > div {
        position: absolute;
        top: 45%;
        width: 60%;
        margin-inline: 5rem auto;
    }
    & > div:first-child {
        top: 20%;
        width: 70%;
        margin-inline: 15rem auto;
    }
    & > div > div {
        width: fit-content;
        height: fit-content;
        padding-block: 1rem;
    }
`;
