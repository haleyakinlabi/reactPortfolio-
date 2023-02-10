import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";



const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl ">
            <span className="text-red ">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10"></p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
        </motion.div>
      </div>


        <div flex flex-col overflow-y-scroll>
          
          <div className=" flex flex-row overflow-x-auto gap-8">
            <p className="font-playfair font-semibold text-3xl">MyPet</p>
            <a href="https://github.com/wasatchtimpanogos/myPetRedo" className="hover:text-yellow transition duration-500">GitHub</a>
            <a href="https://www.youtube.com/watch?v=Qhimovwijgw" className="hover:text-yellow transition duration-500">Demo</a>
          </div>
          
          <div className="flex flex-nowrap h-64 overflow-x-auto gap-2">
            <img alt="mypetlogin"src="../assets/myPet1.png"></img>
            <img alt="mypetfeed"src="../assets/myPet2.png"></img>
            <img alt="mypetfilterfeed"src="../assets/myPet3.png"></img>
            <img alt="mypetmakepost"src="../assets/myPet4.png"></img>
          </div>
          <br></br>

          <div className=" flex flex-row overflow-x-auto gap-8">
            <p className="font-playfair font-semibold text-3xl">Character HQ</p>
            <a href="https://github.com/wasatchtimpanogos/foundationsCapstone-" className="hover:text-yellow transition duration-500">GitHub</a>
            <a href="https://www.youtube.com/watch?v=b2iZyQEi3MQ" className="hover:text-yellow transition duration-500">Demo</a>
          </div>
          
          <div className="flex flex-nowrap h-64 overflow-x-auto gap-2">
            <img alt="homepage"src="../assets/CHQ1.png"></img>
            <img alt="seecharsoption"src="../assets/CHQ2.png"></img>
            <img alt="seecharspage"src="../assets/CHQ3.png"></img>
            <img alt="getrandomchar"src="../assets/CHQ4.png"></img>
            <img alt="createchar"src="../assets/CHQ5.png"></img>
          </div>
        </div>

    </section>
  );
};

export default Projects;
