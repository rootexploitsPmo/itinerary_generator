<template>
<div class=" flex h-[100vh]    transition-all p-5 pt-10">
  <div class="flex gap-10">
  
    <MenuTransport></MenuTransport>
  
  <!-- vista itinerario -->
  <div class="w-[700px] shadow-2xl rounded-lg p-5">
<h1 class="flex justify-center">VIEW HTML</h1>



  </div>
  </div>
</div>
 

</template>

<script setup>
import { ref } from "vue";
import MenuTransport from "../components/menu/MenuTransport.vue"
let showModal= ref(true)
</script>