<template>
  <div class="flex items-center justify-center gap-3">

  
<div class="flex rounded-md  justify-center items-center gap-2 border border-x-2 flex-col overflow-auto  p-5 snap-mandatory snap-y">
  <!-- items -->
  <div v-for="(element,index) in list_air " :key="element.id" class="m-1 flex   cursor-pointer items-center rounded-2xl  shadow-md transition-all hover:shadow-xl snap-center  items-center" @click="start(element)" >
    
    <div class="p-3 ">
    <!-- Contenido que quieres abajo -->
    <h1 class=" bg-transparent text-black">{{ element.title}}</h1>
  </div>
  <div class="flex justify-end pr-2 pt-1">
    <!-- Contenido que quieres arriba -->
    <svg @click="deleteOption(element.id)" class="cursor-pointer" width="19" height="19" fill="#00000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25ZM16.06 15 15 16.06l-3-3-3 3L7.94 15l3-3-3-3L9 7.94l3 3 3-3L16.06 9l-3 3 3 3Z"></path>
    </svg>
  </div>
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
      <!-- add options -->
     <div class="flex max-h-[500px] snap-y snap-mandatory flex-wrap overflow-auto">
   
            <!-- line 1-->
            <div v-for="(line,indexLine) in element.routes" :key="line.id" class="snap-center  border-b-2 border-blue-950 pb-5 pt-5">
       <div class="flex justify-between">
        <h1 class="p-3">{{ line.title }}</h1>
        <!-- tools -->
            <!-- tools -->
      <div class="flex justify-center items-center  rounded-2xl pr-3   gap-3">
       
  <n-tooltip trigger="hover">
    <template #trigger>
      <div class="flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-full transition-all hover:shadow-2xl" @click="clearInputs(line,index,indexLine)">
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
  <n-tooltip trigger="hover">
         <template #trigger>
           <div class="flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-full transition-all hover:shadow-2xl" @click="addLine(index)">
            <svg  width="30" height="30" fill="#2a71fe" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25Zm4.5 10.5h-3.75v3.75h-1.5v-3.75H7.5v-1.5h3.75V7.5h1.5v3.75h3.75v1.5Z"></path>
</svg> 
     </div>
         </template>
         Nuevo trayecto 
       </n-tooltip>
  <n-tooltip trigger="hover">
    <template #trigger>
      <div class="flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-full transition-all hover:shadow-2xl" @click="deleteLine(line.id,index)">
  <svg width="36" height="36" fill="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.979 4.5H15.75V2.25A.75.75 0 0 0 15 1.5H9a.75.75 0 0 0-.75.75V4.5H3.021L3 6.375h1.547l.942 14.719A1.5 1.5 0 0 0 6.984 22.5h10.032a1.5 1.5 0 0 0 1.496-1.404l.941-14.721H21L20.979 4.5ZM8.25 19.5l-.422-12h1.547l.422 12H8.25Zm4.5 0h-1.5v-12h1.5v12Zm1.125-15h-3.75V3.187A.188.188 0 0 1 10.313 3h3.374a.188.188 0 0 1 .188.188V4.5Zm1.875 15h-1.547l.422-12h1.547l-.422 12Z"></path>
  </svg>
</div>
    </template>
    Al hacer click eliminaras ( {{ line.title }})
  </n-tooltip>
      </div>
       
       </div>
            <!-- INPUTS -->
            <div class="flex   flex-wrap  gap-6 ">
              <div class="flex gap-3">
             <!-- <label for="origen">Origen</label> -->
                 <n-input  class="w-14" id="origen"  type="text" placeholder="Origen" :on-input="getTitleOption(element.id)"   v-model:value="line.origin" clearable round />
               
             </div>
             <div>
                 <n-input id="destino" class="w-14" type="text" placeholder="Destino"    v-model:value="line.destination"  clearable  round />
             </div>
            <div>
             <n-input  class="w-14" id="fecha_salida" type="text" placeholder="Fecha salida"   v-model:value="line.departure_date"  clearable  round />
            </div>
             <div>
             <n-input  class="w-14" id="hora_salida" type="text" placeholder="Hora salida"   v-model:value="line.departure_time"  clearable  round />
            </div>
             <div>
             <n-input  class="w-14" id="hora_llegada" type="text" placeholder="Hora llegada"   v-model:value="line.arrival_time"  clearable  round />
            </div>
             <div>
             <n-input  class="w-14" id="clase" type="text" placeholder="Clase"   v-model:value="line.class"  clearable  round />
            </div>
             <div>
             <n-input  class="w-14" id="numVuelo" type="text" placeholder="nº vuelo"   v-model:value="line.flight_number"  clearable  round />
            </div>
             <div>
             <n-input  class="w-14" id="compania" type="text" placeholder="Compañia"   v-model:value="line.airline"  clearable  round />
            </div>
             <div>
             <n-input  class="w-14" id="precio" type="text" placeholder="Precio"   v-model:value="line.price"  clearable  round/>
            </div>
             <div>
             <n-input  class="w-14" id="condiciones" type="text" placeholder="Condiciones"   v-model:value="line.conditions"  clearable  round/>
            </div>
             <div>
             <n-input  class="w-14" id="observaciones" type="text" placeholder="Observaciones"   v-model:value="line.observations"  clearable  round/>
 </div>
 <div class="flex gap-3">
  <label for="f">Escala</label>
  <n-switch id="f" v-model:value="line.scale" @update:value="ishandleChange" />
 </div>
            </div>  
         </div>
         
            
  
     </div>
     
      </n-card>
    </n-modal>
  </div>


