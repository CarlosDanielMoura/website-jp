interface ICardBigRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  typeRotate?: string;
}

const CardBigRoot = ({
  children,
  typeRotate = "left",
  ...rest
}: ICardBigRootProps) => {
  return (
    <div
      {...rest}
      className={`w-full flex flex-col lg:flex-row lg:gap-5 ${
        typeRotate === "rigth" ? "flex-col-reverse" : "flex-col"
      }`}
    >
      {children}
    </div>
  );
};

export default CardBigRoot;
