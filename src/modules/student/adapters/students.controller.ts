import {StudentRepository} from "@/modules/student/use-cases/ports/student.repository";
import {GetStudentsInteractor} from "@/modules/student/use-cases/get-students.interactor";
import {ResponseApi} from "@/kernel/types";
import {Student} from "@/modules/student/entities/student";
import {StudentStorageGateway} from "@/modules/student/adapters/students.storage.gateway";
import {GetStudentInteractor} from "@/modules/student/use-cases/get-student.interactor";
import {SaveStudentDTO} from "@/modules/student/adapters/dto/save-student";
import {SaveStudentInteractor} from "@/modules/student/use-cases/save-student.interactor";
import {UpdateStudentDTO} from "@/modules/student/adapters/dto/update-student";
import {UpdateStudentInteractor} from "@/modules/student/use-cases/update-student.interactor";
import {DeleteStudentInteractor} from "@/modules/student/use-cases/delete-student.interactor";

export class StudentController {
    findAllStudents(){
        const repo: StudentRepository = new StudentStorageGateway();
        const interactor: GetStudentsInteractor = new GetStudentsInteractor(repo);

        try{
            return interactor.execute();
        }catch (err){
            return{
                code:500,
                message:'INTERNAL ERROR IN CONTROLLER'
            } as ResponseApi<Student>;
        }
    }

    findStudent(payload: string){
        const repo: StudentRepository = new StudentStorageGateway();
        const interactor: GetStudentInteractor = new GetStudentInteractor(repo);

        try{
            return interactor.execute(payload);
        }catch (err){
            return {
                code: 500,
                message: 'INTERNAL ERROR IN CONTROLLER'
            } as ResponseApi<Student>;
        }
    }

    save(payload: SaveStudentDTO){
        const repo: StudentRepository = new StudentStorageGateway();
        const interactor: SaveStudentInteractor = new SaveStudentInteractor(repo);

        try {
            return interactor.execute(payload);
        }catch (err){
            return{
                code: 500,
                message: 'INTERNAL ERROR IN CONTROLLER'
            } as ResponseApi<Student>;
        }
    }

    update(payload: UpdateStudentDTO){
        const repo: StudentRepository = new StudentStorageGateway();
        const interactor: UpdateStudentInteractor = new UpdateStudentInteractor(repo);

        try {
            return interactor.execute(payload);
        }catch (err){
            return{
                code: 500,
                message: 'INTERNAL ERROR IN CONTROLLER'
            } as ResponseApi<Student>;
        }
    }

    deleteStudent(payload: string){
        const repo: StudentRepository = new StudentStorageGateway();
        const interactor: DeleteStudentInteractor = new DeleteStudentInteractor(repo);

        try{
            return interactor.execute(payload);
        }catch (err){
            return {
                code: 500,
                message: 'INTERNAL ERROR IN CONTROLLER'
            } as ResponseApi<Student>;
        }
    }


}