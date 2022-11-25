const rolagemContainer = document.getElementById('rolagem__container');
const rolagemExpressao = document.getElementById('rolagem__expressao');
const rolagemResultado = document.getElementById('rolagem__resultado');

document.addEventListener('DOMContentLoaded', ()=>{
    let dadosBtn = document.querySelectorAll('[data-dice]');

    dadosBtn.forEach(Element =>{
        Element.addEventListener('click',()=>{
            rollDice(Element);
        })
    })
    
    let fecharRolagemBtn = document.getElementById('fechar__rolagem');
    fecharRolagemBtn.addEventListener('click', ()=>{
        fechaRolagem();
    })
})

function fechaRolagem(){
    rolagemContainer.classList.add('hidden');
    rolagemContainer.querySelector('h2').classList.remove('rolagem--d4');
    rolagemContainer.querySelector('h2').classList.remove('rolagem--d6');
    rolagemContainer.querySelector('h2').classList.remove('rolagem--d8');
    rolagemContainer.querySelector('h2').classList.remove('rolagem--d10');
    rolagemContainer.querySelector('h2').classList.remove('rolagem--d12');
    rolagemContainer.querySelector('h2').classList.remove('rolagem--d20');
}

function rollDice(dado){
    if(!rolagemContainer.classList.contains('hidden')){
        fechaRolagem();
        return;
    }

    if(dado.dataset.dice){
        rolagemContainer.classList.remove('hidden');
        rolagemContainer.querySelector('h2').classList.add(`rolagem--${dado.dataset.dice}`);

        rolagemExpressao.innerHTML = `1(${dado.dataset.dice})`;

        let n = dado.dataset.dice.replace('d','');
        rolagemResultado.innerHTML = `${Math.floor(Math.random() * n + 1)}`;
    }
}
