import Button from '@/components/button'

export default function RegisterForm(){
    return(
        <>
        <form className="mx-auto max-w-[80%]">
            <label className="m-3 text-white text-xl block font-medium">NISN</label>
            <input type="text" className="bg-[#e8e8e8] w-[55%] h-[40px] mb-7 pl-4"/>
            <label className="m-3 text-white text-xl block font-medium">Full Name</label>
            <input type="text" className="bg-[#e8e8e8] w-[55%] h-[40px] mb-7  pl-4"/>
            
            <div className="flex flex-wrap gap-6 mb-7">
            <div className="flex flex-col w-[29%]">
                <label className="m-3 text-white text-xl font-medium mb-2">Date of Birth</label>
                <input type="text" className="bg-[#e8e8e8] h-[40px] pl-4" />
            </div>
            <div className="flex flex-col w-[29%]">
                <label className="m-3 text-white text-xl font-medium mb-2">Phone Number</label>
                <input type="text" className="bg-[#e8e8e8] h-[40px] pl-4" />
            </div>
            </div>

            <div className="flex flex-wrap gap-6 mb-7">
            <div className="flex flex-col w-[18%]">
                <label className="m-3 text-white text-xl font-medium mb-2">Date of Birth</label>
                <input type="text" className="bg-[#e8e8e8] h-[40px] pl-4" />
            </div>
            <div className="flex flex-col w-[18%]">
                <label className="m-3 text-white text-xl font-medium mb-2">Phone Number</label>
                <input type="text" className="bg-[#e8e8e8] h-[40px] pl-4" />
            </div>
            <div className="flex flex-col w-[18%]">
                <label className="m-3 text-white text-xl font-medium mb-2">Phone Number</label>
                <input type="text" className="bg-[#e8e8e8] h-[40px] pl-4" />
            </div>
            </div>

            <label className="m-3 text-white text-xl block font-medium">Address</label>
            <input type="text" className="bg-[#e8e8e8] w-[55%] h-[40px] mb-7 pl-4"/>
            <label className="m-3 text-white text-xl block font-medium">Parent's Name</label>
            <input type="text" className="bg-[#e8e8e8] w-[55%] h-[40px] mb-7 pl-4"/>
            <label className="m-3 text-white text-xl block font-medium">Parent's Phone Number</label>
            <input type="text" className="bg-[#e8e8e8] w-[55%] h-[40px] mb-7 pl-4"/>
            <label className="m-3 text-white text-xl block font-medium">Email</label>
            <input type="text" className="bg-[#e8e8e8] w-[55%] h-[40px] mb-7 pl-4"/>
            <label className="m-3 text-white text-xl block font-medium">Password</label>
            <input type="text" className="bg-[#e8e8e8] w-[55%] h-[40px] mb-7 pl-4"/>
            <br></br>
            <Button value='OK' variant='square-blue'></Button>
            <h1>tinggal atur button ke kanan, lalu atur type dari form, formatting pake prettier, lalu cek ulang semua file import sebenarnya gosah ; , then done</h1>
        </form>


        </>
    )
}