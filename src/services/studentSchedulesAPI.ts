import { apiRequest } from "./api-setup";

export function studentSchedules_getStudentSchedulesByNISN(nisn: string) {
  return apiRequest<any>({
    method: "GET",
    endpoint: `/StudentSchedule/get-student-schedules-by-nisn/${nisn}`,
  });
}

export function studentSchedules_autoAssign(param: string) {
  return apiRequest<any>({
    method: "POST",
    endpoint: `/StudentSchedule/auto-assign`,
    param,
  });
}

export function studentSchedules_getStudentSchedulesByschedulesId(id: Number) {
  return apiRequest<any>({
    method: "GET",
    endpoint: `/StudentSchedule/get-student-schedules-by-scheduleid/${id}`,
  });
}

export interface selectSchedules {
  nisn: string;
  scheduleId: number;
}
export function studentSchedules_selectSchedules(param: selectSchedules[]) {
  return apiRequest<any>({
    method: "POST",
    endpoint: `/StudentSchedule/select-schedule`,
    param,
  });
}
