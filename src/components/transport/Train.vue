<template>
        <n-collapse-item title="TREN" display-directive="show" name="2">
        <template #header-extra>
          <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 1.5h-3a.75.75 0 0 0-.75-.75h-4.5A.75.75 0 0 0 9 1.5H6c-.75 0-1.5.75-1.5 1.5v13.5c0 1.121 7.5 3.75 7.5 3.75s7.5-2.66 7.5-3.75V3c0-.75-.75-1.5-1.5-1.5Zm-6 15a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Zm5.25-7.125a.375.375 0 0 1-.375.375h-9.75a.375.375 0 0 1-.375-.375v-3.75a.375.375 0 0 1 .375-.375h9.75a.375.375 0 0 1 .375.375v3.75Z"></path>
    <path d="m14.719 20.254.718.75H8.558l.723-.75-1.5-.61-3.592 3.61h2.12l.75-.75h9.878l.75.75h2.123l-3.58-3.645-1.511.645Z"></path>
  </svg>
  
      </template>
      <Carrusel>
    <template v-slot:form>
        hola
<input type="text">
    </template>
      </Carrusel>
      </n-collapse-item>
    
  </template>
  
  <script setup>
  import Carrusel from '../carrusel/Carrusel.vue'
  </script>