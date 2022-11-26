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
    let atributoBtn = document.querySelectorAll('[data-rollatributo]');

    atributoBtn.forEach(Element =>{
        Element.addEventListener('click',()=>{
            rolaAtributo(Element);
        })
    })

    //botões da seção pericias
    let periciaBtn = document.querySelectorAll('[data-rollpericia]');

    periciaBtn.forEach(Element =>{
        Element.addEventListener('click',()=>{
            rolaPericia(Element);
        })
    })

    //botões da seção saves
    let savesBtn = document.querySelectorAll('[data-roll__save]');

    savesBtn.forEach(Element =>{
        Element.addEventListener('click',()=>{
            rolaSave(Element);
        })
    })

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

//botões da seção pericias (rola o d20, soma proficiencia, expecialização e modificador do atributo correspondente)
function rolaPericia(pericia){
    if(!rolagemContainer.classList.contains('hidden')){
        fechaRolagem();
        return;
    }

    let prof = pericia.parentNode.querySelector('[data-pericia__proficiencia]');
    let exp = pericia.parentNode.querySelector('[data-pericia__expertise]');
    let modificador = document.querySelector(`[data-${pericia.dataset.rollpericia}]`).innerHTML;
    let d20Resultado = roll(20);

    if(!prof.checked && !exp.checked){
        rolagemExpressao.innerHTML = `1d20(${d20Resultado}) ${modificador}`;
        rolagemResultado.innerHTML = `${d20Resultado + parseInt(modificador)}`;
    }

    if(prof.checked && !exp.checked){
        rolagemExpressao.innerHTML = `1d20(${d20Resultado}) ${modificador} ${bonusDeProficiencia.innerHTML}`;
        rolagemResultado.innerHTML = `${d20Resultado + parseInt(modificador) + parseInt(bonusDeProficiencia.innerHTML)}`;
    }

    if(prof.checked && exp.checked || !prof.checked && exp.checked){
        rolagemExpressao.innerHTML = `1d20(${d20Resultado}) ${modificador} +${parseInt(bonusDeProficiencia.innerHTML)*2}`;
        rolagemResultado.innerHTML = `${d20Resultado + parseInt(modificador) + parseInt(bonusDeProficiencia.innerHTML)*2}`;
    }
}

//botões da seção saves (rola o d20, soma proficiencia e modificador do atributo correspondente)
function rolaSave(save){
    if(!rolagemContainer.classList.contains('hidden')){
        fechaRolagem();
        return;
    }

    let prof = save.parentNode.querySelector('[data-save__prof]');
    let modificador = document.querySelector(`[data-${save.dataset.roll__save}]`).innerHTML;
    let d20Resultado = roll(20);

    if(prof.checked){
        rolagemExpressao.innerHTML = `1d20(${d20Resultado}) ${modificador} ${bonusDeProficiencia.innerHTML}`;
        rolagemResultado.innerHTML = `${d20Resultado + parseInt(modificador) + parseInt(bonusDeProficiencia.innerHTML)}`;
    } else{
        rolagemExpressao.innerHTML = `1d20(${d20Resultado}) ${modificador}`;
        rolagemResultado.innerHTML = `${d20Resultado + parseInt(modificador)}`;
    }
}
