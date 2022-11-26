import styled, { css } from "styled-components";

export const SprintIntroItemStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    flex: 1 1;
    height: 100%;
    & > div:first-child {
        margin: 0;
    }
`;

export const SprintTitleWrap = styled.div`
    position: relative;
    display: grid;
    place-content: center;
    border: 4px solid var(--clr-role-team1);
    border-radius: 2rem;
    padding: 0.4rem 3rem;
    background-color: var(--clr-bg-dark-60);
    text-align: center;
    width: "30rem";
    h2 {
        color: var(--clr-role-team1);
    }
    span {
        display: block;
        color: var(--clr-primary);
    }

    ${(props) =>
        props.type === "example"
            ? css`
                  border: 4px solid var(--clr-primary);
                  h2 {
                      color: var(--clr-primary);
                  }
                  span {
                      color: var(--clr-primary-dark);
                  }
                  &::before {
                      content: "";
                      position: absolute;
                      top: 50%;
                      left: -5rem;
                      width: 5rem;
                      height: 4px;
                      background-color: var(--clr-primary);
                  }
                  &:nth-child(5) {
                      left: 35.5rem !important;
                      top: 37rem !important;
                  }
                  &:nth-child(5)::before {
                      width: 4px;
                      height: 5rem;
                      top: -5rem;
                      left: 50%;
                  }
              `
            : ""}
    ${(props) =>
        props.match === "wrong"
            ? css`
                  border: 4px solid var(--clr-danger);
              `
            : ""}
`;

export const SprintContentWrap = styled.div`
    li {
        list-style: disc;
        list-style-position: inside;
        line-height: 1.8;
    }
`;
