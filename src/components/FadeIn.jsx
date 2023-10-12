// framer motion
import { motion, useAnimation, useInView } from "framer-motion";

// react
import { useEffect, useRef } from "react";

const FadeIn = ({ children, delay, direction, fullWidth, padding }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div
      ref={ref}
      className={`${fullWidth ? "w-full" : "w-auto"} ${
        padding ? "px-10" : "px-0"
      } flex items-center justify-center`}
    ></div>
  );
};

export default FadeIn;
