import TableHead from "@/components/other-component/other-sub-component/table-head";
import TableBody from "@/components/other-component/other-sub-component/table-body";
import TableBodyChoose from "@/components/other-component/other-sub-component/table-body-choose";

export default function Table({
  canChoose,
  selectedDay,
  nisn,
}: {
  canChoose: boolean;
  selectedDay: number;
  nisn:string;
}) {
  return (
    <>
      {canChoose ? (
        <>
          <TableBodyChoose selectedDay={selectedDay}></TableBodyChoose>
        </>
      ) : (
        <>
          <div className="w-full overflow-x-auto pb-5">
            <div className="rounded-[30px] border-3 border-[#1952a6] p-5 pb-0 min-w-[800px]">
              <table className="w-full relative">
                <TableHead
                  values={["No", "Time", "Subject", "Teacher", "Class"]}
                ></TableHead>
                <TableBody
                  selectedDay={selectedDay}
                  nisn={nisn}
                ></TableBody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
}
