import { motion } from "framer-motion";
import React from "react";
import {
    upOpacityVariants,
    xMoveOpacityVariants,
} from "../../animations/animate";
import {
    img_sprint_daily,
    img_sprint_plan,
    img_sprint_retro,
    img_sprint_review,
} from "../../shared/ImageSource";
import Image from "../Image/Image";
import {
    SprintContentWrap,
    SprintIntroItemStyle,
    SprintTitleWrap,
} from "./SprintIntroItem.style";

const sprintImageList = [img_sprint_daily, img_sprint_review, img_sprint_retro];

const SprintIntroItem = ({ item, index, animateEnd }) => {
    return (
        <SprintIntroItemStyle
            as={motion.div}
            variants={xMoveOpacityVariants}
            initial="hidden"
            animate="visible"
            custom={"-50%"}
            transition={{
                duration: 1,
                when: "beforeChildren",
                staggerChildren: 0.2,
            }}
        >
            <Image src={sprintImageList[index]} />
            <SprintTitleWrap>
                <h2>{item.title}</h2>
                <span>{item.titleEn}</span>
            </SprintTitleWrap>
            <SprintContentWrap>
                {item.content.map((item, i) => {
                    if (item.type === "li") {
                        return (
                            <ul key={i}>
                                {item.text.map((text, i) => (
                                    <motion.li
                                        key={i}
                                        variants={upOpacityVariants}
                                        custom={"-2rem"}
                                        transition={{ duration: 0.2 }}
                                        onAnimationComplete={animateEnd}
                                    >
                                        {text}
                                    </motion.li>
                                ))}
                            </ul>
                        );
                    }
                    return (
                        <motion.p
                            key={i}
                            variants={upOpacityVariants}
                            custom={"-2rem"}
                            transition={{ duration: 0.2 }}
                        >
                            {item.text}
                        </motion.p>
                    );
                })}
            </SprintContentWrap>
        </SprintIntroItemStyle>
    );
};

export default SprintIntroItem;
