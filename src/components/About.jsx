import { motion } from "framer-motion";
import { HiBookOpen } from "react-icons/hi";
import { MdOutlineWork } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="p-2 mt-2"
    >
      <h1 className="text-2xl font-bold mb-4">
        About <span className="text-pink-500/50">Me</span>
      </h1>
      <p className="font-medium">
        Hey! I'm Fernando Pérez and I'm a passionate Software Developer having
        an experience of building Web and Mobile applications principally with
        React JS and React Native. My current goal is to get my first job as a
        Front-end developer and demonstrate all my soft and technical skills,
        without leaving learning at any time in my life.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-center mt-8 text-pink-500/50">
        What am I doing now?
      </h2>

      <div className="sm:grid-cols-1 container grid grid-rows-2 grid-cols-2 gap-4 mt-8">
        <div className="rounded grid grid-cols-8 p-2 bg-black shadow-md shadow-pink-500/50">
          <div className="flex justify-start items-center">
            <HiBookOpen className="text-pink-500/50 text-4xl" />
          </div>
          <div className="flex justify-start items-center col-span-7 text-justify font-semibold p-2">
            NUCBA - Fullstack Developer <br />• Front End: HTML, CSS,
            Javascript, React <br />• Back End: Node, Express, Mongo DB
          </div>
        </div>
        <div className="rounded grid grid-cols-8 p-2 bg-black shadow-md shadow-pink-500/50">
          <div className="flex justify-start items-center">
            <MdOutlineWork className="text-pink-500/50 text-4xl" />
          </div>
          <div className="col-span-7 font-semibold">
            Change Analyst at DXC Technology:
            <ul>
              <li>
                • Analysis of technological infrastructure changes of United
                States clients.
              </li>
              <li>
                • Migration of information between different digital platforms
                (Swivel Process).
              </li>
            </ul>
          </div>
        </div>
        <div className="rounded grid grid-cols-8 p-2 bg-black shadow-md shadow-pink-500/50">
          <div className="flex justify-start items-center">
            <FaPencilAlt className="text-pink-500/50 text-4xl" />
          </div>
          <div className="flex justify-start items-center col-span-7 text-justify font-semibold">
            English level: B2 - Upper Intermediate
          </div>
        </div>
        <div className="rounded grid grid-cols-8 p-2 bg-black shadow-md shadow-pink-500/50">
          <div className="flex justify-start items-center">
            <MdDeveloperMode className="text-pink-500/50 text-4xl" />
          </div>
          <div className="flex justify-start items-center col-span-7 text-justify font-semibold">
            <ul>
              <li>
                • Developing a FullStack App with React js, Node js, MongoDB,
                Express and Postman
              </li>
              <li>• Working on this Portfolio</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
