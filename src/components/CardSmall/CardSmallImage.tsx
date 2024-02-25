interface ICardSmallImageProps extends React.HTMLProps<HTMLImageElement> {
  src: string;
  alt: string;
}

const CardSmallImage = ({ src, alt, ...rest }: ICardSmallImageProps) => {
  return (
    <img
      className="w-20 h-20 absolute -top-9 -left-4"
      width={0}
      height={0}
      {...rest}
      src={src}
      alt={alt}
      loading="lazy"
    />
  );
};

export default CardSmallImage;
