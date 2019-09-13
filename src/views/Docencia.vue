<template>
  <div class="container">
    <h1>Docencia</h1>

    <router-link :to="{name: 'agregarDocencia'}">
      <button class="btn btn-success btn-sm btn-block">Agregar</button>
    </router-link>
    
    <div v-if="carga" class="text-center mt-5">
      <h3>Cargando contenido...</h3>
      <pulse-loader :loading="carga"></pulse-loader>
    </div>
    
    <div class="card-body" v-if="!carga">
        <table class="table table-sm table-striped table-bordered table-responsive-lg">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Docente</th>
              <th>Programa</th>
              <th>Horas</th>
              <th>Unidad</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in arrayFiltrado" :key="item.id">
              <td>{{ item.codigo }}</td>
              <td>{{ item.nombre }}</td>
              <td>{{ item.docente }}</td>
              <td>{{ item.rexe }}</td>
              <td>{{ item.horas }}</td>
              <td>{{ item.unidad }}</td>
              <td>
                <span class="pointer"
                      @click="eliminarDocencia(item.id)">
                  <i class="trash-alt"></i><font-awesome-icon icon="trash-alt" />
                </span> |
                <router-link :to="{name: 'editarDocencia', params:{id: item.id}}">
                  <span class="pointer">
                        <i class="edit"></i><font-awesome-icon icon="edit" />
                      </span>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

  </div>
</template>

<script>
import { mapActions,mapState, mapGetters } from "vuex";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
  name: 'Inicio',
  data() {
    return {
      texto: ''
    }  
  },
  computed:{
    ...mapState(['usuario','docencias', 'carga']),
    ...mapGetters(['arrayFiltrado'])
  },
  methods:{
    ...mapActions(['getDocencias', 'eliminarDocencia', 'buscador'])
  },
  created() {
    this.getDocencias()
  },
  components:{
    PulseLoader
  }
}
</script>
