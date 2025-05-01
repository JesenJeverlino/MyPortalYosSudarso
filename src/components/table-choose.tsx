import Button from "./other-component/button";

export default function TableChoose() {
  return (
    <>
      <div className="mt-20 w-[90%]">
        <h1 className="text-[#1952a6] font-bold text-[1.4rem] mb-3">
          Your Monday Subjects Selection
        </h1>
        <div className="w-full rounded-[30px] border-3 border-[#1952a6] p-5">
          <table className="w-full relative">
            <thead>
              <th className="font-light">No</th>
              <th className="font-light">Time</th>
              <th className="font-light">11-A</th>
              <th className="font-light">11-B</th>
              <th className="font-light">11-C</th>
            </thead>
            <tbody className="text-center font-medium">
              <hr className="border border-[#5398ff] w-[100%] absolute left-1/2 -translate-x-1/2 top-8" />
              <tr>
                <td className="pt-5 pb-5">1</td>
                <td className="pt-5 pb-5">07.00-08.30</td>
                <td className="pt-5 pb-5">
                  <input type="checkbox" className="mr-2" />
                  <p className="mr-1 inline">Mathematics</p>
                  <p className="text-xs font-extralight inline"> (14/60)</p>
                </td>
                <td className="pt-5 pb-5">
                  <input type="checkbox" className="mr-2" />
                  <p className="mr-1 inline">Mathematics</p>
                  <p className="text-xs font-extralight inline"> (14/60)</p>
                </td>
                <td className="pt-5 pb-5">
                  <input type="checkbox" className="mr-2" />
                  <p className="mr-1 inline">Mathematics</p>
                  <p className="text-xs font-extralight inline"> (14/60)</p>
                </td>
              </tr>
              <hr className="border border-[#5398ff] w-[100%] absolute left-1/2 -translate-x-1/2" />
              <tr>
                <td className="pt-5 pb-5">1</td>
                <td className="pt-5 pb-5">07.00-08.30</td>
                <td className="pt-5 pb-5">
                  <input type="checkbox" className="mr-2" />
                  <p className="mr-1 inline">Mathematics</p>
                  <p className="text-xs font-extralight inline"> (14/60)</p>
                </td>
                <td className="pt-5 pb-5">
                  <input type="checkbox" className="mr-2" />
                  <p className="mr-1 inline">Mathematics</p>
                  <p className="text-xs font-extralight inline"> (14/60)</p>
                </td>
                <td className="pt-5 pb-5">
                  <input type="checkbox" className="mr-2" />
                  <p className="mr-1 inline">Mathematics</p>
                  <p className="text-xs font-extralight inline"> (14/60)</p>
                </td>
              </tr>
              <hr className="border border-[#5398ff] w-[100%] absolute left-1/2 -translate-x-1/2" />
              <tr>
                <td className="pt-5 pb-5">1</td>
                <td className="pt-5 pb-5">07.00-08.30</td>
                <td className="pt-5 pb-5">
                  <input type="checkbox" className="mr-2" />
                  <p className="mr-1 inline">Mathematics</p>
                  <p className="text-xs font-extralight inline"> (14/60)</p>
                </td>
                <td className="pt-5 pb-5">
                  <input type="checkbox" className="mr-2" />
                  <p className="mr-1 inline">Mathematics</p>
                  <p className="text-xs font-extralight inline"> (14/60)</p>
                </td>
                <td className="pt-5 pb-5">
                  <input type="checkbox" className="mr-2" />
                  <p className="mr-1 inline">Mathematics</p>
                  <p className="text-xs font-extralight inline"> (14/60)</p>
                </td>
              </tr>
              <hr className="border border-[#5398ff] w-[100%] absolute left-1/2 -translate-x-1/2" />
              <tr>
                <td className="pt-5 pb-5">1</td>
                <td className="pt-5 pb-5">07.00-08.30</td>
                <td className="pt-5 pb-5">
                  <input type="checkbox" className="mr-2" />
                  <p className="mr-1 inline">Mathematics</p>
                  <p className="text-xs font-extralight inline"> (14/60)</p>
                </td>
                <td className="pt-5 pb-5">
                  <input type="checkbox" className="mr-2" />
                  <p className="mr-1 inline">Mathematics</p>
                  <p className="text-xs font-extralight inline"> (14/60)</p>
                </td>
                <td className="pt-5 pb-5">
                  <input type="checkbox" className="mr-2" />
                  <p className="mr-1 inline">Mathematics</p>
                  <p className="text-xs font-extralight inline"> (14/60)</p>
                </td>
              </tr>
              <hr className="border border-[#5398ff] w-[100%] absolute left-1/2 -translate-x-1/2" />
              <tr>
                <td className="pt-5 pb-5">1</td>
                <td className="pt-5 pb-5">07.00-08.30</td>
                <td className="pt-5 pb-5">
                  <input type="checkbox" className="mr-2" />
                  <p className="mr-1 inline">Mathematics</p>
                  <p className="text-xs font-extralight inline"> (14/60)</p>
                </td>
                <td className="pt-5 pb-5">
                  <input type="checkbox" className="mr-2" />
                  <p className="mr-1 inline">Mathematics</p>
                  <p className="text-xs font-extralight inline"> (14/60)</p>
                </td>
                <td className="pt-5 pb-5">
                  <input type="checkbox" className="mr-2" />
                  <p className="mr-1 inline">Mathematics</p>
                  <p className="text-xs font-extralight inline"> (14/60)</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 flex justify-end">
        <Button variant="square-blue" value="OK"></Button>
        </div>
      </div>
    </>
  );
}
