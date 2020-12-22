const cardVariants = {
    hidden: {
        y: -40,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: 'easeInOut',
        },
    },
};

export default cardVariants;
