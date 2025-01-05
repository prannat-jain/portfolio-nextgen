import { useRef } from "react";
import "./projectdetails.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    title: "Course Enrolment Predictor",
    img: "course-predictor.png",
    date: "Dec 2024",
    desc: [
      "Developed an ML-driven course recommendation system, feature engineering, model training, and front-end deployment.",
      "Implemented multiple predictive models (Linear Regression, Logistic Regression, KNN) to estimate final grades, pass probabilities, and nearest neighbor comparisons.",
      "Developed a Streamlit-based user interface enabling real-time predictions and a polished user experience, featuring dynamic forms, interactive sliders, and results dashboards.",
    ],
    award: "",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.date}</p>
            <p>{item.desc}</p>
            <p>{item.award}</p>
            <button>See More</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProjectDetails = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projectdetails" ref={ref}>
      <div className="progress">
        <h1>Project</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProjectDetails;
