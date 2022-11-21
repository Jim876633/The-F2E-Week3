import { ButtonStyle, ButtonPrimaryStyle } from "./Button.style";

const Button = ({ children, title, click }) => {
    return (
        <ButtonStyle type="button" title={title} onClick={click}>
            {children}
        </ButtonStyle>
    );
};

export const ButtonPrimary = ({
    children,
    title,
    click,
    top,
    bottom,
    right,
    left,
    as,
    variants,
    initial,
    animate,
    transition,
}) => {
    return (
        <ButtonPrimaryStyle
            type="button"
            title={title}
            onClick={click}
            top={top}
            bottom={bottom}
            right={right}
            left={left}
            as={as}
            variants={variants}
            initial={initial}
            animate={animate}
            transition={transition}
        >
            {children}
        </ButtonPrimaryStyle>
    );
};

export default Button;
