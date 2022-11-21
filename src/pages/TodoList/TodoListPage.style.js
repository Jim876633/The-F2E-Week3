import styled from "styled-components";
import { bg_village } from "../../shared/ImageSource";

export const TodoListPageStyle = styled.section`
    background: url(${bg_village});
    backdrop-filter: br;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const BackDropStyle = styled.div`
    background: var(--clr-bg-dark);
    width: 100%;
    height: 100%;
`;
