import { UseCase } from "@/kernel/contact";
import { ResponseApi } from "@/kernel/types";
import { Student } from "../entities/student";
import { StudentRepository } from "./ports/student.repository";
import { GetStudentsDTO } from "../entities/get-students";

export class GetStudentsInteractor implements UseCase<GetStudentsDTO, ResponseApi<Student[]>>{
    constructor(private readonly studentRepository: StudentRepository){}
    
    execute(): Promise<ResponseApi<Student[]>> {
        return this.studentRepository.findAll();
    }
}