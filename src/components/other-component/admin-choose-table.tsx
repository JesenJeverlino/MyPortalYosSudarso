import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type RowData = {
  startTime: string;
  endTime: string;
  subject: string;
  teacher: string;
  class: string;
};

export default function AdminChooseTable() {
  const [rows, setRows] = useState<RowData[]>([
    { startTime: "", endTime: "", subject: "", teacher: "", class: "" },
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      { startTime: "", endTime: "", subject: "", teacher: "", class: "" },
    ]);
  };

  const removeRow = (index: number) => {
    const newRows = rows.filter((_, i) => i !== index);
    setRows(newRows);
  };

  const updateRow = (index: number, key: keyof RowData, value: string) => {
    const newRows = [...rows];
    newRows[index][key] = value;
    setRows(newRows);
  };

  return (
    <>
      <tbody className="text-center font-medium">
        <hr className="border border-[#5398ff] w-[100%] absolute left-1/2 -translate-x-1/2 top-8" />
        {rows.map((row, index) => (
          <tr key={index} className="border-b-2 border-[#5398ff]">
            <td className="pt-5 pb-5">{index + 1}</td>
            <td className="pt-5 pb-5">
              <div className="flex justify-center items-center gap-2">
                <input
                  type="time"
                  value={row.startTime}
                  onChange={(e) =>
                    updateRow(index, "startTime", e.target.value)
                  }
                  className="border rounded border-[#5398ff]"
                />
                <span className="text-sm">to</span>
                <input
                  type="time"
                  value={row.endTime}
                  onChange={(e) => updateRow(index, "endTime", e.target.value)}
                  className="border rounded border-[#5398ff]"
                />
              </div>
            </td>

            <td className="pt-5 pb-5">
              <input
                type="text"
                value={row.subject}
                onChange={(e) => updateRow(index, "subject", e.target.value)}
                className="pl-1 border rounded border-[#5398ff]"
                placeholder="type here..."
              />
            </td>
            <td className="pt-5 pb-5">
              <input
                type="text"
                value={row.teacher}
                onChange={(e) => updateRow(index, "teacher", e.target.value)}
                className="pl-1 border rounded border-[#5398ff]"
                placeholder="type here..."
              />
            </td>
            <td className="pt-5 pb-5">
              <input
                type="text"
                value={row.class}
                onChange={(e) => updateRow(index, "class", e.target.value)}
                className="pl-1 border rounded border-[#5398ff]"
                placeholder="type here..."
              />
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan={6}>
            <div className="flex justify-end gap-4 py-4">
              {rows.length > 1 && (
                <button
                  onClick={() => removeRow(rows.length - 1)}
                  className="flex items-center gap-1 text-red-600 border border-red-600 px-3 py-1 rounded hover:bg-red-100"
                >
                  <Minus size={16} />
                  Remove
                </button>
              )}
              <button
                onClick={addRow}
                className="flex items-center gap-1 text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-100"
              >
                <Plus size={16} />
                Add
              </button>
              <button className="flex items-center gap-1 text-white bg-[#1952a6] px-4 py-1.5 rounded hover:bg-blue-800">
                Save
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </>
  );
}
