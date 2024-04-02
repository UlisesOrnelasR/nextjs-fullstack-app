interface LabelProps {
  children: React.ReactNode;
}

export const Label = ({ children }: LabelProps) => {
  return <label className="block text-sm text-slate-700">{children}</label>;
};
