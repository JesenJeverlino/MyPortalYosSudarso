import { apiRequest } from "./api-setup";

export interface LoginReqDto {
  email: string;
  password: string;
}

export function auth_login(param: LoginReqDto) {
  return apiRequest<any>({ method: "POST", endpoint: "/User/login", param });
}

export interface RegisterReqDto {
  nisn: string;
  fullName: string;
  dateOfBirth: string;
  phoneNumber: string;
  grade: number;
  gender: number;
  religion: number;
  address: string;
  parentsName: string;
  parentsPhoneNumber: string;
  email: string;
  password: string;
}

export function auth_register(param: RegisterReqDto) {
  return apiRequest<any>({ method: "POST", endpoint: "/User/register", param });
}
