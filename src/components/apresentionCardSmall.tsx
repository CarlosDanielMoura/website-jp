import { Button } from "./Button";
import { CardSmall } from "./CardSmall";
import Img_Python from "../assets/symbols/Symbol_Python.svg";
import Img_DevWeb from "../assets/symbols/Symbol_Web.svg";
import Img_TechKids from "../assets/symbols/Symbol_Tech_Kids.png";
import Img_EducaGame from "../assets/symbols/Symbol_Educa.png";
import Img_Robotica from "../assets/symbols/Symbol_Robotica.png";
import { v4 as uuidv4 } from "uuid";

interface IApresentionCardSmall {
  scrollToSection: (id: string) => void;
}

const ApresentionCardSmall = ({ scrollToSection }: IApresentionCardSmall) => {
  const data = [
    {
      id: uuidv4(),
      image: Img_Python,
      text: "Programação Python",
      id_search: "course_python",
    },
    {
      id: uuidv4(),
      image: Img_DevWeb,
      text: "Desenvolvimento Web",
      id_search: "course_web",
    },
    {
      id: uuidv4(),
      image: Img_TechKids,
      text: "Tech Kids",
      id_search: "course_tech_kids",
    },
    {
      id: uuidv4(),
      image: Img_EducaGame,
      text: "Educa Game",
      id_search: "course_educa",
    },
    // {
    //   id: uuidv4(),
    //   image: Img_Python,
    //   text: "Inclusão Digital",
    //   id_search: "course_inclusao",
    // },
    {
      id: uuidv4(),
      image: Img_Robotica,
      text: "Robótica",
      id_search: "course_robotica",
    },
  ];
  return (
    <div className="w-full flex flex-wrap gap-4 justify-around items-center ">
      {data.map((item) => (
        <CardSmall.Root key={item.id} className="p-3">
          <CardSmall.Image
            src={item.image}
            alt={`Imagem do Projeto ${item.text}`}
          />
          <CardSmall.Content text={item.text} />
          <Button.Root onClick={() => scrollToSection(item.id_search)}>
            Conferir
          </Button.Root>
        </CardSmall.Root>
      ))}
    </div>
  );
};

export default ApresentionCardSmall;
