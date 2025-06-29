import VaccinationListTable from "@/components/vaccinationListTable";
import Image from "next/image";

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

export default function Home() {

const vaccinations: VaccinationRecord[] = [
  {
    name: 'Rabies',
    status: 'completed',
    lastCompleted: '15/03/2025',
    dueDate: '15/03/2026',
  },
  {
    name: 'Leptospirosis',
    status: 'completed',
    lastCompleted: '10/10/2024',
    dueDate: '10/10/2025',
  },
  {
    name: 'Parvovirus',
    status: 'due soon',
    lastCompleted: '30/06/2024',
    dueDate: '30/06/2025',
  },
  {
    name: 'Kennel Cough',
    status: 'over due',
    lastCompleted: '',
    dueDate: '15/06/2025',
  },
];

 const columns: { header: string; accessor: keyof VaccinationRecord }[] = [
  { header: 'Vaccination', accessor: 'name' },
  { header: 'Status', accessor: 'status' },
  { header: 'Last Completed', accessor: 'lastCompleted' },
  { header: 'Due Date', accessor: 'dueDate' }
];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className= "">Bobby's vaccination</h1>
        <VaccinationListTable></VaccinationListTable>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
        </div>
      </main>
    </div>
  );
}
