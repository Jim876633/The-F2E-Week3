import styled, { css } from "styled-components";

export const ImageWrap = styled.div`
    position: relative;
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

    ${(props) =>
        props["data-title"]
            ? css`
                  &:: after {
                      content: attr(data-title);
                      position: absolute;
                      left: 0;
                      top: 0;
                      bottom: 0;
                      right: 0;
                      margin: auto;
                      width: fit-content;
                      height: fit-content;
                      font-size: var(--fz-talk-lg);
                      transform: translateY(-4px);
                      color: var(--clr-bg-dark);
                  }
              `
            : ""}
`;

export const TitleWrap = styled.div``;
