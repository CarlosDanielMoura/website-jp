import Icon_Social_Facebook from "../assets/icons/Icons_Social_Facebook.svg";
import Icon_Social_Instagram from "../assets/icons/Icons_Social_Insta.svg";
const Socials = () => {
  return (
    <div className="flex w-[95%] md:w-[90%] lg:w-[95%] justify-around">
      <img
        className="hover:cursor-pointer hover:transition-all ease-in-out duration-300 transform hover:scale-110 shadow-lg hover:shadow-[#0D292A]"
        src={Icon_Social_Facebook}
        alt="Icone rede social Facebook"
      />
      <img
        className="hover:cursor-pointer hover:transition-all ease-in-out duration-300 transform hover:scale-110 shadow-lg hover:shadow-[#0D292A]"
        src={Icon_Social_Instagram}
        alt="Icone rede social Instagram"
      />
    </div>
  );
};
export default Socials;
