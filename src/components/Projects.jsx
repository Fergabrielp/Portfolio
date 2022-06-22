import { motion } from "framer-motion";

import project1 from "../assets/img/alkemy-movies.png";
import project2 from "../assets/img/Citas.png";
import project3 from "../assets/img/imagenes.png";
import project4 from "../assets/img/letras2.png";
import project5 from "../assets/img/noticias.png";
import project6 from "../assets/img/noticias.png";

const projects = [project1, project2, project3, project4, project5, project6];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="p-2 mt-2"
    >
      <h1 className="text-2xl font-bold mb-5">
        Some of my <span className="text-pink-500/50">Projects</span>{" "}
      </h1>

      <div className="sm:flex flex-wrap grid grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.img
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5 }}
            src={project}
            alt=""
            className="shadow-md shadow-pink-500/50"
            key={index}
          />
        ))}
      </div>

      <div className="flex justify-center align-middle">
        <a
          href="https://github.com/Fergabrielp?tab=repositories"
          target="_blank"
          className="mt-10 rounded-lg shadow-md shadow-gray-500 bg-pink-500/50 text-l px-4 py-1 font-bold"
        >
          SEE MORE...
        </a>
      </div>
    </motion.div>
  );
};

export default Projects;
