

//ativa coloca e remove inspiração
const inspiracao = document.getElementById('inspiracao');

document.addEventListener('DOMContentLoaded', ()=>{
    inspiracao.addEventListener('click',()=>{
        inspiracao.classList.toggle('inspirado');
    })
})
