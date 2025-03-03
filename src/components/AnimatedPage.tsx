import { motion } from "framer-motion";
import { ReactNode } from "react";

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
};

const pageTransition = { duration: 0.5, ease: "easeInOut" };

const AnimatedPage = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedPage;
