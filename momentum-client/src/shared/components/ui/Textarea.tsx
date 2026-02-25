import React from "react";
import clsx from "clsx";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  className,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}

      <textarea
        className={clsx(
          "rounded-lg border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
          error ? "border-red-500" : "border-gray-300",
          className,
        )}
        {...props}
      />

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};
