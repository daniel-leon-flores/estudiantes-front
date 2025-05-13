import { ResponseApi } from "@/kernel/types";
import { Student } from "../../entities/student";
import { SaveStudentDTO } from "../../entities/save-student";
import { UpdateStudentDTO } from "../../entities/update-student";

export interface StudentRepository {
  findAll(): Promise<ResponseApi<Student[]>>;
  findStudent(payload: string): Promise<ResponseApi<Student>>;
  saveStudent(payload: SaveStudentDTO): Promise<ResponseApi<Student>>;
  updateStudent(payload: UpdateStudentDTO): Promise<ResponseApi<Student>>;
  deleteStudent(payload: string): Promise<ResponseApi<Student>>;
}
