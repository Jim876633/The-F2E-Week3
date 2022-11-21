import styled from "styled-components";

export const HomePageStyle = styled.section`
    background: var(--clr-bg-dark);
`;

export const TitleWrap = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    button,
    h2 {
        position: absolute;
        left: 50%;
        bottom: 20%;
        transform: translateX(-50%);
    }
    h2 {
        bottom: 32%;
    }
`;

export const TextWrap = styled.div`
    width: 85%;
    height: 100%;
    margin: auto;
    display: grid;
    gap: 3rem;
    margin-top: 3rem;
    p,
    span {
        font-size: var(--fz-talk-lg);
    }
    span {
        color: var(--clr-primary);
    }
    button {
        transform: translateX(-50%);
    }
`;
export const TagWrap = styled.div`
    position: absolute;
    display: grid;
    place-content: center;
    top: 10%;
    left: -1.2rem;
    width: 15rem;
    height: 5rem;
    background-color: var(--clr-primary);
    h3 {
        color: var(--clr-bg-dark);
    }
    &::before {
        content: "";
        position: absolute;
        top: 0.5rem;
        width: 1.2rem;
        height: 100%;
        background-color: var(--clr-primary);
        transform: skewY(40deg);
    }
`;
