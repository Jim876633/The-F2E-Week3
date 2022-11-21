import { motion } from "framer-motion";
import React from "react";
import { opacityVariants } from "../../animations/animate";
import Image from "../../components/Image/Image";
import { hole, role_po, role_po_bg } from "../../shared/ImageSource";
import { BackDropStyle, TodoListPageStyle } from "./TodoListPage.style";

const TodoListPage = () => {
    return (
        <TodoListPageStyle>
            <BackDropStyle
                as={motion.div}
                variants={opacityVariants}
                initial="visible"
                animate="hidden"
                transition={{ duration: 0.5 }}
            ></BackDropStyle>
            <TopWrap>
                <RoleWrap>
                    <Image src={hole} />
                    <Image src={role_po} />
                    <Image src={role_po_bg} />
                </RoleWrap>
            </TopWrap>
        </TodoListPageStyle>
    );
};

export default TodoListPage;
