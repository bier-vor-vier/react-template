import {useEffect, useState} from "react";
import {motion} from "framer-motion";

const SplashScreen = ({onFinish}: { onFinish: () => void }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setVisible(false);
            setTimeout(onFinish, 100);
        }, 800);
    }, [onFinish]);

    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-gray-200 text-black z-50"
            initial={{opacity: 1}}
            animate={{opacity: visible ? 1 : 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.6}}
        >
            <motion.div
                className="flex flex-col items-center gap-6"
                initial={{opacity: 0, scale: 0.9}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.8, ease: "easeOut"}}
            >
                {/* 🚀 Statische Rakete */}
                <motion.div className="text-6xl">🚀</motion.div>

                {/* 🔥 Brand Name */}
                <motion.p
                    className="text-xl font-bold tracking-widest"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.5, duration: 0.5}}
                >
                    RocketApp 🚀
                </motion.p>

                {/* 🔥 Loading Animation */}
                <motion.div
                    className="h-1 w-36 bg-black rounded-full"
                    initial={{scaleX: 0}}
                    animate={{scaleX: 1}}
                    transition={{duration: 1, ease: "easeOut"}}
                />
            </motion.div>
        </motion.div>
    );
};

export default SplashScreen;
