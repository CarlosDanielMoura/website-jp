import React from "react";
import Img_Gallery_1 from "../assets/gallery/Img_gallery_1.jpeg";
import Img_Gallery_2 from "../assets/gallery/Img_gallery_2.jpeg";
import Img_Gallery_3 from "../assets/gallery/Img_gallery_3.jpeg";
import Img_Gallery_4 from "../assets/gallery/Img_gallery_4.jpeg";
import Img_Gallery_5 from "../assets/gallery/Img_gallery_5.jpeg";
import Img_Gallery_Initial from "../assets/banner/Banner_Card_DEV_WEB.svg";

const Gallery = () => {
  const data = [
    { imgelink: Img_Gallery_1 },
    { imgelink: Img_Gallery_2 },
    { imgelink: Img_Gallery_3 },
    { imgelink: Img_Gallery_4 },
    { imgelink: Img_Gallery_5 },
  ];

  const [active, setActive] = React.useState(Img_Gallery_Initial);

  return (
    <div className="w-full grid gap-4 md:w-full lg:w-2/3 mx-auto mt-20">
      <div className="w-full text-center">
        <p className="font-bold font-Literata text-5xl text-gradient-custom">
          Galeria
        </p>
      </div>
      <div className="w-full mt-5">
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-20 w-full  max-w-full cursor-pointer rounded-lg object-cover object-center lg:min-w-40"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
