import { useRef } from "react";
import "./projectdetails.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const itemMoreDetails = [
  {
    id: 1,
    title: "Project Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac magna vel nunc ultrices ultricies. Nullam et semper turpis.",
    type: "Project",
  },
  {
    id: 2,
    title: "Project Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac magna vel nunc ultrices ultricies. Nullam et semper turpis.",
    type: "Project",
  },
  {
    id: 3,
    title: "Project Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac magna vel nunc ultrices ultricies. Nullam et semper turpis.",
    type: "Project",
  },
  {
    id: 4,
    title: "Project Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac magna vel nunc ultrices ultricies. Nullam et semper turpis.",
    type: "Project",
  },
  {
    id: 5,
    title: "Project Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac magna vel nunc ultrices ultricies. Nullam et semper turpis.",
    type: "Project",
  },
  {
    id: 6,
    title: "Project Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac magna vel nunc ultrices ultricies. Nullam et semper turpis.",
    type: "Project",
  },
  {
    id: 7,
    title: "Project Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac magna vel nunc ultrices ultricies. Nullam et semper turpis.",
    type: "Project",
  },
  {
    id: 8,
    title: "Project Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac magna vel nunc ultrices ultricies. Nullam et semper turpis.",
    type: "Project",
  },
  {
    id: 9,
    title: "Project Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac magna vel nunc ultrices ultricies. Nullam et semper turpis.",
    type: "Project",
  },
  {
    id: 21,
    title: "Software Developer at Nasdaq, Inc.",
    desc: "www.verafin.com",
    type: "Experience",
    img: "./nasd-tor-pic.jpg",
  },
  {
    id: 22,
    title: "Research Assistant at Prosit Lab under Dr. Sandra Meier",
    desc: "http://prosit.meierlab.info/home-107.html",
    type: "Experience",
    img: "./prosit.jpeg",
  },
  {
    id: 23,
    title: "Job description",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac magna vel nunc ultrices ultricies. Nullam et semper turpis.",
    type: "Experience",
  },
  {
    id: 24,
    title: "Job description",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac magna vel nunc ultrices ultricies. Nullam et semper turpis.",
    type: "Experience",
  },
  {
    id: 25,
    title: "Job description",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac magna vel nunc ultrices ultricies. Nullam et semper turpis.",
    type: "Experience",
  },
];

const ProjectDetails = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const matcheditem = itemMoreDetails.find(
    (details) => details.id === item.id && details.type === item.type
  );

  return (
    <div className="projectdetails" ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={matcheditem.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h3>{matcheditem.title}</h3>
            <p>{item.date}</p>
            <p>{matcheditem?.desc}</p>
            <p>{item.award}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
