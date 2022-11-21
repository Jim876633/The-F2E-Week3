import styled, { css } from "styled-components";

export const CardStyle = styled.div`
    position: relative;
    display: grid;
    place-content: center;
    background: var(--clr-bg-dark-60);
    border: 2px solid var(--clr-primary);
    border-radius: 4rem;
    box-shadow: 0px 0px 24px 8px var(--clr-primary-80);
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
            : ""}
`;
