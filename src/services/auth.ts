import { apiRequest } from "./api-setup";

export interface LoginReqDto {
  email: string;
  password: string;
}

export function auth_login(param: LoginReqDto) {
  return apiRequest<any>({ method: "POST", endpoint: "/User/login", param });
}
