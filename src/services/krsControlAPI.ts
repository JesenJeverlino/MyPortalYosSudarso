import { apiRequest } from "./api-setup";

export function krsControl_getStatus() {
  return apiRequest<any>({
    method: "GET",
    endpoint: "/KrsControl/get-status",
  });
}

export function krsControl_updateStatus(param: boolean) {
  return apiRequest<any>({
    method: "PUT",
    endpoint: "/KrsControl/update-status",
    param,
  });
}
