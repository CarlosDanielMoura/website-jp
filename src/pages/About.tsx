import { useState } from "react";
import Header from "../components/header";
import Img_Teams_Fernanda from "../assets/teams/Teams_Fernanda.svg";
import Img_Teams_Ana_Claudia from "../assets/teams/Teams_Ana_Claudia.svg";
import Img_Teams_Alessandra from "../assets/teams/Teams_Alessandra.svg";
import Img_Teams_Diego from "../assets/teams/Teams_Diego.jpeg";
import Img_Teams_Daniel from "../assets/teams/Teams_Daniel.jpeg";
import Patner from "../components/patner";
import Footer from "../components/footer";
import { Fade } from "react-awesome-reveal";

const About = () => {
  const [isOpen, setisOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const data_paragraph = [
    {
      title: "SOBRE NÓS",
      text: `Desperte seu potencial criativo, seja um Jovem Programador! Aprender programação de computadores é uma habilidade valiosa e cada vez mais essencial na sociedade moderna. Como disse o presidente Barack Obama, em 2013, “Não compre um videogame, faça um. Não baixe um app, desenvolva o seu”. É por isso que a Universidade Federal de Uberlândia (UFU), através da Faculdade de Computação/Monte Carmelo, criou o Programa Jovens Programadores (JP), um programa institucional que oferece cursos gratuitos de programação de computadores, robótica, programação de jogos e programação Web para alunos do ensino fundamental e médio da cidade de Monte Carmelo.`,
    },
    {
      title: "HISTÓRIA",
      text: `O JP teve início em 2016 com um financiamento do Ministério da Educação (MEC) de mais de R$ 200.000,00 em recursos e, inicialmente, as aulas aconteciam nos laboratórios das escolas de Monte Carmelo, com vagas limitadas apenas para alunos da rede estadual de ensino (fundamental II e ensino médio). Em 2018, o projeto passou a ser financiado pela própria UFU, através da Pró-Reitoria de Extensão e Cultura (PROEXC), e as aulas foram transferidas para dentro da UFU para redução de custos. Com essa mudança, também foram abertas vagas para alunos da rede municipal e privada, e o programa tem recebido inscrições de todas as escolas de Monte Carmelo.`,
    },
    {
      title: "MISSÃO",
      text: `O JP é um exemplo de como a educação pode ser acessível e transformadora. Ao ensinar programação de computadores para jovens, estamos capacitando-os para enfrentar os desafios do futuro e contribuindo para a construção de uma sociedade mais tecnologicamente avançada e inclusiva.`,
    },
    {
      title: "VISÃO",
      text: `Como disse John Lasseter, fundador da Pixar, “A arte desafia a tecnologia, e a tecnologia inspira a arte”. O JP entende que a programação de computadores é uma forma de arte e incentiva os jovens a explorarem sua criatividade através da tecnologia. Em 2021, mesmo com as dificuldades enfrentadas pela pandemia de COVID-19, o programa JP ofereceu o curso de Introdução à Programação de Computadores no formato remoto, o que permitiu a participação de jovens de todo o Brasil.`,
    },
    {
      title: "VALORES",
      text: `Ficamos felizes em informar que o Programa Jovens Programadores (JP) está sempre em constante evolução e buscando novas formas de ensinar programação para jovens da cidade de Monte Carmelo e região. Em 2023, o JP uniu forças com o projeto TechKids e expandiu sua oferta de cursos, incluindo agora aulas presenciais de programação Python, desenvolvimento web e programação para crianças. Essa iniciativa visa oferecer aos jovens novas oportunidades para desenvolver suas habilidades em programação, preparando-os para as demandas do mercado de trabalho e da sociedade digital.`,
    },
  ];

  const data_teams = [
    {
      name: "Fernanda Maria da Cunha Santos",
      role: "Coordenadora do Programa Jovens Programadores e coordenadora do projeto Programação Python",
      img: Img_Teams_Fernanda,
    },
    {
      name: "Ana Cláudia Martinez",
      role: "Coordenadora dos projetos TechKids e Inclusão Digital",
      img: Img_Teams_Ana_Claudia,
    },
    {
      name: "Daniel Stefany Duarte Caetano",
      role: "Coordenador do projeto EDUCAGAME",
      img: Img_Teams_Daniel,
    },
    {
      name: "Alessandra Aparecida Paulino",
      role: "Coordenadora do projeto Desenvolvimento Web",
      img: Img_Teams_Alessandra,
    },
    {
      name: "Diego Nunes Molinos",
      role: "Coordenador do projeto Robótica ",
      img: Img_Teams_Diego,
    },
  ];

  return (
    <div className="w-full  flex flex-col items-center">
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
        {/* Sobre nos texto */}

        <div className="w-ful flex flex-col gap-5 mt-10">
          <Fade direction="left" triggerOnce={true}>
            <h1 className="text-gradient-custom font-bold text-5xl font-Literata">
              SOBRE NÓS
            </h1>
            <h2 className="text-justify text-gradient-custom font-medium font-Literata text-xl">
              Desperte seu potencial criativo, seja um Jovem Programador!
            </h2>

            {data_paragraph.map((data, index) => (
              <div key={index} className="w-full">
                <p className="indent-4 text-justify text-lg font-normal font-Literata leading-6">
                  {data.text}
                </p>
              </div>
            ))}
          </Fade>
          {/* cards apresentação */}
          <Fade className="w-full" direction="left" triggerOnce={true}>
            <div className="w-full flex flex-col gap-5 mb-24">
              <div className="w-full flex flex-col gap-4 justify-center items-center">
                <h1 className="text-gradient-custom text-center font-bold text-5xl font-Literata uppercase leading-[2]">
                  Equipe JP
                </h1>
                <p className="font-Literata text-gradient-custom text-justify text-lg">
                  Conheça a equipe apaixonada por ensinar programação e
                  transformar o futuro digital dos jovens.
                </p>
              </div>
              <div className="grid justify-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
                {
                  // cards apresentação
                  data_teams.map((data, index) => (
                    <div
                      key={index}
                      className="max-w-60 h-[27rem] rounded-xl border shadow-lg flex flex-col hover:cursor-pointer hover:shadow-2xl transition-all duration-300 ease-in-out bg-white hover:scale-105"
                    >
                      <div>
                        <img className="rounded-t-lg" src={data.img} alt="" />
                      </div>
                      <div className="flex flex-col p-2 gap-2">
                        <p className="text-center font-bold text-lg font-Literata">
                          {data.name}
                        </p>
                        <p
                          className="text-center leading-7 font-normal text-footer-title-secudary
                  font-Literata"
                        >
                          {data.role}
                        </p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="w-full">
              <Patner />
            </div>
          </Fade>
        </div>
      </div>
      <footer
        className={`w-full  justify-center bg-footer-background  ${
          isOpen ? "hidden" : "flex"
        }`}
      >
        <Footer />
      </footer>
    </div>
  );
};
export default About;
