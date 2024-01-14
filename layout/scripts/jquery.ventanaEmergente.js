const btnAbrirLugar = document.querySelector("#btn-abrir-lugar");
const btnCerrarlugar = document.querySelector("#btn-cerrar-lugar");
const lugar = document.querySelector("#lugar");

btnAbrirLugar.addEventListener("click",()=>{
   lugar.showModal();
})

btnCerrarlugar.addEventListener("click",()=>{
   lugar.close();
})


const btnAbrirRegalo = document.querySelector("#btn-abrir-regalo");
const btnCerrarRegalo = document.querySelector("#btn-cerrar-regalo");
const regalo = document.querySelector("#regalo");

btnAbrirRegalo.addEventListener("click",()=>{
   regalo.showModal();
})

btnCerrarRegalo.addEventListener("click",()=>{
   regalo.close();
})


const btnAbrirVestir = document.querySelector("#btn-abrir-vestir");
const btnCerrarVestir = document.querySelector("#btn-cerrar-vestir");
const vestir = document.querySelector("#vestir");

btnAbrirVestir.addEventListener("click",()=>{
   vestir.showModal();
})

btnCerrarVestir.addEventListener("click",()=>{
   vestir.close();
})



const btnAbrirFecha = document.querySelector("#btn-abrir-fecha");
const btnCerrarFecha = document.querySelector("#btn-cerrar-fecha");
const fecha = document.querySelector("#fecha");

btnAbrirFecha.addEventListener("click",()=>{
   fecha.showModal();
})

btnCerrarFecha.addEventListener("click",()=>{
   fecha.close();
})


const btnAbrirFechaCita = document.querySelector("#btn-abrir-cita");
const btnCerrarFechaCita = document.querySelector("#btn-cerrar-cita");
const cita = document.querySelector("#cita");

btnAbrirFechaCita.addEventListener("click",()=>{
   cita.showModal();
})

btnCerrarFechaCita.addEventListener("click",()=>{
   cita.close();
})

const btnAbrirMusica = document.querySelector("#btn-abrir-musica");
const btnCerrarMusica = document.querySelector("#btn-cerrar-musica");
const musica = document.querySelector("#musica");

btnAbrirMusica.addEventListener("click",()=>{
   musica.showModal();
})

btnCerrarMusica.addEventListener("click",()=>{
   musica.close();
})