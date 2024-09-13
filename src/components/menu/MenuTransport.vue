<template>
<div class="w-[700px]"> 
    <n-collapse>
   <Air></Air>
    <Train></Train>
  
      <Car></Car>
      <Hotel></Hotel>
      <Bus></Bus>
   <Boat></Boat>
  <Various></Various>
    </n-collapse>
</div>
  </template>
  
  <script setup>
  import Air from "../transport/Air.vue"
  import Train from "../transport/Train.vue"
  import Car from "../transport/Car.vue"
  import Boat from "../transport/Boat.vue"
  import Hotel from "../transport/Hotel.vue"
  import Bus from "../transport/Bus.vue"
  import Various from "../transport/Various.vue"




  </script>