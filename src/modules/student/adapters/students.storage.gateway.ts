import {StudentRepository} from "@/modules/student/use-cases/ports/student.repository";
import {ResponseApi} from "@/kernel/types";
import {Student} from "@/modules/student/entities/student";
import { SaveStudentDTO } from "../entities/save-student";
import { UpdateStudentDTO } from "../entities/update-student";
import {handleRequest} from "@/config/http-client.gateway";

export class StudentStorageGateway implements StudentRepository{
    findAll(): Promise<ResponseApi<Student[]>>{
        return handleRequest<Student[]>('get', '/students');
    }

    async findStudent(payload: string): Promise<ResponseApi<Student>> {
        return handleRequest<Student>('get', `/students/${payload}`);
    }

    async saveStudent(payload: SaveStudentDTO): Promise<ResponseApi<Student>> {
        return handleRequest<Student, SaveStudentDTO>('post', '/students', payload);
    }

    async updateStudent(payload: UpdateStudentDTO): Promise<ResponseApi<Student>> {
        return handleRequest<Student, UpdateStudentDTO>('put', '/students', payload);
    }

    async deleteStudent(payload: string): Promise<ResponseApi<Student>> {
        return handleRequest<Student>('delete', `/students/${payload}`);
    }

}