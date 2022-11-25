const rolagemContainer = document.getElementById('rolagem__container');
const rolagemExpressao = document.getElementById('rolagem__expressao');
const rolagemResultado = document.getElementById('rolagem__resultado');

function roll(n){
    let resultado = Math.floor(Math.random() * n + 1);
    mostraRolagem(n);

    //pinta critico e fracasso
    if(resultado == n){
        rolagemResultado.classList.add('critico');
    }

    if(resultado == 1){
        rolagemResultado.classList.add('fracasso');
    }

    return resultado;
}

function mostraRolagem(dado){
    rolagemContainer.classList.remove('hidden');
    rolagemContainer.querySelector('h2').classList.add(`rolagem--d${dado}`);
}

function fechaRolagem(){
    rolagemContainer.classList.add('hidden');
    rolagemContainer.querySelector('h2').classList.remove('rolagem--d4');
    rolagemContainer.querySelector('h2').classList.remove('rolagem--d6');
    rolagemContainer.querySelector('h2').classList.remove('rolagem--d8');
    rolagemContainer.querySelector('h2').classList.remove('rolagem--d10');
    rolagemContainer.querySelector('h2').classList.remove('rolagem--d12');
    rolagemContainer.querySelector('h2').classList.remove('rolagem--d20');
    rolagemResultado.classList.remove('critico');
    rolagemResultado.classList.remove('fracasso');
}

document.addEventListener('DOMContentLoaded', ()=>{
    //botões da seção apresentação
    let dadosBtn = document.querySelectorAll('[data-dice]');

    dadosBtn.forEach(Element =>{
        Element.addEventListener('click',()=>{
            rolaUnicoDado(Element);
        })
    })

    //botões da seção atributos
    let atributoBtn = document.querySelectorAll('[data-rollAtributo]');

    atributoBtn.forEach(Element =>{
        Element.addEventListener('click',()=>{
            rolaAtributo(Element);
        })
    })

    //botões da seção pericias

    //botâo de fechar a rolagem
    let fecharRolagemBtn = document.getElementById('fechar__rolagem');
    fecharRolagemBtn.addEventListener('click', ()=>{
        fechaRolagem();
    })
})

//botões da seção apresentação (rola 1 dado do tipo específicado)
function rolaUnicoDado(dado){
    if(!rolagemContainer.classList.contains('hidden')){
        fechaRolagem();
        return;
    }

    let resultado = roll(dado.dataset.dice);

    rolagemExpressao.innerHTML = `1d${dado.dataset.dice}`;
    rolagemResultado.innerHTML = `${resultado}`;
}

//botões da seção atributos (rola o d20 e soma com o modificador do atributo especificado)
function rolaAtributo(atributo){
    if(!rolagemContainer.classList.contains('hidden')){
        fechaRolagem();
        return;
    }

    let modificador = document.querySelector(`[data-${atributo.dataset.rollatributo}]`).innerHTML;
    let d20Resultado = roll(20);

    rolagemExpressao.innerHTML = `1d20(${d20Resultado}) ${modificador}`;
    rolagemResultado.innerHTML = `${d20Resultado + parseInt(modificador)}`;
}
