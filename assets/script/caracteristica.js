const nomeCaracteristicaInput = document.getElementById('caracteristica__nome');
const fonteCaracteristicaInput = document.getElementById('caracteristica__fonte');
const descricaoCaracteristicaInput = document.getElementById('caracteristica__descricao');
const listaDeCaracteristicas = document.getElementById('lista__caracteristicas');
const addCaracteristicaBtn = document.getElementById('caracteristica--add');

addCaracteristicaBtn.addEventListener('click', () =>{
    if(nomeCaracteristicaInput.value != '' && fonteCaracteristicaInput.value != '' && descricaoCaracteristicaInput.value != ''){
        addCaracteristica(nomeCaracteristicaInput.value,fonteCaracteristicaInput.value,descricaoCaracteristicaInput.value);
    }
})

function addCaracteristica(nome, fonte, desc, setData){
    let caracteristica = document.createElement('li');
    let nomeDaCaracteristica = document.createElement('h3');
    let fonteDaCaracteristica = document.createElement('p');
    let descDaCaracteristica = document.createElement('p');
    let infoCaracteristicaBtn = document.createElement('button');
    let deletarCaracteristicaBtn = document.createElement('button');

    listaDeCaracteristicas.appendChild(caracteristica);
    caracteristica.classList.add('li__caracteristica');
    if(setData == 'setData'){
        caracteristica.setAttribute('data-fonte',`${fonte}`);
    }
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
