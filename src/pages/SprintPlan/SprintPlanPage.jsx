import { motion, AnimatePresence } from "framer-motion";
import {
    opacityVariants,
    roleVariants,
    scaleVariants,
    storySpineVariant,
    upOpacityVariants,
    xMoveOpacityVariants,
    yMoveVariants,
} from "../../animations/animate";
import TalkCard from "../../components/Card/TalkCard";
import Image from "../../components/Image/Image";
import {
    hole,
    img_jira_w,
    img_sprint_plan,
    img_sprint_planPoint,
    img_sprint_team,
    img_story,
    img_story_13,
    img_story_21,
    img_story_spine,
    img_time,
    img_time_1,
    img_time_13,
    img_time_2,
    img_time_21,
    img_time_3,
    img_time_5,
    img_time_8,
    role_po,
    role_po_bg,
    role_sm,
    role_sm_bg,
} from "../../shared/ImageSource";
import {
    BottomWrap,
    RoleWrap,
    TextWrap,
    TopWrap,
} from "../TodoList/TodoListPage.style";
import { SprintPlanPageStyle } from "./SprintPlanPage.style";
import data from "../../constants/data.json";
import { CardCircleStyle } from "../../components/Card/Card.style";
import { Fragment, useRef, useState } from "react";
import Role from "../../components/Role/Role";
import { ButtonPrimaryStyle } from "../../components/Button/Button.style";
import { useNavigate } from "react-router-dom";

const { p1, p2, p3, p4, p5, p6, p7 } = data.sprintPlanPage;

