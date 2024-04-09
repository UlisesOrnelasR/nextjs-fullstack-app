interface cardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: cardProps) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {children}
    </div>
  );
};
