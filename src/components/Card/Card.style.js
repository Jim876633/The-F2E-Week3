import styled, { css } from "styled-components";

export const CardStyle = styled.div`
    position: relative;
    display: grid;
    place-content: center;
    background: var(--clr-bg-dark-60);
    border: 2px solid var(--clr-primary);
    border-radius: 4rem;
    box-shadow: 0px 0px 24px 2px var(--clr-primary-80);
    padding: 1rem;
    width: ${(props) => props.w || "100%"};
    height: ${(props) => props.h || "100%"};
    backdrop-filter: blur(5px);
    ${(props) =>
        props.top || props.bottom || props.right || props.left
            ? css`
                  position: absolute;
                  top: ${props.top || 0};
                  left: ${props.left || 0};
                  right: ${props.right || 0};
                  bottom: ${props.bottom || 0};
                  margin: auto;
              `
            : ""}
`;

export const CardGradientStyle = styled(CardStyle)`
    height: fit-content;
    display: flex;
    background: linear-gradient(
            180deg,
            rgba(0, 255, 224, 0) 0%,
            rgba(0, 255, 224, 0.03) 59.9%,
            rgba(0, 255, 224, 0.12) 78.12%,
            rgba(0, 255, 224, 0.36) 100%
        ),
        rgba(10, 13, 20, 0.6);
    ${(props) =>
        props.role === "mm"
            ? css`
                  border: 2px solid var(--clr-role-sm);
                  background: var(--linear-role-sm), rgba(10, 13, 20, 0.6);
                  box-shadow: 0px 0px 24px 8px var(--clr-role-sm-80);
              `
            : ""}
    ${(props) =>
        props.role === "ee"
            ? css`
                  border: 2px solid var(--clr-role-team1);
                  background: var(--linear-role-team1), rgba(10, 13, 20, 0.6);
                  box-shadow: 0px 0px 24px 4px var(--clr-role-team1);
              `
            : ""}
        ${(props) =>
        props.role === "gg"
            ? css`
                  border: 2px solid var(--clr-role-team2);
                  background: var(--linear-role-team2), rgba(10, 13, 20, 0.6);
                  box-shadow: 0px 0px 24px 4px var(--clr-role-team2);
              `
            : ""};
`;

export const CardListStyle = styled(CardStyle)`
    display: flex;
    flex-direction: column;
    background: var(--clr-primary-30);
    box-shadow: 1.2rem 1.2rem var(--clr-primary-20),
        2.4rem 2.4rem var(--clr-primary-10);
    border: none;
    border-radius: 2rem;
    padding: 0;
    backdrop-filter: none;
    z-index: auto;
    span {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(
            50% 50% at 50% 50%,
            #00ffe0 0%,
            rgba(0, 255, 224, 0) 100%
        );
        opacity: 0.9;
        z-index: auto;
    }
    ${(props) =>
        props.type === "sprint"
            ? css`
                  background: rgba(255, 122, 0, 0.4);
                  box-shadow: 12px 12px rgba(255, 122, 0, 0.3),
                      24px 24px rgba(255, 122, 0, 0.2);
                  span {
                      background: radial-gradient(
                          50% 50% at 50% 50%,
                          #ffc700 0%,
                          rgba(255, 199, 0, 0) 100%
                      );
                  }
              `
            : ""}
`;

export const CardCircleStyle = styled(CardStyle)`
    border: none;
    border-radius: 50%;
    background: rgba(0, 255, 224, 0.3);
    box-shadow: 12px 12px rgba(0, 255, 224, 0.15);
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(
            50% 50% at 50% 50%,
            #00ffe0 0%,
            rgba(0, 255, 224, 0) 100%
        );
        z-index: -1;
    }
    ${(props) =>
        props.role === "mm"
            ? css`
                  background: rgba(255, 0, 245, 0.35);
                  box-shadow: 12px 12px rgba(255, 0, 245, 0.25);
                  &::after {
                      content: "";
                      position: absolute;
                      top: 0;
                      left: 0;
                      width: 100%;
                      height: 100%;
                      background: radial-gradient(
                          50% 50% at 50% 50%,
                          #ff00f5 0%,
                          rgba(255, 45, 247, 0) 100%
                      );
                      z-index: -1;
                  }
              `
            : ""}
`;

//===============================================

export const TitleWrap = styled.div`
    display: grid;
    place-content: center;
    height: 20%;
    width: 100%;
    background: var(--clr-primary);
    text-align: center;
    padding: 1rem;
    border-radius: 2rem 2rem 0 0;
    h2 {
        color: var(--clr-bg-dark);
    }
    p {
        color: var(--clr-primary-dark);
        line-height: 1;
    }
    ${(props) =>
        props.type === "sprint"
            ? css`
                  background: var(--clr-role-team1);
                  p {
                      color: var(--clr-role-team2);
                  }
              `
            : ""}
`;

export const DropWrap = styled.div`
    position: relative;
    width: 100%;
    height: 80%;
    padding-inline: 2rem;
`;

export const DragItemWrap = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 2rem 2rem;
    display: grid;
    gap: 2rem;
    div {
        width: 100%;
        height: 100%;
        border: 2px dashed var(--clr-primary);
        border-radius: 2rem;
    }
    ${(props) =>
        props.type === "sprint"
            ? css`
                  z-index: 1;
                  div {
                      border: 2px dashed var(--clr-role-team1);
                  }
                  div:last-child {
                      border: 2px solid transparent;
                  }
              `
            : ""}
`;

export const DragItem = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    top: auto !important;
    left: auto !important;
    border: 4px solid var(--clr-primary);
    border-radius: 2rem;
    background: var(--clr-bg-dark-60);
    height: calc(25% - 2.5rem);
    padding-inline: 2.4rem;
    margin: 2rem auto;
    z-index: 5;
    ${(props) =>
        props.type === "sprint"
            ? css`
                  border: 4px solid var(--clr-role-team1);
              `
            : ""}
    ${(props) =>
        props.danger
            ? css`
                  border: 4px solid var(--clr-danger);
              `
            : ""}
`;

export const EmptyItem = styled.div`
    height: calc(25% - 2rem);
    /* border: 1px solid red; */
    margin: 2rem auto;
    transform: none !important;
    &:nth-child(2) {
        margin: 1rem auto;
    }
`;

export const ExampleText = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: calc(20% + 2rem);
    left: 2rem;
    border: 4px solid var(--clr-primary);
    border-radius: 2rem;
    background: var(--clr-bg-dark-60);
    height: calc(20% - 2rem);
    width: calc(100% - 4rem);
    padding-inline: 2.4rem;
`;
