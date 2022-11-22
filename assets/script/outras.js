//outras proficiencias
const proficiencia = document.getElementById('outras__prof');
const listaOutrasProf = document.getElementById('lista__outras');
const addProfBtn = document.getElementById('outras__prof--add');


addProfBtn.addEventListener('click', () =>{
    if(proficiencia.value != ''){
        addProficiencia(proficiencia);
    }
})

function addProficiencia(nome){
    const novaProf = document.createElement('li');
    const prof = document.createElement('p');
    const del = document.createElement('button');

    listaOutrasProf.appendChild(novaProf);
    novaProf.setAttribute('data-proficiencia',`${nome.value.toLowerCase()}`);
    novaProf.classList.add('wrapper');

    novaProf.appendChild(prof);
    prof.classList.add('outras__p');
    prof.classList.add('outras__p--prof');
    prof.innerHTML=`${nome.value}`;

    novaProf.appendChild(del);
    del.classList.add('btn--remove');
    del.setAttribute('aria-label','Deleta proficiência.');
    del.addEventListener('click', ()=>{
        novaProf.remove();
    })

    proficiencia.value = '';
}

//idiomas
const idioma = document.getElementById('idioma');
const listaIdiomas = document.getElementById('lista__idioma');
const addIdiomaBtn = document.getElementById('idioma--add');


addIdiomaBtn.addEventListener('click', () =>{
    if(idioma.value != ''){
        addIdioma(idioma);
    }
})

function addIdioma(nome){
    const novaProf = document.createElement('li');
    const prof = document.createElement('p');
    const del = document.createElement('button');

    listaIdiomas.appendChild(novaProf);
    novaProf.setAttribute('data-proficiencia',`${nome.value.toLowerCase()}`);
    novaProf.classList.add('wrapper');

    novaProf.appendChild(prof);
    prof.classList.add('outras__p');
    prof.classList.add('outras__p--idioma');
    prof.innerHTML=`${nome.value}`;

    novaProf.appendChild(del);
    del.classList.add('btn--remove');
    del.setAttribute('aria-label','Deleta proficiência.');
    del.addEventListener('click', ()=>{
        novaProf.remove();
    })

    idioma.value = '';
}

//ferramentas
const ferramenta = document.getElementById('ferramenta');
const listaFerramentas = document.getElementById('lista__ferramenta');
const addFerramentaBtn = document.getElementById('ferramenta--add');


addFerramentaBtn.addEventListener('click', () =>{
    if(ferramenta.value != ''){
        addFerramenta(ferramenta);
    }
})

