<template>
        <n-collapse-item title="COCHE" display-directive="show" name="3">
        <template #header-extra>
          <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.985 10.35a.747.747 0 0 0-.047-.145l-1.77-4.133c-.41-.955-1.402-1.572-2.532-1.572H7.364c-1.13 0-2.124.617-2.532 1.572L3.06 10.205A.737.737 0 0 0 3 10.5v8.25a.75.75 0 0 0 .75.75h1.5a.75.75 0 0 0 .75-.75V18h12v.75a.75.75 0 0 0 .75.75h1.5a.75.75 0 0 0 .75-.75V10.5a.756.756 0 0 0-.015-.15ZM6.75 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm10.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM4.887 9.75 6.21 6.663C6.38 6.267 6.844 6 7.365 6h9.27c.52 0 .985.267 1.154.663l1.324 3.087H4.887Z"></path>
  </svg>
      </template>
       
      <Carrusel>
        <template  v-slot:form>
            <input type="text" name="" id="" placeholder="carrr">
        </template>
      </Carrusel>
      </n-collapse-item>
  </template>
  
  <script setup>
    import Carrusel from '../carrusel/Carrusel.vue'
  </script>