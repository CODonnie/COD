import { motion } from "framer-motion";
import { useState } from "react";

const Button = ({ text, onClick }: { text: string; onClick?: () => void }) => {
  const [isTextHovered, setIsTextHovered] = useState(false);

  return (
    <div className="flex gap-4 items-center cursor-pointer" onClick={onClick}>
      <motion.div
        animate={{ rotate: isTextHovered ? 90 : 315 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 24,
        }}
        className="w-0.5 h-6 bg-background"
      />

      <motion.span
        onHoverStart={() => setIsTextHovered(true)}
        onHoverEnd={() => setIsTextHovered(false)}
      >
        {text}
      </motion.span>
    </div>
  );
};

export default Button;
