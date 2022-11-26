import styled from "styled-components";

export const SprintIntroPageStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const EmptyWrap = styled.div`
    position: absolute;
    width: 30rem;
    height: 10rem;
    border-radius: 2rem;
    border: 2px dashed var(--clr-primary);
    &:nth-child(6) {
        top: 28rem;
        left: 60rem;
        &::before {
            content: "";
            position: absolute;
            left: -3.5rem;
            top: 50%;
            width: 3.5rem;
            height: 4px;
            background-color: var(--clr-primary);
        }
    }
    &:nth-child(7) {
        top: 42rem;
        left: 55rem;
        &::before {
            content: "";
            position: absolute;
            bottom: -2rem;
            left: 50%;
            width: 4px;
            height: 2rem;
            background-color: var(--clr-primary);
        }
    }
    &:nth-child(8) {
        top: 42rem;
        left: 90rem;
        &::before {
            content: "";
            position: absolute;
            bottom: -2rem;
            left: 20%;
            width: 4px;
            height: 2rem;
            background-color: var(--clr-primary);
        }
    }
`;
