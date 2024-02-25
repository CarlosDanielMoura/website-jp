import Divider from "../components/divider";
import icon_toptico from "../assets/icons/Icons-topicos.svg";

const About = () => {
  return (
    <div id="about" className="w-full  flex flex-col mt-14  p-3 rounded-xl ">
      <h1 className="text-center font-Literata font-bold text-gradient-custom text-5xl">
        Sobre
      </h1>
      <div className="w-full flex flex-col mt-6 md:flex-row gap-5">
        <div className="flex flex-1 flex-col gap-8 md:justify-around">
          <span className="text-black font-bold text-3xl text-center font-Literata md:text-left md:text-4xl">
            Impulsionando a inovação através da educação tecnológica:
          </span>
          <span className="text-black font-normal  font-Literata text-center text-2xl md:text-left">
            Capacitando crianças e adolescentes com habilidades essenciais para
            liderar no futuro digital
          </span>
          <Divider />
        </div>
        <div className="flex flex-1 mt-4 flex-col">
          <p className="text-justify font-normal font-Literata text-sm">
            O Jovens Programadores tem como missão estimular e desenvolver
            habilidades essenciais para o sucesso na era tecnológica, tais como
            o raciocínio lógico e matemático, o entendimento dos conceitos de
            causa e consequência, o encadeamento de ideias e a programação.
            Acreditamos que a educação e a inclusão tecnológica são fundamentais
            para mudar o futuro de crianças e adolescentes, especialmente
            aqueles que não têm muitas oportunidades e condições de se
            desenvolverem plenamente
          </p>
          <div className="w-full mt-9">
            <ul className="flex flex-col gap-4 ">
              <li className="flex items-start gap-3 t">
                <img src={icon_toptico} alt="icone de topicos" />
                <span className="text-sm">
                  Preparação para o futuro: A educação tecnológica ajuda a
                  preparar as crianças para as carreiras do futuro.
                </span>
              </li>
              <li className="flex items-start gap-3 t">
                <img src={icon_toptico} alt="icone de topicos" />
                <span className="text-sm">
                  Desenvolvimento de habilidades: A educação tecnológica ajuda a
                  desenvolver habilidades importantes, como raciocínio lógico,
                  resolução de problemas, pensamento crítico e criatividade.
                </span>
              </li>

              <li className="flex items-start gap-3 t">
                <img src={icon_toptico} alt="icone de topicos" />
                <span className="text-sm">
                  Autonomia e independência: A educação tecnológica pode ajudar
                  as crianças a se tornarem mais independentes e autônomas,
                  permitindo-lhes resolver problemas e enfrentar desafios
                  tecnológicos por conta própria.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
