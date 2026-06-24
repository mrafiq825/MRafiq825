import { useEffect, type ReactNode } from "react";
import { FiX } from "react-icons/fi";
import { ICON_CLASS } from "~/lib/constants";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: ReactNode;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-[#0B0C10]/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        className="relative w-full max-w-lg rounded-[24px] glass-panel p-6 sm:p-8 shadow-2xl border border-white/10 z-10 overflow-hidden animate-fade-in-up"
        role="dialog"
        aria-modal="true"
      >
        {/* Decorative Top Accent Light */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-600/50 to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <h3 className="font-heading text-xl font-bold text-text-primary">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full glass-button-secondary text-text-secondary hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent-600"
            aria-label="Close modal"
          >
            <FiX className={ICON_CLASS.action} />
          </button>
        </div>

        {/* Content */}
        <div className="font-body text-text-secondary text-[15px] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
