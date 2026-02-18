import ProjectCard from "../components/project/ProjectCard"
import ProjectScreen from "../components/project/ProjectScreen"


const Home = () => {
  return (
    <div className="h-full grid grid-rows-[auto_1fr] md:grid-cols-[1fr_1fr]">
      <section className="border h-50 bg-white">
        <ProjectScreen />
      </section>
      <section className="overflow-y-auto no-scrollbar">
       <ProjectCard />
      </section>

    </div>
  )
}

export default Home