import { motion } from "framer-motion";
import React from "react";
import { opacityVariants, upOpacityVariants } from "../../animations/animate";
import TalkCard from "../../components/Card/TalkCard";
import Role from "../../components/Role/Role";
import { TextWrap, TopWrap } from "../TodoList/TodoListPage.style";
import { SprintIntroPageStyle } from "./SprintIntroPage.style";

const SprintIntroPage = () => {
    return (
        <SprintIntroPageStyle>
            <TopWrap style={{ zIndex: 15 }}>
                <TalkCard key="talkCard" delay={0} isContinue={true} role="ee">
                    <TextWrap
                        as={motion.div}
                        variants={opacityVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{
                            duration: 0.2,
                            delay: 0,
                            when: "beforeChildren",
                            staggerChildren: 0.2,
                        }}
                    >
                        <motion.h2
                            variants={upOpacityVariants}
                            custom={"2rem"}
                            transition={{ duration: 0.2 }}
                        >
                            {}
                        </motion.h2>
                    </TextWrap>
                </TalkCard>
                <Role role="ee" key="ee" />
            </TopWrap>
        </SprintIntroPageStyle>
    );
};

export default SprintIntroPage;
