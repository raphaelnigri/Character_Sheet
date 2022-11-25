const controle = document.querySelectorAll("[data-controle]");
const atributo = document.querySelectorAll("[data-atributo]");
const pontosSobrando = document.querySelector("[data-pointbuy]");

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
    if(atributo.value < 10){
        modifier.innerHTML = parseInt((atributo.value - 11)/2);
    } else{
        modifier.innerHTML = `+${parseInt((atributo.value - 10)/2)}`;
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
