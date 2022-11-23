// Opacity
export const opacityVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2,
        },
    },
};

//Move

export const xMoveVariants = {
    initial: {
        x: 0,
    },
    move: (x) => ({
        x: x,
    }),
};

export const yMoveVariants = {
    initial: {
        y: 0,
    },
    move: (y) => ({
        y: y,
    }),
};

// Opacity and Move

export const upOpacityVariants = {
    hidden: (y) => ({
        opacity: 0,
        y: y,
    }),
    visible: {
        opacity: 1,
        y: 0,
    },
};

//Scale

export const scaleVariants = {
    hidden: {
        scale: 0,
    },
    visible: {
        scale: 1,
    },
};

//Role

export const roleVariants = {
    hidden: (y) => ({
        scaleY: 1,
        y: y,
    }),
    visible: {
        scaleY: [1, 1.2, 1],
        y: 0,
    },
};

//Example hand、arrow、item

export const exampleItemVariants = {
    hidden: {
        scale: 0.5,
        x: "20rem",
        y: "15rem",
        opacity: 0,
    },
    visible: {
        scale: 1,
        x: 0,
        y: 0,
        opacity: 1,
    },
};

export const exampleHandVariants = {
    hidden: {
        scale: 0.5,
        x: "15rem",
        y: "15rem",
        opacity: 0,
    },
    visible: {
        scale: 1,
        x: 0,
        y: 0,
        opacity: 1,
    },
};

export const exampleArrowVariants = {
    hidden: {
        scale: 0.5,
        x: "10rem",
        y: "10rem",
        opacity: 0,
    },
    visible: {
        scale: 1,
        x: 0,
        y: 0,
        opacity: 1,
    },
};

export const exampleOpacityVariants = {
    hidden: {
        opacity: 0.3,
    },
    visible: {
        opacity: 1,
    },
};
