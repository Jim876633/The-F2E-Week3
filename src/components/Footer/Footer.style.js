import styled from "styled-components";

export const FooterStyle = styled.footer`
    position: absolute;
    top: calc(max(100vh, 660px) - 4.4rem);
    width: max(100vw, 1020px);
    height: 4.4rem;
    text-align: center;
    line-height: 4.4rem;
    font-size: var(--fz-footer);
    color: var(--clr-primary-dark);
    background-color: var(--clr-bg-dark-80);
    z-index: 20;
`;
