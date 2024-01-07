import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: (e: any) => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};
