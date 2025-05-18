import { apiRequest } from "./api-setup";

export interface AdminEditReqDto {
  fullname: string;
  email: string;
  password: string;
}

export function admin_edit(param: AdminEditReqDto) {
  return apiRequest<any>({ method: "PUT", endpoint: "/User/edit-admin", param });
}