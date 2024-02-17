interface IButtonRootProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const ButtonRoot = ({ children, ...rest }: IButtonRootProps) => {
  return <button {...rest}>{children}</button>;
};

export default ButtonRoot;
