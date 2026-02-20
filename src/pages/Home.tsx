import ProjectCard from "../components/project/ProjectCard"
import Welcome from "../components/ui/Welcome"
import { useContext } from "react"
import { AppContext } from "../hooks/context/AppContext"


const Home = () => {

  const app = useContext(AppContext);
  const isWelcome = app?.state === "welcome";

  if (isWelcome) {
    return (
      <div className="h-full">
        <Welcome />
      </div>
    )
  }

  return (
    <div className="h-full grid grid-rows-[auto_1fr] md:grid-cols-[1fr_1fr]">
      <section className="overflow-y-auto no-scrollbar">
        <div className="sticky top-0 mt-20">
          <h1 className="px-10 pt-5 text-6xl font-bold uppercase tracking-[-0.02em] bg-foreground"
          >PROJECTS</h1>
          <div className="w-full h-10 gradientShade"></div>
        </div>


        <ProjectCard />
      </section>

    </div>
  )
}

export default Home