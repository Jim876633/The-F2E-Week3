import styled, { css } from "styled-components";

export const CardStyle = styled.div`
    position: relative;
    display: grid;
    place-content: center;
    background: var(--clr-bg-dark-60);
    border: 2px solid var(--clr-primary);
    border-radius: 4rem;
    box-shadow: 0px 0px 24px 2px var(--clr-primary-80);
    backdrop-filter: blur(5px);
    padding: 1rem;
    width: ${(props) => props.w || "100%"};
    height: ${(props) => props.h || "100%"};
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
                  box-shadow: 0px 0px 24px 8px var(--clr-role-sm-80),
                      0px 0px 8px 4px var(--clr-role-sm-80);
              `
            : ""}
    ${(props) =>
        props.role === "ee"
            ? css`
                  border: 2px solid var(--clr-role-team1);
                  background: var(--linear-role-team1), rgba(10, 13, 20, 0.6);
                  box-shadow: 0px 0px 24px 8px var(--clr-role-team1),
                      0px 0px 8px 4px var(--clr-role-team1);
              `
            : ""}
        ${(props) =>
        props.role === "gg"
            ? css`
                  border: 2px solid var(--clr-role-team2);
                  background: var(--linear-role-team2), rgba(10, 13, 20, 0.6);
                  box-shadow: 0px 0px 24px 8px var(--clr-role-team2),
                      0px 0px 8px 4px var(--clr-role-team2);
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
`;

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
`;

export const DropWrap = styled.div`
    position: relative;
    width: 100%;
    height: 80%;
    padding: 1rem 2rem;
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
    z-index: -1;
    padding: 2rem;
    display: grid;
    gap: 2rem;
    div {
        width: 100%;
        height: 100%;
        border: 2px dashed var(--clr-primary);
        border-radius: 2rem;
    }
`;

export const DragItem = styled.div`
    display: flex;
    align-items: center;
    top: auto !important;
    left: auto !important;
    border: 4px solid var(--clr-primary);
    border-radius: 2rem;
    background: var(--clr-bg-dark-60);
    height: calc(25% - 2rem);
    padding-inline: 2.4rem;
    margin: 2rem auto;
    &:nth-child(2) {
        margin: 1rem auto;
    }
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
