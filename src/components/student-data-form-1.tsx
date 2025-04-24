import Button from "@/components/button"

export default function StudentDataFormOne(){
    return(
        <>
        <div className="mt-20 w-[90%] flex">
            <div className="flex-4">
                <form action="">
                    <div className="flex flex-col mb-7">
                    <label className="m-4 text-[#1952a6] text-2xl font-bold">NISN</label>
                    <input type="text" className="bg-[#D0E1FA] h-[55px] w-[80%] pl-5 rounded-[30px]"/>
                    </div>
                    <div className="flex flex-col mb-7">
                    <label className="m-4 text-[#1952a6] text-2xl font-bold">NISN</label>
                    <input type="text" className="bg-[#D0E1FA] h-[55px] w-[80%] pl-5 rounded-[30px]"/>
                    </div>

                    <div className="flex mb-7">
                    <div className="flex flex-col flex-1">
                    <label className="m-4 text-[#1952a6] text-2xl font-bold">NISN</label>
                    <input type="text" className="bg-[#D0E1FA] h-[55px] w-[80%] pl-5 rounded-[30px]"/>
                    </div>
                    <div className="flex flex-col flex-1">
                    <label className="m-4 text-[#1952a6] text-2xl font-bold">NISN</label>
                    <input type="text" className="bg-[#D0E1FA] h-[55px] w-[80%] pl-5 rounded-[30px]"/>
                    </div>
                    </div>

                    <div className="flex mb-7">
                    <div className="flex flex-col flex-1">
                    <label className="m-4 text-[#1952a6] text-2xl font-bold">NISN</label>
                    <input type="text" className="bg-[#D0E1FA] h-[55px] w-[60%] pl-5 rounded-[30px]"/>
                    </div>
                    <div className="flex flex-col flex-1">
                    <label className="m-4 text-[#1952a6] text-2xl font-bold">NISN</label>
                    <input type="text" className="bg-[#D0E1FA] h-[55px] w-[60%] pl-5 rounded-[30px]"/>
                    </div>
                    <div className="flex flex-col flex-1">
                    <label className="m-4 text-[#1952a6] text-2xl font-bold">NISN</label>
                    <input type="text" className="bg-[#D0E1FA] h-[55px] w-[60%] pl-5 rounded-[30px]"/>
                    </div>
                    </div>

                    <div className="flex flex-col mb-7">
                    <label className="m-4 text-[#1952a6] text-2xl font-bold">NISN</label>
                    <input type="text" className="bg-[#D0E1FA] h-[55px] w-[90%] pl-5 rounded-[30px]"/>
                    </div>
                    <div className="flex flex-col mb-7">
                    <label className="m-4 text-[#1952a6] text-2xl font-bold">NISN</label>
                    <input type="text" className="bg-[#D0E1FA] h-[55px] w-[80%] pl-5 rounded-[30px]"/>
                    </div>
                    <div className="flex flex-col mb-7">
                    <label className="m-4 text-[#1952a6] text-2xl font-bold">NISN</label>
                    <input type="text" className="bg-[#D0E1FA] h-[55px] w-[80%] pl-5 rounded-[30px]"/>
                    </div>
                </form>
            </div>
            <div className="flex-1 flex flex-col items-end">
                <h1 className="text-[#1952a6] font-bold text-[1.4rem] mb-3">General Information</h1>
                <Button value="Edit" variant="square-yellow"></Button>
            </div>
        </div>
        </>
    )
}