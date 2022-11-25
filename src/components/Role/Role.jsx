import React from "react";
import {
    roleBgVariants,
    roleHoleVariants,
    roleVariants,
} from "../../animations/animate";
import { RoleWrap } from "../../pages/TodoList/TodoListPage.style";
import {
    hole,
    role_po,
    role_po_bg,
    role_sm,
    role_sm_bg,
    role_team1,
    role_team1_bg,
    role_team2,
    role_team2_bg,
} from "../../shared/ImageSource";
import Image from "../Image/Image";

const roleList = {
    po: { role: role_po, bg: role_po_bg },
    mm: { role: role_sm, bg: role_sm_bg },
    ee: { role: role_team1, bg: role_team1_bg },
    gg: { role: role_team2, bg: role_team2_bg },
};

const Role = ({ role, delay, complete }) => {
    return (
        <RoleWrap>
            <Image
                src={hole}
                key="hole"
                variants={roleHoleVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5, delay: delay || 0 }}
                complete={complete}
            />
            <div>
                <Image
                    src={roleList[role].bg}
                    top="-1rem"
                    w="120%"
                    left="-10%"
                    key="role"
                    variants={roleBgVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    custom={"-100%"}
                    transition={{ duration: 0.3, delay: delay ? delay + 1 : 1 }}
                />
                <Image
                    src={roleList[role].role}
                    bottom="7rem"
                    style={{ originY: 0 }}
                    variants={roleVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    custom={"-100%"}
                    transition={{
                        duration: 0.3,
                        delay: delay ? delay + 1 : 1,
                        times: [0, 0.5, 1],
                        scaleY: {
                            delay: delay ? delay + 1 : 1,
                        },
                    }}
                />
            </div>
        </RoleWrap>
    );
};

export default Role;
