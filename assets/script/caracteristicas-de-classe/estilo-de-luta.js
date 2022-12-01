const estilo__guerreiro = document.getElementById('estilo__guerreiro');

estilo__guerreiro.addEventListener('input', ()=>{
    let options = document.querySelectorAll('[data-estilo__guerreiro]');
    options.forEach(element =>{
        element.classList.add('hidden');
    })

    options.forEach(element =>{
        if(element.dataset.estilo__guerreiro == `${estilo__guerreiro.value}`){
            element.classList.remove('hidden');
        }
    })
})
