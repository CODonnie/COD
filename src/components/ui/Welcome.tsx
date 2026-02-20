import Button from "./Button"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../../hooks/context/AppContext"
import MotionText from "./MotionText"
import GradientBackground from "./GradientBackground"

const Welcome = () => {

    const navigate = useNavigate();
    const app = useContext(AppContext);

    const changeState = (newState: string) => {
        if (app) {
            app.setState(newState);
        }
    }


    return (
        <div className="h-full mt-25 gap-15 px-10">
            <GradientBackground />
            <MotionText motionDirection="y">
                <div>
                    <h1 className="heading-fluid"
                    >Hi! I'm</h1>
                    <h1 className="text-6xl font-bold tracking-[-0.12em]"
                    >DONNIE</h1>
                    <p>a developer with a designer’s eye.
                    </p>
                    <p className="mt-4"
                    >I build performant web applications and craft interfaces that feel as good as they function.
                    </p>
                </div>
            </MotionText>
            <div className="pl-4 flex gap-10 mt-4"
            >
                <Button text="View Projects" onClick={() => changeState("projects")} />
                <Button text="About Me" onClick={() => navigate('/about')} />
            </div>
        </div>
    )
}

export default Welcome