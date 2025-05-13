import {StudentRepository} from "@/modules/student/use-cases/ports/student.repository";
import {GetStudentsInteractor} from "@/modules/student/use-cases/get-students.interactor";
import {ResponseApi} from "@/kernel/types";
import {Student} from "@/modules/student/entities/student";
import {StudentStorageGateway} from "@/modules/student/adapters/students.storage.gateway";
import {GetStudentInteractor} from "@/modules/student/use-cases/get-student.interactor";
import {SaveStudentDTO} from "@/modules/student/entities/save-student";
import {SaveStudentInteractor} from "@/modules/student/use-cases/save-student.interactor";
import {UpdateStudentDTO} from "@/modules/student/entities/update-student";
import {UpdateStudentInteractor} from "@/modules/student/use-cases/update-student.interactor";
import {DeleteStudentInteractor} from "@/modules/student/use-cases/delete-student.interactor";

export class StudentController {
    findAllStudents(): Promise<ResponseApi<Student[]>>{
        const studentRepository: StudentRepository = new StudentStorageGateway();
        const interactor: GetStudentsInteractor = new GetStudentsInteractor(studentRepository);
        return interactor.execute();
    }

    save(student: SaveStudentDTO): Promise<ResponseApi<Student>>{
        const studentRepository: StudentRepository = new StudentStorageGateway();
        const interactor = new SaveStudentInteractor(studentRepository);
        return interactor.execute(student);

    }

    update(student: UpdateStudentDTO): Promise<ResponseApi<Student>>{
        const studentRepository: StudentRepository = new StudentStorageGateway();
        const interactor = new UpdateStudentInteractor(studentRepository);
        return interactor.execute(student);
    }

    findStudent(id: string): Promise<ResponseApi<Student>>{
        const studentRepository: StudentRepository = new StudentStorageGateway();
        const interactor = new GetStudentInteractor(studentRepository);
        return interactor.execute(id);
    }

    deleteStudent(id: string): Promise<ResponseApi<Student>>{
        const studentRepository: StudentRepository = new StudentStorageGateway();
        const interactor = new DeleteStudentInteractor(studentRepository);
        return interactor.execute(id);
    }


}