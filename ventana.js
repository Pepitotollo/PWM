const btnAbrirModal = document.querySelector("#btn-abrir-modal");
const btnCerrar = document.querySelector("#btn-cerrar-modal");
const modal = document.querySelector("#modal");

btnAbrirModal.addEventListener("click", ()=>{
    modal.showModal();
})

btnCerrarModal.addEventListener("click", ()=>{
    modal.clode();
})