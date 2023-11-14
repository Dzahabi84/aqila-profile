import { NavLink } from "react-router-dom";
import about from "../assets/about.svg";
import project from "../assets/project.svg";
import home from "../assets/home.svg";
import skill from "../assets/skill.svg";
import { Switch } from "@material-tailwind/react";
import { useTheme } from "../context/Theme";

function Navbar() {
  const {theme, SetDarkTheme, SetLightTheme} = useTheme()
  function handleThemeSwitch () {;
    if (theme == "light") {
      SetDarkTheme()
    } else {
      SetLightTheme()
    }
  }
  return (
    <div className="z-50 w-[100%] bottom-9 fixed">
      <div className="w-[80%] lg:w-[900px] m-auto">
        <nav className="rounded-full bg-[#e1e1e1] flex justify-between px-1">
          <ul className="justify-around flex flex-row list-none">
            <li className="py-1">
              <NavLink
                to="/"
                className="flex items-center py-2 px-2 pr-2 rounded-full duration-100 active:bg-[rgba(0,0,0,0.16)] hover:bg-[rgba(0,0,0,0.16)]"
              >
                <span>
                  <img className="w-9" src={home} alt="Home" />
                </span>
                <p className="hidden md:block mx-3">Home</p>
              </NavLink>
            </li>
            <li className="p-1">
              <NavLink
                to="project"
                className="flex items-center p-2 rounded-full  duration-100 active:bg-[rgba(0,0,0,0.16)] hover:bg-[rgba(0,0,0,0.16)]"
              >
                <span>
                  <img className="w-9" src={project} alt="Project" />
                </span>
                <p className="hidden md:block mx-3">Project</p>
              </NavLink>
            </li>
            <li className="p-1">
              <NavLink
                to="skill"
                className="flex items-center active:bg-[rgba(0,0,0,0.16)] p-2 rounded-full duration-100 hover:bg-[rgba(0,0,0,0.16)]"
              >
                <span>
                  <img className="w-9" src={skill} alt="Skill" />
                </span>
                <p className="hidden md:block mx-3">Skill</p>
              </NavLink>
            </li>
            <li className="p-1">
              <NavLink
                to="about"
                className="flex items-center active:bg-[rgba(0,0,0,0.16)] p-2 rounded-full duration-100 hover:bg-[rgba(0,0,0,0.16)]"
              >
                <span>
                  <img className="w-9" src={about} alt="About" />
                </span>
                <p className="hidden md:block  mx-3">About</p>
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center pr-4">
            <Switch onChange={handleThemeSwitch} color="indigo" defaultChecked/>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
