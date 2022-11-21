import styled, { css } from "styled-components";

export const ImageWrap = styled.div`
    width: ${(props) => props.w || "fit-content"};
    height: ${(props) => props.h || "fit-content"};
    margin: auto;
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
            : ""}
    img {
        object-fit: ${(props) => props.fit || "contain"};
    }
`;

export const TitleWrap = styled.div``;
