const metamagiaSelectLista = document.querySelectorAll('[data-metamagia__select]');
const metamagiaDescLista = document.querySelectorAll('[data-metamagia__desc]');
const metamagiaOptLista = document.querySelectorAll('[data-metamagia__opt]');

metamagiaSelectLista.forEach(element =>{
    element.addEventListener('input', ()=>{
        escolheMetamagia(element);
    })
})

function escolheMetamagia(seletor){
    limpaOpcoesDeMetamagia ();

    metamagiaDescLista.forEach(element =>{
        if(element.dataset.metamagia__desc == `${seletor.value}${seletor.dataset.metamagia__select}`){
            element.classList.remove('hidden');
        }
    })
    metamagiaOptLista.forEach(element =>{
        if(element.dataset.metamagia__opt == `${seletor.value}`){
            element.hidden = true;
        }
    })
}

function limpaOpcoesDeMetamagia (){
    metamagiaDescLista.forEach(element =>{
        if(element.dataset.metamagia__desc != `${metamagiaSelectLista[0].value}1` && element.dataset.metamagia__desc != `${metamagiaSelectLista[1].value}2` && element.dataset.metamagia__desc != `${metamagiaSelectLista[2].value}3` && element.dataset.metamagia__desc != `${metamagiaSelectLista[3].value}4`){
            element.classList.add('hidden');
        }
    });
    metamagiaOptLista.forEach(element =>{
        if(element.dataset.metamagia__opt != `${metamagiaSelectLista[0].value}` && element.dataset.metamagia__opt != `${metamagiaSelectLista[1].value}` && element.dataset.metamagia__opt != `${metamagiaSelectLista[2].value}` && element.dataset.metamagia__opt != `${metamagiaSelectLista[3].value}`){
            element.hidden = false;
        }
    });
}
