import { twMerge } from "tailwind-merge";

interface IButtonRootProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disable?: boolean;
}

const ButtonRoot = ({ children, disable, ...rest }: IButtonRootProps) => {
  return (
    <button
      disabled={disable}
      {...rest}
      className={twMerge(
        "bg-gradient-to-r from-teal-700 to-teal-300 font-Inter font-medium text-base w-full lg:max-w-[350px]  h-[45px] text-white rounded-[50px] cursor-pointer hover:from-teal-300 hover:to-teal-700 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-white focus:ring-opacity-60 hover:scale-105",
        rest.className
      )}
    >
      {children}
    </button>
  );
};

export default ButtonRoot;
