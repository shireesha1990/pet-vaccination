import PetHeader from "@/components/petHeader";
import VaccinationListTable from "@/components/vaccinationListTable";

export default function Home() {
  return (
    <div className="grid  items-center justify-items-center p-6 font-[family-name:var(--font-geist-sans)]">
      <main>
        <PetHeader></PetHeader>
        <VaccinationListTable></VaccinationListTable>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
        </div>
      </main>
    </div>
  );
}
