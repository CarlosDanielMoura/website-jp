import { useState } from "react";
import Header from "../components/header";

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
      <div className=" w-full flex flex-col justify-center items-center mt-52 p-2">
        <h1 className="text-gradient-custom font-Literata font-bold text-4xl">
          Resultados em Breve{" "}
        </h1>
      </div>
    </div>
  );
};

export default Results;
