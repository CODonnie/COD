import { motion } from "framer-motion";
import { projects } from "../../data/project";
import MotionText from "../ui/MotionText";

const ProjectCard = () => {
    return (
        <div className="pb-20 px-7">
            <MotionText motionDirection="y">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0.2 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ amount: 0.55, once: true }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="flex justify-between items-center transition-all duration-300 border-b py-6 px-3"
                    >
                        <h1 className="peer text-4xl font-bold uppercase tracking-[-0.02em] cursor-pointer">
                            {project.title}
                        </h1>

                        <p
                            className="italic text-muted text-[13px] opacity-0 transition-opacity duration-300 peer-hover:opacity-100"
                        >
                            {project.info}
                        </p>
                    </motion.div>
                ))}
            </MotionText>
        </div>
    );
};

export default ProjectCard;
