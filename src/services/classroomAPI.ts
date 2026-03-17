import { apiRequest } from "./api-setup";

export function classroom_getAllClassroom() {
  return apiRequest<any>({
    method: "GET",
    endpoint: "/Classroom/all-classrooms",
  });
}

export function classroom_getAllClassroomDetails({ id }: { id: number }) {
  return apiRequest<any>({
    method: "GET",
    endpoint: `/Classroom/classroom-detail?id=${id}`,
  });
}

export interface CreateorUpdateClassroomReqDto {
  classroomName: string;
  capacity: number;
  forGrade: 1 | 2 | 3;
}
export function classroom_create(param: CreateorUpdateClassroomReqDto) {
  return apiRequest<any>({
    method: "POST",
    endpoint: `/Classroom/create`,
    param,
  });
}

export function classroom_update(
  id: number,
  param: CreateorUpdateClassroomReqDto
) {
  return apiRequest<any>({
    method: "PUT",
    endpoint: `/Classroom/update?id=${id}`,
    param,
  });
}

export function classroom_delete({ id }: { id: number }) {
  return apiRequest<any>({
    method: "DELETE",
    endpoint: `/Classroom/delete?id=${id}`,
  });
}
