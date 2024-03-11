import { Button } from "./Button";
import Divider from "../components/divider";

import Result_Web_PDF from "../assets/docs_result/Resultado_JP_Desenvolvimento_Web.pdf";
import Result_Robotica_PDF from "../assets/docs_result/Resultado_JP_Robotica.pdf";
import Result_TechKids_PDF from "../assets/docs_result/Resultado_JP_TechKids.pdf";
import Result_Python_Noite_PDF from "../assets/docs_result/Resultado_Python_noite.pdf";
import Result_Python_Tarde_PDF from "../assets/docs_result/Resultado_Python_tarde.pdf";
import Result_EducaGame_PDF from "../assets/docs_result/Resultado_JP_EducaGame.jpeg";

interface ResultData {
  Title: string;
  Class: string[];
  schedules: string;
  hours: string;
  link: string;
}

const data: ResultData[] = [
  {
    Title: "Desenvolvimento Web",
    Class: ["Turma 1"],
    schedules: "Terça e Quinta",
    hours: "19:00 às 20:30",
    link: Result_Web_PDF,
  },
  {
    Title: "Programação Python",
    Class: ["Turma 1"],
    schedules: "Terça e Quinta",
    hours: "15:00 às 16:30",
    link: Result_Python_Tarde_PDF,
  },
  {
    Title: "Programação Python",
    Class: ["Turma 2"],
    schedules: "Terça e Quinta",
    hours: "19:00 às 20:30",
    link: Result_Python_Noite_PDF,
  },
  {
    Title: "Robótica",
    Class: ["Turma 1"],
    schedules: "Segunda e Quarta",
    hours: "17:00 às 18:30",
    link: Result_Robotica_PDF,
  },
  {
    Title: "Tech Kids",
    Class: ["Turma 1"],
    schedules: "Segunda e Quarta",
    hours: "17:00 às 18:30",
    link: Result_TechKids_PDF,
  },
  {
    Title: "Tech Kids",
    Class: ["Turma 2"],
    schedules: "Segunda e Quarta",
    hours: "17:45 às 19:15",
    link: Result_TechKids_PDF,
  },
  {
    Title: "Educa Game",
    Class: ["Turma 1"],
    schedules: "Terça e Quinta",
    hours: "09:00 às 10:30",
    link: Result_EducaGame_PDF,
  },
  {
    Title: "Educa Game",
    Class: ["Turma 2"],
    schedules: "Terça e Quinta",
    hours: "17:00 às 18:30",
    link: Result_EducaGame_PDF,
  },
];

const ResultCard = () => {
  return (
    <>
      {data.map((result: ResultData) => (
        <div
          key={result.Title}
          className="result-card w-56 h-64 border rounded-xl flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition duration-300 ease-in-out bg-white cursor-pointer"
        >
          <div className="w-full text-center p-2">
            <h1 className="font-Inter font-bold text-lg">{result.Title}</h1>
          </div>
          <Divider className="w-[90%] md:block" />
          <div className="w-full text-center p-2">
            <h2 className="font-Inter font-bold text-base">
              {result.Class.join(", ")}
            </h2>
          </div>
          <Divider className="w-[90%] md:block" />
          <div className="w-full flex flex-col gap-2 p-2">
            <h2 className="font-Inter font-bold text-base">Horário</h2>
            <span className="text-base font-normal font-Literata">
              {result.schedules}
            </span>
            <span className="text-base font-normal font-Literata">
              {result.hours}
            </span>
          </div>
          <Divider className="w-[90%] md:block" />
          <div className="w-full p-2">
            <a href={result.link} download>
              <Button.Root>Ver Resultado</Button.Root>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default ResultCard;
