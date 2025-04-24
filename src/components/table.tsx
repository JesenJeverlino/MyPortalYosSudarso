export default function Table() {
  return (
    <>
      <div className="mt-20 w-[90%]">
        <h1 className="text-[#1952a6] font-bold text-[1.4rem] mb-3">Monday's Schedule</h1>
        <div className="w-full rounded-[30px] border-3 border-[#1952a6] p-5">
        <table className="w-full relative">
            <thead>
                <th className="font-light">No</th>
                <th className="font-light">Time</th>
                <th className="font-light">Subject</th>
                <th className="font-light">Teacher</th>
                <th className="font-light">Class</th>
            </thead>
            <tbody className="text-center font-medium">
            <hr className="border border-[#5398ff] w-[100%] absolute left-1/2 -translate-x-1/2 top-8"/>
                <tr>
                    <td className="pt-5 pb-5">1</td>
                    <td className="pt-5 pb-5">07.00-08.30</td>
                    <td className="pt-5 pb-5">Mathematics</td>
                    <td className="pt-5 pb-5">Budi Santoso</td>
                    <td className="pt-5 pb-5">10-A</td>
                </tr>
                <hr className="border border-[#5398ff] w-[100%] absolute left-1/2 -translate-x-1/2"/>
                <tr>
                    <td className="pt-5 pb-5">1</td>
                    <td className="pt-5 pb-5">07.00-08.30</td>
                    <td className="pt-5 pb-5">Mathematics</td>
                    <td className="pt-5 pb-5">Budi Santoso</td>
                    <td className="pt-5 pb-5">10-A</td>
                </tr>
                <hr className="border border-[#5398ff] w-[100%] absolute left-1/2 -translate-x-1/2"/>
                <tr>
                    <td className="pt-5 pb-5">1</td>
                    <td className="pt-5 pb-5">07.00-08.30</td>
                    <td className="pt-5 pb-5">Mathematics</td>
                    <td className="pt-5 pb-5">Budi Santoso</td>
                    <td className="pt-5 pb-5">10-A</td>
                </tr>
                <hr className="border border-[#5398ff] w-[100%] absolute left-1/2 -translate-x-1/2"/>
                <tr>
                    <td className="pt-5 pb-5">1</td>
                    <td className="pt-5 pb-5">07.00-08.30</td>
                    <td className="pt-5 pb-5">Mathematics</td>
                    <td className="pt-5 pb-5">Budi Santoso</td>
                    <td className="pt-5 pb-5">10-A</td>
                </tr>
                <hr className="border border-[#5398ff] w-[100%] absolute left-1/2 -translate-x-1/2"/>
                <tr>
                    <td className="pt-5 pb-5">1</td>
                    <td className="pt-5 pb-5">07.00-08.30</td>
                    <td className="pt-5 pb-5">Mathematics</td>
                    <td className="pt-5 pb-5">Budi Santoso</td>
                    <td className="pt-5 pb-5">10-A</td>
                </tr>
            </tbody>
        </table>
        </div>
      </div>
    </>
  );
}
