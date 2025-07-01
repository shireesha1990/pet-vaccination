'use client';
import React, { useState } from 'react';
import AddVaccinationButton from './addVaccinationButton';
import VaccinationModal from './vaccinationModal';

interface PetHeaderProps {
  petName?: string;
  breed?: string;
  age?: string;
  className?: string;
}

const handleAddVaccination = (data: { vaccine_name: string; last_completed: string }) => {
    console.log("Submitted data:", data);
    fetch('/api/vaccinations', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } })
  };

const PetHeader: React.FC<PetHeaderProps> = ({
  petName = "Bobby",
  breed = "Golden Retriever",
  age = "1 year old",
  className = ""
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 ${className}`}>
      <div className='flex-1 text-left'>
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          {petName}'s vaccinations
        </h1>
        <p className="text-gray-400 text-sm">
          {breed} | {age}
        </p>
      </div>
      <AddVaccinationButton onClick={() => setModalOpen(true)} ></AddVaccinationButton>
      <VaccinationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddVaccination}
      />
    </div>
  );
};

export default PetHeader;