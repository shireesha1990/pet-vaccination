import React from 'react';
import { Plus } from 'lucide-react';

interface AddVaccinationButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const AddVaccinationButton: React.FC<AddVaccinationButtonProps> = ({
  onClick,
  disabled = false,
  loading = false,
  className = "",
  children = "ADD VACCINATION"
}) => {
  return (
    <div className={`flex-shrink-0 ${className}`}>
        <button
          onClick={onClick}
          disabled={disabled || loading}
          className={`
            w-full flex  justify-center px-6 py-3 
            bg-gradient-to-r from-teal-600 to-teal-700 
            hover:from-teal-700 hover:to-teal-800
            disabled:from-gray-400 disabled:to-gray-500
            text-white font-semibold text-sm tracking-wide
            rounded-full shadow-lg hover:shadow-xl
            transform transition-all duration-200 ease-in-out
            hover:scale-105 active:scale-95
            focus:outline-none focus:ring-4 focus:ring-teal-300 focus:ring-opacity-50
          `}
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
              <span>ADDING...</span>
            </>
          ) : (
            <>
              <Plus className="w-4 h-4 mr-2 font-bold" strokeWidth={3} />
              <span>{children}</span>
            </>
          )}
        </button>
      </div>
  );
};

export default AddVaccinationButton;

