const metamagia1 = document.querySelector('[data-metamagia__select="1"]');
const metamagia2 = document.querySelector('[data-metamagia__select="2"]');
const metamagia3 = document.querySelector('[data-metamagia__select="3"]');
const metamagia4 = document.querySelector('[data-metamagia__select="4"]');
const metamagiaDescLista = document.querySelectorAll('[data-metamagia__desc]');
const metamagiaOptLista = document.querySelectorAll('[data-metamagia__opt]');

metamagia1.addEventListener('input', ()=>{
    escolheMetamagia(metamagia1);
})

metamagia2.addEventListener('input', ()=>{
    escolheMetamagia(metamagia2);
})

metamagia3.addEventListener('input', ()=>{
    escolheMetamagia(metamagia3);
})

metamagia4.addEventListener('input', ()=>{
    escolheMetamagia(metamagia4);
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
        if(element.dataset.metamagia__desc != `${metamagia1.value}1` && element.dataset.metamagia__desc != `${metamagia2.value}2` && element.dataset.metamagia__desc != `${metamagia3.value}3` && element.dataset.metamagia__desc != `${metamagia4.value}4`){
            element.classList.add('hidden');
        }
    });
    metamagiaOptLista.forEach(element =>{
        if(element.dataset.metamagia__opt != `${metamagia1.value}` && element.dataset.metamagia__opt != `${metamagia2.value}` && element.dataset.metamagia__opt != `${metamagia3.value}` && element.dataset.metamagia__opt != `${metamagia4.value}`){
            element.hidden = false;
        }
    });
}
