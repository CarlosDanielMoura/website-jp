import Img_Banner_Jp from "../assets/banner/Banner_Card_JP.svg";
import Img_Banner_Educa from "../assets/banner/Banner_Card_Educa.svg";
import Img_Banner_TechKids from "../assets/banner/Banner_Card_Tech_Kids.svg";
import { Banner } from "./Banner";
import { Carousel, IconButton } from "@material-tailwind/react";
import { v4 as uuidv4 } from "uuid";

interface ICarrouselProps {
  scrollToSection: (id: string) => void;
}

const Carrousel = ({ scrollToSection }: ICarrouselProps) => {
  const dataCarrousel = [
    {
      id: uuidv4(),
      title: "Jovens Programadores",
      description: "Resultados Disponíveis!",
      image: Img_Banner_Jp,
      id_search: "about",
    },
    {
      id: uuidv4(),
      title: "Educa Game",
      description: "Resultados Disponíveis!",
      image: Img_Banner_Educa,
      id_search: "course_educa",
    },
    {
      id: uuidv4(),
      title: "Tech Kids",
      description: "Resultados Disponíveis!",
      image: Img_Banner_TechKids,
      id_search: "course_tech_kids",
    },
  ];
  return (
    <Carousel
      placeholder={"Carrousel de apresentacao"}
      transition={{ duration: 1 }}
      autoplayDelay={3000}
      autoplay={true}
      loop={true}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 lg:bottom-0 xl:bottom-8">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-teal-900" : "w-4 bg-teal-700/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      prevArrow={({ handlePrev }) => (
        <IconButton
          placeholder={"Botao de voltar"}
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          draggable={true}
          className="!absolute top-2/4 left-4 -translate-y-2/4 hidden sm:block"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
            <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zm1.289-15.7 1.422 1.4-4.3 4.344 4.289 4.245-1.4 1.422-5.714-5.648z" />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          placeholder={"Botao de avancar"}
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4 hidden sm:block"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
            <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z" />
          </svg>
        </IconButton>
      )}
      className=""
    >
      {dataCarrousel.map((item) => (
        <Banner.Root key={item.id}>
          <Banner.Image link={item.image} alt={item.title} />
          <Banner.Content
            title={item.title}
            description={item.description}
            scrollToSection={scrollToSection}
            id_seach={item.id_search}
          />
          {/* Botão "Saiba Mais" que chama scrollToSection quando clicado */}
        </Banner.Root>
      ))}
    </Carousel>
  );
};

export default Carrousel;
