<template>
  <div>
    <b-modal id="modal-1" centered hide-footer title="BootstrapVue" >Hello From My Modal!
      <div>
        <h3>Agregar estudiante</h3>
        <form class="my-4" action="">
          <div class="form-group">
            <label for="">Nombre: <span class="text-danger">*</span></label>
            <input v-model="student.name" placeholder="Nombre" type="text" class="form-control">
          </div>

          <div class="form-group">
            <label for="">Apellidos: <span class="text-danger">*</span></label>
            <input v-model="student.lastname" placeholder="Apellidos" type="text" class="form-control">
          </div>

          <div class="form-group">
            <label for="">Matrícula: <span class="text-danger">*</span></label>
            <input v-model="student.studentId" placeholder="Apellidos" type="text" class="form-control">
          </div>

          <div class="form-group">
            <label for="">Correo electrónico: <span class="text-danger">*</span></label>
            <input v-model="student.email" placeholder="Apellidos" type="text" class="form-control">
          </div>

          <div class="form-group">
            <label for="">Carrera: <span class="text-danger">*</span></label>
            <input v-model="student.career" placeholder="Apellidos" type="text" class="form-control">
          </div>

        </form>
      </div>
      <div class="text-right">
        <button class="btn btn-secondary mr-2" @click="$bvModal.hide('modal-1')">Cerrar</button>
        <button class="btn btn-primary" @click="saveStudent()">Guardar</button>
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import  {StudentController} from "@/modules/student/adapters/students.controller";
  import {SaveStudentDTO} from "@/modules/student/adapters/dto/save-student";

  export default Vue.extend({
    name: 'AddStudentModal',
    data(){
      return{
        student:{} as SaveStudentDTO
      }
    },
    methods:{
      async saveStudent(){
        const controller = new StudentController();
        const response = await controller.save(this.student);

        this.$bvModal.hide("modal-1");
        this.$emit("findAll");
      }
    }
  })
</script>