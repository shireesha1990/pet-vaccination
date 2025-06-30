'use client';
import { useState } from 'react';
import { Calendar , XCircle, CheckCircle } from 'lucide-react'
import vaccinations from '@/data/vaccinations.json';

type VaccinationStatus = 'completed' | 'due soon' | 'over due';

type VaccinationRecord = {
  name: string;
  status: VaccinationStatus;
  lastCompleted: string | null;
  dueDate: string;
};

const statusStyles: Record<VaccinationStatus, string> = {
  completed: 'bg-green-100 text-green-700',
  'due soon': 'bg-orange-100 text-orange-700',
  'over due': 'bg-red-100 text-red-700',
};


export default function VaccinationListTable() {
  const [editing, setEditing] = useState<number | null>(null);

  return (
    <div className="p-6 bg-peach-50 text-[#2F403D] font-sans">
      <table className="w-full text-left border-collapse rounded-xl overflow-hidden">
        <thead className="bg-peach-100 text-[#256B74] border-b">
          <tr>
            <th className="px-4 py-3">Vaccination</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Last Completed</th>
            <th className="px-4 py-3">Due Date</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {(vaccinations as VaccinationRecord[]).map((vaccine: VaccinationRecord, idx: number) => (
            <tr key={idx} className="bg-peach-50">
              <td className="px-4 py-3">{vaccine.name}</td>
              <td className="px-4 py-3">
                <span className={`px-3 py-1 text-sm rounded-full inline-flex items-center gap-1 ${statusStyles[vaccine.status]}`}>
                  {vaccine.status === 'completed' && '✓'} {vaccine.status}
                </span>
              </td>
              <td className="px-4 py-3">{vaccine.lastCompleted || '-'}</td>
              <td className="px-4 py-3">{vaccine.dueDate}</td>
              <td className="px-4 py-3">
                {vaccine.status === 'due soon' ? (
                  <button className="bg-[#256B74] text-white text-sm px-4 py-2 rounded-full">
                    MARK COMPLETE
                  </button>
                ) : vaccine.status === 'over due' ? (
                  editing === idx ? (
                    <div className="flex items-center gap-2">
                      <input
                        type="date"
                        className="border rounded px-2 py-1 text-sm"
                        defaultValue="2025-06-19"
                      />
                      <button>
                        <Calendar className="w-5 h-5" />
                      </button>
                      <button onClick={() => setEditing(null)}>
                        <XCircle className="w-4 h-4" />    
                      </button>
                      <button>
                        <CheckCircle className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setEditing(idx)}
                      className="text-sm text-[##256B74] underline"
                    >
                      Set Date
                    </button>
                  )
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
