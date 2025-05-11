import TableHead from "@/components/other-component/other-sub-component/table-head";
import TableBody from "@/components/other-component/other-sub-component/table-body";
import TableBodyChoose from "@/components/other-component/other-sub-component/table-body-choose";

export default function Table({ canChoose }: { canChoose: boolean }) {
  return (
    <>
      <div className="w-full overflow-x-auto pb-5">
        <div className="rounded-[30px] border-3 border-[#1952a6] p-5 pb-0 min-w-[800px]">
          <table className="w-full relative">
            {canChoose ? (
            <TableHead values={["No", "Time", "11-A", "11-B", "11-C"]}></TableHead>
            ) : (
            <TableHead values={["No", "Time", "Subject", "Teacher", "Class"]}></TableHead>
            )}
            {canChoose ? (
              <TableBodyChoose></TableBodyChoose>
            ) : (
              <TableBody
              values={[
                ["1", "07.00-08.30", "Mathematics", "Budi Santoso", "11-A"],
                ["2", "08.30-09.15", "Chemistry", "Sri Risnawati", "11-A"],
                ["3", "10.00-11.30", "Biology", "Dwi Tri Maharini", "11-A"],
                ["4", "12.15-13.45", "Physical Education", "Bambang Pamungkas", "11-A"],
                ["5", "13.45-14.30", "Indonesian", "Nita Nigroho", "11-A"],
                ["5", "14.30-15.15", "English", "Marlina Suriani", "11-A"],
              ]}
            ></TableBody>
            )}
          </table>
        </div>
      </div>
    </>
  );
}