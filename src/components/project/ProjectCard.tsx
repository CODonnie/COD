import { projects } from "../../data/project";


const ProjectCard = () => {
    return (
        <section className="mt-30">
            {
                projects.map((project) => (
                    <h1 className="text-7xl font-bold text-center"
                     key={project.id}>{project.title}</h1>
                ))
            }
        </section>
    )
}

export default ProjectCard