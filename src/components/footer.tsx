import { data_address, data_courses, data_link } from "../utils/footerData";
import Address from "./address";
import Copyright from "./copyright";
import ListItems from "./list-items";

const Footer = () => {
  return (
    <footer className="w-full max-w-[90%] py-7  grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-3">
      <div className="flex flex-col gap-3">
        <Address addressData={data_address} />
      </div>
      <div className="mt-5 md:mt-0">
        <ListItems items={data_link} title="Links" />
      </div>
      <div className="mt-5 md:mt-0">
        <ListItems items={data_courses} title="Cursos" />
      </div>
      <div className="grid md:col-span-3 col-start-1  md:col-end-auto xl:col-1">
        <div className="mt-5 md:mt-0 mx-auto text-center">
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
