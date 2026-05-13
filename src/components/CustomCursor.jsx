import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      const target = e.target;
      const clickable =
        target instanceof Element
          ? target.closest("a, button, input, textarea")
          : null;

      setIsPointer(Boolean(clickable));
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <motion.div
        className="custom-cursor hidden md:block"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      <motion.div
        className="custom-cursor-ring hidden md:block"
        animate={{
          x: position.x - 24,
          y: position.y - 24,
          scale: isPointer ? 1.25 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 20,
        }}
      />
    </>
  );
}