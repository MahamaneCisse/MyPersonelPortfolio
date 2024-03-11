import { Link } from "react-router-dom";
import { styles } from "../css/styles";
import { navLinks } from "../constants/constant";
import { logo } from "../constants/constant";
import { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const setToogle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav className={`${styles.paddingX} w-full flex items-center fixed z-50`}>
        <div
          className={`w-full flex flex-row ${
            scrolled ? "flex-row-reverse" : ""
          } justify-between items-center max-w-7xl mx-auto`}
        >
          {/* logo */}

          <Link
            to={"/"}
            className={`flex items-center gap-2 ${scrolled ? "hidden" : ""}`}
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logo}
              alt="logo Abasco"
              className="w-[120px] h-[70px] sm:w-[200px] sm:h-[130px] object-cover"
              title="logo Abasco"
            />
          </Link>
          {/* end logo */}

          {/* Nav Item */}

          <ul
            className={`list-none hidden sm:flex flex-row gap-10 text-lg text-linkColor p-5 rounded-2xl transition ease-out duration-500 ${
              scrolled ? "sm:hidden" : ""
            }`}
          >
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`cursor-pointer text-[20px] w-full ${
                  active === nav.title ? "text-primaryTxt font-bold" : ""
                }`}
                onClick={() => setActive(nav.title)}
              >
                <motion.a
                  href={`#${nav.id}`}
                  className="border-b-2 font-medium hover:scale-50 hover:text-black hover:border-black border-linkColor py-1 transition-all duration-200 ease-out"
                >
                  {nav.title}
                </motion.a>
              </li>
            ))}
          </ul>
          {/* end Nav Item */}

          {/* HamburgerMenu */}

          <div className={`sm:hidden ${scrolled ? "hidden" : ""}`}>
            {/* hamburgerButton */}
            <button
              className="w-[50px] h-[50px] flex justify-center items-center flex-col gap-1 relative z-[200]"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <span
                className={`absolute w-[30px] h-[3px] bg-[#59a2f0] translate-y-[8px] transition ease-out duration-200 ${
                  toggle ? "l1" : ""
                }`}
              ></span>
              <span
                className={`absolute w-[30px] h-[3px] bg-[#f05989] transition ease-out duration-500 ${
                  toggle ? "l2" : ""
                }`}
              ></span>
              <span
                className={`absolute w-[30px] h-[3px] bg-[#ff907f] translate-y-[-8px] transition ease-out duration-200 ${
                  toggle ? "l3" : ""
                }`}
              ></span>
            </button>
            {/* hamburgerButton  end*/}

            {toggle && (
              <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "spring", duration: 0.3, stiffness: 120 }}
                className={`flex p-6 bg-[#111010f4] backdrop-blur-sm absolute top-0 right-0 h-screen w-[40%] z-10`}
              >
                <ul className="list-none flex justify-center items-start flex-col gap-4 text-primaryBg transition ease-out duration-500">
                  {navLinks.map((nav) => (
                    <li
                      key={nav.id}
                      className={`font-poppins font-light cursor-pointer text-[20px] w-full ${
                        active === nav.title ? "text-white" : "text-secondary"
                      }`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(nav.title);
                      }}
                    >
                      <a
                        href={`#${nav.id}`}
                        className="w-[40px] border-b-2 hover:border-b-red-400 hover:text-cyan-400 py-1 transition-all duration-200 ease-out"
                      >
                        {nav.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
          {/* end HamburgerMenu */}

          {/* Fly Button Nav */}

          {scrolled && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "tween", duration: 0.5 }}
              className={`w-[60px] bg-primaryTxt h-[60px] flex justify-center items-center top-3 right-3 rounded-full z-50 mt-2`}
            >
              <button
                className="w-[50px] h-[50px] flex justify-center items-center flex-col gap-1 relative z-[200]"
                onClick={setToogle}
              >
                <span
                  className={`absolute w-[30px] h-[3px] bg-[#59a2f0] translate-y-[8px] transition ease-out duration-200 ${
                    toggle ? "l1" : ""
                  }`}
                ></span>
                <span
                  className={`absolute w-[30px] h-[3px] bg-[#f05989] transition ease-out duration-200 ${
                    toggle ? "l2" : ""
                  }`}
                ></span>
                <span
                  className={`absolute w-[30px] h-[3px] bg-[#ff907f] translate-y-[-8px] transition ease-out duration-200 ${
                    toggle ? "l3" : ""
                  }`}
                ></span>
              </button>

              {toggle && (
                <motion.div
                  initial={{ y: "-100%" }}
                  animate={{ y: 0 }}
                  transition={{ type: "spring", duration: 0.3, stiffness: 120 }}
                  className={`flex p-6 bg-primaryTxt backdrop-blur-sm absolute top-0 right-0 h-screen w-[40vw] z-10`}
                >
                  <ul className="list-none flex justify-center items-start flex-col gap-4 text-primaryBg transition ease-out duration-500 ">
                    {navLinks.map((nav) => (
                      <li
                        key={nav.id}
                        className={`font-poppins font-light cursor-pointer text-[20px] w-full ${
                          active === nav.title ? "text-white" : "text-secondary"
                        }`}
                        onClick={() => {
                          setToggle(!toggle);
                          setActive(nav.title);
                        }}
                      >
                        <a
                          href={`#${nav.id}`}
                          className="w-[40px] border-b-2 hover:border-b-red-400 hover:text-cyan-400 py-1 transition-all duration-200 ease-out"
                        >
                          {nav.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          )}
          {/* end Fly Button Nav */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
