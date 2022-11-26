import styled, { css } from "styled-components";
import { CardGradientStyle } from "../../components/Card/Card.style";

export const FinishPageStyle = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    button {
        color: var(--clr-primary);
    }
    button:hover {
        color: var(--clr-primary-70);
    }
    & > h2 {
        margin-top: -2rem;
    }
`;

export const TitleWrap = styled(CardGradientStyle)`
    padding: 2.8rem 10rem;
    width: fit-content;
    margin-block: 2rem;
    h2 {
        color: var(--clr-primary);
    }
`;

export const RoleListWrap = styled.div`
    position: relative;
    display: flex;
    width: 60%;
    gap: 5rem;
    div:nth-child(2) {
        margin-right: auto;
    }
`;

export const RoleText = styled.span`
    position: absolute;
    top: 0;
    color: var(--clr-primary);
    color: ${(props) => {
        if (props.role === "mm") {
            return "var(--clr-role-sm-tint)";
        }
        if (props.role === "gg") {
            return "var(--clr-role-team2)";
        }
        if (props.role === "ee") {
            return "var(--clr-role-team1)";
        }
    }};
    ${(props) =>
        props.role !== "mm"
            ? css`
                  transform: rotate(180deg);
                  bottom: 0;
              `
            : ""};
    ${(props) =>
        props.index == 0 || props.index === 2
            ? css`
                  margin-top: -1rem;
                  margin-bottom: -1rem;
              `
            : ""}
`;
