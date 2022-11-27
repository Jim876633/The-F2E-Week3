import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
    opacityVariants,
    upOpacityVariants,
    xMoveVariants,
    yMoveVariants,
} from "../../animations/animate";
import Image from "../../components/Image/Image";
import {
    bg_dark_b,
    bg_dark_l,
    bg_dark_r,
    bg_dark_t,
    bg_tint_lb,
    bg_tint_lt,
    bg_tint_rb,
    bg_tint_t,
    logo_hole,
} from "../../shared/ImageSource";
import { HomePageStyle, TagWrap, TextWrap, TitleWrap } from "./HomePage.style";
import data from "../../constants/data.json";
import { useNavigate } from "react-router-dom";
import { CardStyle } from "../../components/Card/Card.style";
import { ButtonPrimaryStyle } from "../../components/Button/Button.style";

const { p1, p2 } = data.homePage;
const imageListFront = [
    {
        id: "leftTop",
        src: bg_tint_lt,
        h: "60%",
        w: "40%",
        left: "-8%",
        top: "0rem",
        variants: xMoveVariants,
        custom: "-100%",
    },
    {
        id: "top",
        src: bg_tint_t,
        h: "45%",
        w: "100%",
        left: "0rem",
        top: "0rem",
        variants: yMoveVariants,
        custom: "-100%",
    },
    {
        id: "leftBottom",
        src: bg_tint_lb,
        h: "45%",
        w: "50%",
        left: "0rem",
        bottom: "0rem",
        variants: yMoveVariants,
        custom: "100%",
    },
    {
        id: "rignhtBottom",
        src: bg_tint_rb,
        h: "70%",
        w: "50%",
        right: "-9%",
        bottom: "0rem",
        variants: xMoveVariants,
        custom: "100%",
    },
];
const imageListBack = [
    {
        id: "top",
        src: bg_dark_t,
        w: "60%",
        top: "0rem",
        left: "20%",
        variants: yMoveVariants,
        custom: "-100%",
    },
    {
        id: "bottom",
        src: bg_dark_b,
        w: "60%",
        bottom: "0rem",
        left: "20%",
        variants: yMoveVariants,
        custom: "100%",
    },
    {
        id: "left",
        src: bg_dark_l,
        h: "100%",
        left: "0rem",
        variants: xMoveVariants,
        custom: "-100%",
    },
    {
        id: "right",
        src: bg_dark_r,
        h: "100%",
        right: "0rem",
        variants: xMoveVariants,
        custom: "100%",
    },
];

const HomePage = () => {
    const [enterAction, setEnterAction] = useState(false);

    const [startAction, setStartAction] = useState(false);

    const navigate = useNavigate();

    const enterHandler = () => {
        setEnterAction(true);
    };

    const startHandler = () => {
        setStartAction(true);
    };

    const changePageHandler = () => {
        navigate("/todoList");
    };

    useEffect(() => {
        return () => {
            setEnterAction(false);
            setStartAction(false);
        };
    }, []);

    return (
        <HomePageStyle>
            <div>
                {imageListBack.map((item) => (
                    <Image
                        key={item.id}
                        {...item}
                        initial="initial"
                        animate={!startAction || "move"}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        complete={changePageHandler}
                    />
                ))}
            </div>
            <div>
                {imageListFront.map((item) => (
                    <Image
                        key={item.id}
                        {...item}
                        initial="initial"
                        animate={!enterAction || "move"}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    />
                ))}
            </div>
            <AnimatePresence>
                {!enterAction ? (
                    <TitleWrap
                        key="titleWrap"
                        as={motion.div}
                        variants={opacityVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src={logo_hole}
                            w="80%"
                            h="100%"
                            top="-10%"
                            left="10%"
                        />
                        <h2>深入敏捷の村一探究竟</h2>
                        <ButtonPrimaryStyle
                            title="接受挑戰"
                            onClick={enterHandler}
                        >
                            接受挑戰
                        </ButtonPrimaryStyle>
                    </TitleWrap>
                ) : null}
                {enterAction && !startAction ? (
                    <CardStyle
                        key="card"
                        position="center"
                        top="-10%"
                        w="70%"
                        h="55%"
                        as={motion.div}
                        variants={opacityVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{
                            duration: 0.2,
                            delay: 1.5,
                            when: "beforeChildren",
                            staggerChildren: 1,
                        }}
                    >
                        <TagWrap>
                            <h3>(謎之音)</h3>
                        </TagWrap>
                        <TextWrap>
                            <motion.p
                                variants={upOpacityVariants}
                                custom={"50%"}
                                transition={{ duration: 0.2 }}
                            >
                                {p1.map((text, i) =>
                                    i == 1 ? <span key={i}>{text}</span> : text
                                )}
                            </motion.p>
                            <motion.p
                                variants={upOpacityVariants}
                                custom={"100%"}
                                transition={{ duration: 0.2 }}
                            >
                                {p2}
                            </motion.p>
                            <ButtonPrimaryStyle
                                title="接受挑戰"
                                bottom="-10rem"
                                left="50%"
                                onClick={startHandler}
                                as={motion.button}
                                variants={opacityVariants}
                                transition={{ duration: 0.2 }}
                            >
                                接受挑戰
                            </ButtonPrimaryStyle>
                        </TextWrap>
                    </CardStyle>
                ) : null}
            </AnimatePresence>
        </HomePageStyle>
    );
};

export default HomePage;
