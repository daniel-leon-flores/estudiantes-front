import { UseCase } from "@/kernel/contact";
import { SaveStudentDTO } from "../entities/save-student";
import { ResponseApi } from "@/kernel/types";
import { Student } from "../entities/student";
import { StudentRepository } from "./ports/student.repository";

export class SaveStudentInteractor implements UseCase<SaveStudentDTO, ResponseApi<Student>>{
    constructor(private readonly studentRepository: StudentRepository){}
    execute(payload: SaveStudentDTO): Promise<ResponseApi<Student>> {
        return this.studentRepository.saveStudent(payload);
    }
}