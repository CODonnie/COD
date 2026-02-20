import { motion } from "framer-motion";
import type { ReactNode } from "react";

type MotionDirection = "x" | "y";

type MotionShiftProps = {
  isActive: boolean;
  direction?: MotionDirection;
  activeOffset?: number;
  inactiveOffset?: number;
  duration?: number;
  className?: string;
  children: ReactNode;
};

const MotionShift = ({
  isActive,
  direction = "x",
  activeOffset = 0,
  inactiveOffset = -160,
  duration = 0.35,
  className,
  children,
}: MotionShiftProps) => {
  const axis = direction === "x" ? "x" : "y";

  return (
    <motion.div
      className={className}
      initial={false}
      animate={{
        [axis]: isActive ? activeOffset : inactiveOffset,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 24,
        duration,
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionShift;
