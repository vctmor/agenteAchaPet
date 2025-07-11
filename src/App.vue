
<template>

  <div id="app">

    <PrototypeWarning v-if="route.name !== 'contato'" />

  </div>


  <NavBar />
  <!-- <router-view /> // Por qual motivo duplica se ele estiver ativo? \\ -->


</template>

<script setup>
import { useRoute } from 'vue-router'

import NavBar from './composables/NavBar.vue';
import PrototypeWarning from './composables/PrototypeWarning.vue';

const route = useRoute()

</script>
