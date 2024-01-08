import { ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
  onClick?: (e: any) => void;
  title?: string;
};

export const Button = ({ children, onClick, title }: ButtonProps) => {
  return (
    <button title={title} onClick={onClick}>
      {children}
    </button>
  );
};
