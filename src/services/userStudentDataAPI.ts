import { apiRequest } from "./api-setup";

// USERS & STUDENT DATA

export function userStudentData_getAllPendingStudents() {
  return apiRequest<any>({
    method: "GET",
    endpoint: "/StudentData/all-pending-students",
  });
}

export function userStudentData_getAllActiveStudents() {
  return apiRequest<any>({
    method: "GET",
    endpoint: "/StudentData/all-active-students",
  });
}

export function userStudentData_getStudentDetails(param: string) {
  return apiRequest<any>({
    method: "GET",
    endpoint: `/StudentData/student-details/${param}`,
  });
}

export interface ApproveRejectReqDto {
  nisn: string;
  isApproved: boolean;
}
export function userStudentData_approveReject(param: ApproveRejectReqDto) {
  return apiRequest<any>({
    method: "POST",
    endpoint: `/User/approve-reject`,
    param,
  });
}

export function userStudentData_promoteDelete(param: string, nisn: string) {
  //param case: promote, demote, delete
  return apiRequest<any>({
    method: "POST",
    endpoint: `/StudentData/promote-demote-delete?nisn=${nisn}`,
    param,
  });
}

export interface AdminEditReqDto {
  fullname: string;
  email: string;
  password: string;
}
export function userStudentData_editAdminLogin(param: AdminEditReqDto) {
  return apiRequest<any>({
    method: "PUT",
    endpoint: "/User/edit-admin",
    param,
  });
}

export interface editLoginParamDto {
  email: string;
  password: string;
  profilePicture: File | null;
}
export async function userStudentData_editStudentLogin(
  param: editLoginParamDto,
  nisn: string
) {
  const formData = new FormData();
  if (param.email) formData.append("Email", param.email);
  if (param.password) formData.append("Password", param.password);
  if (param.profilePicture)
    formData.append("ProfilePicture", param.profilePicture);

  const response = await fetch(
    `https://localhost:44364/api/StudentData/edit-login/${nisn}`,
    {
      method: "PUT",
      body: formData,
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    const errorMessage = errorData.message || "Error";
    throw new Error(errorMessage);
  }

  return response.json();
}

export interface editGeneralParamDto {
  fullname: string;
  dateofBirth: string;
  phoneNumber: string;
  religion: number; //enum
  address: string;
  parentsName: string;
  parentsPhoneNumber: string;
}
export function userStudentData_editStudentGeneral(
  param: editGeneralParamDto,
  nisn: string
) {
  return apiRequest<any>({
    method: "PUT",
    endpoint: `/StudentData/edit-general/${nisn}`,
    param,
  });
}
