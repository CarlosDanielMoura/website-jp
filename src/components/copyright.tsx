import Socials from "./socials";

const Copyright = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-Inter text-base font-normal leading-5 text-footer-title-primary">
        &copy; UNIVERSIDADE FEDERAL DE UBERLÂNDIA CAMPUS MONTE CARMELO
      </p>
      <p className="font-Inter text-base font-normal text-center leading-5 text-footer-title-primary">
        Jovens Programadores, 2016-2024
      </p>
      <div className="mt-5">
        <Socials />
      </div>
    </div>
  );
};

export default Copyright;
