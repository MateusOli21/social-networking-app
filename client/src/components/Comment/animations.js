const commentVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.75, ease: 'easeOut' },
    },
    exit: { opacity: 0, y: -10 },
};

export default commentVariants;
