export enum StudentDataGender {
  Male = 1,
  Female = 2,
}

export enum StudentDataGrade {
  Grade10 = 1,
  Grade11 = 2,
  Grade12 = 3,
  Graduate = 4,
}

export enum StudentDataReligion {
  Islam = 1,
  Christian = 2,
  Catholic = 3,
  Buddhist = 4,
  Hindu = 5,
  Confucian = 6,
}

export type StudentDetails = {
  userId: number;
  status: string;
  fullname: string;
  email: string;
  password: string;
  nisn: string;
  dateofBirth: string;
  phoneNumber: string;
  grade: StudentDataGrade;
  gender: StudentDataGender;
  religion: StudentDataReligion;
  address: string;
  parentsName: string;
  parentsPhoneNumber: string;
  imagePath: string;
};