
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import wave from '../../assets/beautiful-blue-wave-background.png'
export default function Hero() {
    const { scrollY } = useScroll()

    // Animate section movement
    const y = useTransform(scrollY, [0, 1400], [0, 100])

    // Animate bottom image height from 500px to 200px
    const imageHeight = useTransform(scrollY, [0, 600], [500, 200])
    const divHeight = useTransform(scrollY, [0, 600], [900, 700])
    const smoothDivHeight = useSpring(divHeight, { stiffness: 100, damping: 20 })
    const smoothImageHeight = useSpring(imageHeight, { stiffness: 100, damping: 20 })

    return (
        <motion.section
            style={{
                y,
                height: smoothDivHeight,
            }}
            className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#c8b7f0] to-[#e2d9fc]"
        >
            <div className="relative z-10 flex items-center h-full px-4">
                {/* Container with max-width and left-aligned content */}
                <div className="w-full max-w-[1440px] mx-auto -mt-[250px] text-left">
                    <h1 className="text-white text-5xl md:text-8xl font-bold mb-4">
                        Hero section
                    </h1>
                    <p className="text-white text-lg md:text-xl max-w-xl">
                        Sofof is building and backing the next wave of AI-first ventures.
                    </p>
                </div>
            </div>

            {/* Motion image */}
            <motion.img
                className="absolute h-[620px] bottom-0 w-full object-cover"
                src={wave}
                alt=""
            />
        </motion.section>

    )
}
