import { apiRequest } from "./api-setup";

export function schedule_getAllScheduleByClassroomId(classroomId: number) {
  return apiRequest<any>({
    method: "GET",
    endpoint: `/Schedule/schedule-by-classroom?classroomId=${classroomId}`,
  });
}

export function schedule_getAllSchedule() {
  return apiRequest<any>({
    method: "GET",
    endpoint: `/Schedule/all`,
  });
}
export function schedule_getAllScheduleByGrade(grade: number) {
  return apiRequest<any>({
    method: "GET",
    endpoint: `/Schedule/schedule-by-grade?grade=${grade}`,
  });
}

export interface syncScheduleDto {
  scheduleId: number;
  startTime: string;
  endTime: string;
  dayofWeek: number;
  teacherName: string;
  subjectId: number;
  classroomId: number;
}
export function schedule_sync(param: syncScheduleDto[]) {
  return apiRequest<any>({
    method: "POST",
    endpoint: `/Schedule/sync`,
    param,
  });
}