</div>



 
  
    <n-button  @click="addAir" strong secondary round>
      Agregar opción
    </n-button>
  </div>

  </template>
  
  <script setup>
  import {ref} from 'vue'
  import { v4 as uuidv4 } from 'uuid';

  let list_air=ref([])
  let showModal = ref(false)
  let counterAir=ref(1)
  let counterRoutesAir=ref(1)
  let active=ref(false)
  function addAir(){

    list_air.value.push({
    titleOption:`OP ${counterAir.value}`,
    title:`OP ${counterAir.value}`,
    show:false,
    id:uuidv4(),

    routes:[
      {
        title:'Trayecto '+ counterRoutesAir.value,
        id:uuidv4(),
        origin: "MAD",
        destination: "BCN",
  departure_date: "2024-09-13",
  departure_time: "09:00 AM",
  arrival_time: "18:00 PM",
  class: "Primera Clase",
  flight_number: "12345",
  airline: "Ejemplo Airlines",
  price: "$500.00",
  conditions: "Términos y condiciones",
  observations: "Sin observaciones",
  scale:false
  }]
  })


    counterAir.value ++
  }
  function start(element){
    console.log(element); element.show = true;
  }
  function ishandleChange(){
    
  }
  function deleteOption(id){
   list_air.value = list_air.value.filter(objeto => objeto.id !== id);
    counterAir.value --
}
function deleteLine(id,index){
   list_air.value[index].routes = list_air.value[index].routes.filter(objeto => objeto.id !== id);
   counterRoutesAir.value --
   
}
function getTitleOption(id){
  // let getRoutes=list_air.value.fill(element => element.id === id )
  const option_found = list_air.value.find(objeto => objeto.id === id);
   let  routes = option_found.routes
    let routesTotal=option_found.routes.length
     
    if(routesTotal > 1) {
      let getLastItem=Array.from(option_found.routes).pop()
       console.log("the last")
       let firstOrigen=routes[0].origin
       let lastDestination=getLastItem.destination
       if(firstOrigen === lastDestination ){
option_found.title=`${option_found.titleOption} - ${ firstOrigen } - ${routes[0].destination } - ${routes[0].departure_time}  - Vuelo ida y vuelta `
       }else{
option_found.title=`${option_found.titleOption}  - ${ firstOrigen } - ${routes[0].destination } - ${routes[0].departure_time} - Vuelo solo ida `
       }
      console.log({firstOrigen:firstOrigen,lastDestination:lastDestination})
    
    }else{
      console.log(`${option_found.titleOption} - Vuelo solo ida - ${ routes[0].origin } - ${routes[0].destination } `)
      option_found.title=`${option_found.titleOption}  - ${ routes[0].origin } - ${routes[0].destination } - ${routes[0].departure_time} - Vuelo solo ida `
    }

    
  // console.log(routes)
  // console.log(routesTotal)

   
      

}

function addLine(index){
  counterRoutesAir.value  ++
  list_air.value[index].routes.push(  {
    title:'Trayecto '+ counterRoutesAir.value,
    id:uuidv4(),
origin: "MAD",
destination: "BCN",
departure_date: "2024-09-13",
departure_time: "09:00 AM",
arrival_time: "18:00 PM",
class: "Primera Clase",
flight_number: "12345",
airline: "Ejemplo Airlines",
price: "$500.00",
conditions: "Términos y condiciones",
observations: "Sin observaciones",
scale:true
})


}
function handleInput(id){
  console.log("f")
  console.log(id)
}
function clearInputs(line,indexAir,indexLine){
  console.log("log")
  console.log(line)
  console.log(indexAir)
  console.log(indexLine)
  
  
  list_air.value[indexAir].routes[indexLine]={
    title:line.title,
    id:uuidv4(),
origin: "",
destination: "",
departure_date: "",
departure_time: "",
arrival_time: "",
class: "",
flight_number: "",
airline: "",
price: "",
conditions: "",
observations: "",
scale:false
}

}
  </script>