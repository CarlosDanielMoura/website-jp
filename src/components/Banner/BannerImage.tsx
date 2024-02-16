interface IBannerImageProps extends React.HTMLAttributes<HTMLImageElement> {
  link: string;
  alt: string;
}

const BannerImage = ({ link, alt }: IBannerImageProps) => {
  return (
    <img
      className="rounded-[44px] object-cover w-full h-2/4 sm:w-5/6   md:w-4/6 md:h-4/6 lg:w-4/5"
      width="0"
      height="0"
      loading="lazy"
      src={link}
      alt={alt}
    />
  );
};

export default BannerImage;
