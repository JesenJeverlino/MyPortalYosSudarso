import Button from "@/components/other-component/button";

export default function StudentDataEditSection({ value }: { value: string }) {
  return (
    <>
      <div className="md:block flex gap-5">
        <p className="text-[#1952a6] font-bold md:text-[1.4rem] text-[1.2rem] mb-3 md:block inline-block">
          {value}
        </p>
        <Button value="Edit" variant="square-yellow"></Button>
      </div>
    </>
  );
}
