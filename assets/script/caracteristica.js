const nomeCaracteristicaInput = document.getElementById('caracteristica__nome');
const fonteCaracteristicaInput = document.getElementById('caracteristica__fonte');
const descricaoCaracteristicaInput = document.getElementById('caracteristica__descricao');
const listaDeCaracteristicas = document.getElementById('lista__caracteristicas');
const addCaracteristicaBtn = document.getElementById('caracteristica--add');

addCaracteristicaBtn.addEventListener('click', () =>{
    if(nomeCaracteristicaInput.value != '' && fonteCaracteristicaInput.value != '' && descricaoCaracteristicaInput.value != ''){
        addCaracteristica(nomeCaracteristicaInput,fonteCaracteristicaInput,descricaoCaracteristicaInput);
    }
})

function addCaracteristica(nome, fonte, desc){
    const caracteristica = document.createElement('li');
    const nomeDaCaracteristica = document.createElement('h3');
    const fonteDaCaracteristica = document.createElement('p');
    const descDaCaracteristica = document.createElement('p');
    const infoCaracteristicaBtn = document.createElement('button');
    const deletarCaracteristicaBtn = document.createElement('button');

    listaDeCaracteristicas.appendChild(caracteristica);
    caracteristica.classList.add('li__caracteristica');

    caracteristica.appendChild(nomeDaCaracteristica);
    nomeDaCaracteristica.innerHTML = `${nome.value}`;
    nomeDaCaracteristica.classList.add('nome__caracteristica');

    caracteristica.appendChild(fonteDaCaracteristica);
    fonteDaCaracteristica.innerHTML = `${fonte.value}`;
    fonteDaCaracteristica.classList.add('title--sub');
    fonteDaCaracteristica.classList.add('fonte__caracteristica');

    caracteristica.appendChild(descDaCaracteristica);
    descDaCaracteristica.innerHTML = `${desc.value}`;
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
