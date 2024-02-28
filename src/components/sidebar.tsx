import { X } from "lucide-react";
import { Link } from "react-router-dom";
import Img_LogoUfu from "../assets/LogoUfu.png";
interface ISideBarProps {
  isOpen: boolean;
  setisOpen: (value: boolean) => void;
  scrollToSection: (id: string) => void;
}

const SideBar = ({ isOpen, setisOpen, scrollToSection }: ISideBarProps) => {
  const navagationItem = [
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

  const handlclickCourses = (id: string) => {
    scrollToSection(id);
    setisOpen(false);
  };

  return (
    <div
      className={`${
        isOpen === false ? "hidden" : ""
      }   w-full h-[calc(100vh-87px)]  flex flex-col bg-secundary-background opacity-100 p-6   animate-wipe-in-bottom-right`}
    >
      <header className="justify-between items-center">
        <div className="w-full flex justify-end">
          <X
            size={24}
            onClick={() => setisOpen(false)}
            className="hover:cursor-pointer"
          />
        </div>
      </header>
      <main className="w-full flex flex-col h-full justify-around items-center mt-10">
        <nav className="w-full flex flex-col items-center">
          <ul className="flex flex-col gap-9 list-none justify-between">
            {navagationItem.map((item, index) => (
              <li
                key={index}
                className="font-Literata text-2xl text-black cursor-pointer hover:text-gradient-custom transition-all duration-300 ease-in-out hover:scale-105 hover:font-bold leading-5 "
                onClick={() => handlclickCourses(item.link)}
              >
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="w-full flex justify-center">
          <img
            src={Img_LogoUfu}
            width={200}
            height={200}
            alt="Logo universidade federal de uberlandia"
          />
        </div>
      </main>
    </div>
  );
};

export default SideBar;
