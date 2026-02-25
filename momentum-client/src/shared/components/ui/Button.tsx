import clsx from "clsx";
import { useNavigate } from "react-router-dom";

type Variant = "primary" | "secondary" | "danger" | "outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  isLoading?: boolean;
  to?: string;
}

export const Button = ({
  variant = "primary",
  isLoading = false,
  className,
  children,
  disabled,
  to,
  onClick,
  type = "button",
  ...props
}: ButtonProps) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || isLoading) return;

    // Run custom onClick first
    if (onClick) {
      onClick(e);
    }

    if (e.defaultPrevented) return;

    // Only navigate if:
    // 1. `to` exists
    // 2. button type is NOT submit
    if (type !== "submit" && to?.trim()) {
      navigate(to);
    }
  };

  return (
    <button
      type={type} // ✅ now dynamic
      className={clsx(
        "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
        {
          "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500":
            variant === "primary",
          "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400":
            variant === "secondary",
          "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500":
            variant === "danger",
          "border border-gray-300 bg-white hover:bg-gray-50 focus:ring-gray-400":
            variant === "outline",
        },
        className,
      )}
      disabled={disabled || isLoading}
      onClick={handleClick}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};
