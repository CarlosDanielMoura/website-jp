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
    class: ["Turma 1", "Turma 2"],
    age_range: "13 anos ao Ensino Médio",
    img: Img_PY,
    id_search: "course_python",
    link_register: "https://forms.office.com/r/R7jn7RNAfv?origin=lprLink",
  },
  {
    title: "Desenvolvimento de Site",
    description:
      "O objetivo do curso de desenvolvimento de site é capacitar jovens para desenvolver sites na Internet, incluindo a criação do layout e programação necessários.",
    schedule: ["Terça e Quinta 19:00 às 20:30"],
    technologies: ["HTML5", "CSS", "JavaScript", "Figma"],
    class: ["Turma 1"],
    age_range: "13 anos ao Ensino Médio",
    img: Img_WEb,
    id_search: "course_web",
    link_register: "https://forms.office.com/r/UvEuDi6yZn",
  },
  {
    title: "Educa Game",
    description:
      "O projeto tem como objetivo ensinar crianças e adolescentes a transformarem conteúdos escolares em jogos educacionais, estimulando a criatividade e o aprendizado de forma lúdica e interativa.",
    schedule: [
      "Terça e Quinta 09:00 às 10:30",
      "Terça e Quinta 17:00 às 18:30",
    ],
    class: ["Turma 1 ", "Turma 2"],
    age_range: "13 anos ao 16 anos.",
    technologies: ["Scratch", "RPG Playground"],
    img: Img_Educa,
    id_search: "course_educa",
    link_register: "https://forms.office.com/r/1sn9NW1ZZ9?origin=lprLink",
  },

  {
    title: "Tech Kids",
    description:
      "Este projeto de extensão tem como objetivo ensinar programação de forma lúdica para crianças de 9 a 12 anos.",
    schedule: [
      "Terça e Quinta: 17:00 às 18:30",
      "Terça e Quinta: 17:45 às 19:15",
    ],
    class: ["Turma 1", "Turma 2"],
    age_range: "9 anos ao 12 anos.",
    technologies: ["Scratch"],
    img: Img_PY,
    id_search: "course_tech_kids",
    link_register: "https://forms.office.com/r/F1gw0gKm2i?origin=lprLink",
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
    class: ["Turma 1"],
    age_range: "9° ano ao ensino médio",
    img: Img_Robotica,
    id_search: "course_robotica",
    link_register: "https://forms.office.com/r/CRRzN9NkfW?origin=lprLink",
  },
];
