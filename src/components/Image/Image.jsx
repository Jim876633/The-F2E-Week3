import { motion } from "framer-motion";
import { ImageWrap } from "./Image.style";

const Image = ({
    src,
    alt,
    h,
    w,
    top,
    bottom,
    right,
    left,
    fit,
    style,
    variants,
    initial,
    animate,
    exit,
    custom,
    transition,
    transitionend,
    complete,
    text,
}) => {
    return (
        <ImageWrap
            as={motion.div}
            h={h}
            w={w}
            top={top}
            bottom={bottom}
            right={right}
            left={left}
            fit={fit}
            style={style}
            variants={variants}
            initial={initial}
            animate={animate}
            exit={exit}
            custom={custom}
            transition={transition}
            onTransitionEnd={transitionend}
            onAnimationComplete={complete}
            data-title={text}
        >
            <img src={src} alt={alt || ""} />
        </ImageWrap>
    );
};

export default Image;
