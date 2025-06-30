"use client";

import React, { useState } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { vaccine_name: string; last_completed: string }) => void;
};

export default function VaccinationModal({ isOpen, onClose, onSubmit }: ModalProps) {
  const [vaccine_name, setName] = useState("");
  const [last_completed, setLastCompleted] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    onSubmit({ vaccine_name, last_completed });
    setName("");
    setLastCompleted("");
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 4,
          minWidth: 400,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <h2>Add Vaccination</h2>
        <label>
          Vaccine Name
          <input
            type="text"
            value={vaccine_name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Rabies"
          />
        </label>
        <label>
          Last Completed
          <input
            type="date"
            value={last_completed}
            onChange={(e) => setLastCompleted(e.target.value)}
            required
          />
        </label>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose} style={{ marginLeft: 10 }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}