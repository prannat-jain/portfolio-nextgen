import { useRef, useState } from "react";
import "./experience.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Modal from "../modal/Modal";
import ProjectDetails from "../projectdetails/ProjectDetails";

const items = [
  {
    id: 21,
    position: "Software Developer",
    img: "/nasdaq-logo.avif",
    company: "Nasdaq",
    duration: "May 2024 - Present",
    desc: [
      "Collaborating with a team of software developers to solve challenging problems and write impactful code for Verafin's cloud-based product.",
      "Utilizing object-oriented programming and clean code principles to ensure high-quality software development.",
      "Developing proficiency in Amazon Web Services (AWS), database technologies (PostgreSQL), and big data technologies",
    ],
    type: "Experience",
  },
  {
    id: 22,
    position: "Research Assistant",
    img: "/dal-logo.png",
    company: "Dalhousie University",
    duration: "Sep 2023 - Present",
    desc: [
      "Developing android and ios mobile applications using flutter, Java and Swift for their flagship application at the Prosit Lab under Dr. Sandra Meier",
      "Creating dashboards using React.js, Node.js, and MongoDB for data presentation and analysis.",
      "Working on creating an encryption apparatus for data using asymmetric and symmetric public and private keys.",
    ],
    type: "Experience",
  },
  {
    id: 23,
    position: "Teaching Assistant and Marker",
    img: "/dal-logo.png",
    company: "Dalhousie University",
    duration: "September 2023 - Present",
    desc: [
      "Assisting in the lab instruction, development of course materials and assignments for CSCI 2110 (Data Structures and Algorithms), CSCI 2170 (Server Side Scripting), CSCI 2134 (Development and Testing).",
      "Graded assignments and provided feedback to students to help them improve their programming skills.",
      "Held office hours and provided one-on-one assistance to students who needed help with course material.",
    ],
    type: "Experience",
  },
  {
    id: 24,
    position: "Research Aide",
    img: "/nshealth-logo.avif",
    company: "NS Health",
    duration: "May 2023 - Apr 2024",
    desc: [
      "Developed secure databases to enable data collection in the neurosurgery department for 5000+ participants over its lifetime.",
      "Performed data analysis with Python, R, and data visualization in Tableau and Power BI to enhance reporting insights.",
      "Created a data analysis dashboard to enhance reporting insights using node.js platform and javascript.",
    ],
    type: "Experience",
  },
  {
    id: 25,
    position: "DevOps Engineer",
    img: "/pzero-logo.png",
    company: "Point Zero Solutions",
    duration: "Nov 2022 - Mar 2023",
    desc: [
      "Created an ML powered object and text recognition program with Java, python jupyter, tensorflow.",
      "Created an automated testing suite for an AI Python application with Jenkins, Docker, AWS Cloud and improved code quality by over 50 Percent.",
      "Wrote unit tests for REST APIs and functions using PyTest, Junit.",
      "Setup for continuous integration and delivery on Docker and Google Cloud Run.",
    ],
    type: "Experience",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const [showModal, setShowModal] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const openProjectDetails = () => {
    // Trigger the modal to open
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.position}</h2>
            <h3>{item.company}</h3>
            <p>{item.duration}</p>
            <ul>
              {item.desc.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {/* <button onClick={openProjectDetails}>See More</button> */}
          </motion.div>
        </div>
      </div>
      <Modal isOpen={showModal} onClose={closeModal}>
        <ProjectDetails item={item} />
      </Modal>
    </section>
  );
};

const Experience = () => {
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
    <div className="experience" ref={ref}>
      <div className="progress">
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Experience;
