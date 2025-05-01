 // NANTI KALAU UDH ADA BACKEND BARU PIKIRIN GIMANA CARA LOOPING! TERGANTUNG RESPONSE BACKEND
 // INGAT <HR> PERTAMA ADA TOP-8

export default function TableBodyChoose() {
  return ( 
    <>
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
      </tbody>
    </>
  );
}