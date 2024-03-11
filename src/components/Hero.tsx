import { motion } from "framer-motion";
import { styles } from "../css/styles";
import Typing from "../utils/typeAnime";
import { AvatarCanvas } from "./canvas/avatar";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <motion.div>
          <h1 className={`${styles.heroHeadText}`}>
            <Typing />
            <span className="text-blue-600 font-bold">Abasco</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            I am a creative web developer <br /> I design modern and dynamic
            websites
          </p>
        </motion.div>
      </div>
      <AvatarCanvas />
      <div className="absolute bottom-10 w-full hidden sm:flex justify-center items-center">
        <a href="#about">
          <div className="w-[60px] h-[60px] rounded-full bg-primaryTxt flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1 h-6 bg-primaryBg mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
