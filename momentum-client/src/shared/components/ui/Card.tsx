interface AppCardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: AppCardProps) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 ${className}`}
    >
      {children}
    </div>
  );
};
export default Card;
