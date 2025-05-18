import { apiRequest } from "./api-setup";

export interface AdminEditReqDto {
  fullname: string;
  email: string;
  password: string;
}

export function admin_edit(param: AdminEditReqDto) {
  return apiRequest<any>({ method: "PUT", endpoint: "/User/edit-admin", param });
}

export function admin_getAllPendingStudents() {
  return apiRequest<any>({ method: "GET", endpoint: "/StudentData/all-pending-students"});
}

export function admin_getAllActiveStudents() {
  return apiRequest<any>({ method: "GET", endpoint: "/StudentData/all-active-students"});
}

export function admin_getStudentDetails(param:string) {
  return apiRequest<any>({ method: "GET", endpoint: `/StudentData/student-details/${param}`});
}