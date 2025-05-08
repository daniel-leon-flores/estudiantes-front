import {StudentRepository} from "@/modules/student/use-cases/ports/student.repository";
import {ResponseApi} from "@/kernel/types";
import {Student} from "@/modules/student/entities/student";
import { SaveStudentDTO } from "./dto/save-student";
import { UpdateStudentDTO } from "./dto/update-student";

export class StudentStorageGateway implements StudentRepository{
    getError(): ResponseApi<Student> {
        return {
            code: 500,
            error: true,
            message: 'INTERNAL ERROR SERVER'
        }as ResponseApi<Student>;
    }

    async findAll(): Promise<ResponseApi<Student>> {
        return await fetch('http://localhost:8080/api/students').then(data=>data.json())
            .then((entities)=>{
                return{
                    code: 200,
                    message: 'OK',
                    entities: entities,
                    count: entities.length
                } as ResponseApi<Student>;
            }).catch(()=>this.getError());
    }

    async findStudent(payload: string): Promise<ResponseApi<Student>>{
        return await fetch(`http://localhost:8080/api/students/${payload}`).then(data=>data.json())
            .then((entity)=>{
                return{
                    code:200,
                    error: false,
                    message:'OK',
                    entity: entity
                }as ResponseApi<Student>;
            }).catch(()=>this.getError());
    }

    async saveStudent(payload: SaveStudentDTO): Promise<ResponseApi<Student>> {
        return await fetch('http://localhost:8080/api/students',{
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type':'application/json'
            }

        }).then(data=>data.json()).then(() => {
            return {
                code: 200,
                error:false,
                message: "STUDENT UPDATED"
            } as ResponseApi<Student>;
        }).catch(()=>this.getError());
    }

    async deleteStudent(payload: string): Promise<ResponseApi<Student>> {
        return await fetch(`http://localhost:8080/api/students/${payload}`, {
            method: 'DELETE'
        }).then(data => data.json())
            .then(({entity}) => {
            return {
                code: 200,
                error: false,
                message: 'OK',
                entity: entity
            } as ResponseApi<Student>;
        }).catch(() => this.getError());
    }

    async updateStudent(payload: UpdateStudentDTO): Promise<ResponseApi<Student>> {
        return await fetch('http://localhost:8080/api/students', {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data=>data.json()).then(()=>{
            return {
                code: 200,
                error: false,
                message: "STUDENT UPDATED"
            } as ResponseApi<Student>;
        }).catch(()=>this.getError());
    }
}