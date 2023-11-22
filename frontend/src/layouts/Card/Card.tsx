type Props = {
  children?: React.ReactNode;
};

export const Card: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
