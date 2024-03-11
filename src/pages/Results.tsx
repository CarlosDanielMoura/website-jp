import { useState } from "react";
import Header from "../components/header";
import ResultCard from "../components/resultCard";

const Results = () => {
  const [isOpen, setisOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full   flex flex-col justify-center items-center">
      <Header
        isOpen={isOpen}
        setisOpen={setisOpen}
        scrollToSection={scrollToSection}
      />
      <div className=" w-full flex flex-col justify-center items-center mt-20 p-2 gap-10">
        <h1 className="text-gradient-custom font-Literata font-bold text-4xl text-center">
          Resultados das Inscrições
        </h1>
        <div className="w-full justify-center items-center">
          <div className="w-full grid justify-items-center grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6">
            <ResultCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
