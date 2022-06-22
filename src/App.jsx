import { motion } from "framer-motion";

import PersonalInfo from "./components/PersonalInfo";
import Body from "./components/Body";

function App() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sm:flex-wrap md:container flex flex-row mx-auto my-6"
      >
        <motion.div
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
          className="sm:mb-5 md:basis-1/4 text-white mx-1 bg-slate-900 rounded-lg p-2 shadow-md shadow-pink-500/50"
        >
          <PersonalInfo />
        </motion.div>
        <motion.div
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
          className="md:basis-3/4 text-white mx-1 bg-slate-900 rounded-lg p-2 shadow-md shadow-pink-500/50"
        >
          <Body />
        </motion.div>
      </motion.div>
    </>
  );
}

export default App;
