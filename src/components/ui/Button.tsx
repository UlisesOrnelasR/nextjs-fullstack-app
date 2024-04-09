import { twMerge } from "tailwind-merge";
import { ButtonHTMLAttributes } from "react";

// interface Props {
//   children: React.ReactNode;
//   className?: string;
// }

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, className, ...props }: Props) => {
  return (
    <button
      className={twMerge(
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
