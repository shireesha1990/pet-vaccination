import React from 'react';

interface PetHeaderProps {
  petName?: string;
  breed?: string;
  age?: string;
  className?: string;
}

const PetHeader: React.FC<PetHeaderProps> = ({
  petName = "Bobby",
  breed = "Golden Retriever",
  age = "1 year old",
  className = ""
}) => {
  return (
    <div className={`bg-gray p-6 ${className}`}>
      <h1 className="text-2xl font-semibold text-gray-900 mb-2">
        {petName}'s vaccinations
      </h1>
      <p className="text-gray-400 text-sm">
        {breed} | {age}
      </p>
    </div>
  );
};

export default PetHeader;