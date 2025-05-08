import { UseCase } from "@/kernel/contact";
import { ResponseApi } from "@/kernel/types";
import { Student } from "../entities/student";
import { StudentRepository } from "./ports/student.repository";
import { GetStudentsDTO } from "../adapters/dto/get-students";

export class GetStudentInteractor implements UseCase<GetStudentsDTO, ResponseApi<Student>>{
    constructor(private readonly studentRepository: StudentRepository){}
    
    execute(): Promise<ResponseApi<Student>> {
        return this.studentRepository.findAll();
    }
}