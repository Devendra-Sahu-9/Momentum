import React from "react";
import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={clsx("rounded-xl bg-white shadow-md p-6", className)}>
      {children}
    </div>
  );
};
