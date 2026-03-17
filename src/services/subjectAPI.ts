import { apiRequest } from "./api-setup";

export function subject_getAllSubjects() {
  return apiRequest<any>({
    method: "GET",
    endpoint: "/Subject/all-subjects",
  });
}

export function subject_getAllSubjectDetails({ id }: { id: number }) {
  return apiRequest<any>({
    method: "GET",
    endpoint: `/Subject/subject-details?id=${id}`,
  });
}

export interface CreateorUpdateSubjectReqDto {
  subjectName: string;
  isMandatory: boolean;
  maxWeeklyHours: number; // Decimal in C# => number in TS
  forGrade: 1 | 2 | 3;
}

export function subject_create(param: CreateorUpdateSubjectReqDto) {
  return apiRequest<any>({
    method: "POST",
    endpoint: `/Subject/create`,
    param,
  });
}

export function subject_update(id: number, param: CreateorUpdateSubjectReqDto) {
  return apiRequest<any>({
    method: "PUT",
    endpoint: `/Subject/update?id=${id}`,
    param,
  });
}

export function subject_delete({ id }: { id: number }) {
  return apiRequest<any>({
    method: "DELETE",
    endpoint: `/Subject/delete?id=${id}`,
  });
}
