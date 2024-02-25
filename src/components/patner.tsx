import Img_Patner_UFU45 from "../assets/patner/Patner_UFU45.png";
import Img_Patner_Faculdade_Comp from "../assets/patner/Patner_Faculdade_Computacao.png";
import Img_Patner_Proexc from "../assets/patner/Patner_PROEXC.png";
import Img_Patner_PEIC from "../assets/patner/Patner_PEIC.png";
import { v4 as uuidv4 } from "uuid";

const Patner = () => {
  const data = [
    {
      id: uuidv4(),
      alt: "Parceiro UFU 45 anos",
      link_image: Img_Patner_UFU45,
    },
    {
      id: uuidv4(),
      alt: "Parceiro Faculdade de Computação",
      link_image: Img_Patner_Faculdade_Comp,
    },
    {
      id: uuidv4(),
      alt: "Parceiro Proexc",
      link_image: Img_Patner_Proexc,
    },
    {
      id: uuidv4(),
      alt: "Parceiro PEIC",
      link_image: Img_Patner_PEIC,
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center gap-3">
      <h1 className="text-gradient-custom font-bold font-Literata text-5xl">
        Parceiros
      </h1>
      <div className="w-full grid justify-between items-center  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        {data.map((item) => {
          return (
            <img
              className="h-[7.9375rem] w-[26rem]  object-none"
              src={item.link_image}
              alt={item.alt}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Patner;
