import InputField from "@/components/form-component/input-field";
import AttachImgField from "@/components/form-component/attach-img-field";
import StudentDataEditSection from "@/components/student-data-component/student-data-form-component/student-data-edit-section";
import { StudentDetails } from "@/other/IStudentDetails";
import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";

interface Props {
  defaultValues: StudentDetails;
  // onUpdated: (newData: StudentDetails) => void;
}

export default function StudentDataAuthForm({ defaultValues }: Props) {
  console.log(defaultValues);
  // const [loading, setLoading] = useState(false);
  // const [isEdit, setIsEdit] = useState(false);
  // const methods = useForm({
  //   defaultValues: {
  //     Password: defaultValues.password,
  //     ProfilePicture: defaultValues.imagePath,
  //   },
  // });

  return (
    <>
      <div className="mt-20 w-[90%] flex md:flex-row flex-col-reverse">
        <div className="flex-4">
          {/* <FormProvider {...methods}> */}
            <form action="">
              <InputField
                disabled={true}
                label="Email"
                inputType="email"
                size="large"
                value={defaultValues.email}
              ></InputField>
              <InputField
                name="password"
                // disabled={!isEdit}
                label="Password"
                inputType="password"
                size="large"
              ></InputField>
              <AttachImgField
                src={
                  defaultValues.imagePath
                    ? `https://localhost:44364/${defaultValues.imagePath}`
                    : "/default.jpg"
                }
              ></AttachImgField>
            </form>
          {/* </FormProvider> */}
        </div>
        <div className="flex-1 flex flex-col items-end">
          <StudentDataEditSection value="Login Information"></StudentDataEditSection>
        </div>
      </div>
    </>
  );
}
