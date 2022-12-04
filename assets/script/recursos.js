const listaDeRecursos = document.getElementById('lista__recursos');
const addRecursoBtn = document.getElementById('recurso__btn--add');
const docRecursoQuantidade = document.querySelectorAll('[data-recursoquantidade]');

function limitaQuantidadeRecurso(recurso){
    let docRecursoTotal = parseInt(recurso.parentNode.querySelector('[data-recursototal]').value);

    if(parseInt(recurso.value) >= docRecursoTotal){
        recurso.value = docRecursoTotal;
    }
}

docRecursoQuantidade.forEach(element =>{
    element.addEventListener('input', ()=>{
        limitaQuantidadeRecurso(element);
    })
})

addRecursoBtn.addEventListener('click', () =>{
        addRecurso();
})

function addRecurso(){
    const recurso = document.createElement('li');
    const recursoLabel = document.createElement('label');
    const recursoTotal = document.createElement('input');
    const recursoQuantidade = document.createElement('input');
    const recursoNome = document.createElement('input');
    const recursoBtn = document.createElement('button');

    listaDeRecursos.appendChild(recurso);
    recurso.classList.add('li__recurso');

    recurso.appendChild(recursoLabel);
    recursoLabel.classList.add('total__label');
    recursoLabel.innerHTML = 'Total:';

    recursoLabel.appendChild(recursoTotal);
    recursoTotal.classList.add('caixa');
    recursoTotal.classList.add('caixa--recurso');
    recursoTotal.classList.add('caixa--total');
    recursoTotal.setAttribute('type','number');
    recursoTotal.setAttribute('data-recursototal','');
    recursoTotal.setAttribute('placeholder','0');

    recurso.appendChild(recursoQuantidade);
    recursoQuantidade.classList.add('caixa');
    recursoQuantidade.classList.add('caixa--recurso');
    recursoQuantidade.classList.add('caixa--quantidade');
    recursoQuantidade.setAttribute('type','number');
    recursoQuantidade.setAttribute('data-recursoquantidade','');
    recursoQuantidade.setAttribute('placeholder','0');
    recursoQuantidade.addEventListener('input', ()=>{
        limitaQuantidadeRecurso(recursoQuantidade);
    });

    recurso.appendChild(recursoNome);
    recursoNome.classList.add('title');
    recursoNome.classList.add('title--sub');
    recursoNome.classList.add('title--recurso__input');
    recursoNome.setAttribute('type','text');
    recursoNome.setAttribute('placeholder','Nome');

    recurso.appendChild(recursoBtn);
    recursoBtn.classList.add('btn--remove');
    recursoBtn.classList.add('btn--remove--recurso');
    recursoBtn.addEventListener('click', ()=>{
        recurso.remove();
    })
}
