import { Html, useProgress } from "@react-three/drei";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="w-screen h-screen bg-slate-400 flex items-center justify-center overflow-x-hidden">
      <motion.div
        className="w-[30px] h-[30px] rounded-full bg-blue-400"
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 0.75,
          repeat: Infinity,
          repeatType: "loop",
          delay: 0.25,
        }}
      ></motion.div>

      <motion.div
        className="w-[30px] h-[30px] rounded-full bg-red-500"
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 0.75,
          repeat: Infinity,
          repeatType: "loop",
          delay: 0.5,
        }}
      ></motion.div>

      <motion.div
        className="w-[30px] h-[30px] rounded-full bg-red-200"
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 0.75,
          repeat: Infinity,
          repeatType: "loop",
          delay: 0.75,
        }}
      ></motion.div>
    </div>
  );
};

export default Loader;
