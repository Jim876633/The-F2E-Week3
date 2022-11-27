import React from "react";
import {
    opacityVariants,
    scaleVariants,
    xScaleVariants,
} from "../../animations/animate";
import Image from "../../components/Image/Image";
import { logo_txt } from "../../shared/ImageSource";
import {
    FinishPageStyle,
    RoleListWrap,
    RoleText,
    TitleWrap,
} from "./FinishPage.style";
import { motion } from "framer-motion";
import Role from "../../components/Role/Role";
import { useNavigate } from "react-router-dom";

const roleList = {
    title: ["gg", "ee", "mm", "po"],
    content: [
        "窩的冰淇淋ㄋ？",
        "嗚嗚我會想尼QQ",
        "不愧似窩ㄉ學生",
        "哇喔太厲害ㄌㄅ",
    ],
};

const FinishPage = () => {
    const navigate = useNavigate();

    const againHandler = () => {
        navigate("/");
    };

    return (
        <FinishPageStyle>
            <Image
                src={logo_txt}
                w="60rem"
                variants={scaleVariants}
                initial="hidden"
                animate="visible"
                style={{ margin: "-5rem 0 0 " }}
            />
            <motion.h2
                variants={opacityVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
            >
                恭喜你通過
            </motion.h2>
            <TitleWrap
                as={motion.div}
                variants={xScaleVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 1 }}
            >
                <h2>《 敏捷任務 - 最初の試煉 》</h2>
            </TitleWrap>
            <motion.button
                title="再玩一次"
                type="button"
                variants={opacityVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 3.5 }}
                onClick={againHandler}
            >
                再玩一次
            </motion.button>
            <RoleListWrap>
                {roleList.title.map((role, i) => (
                    <div
                        key={role}
                        style={{
                            transform:
                                role !== "mm" ? "rotate(180deg)" : "none",
                        }}
                    >
                        <RoleText
                            role={role}
                            index={i}
                            as={motion.span}
                            variants={opacityVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: i / 4 + 3 }}
                        >
                            {roleList.content[i]}
                        </RoleText>
                        <Role
                            role={role}
                            key={role}
                            size="sm"
                            delay={i / 4 + 1.5}
                        />
                    </div>
                ))}
            </RoleListWrap>
        </FinishPageStyle>
    );
};

export default FinishPage;
