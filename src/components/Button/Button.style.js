import styled, { css } from "styled-components";

export const ButtonStyle = styled.button.attrs(() => ({
    type: "button",
}))`
    position: relative;
    line-height: 1.8;
    padding: 0.8rem 4rem;
    border: 2px solid var(--clr-primary);
    border-radius: 2rem;
    color: var(--clr-text-tint);
    ${(props) =>
        props.top || props.bottom || props.right || props.left
            ? css`
                  position: absolute;
                  top: ${props.top || "auto"};
                  left: ${props.left || "auto"};
                  right: ${props.right || "auto"};
                  bottom: ${props.bottom || "auto"};
                  margin: auto;
              `
            : ""};
`;

export const ButtonPrimaryStyle = styled(ButtonStyle)`
    color: var(--clr-text-white);
    background: var(--clr-primary);
    border: none;
    border-radius: 4rem;
    padding: 1.2rem 4.8rem;
    letter-spacing: 0.2em;
    margin-top: 5rem;
    &::after {
        content: attr(title);
        position: absolute;
        top: -5px;
        left: 0;
        display: grid;
        place-content: center;
        border-radius: 4rem;
        width: 100%;
        height: 100%;
        text-shadow: 0 5px rgba(255, 255, 255, 0.2);
        background: linear-gradient(
                0deg,
                rgba(0, 255, 224, 0) 0%,
                var(--clr-primary-80) 100%
            ),
            var(--clr-primary-dark-80);
        transition: all 0.2s;
    }
    &:hover&::after {
        text-shadow: 0 3px rgba(255, 255, 255, 0.2);
        top: -3px;
    }
    &:disabled {
        background: var(--clr-disabled);
    }
    &:disabled::after {
        background: linear-gradient(
                0deg,
                rgba(238, 238, 238, 0) 0%,
                #dddddd 100%,
                #eeeeee 100%
            ),
            #555555;
    }
    &:disabled:hover::after {
        text-shadow: 0 5px rgba(255, 255, 255, 0.2);
        top: -5px;
    }
`;
