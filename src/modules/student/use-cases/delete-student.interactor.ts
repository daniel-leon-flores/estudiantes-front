import { UseCase } from "@/kernel/contact";
import { ResponseApi } from "@/kernel/types";
import { Student } from "../entities/student";
import {StudentRepository} from "./ports/student.repository";

export class DeleteStudentInteractor implements UseCase<string, ResponseApi<Student>> {
    constructor(private readonly studentRepository: StudentRepository){}
    
    execute(payload: string): Promise<ResponseApi<Student>> {
        return this.studentRepository.deleteStudent(payload);
    }
}