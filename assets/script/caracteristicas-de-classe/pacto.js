const pactoSelect = document.querySelector('[data-pacto__select]');
const pactoDescLista = document.querySelectorAll('[data-pacto__desc]');

pactoSelect.addEventListener('input', ()=>{
    pactoDescLista.forEach(element =>{
        if(element.dataset.pacto__desc == pactoSelect.value){
            element.classList.remove('hidden');
        } else{
            element.classList.add('hidden');
        }
    })
})
