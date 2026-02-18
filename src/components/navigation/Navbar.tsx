import LightSwitch from "../ui/LightSwitch"
import { logo } from "../../assets/assets"

const Navbar = () => {
  return (
    <div className="border border-custom flex px-5 py-3
    justify-between items-center fixed top-0 left-0 right-0 bg-white z-10
    ">
      <img src={logo.LogoWhite} alt="Logo white" className="w-15" />
      <LightSwitch />
      <div>About Icon</div>
    </div>
  )
}

export default Navbar