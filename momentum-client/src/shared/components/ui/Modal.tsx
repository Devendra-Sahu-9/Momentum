import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Modal Content */}
      <div
        className={clsx(
          "relative z-10 w-full max-w-md rounded-xl bg-white p-6 shadow-lg",
        )}
      >
        {title && (
          <h2 className="mb-4 text-lg font-semibold text-gray-800">{title}</h2>
        )}

        {children}
      </div>
    </div>,
    document.body,
  );
};
