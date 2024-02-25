import React from "react";
import Icon_Arrow_Right from "../assets/icons/Icons-Arrow_Right.svg";

interface IListItem {
  title: string;
}

interface IListItemsProps {
  items: IListItem[];
  title: string;
}

const ListItems: React.FC<IListItemsProps> = ({ items, title }) => {
  return (
    <>
      <p className="uppercase font-bold font-Literata text-base text-footer-title-primary leading-5">
        {title}
      </p>
      <ul className="w-full flex flex-col gap-2 mt-5 ">
        {items.map((item, index) => (
          <div key={index} className="flex gap-3">
            <img
              width={10}
              src={Icon_Arrow_Right}
              alt={`Link para navegar em ${item.title}`}
              loading="lazy"
            />
            <li
              key={index}
              className="font-Literata text-footer-title-secudary cursor-pointer hover:text-footer-title-primary transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:scale-105 hover:font-bold leading-5  "
            >
              {item.title}
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default ListItems;
