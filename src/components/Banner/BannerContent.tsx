import { Button } from "../Button";

interface IBannerContentProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  scrollToSection: (id: string) => void;
}

const BannerContent = ({
  title,
  description,
  scrollToSection,
}: IBannerContentProps) => {
  return (
    <div className="w-full flex flex-col flex-1 justify-evenly items-center lg:h-full">
      <p className="text-gradient-custom font-bold text-[1.8rem] font-Literata text-center lg:text-start lg:text-[2.8rem]">
        {title}
      </p>

      <div className="flex flex-col items-center gap-8 md:gap-2 xl:gap-5">
        <p className="text-black text-2xl font-bold font-Inter">
          {description}
        </p>
        <Button.Root
          className="bg-gradient-to-r from-teal-700 to-teal-300 font-Inter font-medium text-base w-[150px] h-[45px] text-white rounded-[50px] cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out hover:opacity-90"
          onClick={() => scrollToSection("sectionId")}
        >
          Saiba mais
        </Button.Root>
      </div>
    </div>
  );
};

export default BannerContent;
