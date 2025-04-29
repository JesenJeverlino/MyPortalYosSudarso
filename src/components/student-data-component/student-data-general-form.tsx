import StudentDataInputField from "@/components/student-data-component/student-data-form-component/student-data-input-field";
import StudentDataDropdownField from "@/components/student-data-component/student-data-form-component/student-data-dropdown-field";
import StudentTextAreaField from "@/components/student-data-component/student-data-form-component/student-data-textarea-field";
import StudentDataEditSection from "@/components/student-data-component/student-data-form-component/student-data-edit-section";

export default function StudentDataGeneralForm(){
    return( 
        <>
        <div className="mt-20 w-[90%] flex">
            <div className="flex-4">
                <form action="">

                    <StudentDataInputField value="NISN" inputType="text" size="large"></StudentDataInputField>
                    <StudentDataInputField value="Full Name" inputType="text" size="large"></StudentDataInputField>

                    <div className="flex mb-7">
                    <StudentDataInputField value="Date of Birth" inputType="date" size="small"></StudentDataInputField>
                    <StudentDataInputField value="Phone Number" inputType="text" size="small"></StudentDataInputField>
                    </div>

                    <div className="flex mb-7">
                    <StudentDataDropdownField label="Grade" options={["10", "11", "12"]}></StudentDataDropdownField>
                    <StudentDataDropdownField label="Gender" options={["Male", "Female"]}></StudentDataDropdownField>
                    <StudentDataDropdownField label="Religion" options={["Islam","Kristen","Katolik","Hindu","Buddha","Konghucu"]}></StudentDataDropdownField>
                    </div>

                    <StudentTextAreaField label="Address"></StudentTextAreaField>
                    <StudentDataInputField value="Parent's Name" inputType="text" size="large"></StudentDataInputField>
                    <StudentDataInputField value="Parent's Phone Number" inputType="text" size="large"></StudentDataInputField>

                </form>
            </div>
            <div className="flex-1 flex flex-col items-end">
            <StudentDataEditSection value="General Information"></StudentDataEditSection>
            </div>
        </div>
        </>
    )
}