const SprintPlanPage = () => {
    const navigate = useNavigate();

    const [step2Action, setStep2Action] = useState(false);

    const [step3Action, setStep3Action] = useState(false);

    const [step4Action, setStep4Action] = useState(false);

    const [step5Action, setStep5Action] = useState(false);

    const [step6Action, setStep6Action] = useState(false);

    const allowClickViewRef = useRef(false);

    const continueClickHandler = () => {
        if (!allowClickViewRef.current) return;
        allowClickViewRef.current = false;
        if (!step2Action) {
            setStep2Action(true);
            return;
        }
        if (!step3Action) {
            setStep3Action(true);
            return;
        }
        if (!step4Action) {
            setStep4Action(true);
            return;
        }
        if (!step5Action) {
            setStep5Action(true);
            return;
        }
        if (!step6Action) {
            setStep6Action(true);
            return;
        }
    };

    const stepAnimationEnd = (e) => {
        if (e === "visible") {
            allowClickViewRef.current = true;
        }
    };

    const practiceActionHandler = () => {
        navigate("/sprintTodo");
    };

    return (
        <SprintPlanPageStyle onClick={continueClickHandler}>
            <TopWrap>
                <AnimatePresence>
                    {!step2Action ? (
                        <RoleWrap key="role_po">
                            <Image
                                src={hole}
                                key="hole"
                                variants={scaleVariants}
                                initial="visible"
                                exit="hidden"
                                transition={{ duration: 0.5, delay: 1.5 }}
                            />

                            <div>
                                <motion.div
                                    key="role"
                                    style={{ height: "30rem" }}
                                    variants={yMoveVariants}
                                    initial="initial"
                                    exit="move"
                                    custom={"-100%"}
                                    transition={{ duration: 0.5, delay: 1 }}
                                >
                                    <Image
                                        src={role_po_bg}
                                        top="-1rem"
                                        w="120%"
                                        left="-10%"
                                    />
                                    <Image
                                        src={role_po}
                                        bottom="7rem"
                                        variants={roleVariants}
                                        initial="visible"
                                    />
                                </motion.div>
                            </div>
                        </RoleWrap>
                    ) : null}
                </AnimatePresence>
                <AnimatePresence mode="wait">
                    {!step2Action ? (
                        <TalkCard
                            delay={0}
                            isContinue={true}
                            key="talkCard_po"
                            role="po"
                        >
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
                                    staggerChildren: 0,
                                }}
                            >
                                <motion.p
                                    variants={upOpacityVariants}
                                    custom={"2rem"}
                                    transition={{ duration: 0.2 }}
                                >
                                    {p1.map((item, i) =>
                                        i === 1 ? (
                                            <span key={i}>{item}</span>
                                        ) : (
                                            item
                                        )
                                    )}
                                </motion.p>
                            </TextWrap>
                        </TalkCard>
                    ) : null}
                    {step4Action && !step6Action ? (
                        <TalkCard
                            delay={0}
                            isContinue={true}
                            key="talkCard2_mm"
                            role="ee"
                        >
                            {!step5Action ? (
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
                                        staggerChildren: 0,
                                    }}
                                >
                                    <motion.p
                                        variants={upOpacityVariants}
                                        custom={"2rem"}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {p4.map((item, i) =>
                                            i === 1 || i === 3 ? (
                                                <span key={i}>{item}</span>
                                            ) : (
                                                item
                                            )
                                        )}
                                    </motion.p>
                                </TextWrap>
                            ) : (
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
                                        staggerChildren: 0,
                                    }}
                                >
                                    <motion.p
                                        variants={upOpacityVariants}
                                        custom={"2rem"}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {p5.map((item, i) =>
                                            i === 1 ? (
                                                <span key={i}>{item}</span>
                                            ) : (
                                                item
                                            )
                                        )}
                                    </motion.p>
                                </TextWrap>
                            )}
                        </TalkCard>
                    ) : null}
                    {step6Action ? (
                        <TalkCard
                            delay={0}
                            isContinue={true}
                            key="talkCard_gg"
                            role="gg"
                        >
                            <TextWrap
                                as={motion.div}
                                variants={opacityVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                transition={{
                                    duration: 0.2,
                                    delay: 0.5,
                                    when: "beforeChildren",
                                    staggerChildren: 0,
                                }}
                            >
                                <motion.p
                                    variants={upOpacityVariants}
                                    custom={"2rem"}
                                    transition={{ duration: 0.2 }}
                                >
                                    {p6}
                                </motion.p>
                            </TextWrap>
                        </TalkCard>
                    ) : null}
                    {step3Action ? (
                        <div style={{ display: "flex", marginLeft: "auto" }}>
                            <Role key="role_mm" role="ee" />
                            <Role key="role_gg" role="gg" delay={0.6} />
                        </div>
                    ) : null}
                </AnimatePresence>
            </TopWrap>
            <BottomWrap
                style={{
                    padding: "8rem 5rem ",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    gap: "3rem",
                }}
            >
                <AnimatePresence>
                    {!step2Action ? (
                        <CardCircleStyle
                            key="card_plan"
                            w="53rem"
                            h="53rem"
                            top="-5%"
                            as={motion.div}
                            variants={opacityVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{
                                duration: 0.5,
                                delay: !step2Action ? 2.5 : 0,
                            }}
                            onAnimationComplete={stepAnimationEnd}
                        >
                            <Image
                                src={img_sprint_plan}
                                w="50rem"
                                top="5%"
                                left="0%"
                            />
                        </CardCircleStyle>
                    ) : null}
                    {step2Action && !step3Action ? (
                        <>
                            <CardCircleStyle
                                key="card_team"
                                role="mm"
                                w="53rem"
                                h="53rem"
                                top="-65%"
                                as={motion.div}
                                variants={opacityVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                transition={{
                                    duration: 0.5,
                                    delay: 1.5,
                                }}
                                onAnimationComplete={stepAnimationEnd}
                            >
                                <Image
                                    src={img_sprint_team}
                                    w="40rem"
                                    top="10%"
                                    left="10%"
                                />
                            </CardCircleStyle>
                            <TalkCard
                                delay={0}
                                isContinue={true}
                                key="talkCard_mm"
                                role="mm"
                            >
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
                                        staggerChildren: 0,
                                    }}
                                >
                                    <motion.p
                                        variants={upOpacityVariants}
                                        custom={"2rem"}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {p2.map((item, i) =>
                                            i === 1 ? (
                                                <span key={i}>{item}</span>
                                            ) : (
                                                item
                                            )
                                        )}
                                    </motion.p>
                                </TextWrap>
                            </TalkCard>
                        </>
                    ) : null}
                    {step3Action && !step4Action ? (
                        <>
                            <TalkCard
                                delay={0}
                                isContinue={true}
                                key="talkCard2_mm"
                                role="mm"
                            >
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
                                        staggerChildren: 0,
                                    }}
                                >
                                    <motion.p
                                        variants={upOpacityVariants}
                                        custom={"2rem"}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {p3.map((item, i) =>
                                            i === 1 || i === 3 ? (
                                                <span key={i}>{item}</span>
                                            ) : (
                                                item
                                            )
                                        )}
                                    </motion.p>
                                </TextWrap>
                            </TalkCard>
                            <CardCircleStyle
                                key="card_point"
                                role="mm"
                                w="53rem"
                                h="53rem"
                                top="-65%"
                                left="-50%"
                                as={motion.div}
                                variants={opacityVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                transition={{
                                    duration: 0.5,
                                    delay: 2,
                                }}
                                onAnimationComplete={stepAnimationEnd}
                            >
                                <Image
                                    src={img_sprint_planPoint}
                                    w="50rem"
                                    top="2%"
                                    left="2%"
                                />
                            </CardCircleStyle>
                        </>
                    ) : null}
                    {!step4Action ? (
                        <RoleWrap key="role_mm1">
                            <Image
                                src={hole}
                                bottom="0rem"
                                variants={scaleVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                transition={{ duration: 0.5, delay: 1 }}
                            />
                            <div style={{ top: "-2rem" }}>
                                <Image
                                    src={role_sm_bg}
                                    w="130%"
                                    left="-20%"
                                    bottom="1rem"
                                    variants={yMoveVariants}
                                    initial="move"
                                    animate="initial"
                                    exit="move"
                                    custom={"100%"}
                                    transition={{ duration: 0.3, delay: 2 }}
                                />
                                <Image
                                    src={role_sm}
                                    bottom="-1rem"
                                    style={{ originY: 1 }}
                                    variants={roleVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    custom={"100%"}
                                    transition={{
                                        duration: 0.3,
                                        delay: 2,
                                        times: [0, 0.5, 1],
                                        scaleY: {
                                            delay: 2,
                                        },
                                    }}
                                />
                            </div>
                        </RoleWrap>
                    ) : null}
                    {step4Action && !step6Action ? (
                        <>
                            <Image
                                src={img_story_spine}
                                w="5rem"
                                top="8%"
                                left="20%"
                                variants={storySpineVariant}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.5, delay: 0.5 }}
                            />
                            <AnimatePresence>
                                {!step5Action ? (
                                    <Image
                                        key="time"
                                        src={img_time}
                                        w="18rem"
                                        top="2%"
                                        left="5%"
                                        variants={scaleVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        transition={{ duration: 0.5, delay: 4 }}
                                        complete={stepAnimationEnd}
                                    />
                                ) : null}
                            </AnimatePresence>
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(4,1fr)",
                                    width: "80%",
                                    height: "80%",
                                    margin: "auto",
                                    gap: "2rem",
                                    gridTemplateAreas: `'t t t t ' 'b0 b1 b2 b3'`,
                                    position: "relative",
                                }}
                            >
                                <div
                                    style={{
                                        display: "grid",
                                        margin: "auto",
                                        width: "80%",
                                        gridTemplateColumns: "repeat(3,1fr)",
                                        gridArea: "t",
                                        position: "relative",
                                    }}
                                >
                                    {Array(3)
                                        .fill(null)
                                        .map((_, i) => {
                                            if (i === 0) {
                                                return (
                                                    <Fragment key={i}>
                                                        <Image
                                                            src={img_story}
                                                            w="19rem"
                                                            variants={
                                                                opacityVariants
                                                            }
                                                            initial="hidden"
                                                            animate="visible"
                                                            transition={{
                                                                duration: 1,
                                                                delay: 3,
                                                            }}
                                                        />
                                                        {step5Action ? (
                                                            <motion.div
                                                                style={{
                                                                    position:
                                                                        "absolute",
                                                                    width: "100%",
                                                                    height: "100%",
                                                                }}
                                                                variants={
                                                                    opacityVariants
                                                                }
                                                                initial="hidden"
                                                                animate="visible"
                                                                transition={{
                                                                    duration: 0.5,
                                                                    delay: 0,
                                                                }}
                                                            >
                                                                <Image
                                                                    src={
                                                                        img_time_1
                                                                    }
                                                                    top="-5rem"
                                                                    left={
                                                                        i +
                                                                        20 +
                                                                        "rem"
                                                                    }
                                                                    w="12rem"
                                                                />
                                                                <div
                                                                    style={{
                                                                        width: "8rem",
                                                                        height: "8rem",
                                                                        borderRadius:
                                                                            "50%",
                                                                        position:
                                                                            " absolute",
                                                                        background:
                                                                            "var(--clr-primary)",
                                                                        display:
                                                                            "grid",
                                                                        placeContent:
                                                                            "center",
                                                                        fontSize:
                                                                            "44px",
                                                                        left: "16rem",
                                                                        top: "5rem",
                                                                    }}
                                                                >
                                                                    {i + 1}
                                                                </div>
                                                            </motion.div>
                                                        ) : null}
                                                    </Fragment>
                                                );
                                            }
                                            return (
                                                <Fragment key={i}>
                                                    <Image
                                                        key={i}
                                                        src={img_story}
                                                        w="19rem"
                                                        variants={
                                                            xMoveOpacityVariants
                                                        }
                                                        initial="hidden"
                                                        animate="visible"
                                                        custom={"-50%"}
                                                        transition={{
                                                            duration: 1,
                                                            delay: 4,
                                                        }}
                                                    />
                                                    {step5Action ? (
                                                        <motion.div
                                                            style={{
                                                                position:
                                                                    "absolute",
                                                                width: "100%",
                                                                height: "100%",
                                                            }}
                                                            variants={
                                                                opacityVariants
                                                            }
                                                            initial="hidden"
                                                            animate="visible"
                                                            transition={{
                                                                duration: 0.5,
                                                                delay: i * 0.5,
                                                            }}
                                                        >
                                                            <Image
                                                                src={
                                                                    i === 1
                                                                        ? img_time_2
                                                                        : img_time_3
                                                                }
                                                                top="-5rem"
                                                                left={
                                                                    i * 35 +
                                                                    20 +
                                                                    "rem"
                                                                }
                                                                w="12rem"
                                                            />
                                                            <div
                                                                style={{
                                                                    width: "8rem",
                                                                    height: "8rem",
                                                                    borderRadius:
                                                                        "50%",
                                                                    position:
                                                                        " absolute",
                                                                    background:
                                                                        "var(--clr-primary)",
                                                                    display:
                                                                        "grid",
                                                                    placeContent:
                                                                        "center",
                                                                    fontSize:
                                                                        "44px",
                                                                    left: `${
                                                                        i * 35 +
                                                                        16
                                                                    }rem`,
                                                                    top: "5rem",
                                                                }}
                                                            >
                                                                {i + 1}
                                                            </div>
                                                        </motion.div>
                                                    ) : null}
                                                </Fragment>
                                            );
                                        })}
                                </div>
                                {Array(4)
                                    .fill(null)
                                    .map((_, i) => {
                                        return (
                                            <Fragment key={i}>
                                                <Image
                                                    key={i + 3}
                                                    src={
                                                        i === 2
                                                            ? img_story_13
                                                            : i === 3
                                                            ? img_story_21
                                                            : img_story
                                                    }
                                                    w="19rem"
                                                    style={{
                                                        gridArea: `b${i}`,
                                                    }}
                                                    variants={
                                                        xMoveOpacityVariants
                                                    }
                                                    initial="hidden"
                                                    animate="visible"
                                                    custom={"-50%"}
                                                    transition={{
                                                        duration: 1,
                                                        delay: 4,
                                                    }}
                                                />
                                                {step5Action ? (
                                                    <motion.div
                                                        style={{
                                                            position:
                                                                "absolute",
                                                            bottom: "0rem",
                                                            width: "100%",
                                                            height: "100%",
                                                        }}
                                                        variants={
                                                            opacityVariants
                                                        }
                                                        initial="hidden"
                                                        animate="visible"
                                                        transition={{
                                                            duration: 0.5,
                                                            delay:
                                                                i * 0.5 + 1.5,
                                                        }}
                                                        onAnimationComplete={(
                                                            e
                                                        ) => {
                                                            if (i === 3) {
                                                                stepAnimationEnd(
                                                                    e
                                                                );
                                                            }
                                                        }}
                                                    >
                                                        <Image
                                                            src={
                                                                i === 0
                                                                    ? img_time_5
                                                                    : i === 1
                                                                    ? img_time_8
                                                                    : i === 2
                                                                    ? img_time_13
                                                                    : img_time_21
                                                            }
                                                            bottom="12rem"
                                                            left={
                                                                i * 33 +
                                                                20 +
                                                                "rem"
                                                            }
                                                            w="12rem"
                                                        />
                                                        <div
                                                            style={{
                                                                width: "8rem",
                                                                height: "8rem",
                                                                borderRadius:
                                                                    "50%",
                                                                position:
                                                                    " absolute",
                                                                background:
                                                                    i === 2
                                                                        ? "var(--clr-point-13)"
                                                                        : i ===
                                                                          3
                                                                        ? "var(--clr-point-21)"
                                                                        : "var(--clr-primary)",
                                                                display: "grid",
                                                                placeContent:
                                                                    "center",
                                                                fontSize:
                                                                    "44px",
                                                                left: `${
                                                                    i * 34 + 14
                                                                }rem`,
                                                                bottom: "5rem",
                                                            }}
                                                        >
                                                            {i === 0
                                                                ? 5
                                                                : i === 1
                                                                ? 8
                                                                : i === 2
                                                                ? 13
                                                                : 21}
                                                        </div>
                                                    </motion.div>
                                                ) : null}
                                            </Fragment>
                                        );
                                    })}
                            </div>
                        </>
                    ) : null}
                    {step6Action ? (
                        <>
                            <div
                                style={{
                                    width: "70%",
                                    margin: "auto",
                                    marginTop: "5%",
                                }}
                            >
                                <TalkCard
                                    delay={1}
                                    isContinue={true}
                                    key="talkCard2_mm"
                                    role="ee"
                                >
                                    <TextWrap
                                        as={motion.div}
                                        variants={opacityVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        transition={{
                                            duration: 0.2,
                                            delay: 1.5,
                                            when: "beforeChildren",
                                            staggerChildren: 0,
                                        }}
                                    >
                                        <motion.p
                                            style={{
                                                display: "flex",
                                                flexWrap: "wrap",
                                            }}
                                            variants={upOpacityVariants}
                                            custom={"2rem"}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {p7.map((item, i) =>
                                                i === 1 ? (
                                                    <small
                                                        key={i}
                                                        style={{
                                                            height: "3rem",
                                                            width: "10rem",
                                                        }}
                                                    >
                                                        <img
                                                            src={img_jira_w}
                                                            alt={item}
                                                        />
                                                    </small>
                                                ) : (
                                                    <small key={i}>
                                                        {item}
                                                    </small>
                                                )
                                            )}
                                        </motion.p>
                                    </TextWrap>
                                </TalkCard>
                            </div>
                            <ButtonPrimaryStyle
                                title="練習去囉"
                                right="5rem"
                                bottom="8rem"
                                as={motion.button}
                                variants={opacityVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.2, delay: 2 }}
                                onClick={practiceActionHandler}
                            >
                                練習去囉
                            </ButtonPrimaryStyle>
                        </>
                    ) : null}
                </AnimatePresence>
            </BottomWrap>
        </SprintPlanPageStyle>
    );
};

export default SprintPlanPage;
