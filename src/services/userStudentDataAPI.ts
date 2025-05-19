import { apiRequest } from "./api-setup";


// USERS & STUDENT DATA

export function userStudentData_getAllPendingStudents() {
  return apiRequest<any>({ method: "GET", endpoint: "/StudentData/all-pending-students"});
}

export function userStudentData_getAllActiveStudents() {
  return apiRequest<any>({ method: "GET", endpoint: "/StudentData/all-active-students"});
}

export function userStudentData_getStudentDetails(param:string) {
  return apiRequest<any>({ method: "GET", endpoint: `/StudentData/student-details/${param}`});
}

export interface ApproveRejectReqDto {
  nisn: string;
  isApproved: boolean;
}

export function userStudentData_approveReject(param:ApproveRejectReqDto) {
  return apiRequest<any>({ method: "POST", endpoint: `/User/approve-reject`, param});
}

export interface AdminEditReqDto {
  fullname: string;
  email: string;
  password: string;
}

export function userStudentData_editAdminLogin(param: AdminEditReqDto) {
  return apiRequest<any>({ method: "PUT", endpoint: "/User/edit-admin", param });
}

// export interface editLoginParamDto {
//   password: string;
//   profilePicture: File | null;
// }

// export function userStudentData_editStudentLogin(param:editLoginParamDto) {
//   return apiRequest<any>({ method: "POST", endpoint: `/StudentData/edit-login`, param});
// }