import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#1B382B] text-[#FAF8F5] px-4 py-3 rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.18)] border border-[#2C5E45] animate-in slide-in-from-bottom-5 duration-200">
      <CheckCircle2 className="w-4 h-4 text-[#8CA595] shrink-0" />
      <span className="text-xs font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-[#CBD8D0] hover:text-white"
        aria-label="Zavřít"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
