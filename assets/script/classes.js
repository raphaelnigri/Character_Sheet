const addClassBtn = document.getElementById('class__btn--add');
const className = document.getElementById('class__nome');
const classLvl = document.getElementById('class__lvl');
const listaDeClasses = document.getElementById('lista__classes');
const lvlTotal = document.getElementById('char__lvl');
const bonusDeProficiencia = document.getElementById('bonusDeProficiencia');

classLvl.addEventListener('input', ()=>{
    if(classLvl.value > 20){
        classLvl.value = 20;
    }
})

addClassBtn.addEventListener('click', () =>{
    if(checaLimiteDeLvl(classLvl) && checaClasseRepetida(className.value) != 'repetido' && className.value != '' && classLvl.value != ''){
        addClass(className,classLvl);
        calculaLvlTotal();
        calculabonusDeProficiencia();
        calculaHitdice();
        classLvl.value = '';
    }
})

function addClass(nome,nivel){
    const novaClasse = document.createElement('li');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const del = document.createElement('button');
    const arquetipo = document.createElement('input');
    const custom = document.createElement('input');

    listaDeClasses.appendChild(novaClasse);
    novaClasse.setAttribute('data-classe',`${nome.value.toLowerCase()}`);
    novaClasse.classList.add('wrapper');
    
    if(nome.value == 'custom'){
        novaClasse.appendChild(custom);
        custom.classList.add('class__nome');
        custom.setAttribute('type','text');
        custom.setAttribute('placeholder','Nome da Classe...');
        custom.setAttribute('aria-label','Nome da Classe');
    } else{
        novaClasse.appendChild(label);
        label.classList.add('class__nome');
        label.setAttribute('for', `${nome.value.toLowerCase()}`);
        label.innerHTML = `${nome.value.toLowerCase()}:`;
    }

    novaClasse.appendChild(input);
    input.classList.add('class__input');
    input.classList.add('class__input--lvl');
    input.setAttribute('type','number');
    input.setAttribute('data-inputLvl','');
    if(nome.value != 'custom'){
        input.setAttribute('id',`${nome.value.toLowerCase()}`);
    }
    input.setAttribute('value',`${nivel.value}`);
    input.setAttribute('placeholder','lvl');
    input.setAttribute('aria-label','lvl');
    input.addEventListener('input', ()=>{
        if(input.value > 20){
            input.value = 20;
        };
        calculaLvlTotal();
        calculabonusDeProficiencia();
        calculaHitdice();
    });

    novaClasse.appendChild(del);
    del.classList.add('btn--remove');
    del.setAttribute('aria-label','Deleta classe.');
    del.addEventListener('click', ()=>{
        novaClasse.remove();
        calculaLvlTotal();
        calculabonusDeProficiencia();
        calculaHitdice();
    })

    novaClasse.appendChild(arquetipo);
    arquetipo.setAttribute('placeholder','Arquétipo...');
    arquetipo.setAttribute('aria-label','Insira seu arquétipo');
    arquetipo.setAttribute('type','Text');
    arquetipo.setAttribute('id',`${nome.value.toLowerCase()}__arquetipo`);
    arquetipo.classList.add('title--sub');
    arquetipo.classList.add('fonte__caracteristica');
    arquetipo.classList.add('arquetipo');
}

function checaClasseRepetida(nome){

    const lista = document.querySelectorAll('[data-classe]');
    var repetido = '';
    
    lista.forEach(element => {
        if(element.dataset.classe == nome && element.dataset.classe != 'custom'){
            repetido = 'repetido';
        }
    })
    return repetido;
}

function calculaLvlTotal(){
    let nivelDeClasses = 0;
    const lista = document.querySelectorAll('[data-classe]');
    
    lista.forEach(element => {
        let nivel = element.querySelector('[data-inputLvl]').value;
        nivelDeClasses += parseInt(nivel);
    })

    lvlTotal.innerHTML = nivelDeClasses;
}

function calculabonusDeProficiencia(){
    const baseDeCalculo =  parseInt(lvlTotal.innerHTML);

    if(isNaN(baseDeCalculo)){
        bonusDeProficiencia.innerHTML = `+2`;
    } else{
        bonusDeProficiencia.innerHTML = `+${2 + parseInt((baseDeCalculo - 1)/4)}`;
    }
}

function checaLimiteDeLvl(aumentoDeLvl){
    let lvlAtual = parseInt(lvlTotal.innerHTML);
    lvlAtual += parseInt(aumentoDeLvl.value);

    if(lvlAtual > 20){
        return false;
    }else{
        return true;
    }
}
