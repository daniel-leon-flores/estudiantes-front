<template>
  <div>
    <b-modal id="modal-2" centered hide-footer hide-header title="BootstrapVue">
      <div>
        <h3>Modificar Estudiante</h3>
        <form class="my-4" action="">
          <div class="form-group">
            <label for="">Nombre: <span class="text-danger">*</span></label>
            <input v-model="editedStudent.name"  placeholder="Nombre" type="text" class="form-control">
          </div>

          <div class="form-group">
            <label for="">Apellidos: <span class="text-danger">*</span></label>
            <input v-model="editedStudent.lastname"  placeholder="Apellidos" type="text" class="form-control">
          </div>

          <div class="form-group">
            <label for="">Matrícula: <span class="text-danger">*</span></label>
            <input v-model="editedStudent.studentId"  placeholder="Matrícula" type="text" class="form-control">
          </div>

          <div class="form-group">
            <label for="">Correo electrónico: <span class="text-danger">*</span></label>
            <input v-model="editedStudent.email"  placeholder="Correo electrónico" type="text" class="form-control">
          </div>

          <div class="form-group">
            <label for="">Carrera: <span class="text-danger">*</span></label>
            <input v-model="editedStudent.career"  placeholder="Carrera" type="text" class="form-control">
          </div>

        </form>
      </div>
      <div class="text-right">
        <button class="btn btn-secondary mr-2" @click="$bvModal.hide('modal-2')">Cerrar</button>
        <button class="btn btn-primary" @click="updateStudent()">Modificar</button>
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {StudentController} from "@/modules/student/adapters/students.controller";
import {UpdateStudentDTO} from "@/modules/student/adapters/dto/update-student";
export default Vue.extend({
  name:'UpdateStudentModal',
  props: {
    studentSelected:{
      type: Object,
      required: true
    }
  },
  data() {
    return {
      editedStudent: {
        id: "",
        name: "",
        lastname: "",
        studentId: "",
        email: "",
        career: ""
      } as UpdateStudentDTO
    };
  },
  watch: {
    studentSelected: {
      immediate: true,
      handler(newVal){
        this.editedStudent={...newVal};
      }
    }
  },
  methods: {
    async updateStudent() {
      const controller = new StudentController();
      const response = await controller.update(this.editedStudent);

      this.$bvModal.hide("modal-2");
      this.$emit("findAll");
    }
  }
})
</script>