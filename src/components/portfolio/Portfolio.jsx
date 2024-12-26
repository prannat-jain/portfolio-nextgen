import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Ocean GenAI Hackathon",
    img: "genai-ocean.webp",
    date: "4-5th May 2024",
    desc: [
      "Our team used audio sounds of marine animals, created a machine learning model which assisted with the classification of species and tracking of their movements for various benefits to the industry.",
    ],
    award: "Placed 3rd in the competition",
  },
  {
    id: 2,
    title: "AI Object Recognition and Motion Tracking",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    date: "Jan 2024",
    desc: [
      "Developed an AI application which identifies and tracks multiple objects in a video/image.",
      "Uses DeepSort algorithm to individually track numerous objects moving in the frame.",
    ],
  },
  {
    id: 3,
    title: "ChemAR",
    img: "./chemar.png",
    date: "Sep 2023",
    desc: [
      "Developed an augmented reality powered program to support chemistry learning at Dalhousie University.",
      "Practiced Agile/Scrum and designed custom APIs using node.js to perform interactive molecule lookup using QR codes.",
    ],
  },
  {
    id: 4,
    title: "ScrapRadar",
    img: "./ScrapRadar.png",
    date: "May 2023",
    desc: [
      "Created a web service where consumers and businesses can buy valuable scrap, by‑products, and waste materials.",
      "Hosted on AWS EC2 with NGINX proxy and Node.js.",
    ],
  },
  {
    id: 5,
    title: "Android TradeTrove Application",
    img: "./tradetrove.png",
    date: "Jan 2023",
    desc: [
      "Mobile App that allows one to find people in the local area who are interested to exchange their used goods.",
      "Hosted on Firebase, with Google Maps integration.",
      "Built in android studio and exported signed APK for use.",
    ],
  },
  {
    id: 6,
    title: "Social Media App",
    img: "./social-media.png",
    date: "Dec 2022",
    desc: [
      "Worked on a full‑stack, RESTful social media app, with login, registration, and secure authorization.",
      "Implemented bcrypt librarylibrary which enables password encryption for safe storage in MongoDB.",
      "Backend hosted on MongoDB, and Frontend built on React.js, client and server deployed on render.com.",
    ],
  },
  {
    id: 7,
    title: "Motorsports Telemetry Analysis",
    img: "./race_strategy_russia.png",
    date: "May 2023",
    desc: [
      "Provides graphical representation and analysis of F1 car telemetry data in charts and line graphs.",
      "Uses open source APIs as per query in Python using matplotlib and fastf1 libraries.",
    ],
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
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
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
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects and Achievements</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
