const controle = document.querySelectorAll("[data-controle]");
const atributo = document.querySelectorAll("[data-atributo]");
const pontosSobrando = document.querySelector("[data-pointbuy]");

const percepcaoPassiva = document.getElementById('percepcao__passiva');
const intuicaoPassiva = document.getElementById('intuicao__passiva');
const investigacaoPassiva = document.getElementById('investigacao__passiva');
const percepcaoProf = document.getElementById('percepcao');
const percepcaoExp = percepcaoProf.parentNode.querySelector('[data-pericia__expertise]');
const intuicaoProf = document.getElementById('intuicao');
const intuicaoExp = intuicaoProf.parentNode.querySelector('[data-pericia__expertise]');
const investigacaoProf = document.getElementById('investigacao');
const investigacaoExp = investigacaoProf.parentNode.querySelector('[data-pericia__expertise]');

//Configura o valor máximo e mínimo para os atributos e ajusta o modificador.
atributo.forEach( (elemento) => {

    ajustaModificador(elemento);
    calculaPontos();

    elemento.addEventListener('blur', (evento) => {
        if(evento.target.value > 20 ){
            evento.target.value = 20;
        } 
        if(evento.target.value < 3 ){
            evento.target.value = 3;
        }
    })

    elemento.addEventListener('change', (evento) => {
        ajustaModificador(evento.target);
        calculaPontos();
    })
})

//Subtrai e soma os atributos e ajusta o modificador.
controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        let atributo = evento.target.parentNode.querySelector("[data-atributo]");
        manipulaAtributo(evento.target, atributo);
    })
})

function manipulaAtributo(botao, atributo){
    if(botao.dataset.controle == '+' && atributo.value <= 19){
        atributo.value = parseInt(atributo.value) + 1;
        ajustaModificador(atributo);
        calculaPontos();
    }if(botao.dataset.controle == '-' && atributo.value >= 4){
        atributo.value = parseInt(atributo.value) - 1;
        ajustaModificador(atributo);
        calculaPontos();
    }
}

function ajustaModificador(atributo){
    let modifier = document.querySelector(`[data-${atributo.dataset.atributo}]`);
    if(atributo.value > 20){
        atributo.value = 20
    }
    if(atributo.value < 3){
        atributo.value = 3
    }

    if(atributo.value < 10){
        modifier.innerHTML = parseInt((atributo.value - 11)/2);
        calculaEstatisticasDex();
        calculaEstatisticasCha();
        calculaPericiasPassivas();
        calculaPv();
    } else{
        modifier.innerHTML = `+${parseInt((atributo.value - 10)/2)}`;
        calculaEstatisticasDex();
        calculaEstatisticasCha();
        calculaPericiasPassivas();
        calculaPv();
    }
}

function calculaPontos(){
    let custoTotal = 0;
    atributo.forEach( (elemento) => {
        let atributo = parseInt(elemento.value)

        if(atributo<=13 && atributo>=8){
            custoTotal += atributo - 8
        }
        if(atributo==14){
            custoTotal += atributo - 7
        }
        if(atributo==15){
            custoTotal += atributo - 6
        }
        if(atributo>15||atributo<8){
            custoTotal = 'invalid';
        }
    })
    if(isNaN(custoTotal)){
        pontosSobrando.innerHTML = `Pontos sobrando: Atributo inválido`;
    } else{
        pontosSobrando.innerHTML = `Pontos sobrando: ${27 - custoTotal}`;
    }
}

//estatisticas e pericias passivas
document.addEventListener('DOMContentLoaded', ()=>{
    calculaEstatisticasDex();
    calculaPericiasPassivas();

    percepcaoProf.addEventListener('input', ()=>{
        calculaPericiasPassivas();
    })

    percepcaoExp.addEventListener('input', ()=>{
        calculaPericiasPassivas();
    })

    intuicaoProf.addEventListener('input', ()=>{
        calculaPericiasPassivas();
    })

    intuicaoExp.addEventListener('input', ()=>{
        calculaPericiasPassivas();
    })

    investigacaoProf.addEventListener('input', ()=>{
        calculaPericiasPassivas();
    })

    investigacaoExp.addEventListener('input', ()=>{
        calculaPericiasPassivas();
    })
})

function calculaPericiasPassivas(){
    let modInt = parseInt(document.querySelector('[data-int]').innerHTML);
    let modWis = parseInt(document.querySelector('[data-wis]').innerHTML);
    
    percepcaoPassiva.placeholder = 10 + modWis;
    if(percepcaoProf.checked && !percepcaoExp.checked){
        percepcaoPassiva.placeholder = 10 + modWis + parseInt(bonusDeProficiencia.innerHTML);
    }
    if(percepcaoProf.checked && percepcaoExp.checked || !percepcaoProf.checked && percepcaoExp.checked){
        percepcaoPassiva.placeholder = 10 + modWis + (parseInt(bonusDeProficiencia.innerHTML)*2);
    }

    intuicaoPassiva.placeholder = 10 + modWis;
    if(intuicaoProf.checked && !intuicaoExp.checked){
        intuicaoPassiva.placeholder = 10 + modWis + parseInt(bonusDeProficiencia.innerHTML);
    }
    if(intuicaoProf.checked && intuicaoExp.checked || !intuicaoProf.checked && intuicaoExp.checked){
        intuicaoPassiva.placeholder = 10 + modWis + (parseInt(bonusDeProficiencia.innerHTML)*2);
    }

    investigacaoPassiva.placeholder = 10 + modInt;
    if(investigacaoProf.checked && !investigacaoExp.checked){
        investigacaoPassiva.placeholder = 10 + modInt + parseInt(bonusDeProficiencia.innerHTML);
    }
    if(investigacaoProf.checked && investigacaoExp.checked || !investigacaoProf.checked && investigacaoExp.checked){
        investigacaoPassiva.placeholder = 10 + modInt + (parseInt(bonusDeProficiencia.innerHTML)*2);
    }
}

function calculaEstatisticasDex(){
    let modDex = parseInt(document.querySelector('[data-dex]').innerHTML);
    let classeDeArmadura = document.getElementById('ca');
    let iniciativa = document.getElementById('iniciativa');

    iniciativa.placeholder = modDex;
    classeDeArmadura.placeholder = 10 + modDex;
}

function calculaEstatisticasCha(){
    let modCha = parseInt(document.querySelector('[data-cha]').innerHTML);

    let bardInspiracaoTotal = document.querySelector('[data-recursototal="bardo__inspiracao"]');
    let paladinToquePurificanteTotal = document.querySelector('[data-recursototal="paladino__purificante"]');
    
    if(modCha >= 1){
        bardInspiracaoTotal.value = modCha;
        paladinToquePurificanteTotal.value = modCha;
    } else{
        bardInspiracaoTotal.value = 1;
        paladinToquePurificanteTotal.value = 1;
    }
}
