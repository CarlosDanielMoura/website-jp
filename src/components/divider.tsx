import React from "react";
import { twMerge } from "tailwind-merge";

const Divider: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={twMerge(
        "border border-gray-600 w-full md:hidden",
        rest.className
      )}
    ></div>
  );
};

export default Divider;
