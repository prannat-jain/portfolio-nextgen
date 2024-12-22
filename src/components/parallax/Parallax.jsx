import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  let background, heading, planetsImage;

  if (type === "bio") {
    background = "linear-gradient(180deg, #0c1d0d, #142f15)";
    heading = "About Me?";
    planetsImage = "/planets.png";
  } else if (type === "portfolio") {
    background = "linear-gradient(180deg, #0c1d0d,rgb(34, 78, 35))";
    heading = "My Work?";
    planetsImage = "/sun.png";
  } else if (type === "experience") {
    background = "linear-gradient(180deg, #0c1d0d, #142f15)";
    heading = "Experience?";
    planetsImage = "/planets.png";
  }

  return (
    <div className="parallax" ref={ref} style={{ background }}>
      <motion.h1 style={{ y: yText }}>{heading}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${planetsImage})`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
