import { animate, motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="p-2 mt-2"
    >
      <h1 className="text-2xl font-bold mb-4">
        Some of my <span className="text-pink-500/50">Skills</span>
      </h1>

      <div className="grid grid-cols-6 mb-3">
        <div className="sm:col-span-5 sm:mb-2 col-span-1 mr-2 bg-black text-center p-3 font-bold text-pink-400 rounded-md">
          Languages, Frameworks and Libraries
        </div>
        <div className="sm:grid-cols-2 col-span-5 grid grid-cols-4 gap-6 bg-black rounded-md p-4 shadow-md shadow-pink-500/50">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-md bg-pink-500/50 text-center font-bold shadow-sm shadow-white"
          >
            HTML
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-md bg-pink-500/50 text-center font-bold shadow-sm shadow-white "
          >
            JavaScript
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-md bg-pink-500/50 text-center font-bold shadow-sm shadow-white "
          >
            React JS
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-md bg-pink-500/50 text-center font-bold shadow-sm shadow-white "
          >
            React Native
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-md bg-pink-500/50 text-center font-bold shadow-sm shadow-white "
          >
            Node JS
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-md bg-pink-500/50 text-center font-bold shadow-sm shadow-white "
          >
            Express
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-md bg-pink-500/50 text-center font-bold shadow-sm shadow-white "
          >
            Next JS
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-md bg-pink-500/50 text-center font-bold shadow-sm shadow-white "
          >
            Python
          </motion.div>
        </div>
      </div>
      <div className="grid grid-cols-6 mb-3">
        <div className="sm:col-span-5 sm:mb-2 col-span-1 mr-2 bg-black text-center p-3 font-bold text-pink-400 rounded-md">
          Styles and Animations
        </div>
        <div className="sm:grid-cols-2 col-span-5 grid grid-cols-4 gap-6 bg-black rounded-md p-4 shadow-md shadow-pink-500/50">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-md bg-pink-500/50 text-center font-bold shadow-sm shadow-white "
          >
            CSS
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-md bg-pink-500/50 text-center font-bold shadow-sm shadow-white "
          >
            Bootstrap
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-md bg-pink-500/50 text-center font-bold shadow-sm shadow-white "
          >
            Tailwind
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-md bg-pink-500/50 text-center font-bold shadow-sm shadow-white "
          >
            Materialize
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-md bg-pink-500/50 text-center font-bold shadow-sm shadow-white "
          >
            Responsive Design
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-md bg-pink-500/50 text-center font-bold shadow-sm shadow-white "
          >
            Styled Components
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-md bg-pink-500/50 text-center font-bold shadow-sm shadow-white "
          >
            Framer Motion
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-md bg-pink-500/50 text-center font-bold shadow-sm shadow-white "
          >
            Sweet Alert
          </motion.div>
        </div>
      </div>
      <div className="grid grid-cols-6 mb-3">
        <div className="sm:col-span-5 sm:mb-2 col-span-1 mr-2 bg-black text-center p-3 font-bold text-pink-400 rounded-md">
          Data Bases
        </div>
        <div className="sm:grid-cols-2 col-span-5 grid grid-cols-4 gap-6 bg-black rounded-md p-4 shadow-md shadow-pink-500/50">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-md bg-pink-500/50 text-center font-bold shadow-sm shadow-white "
          >
            MySQL
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-md bg-pink-500/50 text-center font-bold shadow-sm shadow-white "
          >
            SQL Server
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-md bg-pink-500/50 text-center font-bold shadow-sm shadow-white "
          >
            MongoDB
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-md bg-pink-500/50 text-center font-bold shadow-sm shadow-white "
          >
            Excel Advanced
          </motion.div>
        </div>
      </div>
      <div className="grid grid-cols-6 mb-3">
        <div className="sm:col-span-5 sm:mb-2 col-span-1 mr-2 bg-black text-center p-3 font-bold text-pink-400 rounded-md">
          Version control
        </div>
        <div className="sm:grid-cols-2 col-span-5 grid grid-cols-4 gap-6 bg-black rounded-md p-4 shadow-md shadow-pink-500/50">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-md bg-pink-500/50 text-center font-bold shadow-sm shadow-white "
          >
            Git
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-md bg-pink-500/50 text-center font-bold shadow-sm shadow-white "
          >
            Github
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-md bg-pink-500/50 text-center font-bold shadow-sm shadow-white "
          >
            Vercel
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-md bg-pink-500/50 text-center font-bold shadow-sm shadow-white "
          >
            Netlify
          </motion.div>
        </div>
      </div>
      <div className="grid grid-cols-6">
        <div className="sm:col-span-5 sm:mb-2 col-span-1 mr-2 bg-black text-center p-3 font-bold text-pink-400 rounded-md">
          Soft Skills
        </div>
        <div className="sm:grid-cols-2 col-span-5 grid grid-cols-4 gap-6 bg-black rounded-md p-4 shadow-md shadow-pink-500/50">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-md bg-pink-500/50 text-center font-bold shadow-sm shadow-white "
          >
            English
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-md bg-pink-500/50 text-center font-bold shadow-sm shadow-white "
          >
            SCRUM
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-md bg-pink-500/50 text-center font-bold shadow-sm shadow-white "
          >
            Resolutive
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-md bg-pink-500/50 text-center font-bold shadow-sm shadow-white "
          >
            Teamworking
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
