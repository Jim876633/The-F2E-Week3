import { CardGradientStyle, CardStyle } from "./Card.style";

const Card = ({
    children,
    position,
    top,
    bottom,
    left,
    right,
    w,
    h,
    as,
    variants,
    initial,
    animate,
    exit,
    transition,
}) => {
    return (
        <CardStyle
            w={w}
            h={h}
            top={top}
            bottom={bottom}
            left={left}
            right={right}
            as={as}
            variants={variants}
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
        >
            {children}
        </CardStyle>
    );
};

export const CardGradient = ({ children, role }) => {
    return <CardGradientStyle role={role}>{children}</CardGradientStyle>;
};

export default Card;
