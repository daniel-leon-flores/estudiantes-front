import { UseCase } from "@/kernel/contact";
import { UpdateStudentDTO } from "../adapters/dto/update-student";
import { ResponseApi } from "@/kernel/types";
import { Student } from "../entities/student";
import { StudentRepository } from "./ports/student.repository";

export class SaveStudentInteractor implements UseCase<UpdateStudentDTO, ResponseApi<Student>>{
    constructor(private readonly studentRepository: StudentRepository){}
    
    execute(payload: UpdateStudentDTO): Promise<ResponseApi<Student>> {
        return this.studentRepository.updateStudent(payload);
    }
}