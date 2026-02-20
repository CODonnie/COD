import { logo } from "../../assets/assets";
import { AppContext } from "../../hooks/context/AppContext";
import { useContext } from "react";
import MotionShift from "../ui/MotionShift";

const Navbar = () => {
  const app = useContext(AppContext);
  const isWelcome = app?.state === "welcome";

  return (
    <div className="pb-3 pt-8 flex items-center px-10 justify-between">
      <MotionShift
        isActive={isWelcome}
        direction="x"
        activeOffset={160}
        inactiveOffset={0}
      >
        <img
          src={logo.LogoAccent}
          alt="Logo white"
          className="w-13 cursor-pointer"
          onClick={() => app?.setState("welcome")}
        />
      </MotionShift>

      <div className={isWelcome ? "hidden" : "block"}>Connect Icon</div>
    </div>
  );
};

export default Navbar;
