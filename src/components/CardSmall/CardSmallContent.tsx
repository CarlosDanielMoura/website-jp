import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

interface ICardSmallContentProps extends HTMLProps<HTMLParagraphElement> {
  text: string;
}

const CardSmallContent = ({ text, ...rest }: ICardSmallContentProps) => {
  return (
    <p
      {...rest}
      className={twMerge(
        "font-Inter font-bold text-lg mt-4 w-full text-center p-3",
        rest.className
      )}
    >
      {text}
    </p>
  );
};

export default CardSmallContent;
