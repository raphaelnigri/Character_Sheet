const iventarioArrTitulos = document.querySelectorAll('[data-iventario__titulo]');
const iventarioArrBtns = document.querySelectorAll('[data-iventario__botao]');
const iventarioArrTextarea = document.querySelectorAll('[data-iventario]');

iventarioArrBtns.forEach(element=>{
    let nome = element.dataset.iventario__botao;

    element.addEventListener('click', ()=>{
        escondeTextarea(nome);
    })
})

function escondeTextarea(nome){
    iventarioArrTextarea.forEach(element => {
        if(element.dataset.iventario != `${nome}`){
            element.classList.add('hidden');
        } else{
            element.classList.remove('hidden');
        }
    });

    iventarioArrTitulos.forEach(element => {
        if(element.dataset.iventario__titulo != `${nome}`){
            element.classList.add('hidden');
        } else{
            element.classList.remove('hidden');
        }
    });

    iventarioArrBtns.forEach(element => {
        if(element.dataset.iventario__botao != `${nome}`){
            element.classList.add('off');
        } else{
            element.classList.remove('off');
        }
    });
}

//adicionando items



//calculo do peso
const peso = document.getElementById('peso')

function calculaPeso(){
    let pesoTotal = 0;

    peso.innerHTML = `Peso Total: ${pesoTotal}kg`;
}
