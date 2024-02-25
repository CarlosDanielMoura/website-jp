import Img_PY from "../assets/banner/Banner_Card_JP.svg";
import Img_Educa from "../assets/banner/Banner_Card_Educa.svg";
import Img_WEb from "../assets/banner/Banner_Card_DEV_WEB.svg";
import Img_Robotica from "../assets/gallery/Img_gallery_1.jpeg";

export const data = [
  {
    title: "Programação Python",
    description:
      "O projeto tem como objetivo ensinar crianças e adolescentes a transformarem conteúdos escolares em jogos educacionais, estimulando a criatividade e o aprendizado de forma lúdica e interativa.",
    schedule: [
      "Terça e Quinta 15:00 às 16:30",
      "Terça e Quinta 19:00 às 20:30",
    ],
    technologies: ["Python"],
    img: Img_PY,
    id_search: "course_python",
  },
  {
    title: "Desenvolvimento de Site",
    description:
      "O objetivo do curso de programação Web é capacitar jovens para desenvolver sites na Internet, incluindo a criação do layout e programação necessários.",
    schedule: ["Terça e Quinta 19:00 às 20:30"],
    technologies: ["HTML5", "CSS", "JavaScript", "Figma"],
    img: Img_WEb,
    id_search: "course_web",
  },
  {
    title: "Educa Game",
    description:
      "O projeto tem como objetivo ensinar crianças e adolescentes a transformarem conteúdos escolares em jogos educacionais, estimulando a criatividade e o aprendizado de forma lúdica e interativa.",
    schedule: ["A definir"],
    technologies: ["Scratc", "RPG Playground"],
    img: Img_Educa,
    id_search: "course_educa",
  },

  {
    title: "Tech Kids",
    description:
      "Este projeto de extensão tem como objetivo ensinar programação de forma lúdica para crianças de 9 a 12 anos.",
    schedule: [
      "Terça e Quinta: 8h30 às 10h00",
      "Terça e Quinta: 17h00 às 18h30",
    ],
    technologies: ["Scratch"],
    img: Img_PY,
    id_search: "course_tech_kids",
  },
  // {
  //   title: "Inclusão Digital",
  //   description:
  //     "O objetivo deste projeto de extensão é capacitar os idosos com mais de 55 anos em inclusão digital, oferecendo-lhes treinamento prático no uso do computador e celulares.",
  //   schedule: ["A definir"],
  //   technologies: ["A definir"],
  //   img: Img_Inclusao,
  //   id_search: "course_inclusao",
  // },
  {
    title: "Robótica",
    description:
      "O objetivo deste projeto de extensão é capacitar os alunos do ensino médio e fundamental II da cidade de Monte Carmelo-MG no desenvolvimento de soluções baseadas em robótica envolvendo programação e design de hardware, buscando constribuir no processo de ensino aprendizagem e despertando o interesse pela área da computação.",
    schedule: ["Terça e Quinta: 17h00 às 18h30"],
    technologies: ["ThinkerCad", "Plataforma", "Arduino", "Arduino IDE"],
    img: Img_Robotica,
    id_search: "course_robotica",
  },
];
