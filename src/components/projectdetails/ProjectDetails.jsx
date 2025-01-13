import { useRef } from "react";
import "./projectdetails.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const itemMoreDetails = [
  {
    id: 1,
    title: "Project Title",
    date: "2021",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac magna vel nunc ultrices ultricies. Nullam et semper turpis.",
    award: "Best Project 2021",
  },
];

const ProjectDetails = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const matcheditem = itemMoreDetails.find((details) => details.id === item.id);

  return (
    <div className="projectdetails" ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.date}</p>
            <p>{matcheditem?.desc}</p>
            <p>{matcheditem?.award}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
