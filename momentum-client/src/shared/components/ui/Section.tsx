interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ children, className = "" }: SectionProps) => {
  return (
    <section className={`py-24 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
};
