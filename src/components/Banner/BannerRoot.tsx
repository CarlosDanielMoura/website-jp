interface IBannerRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const BannerRoot = ({ children }: IBannerRootProps) => {
  return (
    <div className="w-full h-480  flex flex-col items-center justify-center  md:flex-col md:h-600  xl:flex-row xl:gap-5">
      {children}
    </div>
  );
};

export default BannerRoot;
