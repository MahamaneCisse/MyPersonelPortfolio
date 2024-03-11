import React from "react";
import { SectionWrapper } from "../utils";
import { styles } from "../css/styles";
import { services } from "../constants/constant";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <div className="relative w-full flex items-center justify-center sm:items-start sm:w-[250px]">
    <div className="w-[300px] sm:w-[250px] flex items-center">
      <motion.div
        variants={fadeIn("left", "spring", index * 0.5, 0.75)}
        className="w-full p-[1px] rounded-xl shadow-xl"
      >
        <div className="bg-transparent rounded-xl py-5 px-12 min-h-[240px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-24 h-24 object-contain" />
          <h3 className="text-primaryTxt text-[20px] font-bold text-center services">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
    </div>
  );
};

const About = () => {
  return (
    <section>
      <div className="w-screen px-4">
        <div className="flex flex-col items-start">
          <p className={styles.sectionSubText}>About me</p>
          <h2 className={styles.sectionHeadText}>Who i'am ?</h2>
        </div>
        <p className="mt-4 text-primaryTxt text-[17px] max-w-xl leading-[30px]">
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
        </p>
        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
