import { TypeAnimation } from "react-type-animation";

const Typing = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Hi, I'm",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "你好，我是",
        1000,
        "salut, je suis ",
        1000,
        "Hola, yo soy ",
        1000,
      ]}
      wrapper="span"
      speed={50}
      // style={{ fontSize: '2em', display: 'inline-block', color: 'black' }}
      repeat={Infinity}
    />
  );
};

export default Typing;
