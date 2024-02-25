import { twMerge } from "tailwind-merge";

interface ICardBigImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const CardBigImage = ({ src, alt, ...rest }: ICardBigImageProps) => {
  return (
    <img
      className={twMerge(" rounded-3xl lg:object-cover", rest.className)}
      width={0}
      height={0}
      loading="lazy"
      src={src}
      alt={alt}
    />
  );
};

export default CardBigImage;
