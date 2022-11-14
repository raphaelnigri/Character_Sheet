const addClassBtn = document.getElementById('class__btn--add');
const className = document.getElementById('class__nome');
const classLvl = document.getElementById('class__lvl');
const listaDeClasses = document.getElementById('lista__classes');
const lvlTotal = document.getElementById('char__lvl');
const proficiencia = document.getElementById('proficiencia');

addClassBtn.addEventListener('click', () =>{

    if(checaLimiteDeLvl(classLvl) && checaClasseRepetida(className.value) != 'repetido' && className.value != '' && classLvl.value != ''){
        addClass(className,classLvl);
        calculaLvlTotal();
        calculaProficiencia();
        className.value = '';
        classLvl.value = '';
    }
})

function addClass(nome,nivel){
    const novaClasse = document.createElement('li');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const del = document.createElement('button');

    listaDeClasses.appendChild(novaClasse);
    novaClasse.setAttribute('data-classe',`${nome.value}`);
    novaClasse.classList.add('class__wrapper--classe');
    
    novaClasse.appendChild(label);
    label.classList.add('class__label');
    label.setAttribute('for', `${nome.value}`);
    label.innerHTML = `${nome.value}:`;

    novaClasse.appendChild(input);
    input.classList.add('class__input');
    input.classList.add('class__input--lvl');
    input.setAttribute('type','number');
    input.setAttribute('id',`${nome.value}`);
    input.setAttribute('value',`${nivel.value}`);
    input.setAttribute('placeholder','_____');
    input.setAttribute('aria-label','lvl');
    input.addEventListener('input', ()=>{
        calculaLvlTotal();
        calculaProficiencia();
    });
    
    novaClasse.appendChild(del);
    del.classList.add('btn--remove');
    del.setAttribute('aria-label','Deleta classe.');
    del.addEventListener('click', ()=>{
        novaClasse.remove();
        calculaLvlTotal();
        calculaProficiencia();
    })
}

function checaClasseRepetida(nome){

    const lista = document.querySelectorAll('[data-classe]');
    var repetido = '';
    
    lista.forEach(element => {
        if(element.dataset.classe == nome){
            repetido = 'repetido';
        }
    })
    return repetido;
}

function calculaLvlTotal(){
    let nivelDeClasses = 0;
    const lista = document.querySelectorAll('[data-classe]');
    
    lista.forEach(element => {
        let nivel = element.querySelector('input').value;
        nivelDeClasses += parseInt(nivel);
    })

    lvlTotal.innerHTML = nivelDeClasses;
}

function calculaProficiencia(){
    const baseDeCalculo =  parseInt(lvlTotal.innerHTML);

    if(isNaN(baseDeCalculo)){
        proficiencia.innerHTML = `+2`;
    } else{
        proficiencia.innerHTML = `+${2 + parseInt((baseDeCalculo - 1)/4)}`;
    }
}

function checaLimiteDeLvl(aumentoDeLvl){
    let lvlAtual = parseInt(lvlTotal.innerHTML);
    lvlAtual += parseInt(aumentoDeLvl.value);

    if(lvlAtual > 20){
        return;
    }else{
        return true;
    }
}
