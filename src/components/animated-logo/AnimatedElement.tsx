
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedElementProps {
  isVisible: boolean;
  imageSrc: string;
  alt: string;
  zIndex: number;
  withGlowEffect?: boolean;
}

const AnimatedElement = ({ 
  isVisible, 
  imageSrc, 
  alt, 
  zIndex, 
  withGlowEffect = false 
}: AnimatedElementProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.img 
          src={imageSrc}
          alt={alt}
          className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-[300px]`}
          style={{ zIndex }}
          initial={{ opacity: 0 }}
          animate={withGlowEffect ? { 
            opacity: 1,
            filter: [
              "drop-shadow(0 0 0px #33C3F0)",
              "drop-shadow(0 0 15px #33C3F0)",
              "drop-shadow(0 0 5px #33C3F0)"
            ]
          } : { opacity: 1 }}
          transition={withGlowEffect ? { 
            opacity: { duration: 0.7, ease: "easeInOut" },
            filter: { duration: 1.5, times: [0, 0.5, 1] }
          } : { duration: 0.7, ease: "easeInOut" }}
        />
      )}
    </AnimatePresence>
  );
};

export default AnimatedElement;
