const pointbuyInput = document.getElementById('pointbuy');
const pointbuyLabel = document.getElementById('pointbuy__label');
const obs = document.querySelectorAll('.obs');

//ativa e desativa o pointbuy

document.addEventListener('DOMContentLoaded', ()=>{
    ativaPointbuy();
    pointbuyInput.addEventListener('click',()=>{
        ativaPointbuy();
    })
})

function ativaPointbuy(){
    pointbuyInput.classList.toggle('pointbuy__icon')
    pointbuyLabel.classList.toggle('off');
    obs.forEach( (i) => {
        i.classList.toggle('off');
    })
}