import Button from "@/components/other-component/button";

export default function StudentDataEditSection({ value }: { value: string }) {
  return (
    <>
      <p className="text-[#1952a6] font-bold text-[1.4rem] mb-3">{value}</p>
      <Button value="Edit" variant="square-yellow"></Button>
    </>
  );
}
