import { Link, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGamepad } from "react-icons/fa";
import About from "./About";
import Resume from "./Resume";
import Skills from "./Skills";
import Projects from "./Projects";
import Game from "./game/Game";

const Body = () => {
  return (
    <>
      <div className="text-right border-b-2 border-pink-500/50 p-1">
        <Link to={"/"} className="hover:text-pink-500/50 font-bold mr-3">
          ABOUT{" "}
        </Link>
        <Link to={"/resume"} className="hover:text-pink-500/50 font-bold mx-3">
          RESUME{" "}
        </Link>
        <Link to={"/skills"} className="hover:text-pink-500/50 font-bold mx-3">
          SKILLS{" "}
        </Link>
        <Link
          to={"/projects"}
          className="hover:text-pink-500/50 font-bold mx-3"
        >
          PROJECTS{" "}
        </Link>
        {/* <Link to={"/game"} className="hover:text-pink-500/50 mx-3">
          <FaGamepad className="inline-block text-3xl" />
        </Link> */}
      </div>
      <div className="p-2">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </>
  );
};

export default Body;