function addFerramenta(nome){
    const novaProf = document.createElement('li');
    const prof = document.createElement('p');
    const label = document.createElement('label');
    const select = document.createElement('select');
    const optionStr = document.createElement('option');
    const optionDex = document.createElement('option');
    const optionCon = document.createElement('option');
    const optionInt = document.createElement('option');
    const optionWis = document.createElement('option');
    const optionCha = document.createElement('option');
    const del = document.createElement('button');
    const roll = document.createElement('button');

    listaFerramentas.appendChild(novaProf);
    novaProf.setAttribute('data-proficiencia',`${nome.value.toLowerCase()}`);
    novaProf.classList.add('wrapper');
    novaProf.classList.add('wrapper--ferramenta');

    novaProf.appendChild(prof);
    prof.classList.add('outras__p');
    prof.classList.add('outras__p--ferramenta');
    prof.innerHTML=`${nome.value}`;

    novaProf.appendChild(label);
    label.classList.add('label--ferramenta');
    label.setAttribute('for', `${nome.value.toLowerCase()}`);
    label.innerHTML = `Atribute:`;

    novaProf.appendChild(select);
    select.setAttribute('id', `${nome.value.toLowerCase()}`);
    select.classList.add('select--atribute');
    select.classList.add('cor__str');
    select.addEventListener('change', ()=>{
        trocaCorDoValor(select);
    })

    select.appendChild(optionStr);
    optionStr.classList.add('cor__str');
    optionStr.classList.add('pericia__label--atribute');
    optionStr.setAttribute('value', 'str');
    optionStr.innerHTML = 'For'

    select.appendChild(optionDex);
    optionDex.classList.add('cor__dex');
    optionDex.classList.add('pericia__label--atribute');
    optionDex.setAttribute('value', 'dex');
    optionDex.innerHTML = 'Des'

    select.appendChild(optionCon);
    optionCon.classList.add('cor__con');
    optionCon.classList.add('pericia__label--atribute');
    optionCon.setAttribute('value', 'con');
    optionCon.innerHTML = 'Con'

    select.appendChild(optionInt);
    optionInt.classList.add('cor__int');
    optionInt.classList.add('pericia__label--atribute');
    optionInt.setAttribute('value', 'int');
    optionInt.innerHTML = 'Int'

    select.appendChild(optionWis);
    optionWis.classList.add('cor__wis');
    optionWis.classList.add('pericia__label--atribute');
    optionWis.setAttribute('value', 'wis');
    optionWis.innerHTML = 'Sab'

    select.appendChild(optionCha);
    optionCha.classList.add('cor__cha');
    optionCha.classList.add('pericia__label--atribute');
    optionCha.setAttribute('value', 'cha');
    optionCha.innerHTML = 'Car'

    novaProf.appendChild(del);
    del.classList.add('btn--remove');
    del.classList.add('btn--ferramenta');
    del.setAttribute('aria-label','Deleta proficiência.');
    del.addEventListener('click', ()=>{
        novaProf.remove();
    })

    novaProf.appendChild(roll);
    roll.classList.add('roll');
    roll.classList.add('roll--ferramenta');
    roll.setAttribute('aria-label','Rolar ferramenta.');
    roll.addEventListener('click', ()=>{
        rollSelectAtribute();
    })

    ferramenta.value = '';
}

//muda a cor do select baseado no valor selecionado
function trocaCorDoValor(elemento){
    if(elemento.value == 'str'){
        elemento.classList.add('cor__str')
        elemento.classList.remove('cor__dex')
        elemento.classList.remove('cor__con')
        elemento.classList.remove('cor__int')
        elemento.classList.remove('cor__wis')
        elemento.classList.remove('cor__cha')
    }
    if(elemento.value == 'dex'){
        elemento.classList.remove('cor__str')
        elemento.classList.add('cor__dex')
        elemento.classList.remove('cor__con')
        elemento.classList.remove('cor__int')
        elemento.classList.remove('cor__wis')
        elemento.classList.remove('cor__cha')
    }
    if(elemento.value == 'con'){
        elemento.classList.remove('cor__str')
        elemento.classList.remove('cor__dex')
        elemento.classList.add('cor__con')
        elemento.classList.remove('cor__int')
        elemento.classList.remove('cor__wis')
        elemento.classList.remove('cor__cha')
    }
    if(elemento.value == 'int'){
        elemento.classList.remove('cor__str')
        elemento.classList.remove('cor__dex')
        elemento.classList.remove('cor__con')
        elemento.classList.add('cor__int')
        elemento.classList.remove('cor__wis')
        elemento.classList.remove('cor__cha')
    }
    if(elemento.value == 'wis'){
        elemento.classList.remove('cor__str')
        elemento.classList.remove('cor__dex')
        elemento.classList.remove('cor__con')
        elemento.classList.remove('cor__int')
        elemento.classList.add('cor__wis')
        elemento.classList.remove('cor__cha')
    }
    if(elemento.value == 'cha'){
        elemento.classList.remove('cor__str')
        elemento.classList.remove('cor__dex')
        elemento.classList.remove('cor__con')
        elemento.classList.remove('cor__int')
        elemento.classList.remove('cor__wis')
        elemento.classList.add('cor__cha')
    }
}

//rola o dado aplicando os bonus do atributo selecionado

function rollSelectAtribute(){
    console.log('função ainda não feita => outras.js')
}
