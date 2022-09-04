import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="p-2 mt-2"
    >
      <h1 className="text-2xl font-bold mb-4">
        My <span className="text-pink-500/50">Resume</span>
      </h1>
      <div className="sm:flex-wrap sm:gap-3 sm:justify-center container flex flex-row">
        <div className="sm:flex-auto basis-2/4 text-white mx-2 bg-black rounded-lg p-2 shadow-md shadow-pink-500/50">
          <h3 className="font-bold text-lg mb-5 mt-2 text-center">
            Work Experience
          </h3>
          <ul className="list-disc list-inside mb-2">
            <li className="mb-2">
              <span className="font-bold text-pink-500">
                Change Analyst - DXC Technology
              </span>
              <br />
              <h3>(Jul 2022 - Present)</h3>
              <ul>
                <li>
                  - Analysis of technological infrastructure changes of United
                  States clients.
                </li>
                <li>
                  - Migration of information between different digital platforms
                  (Swivel Process).
                </li>
              </ul>
            </li>
            <li>
              <span className="font-bold text-pink-500">
                Coordinator - Instituto San Agustín S.R.L
              </span>
              <br />
              <h3>(Feb 2017 - Jul 2022)</h3>
              <ul>
                <li>
                  - ISO 9001 Certification for the first time in a public
                  hospital
                </li>
                <li>- Implementation of home medication delivery system</li>
                <li>- Group coordinator of 5 people</li>
                <li>- Reports to Management</li>
                <li>- Positions: Operator, Administrator and Coordinator</li>
              </ul>
            </li>
            <li>
              <span className="font-bold text-pink-500">
                Accounting Analyst - Estevez y asociados
              </span>{" "}
              <br />
              <h3>(Sep 2019 - Oct 2021)</h3>
              <ul>
                <li>- Accounting Balances.</li>
                <li>- Settlement of Salaries and Taxes.</li>
                <li>- Billing through "Xubio" accounting system.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="sm:flex-auto basis-2/4 text-white bg-black rounded-lg p-2 shadow-md shadow-pink-500/50">
          <h3 className="font-bold mb-5 mt-2 text-lg text-center">Education</h3>
          <ul className="list-disc list-inside">
            <li>
              <span className="font-bold text-pink-500">
                Fullstack Developer - NUCBA
              </span>
            </li>
            <li>
              <span className="font-bold text-pink-500">
                Skill up React JS - Alkemy academy
              </span>
            </li>
            <li>
              <span className="font-bold text-pink-500">
                Fullstack MERN - Udemy
              </span>
            </li>
            <li>
              <span className="font-bold text-pink-500">
                UX/UI Prototipe - Udemy
              </span>
            </li>
            <li>
              <span className="font-bold text-pink-500">
                Mobile developer React Native - IBM & Codo a Codo
              </span>
            </li>
            <li>
              <span className="font-bold text-pink-500">
                Full Stack Python - Codo a Codo
              </span>
            </li>
            <li>
              <span className="font-bold text-pink-500">
                Data Analytics - Coderhouse
              </span>
            </li>
            <li>
              <span className="font-bold text-pink-500">
                Public Accountant - UES21
              </span>
            </li>
            <li>
              <span className="font-bold text-pink-500">
                Software Development Techinician - Instituto Simon Bolivar
              </span>
            </li>
            <li>
              <span className="font-bold text-pink-500">
                English B2 Upper intermediate - Facultad de Lenguas
              </span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
