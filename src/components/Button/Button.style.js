import styled, { css } from "styled-components";

export const ButtonStyle = styled.button``;

export const ButtonPrimaryStyle = styled.button`
    position: relative;
    padding: 1.2rem 4.8rem;
    line-height: 1.8;
    background: var(--clr-primary);
    border: none;
    border-radius: 4rem;
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

    ${(props) =>
        props.top || props.bottom || props.right || props.left
            ? css`
                  position: absolute;
                  top: ${props.top || "auto"};
                  left: ${props.left || "auto"};
                  right: ${props.right || "auto"};
                  bottom: ${props.bottom || "auto"};
              `
            : ""}
`;
