const slideInVariants = (direction) => {
    let x = 0;
    let y = 0;
    let transition = {
        type: "spring",
        stiffness: 120
    };

    if (direction === 'left') {
        x = '-100vw';
    } else if (direction === 'right') {
        x = '100vw';
    } else if (direction === 'top') {
        y = '-100vh';
    } else if (direction === 'bottom') {
        y = '100vh';
        // Change transition type for bottom
        transition = {
            duration: 0.5,
            ease: "easeInOut"
        };
    }

    return {
        hidden: { x, y },
        visible: {
            x: 0,
            y: 0,
            transition: transition
        }
    };
};

export { slideInVariants };