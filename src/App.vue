<template>
  <div id="app" class="container mt-2">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">SGD-Ingemat</b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name: 'inicio'}" v-if="existeUsuario" class="mx-2" exact>Inicio</b-nav-item>
            <b-nav-item :to="{name: 'publicaciones'}" v-if="existeUsuario" class="mx-2" exact>Publicaciones</b-nav-item>
            <b-nav-item :to="{name: 'docencia'}" v-if="existeUsuario" class="mx-2" exact>Docencia</b-nav-item>
            <b-nav-item :to="{name: 'registro'}" v-if="!existeUsuario" class="mx-2">Registro</b-nav-item>
            <b-nav-item :to="{name: 'ingreso'}" v-if="!existeUsuario" class="mx-2">Ingresar</b-nav-item>
            <b-nav-item @click="cerrarSesion" v-if="existeUsuario" class="mx-2">Cerrar sesión</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>  
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>


<script>

import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: 'App',
  methods: {
    ...mapActions(['cerrarSesion'])
  },
  computed: {
    ...mapGetters(['existeUsuario'])
  },
}
</script>

