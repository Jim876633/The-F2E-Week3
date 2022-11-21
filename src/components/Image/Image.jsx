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
    as,
    variants,
    initial,
    animate,
    custom,
    transition,
    transitionend,
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
            variants={variants}
            initial={initial}
            animate={animate}
            custom={custom}
            transition={transition}
            onTransitionEnd={transitionend}
        >
            <img src={src} alt={alt || ""} />
        </ImageWrap>
    );
};

export default Image;
