const nomeCaracteristicaInput = document.getElementById('caracteristica__nome');
const fonteCaracteristicaInput = document.getElementById('caracteristica__fonte');
const descricaoCaracteristicaInput = document.getElementById('caracteristica__descricao');
const listaDeCaracteristicas = document.getElementById('caracteristicas__adicionaveis');
const addCaracteristicaBtn = document.getElementById('caracteristica--add');

let btninspecionar = document.querySelectorAll('[data-btn__caracteristica="inspecionar"]');
let btnEsconder = document.querySelectorAll('[data-btn__caracteristica="esconder"]');
document.addEventListener('DOMContentLoaded',()=>{


    addCaracteristicaBtn.addEventListener('click', () =>{
        if(nomeCaracteristicaInput.value != '' && fonteCaracteristicaInput.value != '' && descricaoCaracteristicaInput.value != ''){
            addCaracteristica(nomeCaracteristicaInput.value,fonteCaracteristicaInput.value,descricaoCaracteristicaInput.value);
        }
    });

    btninspecionar.forEach(element =>{
        element.addEventListener('click', () =>{
            element.parentNode.querySelector('.desc__caracteristica').classList.toggle('hidden');
        })
    });

    btnEsconder.forEach(element =>{
        element.addEventListener('click', () =>{
            element.parentNode.classList.add('hidden');
        })
    });
})

function addCaracteristica(nome, fonte, desc){
    let caracteristica = document.createElement('li');
    let nomeDaCaracteristica = document.createElement('h3');
    let fonteDaCaracteristica = document.createElement('p');
    let descDaCaracteristica = document.createElement('p');
    let infoCaracteristicaBtn = document.createElement('button');
    let deletarCaracteristicaBtn = document.createElement('button');

    listaDeCaracteristicas.appendChild(caracteristica);
    caracteristica.classList.add('li__caracteristica');
    caracteristica.appendChild(nomeDaCaracteristica);
    nomeDaCaracteristica.innerHTML = `${nome}`;
    nomeDaCaracteristica.classList.add('nome__caracteristica');

    caracteristica.appendChild(fonteDaCaracteristica);
    fonteDaCaracteristica.innerHTML = `${fonte}`;
    fonteDaCaracteristica.classList.add('title--sub');
    fonteDaCaracteristica.classList.add('fonte__caracteristica');

    caracteristica.appendChild(descDaCaracteristica);
    descDaCaracteristica.innerHTML = `${desc}`;
    descDaCaracteristica.classList.add('desc__caracteristica');

    caracteristica.appendChild(infoCaracteristicaBtn);
    infoCaracteristicaBtn.classList.add('btn--inspecionar');
    infoCaracteristicaBtn.classList.add('btn--inspecionar--caracteristica');
    infoCaracteristicaBtn.addEventListener('click', ()=>{
        descDaCaracteristica.classList.toggle('hidden');
    })

    caracteristica.appendChild(deletarCaracteristicaBtn);
    deletarCaracteristicaBtn.classList.add('btn--remove');
    deletarCaracteristicaBtn.classList.add('btn--remove--caracteristica');
    deletarCaracteristicaBtn.addEventListener('click', ()=>{
        caracteristica.remove();
    })

    nomeCaracteristicaInput.value = '';
    fonteCaracteristicaInput.value = '';
    descricaoCaracteristicaInput.value= '';
}

//Caracteristicas de classe
function defineCaracteristicas(){
    let caracteristicas = document.querySelectorAll('[data-caracteristica]');
    caracteristicas.forEach(element => {
        element.classList.add('hidden');
    });

    if(lvlTotal.innerHTML > 0){
        let classes = document.querySelectorAll('[data-classe]');

        classes.forEach(element => {
            let nivel = element.querySelector('[data-inputLvl]').value;
            let nome = element.dataset.classe

            for (let index = 0; index < parseInt(nivel)+1; index++) {
                let caracteristicasDeClasse = document.querySelectorAll(`[data-caracteristica="${nome}${index}"]`);
                    
                caracteristicasDeClasse.forEach(element =>{
                    element.classList.remove('hidden');
                })
            }
        })
    }
}
