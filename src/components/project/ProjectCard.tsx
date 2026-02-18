import { projects } from "../../data/project";


const ProjectCard = () => {
    return (
        <div className="py-10">
            {
                projects.map((project) => (
                    <h1 className="text-7xl font-bold text-center"
                     key={project.id}>{project.title}</h1>
                ))
            }
        </div>
    )
}

export default ProjectCard