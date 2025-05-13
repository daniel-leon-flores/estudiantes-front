import { UseCase } from "@/kernel/contact";
import { UpdateStudentDTO } from "../entities/update-student";
import { ResponseApi } from "@/kernel/types";
import { Student } from "../entities/student";
import { StudentRepository } from "./ports/student.repository";

export class UpdateStudentInteractor implements UseCase<UpdateStudentDTO, ResponseApi<Student>>{
    constructor(private readonly studentRepository: StudentRepository){}
    
    execute(payload: UpdateStudentDTO): Promise<ResponseApi<Student>> {
        return this.studentRepository.updateStudent(payload);
    }
}