<template>
  <div class="p-4">
    <header class="col-12 justify-content-center">
      <h1 class="text-center">Estudiantes</h1>
    </header>

    <div class="row">
      <div class="col-12 d-flex justify-content-center justify-content-md-end"  >
        <b-button variant="success" v-b-modal.modal-1>Agregar estudiante</b-button>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-3" v-for="student in students" :key="student.id" >
        <b-card style="box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;">
          <b-card-sub-title class="mb-3">
            {{student.studentId}}
          </b-card-sub-title>
          <b-card-title @click="seeFullName" style="cursor: pointer">
            {{ student.name }} {{ student.lastname.length>10 && status === false ? `${student.lastname.substring(0, 10)}...` : student.lastname}}
          </b-card-title>
          <b-card-text style="font-weight: bold; font-style: italic">
            {{student.email}}
          </b-card-text>

          <b-card-text style="font-size: large">{{student.career}}</b-card-text>

          <div class="row">
            <div class="col-12 d-flex justify-content-around">
              <button class="btn btn-info" @click="findEmployee(student.id)" v-b-modal.modal-2>Editar</button>
              <button class="btn btn-danger" @click="findEmployee(student.id)" v-b-modal.modal-4>Eliminar</button>
            </div>
          </div>
        </b-card>
      </div>
    </div>

    <AddModal @findAll="findAll"/>
    <UpdateModal :studentSelected="student" @findAll="findAll"/>
    <DeleteModal :studentSelected="student" @findAll="findAll" />
  </div>

</template>

<script lang="ts">
 import Vue from "vue";
 import {Student} from "@/modules/student/entities/student";
 import {StudentController} from "@/modules/student/adapters/students.controller";
 import AddModal from '../modules/student/adapters/components/AddStudent.modal.vue';
 import UpdateModal from '../modules/student/adapters/components/UpdateStudent.modal.vue';
 import DeleteModal from '../modules/student/adapters/components/DeleteStudent.modal.vue';

 export default Vue.extend({
   name:'StudentsView',
   components:{
     AddModal, UpdateModal, DeleteModal
   },
   data(){
     return {
       /*fields: [
         {key: 'studentId', label: 'Matrícula', sortable: true, },
         {key: 'career', label: 'Carrera', sortable: true, },
         {key: 'name', label: 'Nombre', sortable: true, },
         {key: 'lastname', label: 'Apellidos', sortable: true, },
         {key: 'email', label: 'Correo', sortable: true, },
         {key: 'actions', label: 'Acciones' }
       ],*/
       students: [] as Student[],
       student: {} as Student,
       /*currentPageMain: 1,
       document: null as any*/
       status: false,
       count: 0
     }
   },
   methods: {
     async findAll(){
       const controller = new StudentController();
       const response = await controller.findAllStudents();
       this.students = response.result!;
       console.log("Respuesta del backend:", JSON.stringify(response.result, null, 2));
     },
     async findEmployee(payload: string){
       const controller = new StudentController();
       const response = await controller.findStudent(payload);
       this.student = response.result!;
     },
     seeFullName(){
       this.status = !this.status;
     }
   },
   mounted() {
     this.findAll();
   },

 })
</script>