import { motion } from "framer-motion";

import { opacityVariants } from "../../animations/animate";
import {
    gif_po,
    gif_sm,
    gif_team1,
    gif_team2,
    title_po,
    title_sm,
    title_team1,
    title_team2,
} from "../../shared/ImageSource";
import Image from "../Image/Image";
import { CardGradientStyle } from "./Card.style";

const roleList = {
    po: { title: title_po, icon: gif_po },
    mm: { title: title_sm, icon: gif_sm },
    ee: { title: title_team1, icon: gif_team1 },
    gg: { title: title_team2, icon: gif_team2 },
};

const TalkCard = ({ children, isExit, isContinue, delay, role }) => {
    return (
        <CardGradientStyle
            role={role}
            as={motion.div}
            variants={opacityVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
                duration: 0.2,
                delay: !isExit ? delay : 0,
            }}
        >
            {children}
            <Image
                src={roleList[role].title}
                top="15%"
                left="-1.2rem"
                text={role}
            />
            {isContinue ? (
                <Image
                    src={roleList[role].icon}
                    bottom="3rem"
                    right="3rem"
                    w="3rem"
                />
            ) : null}
        </CardGradientStyle>
    );
};

export default TalkCard;
