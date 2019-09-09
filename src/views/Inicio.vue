<!--
<template>
    <div  class="container">
        <h1>Inicio</h1>
        <p>{{usuario}}</p>
        <h3>Bienvenido! {{usuario.email}}</h3>
    </div>
</template>
-->
<template>
  <div class="container">
    <div class="text-center my-2">
          <h1>Página principal</h1>
    </div>
    <div>
      <div class="mt-3">
        <h3>Indicadores</h3>
      </div>
      <!--
      <table class="table table-striped">
        <thead>
          <tr>
            <th class='text-center' scope="col" colspan="1">Datos</th> 
            <th class='text-center' scope="col" colspan="1">Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Gestión de Publicaciones</th>
            <td>
             <a href="#" class="btn btn-primary btn-sm" role="button">Ver</a>&nbsp;
            </td>
          </tr>
          <tr>
            <th scope="row">Gestión de Proyectos en curso</th>
             <td>
                <a href="#" class="btn btn-primary btn-sm" role="button">Ver</a>&nbsp;
            </td>
          </tr>
          <tr>
            <th scope="row">Gestión de Proyectos culminados</th>
              <td>
                <a href="#" class="btn btn-primary btn-sm" role="button">Ver</a>&nbsp;
              </td>
          </tr>
          <tr>
           <th scope="row">Gestión de Docencia</th>
           <td>
             <a href="#" class="btn btn-primary btn-sm" role="button">Ver</a>&nbsp;
            </td>
          </tr>
          <tr>
            <th scope="row">Gestión de Seminarios</th>
            <td>
              <a href="#" class="btn btn-primary btn-sm" role="button">Ver</a>&nbsp;
            </td>
           </tr>		
        </tbody>
      </table>
      -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'Inicio'
}
</script>

<!--

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


-->