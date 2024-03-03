import { Typography } from "@material-tailwind/react";
import About from "../components/about";
import Carrousel from "../components/carrousel";
import ApresentionCardSmall from "../components/apresentionCardSmall";
import { CardBig } from "../components/CardBig";

import Icon_Topicos_Secudary from "../assets/icons/Icons_Topicos_secudary.svg";
import CardBigContent from "../components/CardBig/CardBigContent";
import Divider from "../components/divider";
import CardBigImage from "../components/CardBig/CardBigImage";
import { Fade } from "react-awesome-reveal";
import { Button } from "../components/Button";
import Gallery from "../components/gallery";
import Patner from "../components/patner";
import Footer from "../components/footer";
import { data } from "../utils/cardBigData";
import Header from "../components/header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [buttonText, setButtonText] = useState(
    "Matrículas a partir de 04/03 às 10:00"
  );
  const [intervalId, setIntervalId] = useState(0);
  const [isOpen, setisOpen] = useState(false);
  const [isDisable, setIsDisable] = useState(true);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const targetDate = new Date("2024-03-04T10:00:00");

      if (currentDate > targetDate) {
        setButtonText("Faça sua inscrição");
        setIsDisable(false);
        clearInterval(interval);
      }
    }, 1000);

    setIntervalId(interval);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div className=" w-full flex flex-col justify-center items-center relative">
        <Header
          isOpen={isOpen}
          setisOpen={setisOpen}
          scrollToSection={scrollToSection}
        />

        <div
          className={`flex-col  items-center mt-4 w-full max-w-[90%] ${
            isOpen ? "hidden" : "flex"
          }`}
        >
          <Fade
            direction="left"
            triggerOnce={true}
            className="w-full  relative z-0"
          >
            <Carrousel scrollToSection={scrollToSection} />
            <About />
          </Fade>
          <div className="w-full mt-20 flex flex-col justify-center items-center">
            <Fade direction="left" triggerOnce={true}>
              <Typography
                placeholder="Conheça os Projetos da UFU"
                className="text-center font-Literata font-bold text-gradient-custom text-5xl "
              >
                Conheça os Projetos da UFU
              </Typography>
              <div className="w-full flex justify-center items-center flex-wrap ">
                <ApresentionCardSmall scrollToSection={scrollToSection} />
              </div>
            </Fade>

            <div className="w-full flex justify-center items-center flex-wrap mt-20 gap-7">
              {data.map((item, index) => (
                <Fade
                  direction={`${index % 2 === 0 ? "left" : "right"}`}
                  triggerOnce={true}
                >
                  <CardBig.Root
                    typeRotate={`${index % 2 !== 0 ? "rigth" : "left"}`}
                    id={item.id_search}
                  >
                    {index % 2 !== 0 ? (
                      <>
                        <div className="flex flex-1 flex-col mt-5 xl:justify-evenly 2xl:justify-evenly">
                          <CardBig.Content
                            className="text-center font-Literata font-bold text-gradient-custom text-3xl "
                            content={item.title}
                          />
                          <CardBig.Content
                            className="font-bold text-base text-justify font-Inter mt-4"
                            content={item.description}
                          />
                          <CardBigContent
                            className="font-bold text-left text-xl font-Inter mt-4"
                            content="Horários"
                          />
                          <Divider className="w-3/4 md:block" />
                          <div className="flex flex-col py-3 ml-6 gap-2">
                            <CardBigContent
                              content={`${item.schedule[0]} - ${item.class[0]}`}
                            />
                            {item.schedule[1] && (
                              <CardBigContent
                                content={`${item.schedule[1]} - ${item.class[1]}`}
                              />
                            )}
                          </div>
                          <CardBigContent
                            className="font-bold text-left text-xl font-Inter"
                            content="Tecnologias"
                          />
                          <Divider className="w-3/4 md:block" />

                          {item.technologies.map((tech) => (
                            <div className="w-full flex gap-2 py-3">
                              <CardBigImage
                                className="w-4 ml-6 lg:object-none"
                                src={Icon_Topicos_Secudary}
                                alt="Icone de tecnologias"
                              />
                              <CardBigContent content={tech} />
                            </div>
                          ))}
                          <CardBigContent
                            className="font-bold text-left text-xl font-Inter mt-4"
                            content="Faixa Etária"
                          />

                          <Divider className="w-3/4 md:block" />
                          <div className="flex flex-col py-3 ml-6 gap-2">
                            <CardBigContent content={item.age_range} />
                          </div>
                          <Link to={`${item.link_register}`} target="_blank">
                            <Button.Root disable={isDisable}>
                              {buttonText}
                            </Button.Root>
                          </Link>
                        </div>
                        <div className="flex flex-1  mt-10">
                          <CardBig.Image
                            className="w-full  2xl:rounded-r-3xl "
                            src={item.img}
                            alt={`Imagem do curso de ${item.title}`}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex flex-1  mt-10">
                          <CardBig.Image
                            className="w-full  2xl:rounded-r-3xl "
                            src={item.img}
                            alt={`Imagem do curso de ${item.title}`}
                          />
                        </div>
                        <div className="flex flex-1 flex-col mt-5 xl:justify-evenly 2xl:justify-evenly">
                          <CardBig.Content
                            className="text-center font-Literata font-bold text-gradient-custom text-3xl"
                            content={item.title}
                          />
                          <CardBig.Content
                            className="font-bold text-base text-justify font-Inter mt-4"
                            content={item.description}
                          />
                          <CardBigContent
                            className="font-bold text-left text-xl font-Inter mt-4"
                            content="Horários"
                          />
                          <Divider className="w-3/4 md:block" />
                          <div className="flex flex-col py-3 ml-6 gap-2">
                            <CardBigContent
                              content={`${item.schedule[0]} - ${item.class[0]}`}
                            />
                            {item.schedule[1] && (
                              <CardBigContent
                                content={`${item.schedule[1]} - ${item.class[1]}`}
                              />
                            )}
                          </div>
                          <CardBigContent
                            className="font-bold text-left text-xl font-Inter"
                            content="Tecnologias"
                          />
                          <Divider className="w-3/4 md:block" />

                          {item.technologies.map((tech) => (
                            <div className="w-full flex gap-2 py-3">
                              <CardBigImage
                                className="w-4 ml-6 lg:object-none"
                                src={Icon_Topicos_Secudary}
                                alt="Icone de tecnologias"
                              />
                              <CardBigContent content={tech} />
                            </div>
                          ))}
                          <CardBigContent
                            className="font-bold text-left text-xl font-Inter mt-4"
                            content="Faixa Etária"
                          />

                          <Divider className="w-3/4 md:block" />
                          <div className="flex flex-col py-3 ml-6 gap-2">
                            <CardBigContent content={item.age_range} />
                          </div>
                          <Link to={`${item.link_register}`} target="_blank">
                            <Button.Root disable={isDisable}>
                              {buttonText}
                            </Button.Root>
                          </Link>
                        </div>
                      </>
                    )}
                  </CardBig.Root>
                </Fade>
              ))}
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <Fade
              direction="left"
              triggerOnce={true}
              className="w-full flex justify-center"
            >
              <Gallery />
            </Fade>
          </div>
          <Fade direction="left" triggerOnce={true} className="w-full">
            <div className="w-full mt-10 mb-8">
              <Patner />
            </div>
          </Fade>
        </div>

        <footer
          className={`w-full  justify-center bg-footer-background  ${
            isOpen ? "hidden" : "flex"
          }`}
        >
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Home;
