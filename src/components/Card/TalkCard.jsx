import { motion } from "framer-motion";

import { opacityVariants } from "../../animations/animate";
import { gif_po, title_po } from "../../shared/ImageSource";
import Image from "../Image/Image";
import { CardGradientStyle } from "./Card.style";

const TalkCard = ({ children, isExit, isContinue, delay }) => {
    return (
        <CardGradientStyle
            as={motion.div}
            variants={opacityVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
                duration: 0.2,
                delay: !isExit ? delay : 0,
            }}
        >
            {children}
            <Image src={title_po} top="15%" left="-1.2rem" text="PO" />
            {isContinue ? (
                <Image src={gif_po} bottom="3rem" right="3rem" w="3rem" />
            ) : null}
        </CardGradientStyle>
    );
};

export default TalkCard;
