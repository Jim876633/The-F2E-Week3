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
