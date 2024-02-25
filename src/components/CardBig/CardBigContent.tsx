import { twMerge } from "tailwind-merge";

interface ICardBigContentProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  content: string;
}
const CardBigContent = ({ content, ...rest }: ICardBigContentProps) => {
  return (
    <p
      className={twMerge(
        "text-base font-normal  font-Inter  lg:text-justify",
        rest.className
      )}
    >
      {content}
    </p>
  );
};

export default CardBigContent;
