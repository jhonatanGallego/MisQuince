const btnAbrirVestir = document.querySelector("#btn-abrir-vestir");
const btnCerrarVestir = document.querySelector("#btn-cerrar-vestir");
const vestir = document.querySelector("#vestir");

btnAbrirVestir.addEventListener("click",()=>{
   vestir.showModal();
})

btnCerrarVestir.addEventListener("click",()=>{
   vestir.close();
})