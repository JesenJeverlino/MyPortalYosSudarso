 // NANTI KALAU UDH ADA BACKEND BARU PIKIRIN GIMANA CARA LOOPING! TERGANTUNG RESPONSE BACKEND
 // INGAT <HR> PERTAMA ADA TOP-8

 import { useState } from "react";

export default function TableBodyChoose() {

 const scheduleData = [
    {
      time: "07.00–08.30",
      subjects: [
        { label: "Mathematics", info: "(14/60)" },
        { label: "Physics", info: "(10/60)" },
        { label: "Chemistry", info: "(12/60)" },
      ],
    },
    {
      time: "08.30–10.00",
      subjects: [
        { label: "Biology", info: "(8/60)" },
        { label: "History", info: "(6/60)" },
        { label: "Geography", info: "(5/60)" },
      ],
    },
  ];


const [activeIndices, setActiveIndices] = useState<(number | null)[]>(() =>
  scheduleData.map(() => null)
);

  const handleChange = (rowIndex: number, subjectIndex: number) => {
    setActiveIndices(prev =>
      prev.map((val, idx) =>
        idx === rowIndex ? (val === subjectIndex ? null : subjectIndex) : val
      )
    );
  };

  return ( 
    <>
      <tbody className="text-center font-medium">
        <hr className="border border-[#5398ff] w-[100%] absolute left-1/2 -translate-x-1/2 top-8" />
        {scheduleData.map((row, rowIndex) => (
        <tr>
          <td className="pt-5 pb-5">{rowIndex + 1}</td>
          <td className="pt-5 pb-5">{row.time}</td>
          {row.subjects.map((subject, subjectIndex) => (
          <td  key={subjectIndex} className="pt-5 pb-5">
            <input type="checkbox" className="mr-2" checked={activeIndices[rowIndex] === subjectIndex} onChange={() => handleChange(rowIndex, subjectIndex)}/>
            <p className="mr-1 inline">{subject.label}</p>
            <p className="text-xs font-extralight inline">{subject.info}</p>
          </td>
          ))}
        </tr>
        ))}
        <hr className="border border-[#5398ff] w-[100%] absolute left-1/2 -translate-x-1/2" />
      </tbody>
    </>
  );
}