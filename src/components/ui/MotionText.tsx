import { motion } from "framer-motion"
import type { ReactNode } from "react"

type motionDirection = "x" | "y";


const MotionText = ({ motionDirection="y", children }: { motionDirection: motionDirection; children: ReactNode }) => {
  return (
    <motion.div
    initial={{ [motionDirection]: -50, opacity: 0 }}
    animate={{ [motionDirection]: 0, opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut", type: "spring", stiffness: 260, damping: 24 }}
    >
        {children}
    </motion.div>
  )
}

export default MotionText