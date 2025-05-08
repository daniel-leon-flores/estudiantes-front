<template>
  <div>
    <b-modal id="modal-4" centered hide-footer hide-header title="BootstrapVue">
      <div class="d-block text-center">
        <h3>¿Estas seguro de eliminar a este estudiante?</h3>
      </div>
      <div class="row">
        <div class="col-6">
          <b-button class="mt-3" variant="outline-dark" block @click="hideModal">Cancelar</b-button>
        </div>
        <div class="col-6">
          <b-button class="mt-3" variant="outline-success" block @click="deleteStudent">Aceptar</b-button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {StudentController} from "@/modules/student/adapters/students.controller";

export default Vue.extend({
  name: 'DeleteStudentModal',
  props: {
    studentSelected:{
      type: Object,
      required: true
    }
  },
  methods: {
    hideModal() {
      this.$bvModal.hide("modal-4")
    },
    deleteStudent() {
      const controller = new StudentController()
      const response = controller.deleteStudent(this.studentSelected.id)

      alert('Eliminado con exito')
      this.$bvModal.hide("modal-4")
      this.$emit("findAll")
    }
  }
})

</script>