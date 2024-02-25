interface ICardSmallRootProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

const CardSmallRoot = ({ children }: ICardSmallRootProps) => {
  return (
    <div className="relative w-full  min-h-28 bg-[#eae6e6] flex flex-col justify-center items-center rounded-xl mt-10 md:w-96 p-3 md:max-w-[250px] ">
      {children}
    </div>
  );
};

export default CardSmallRoot;
