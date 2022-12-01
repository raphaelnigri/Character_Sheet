const estilo__guerreiro = document.querySelector('[data-estilodeluta__select="guerreiro"]');
const estilo__paladino = document.querySelector('[data-estilodeluta__select="paladino"]');
const estilo__patrulheiro = document.querySelector('[data-estilodeluta__select="patrulheiro"]');

const estiloDescLista = document.querySelectorAll('[data-estilodeluta__desc]');
const estiloOptLista = document.querySelectorAll('[data-estilodeluta__opt]');

estilo__guerreiro.addEventListener('input', ()=>{
    escolheEstiloDeLuta(estilo__guerreiro);
})

estilo__paladino.addEventListener('input', ()=>{
    escolheEstiloDeLuta(estilo__paladino);
})

estilo__patrulheiro.addEventListener('input', ()=>{
    escolheEstiloDeLuta(estilo__patrulheiro);
})

function escolheEstiloDeLuta(seletor){
    limpaOpcoesEstiloDeLuta();

    estiloDescLista.forEach(element =>{
        if(element.dataset.estilodeluta__desc == `${seletor.value}__${seletor.dataset.estilodeluta__select}`){
            element.classList.remove('hidden');
        }
    })
    estiloOptLista.forEach(element =>{
        if(element.dataset.estilodeluta__opt == `${seletor.value}`){
            element.hidden = true;
        }
    })
}

function limpaOpcoesEstiloDeLuta(){
    estiloDescLista.forEach(element =>{
        if(element.dataset.estilodeluta__desc != `${estilo__guerreiro.value}__guerreiro` && element.dataset.estilodeluta__desc != `${estilo__paladino.value}__paladino` && element.dataset.estilodeluta__desc != `${estilo__patrulheiro.value}__patrulheiro`){
            element.classList.add('hidden');
        }
    });
    estiloOptLista.forEach(element =>{
        if(element.dataset.estilodeluta__opt != `${estilo__guerreiro.value}` && element.dataset.estilodeluta__opt != `${estilo__paladino.value}` && element.dataset.estilodeluta__opt != `${estilo__patrulheiro.value}`){
            element.hidden = false;
        }
    });
}