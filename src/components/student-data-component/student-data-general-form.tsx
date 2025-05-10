import InputField from "@/components/form-component/input-field";
import DropdownField from "@/components/form-component/dropdown-field";
import TextAreaField from "@/components/form-component/textarea-field";
import StudentDataEditSection from "@/components/student-data-component/student-data-form-component/student-data-edit-section";

export default function StudentDataGeneralForm(){
    return( 
        <>
        <div className="mt-20 w-[90%] flex md:flex-row flex-col-reverse">
            <div className="flex-4">
                <form action="">

                    <InputField value="NISN" inputType="text" size="large"></InputField>
                    <InputField value="Full Name" inputType="text" size="large"></InputField>

                    <div className="flex mb-7 sm:flex-row flex-col sm:gap-0 gap-5">
                    <InputField value="Date of Birth" inputType="date" size="small"></InputField>
                    <InputField value="Phone Number" inputType="text" size="small"></InputField>
                    </div>

                    <div className="flex mb-7 sm:flex-row flex-col sm:gap-0 gap-5">
                    <DropdownField label="Grade" options={["10", "11", "12"]}></DropdownField>
                    <DropdownField label="Gender" options={["Male", "Female"]}></DropdownField>
                    <DropdownField label="Religion" options={["Islam","Kristen","Katolik","Hindu","Buddha","Konghucu"]}></DropdownField>
                    </div>

                    <TextAreaField label="Address"></TextAreaField>
                    <InputField value="Parent's Name" inputType="text" size="large"></InputField>
                    <InputField value="Parent's Phone Number" inputType="text" size="large"></InputField>

                </form>
            </div>
            <div className="flex-1 flex flex-col items-end">
            <StudentDataEditSection value="General Information"></StudentDataEditSection>
            </div>
        </div>
        </>
    )
}