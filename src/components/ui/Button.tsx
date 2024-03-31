import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ children, className }: Props) => {
  return (
    <button
      className={twMerge(
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded",
        className
      )}
    >
      {children}
    </button>
  );
};
