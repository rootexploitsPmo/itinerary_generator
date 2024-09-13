<template>
<div class="flex h-[140px] items-center gap-5 border border-x-2 overflow-auto flex-wrap p-3 snap-mandatory snap-y">
  <!-- items -->
  <div v-for="element in list_air " :key="element.id" class="flex cursor-pointer h-28 snap-center w-28 items-center justify-center rounded-full bg-blue-500" @click="start(element)" >
    <p>{{ element.title }} </p>
    
    <n-modal v-model:show="element.show">
      <n-card
        style="width: 800px"
        :title=element.title
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
      >
      <!-- save state -->
      
      <div class="flex   flex-wrap  gap-6 ">
            <!-- <label for="destino" class="">Destino</label> -->
           
            <div class="flex flex-col gap-3">
            <!-- <label for="origen">Origen</label> -->
                <n-input  class="w-14" id="origen"  type="text" placeholder="Origen"  v-model:value="element.origin" clearable round />
              
            </div>
            <div>
                <n-input id="destino" class="w-14" type="text" placeholder="Destino"    v-model:value="element.destination"  clearable  round />
            </div>
           <div>
            <n-input  class="w-14" id="fecha_salida" type="text" placeholder="Fecha salida"   v-model:value="element.departure_date"  clearable  round />
           </div>
            <div>
            <n-input  class="w-14" id="hora_salida" type="text" placeholder="Hora salida"   v-model:value="element.departure_time"  clearable  round />
           </div>
            <div>
            <n-input  class="w-14" id="hora_llegada" type="text" placeholder="Hora llegada"   v-model:value="element.arrival_time"  clearable  round />
           </div>
            <div>
            <n-input  class="w-14" id="clase" type="text" placeholder="Clase"   v-model:value="element.class"  clearable  round />
           </div>
            <div>
            <n-input  class="w-14" id="numVuelo" type="text" placeholder="nº vuelo"   v-model:value="element.flight_number"  clearable  round />
           </div>
            <div>
            <n-input  class="w-14" id="compania" type="text" placeholder="Compañia"   v-model:value="element.airline"  clearable  round />
           </div>
            <div>
            <n-input  class="w-14" id="precio" type="text" placeholder="Precio"   v-model:value="element.price"  clearable  round/>
           </div>
            <div>
            <n-input  class="w-14" id="condiciones" type="text" placeholder="Condiciones"   v-model:value="element.conditions"  clearable  round/>
           </div>
            <div>
            <n-input  class="w-14" id="observaciones" type="text" placeholder="Observaciones"   v-model:value="element.observations"  clearable  round/>
</div>

            

          
            
        </div>
        <!-- tools -->
      <div class="flex justify-center items-center m-3">
        <n-tooltip trigger="hover">
    <template #trigger>
      <div class="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full transition-all hover:shadow-2xl" @click="deleteItemListAir(element.id)">
  <svg width="36" height="36" fill="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.979 4.5H15.75V2.25A.75.75 0 0 0 15 1.5H9a.75.75 0 0 0-.75.75V4.5H3.021L3 6.375h1.547l.942 14.719A1.5 1.5 0 0 0 6.984 22.5h10.032a1.5 1.5 0 0 0 1.496-1.404l.941-14.721H21L20.979 4.5ZM8.25 19.5l-.422-12h1.547l.422 12H8.25Zm4.5 0h-1.5v-12h1.5v12Zm1.125-15h-3.75V3.187A.188.188 0 0 1 10.313 3h3.374a.188.188 0 0 1 .188.188V4.5Zm1.875 15h-1.547l.422-12h1.547l-.422 12Z"></path>
  </svg>
</div>
    </template>
    Al hacer click eliminaras ( {{ element.title }})
  </n-tooltip>
  <n-tooltip trigger="hover">
    <template #trigger>
      <div class="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full transition-all hover:shadow-2xl" @click="deleteItemListAir(element.id)">
        <svg width="36" height="36" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.5 9.75H2.25A.752.752 0 0 1 1.5 9c0-.412.337-.75.75-.75H4.5c.412 0 .75.338.75.75s-.338.75-.75.75Z"></path>
  <path d="M5.817 6.571a.753.753 0 0 1-.53-.22L3.698 4.76a.753.753 0 0 1 0-1.059.753.753 0 0 1 1.06 0l1.589 1.59a.744.744 0 0 1 0 1.059.745.745 0 0 1-.53.22Z"></path>
  <path d="M9 5.25a.752.752 0 0 1-.75-.75V2.25c0-.413.338-.75.75-.75s.75.337.75.75V4.5c0 .412-.338.75-.75.75Z"></path>
  <path d="M12.184 6.571a.752.752 0 0 1-.75-.75c0-.197.08-.389.22-.53l1.589-1.589a.753.753 0 0 1 1.06 0c.29.291.29.77 0 1.06l-1.59 1.589a.753.753 0 0 1-.53.22Z"></path>
  <path d="M4.229 14.524a.752.752 0 0 1-.75-.75c0-.197.08-.389.22-.53l1.589-1.588a.752.752 0 0 1 1.06 0c.29.29.29.768 0 1.059l-1.59 1.589a.753.753 0 0 1-.53.22Z"></path>
  <path d="M10.979 7.831a2.232 2.232 0 0 0-3.15-.033 2.232 2.232 0 0 0-.033 3.15l.033.033 1.852 1.851a.376.376 0 0 0 .53 0l2.62-2.62a.376.376 0 0 0 0-.53l-1.852-1.851Z"></path>
  <path d="m21.422 18.268-7.003-7.003a.376.376 0 0 0-.53 0l-2.62 2.62a.376.376 0 0 0 0 .53l7.003 7.003a2.232 2.232 0 0 0 3.15.033c.877-.862.89-2.273.033-3.15-.01-.01-.019-.023-.033-.033Z"></path>
</svg>
</div>
    </template>
    Limpiar ( {{ element.title }})
  </n-tooltip>
      </div>
      </n-card>
    </n-modal>
  </div>
</div>



 
    <button @click="addAir">add</button>
  </template>
  
  <script setup>
  import {ref} from 'vue'
  import { v4 as uuidv4 } from 'uuid';

  let list_air=ref([])
  let showModal = ref(false)
  let counterAir=ref(1)
  function addAir(){

    list_air.value.push({
    title:`Opción ${counterAir.value}`,
    show:false,
    list_option:[{id:uuidv4(),
    origin: "Ciudad de origen",
  destination: "Ciudad de destino",
  departure_date: "2024-09-13",
  departure_time: "09:00 AM",
  arrival_time: "18:00 PM",
  class: "Primera Clase",
  flight_number: "12345",
  airline: "Ejemplo Airlines",
  price: "$500.00",
  conditions: "Términos y condiciones",
  observations: "Sin observaciones"
  }],
    id:uuidv4(),
    origin: "Ciudad de origen",
  destination: "Ciudad de destino",
  departure_date: "2024-09-13",
  departure_time: "09:00 AM",
  arrival_time: "18:00 PM",
  class: "Primera Clase",
  flight_number: "12345",
  airline: "Ejemplo Airlines",
  price: "$500.00",
  conditions: "Términos y condiciones",
  observations: "Sin observaciones"
  })


    counterAir.value ++
  }
  function start(element){
    console.log(element); element.show = true;
  }
  function deleteItemListAir(id){
   list_air.value = list_air.value.filter(objeto => objeto.id !== id);
    counterAir.value --
}
  </script>