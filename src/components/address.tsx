interface IAddressProps {
  addressData: {
    title: string;
    address: string;
    phone: string;
    email: string;
  };
}

const Address: React.FC<IAddressProps> = ({ addressData }) => {
  const { title, address, phone, email } = addressData;
  return (
    <>
      <p className="uppercase font-medium font-Literata text-xl text-footer-title-primary leading-5">
        {title}
      </p>
      <p className="font-Literata text-footer-title-secudary">
        {address.split("<br />").map((item, index) => (
          <span key={index}>
            {item}
            <br />
          </span>
        ))}
      </p>
      <p className="font-Literata text-footer-title-secudary">
        Telefone: {phone}
      </p>
      <p className="font-Literata text-footer-title-secudary">Email: {email}</p>
    </>
  );
};
export default Address;
