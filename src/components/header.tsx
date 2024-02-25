import { Menu } from "lucide-react";
import Logo from "../assets/LogoJP.svg";
import SideBar from "./sidebar";
import Socials from "./socials";
import { Link } from "react-router-dom";

interface IHeaderProps {
  isOpen: boolean;
  setisOpen: (value: boolean) => void;
  scrollToSection: (id: string) => void;
}

const Header = ({ isOpen, setisOpen, scrollToSection }: IHeaderProps) => {
  const handleClickIsOpen = () => {
    setisOpen(!isOpen);
  };
  const links = [
    {
      name: "Início",
      link: "/",
      id_search: "",
    },
    {
      name: "Cursos",
      link: "/",
      id_search: "course_python",
    },
    {
      name: "Resultados",
      link: "/results",
      id_search: "",
    },
    {
      name: "Sobre",
      link: "/about",
      id_search: "",
    },
  ];
  return (
    <>
      <header className=" w-full flex justify-center  py-4 px-4  text-white bg-gradient-to-r from-teal-700 to-teal-300 ">
        <div
          className={`w-full max-w-[90%] grid ${
            isOpen ? "grid-cols-1" : "grid-cols-2"
          } md:grid-cols-2 lg:grid-cols-2 items-center `}
        >
          <div
            className={`w-full ${isOpen ? "hidden" : ""}  md:hidden lg:hidden`}
          >
            <Menu
              size="24"
              className={`${isOpen ? "hidden" : "block"} `}
              onClick={handleClickIsOpen}
            />
          </div>
          <div className="w-full flex justify-center md:block ">
            <img src={Logo} alt="" />
          </div>
          <div className="w-full hidden md:block lg:flex justify-end gap-4">
            <ul className="flex items-center gap-4">
              {links.map((link, index, array) => (
                <li
                  key={link.link}
                  onClick={() => scrollToSection(link.id_search)}
                  className={`${
                    index === array.length - 1
                      ? "lg:border-r-2 border-gray-300"
                      : ""
                  } pr-2`}
                >
                  <Link
                    to={link.link}
                    className="hover:font-Literata text-footer-title-primary cursor-pointer hover:text-footer-title-primary transition-all duration-300 ease-in-out hover:scale-105 hover:font-bold leading-5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex md:hidden lg:block">
              <Socials />
            </div>
          </div>
        </div>
      </header>
      <SideBar
        isOpen={isOpen}
        setisOpen={setisOpen}
        scrollToSection={scrollToSection}
      />
    </>
  );
};

export default Header;
