import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import build from '../../assets/About.jpg';

export default function Hero() {
    const { scrollY } = useScroll();

    const imageHeight = useTransform(scrollY, [0, 600], [600, 300]);
    const smoothImageHeight = useSpring(imageHeight, { stiffness: 100, damping: 20 });

    return (
        <div className="relative w-full">
            {/* Hero Section */}
            <section className="relative w-full h-screen overflow-hidden">
                {/* Animated Background Image */}
                <motion.div
                    style={{ height: smoothImageHeight }}
                    className="absolute top-0 left-0 w-full z-0 overflow-hidden"
                >
                    <img
                        src={build}
                        alt="Hero Background"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Text Content */}
                <div className="relative z-10 h-full flex items-center px-8">
                    <div className="text-white max-w-[700px]">
                        <h1 className="text-5xl md:text-8xl font-bold mb-6">
                            Hero section
                        </h1>
                        <p className="text-lg md:text-xl">
                            Sofof is building and backing the next wave of AI-first ventures.
                        </p>
                    </div>
                </div>
            </section>

            {/* Dummy Content to Enable Scroll */}
            <div className="h-[2000px] bg-white">
                {/* Add your real page content here */}
            </div>
        </div>
    );
}
