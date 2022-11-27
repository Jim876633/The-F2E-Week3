import styled from "styled-components";

export const ProgressBarStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 1.2rem;
    width: max(100vw, 1020px);
    background-color: var(--clr-primary-dark);
    z-index: 20;
`;

export const Bar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => (props.width ? props.width + "px" : "1.2rem")};
    height: 100%;
    background: linear-gradient(
        270deg,
        var(--clr-primary) 0%,
        var(--clr-primary-0) 100%
    );
    transition: width 0.5s;
`;
