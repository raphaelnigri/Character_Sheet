const rolagemContainer = document.getElementById('rolagem__container');
const rolagemExpressao = document.getElementById('rolagem__expressao');
const rolagemResultado = document.getElementById('rolagem__resultado');
const rolagemCD = document.getElementById('rolagem__cd');

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
    rolagemContainer.focus();
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
    rolagemCD.innerHTML = ''
    rolagemResultado.innerHTML = ''
    rolagemExpressao.innerHTML = ''
}

document.addEventListener('DOMContentLoaded', ()=>{
    //fecha rolagem clicando fora dela
    rolagemContainer.addEventListener('blur',()=>{
        fechaRolagem();
    })

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

    //botao iniciativa da seção estatisticas
    let iniciativaBtn = document.getElementById('roll__iniciativa');
    iniciativaBtn.addEventListener('click',()=>{
        rolaIniciativa();
    })

    //botao resistir a morte da seção estatisticas
    let resistirMorteBtn = document.getElementById('morte__roll');
    resistirMorteBtn.addEventListener('click',()=>{
        resistirMorte();
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

//botao iniciativa da seção estatisticas (rola o d20 e soma modificador de dex e possiveis alteraçoes de iniciativa)
function rolaIniciativa(){
    if(!rolagemContainer.classList.contains('hidden')){
        fechaRolagem();
        return;
    }

    let iniciativa = document.getElementById('iniciativa');
    let d20Resultado = roll(20);
    let modificador = '';
    let sinal = '';

    if(iniciativa.value == ''){
        modificador = parseInt(iniciativa.placeholder);
    }else{
        modificador = parseInt(iniciativa.value);
    }

    if (modificador>=0){
        sinal = '+'
    }
    rolagemExpressao.innerHTML = `1d20(${d20Resultado}) ${sinal}${modificador}`;
    rolagemResultado.innerHTML = `${d20Resultado + modificador}`;

    ajustaRecursosAoRolarIniciativa();
}

//ajusta recursos baseados na rolagem de iniciativa
function ajustaRecursosAoRolarIniciativa(){

    //Inspiração Superior (bardo lvl 20)
    let bardInspiracaoQuantidade = document.querySelector('[data-recursoquantidade="bardo__inspiracao"]');
    let bardLvl = document.querySelector('[data-classe="bardo"]');

    if(bardLvl){
        if(bardLvl.parentNode.querySelector('[data-inputLvl]').value == 20 && bardInspiracaoQuantidade.value == 0){
            bardInspiracaoQuantidade.value = 1;
        }
    }
}


//botao resistir a morte da seção estatisticas (rola o d20, soma modificador de con, confere resultado e marca checkbox de acordo)
function resistirMorte(){
    if(!rolagemContainer.classList.contains('hidden')){
        fechaRolagem();
        return;
    }
    let pv = document.getElementById('pv__atual');
    let resultado = roll(20);
    let checkboxArray = document.querySelectorAll('[data-morte]');

    rolagemExpressao.innerHTML = `1d20`;
    rolagemResultado.innerHTML = `${resultado}`;
    
    if (resultado>=10){
        for (let index = 0; index < checkboxArray.length; index++) {
            const checkbox = checkboxArray[index];

            if(checkbox.dataset.morte == 'sucesso' && !checkbox.checked){
                checkbox.checked = true;
                rolagemCD.innerHTML = `CD10 – Sucesso!`;
                break;
            }
        }
    }
    if (resultado<10){
        for (let index = 0; index < checkboxArray.length; index++) {
            const checkbox = checkboxArray[index];

            if(checkbox.dataset.morte == 'fracasso' && !checkbox.checked){
                checkbox.checked = true;
                rolagemCD.innerHTML = `CD10 – Fracasso!`;
                break;
            }
        }
    }
    if (resultado==20){
        checkboxArray.forEach(checkbox =>{
            checkbox.checked = false;
            pv.value = 1;
        })
    }
}
